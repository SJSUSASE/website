import styles from "./DonutChart.module.css";

type Datum = {
  label: string;
  value: number;
};

type DonutChartProps = {
  data: Datum[];
  /** Appended to each printed value. */
  unit?: string;
};

/** Slice colours, in order: a navy-to-periwinkle ramp from the SASE logo. */
const PALETTE = ["#0c1848", "#2f3f8f", "#5a6fc4", "#8ca0dc", "#b9c4ea"];

const RADIUS = 60;
const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

/**
 * Donut drawn as a stack of stroked SVG circles -- one dash segment per slice.
 * No charting dependency; the legend carries the actual numbers.
 */
export default function DonutChart({ data, unit = "%" }: DonutChartProps) {
  const total = data.reduce((sum, datum) => sum + datum.value, 0);

  let offset = 0;
  const segments = data.map((datum, index) => {
    const length = total ? (datum.value / total) * CIRCUMFERENCE : 0;
    const segment = {
      ...datum,
      color: PALETTE[index % PALETTE.length],
      dash: `${length} ${CIRCUMFERENCE - length}`,
      offset: -offset,
    };
    offset += length;
    return segment;
  });

  return (
    <figure className={styles.chart}>
      <svg
        viewBox="0 0 160 160"
        className={styles.svg}
        role="img"
        aria-label={data
          .map((datum) => `${datum.label}: ${datum.value}${unit}`)
          .join(", ")}
      >
        <g transform="rotate(-90 80 80)">
          <circle
            cx="80"
            cy="80"
            r={RADIUS}
            fill="none"
            stroke="var(--color-line)"
            strokeWidth="22"
          />
          {segments.map((segment) => (
            <circle
              key={segment.label}
              cx="80"
              cy="80"
              r={RADIUS}
              fill="none"
              stroke={segment.color}
              strokeWidth="22"
              strokeDasharray={segment.dash}
              strokeDashoffset={segment.offset}
            />
          ))}
        </g>
      </svg>

      <ul className={styles.legend}>
        {segments.map((segment) => (
          <li key={segment.label} className={styles.legendItem}>
            <span
              className={styles.swatch}
              style={{ backgroundColor: segment.color }}
              aria-hidden="true"
            />
            <span className={styles.legendLabel}>{segment.label}</span>
            <span className={styles.legendValue}>
              {segment.value}
              {unit}
            </span>
          </li>
        ))}
      </ul>
    </figure>
  );
}
