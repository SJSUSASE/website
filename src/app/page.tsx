import Link from "next/link";
import FadeInCarousel from "./components/FadeInCarousel";
import MediaCard from "./components/MediaCard";
import Section from "./components/Section";
import StatGrid from "./components/StatGrid";
import { forms, socials } from "./data/site";
import { upcoming } from "./events/data";
import { programs } from "./programs/data";
import { metrics } from "./sponsorship/data";
import styles from "./page.module.css";

// images for header carousel
const headerImages = [
  "/home/header/1_home_header_img.jpg",
  "/home/header/2_home_header_img.jpg",
  "/home/header/3_home_header_img.jpg",
  "/home/header/4_home_header_img.jpg",
  "/home/header/5_home_header_img.jpg",
];

export default function HomePage() {
  return (
    <>
      <header className={styles.hero}>
        <FadeInCarousel images={headerImages} />
        <div className={styles.heroScrim} />

        <div className={`container ${styles.heroInner}`}>
          <img className={styles.heroLogo} src="/sase_logo.png" alt="" />
          <h1 className={styles.heroTitle}>
            Society of Asian Scientists &amp; Engineers
            <span className={styles.heroAt}>
              at <span className="text-gradient">SJSU</span>
            </span>
          </h1>
          <p className={styles.heroLede}>
            270+ students building community, celebrating diversity, and
            launching STEM careers at San Jose State University.
          </p>
          <div className={styles.heroActions}>
            <a className="btn btn-primary" href={forms.memberSignUp}>
              Join SASE
            </a>
            <Link className="btn btn-inverse" href="/sponsorship">
              Partner with us
            </Link>
          </div>
        </div>
      </header>

      <Section tone="surface">
        <StatGrid stats={metrics} />
      </Section>

      <Section>
        <div className={styles.aboutGrid}>
          <div>
            <span className="eyebrow">Who we are</span>
            <h2 className={styles.aboutTitle}>What is SASE?</h2>
            <span className="accent-rule" />
          </div>
          <div className={styles.aboutBody}>
            <p>
              SASE is a nationwide organization run by a hard-working board of
              people of various ethnicities and backgrounds. Ten Procter and
              Gamble interns founded SASE in 2007; between 2007 and 2008 they
              made SASE into a 501(c)(3) organization and began to give back to
              their community.
            </p>
            <p>
              Since then, collegiate chapters across the country have given
              their communities a place to come together. Ours was founded at
              San Jose State in 2017, and in 2024&ndash;2025 it was named SJSU&apos;s
              Organization of the Year.
            </p>
            <p>
              <Link className="link" href="/about-us">
                More about our chapter &rarr;
              </Link>
            </p>
          </div>
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="What's next"
        title="Upcoming events"
        lede="Tabling, info sessions, workshops, and socials throughout the semester."
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
        <p className={styles.sectionLink}>
          Check out our{" "}
          <Link className="link" href="/events">
            events calendar &rarr;
          </Link>{" "}
          for the full academic year.
        </p>
      </Section>

      <Section
        eyebrow="Get involved"
        title="Our programs"
        lede="Three ways to go deeper than a general meeting."
      >
        <div className={styles.cardGrid}>
          {programs.map((program) => (
            <MediaCard
              key={program.slug}
              image={program.image}
              title={program.name}
              body={program.tagline}
              href="/programs"
            />
          ))}
        </div>
      </Section>

      <Section tone="deep">
        <div className={styles.ctaGrid}>
          <div>
            <span className="eyebrow">For companies</span>
            <h2 className={styles.ctaTitle}>
              Reach 270+ STEM students at San Jose State
            </h2>
            <p className={styles.ctaBody}>
              Coffee chats, info sessions, workshops, and facility tours, plus
              resume database access and your listings in front of our members.
              Partnerships start at $750.
            </p>
          </div>
          <div className={styles.ctaActions}>
            <Link className="btn btn-primary" href="/sponsorship">
              See sponsorship options
            </Link>
            <Link className="btn btn-inverse" href="/sponsorship/tiers">
              Compare tiers
            </Link>
          </div>
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Stay in touch"
        title="Let's connect"
        align="center"
      >
        <div className={styles.socials}>
          {socials.map((social) => (
            <a key={social.name} href={social.href} className={styles.social}>
              <img src={social.icon} alt="" />
              <span>{social.name} &nearr;</span>
            </a>
          ))}
        </div>
      </Section>
    </>
  );
}
