import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({
        frames: [
            {
                image: "https://i.imgur.com/5OCaQzD.jpeg", 
                buttons: [
                    { label: "Converter", action: "link", target: "https://warpcast-unit-converter.vercel.app" }
                ]
            }
        ]
    });
}
