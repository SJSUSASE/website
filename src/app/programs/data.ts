/** Content for the Programs page. */

export type Program = {
  slug: string;
  name: string;
  tagline: string;
  body: string;
  image: string;
  /** Shown as a short list of what a member actually does in the program. */
  details: string[];
};

export const programs: Program[] = [
  {
    slug: "kickstarter",
    name: "Kickstarter",
    tagline:
      "Collaborate with an industry professional to build and showcase a group project.",
    body: "This semester-long program gives members the opportunity to apply their technical knowledge and innovate in their respective fields. Student teams receive guidance from industry professionals to satisfy different criteria and meet deadlines. During the final showcase, top projects are judged and awarded.",
    image: "/home/programs/kickstarter.png",
    details: [
      "Theme revealed in October, mentors assigned in November",
      "Two progress checks before the spring demo",
      "Final showcase judged by industry professionals",
    ],
  },
  {
    slug: "mentorship",
    name: "Mentorship",
    tagline:
      "Our official Big/Little program. Volunteer as a mentor, or pair up as a mentee, and join our social events.",
    body: "Mentor-mentee pairs are matched at the start of the year and stay together through it. Mentors share what they have learned about coursework, internships, and the transition to industry, while mentees get a first point of contact inside the chapter.",
    image: "/home/programs/mentorship.png",
    details: [
      "Pairs matched at the start of each academic year",
      "Dedicated mentorship socials throughout the semester",
      "Open to both new and returning members",
    ],
  },
  {
    slug: "internship",
    name: "Internship",
    tagline:
      "Interested in running for a board position? Experience it yourself with our SASE Intern program.",
    body: "The SASE Intern program is how members find out what running the chapter actually involves. Interns shadow officers, take on real responsibilities across a semester, and leave with a clear sense of which board position suits them.",
    image: "/home/programs/internship.png",
    details: [
      "Shadow an elected officer for a semester",
      "Own a real piece of chapter work",
      "The most common path onto the executive board",
    ],
  },
];
