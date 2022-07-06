// stackoverflow.com/questions/64249720/how-to-deploy-next-js-9-to-aws-lambda-without-using-serverless-components
//* lambda env provides aws-sdk
// eslint-disable-next-line import/no-extraneous-dependencies
const AWS = require("aws-sdk");
const map = require("lodash/map");
const some = require("lodash/some");
const next = require("next");
const serverless = require("serverless-http");
const { parse } = require("url");

const { REACT_PATHS } = require("market-webapp-commons");

const s3 = new AWS.S3();

const isDevelopment = process.env.NODE_ENV !== "production";

const app = next({
  dev: false,
});
const nextRequestHandler = app.getRequestHandler();
const requestHandlerImpl = serverless(
  async (req, res) => {
    const parsedUrl = parse(req.url, true);
    await nextRequestHandler(req, res, parsedUrl);
  },
  {
    binary: (headers) =>
      (headers["content-type"] &&
        !headers["content-type"].match(/(text\/.*|.*script.*|.*css.*)/g)) ||
      ["br", "compress", "deflate", "gzip"].includes(
        headers["content-encoding"]
      ),
  }
);

exports.handler = async (event, context) => {
  //* runs on server
  // eslint-disable-next-line no-console
  if (isDevelopment) console.debug(JSON.stringify({ event, context }));

  if (Object.keys(event).length === 0) {
    return "";
  }

  if (some(map(REACT_PATHS, (baseUrl) => event.rawPath.startsWith(baseUrl)))) {
    const params = {
      Bucket: process.env.RX_BUCKET_NAME,
      Key: "index.html",
    };
    const s3Response = await s3.getObject(params).promise();
    if (isDevelopment) {
      //* runs on server
      // eslint-disable-next-line no-console
      console.debug(
        JSON.stringify({
          statusCode: 200,
          headers: { "Content-Type": "text/html" },
          body: s3Response.Body,
        })
      );
    }
    return {
      statusCode: 200,
      headers: {
        "content-type": "text/html",
        "cache-control": "public, max-age=300",
      },
      body: s3Response.Body.toString(),
    };
  }

  const nextJsResponse = await requestHandlerImpl(event, context);
  if (event.rawPath.startsWith("/_next")) {
    nextJsResponse.headers["cache-control"] = "public, max-age=31536000";
  }

  //* runs on server
  // eslint-disable-next-line no-console
  if (isDevelopment) console.debug(JSON.stringify(nextJsResponse));
  return nextJsResponse;
};
