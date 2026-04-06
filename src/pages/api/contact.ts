import { NextApiRequest, NextApiResponse } from 'next';
// @ts-ignore
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

type ResponseData = {
    success: boolean;
    message?: string;
};

export default async function handler(
    req: NextApiRequest,
    res: NextApiResponse<ResponseData>
) {
    // @ts-ignore
    if (req.method !== 'POST') {
        return res.status(405).json({
            success: false,
            message: 'Method not allowed',
        });
    }

    try {
        const { firstName, lastName, phone, email, message } = req.body;

        if (!firstName || !lastName || !phone || !email || !message) {
            return res.status(400).json({
                success: false,
                message: 'All fields are required',
            });
        }

        const fullName = `${firstName} ${lastName}`;

        const { error } = await resend.emails.send({
            from: 'Promiteo Contact <onboarding@resend.dev>',
            to: process.env.CONTACT_TO_EMAIL as string,
            subject: `New contact form message from ${fullName}`,
            replyTo: email,
            html: `
        <h2>New contact form message</h2>
        <p><strong>First name:</strong> ${escapeHtml(firstName)}</p>
        <p><strong>Last name:</strong> ${escapeHtml(lastName)}</p>
        <p><strong>Phone:</strong> ${escapeHtml(phone)}</p>
        <p><strong>Email:</strong> ${escapeHtml(email)}</p>
        <p><strong>Message:</strong></p>
        <p>${escapeHtml(message).replace(/\n/g, '<br />')}</p>
      `,
        });

        if (error) {
            console.error('Resend error:', error);

            return res.status(500).json({
                success: false,
                message: 'Failed to send email',
            });
        }

        return res.status(200).json({
            success: true,
            message: 'Message sent successfully',
        });
    } catch (error) {
        console.error('API contact error:', error);

        return res.status(500).json({
            success: false,
            message: 'Something went wrong',
        });
    }
}

function escapeHtml(value: string): string {
    return value
        .replace(/&/g, '&amp;')
        .replace(/</g, '&lt;')
        .replace(/>/g, '&gt;')
        .replace(/"/g, '&quot;')
        .replace(/'/g, '&#039;');
}