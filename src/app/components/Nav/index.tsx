"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { forms } from "../../data/site";
import styles from "./Nav.module.css";

type NavLink = {
  href: string;
  label: string;
};

/*
 * About Us, Events, and Programs are built but not yet signed off by the board,
 * so only Sponsorship is linked from the top nav for now. Uncomment the rest
 * once their copy is final.
 */
const links: NavLink[] = [
  // { href: "/about-us", label: "About Us" },
  // { href: "/events", label: "Events" },
  // { href: "/programs", label: "Programs" },
  { href: "/sponsorship", label: "Sponsorship" },
];

export default function Nav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  // Close the mobile menu whenever navigation happens.
  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  const isActive = (href: string) =>
    pathname === href || pathname.startsWith(`${href}/`);

  return (
    <header className={styles.bar}>
      <div className={`container ${styles.inner}`}>
        <Link href="/" className={styles.brand} aria-label="SASE at SJSU home">
          <img src="/sase_logo.png" alt="" className={styles.brandMark} />
          <span className={styles.brandText}>
            SASE <span className={styles.brandAt}>at SJSU</span>
          </span>
        </Link>

        <nav className={styles.desktopNav} aria-label="Main">
          <ul className={styles.links}>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? styles.linkActive : styles.link}
                  aria-current={isActive(link.href) ? "page" : undefined}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary btn-sm" href={forms.memberSignUp}>
            Sign Up
          </a>
        </nav>

        <button
          type="button"
          className={styles.toggle}
          aria-expanded={open}
          aria-controls="mobile-menu"
          onClick={() => setOpen((prev) => !prev)}
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <span className={open ? styles.barsOpen : styles.bars} aria-hidden="true" />
        </button>
      </div>

      {open && (
        <nav id="mobile-menu" className={styles.mobileNav} aria-label="Main">
          <ul>
            {links.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  className={isActive(link.href) ? styles.mobileLinkActive : styles.mobileLink}
                >
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
          <a className="btn btn-primary" href={forms.memberSignUp}>
            Sign Up
          </a>
        </nav>
      )}
    </header>
  );
}
