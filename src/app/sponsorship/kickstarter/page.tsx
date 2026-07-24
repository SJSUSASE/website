import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import Timeline from "../../components/Timeline";
import { forms, site } from "../../data/site";
import { kickstarter, kickstarterTimeline } from "../data";
import styles from "../sponsorship.module.css";

export const metadata: Metadata = {
  title: "Kickstarter | Sponsorship | SASE at SJSU",
  description:
    "Kickstarter is SASE at SJSU's semester-long project program. Companies can support it through mentorship, sponsorship, or judging the final showcase.",
};

const involvementOptions = [
  {
    name: "Mentorship",
    description:
      "Pair one of your engineers with a student team for the semester. Mentors help teams scope their project, hit deadlines, and prepare for the showcase.",
  },
  {
    name: "Sponsorship",
    description:
      "Fund prizes, materials, or the final showcase itself. Your company is credited throughout the program.",
  },
  {
    name: "Judging",
    description:
      "Join us at the final showcase to evaluate projects and meet the students behind them.",
  },
];

export default function KickstarterPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="The Kickstarter program"
        lede="A semester-long build program where student teams apply their technical knowledge with guidance from industry professionals."
        image="/home/header/3_home_header_img.jpg"
      />

      <Section eyebrow="The program" title="What is Kickstarter?" narrow>
        <div className={styles.prose}>
          <p>{kickstarter.what}</p>
        </div>
      </Section>

      <Section tone="surface" eyebrow="Timeline" title="How a season runs">
        <Timeline items={kickstarterTimeline} note={kickstarter.timelineNote} />
      </Section>

      <Section eyebrow="For companies" title="Getting involved">
        <div className={styles.twoUp}>
          <div className={styles.prose}>
            <p>{kickstarter.involvement}</p>
            <p>
              Join us on this journey and showcase your commitment to innovation
              and education. If your company is interested in partnering with
              us, reach out at{" "}
              <a className="link" href={`mailto:${site.email}`}>
                {site.email}
              </a>{" "}
              for more information.
            </p>
          </div>

          <dl className={styles.defList}>
            {involvementOptions.map((option) => (
              <div key={option.name} className={styles.defRow}>
                <dt className={styles.defTerm}>{option.name}</dt>
                <dd className={styles.defDesc}>{option.description}</dd>
              </div>
            ))}
          </dl>
        </div>
      </Section>

      <Section tone="deep">
        <div className={styles.ctaBlock}>
          <span className="eyebrow">Get involved</span>
          <h2 className={styles.ctaTitle}>
            Shape the next generation of engineers
          </h2>
          <p>
            Tell us on the sponsorship form that you are interested in
            Kickstarter and we will follow up with this season&apos;s timeline.
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
