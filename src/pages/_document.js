import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="en">
      <Head />
      <link
        rel="stylesheet"
        href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.3/dist/css/bootstrap.min.css"
        integrity="sha384-rbsA2VBKQhggwzxH7pPCaAqO46MgnOM80zW1RWuH61DGLwZJEdK2Kadq2F9CUG65"
        crossorigin="anonymous"
      />
      <link
        rel="icon"
        href="https://www.zarla.com/images/zarla-benjivet-1x1-2400x2400-20211217-ytr7mb8jqcwv3xqc47vf.png?crop=1:1,smart&width=250&dpr=2"
      />
      <title>AmeVet</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
