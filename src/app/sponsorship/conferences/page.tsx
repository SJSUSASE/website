import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import { forms, site } from "../../data/site";
import { calendar, conferenceGoal, conferences } from "../data";
import styles from "../sponsorship.module.css";

export const metadata: Metadata = {
  title: "Conferences | Sponsorship | SASE at SJSU",
  description:
    "STEM Connect and the West Regional Conference: what SASE at SJSU attends each year, and what it costs to send our members.",
};

const currency = (amount: number) => `$${amount.toLocaleString("en-US")}`;

export default function ConferencesPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Collegiate conferences"
        lede="SASE SJSU attends two major conferences each year. These are where our members develop their professional skills and meet industry representatives face to face."
        image="/home/header/5_home_header_img.jpg"
      />

      <Section
        eyebrow="The two we attend"
        title="STEM Connect and the West Regional Conference"
        lede={conferenceGoal}
      >
        <div className={styles.twoUp}>
          {conferences.map((conference) => {
            const total = conference.costs.reduce(
              (sum, line) => sum + line.amount,
              0,
            );

            return (
              <article
                key={conference.id}
                className={`card ${styles.textCard}`}
              >
                <span className="eyebrow">{conference.abbreviation}</span>
                <h3 className={styles.conferenceTitle}>{conference.name}</h3>
                <p className={styles.conferenceWhen}>{conference.when}</p>
                <p className={styles.textCardBody}>{conference.body}</p>

                <table className={styles.costTable}>
                  <caption className="sr-only">
                    Estimated costs for {conference.name}
                  </caption>
                  <tbody>
                    {conference.costs.map((line) => (
                      <tr key={line.label}>
                        <td>{line.label}</td>
                        <td>{currency(line.amount)}</td>
                      </tr>
                    ))}
                    <tr className={styles.totalRow}>
                      <td>Total</td>
                      <td>{currency(total)}</td>
                    </tr>
                  </tbody>
                </table>
                <p className={styles.costNote}>* {conference.costNote}</p>
              </article>
            );
          })}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="General calendar"
        title="The academic year at a glance"
      >
        <div className={styles.calendarGrid}>
          {calendar.map((year) => (
            <div key={year.year}>
              <h3 className={styles.calendarYear}>{year.year}</h3>
              <ul className={styles.calendarList}>
                {year.entries.map((entry) => (
                  <li key={`${entry.date}-${entry.event}`} className={styles.calendarRow}>
                    <span className={styles.calendarDate}>{entry.date}</span>
                    <span className={styles.calendarEvent}>
                      <span
                        className={`${styles.ownerTag} ${
                          entry.owner === "SASE"
                            ? styles.ownerSase
                            : styles.ownerSjsu
                        }`}
                      >
                        {entry.owner}
                      </span>
                      {entry.event}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className={styles.ctaBlock}>
          <span className="eyebrow">Send a student</span>
          <h2 className={styles.ctaTitle}>
            Help us cover conference costs for 10 members
          </h2>
          <p>
            Conference support is one of the most direct ways to back our
            chapter. Reach out at{" "}
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            or start with the sponsorship form.
          </p>
        </div>
        <div className={styles.actionRow}>
          <a className="btn btn-primary" href={forms.sponsorship}>
            Sponsorship form
          </a>
        </div>
      </Section>
    </>
  );
}
