import type { Metadata } from "next";
import Link from "next/link";
import Accordion from "../components/Accordion";
import PageHero from "../components/PageHero";
import Section from "../components/Section";
import StatGrid from "../components/StatGrid";
import { forms } from "../data/site";
import { metrics } from "../sponsorship/data";
import { board, chapterStory, faq, mission, testimonials, values } from "./data";
import styles from "./about.module.css";

export const metadata: Metadata = {
  title: "About Us | SASE at SJSU",
  description:
    "The Society of Asian Scientists and Engineers at San Jose State University: our mission, our values, and the board that runs the chapter.",
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        eyebrow="About us"
        title="Diversity, community, and success"
        lede="Founded at San Jose State in 2017, and named SJSU's Organization of the Year in 2024-2025."
        image="/about_us/about_us_header_img.jpg"
        actions={
          <a className="btn btn-primary" href={forms.memberSignUp}>
            Join SASE
          </a>
        }
      />

      <Section eyebrow="Our mission" title="Why SASE exists" narrow>
        <p className={styles.missionStatement}>{mission}</p>
        <div className={styles.prose}>
          {chapterStory.map((paragraph) => (
            <p key={paragraph.slice(0, 40)}>{paragraph}</p>
          ))}
        </div>
      </Section>

      <Section tone="surface">
        <StatGrid stats={metrics} />
      </Section>

      <Section
        eyebrow="What we stand for"
        title="Our values"
        lede="Three ideas run through everything the chapter does."
      >
        <div className={styles.values}>
          {values.map((value) => (
            <article key={value.title} className={styles.value}>
              <div className={styles.valueFrame}>
                <img src={value.image} alt="" />
              </div>
              <div>
                <h3>{value.title}</h3>
                <p className={styles.valueBody}>{value.body}</p>
              </div>
            </article>
          ))}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Who runs the chapter"
        title="Executive board"
        lede="Twelve elected officers serve each academic year."
      >
        <div className={styles.boardGrid}>
          {board.map((member) => (
            <article key={member.role} className={`card ${styles.member}`}>
              <div className={styles.memberFrame}>
                <img src={member.image} alt="" />
              </div>
              <h3 className={styles.memberName}>{member.name}</h3>
              <p className={styles.memberRole}>{member.role}</p>
              <p className={styles.memberTerm}>{member.term}</p>
            </article>
          ))}
        </div>
      </Section>

      {/*
        Testimonials stay hidden until real quotes are collected -- see the
        TODO in about-us/data.ts. The markup is ready for them.
      */}
      {testimonials.length > 0 && (
        <Section eyebrow="In their words" title="Testimonials">
          <div className={styles.testimonials}>
            {testimonials.map((testimonial) => (
              <figure
                key={testimonial.attribution}
                className={`card ${styles.testimonial}`}
              >
                <blockquote>{testimonial.quote}</blockquote>
                <figcaption>
                  <span className={styles.testimonialName}>
                    {testimonial.attribution}
                  </span>
                  <span className={styles.testimonialDetail}>
                    {testimonial.detail}
                  </span>
                </figcaption>
              </figure>
            ))}
          </div>
        </Section>
      )}

      <Section eyebrow="Questions" title="Frequently asked" narrow>
        <Accordion items={faq} />
        <p className={styles.faqFooter}>
          Still curious? Come to a{" "}
          <Link className="link" href="/events">
            general meeting
          </Link>{" "}
          and ask us in person.
        </p>
      </Section>
    </>
  );
}
