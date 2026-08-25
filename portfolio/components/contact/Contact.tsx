"use client";

const SOCIALS = [
  { name: "GitHub",   href: "https://github.com/aditi-prajapati" },
  { name: "LinkedIn", href: "https://linkedin.com/in/aditi-prajapati" },
  { name: "Twitter",  href: "https://twitter.com/aditi_codes" },
];

export default function Contact() {
  return (
    <section id="contact" className="contact-section" aria-label="Contact Information">
      <span className="contact-label">Got a project or idea?</span>

      <h2 className="contact-headline">
        <a href="mailto:aditi@example.com">
          Let&apos;s Work<br />
          Together.
        </a>
      </h2>

      <div className="contact-divider" />

      <div className="contact-bottom">
        <div>
          <span className="contact-info-label">E-mail</span>
          <a href="mailto:aditi@example.com" className="contact-info-value">
            aditi@example.com
          </a>
        </div>

        <div>
          <span className="contact-info-label">Social Media</span>
          <div className="contact-socials">
            {SOCIALS.map(s => (
              <a
                key={s.name}
                href={s.href}
                target="_blank"
                rel="noopener noreferrer"
                className="contact-social"
              >
                {s.name}
              </a>
            ))}
          </div>
        </div>
      </div>

      <p className="contact-copyright">
        © {new Date().getFullYear()} Aditi Prajapati. All rights reserved.
      </p>
    </section>
  );
}
