import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({
        frames: [
            {
                image: "https://warpcast-unit-converter.vercel.app/cover.png", 
                buttons: [
                    { label: "Converter", action: "link", target: "https://warpcast-unit-converter.vercel.app" }
                ]
            }
        ]
    });
}
