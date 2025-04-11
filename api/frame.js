import { VercelRequest, VercelResponse } from "@vercel/node";

export default function handler(req: VercelRequest, res: VercelResponse) {
    res.status(200).json({
        frames: [
            {
                image: "https://play-lh.googleusercontent.com/ETByWAKTp9cQS-YA3z4dnGKRFs_Uwmvz2d8uhOzMDIeLAIfXtIvzqirh7OhLH8wpZJDN", 
                buttons: [
                    { label: "Converter", action: "link", target: "https://warpcast-unit-converter.vercel.app" }
                ]
            }
        ]
    });
}
