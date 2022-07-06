// https://github.com/vercel/next.js/issues/18393 static size shit

const fs = require("fs");
const sizeOf = require("image-size");
const _ = require("lodash");
const path = require("path");

const getAllFiles = (dirPath, arrayOfFiles) => {
  files = fs.readdirSync(dirPath);

  arrayOfFiles = arrayOfFiles || [];

  files.forEach((file) => {
    if (fs.statSync(dirPath + "/" + file).isDirectory()) {
      arrayOfFiles = getAllFiles(dirPath + "/" + file, arrayOfFiles);
    } else {
      arrayOfFiles.push(path.join(dirPath, "/", file).replace(/\\/g, "/"));
    }
  });

  return arrayOfFiles;
};

const suffixes = [".png", ".jpg", ".svg"];
const suffixFilter = (filename) => {
  return _.some(suffixes, (s) => filename.endsWith(s));
};

const compiledImageSizes = _(getAllFiles("./public"))
  .filter(suffixFilter)
  .map((url) => {
    const idx = url.lastIndexOf(".");
    return {
      url: `static/media/${url.slice(0, idx)}${url.slice(idx)}`,
      ...sizeOf(url),
    };
  })
  .keyBy("url")
  .mapValues(({ width, height }) => ({ width, height }))
  .value();

let data = JSON.stringify(compiledImageSizes);
fs.mkdirSync(".storybook/cache", { recursive: true });
fs.writeFileSync(".storybook/cache/image-dimension.json", data);
