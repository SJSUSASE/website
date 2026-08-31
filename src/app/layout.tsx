import type { Metadata } from "next";
import { Albert_Sans } from "next/font/google";
import "./globals.css";
import Nav from "./components/Nav";
import Footer from "./components/Footer";
import { Analytics } from "@vercel/analytics/next";

const albert_sans = Albert_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-albert-sans",
});

export const metadata: Metadata = {
  title: "SASE at SJSU",
  description:
    "Official website for the Society of Asian Scientists and Engineers organization chapter at San Jose State University.",
  keywords: [
    "society of asian scientists and engineers",
    "sase",
    "san jose state university",
    "sjsu",
    "sase at sjsu",
    "sase sjsu",
    "sjsu clubs",
    "sjsu student orgs",
  ],
  authors: [{ name: "SASE at SJSU's Web Development team" }],
  creator: "SASE at SJSU",

  // rest TBD

  //   openGraph: {
  //   title: "Join the Club – Connect, Learn, and Grow at [Your College]",
  //   description:
  //     "Explore upcoming events, meet new people, and build your future with [Club Name] at [College Name].",
  //   url: "https://yourclubsite.com",
  //   siteName: "[Club Name] at [College Name]",
  //   images: [
  //     {
  //       url: "https://yourclubsite.com/og-image.jpg", // ideally 1200x630
  //       width: 1200,
  //       height: 630,
  //       alt: "[Club Name] social preview",
  //     },
  //   ],
  //   locale: "en_US",
  //   type: "website",
  // },

  // twitter: {
  //   card: "summary_large_image",
  //   title: "Join the Club at [College Name]",
  //   description: "Events, resources, and opportunities to grow your college experience.",
  //   images: ["https://yourclubsite.com/og-image.jpg"],
  //   creator: "@yourTwitterHandle",
  // },

  // metadataBase: new URL("https://yourclubsite.com"),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body className={`${albert_sans.variable} antialiased`}>
        <Analytics />
        <Nav />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
