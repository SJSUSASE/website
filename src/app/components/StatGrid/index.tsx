import styles from "./StatGrid.module.css";

type Stat = {
  value: string;
  label: string;
};

type StatGridProps = {
  stats: Stat[];
  /** `inverse` is for use on the navy band. */
  tone?: "default" | "inverse";
};

export default function StatGrid({ stats, tone = "default" }: StatGridProps) {
  return (
    <dl className={`${styles.grid} ${tone === "inverse" ? styles.inverse : ""}`}>
      {stats.map((stat) => (
        <div key={stat.label} className={styles.item}>
          <dt className={styles.value}>{stat.value}</dt>
          <dd className={styles.label}>{stat.label}</dd>
        </div>
      ))}
    </dl>
  );
}
