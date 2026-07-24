import type { Metadata } from "next";
import Link from "next/link";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import { forms } from "../data/site";
import { programs } from "./data";
import styles from "./programs.module.css";

export const metadata: Metadata = {
  title: "Programs | SASE at SJSU",
  description:
    "Kickstarter, Mentorship, and the SASE Intern program: three ways to go deeper than a general meeting at SASE at SJSU.",
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        eyebrow="Programs"
        title="Go deeper than a general meeting"
        lede="Build a project with an industry mentor, pair up through Big/Little, or find out what running the chapter is really like."
        image="/home/header/4_home_header_img.jpg"
        actions={
          <a className="btn btn-primary" href={forms.memberSignUp}>
            Join SASE
          </a>
        }
      />

      {programs.map((program, index) => (
        <Section
          key={program.slug}
          id={program.slug}
          tone={index % 2 === 0 ? "light" : "surface"}
        >
          <article className={styles.program}>
            <div className={styles.frame}>
              <img src={program.image} alt="" />
            </div>

            <div className={styles.copy}>
              <span className="eyebrow">Program</span>
              <h2 className={styles.title}>{program.name}</h2>
              <span className="accent-rule" />
              <p className={styles.tagline}>{program.tagline}</p>
              <p className={styles.body}>{program.body}</p>

              <ul className={styles.details}>
                {program.details.map((detail) => (
                  <li key={detail} className={styles.detail}>
                    {detail}
                  </li>
                ))}
              </ul>

              {program.slug === "kickstarter" && (
                <p className={styles.crossLink}>
                  Companies:{" "}
                  <Link className="link" href="/sponsorship/kickstarter">
                    mentor, sponsor, or judge a Kickstarter season &rarr;
                  </Link>
                </p>
              )}
            </div>
          </article>
        </Section>
      ))}
    </>
  );
}
