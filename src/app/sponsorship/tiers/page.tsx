import type { Metadata } from "next";
import PageHero from "../../components/PageHero";
import Section from "../../components/Section";
import TierCard from "../../components/TierCard";
import { forms, site, sponsorshipPackagePdf } from "../../data/site";
import { benefitRows, eventTypes, marketingTypes, tiers } from "../data";
import styles from "../sponsorship.module.css";
import tableStyles from "./tiers.module.css";

export const metadata: Metadata = {
  title: "Tiers & Benefits | Sponsorship | SASE at SJSU",
  description:
    "Bronze, Silver, and Gold sponsorship tiers for SASE at SJSU, with a full comparison of benefits, event types, and marketing options.",
};

/** Renders a table cell that may be a label, a yes, or a no. */
function BenefitCell({ value }: { value: string | boolean }) {
  if (value === true) {
    return (
      <>
        <span className={tableStyles.yes} aria-hidden="true" />
        <span className="sr-only">Included</span>
      </>
    );
  }
  if (value === false) {
    return (
      <>
        <span className={tableStyles.no} aria-hidden="true" />
        <span className="sr-only">Not included</span>
      </>
    );
  }
  return <>{value}</>;
}

export default function TiersPage() {
  return (
    <>
      <PageHero
        eyebrow="Sponsorship"
        title="Tiers & benefits"
        lede="Partnerships start at $750. Every tier includes resume database access and your job listings in front of our members."
        image="/home/header/4_home_header_img.jpg"
        actions={
          <a className="btn btn-primary" href={forms.sponsorship}>
            Sponsorship form
          </a>
        }
      />

      <Section>
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
                  Choose {tier.name}
                </a>
              }
            />
          ))}
        </div>
      </Section>

      <Section
        tone="surface"
        eyebrow="Side by side"
        title="Every benefit compared"
      >
        <div className={tableStyles.scroller}>
          <table className={tableStyles.table}>
            <caption className="sr-only">
              Comparison of Bronze, Silver, and Gold sponsorship benefits
            </caption>
            <thead>
              <tr>
                <th scope="col">Benefit</th>
                {tiers.map((tier) => (
                  <th key={tier.id} scope="col">
                    <span className={tableStyles.tierName}>{tier.name}</span>
                    <span className={tableStyles.tierPrice}>
                      ${tier.price.toLocaleString("en-US")}
                    </span>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {benefitRows.map((row) => (
                <tr key={row.label}>
                  <th scope="row">{row.label}</th>
                  <td>
                    <BenefitCell value={row.bronze} />
                  </td>
                  <td>
                    <BenefitCell value={row.silver} />
                  </td>
                  <td>
                    <BenefitCell value={row.gold} />
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Section>

      <Section
        eyebrow="What we can run together"
        title="Events and marketing"
        lede="Choose your events when you sign on. Marketing placements come with every tier."
      >
        <div className={styles.twoUp}>
          <div>
            <h3 className={styles.textCardTitle}>Event types</h3>
            <dl className={`${styles.defList} ${tableStyles.marketingList}`}>
              {eventTypes.map((type) => (
                <div key={type.name} className={styles.defRow}>
                  <dt className={styles.defTerm}>{type.name}</dt>
                  <dd className={styles.defDesc}>{type.description}</dd>
                </div>
              ))}
            </dl>
          </div>

          <div>
            <h3 className={styles.textCardTitle}>Marketing types</h3>
            <dl className={`${styles.defList} ${tableStyles.marketingList}`}>
              {marketingTypes.map((type) => (
                <div key={type.name} className={styles.defRow}>
                  <dt className={styles.defTerm}>{type.name}</dt>
                  <dd className={styles.defDesc}>{type.description}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </Section>

      <Section tone="deep">
        <div className={styles.ctaBlock}>
          <span className="eyebrow">Ready when you are</span>
          <h2 className={styles.ctaTitle}>Pick a tier and we&apos;ll take it from there</h2>
          <p>
            Tell us which tier and which events interest you on the form, or
            email{" "}
            <a className="link" href={`mailto:${site.email}`}>
              {site.email}
            </a>{" "}
            with questions first.
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
