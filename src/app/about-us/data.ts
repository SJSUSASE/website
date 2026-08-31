/**
 * Content for the About Us page.
 *
 * Entries marked TODO(sase) are placeholders: the chapter has not supplied the
 * real content yet. They are deliberately obvious so nothing fake ships by
 * accident -- fill them in here and the page updates itself.
 */

export type Value = {
  title: string;
  body: string;
  image: string;
};

export type BoardMember = {
  name: string;
  role: string;
  term: string;
  image: string;
};

export type Testimonial = {
  quote: string;
  attribution: string;
  detail: string;
};

export type FaqItem = {
  question: string;
  answer: string;
};

export const mission =
  "SASE is dedicated to the advancement of Asian heritage scientists and engineers in education and employment so that they can achieve their full career potential. In addition to professional development, SASE also encourages members to contribute to the enhancement of the communities in which they live.";

export const chapterStory = [
  "The Society of Asian Scientists and Engineers was founded in 2007 by ten Procter and Gamble interns. Between 2007 and 2008 they made SASE into a 501(c)(3) organization and began giving back to their community. Collegiate chapters followed, each giving their local community a place to come together.",
  "Our San Jose State University chapter was founded in 2017. Since then our mission has revolved around three things: diversity, community, and success. In 2024-2025 we were named SJSU's Organization of the Year at the 14th Annual Leadership Gala.",
];

export const values: Value[] = [
  {
    title: "Community",
    body: "We work to build strong bonds within our own SASE community, providing opportunities for members to make contributions to each other and help each other grow as STEM students and professionals.",
    image: "/home/header/1_home_header_img.jpg",
  },
  {
    title: "Diversity",
    body: "We celebrate the vast diversity of our members within the SASE community, as well as the diversity on campuses and in the workplace.",
    image: "/home/header/3_home_header_img.jpg",
  },
  {
    title: "Success",
    body: "We facilitate engagement between students and companies through tours, workshops, and job and internship opportunities.",
    image: "/home/header/5_home_header_img.jpg",
  },
];

/**
 * TODO(sase): replace with the real 2025-2026 executive board. Only the
 * president is known; the other 11 officers are placeholders.
 */
export const board: BoardMember[] = [
  {
    name: "Lukas Tolentino",
    role: "President",
    term: "2026-2027",
    image: "/about_us/board/lukas.jpg",
  },
  {
    name: "Wattanak Keo",
    role: "Vice President",
    term: "2026-2027",
    image: "/about_us/board/nak.jpg",
  },
  {
    name: "Andy Tran",
    role: "Treasurer",
    term: "2026-2027",
    image: "/about_us/board/Andy.jpg",
  },
  {
    name: "Minh Doan",
    role: "Secretary",
    term: "2026-2027",
    image: "/about_us/board/Minh.jpg",
  },
    {
    name: "Lorenzo De Guzman",
    role: "Program Director",
    term: "2026-2027",
    image: "/about_us/board/Lorenzo.jpg",
  },
  {
    name: "Alina Ly",
    role: "Program Director",
    term: "2026-2027",
    image: "/about_us/board/Alina.jpg",
  },
    {
    name: "Katelyn Nguyen",
    role: "Event Coordinator",
    term: "2026-2027",
    image: "/about_us/board/Katelyn.jpg",
  },
  {
    name: "Jeanie Chan",
    role: "Event Coordinator",
    term: "2026-2027",
    image: "/about_us/board/Jeanie.jpg",
  },
    {
    name: "Jhumar Opinaldo",
    role: "Marketing Director",
    term: "2026-2027",
    image: "/about_us/board/Jhumar.jpg",
  },
  {
    name: "Stacy Le",
    role: "Marketing Director",
    term: "2026-2027",
    image: "/about_us/board/Stacy.jpg",
  },
];

/**
 * TODO(sase): collect real member testimonials. Left empty on purpose -- the
 * section hides itself rather than showing invented quotes.
 */
export const testimonials: Testimonial[] = [];

/**
 * TODO(sase): confirm these answers with the board. The questions are the ones
 * we are actually asked at tabling; the answers still need sign-off.
 */
export const faq: FaqItem[] = [
  {
    question: "Do I have to be of Asian heritage to join?",
    answer:
      "No. SASE is open to students of every background and every major. Our events are built around celebrating diversity, and everyone is welcome.",
  },
  {
    question: "Do I need to be an engineering major?",
    answer:
      "No. While most of our members study engineering or computer science, we cater to as many majors as possible and welcome students from across SJSU.",
  },
  {
    question: "How do I become a member?",
    answer:
      "Fill out our sign-up form and join our Discord. From there you will hear about general meetings, professional events, and socials.",
  },
  {
    question: "Is there a membership fee?",
    answer:
      "No. SASE at SJSU is completely free to join.",
  },
];
