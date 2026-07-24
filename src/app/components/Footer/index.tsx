import Link from "next/link";
import { forms, site, socials } from "../../data/site";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={`container ${styles.inner}`}>
        <div className={styles.brandColumn}>
          <div className={styles.logos}>
            <img src="/footer/footer_sase_logo.png" alt="SASE" />
            <img src="/footer/footer_sjsu_logo.png" alt="San Jose State University" />
          </div>
          <p className={styles.address}>{site.address}</p>
        </div>

        <div className={styles.linkColumn}>
          <h2 className={styles.columnTitle}>Chapter</h2>
          <ul>
            <li>
              <Link href="/">Home</Link>
            </li>
            <li>
              <Link href="/about-us">About Us</Link>
            </li>
            <li>
              <Link href="/events">Events</Link>
            </li>
            <li>
              <Link href="/programs">Programs</Link>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h2 className={styles.columnTitle}>Partners</h2>
          <ul>
            <li>
              <Link href="/sponsorship">Sponsorship</Link>
            </li>
            <li>
              <Link href="/sponsorship/tiers">Tiers &amp; Benefits</Link>
            </li>
            <li>
              <a href={forms.sponsorship}>Sponsorship Form</a>
            </li>
            <li>
              <a href={`mailto:${site.email}`}>{site.email}</a>
            </li>
          </ul>
        </div>

        <div className={styles.linkColumn}>
          <h2 className={styles.columnTitle}>Connect</h2>
          <ul>
            {socials.map((social) => (
              <li key={social.name}>
                <a href={social.href}>{social.name}</a>
              </li>
            ))}
          </ul>
        </div>
      </div>

      <div className={`container ${styles.baseline}`}>
        <p>SASE at SJSU &copy; {new Date().getFullYear()}</p>
        <p>Made with 💙💚 by the SASE SJSU web dev team</p>
      </div>
    </footer>
  );
}
