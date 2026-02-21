import React from 'react'

export const metadata = {
  title: 'Privacy Policy - Online Compiler',
  description: 'Privacy policy for Online Compiler - how we handle data and cookies.',
}

export default function PrivacyPage() {
  return (
    <main style={{padding: '2rem', maxWidth: 900, margin: '0 auto'}}>
      <h1>Privacy Policy</h1>
      <p>This is a placeholder Privacy Policy page. Replace with your full policy before publishing.</p>
      <section>
        <h2>Data Collection</h2>
        <p>We do not collect personal data by default. If you integrate analytics or forms, disclose data usage here.</p>
      </section>
      <section>
        <h2>Cookies</h2>
        <p>Describe cookies and third-party services (Analytics, Ads) used by your site.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>Contact us at support@codecompileronline.com</p>
      </section>
    </main>
  )
}
