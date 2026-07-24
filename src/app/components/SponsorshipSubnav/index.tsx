"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import styles from "./SponsorshipSubnav.module.css";

const links = [
  { href: "/sponsorship", label: "Overview" },
  { href: "/sponsorship/tiers", label: "Tiers & Benefits" },
  { href: "/sponsorship/conferences", label: "Conferences" },
  { href: "/sponsorship/kickstarter", label: "Kickstarter" },
];

/** Secondary navigation shown across every /sponsorship route. */
export default function SponsorshipSubnav() {
  const pathname = usePathname();

  return (
    <div className={styles.bar}>
      <nav className={`container ${styles.inner}`} aria-label="Sponsorship">
        <ul className={styles.list}>
          {links.map((link) => {
            const active = pathname === link.href;
            return (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={active ? styles.linkActive : styles.link}
                  aria-current={active ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            );
          })}
        </ul>
      </nav>
    </div>
  );
}
