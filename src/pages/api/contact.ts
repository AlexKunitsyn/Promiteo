import type { NextApiRequest, NextApiResponse } from "next";

type ApiResponse =
    | { ok: true; message: string }
    | { ok: false; error: string };

export default function handler(req: NextApiRequest, res: NextApiResponse<ApiResponse>) {
    if (req.method !== "POST") {
        return res.status(405).json({ ok: false, error: "Method not allowed" });
    }

    // пока просто эхо-ответ (никаких писем)
    return res.status(200).json({ ok: true, message: "API is working" });
}