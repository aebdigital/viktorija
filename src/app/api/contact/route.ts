import { NextResponse } from "next/server";

export async function POST(request: Request) {
    try {
        const { name, email, phone, message } = await request.json();

        // Validate required fields
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: "Meno, email a správa sú povinné polia." },
                { status: 400 }
            );
        }

        const apiKey = process.env.SMTP2GO_API_KEY;
        const recipient = process.env.CONTACT_FORM_RECIPIENT;
        const sender = process.env.SMTP2GO_SENDER;

        if (!apiKey || !recipient || !sender) {
            console.error("Missing SMTP2GO configuration variables.");
            return NextResponse.json(
                { error: "Konfigurácia e-mailového odosielateľa chýba." },
                { status: 500 }
            );
        }

        const payload = {
            api_key: apiKey,
            sender: sender,
            to: [recipient],
            subject: `Nová správa z kontaktného formulára od: ${name}`,
            text_body: `Nová kontaktná správa z webu:\n\nMeno: ${name}\nEmail: ${email}\nTelefón: ${phone || "Neuvedené"}\n\nSpráva:\n${message}`,
            html_body: `
                <h3>Nová kontaktná správa z webu</h3>
                <p><strong>Meno:</strong> ${name}</p>
                <p><strong>Email:</strong> <a href="mailto:${email}">${email}</a></p>
                <p><strong>Telefón:</strong> ${phone || "<em>Neuvedené</em>"}</p>
                <br />
                <p><strong>Správa:</strong></p>
                <p style="white-space: pre-line; background-color: #f9f9f9; padding: 15px; border-left: 4px solid #b68d57; border-radius: 4px;">${message}</p>
            `,
            custom_headers: [
                {
                    header: "Reply-To",
                    value: `${name} <${email}>`
                }
            ]
        };

        const response = await fetch("https://api.smtp2go.com/v3/email/send", {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(payload),
        });

        const data = await response.json();

        if (!response.ok || data.data?.error) {
            console.error("SMTP2GO send error:", data);
            return NextResponse.json(
                { error: "Chyba pri odosielaní e-mailu." },
                { status: 500 }
            );
        }

        return NextResponse.json({ success: true });
    } catch (error) {
        console.error("Contact API error:", error);
        return NextResponse.json(
            { error: "Interná chyba servera." },
            { status: 500 }
        );
    }
}
