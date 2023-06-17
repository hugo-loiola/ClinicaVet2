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
        href="https://media.discordapp.net/attachments/986769752653434981/1119407200713048254/minhalogo.png"
      />
      <title>AmeVet</title>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
