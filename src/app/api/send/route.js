import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);
const adminEmail = process.env.FROM_EMAIL;

export async function POST(req) {
  try {
    const { email, subject, message } = await req.json(); // Correctly parse the request body
    console.log(email, subject, message)
    const data = await resend.emails.send({
      from: 'onboarding@resend.dev',
      to: [adminEmail, email],
      subject: subject,
      react: (
        <>
          <h2>{subject}</h2>
          <p>Thank you for contacting us!</p>
          <p>New message submitted.</p>
          <p>{message}</p>
        </>
      )
    });
    console.log(data)

    return new Response(JSON.stringify({ success: true, data }), {
      status: 200,
      headers: { 'Content-Type': 'application/json' },
    });
  } catch (error) {
    return new Response(JSON.stringify({ success: false, error: error.message }), {
      status: 500,
      headers: { 'Content-Type': 'application/json' },
    });
  }
}
