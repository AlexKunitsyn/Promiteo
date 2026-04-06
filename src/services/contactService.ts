export interface ContactFormPayload {
    firstName: string;
    lastName: string;
    phone: string;
    email: string;
    message: string;
}

export interface ContactResponse {
    success: boolean;
    message?: string;
}

export const sendContactForm = async (
    data: ContactFormPayload
): Promise<ContactResponse> => {
    const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(data),
    });

    const result = await response.json();

    if (!response.ok) {
        throw new Error(result.message || 'Failed to send message');
    }

    return result;
};