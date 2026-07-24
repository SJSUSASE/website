/**
 * Content for the Events page.
 * The academic-year calendar is shared with the sponsorship section, so it is
 * imported from there rather than duplicated.
 */

export type EventCategory = {
  name: string;
  body: string;
  image: string;
};

export type UpcomingEvent = {
  name: string;
  date: string;
  flyer: string;
};

export const categories: EventCategory[] = [
  {
    name: "Professional",
    body: "We invite companies to visit SJSU -- and we can come to you. Students want to hear stories from experienced professionals and learn about career opportunities during and after college. Past collaborators include Qualcomm, Lockheed Martin, and Johnson & Johnson.",
    image: "/home/header/2_home_header_img.jpg",
  },
  {
    name: "Conferences",
    body: "Selected members attend SASE conferences where they connect with other students and industry professionals, take part in workshops, and explore nationwide opportunities at career fairs. We attend two each year: STEM Connect and the West Regional Conference.",
    image: "/home/header/4_home_header_img.jpg",
  },
  {
    name: "Social",
    body: "Members become closer knit by attending our social events, and mentor-mentee pairs are created through our Mentorship program. From beach days to cultural celebrations, we want every member to feel invited and to call SASE their second home.",
    image: "/home/header/1_home_header_img.jpg",
  },
];

/**
 * TODO(sase): keep this list current each semester. Entries are shown on the
 * home page and here; remove them once they have passed.
 */
export const upcoming: UpcomingEvent[] = [
  {
    name: "7th Street Tabling",
    date: "September 8th-9th",
    flyer: "/home/events/event1.png",
  },
  {
    name: "Lockheed Martin Insights",
    date: "September 11th",
    flyer: "/home/events/event2.png",
  },
  {
    name: "1st General Meeting",
    date: "September 12th",
    flyer: "/home/events/event3.png",
  },
];
