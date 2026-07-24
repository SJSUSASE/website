import type { ReactNode } from "react";
import styles from "./Section.module.css";

type SectionProps = {
  children: ReactNode;
  /** Anchor target, used by the sponsorship in-page navigation. */
  id?: string;
  /** Background treatment. `deep` is the navy band used for CTAs. */
  tone?: "light" | "surface" | "tint" | "deep";
  eyebrow?: string;
  title?: string;
  lede?: string;
  align?: "left" | "center";
  /** Constrain the content column for long-form reading. */
  narrow?: boolean;
};

export default function Section({
  children,
  id,
  tone = "light",
  eyebrow,
  title,
  lede,
  align = "left",
  narrow = false,
}: SectionProps) {
  const hasHeader = Boolean(eyebrow || title || lede);

  return (
    <section id={id} className={`${styles.section} ${styles[tone]}`}>
      <div className="container">
        {/*
          `narrow` constrains the column but keeps the container's left edge, so
          narrow and full-width sections stay aligned down the page.
        */}
        <div className={narrow ? styles.narrow : undefined}>
          {hasHeader && (
            <header
              className={`${styles.header} ${
                align === "center" ? styles.center : ""
              }`}
            >
              {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              {title && <h2 className={styles.title}>{title}</h2>}
              <span
                className={`accent-rule ${styles.rule} ${
                  align === "center" ? styles.ruleCenter : ""
                }`}
              />
              {lede && <p className={`lede ${styles.lede}`}>{lede}</p>}
            </header>
          )}
          {children}
        </div>
      </div>
    </section>
  );
}
