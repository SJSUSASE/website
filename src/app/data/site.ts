/**
 * Site-wide constants: contact details, outbound forms, and socials.
 * Everything that would otherwise be a magic URL scattered across pages.
 */

export const site = {
  name: "SASE at SJSU",
  chapterFounded: 2017,
  email: "sase.sjsu@gmail.com",
  address: "San Jose State University, 1 Washington Sq, San Jose, CA",
} as const;

export const forms = {
  /** General member sign-up. */
  memberSignUp: "https://tinyurl.com/SASEMEMBERSHIP26-27",
  /** Company sponsorship interest form (from the 2025-2026 package). */
  sponsorship: "https://forms.gle/6ZrTaPgj1e3Cffdo7",
} as const;

/** Served from public/ -- see public/sponsorship/. */
export const sponsorshipPackagePdf =
  "/sponsorship/SJSU-SASE-Sponsorship-Package-2026-2027.pdf";

export type Social = {
  name: string;
  href: string;
  icon: string;
};

export const socials: Social[] = [
  {
    name: "Instagram",
    href: "https://www.instagram.com/sase.sjsu",
    icon: "/home/socials/instagram_logo.png",
  },
  {
    name: "Discord",
    href: "https://discord.com/invite/PgzQkRu",
    icon: "/home/socials/discord_logo.png",
  },
  {
    name: "LinkedIn",
    href: "https://www.linkedin.com/company/society-of-asian-scientists-and-engineers-sase-san-jose-state-university-chapter/",
    icon: "/home/socials/LinkedIn_logo.png",
  },
  {
    name: "Newsletter",
    href: "https://weebly.us17.list-manage.com/subscribe?u=65b8f622bdb334aaf390e488d&id=043b01ba62",
    icon: "/home/socials/newsletter.png",
  },
];
