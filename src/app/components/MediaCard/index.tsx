import Link from "next/link";
import styles from "./MediaCard.module.css";

type MediaCardProps = {
  image: string;
  title: string;
  /** Date for events, one-line pitch for programs. */
  meta?: string;
  body?: string;
  /** Turns the whole card into a link when provided. */
  href?: string;
  /** Flyers are posters (tall); photos read better wide. */
  ratio?: "poster" | "wide";
};

export default function MediaCard({
  image,
  title,
  meta,
  body,
  href,
  ratio = "poster",
}: MediaCardProps) {
  const content = (
    <>
      <div className={`${styles.frame} ${styles[ratio]}`}>
        <img src={image} alt="" className={styles.image} />
      </div>
      <div className={styles.copy}>
        <h3 className={styles.title}>{title}</h3>
        {meta && <p className={styles.meta}>{meta}</p>}
        {body && <p className={styles.body}>{body}</p>}
      </div>
    </>
  );

  if (href) {
    const external = href.startsWith("http");
    if (external) {
      return (
        <a className={`card ${styles.card} ${styles.linkCard}`} href={href}>
          {content}
        </a>
      );
    }
    return (
      <Link className={`card ${styles.card} ${styles.linkCard}`} href={href}>
        {content}
      </Link>
    );
  }

  return <article className={`card ${styles.card}`}>{content}</article>;
}
