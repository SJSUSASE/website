/**
 * Content for the sponsorship section.
 *
 * Source of truth: "SJSU SASE Sponsorship Package 2025-2026" (the PDF served
 * from public/sponsorship/). When next year's package is written, update the
 * numbers here -- the components read everything from this file.
 */

import type {
  BenefitRow,
  CalendarYear,
  Conference,
  Highlight,
  Metric,
  NamedDescription,
  Slice,
  Tier,
  TimelineEntry,
} from "./types";

export const welcome = {
  heading: "Partner with SASE at SJSU",
  lede: "The Society of Asian Scientists and Engineers supports students of Asian heritage in science and engineering. Our SJSU chapter has grown to 270+ members since 2017, and our partners are how we keep that growth going.",
  paragraphs: [
    "The Society of Asian Scientists and Engineers (SASE), established in 2007, is a nationally recognized organization dedicated to supporting students of Asian heritage in the fields of science and engineering. Through SASE, students from underrepresented backgrounds can recognize their strengths, thrive professionally, and achieve their fullest potential.",
    "The SASE chapter at San Jose State University was founded in 2017, and ever since, our mission has revolved around three things: Diversity, Community, and Success. We strive to enable unique individuals to branch out and make local and global impacts within their respective fields.",
    "Professional events like info sessions, campus tours, and technical workshops, done in collaboration with companies, support students in the transition to industry and in applying what they have learned throughout college. Meanwhile, social events provide safe spaces that allow members to break out of their shell and bond with one another.",
    "With your support, SASE will continue to grow and more opportunities will be available for our members to achieve success, support their communities, and promote workplace diversity.",
  ],
  signature: "SJSU SASE Executive Board",
};

export const highlights: Highlight[] = [
  {
    title: "Organization of the Year",
    body: "We were honored to receive this award at SJSU's 14th Annual Leadership Gala. The plaque is a testament to the energy and dedication of our community, and the unwavering support from the industry partners who made this past year SASE's best and most memorable yet.",
  },
  {
    title: "National Convention in Boston",
    body: "With help from our generous community, we granted 14 members the opportunity to attend the National Convention. We secured big wins in the SASEHackathon, and many of our members received interviews at the career fair. Both SJSU and our chapter were strongly represented.",
  },
  {
    title: "Successful Collaborations",
    body: "Back at home we organized mutually beneficial events with industry leaders, other SASE chapters, and other SJSU student organizations. From company HQ tours to large social mixers, all of our initiatives garnered significant student interest.",
  },
];

export const metrics: Metric[] = [
  { value: "270+", label: "General members" },
  { value: "20+", label: "Connected alumni" },
  { value: "12", label: "Elected officers" },
  { value: "2017", label: "Chapter founded" },
];

/*
 * TODO(sase): the package lists these four percentages next to a four-part
 * legend, but the PDF's text layer does not preserve which percentage sits on
 * which slice. Confirm the pairing below against page 5 of the package before
 * this goes live.
 */
export const yearInSchool: Slice[] = [
  { label: "Freshmen", value: 32.7 },
  { label: "Senior +", value: 29 },
  { label: "Sophomore", value: 21.8 },
  { label: "Junior", value: 16.5 },
];

export const genderDistribution: Slice[] = [
  { label: "Male students", value: 60 },
  { label: "Female students", value: 40 },
];

export const ethnicities: Slice[] = [
  { label: "Chinese", value: 87 },
  { label: "Indian", value: 73 },
  { label: "Vietnamese", value: 55 },
  { label: "Filipino", value: 36 },
  { label: "Other", value: 20 },
];

/** Ordered most common first, as listed in the package. */
export const commonMajors: string[] = [
  "Software Engineering",
  "Computer Engineering",
  "Computer Science",
  "Data Science",
  "Electrical Engineering",
  "Mechanical Engineering",
  "Aerospace Engineering",
  "Civil Engineering",
  "Chemical Engineering",
  "Biological Sciences",
];

export const tiers: Tier[] = [
  {
    id: "bronze",
    name: "Bronze",
    price: 750,
    summary: "One collaborative event and a presence in front of our members.",
    benefits: [
      "Choose 1 event",
      "Small logo on media",
      "Access to resume database",
      "Company job listings and news in our frequent announcements",
    ],
  },
  {
    id: "silver",
    name: "Silver",
    price: 1500,
    summary:
      "Two events, a larger presence, and a seat at our End of the Year Banquet.",
    benefits: [
      "Choose 2 events",
      "Medium logo on media",
      "Access to resume database",
      "Company job listings and news in our frequent announcements",
      "Invitation to the End of the Year Banquet",
    ],
    featured: true,
  },
  {
    id: "gold",
    name: "Gold",
    price: 2500,
    summary:
      "Our deepest partnership: three events, top billing, and recognition at national SASE conferences.",
    benefits: [
      "Choose 3 events",
      "Large logo on media",
      "Recognition at national SASE conferences",
    ],
    inheritsFrom: "silver",
  },
];

export const benefitRows: BenefitRow[] = [
  { label: "Events of your choice", bronze: "1", silver: "2", gold: "3" },
  {
    label: "Logo on media",
    bronze: "Small",
    silver: "Medium",
    gold: "Large",
  },
  { label: "Access to resume database", bronze: true, silver: true, gold: true },
  {
    label: "Job listings and news in announcements",
    bronze: true,
    silver: true,
    gold: true,
  },
  {
    label: "Invitation to End of the Year Banquet",
    bronze: false,
    silver: true,
    gold: true,
  },
  {
    label: "Recognition at national SASE conferences",
    bronze: false,
    silver: false,
    gold: true,
  },
];

export const eventTypes: NamedDescription[] = [
  {
    name: "Coffee Chat",
    description: "Mix and mingle with students of relevant majors.",
  },
  {
    name: "Info Session",
    description:
      "Present on a trending industry topic or on your company. Panelists optional.",
  },
  {
    name: "Workshop",
    description: "Engage with students and foster professional development.",
  },
  {
    name: "Tour",
    description: "Showcase your company facilities and culture.",
  },
  {
    name: "Other",
    description: "Reach out to our team for an alternative event type.",
  },
];

export const marketingTypes: NamedDescription[] = [
  {
    name: "Newsletter",
    description: "A slot for job listings on a monthly basis.",
  },
  {
    name: "Instagram",
    description: "A designated post to garner member engagement.",
  },
  { name: "Merch", description: "Your company logo on general member shirts." },
  { name: "Website", description: "Company promotion on the SASE website." },
];

export const conferences: Conference[] = [
  {
    id: "sc",
    abbreviation: "SC",
    name: "STEM Connect",
    when: "October 1-4, Pittsburgh, PA",
    body: "STEM Connect, previously known as the National Convention, is one of the largest professional conventions in the U.S. catering to Asian-heritage students and professionals. The three-day conference culminates in a career fair that attracts over 3,000 collegiate attendees and features professional development workshops and networking with recruiters from 100+ top companies.",
    costs: [
      { label: "Ticket registration", amount: 1390 },
      { label: "Transportation", amount: 3500 },
      { label: "Accommodations", amount: 1780 },
    ],
    costNote: "Estimate for 10 people.",
  },
  {
    id: "wrc",
    abbreviation: "WRC",
    name: "West Regional Conference",
    when: "Late February / early March, date TBD",
    body: "This one-day conference features similar professional opportunities to STEM Connect. Students from SASE chapters primarily located in the Western U.S. come together to network and attend workshops. SASE SJSU had the privilege of hosting the event in 2024.",
    costs: [
      { label: "Ticket registration", amount: 350 },
      { label: "Transportation", amount: 2500 },
      { label: "Accommodations", amount: 700 },
    ],
    costNote: "Estimate for 10 people.",
  },
];

export const kickstarter = {
  what: "This semester-long program gives our members the opportunity to apply their technical knowledge and innovate in their respective fields. Student teams receive guidance from industry professionals to satisfy different criteria and meet deadlines. During the final showcase, top projects are judged and awarded.",
  involvement:
    "This unique program offers your company the opportunity to impact the next generation of creative minds. Students will appreciate any resources you have to offer, whether that be mentorship, sponsorship, or judging the final presentations.",
  timelineNote: "Tentative dates.",
};

export const kickstarterTimeline: TimelineEntry[] = [
  { when: "~ October", what: "Intro / theme reveal" },
  { when: "~ November", what: "Industry mentor reveal" },
  { when: "~ February", what: "1st progress check" },
  { when: "~ March", what: "2nd progress check / demo" },
  { when: "~ April / May", what: "Final showcase" },
];

export const calendar: CalendarYear[] = [
  {
    year: 2026,
    entries: [
      { date: "August 18", event: "Fall semester begins", owner: "SJSU" },
      {
        date: "October 1-4",
        event: "STEM Connect Conference",
        owner: "SASE",
      },
      { date: "November 26-28", event: "Thanksgiving break", owner: "SJSU" },
      { date: "December 8", event: "Last day of instruction", owner: "SJSU" },
      { date: "December 10-17", event: "Final exams", owner: "SJSU" },
    ],
  },
  {
    year: 2027,
    entries: [
      { date: "January 20", event: "Spring semester begins", owner: "SJSU" },
      {
        date: "March TBD",
        event: "West Regional Conference",
        owner: "SASE",
      },
      { date: "March 30 - April 3", event: "Spring break", owner: "SJSU" },
      { date: "May TBD", event: "End of the Year Banquet", owner: "SASE" },
      { date: "May 11", event: "Last day of instruction", owner: "SJSU" },
      { date: "May 14-20", event: "Final exams", owner: "SJSU" },
    ],
  },
];

export const conferenceGoal =
  "Our chapter strives to fully cover conference expenses for up to 10 members, which includes tickets, transportation, and lodging.";
