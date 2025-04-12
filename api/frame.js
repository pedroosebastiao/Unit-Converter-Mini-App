export default async function handler(req, res) {
  res.setHeader("Content-Type", "text/html");
  res.status(200).send(`
    <html>
      <head>
        <meta property="og:title" content="Conversion Complete!" />
        <meta property="og:image" content="https://warpcast-unit-converter.vercel.app/preview.png" />
        <meta property="fc:frame" content="vNext" />
        <meta property="fc:frame:button:1" content="Convert Again" />
        <meta property="fc:frame:post_url" content="https://warpcast-unit-converter.vercel.app/api/frame" />
      </head>
    </html>
  `);
}
