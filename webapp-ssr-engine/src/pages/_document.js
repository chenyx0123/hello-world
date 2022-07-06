// Head better to sit here

/* eslint no-underscore-dangle: ["error", { "allow": ["__getInlineStyles"] }] */

/* eslint-disable max-classes-per-file */
import * as React from "react";

import Document, { Head, Html, Main, NextScript } from "next/document";

import createEmotionServer from "@emotion/server/create-instance";
import fs from "fs";
import path from "path";

import { distDir } from "../../next.config";
import createEmotionCache from "../createEmotionCache";

// https://stackoverflow.com/questions/57057947/how-to-inline-css-in-the-head-tag-of-a-nextjs-project
class InlineStylesHead extends Head {
  getCssLinks(files) {
    return [
      ...InlineStylesHead.__getInlineStyles(files.allFiles),
      ...super.getCssLinks(files),
    ];
  }

  static __getInlineStyles(files) {
    if (!files || files.length === 0) return null;

    return files
      .filter((file) => /\.css$/.test(file))
      .map((file) => (
        <style
          key={file}
          data-href={`/_next/${file}`}
          // eslint-disable-next-line react/no-danger
          dangerouslySetInnerHTML={{
            __html: fs.readFileSync(
              path.join(process.cwd(), distDir ?? ".next", file),
              "utf-8"
            ),
          }}
        />
      ));
  }
}

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    // https://github.com/mui-org/material-ui/tree/285e72875b9e7c9d6fc7303ccd54f0db16a4160d/examples/nextjs/

    // Resolution order
    //
    // On the server:
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. document.getInitialProps
    // 4. app.render
    // 5. page.render
    // 6. document.render
    //
    // On the server with error:
    // 1. document.getInitialProps
    // 2. app.render
    // 3. page.render
    // 4. document.render
    //
    // On the client
    // 1. app.getInitialProps
    // 2. page.getInitialProps
    // 3. app.render
    // 4. page.render

    const originalRenderPage = ctx.renderPage;

    // You can consider sharing the same emotion cache between all the SSR requests to speed up performance.
    // However, be aware that it can have global side effects.
    const cache = createEmotionCache();
    const { extractCriticalToChunks } = createEmotionServer(cache);

    ctx.renderPage = () =>
      originalRenderPage({
        enhanceApp: (App) => (props) => <App emotionCache={cache} {...props} />,
      });

    const initialProps = await Document.getInitialProps(ctx);
    // This is important. It prevents emotion to render invalid HTML.
    // See https://github.com/mui-org/material-ui/issues/26561#issuecomment-855286153
    const emotionStyles = extractCriticalToChunks(initialProps.html);
    const emotionStyleTags = emotionStyles.styles.map((style) => (
      <style
        data-emotion={`${style.key} ${style.ids.join(" ")}`}
        key={style.key}
        //* framework code required to inject correct css
        // eslint-disable-next-line react/no-danger
        dangerouslySetInnerHTML={{ __html: style.css }}
      />
    ));

    return {
      ...initialProps,
      // Styles fragment is rendered after the app and page rendering finish.
      styles: [
        ...React.Children.toArray(initialProps.styles),
        ...emotionStyleTags,
      ],
    };
  }

  render() {
    return (
      <Html lang="zh-Hant-HK">
        {process.env.NODE_ENV === "production" ? (
          <InlineStylesHead />
        ) : (
          <Head />
        )}
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    );
  }
}
