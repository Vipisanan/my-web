import type { Metadata } from "next";
import { Schibsted_Grotesk, JetBrains_Mono } from "next/font/google";
import "./globals.css";
import { PROFILE, SITE_URL, SOCIALS } from "@/data/profile";

const schibstedGrotesk = Schibsted_Grotesk({
  variable: "--font-schibsted-grotesk",
  subsets: ["latin"],
  display: "swap",
});

const jetbrainsMono = JetBrains_Mono({
  variable: "--font-jetbrains-mono",
  subsets: ["latin"],
  display: "swap",
});

const title = `${PROFILE.name} — ${PROFILE.role}`;
const description =
  "Full stack software engineer with 6+ years in Java, Spring Boot, microservices and ReactJS. Currently building government resource planning software at FreeBalance.";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: title,
    template: `%s | ${PROFILE.name}`,
  },
  description,
  applicationName: PROFILE.name,
  authors: [{ name: PROFILE.name, url: SITE_URL }],
  creator: PROFILE.name,
  keywords: [
    "Vipisanan Esvaramoorthy",
    "software engineer Sri Lanka",
    "Java developer",
    "Spring Boot developer",
    "ReactJS developer",
    "microservices",
    "full stack developer",
    "FreeBalance",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "profile",
    url: SITE_URL,
    siteName: PROFILE.name,
    title,
    description,
    images: [
      { url: PROFILE.photo, width: 1200, height: 1200, alt: PROFILE.name },
    ],
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    site: "@EVipisanan",
    creator: "@EVipisanan",
    title,
    description,
    images: [PROFILE.photo],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: { index: true, follow: true, "max-image-preview": "large" },
  },
  verification: {
    google: "In1dhe70PyT0m1lp3ITNNw2ztYUnKc098m_mS0b5ZCM",
  },
  icons: { icon: "/favicon.ico" },
};

const personSchema = {
  "@context": "https://schema.org",
  "@type": "Person",
  name: PROFILE.name,
  alternateName: PROFILE.shortName,
  jobTitle: PROFILE.role,
  email: `mailto:${PROFILE.email}`,
  telephone: PROFILE.phone,
  url: SITE_URL,
  image: `${SITE_URL}${PROFILE.photo}`,
  address: {
    "@type": "PostalAddress",
    addressLocality: "Colombo",
    addressCountry: "LK",
  },
  worksFor: { "@type": "Organization", name: PROFILE.currentCompany },
  alumniOf: { "@type": "CollegeOrUniversity", name: "University of Kelaniya" },
  knowsAbout: [
    "Java",
    "Spring Boot",
    "Microservices",
    "ReactJS",
    "TypeScript",
    "AWS",
    "Docker",
  ],
  sameAs: SOCIALS.map((s) => s.url),
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <body
        className={`${schibstedGrotesk.variable} ${jetbrainsMono.variable} antialiased`}
      >
        {/* Applies the saved theme before first paint so there is no flash. */}
        <script
          dangerouslySetInnerHTML={{
            __html:
              "try{var t=localStorage.getItem('theme')||'dark';document.documentElement.classList.toggle('dark',t==='dark');document.documentElement.classList.toggle('light',t==='light')}catch(e){}",
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(personSchema) }}
        />
        {children}
      </body>
    </html>
  );
}
