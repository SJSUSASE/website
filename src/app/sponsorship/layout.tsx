import type { Metadata } from "next";
import type { ReactNode } from "react";
import SponsorshipSubnav from "../components/SponsorshipSubnav";

export const metadata: Metadata = {
  title: "Sponsorship | SASE at SJSU",
  description:
    "Partner with the Society of Asian Scientists and Engineers at San Jose State University. Sponsorship tiers, conference support, and the Kickstarter program for the 2025-2026 academic year.",
};

export default function SponsorshipLayout({
  children,
}: {
  children: ReactNode;
}) {
  return (
    <>
      <SponsorshipSubnav />
      {children}
    </>
  );
}
