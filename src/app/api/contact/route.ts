// import { NextResponse } from 'next/server'

// type Body = {
//   firstName?: string
//   lastName?: string
//   email?: string
//   country?: string
//   message?: string
// }

// export async function POST(req: Request) {
//   const accessKey = process.env.WEB3FORMS_ACCESS_KEY
//   if (!accessKey) {
//     return NextResponse.json(
//       { success: false, error: 'Contact form is not configured.' },
//       { status: 500 },
//     )
//   }

//   try {
//     const { firstName, lastName, email, country, message } =
//       (await req.json()) as Body

//     if (!firstName?.trim() || !lastName?.trim() || !email?.trim() || !message?.trim()) {
//       return NextResponse.json(
//         { success: false, error: 'Please fill in all required fields.' },
//         { status: 400 },
//       )
//     }

//     const name = `${firstName} ${lastName}`.trim()
//     const fullMessage = [country?.trim() && `Country: ${country}`, `Message:\n${message}`]
//       .filter(Boolean)
//       .join('\n\n')

//     const web3Res = await fetch('https://api.web3forms.com/submit', {
//       method: 'POST',
//       headers: { 'Content-Type': 'application/json' },
//       body: JSON.stringify({
//         access_key: accessKey,
//         subject: `New Project Inquiry from ${name}`,
//         name,
//         email,
//         message: fullMessage,
//       }),
//     })

//     const data = (await web3Res.json()) as { success?: boolean; message?: string }

//     if (!web3Res.ok || !data.success) {
//       return NextResponse.json(
//         { success: false, error: data.message ?? 'Could not send. Try again later.' },
//         { status: 502 },
//       )
//     }

//     return NextResponse.json({ success: true })
//   } catch {
//     return NextResponse.json(
//       { success: false, error: 'Could not send. Try again later.' },
//       { status: 500 },
//     )
//   }
// }


import { Resend } from 'resend'
import { NextResponse } from 'next/server'

const resend = new Resend(process.env.RESEND_API_KEY)

function escapeHtml(s: string) {
  return s
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
}

export async function POST(req: Request) {
  const apiKey = process.env.RESEND_API_KEY
  if (!apiKey) {
    return NextResponse.json(
      { success: false, error: 'Missing RESEND_API_KEY' },
      { status: 500 }
    )
  }

  let body: Record<string, unknown>
  try {
    body = await req.json()
  } catch {
    return NextResponse.json(
      { success: false, error: 'Invalid JSON' },
      { status: 400 }
    )
  }

  const firstName = String(body.firstName ?? '').trim()
  const lastName = String(body.lastName ?? '').trim()
  const email = String(body.email ?? '').trim()
  const country = String(body.country ?? '').trim()
  const message = String(body.message ?? '').trim()

  if (!firstName || !lastName || !email || !message) {
    return NextResponse.json(
      { success: false, error: 'Missing required fields' },
      { status: 400 }
    )
  }

  const to = process.env.CONTACT_TO_EMAIL?.trim()
  if (!to) {
    return NextResponse.json(
      { success: false, error: 'Missing CONTACT_TO_EMAIL' },
      { status: 500 }
    )
  }

  const from =
    process.env.RESEND_FROM_EMAIL?.trim() ??
    'Mars Contact <onboarding@resend.dev>'

  const { data, error } = await resend.emails.send({
    from,
    to: [to],
    replyTo: email,
    subject: `Inquiry: ${firstName} ${lastName}`,
    html: `
      <h2>New inquiry</h2>
      <p><strong>Name:</strong> ${escapeHtml(firstName)} ${escapeHtml(lastName)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Country:</strong> ${escapeHtml(country || '—')}</p>
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(message).replaceAll('\n', '<br/>')}</p>
    `,
  })

  if (error) {
    return NextResponse.json(
      { success: false, error: error.message },
      { status: 502 }
    )
  }

  return NextResponse.json({ success: true, id: data?.id })
}
