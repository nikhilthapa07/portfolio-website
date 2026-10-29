import ContactThread from "@/components/ContactThread";
import { profile, socials } from "@/data/portfolio";

export default function Contact() {
  return (
    <footer className="contact" id="contact">
      <div className="wrap">
        <div className="contact-grid">
          <div>
            <h2 className="h2">Let&apos;s build something.</h2>
            <p className="contact-copy">
              Got a project in mind, want to collaborate, or just want to
              connect? Leave a note and it lands straight in my inbox.
            </p>
            <ul className="handles">
              {socials.map((social) => (
                <li key={social.label}>
                  <a
                    href={social.href}
                    {...(social.href.startsWith("http")
                      ? { target: "_blank", rel: "noopener noreferrer" }
                      : {})}
                  >
                    <span>{social.label}</span>
                    <span>{social.value}</span>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <ContactThread />
        </div>

        <div className="foot">
          <span className="sign" aria-hidden="true">
            NIKHIL
          </span>
          <p>
            © 2026 {profile.name}
            <br />
            Built with Next.js
          </p>
        </div>
      </div>
    </footer>
  );
}
