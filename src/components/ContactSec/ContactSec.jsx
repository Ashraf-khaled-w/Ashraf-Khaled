import React from "react";
import styles from "./ContactSec.module.css";

function ContactSec() {
  return (
    <div className="homePageBg bg-[#222831] text-white py-20 px-6 md:px-10 lg:px-12">
      <section className={styles.contactSection}>
        <h2 className={styles.contactTitle}>Contact Me</h2>
        <p className={styles.contactSubtitle}>Feel free to reach out via social media!</p>
        <div className={styles.socialLinks}>
          <a
            href="https://www.facebook.com/ashrafkhaled.w/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="Facebook"
          >
            <i className="fab fa-facebook-f"></i>
          </a>
          <a
            href="https://wa.me/+201093856925"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="WhatsApp"
          >
            <i className="fab fa-whatsapp"></i>
          </a>
          <a
            href="https://www.linkedin.com/in/ashraf-khaled-663299293/"
            target="_blank"
            rel="noopener noreferrer"
            className={styles.socialIcon}
            aria-label="LinkedIn"
          >
            <i className="fab fa-linkedin-in"></i>
          </a>
        </div>
      </section>
    </div>
  );
}

export default ContactSec;
