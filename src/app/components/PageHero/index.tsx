import type { ReactNode } from "react";
import styles from "./PageHero.module.css";

type PageHeroProps = {
  eyebrow?: string;
  title: string;
  lede?: string;
  /** Optional photo. Without one the hero falls back to a flat navy band. */
  image?: string;
  /** Buttons or links rendered under the copy. */
  actions?: ReactNode;
};

/** Shared hero for every page except the home page, which has its carousel. */
export default function PageHero({
  eyebrow,
  title,
  lede,
  image,
  actions,
}: PageHeroProps) {
  return (
    <header
      className={styles.hero}
      style={image ? { backgroundImage: `url(${image})` } : undefined}
    >
      <div className={styles.scrim} />
      <div className={`container ${styles.inner}`}>
        {eyebrow && <span className={styles.eyebrow}>{eyebrow}</span>}
        <h1 className={styles.title}>{title}</h1>
        {lede && <p className={styles.lede}>{lede}</p>}
        {actions && <div className={styles.actions}>{actions}</div>}
      </div>
    </header>
  );
}
