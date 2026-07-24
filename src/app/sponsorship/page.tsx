import Link from "next/link";
import BarChart from "../components/BarChart";
import DonutChart from "../components/DonutChart";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import StatGrid from "../components/StatGrid";
import TierCard from "../components/TierCard";
import { forms, site, sponsorshipPackagePdf } from "../data/site";
import {
  commonMajors,
  ethnicities,
  genderDistribution,
  highlights,
  metrics,
  tiers,
  welcome,
  yearInSchool,
} from "./data";
import styles from "./sponsorship.module.css";

export default function SponsorshipPage() {
  return (
    <>
      <PageHero
        eyebrow="2025-2026 Sponsorship Package"
        title={welcome.heading}
        lede={welcome.lede}
        image="/home/header/2_home_header_img.jpg"
        actions={
          <>
            <a className="btn btn-primary" href={forms.sponsorship}>
              Sponsorship form
            </a>
            <a className="btn btn-inverse" href={sponsorshipPackagePdf} download>
              Download the package (PDF)
            </a>
          </>
        }
      />

      <Section eyebrow="Welcome" title="A note from the executive board" narrow>
        <div className={styles.prose}>
          {welcome.paragraphs.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
          <p className={styles.signature}>&mdash; {welcome.signature}</p>
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Highlights of 2024-2025"
        title="What your support made possible"
      >
        <div className={styles.threeUp}>
          {highlights.map((highlight) => (
            <article
              key={highlight.title}
              className={`card ${styles.textCard}`}
            >
              <h3 className={styles.textCardTitle}>{highlight.title}</h3>
              <p className={styles.textCardBody}>{highlight.body}</p>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="Metrics"
        title="Who you would be reaching"
        lede="Chapter membership as of the 2025-2026 academic year."
      >
        <StatGrid stats={metrics} />

        <div className={styles.chartGrid}>
          <div className={`card ${styles.chartCard}`}>
            <h3 className={styles.chartTitle}>Year in school</h3>
            <DonutChart data={yearInSchool} />
          </div>

          <div className={`card ${styles.chartCard}`}>
            <h3 className={styles.chartTitle}>Gender distribution</h3>
            <DonutChart data={genderDistribution} />
          </div>

          <div className={`card ${styles.chartCard}`}>
            <h3 className={styles.chartTitle}>Ethnicities</h3>
            <BarChart data={ethnicities} caption="Number of students." />
          </div>

          <div className={`card ${styles.chartCard}`}>
            <h3 className={styles.chartTitle}>Most common majors</h3>
            <ul className={styles.majorList}>
              {commonMajors.map((major) => (
                <li key={major} className={styles.majorTag}>
                  {major}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Sponsorship tiers"
        title="Three ways to partner with us"
        lede="Every tier includes resume database access and your job listings in our announcements. Pick the number of events that suits you."
      >
        <div className={styles.threeUp}>
          {tiers.map((tier) => (
            <TierCard
              key={tier.id}
              tier={tier}
              inheritsLabel={
                tier.inheritsFrom
                  ? tiers.find((t) => t.id === tier.inheritsFrom)?.name
                  : undefined
              }
              action={
                <a className="btn btn-primary" href={forms.sponsorship}>
                  Get started
                </a>
              }
            />
          ))}
        </div>
        <p className={styles.linkRow}>
          <Link className="link" href="/sponsorship/tiers">
            Compare every benefit side by side &rarr;
          </Link>
        </p>
      </Section>

      <Section tone="deep">
        <div className={styles.ctaBlock}>
          <span className="eyebrow">Next step</span>
          <h2 className={styles.ctaTitle}>
            Let&apos;s build something with your team
          </h2>
          <p>
            Fill out our sponsorship form and we will follow up with dates and
            event options. Questions first? Email us at{" "}
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>
            .
          </p>
        </div>
        <div className={styles.actionRow}>
          <a className="btn btn-primary" href={forms.sponsorship}>
            Sponsorship form
          </a>
          <a className="btn btn-inverse" href={sponsorshipPackagePdf} download>
            Download the package (PDF)
          </a>
        </div>
      </Section>
    </>
  );
}
