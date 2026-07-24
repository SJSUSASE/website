import styles from "./BarChart.module.css";

type Datum = {
  label: string;
  value: number;
};

type BarChartProps = {
  data: Datum[];
  /** Appended to each printed value, e.g. "%" or " students". */
  unit?: string;
  caption?: string;
};

/**
 * Horizontal bars, drawn with plain CSS widths rather than a charting library.
 * The underlying numbers are also exposed as text so the chart is readable to
 * screen readers and when styles fail to load.
 */
export default function BarChart({ data, unit = "", caption }: BarChartProps) {
  const max = Math.max(...data.map((d) => d.value), 0);

  return (
    <figure className={styles.chart}>
      <ul className={styles.list}>
        {data.map((datum) => (
          <li key={datum.label} className={styles.row}>
            <span className={styles.label}>{datum.label}</span>
            <span className={styles.track}>
              <span
                className={styles.bar}
                style={{ width: max ? `${(datum.value / max) * 100}%` : 0 }}
              />
            </span>
            <span className={styles.value}>
              {datum.value}
              {unit}
            </span>
          </li>
        ))}
      </ul>
      {caption && <figcaption className={styles.caption}>{caption}</figcaption>}
    </figure>
  );
}
