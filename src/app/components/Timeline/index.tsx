import styles from "./Timeline.module.css";

type TimelineItem = {
  when: string;
  what: string;
};

type TimelineProps = {
  items: TimelineItem[];
  note?: string;
};

export default function Timeline({ items, note }: TimelineProps) {
  return (
    <div className={styles.wrapper}>
      <ol className={styles.list}>
        {items.map((item) => (
          <li key={item.when} className={styles.item}>
            <span className={styles.marker} aria-hidden="true" />
            <span className={styles.when}>{item.when}</span>
            <span className={styles.what}>{item.what}</span>
          </li>
        ))}
      </ol>
      {note && <p className={styles.note}>* {note}</p>}
    </div>
  );
}
