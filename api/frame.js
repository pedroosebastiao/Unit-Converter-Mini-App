export default function handler(req, res) {
  res.setHeader("Content-Type", "application/json");
  res.setHeader("Access-Control-Allow-Origin", "*");

  res.json({
    "frames": [
      {
        "image": "https://warpcast-unit-converter.vercel.app/preview.png",
        "post_url": "https://warpcast-unit-converter.vercel.app",
        "buttons": [
          { "text": "Convert Now", "action": "post" }
        ]
      }
    ]
  });
}
