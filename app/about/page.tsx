import React from 'react'

export const metadata = {
  title: 'About Us - Online Compiler',
  description: 'About Online Compiler — mission, vision, and team information.',
}

export default function AboutPage() {
  return (
    <main style={{padding: '2rem', maxWidth: 900, margin: '0 auto'}}>
      <h1>About Us</h1>
      <p>Online Compiler is a lightweight, free tool to write and run HTML, CSS, and JavaScript directly in your browser.</p>
      <section>
        <h2>Mission</h2>
        <p>To provide a fast, accessible web playground for learners and developers.</p>
      </section>
      <section>
        <h2>Contact</h2>
        <p>For support, email support@codecompileronline.com</p>
      </section>
    </main>
  )
}
