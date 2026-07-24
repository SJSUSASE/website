import type { Tier } from "../../sponsorship/types";
import styles from "./TierCard.module.css";

type TierCardProps = {
  tier: Tier;
  /** Name of the tier this one builds on, e.g. Gold on top of Silver. */
  inheritsLabel?: string;
  action?: React.ReactNode;
};

export default function TierCard({ tier, inheritsLabel, action }: TierCardProps) {
  return (
    <article
      className={`card ${styles.card} ${tier.featured ? styles.featured : ""}`}
    >
      {tier.featured && <span className={styles.badge}>Most popular</span>}

      <h3 className={styles.name}>{tier.name}</h3>
      <p className={styles.price}>
        <span className={styles.currency}>$</span>
        {tier.price.toLocaleString("en-US")}
      </p>
      <p className={styles.summary}>{tier.summary}</p>

      <ul className={styles.benefits}>
        {tier.benefits.map((benefit) => (
          <li key={benefit} className={styles.benefit}>
            <span className={styles.check} aria-hidden="true" />
            {benefit}
          </li>
        ))}
        {inheritsLabel && (
          <li className={`${styles.benefit} ${styles.inherits}`}>
            <span className={styles.check} aria-hidden="true" />
            Everything in {inheritsLabel}
          </li>
        )}
      </ul>

      {action && <div className={styles.action}>{action}</div>}
    </article>
  );
}
