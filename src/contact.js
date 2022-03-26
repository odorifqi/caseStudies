import React from "react";
import s from "./style.css";

function ContactList({ title, url }) {
  return (
    <li>
      <a className={s.contactLink} href={url} target="_blank">
        {title}
      </a>
    </li>
  );
}

export default function Contact() {
  return (
    <section className={s.container}>
      <h3 className={s.subTitle} style={{ textAlign: "center" }}>
        Let's get in touch!
      </h3>
      <ul className={s.contactRow}>
        <ContactList
          url="mailto:odorifqi@gmail.com"
          title="odorifqi@gmail.com"
        />

        <ContactList
          url="https://github.com/odorifqi/odorifqi.github.io/tree/main/src/cv_document"
          title="Curriculum Vitae"
        />

        <ContactList url="https://medium.com/@odorifqi" title="Medium" />

        <ContactList url="https://behance.net/odorifqi" title="Behance" />

        <ContactList url="https://dribbble.com/odorifqi" title="Dribbble" />

        <ContactList url="https://linkedin.com/in/odorifqi" title="Linkedin" />

        <ContactList url="https://instagram.com/odorifqi" title="Instagram" />

        <ContactList url="https://twitter.com/odorifqi" title="Twitter" />
      </ul>
    </section>
  );
}
