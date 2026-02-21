import React from 'react'

export const metadata = {
  title: 'Contact - Online Compiler',
  description: 'Contact page for Online Compiler. Reach out for support or partnerships.',
}

export default function ContactPage() {
  return (
    <main style={{padding: '2rem', maxWidth: 800, margin: '0 auto'}}>
      <h1>Contact</h1>
      <p>If you need help or want to reach out, email <a href="mailto:support@codecompileronline.com">support@codecompileronline.com</a>.</p>
      <section>
        <h2>Partnerships</h2>
        <p>For business inquiries, include subject and a short description.</p>
      </section>
      <section>
        <h2>Report Abuse</h2>
        <p>To report abuse or security issues, email security@codecompileronline.com.</p>
      </section>
    </main>
  )
}
