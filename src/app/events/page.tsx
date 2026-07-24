import type { Metadata } from "next";
import Link from "next/link";
import MediaCard from "../components/MediaCard";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { forms } from "../data/site";
import { calendar } from "../sponsorship/data";
import sponsorshipStyles from "../sponsorship/sponsorship.module.css";
import { categories, upcoming } from "./data";
import styles from "./events.module.css";

export const metadata: Metadata = {
  title: "Events | SASE at SJSU",
  description:
    "Professional events, conferences, and socials hosted by the Society of Asian Scientists and Engineers at San Jose State University.",
};

export default function EventsPage() {
  return (
    <>
      <PageHero
        eyebrow="Events"
        title="Where the chapter comes together"
        lede="Info sessions and workshops with industry, national conferences, and the socials that make SASE a second home."
        image="/home/header/1_home_header_img.jpg"
        actions={
          <a className="btn btn-primary" href={forms.memberSignUp}>
            Join SASE
          </a>
        }
      />

      <Section
        eyebrow="This semester"
        title="Upcoming events"
        lede="Come to any of these -- no membership required to show up."
      >
        <div className={styles.cardGrid}>
          {upcoming.map((event) => (
            <MediaCard
              key={event.name}
              image={event.flyer}
              title={event.name}
              meta={event.date}
            />
          ))}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="What we run"
        title="Three kinds of events"
      >
        <div className={styles.categories}>
          {categories.map((category) => (
            <article key={category.name} className={styles.category}>
              <div className={styles.categoryFrame}>
                <img src={category.image} alt="" />
              </div>
              <div>
                <h3>{category.name}</h3>
                <p className={styles.categoryBody}>{category.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        eyebrow="General calendar"
        title="The 2025-2026 academic year"
        lede="SJSU dates alongside the SASE dates that matter to members."
      >
        <div className={sponsorshipStyles.calendarGrid}>
          {calendar.map((year) => (
            <div key={year.year}>
              <h3 className={sponsorshipStyles.calendarYear}>{year.year}</h3>
              <ul className={sponsorshipStyles.calendarList}>
                {year.entries.map((entry) => (
                  <li
                    key={`${entry.date}-${entry.event}`}
                    className={sponsorshipStyles.calendarRow}
                  >
                    <span className={sponsorshipStyles.calendarDate}>
                      {entry.date}
                    </span>
                    <span className={sponsorshipStyles.calendarEvent}>
                      <span
                        className={`${sponsorshipStyles.ownerTag} ${
                          entry.owner === "SASE"
                            ? sponsorshipStyles.ownerSase
                            : sponsorshipStyles.ownerSjsu
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
        <p className={styles.calendarFooter}>
          Companies:{" "}
          <Link className="link" href="/sponsorship">
            partner with us
          </Link>{" "}
          to host one of these events with our members.
        </p>
      </Section>
    </>
  );
}
