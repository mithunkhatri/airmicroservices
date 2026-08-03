import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";
import StoryReel from "./StoryReel";

const APP_STORE_URL = "https://apps.apple.com/app/id6796916366";
const PLAY_STORE_URL =
  "https://play.google.com/store/apps/details?id=com.airmicroservices.theoutdoorclub";

const DESCRIPTION =
  "The Outdoor Club runs your club: outings with enrolment and captains, a live map for the day itself, shared expenses and a ledger, a members roster, and community-impact outings that hand every volunteer a certificate. No adverts, no tracking.";

export const metadata: Metadata = {
  title: "The Outdoor Club — Run Your Club: Outings, Members, Money & a Live Map",
  description: DESCRIPTION,
  keywords: [
    "The Outdoor Club",
    "club management app",
    "riding club app",
    "trekking club app",
    "outing planner",
    "shared expenses",
    "club ledger",
    "live member map",
    "volunteering certificate",
    "community impact",
  ],
  authors: [{ name: "Air Microservices LLC" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "The Outdoor Club & Activities",
    description:
      "A private platform where clubs organize outings such as road trips, hikes, cycling, off-roading, meetups, conferences, workshops, and other group activities.",
    type: "website",
    locale: "en_US",
    url: "https://airmicroservices.com/theoutdoorclub",
    images: [
      {
        url: "https://airmicroservices.com/theoutdoorclub/social-card.png",
        width: 1200,
        height: 630,
        alt: "The Outdoor Club & Activities",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "The Outdoor Club & Activities",
    description:
      "For any club, however it spends its weekends. No adverts, no tracking.",
    images: ["https://airmicroservices.com/theoutdoorclub/social-card.png"],
  },
  alternates: {
    canonical: "https://airmicroservices.com/theoutdoorclub",
  },
};

/* The store frames each carry their own headline, so they are shown as a strip
   rather than captioned again underneath. Order follows the listing narrative in
   store-assets/README.md. */
const SCREENSHOTS = [
  {
    src: "/theoutdoorclub/screenshots/02-outing.png",
    alt: "An outing's detail screen: itinerary, appointed captains and an open enrolment window.",
  },
  {
    src: "/theoutdoorclub/screenshots/03-impact_pick.png",
    alt: "Choosing a community-impact activity from the catalogue, browsed by country and category.",
  },
  {
    src: "/theoutdoorclub/screenshots/04-impact.png",
    alt: "A beach clean-up planned as an outing: cause, beneficiary, volunteers wanted and a kit list.",
  },
  {
    src: "/theoutdoorclub/screenshots/05-certificate.png",
    alt: "A serialised certificate of community impact issued to a member who attended.",
  },
  {
    src: "/theoutdoorclub/screenshots/06-map.png",
    alt: "The live member map during an outing, with who is ahead and who is sweeping.",
  },
  {
    src: "/theoutdoorclub/screenshots/07-expenses.png",
    alt: "Shared outing expenses: who paid for what and who owes whom.",
  },
  {
    src: "/theoutdoorclub/screenshots/08-finances.png",
    alt: "The club ledger, with receipts attached to each entry.",
  },
  {
    src: "/theoutdoorclub/screenshots/09-members.png",
    alt: "The members roster showing roles, blood groups, emergency contacts and garages.",
  },
  {
    src: "/theoutdoorclub/screenshots/10-feed.png",
    alt: "The club feed with photos, a poll and a pinned notice.",
  },
];

export default function TheOutdoorClubPage() {
  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "MobileApplication",
    name: "The Outdoor Club",
    url: "https://airmicroservices.com/theoutdoorclub",
    image: "https://airmicroservices.com/theoutdoorclub/social-card.png",
    description: DESCRIPTION,
    applicationCategory: "LifestyleApplication",
    operatingSystem: "iOS, Android",
    author: {
      "@type": "Organization",
      name: "Air Microservices LLC",
      url: "https://airmicroservices.com/",
    },
    offers: {
      "@type": "Offer",
      price: "0",
      priceCurrency: "USD",
    },
  });

  return (
    <div className={styles.page}>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd }} />

      {/* Header Navigation */}
      <header className={styles.header}>
        <nav className={styles.nav}>
          <Link href="/" className={styles.backLink}>
            <svg
              viewBox="0 0 24 24"
              width="16"
              height="16"
              stroke="currentColor"
              strokeWidth="2"
              fill="none"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            <span>Air Microservices</span>
          </Link>

          <div className={styles.docLinks}>
            <a href="#story" className={styles.docLink}>
              Why
            </a>
            <a href="#features" className={styles.docLink}>
              Features
            </a>
            <a href="#impact" className={styles.docLink}>
              Community Impact
            </a>
            <a href="#privacy" className={styles.docLink}>
              Privacy
            </a>
            <a href="#get" className={styles.docLink}>
              Get the app
            </a>
          </div>
        </nav>
      </header>

      {/* Hero */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.logoContainer}>
                <Image
                  src="/theoutdoorclub/logo.png"
                  alt="The Outdoor Club logo"
                  width={92}
                  height={92}
                  className={styles.heroLogo}
                  priority
                />
              </div>
              <h1 className={styles.heroTitle}>The Outdoor Club & Activities</h1>
              <p className={styles.heroSubtitle}>
                Plan outings. Bring everyone. Settle expenses. And look back on a year of community impact.
              </p>
              <p className={styles.heroDescription}>
                Plan the trip and open enrolment. Split the fuel. Watch the whole
                group move on one map while it is happening. Keep the books, the
                roster and the rules in the place everybody already looks — and
                hand every volunteer a certificate when the community work is done.
              </p>

              <div className={styles.ctaButtons}>
                <a href="#get" className={styles.ctaPrimary}>
                  Get the app
                </a>
                <a href="#storyline" className={styles.ctaSecondary}>
                  See how it works
                </a>
              </div>

              <div className={styles.heroMeta}>
                <span className={styles.metaBadge}>✓ iOS &amp; Android</span>
                <span className={styles.metaBadge}>✓ Free — no ads, no subscriptions</span>
              </div>
            </div>

            <div className={styles.heroImage}>
              <div className={styles.heroImageFrame}>
                <Image
                  src="/theoutdoorclub/screenshots/01-outings.png"
                  alt="The Outdoor Club's outings screen, showing a nine-day road trip, a sales offsite and a Sunday kitty party all enrolling at once."
                  width={640}
                  height={1387}
                  priority
                  className={styles.heroScreenshot}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* The storyline, as a looping CSS reel — see StoryReel.module.css */}
      <section id="storyline" className={styles.storyline}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>The storyline</span>
          <h2 className={styles.sectionTitle}>One weekend, start to finish</h2>
          <p className={styles.sectionLead}>
            Six beats, on a loop: how an outing goes from a group chat nobody can
            read to a certificate somebody can hand in.
          </p>
          <StoryReel />
        </div>
      </section>

      {/* The story — the problem the app answers */}
      <section id="story" className={styles.story}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Why it exists</span>
          <div className={styles.storyLayout}>
            <h2 className={styles.storyLead}>
              Your club already exists. It is just scattered across a group chat.
            </h2>
            <div className={styles.storyBody}>
              <p className={styles.storyParagraph}>
                The route was agreed four hundred messages ago and nobody can find
                it. Who paid for the fuel is somebody&apos;s memory of a photograph
                of a receipt. Half the group is somewhere on the highway and the
                only way to know where is to ring them one at a time. And the blood
                group of the person who came off at the last bend is on a form in a
                drawer at home.
              </p>
              <p className={styles.storyParagraph}>
                None of that is a chat problem. It is a <strong>club</strong>{" "}
                problem. Clubs have members and roles, a calendar, a set of books,
                and a duty of care towards people who travel together to places
                with no signal — and a chat window can hold none of it.
              </p>
              <p className={styles.storyParagraph}>
                The Outdoor Club gives a club the shape it already has.{" "}
                <strong>
                  A roster with roles, outings with enrolment windows and appointed
                  captains, a ledger with receipts, a live map for the day itself,
                  and the club&apos;s own documents and rules
                </strong>{" "}
                — one app, and nothing in it worth scrolling back for.
              </p>
              <p className={styles.storyParagraph}>
                It is deliberately not a social network. There is no public
                directory, no discovery and no way to reach a club that did not
                invite you. That boundary is enforced in the database rather than
                only in the app, so it holds even against a modified client.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section id="features" className={styles.features}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>What is in it</span>
          <h2 className={styles.sectionTitle}>Everything a club actually does</h2>
          <p className={styles.sectionLead}>
            Six things, each of which a club is currently doing in a spreadsheet, a
            chat thread or somebody&apos;s head.
          </p>

          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🗓️</div>
              <h3 className={styles.featureTitle}>Outings, whatever yours are</h3>
              <p className={styles.featureDescription}>
                A nine-day road trip over a mountain pass, a sales offsite, a Sunday
                kitty party, a conference, a beach clean-up. Each one gets an
                itinerary, an enrolment window, appointed captains and a status that
                moves from planned to under way to done — and each one shows up on
                the same timeline and the same calendar.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🗺️</div>
              <h3 className={styles.featureTitle}>A map for the day itself</h3>
              <p className={styles.featureDescription}>
                Turn sharing on and your club can see where you are — who is ahead,
                who is sweeping, who stopped. It keeps updating with the phone in a
                pocket, because a map that only refreshes when somebody is looking
                at it is no use on a ride. One position per member, no route
                history, and turning it off deletes it.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>💸</div>
              <h3 className={styles.featureTitle}>Money everybody can see</h3>
              <p className={styles.featureDescription}>
                Shared outing expenses that work out who owes whom, and a club
                ledger with receipts attached that every member can read. Any
                circulating world currency. It is record-keeping, not payments — no
                money moves through the app, which is exactly why nobody has to
                trust it with any.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>👥</div>
              <h3 className={styles.featureTitle}>A roster that means something</h3>
              <p className={styles.featureDescription}>
                Members, treasurers and administrators, each scoped to the one club
                that granted it. Blood group and emergency contact where somebody
                can reach them at the roadside rather than in a drawer at home. A
                garage of vehicles and their papers, entered once and carried into
                every club you join.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📣</div>
              <h3 className={styles.featureTitle}>A feed, not a chat</h3>
              <p className={styles.featureDescription}>
                Photos, polls, welcomes and notices that stay pinned instead of
                sinking. Tag a member, or tag <strong>@all</strong>{" "}
                when it really is everybody&apos;s business. Notifications for the handful of
                things that warrant one, and in-app reporting for the things that
                do not.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🏛️</div>
              <h3 className={styles.featureTitle}>Several clubs, one you</h3>
              <p className={styles.featureDescription}>
                Ride with one club and trek with another. Your profile, garage and
                documents follow you into each, because they are yours rather than
                any club&apos;s. Posts, outings, the ledger and the map never cross
                a club boundary — switch clubs in the top bar and the previous one
                goes dark.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Community impact */}
      <section id="impact" className={styles.impact}>
        <div className={styles.container}>
          <div className={styles.impactLayout}>
            <div>
              <span className={styles.eyebrow}>Community impact</span>
              <h2 className={styles.sectionTitle}>
                The clean-up runs on the same rails as the road trip
              </h2>
              <p className={styles.sectionLead}>
                A club that does one drive a year should not have to learn a second
                product to do it. So a community-impact outing is not a module
                bolted on beside the outing — it <em>is</em>{" "}
                an outing, with the
                same enrolment, the same captains, the same expenses and the same
                feed, plus two things: a plan, and a result that adds up across the
                club&apos;s whole history.
              </p>
              <p className={styles.sectionLead}>
                Pick the activity from a catalogue that opens on your own country,
                with the kit list, the safety notes and the thing worth counting
                already written. When it is over, every member who turned up is
                handed a serialised certificate naming the club, the cause and the
                partner — the document a school, a visa desk or an employer&apos;s
                volunteering scheme actually asks for.
              </p>

              <ul className={styles.impactStats}>
                <li className={styles.impactStat}>
                  <span className={styles.impactStatValue}>291</span>
                  <span className={styles.impactStatLabel}>
                    activities in the catalogue, browsable by category and cause
                  </span>
                </li>
                <li className={styles.impactStat}>
                  <span className={styles.impactStatValue}>13</span>
                  <span className={styles.impactStatLabel}>
                    countries, plus the ones that read the same anywhere
                  </span>
                </li>
                <li className={styles.impactStat}>
                  <span className={styles.impactStatValue}>1</span>
                  <span className={styles.impactStatLabel}>
                    certificate per volunteer, issued the moment the outing ends
                  </span>
                </li>
              </ul>
            </div>

            <div className={styles.impactImage}>
              <div className={styles.impactFrame}>
                <Image
                  src="/theoutdoorclub/screenshots/05-certificate.png"
                  alt="A certificate of community impact naming the volunteer, the club, the activity and the number of members who attended."
                  width={640}
                  height={1387}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshot strip */}
      <section className={styles.gallery}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>A look inside</span>
          <h2 className={styles.sectionTitle}>Nine screens, one weekend</h2>
          <p className={styles.galleryHint}>Scroll sideways →</p>
        </div>
        <div className={styles.container}>
          <div className={styles.galleryStrip}>
            {SCREENSHOTS.map((shot) => (
              <div key={shot.src} className={styles.galleryItem}>
                <Image src={shot.src} alt={shot.alt} width={640} height={1387} />
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Privacy */}
      <section id="privacy" className={styles.privacy}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Privacy</span>
          <h2 className={styles.sectionTitle}>
            A club is private. So is the app that runs it.
          </h2>
          <p className={styles.sectionLead}>
            The app asks for real things — a phone number, a blood group, an
            identity document — because a club that meets in person needs them. What
            it does with them is the whole argument.
          </p>

          <div className={styles.privacyGrid}>
            <div className={styles.privacyItem}>
              <h4 className={styles.privacyItemTitle}>Nothing is public</h4>
              <p className={styles.privacyItemText}>
                No directory, no discovery, no profile anybody can look up. You
                reach a club by being invited to it or by founding it. A club you do
                not belong to sees nothing about you at all.
              </p>
            </div>

            <div className={styles.privacyItem}>
              <h4 className={styles.privacyItemTitle}>No adverts, no tracking</h4>
              <p className={styles.privacyItemText}>
                No advertising, no advertising identifier, no analytics, no
                crash-reporting SDK, no tracking across other apps or sites. We
                build no profiles, make no automated decisions about you, and never
                sell or rent your data.
              </p>
            </div>

            <div className={styles.privacyItem}>
              <h4 className={styles.privacyItemTitle}>Location is opt-in and forgetful</h4>
              <p className={styles.privacyItemText}>
                Off until you switch it on, and only ever to the one club you have
                selected. One position per member, overwritten each time. No trail,
                no route log, no history — and switching sharing off deletes the
                position outright.
              </p>
            </div>

            <div className={styles.privacyItem}>
              <h4 className={styles.privacyItemTitle}>Papers are the narrowest thing in it</h4>
              <p className={styles.privacyItemText}>
                Identity and vehicle documents sit in private storage and cannot be
                fetched with a plain link — opening one mints a short-lived signed
                link for that single file. Only you and your club&apos;s
                administrators can open an identity document: not ordinary members,
                not the treasurer. Nothing is verified, and no club should treat it
                as verification.
              </p>
            </div>

            <div className={styles.privacyItem}>
              <h4 className={styles.privacyItemTitle}>Isolation is enforced, not promised</h4>
              <p className={styles.privacyItemText}>
                One club cannot read another&apos;s members, posts, ledger or map.
                That is a row-level rule in the database rather than a check in the
                app, and it is tested as a security property against a real
                Postgres before every release.
              </p>
            </div>

            <div className={styles.privacyItem}>
              <h4 className={styles.privacyItemTitle}>Leaving is a real choice</h4>
              <p className={styles.privacyItemText}>
                Leave one club and keep your account, your other clubs and your
                garage. Or close the account entirely, from Settings. Either way you
                decide what becomes of what you wrote — deleted, or left behind with
                your name detached. Full detail in the{" "}
                <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Who it is for */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <span className={styles.eyebrow}>Who it is for</span>
          <h2 className={styles.sectionTitle}>
            If a group of adults goes somewhere together, this is for them
          </h2>
          <p className={styles.sectionLead}>
            The name says outdoors and the emblem has a mountain on it, but an
            outing is whatever your club says it is.
          </p>

          <div className={styles.useCaseGrid}>
            <div className={styles.useCaseCard}>
              <h3>Riding &amp; off-road clubs</h3>
              <p>
                Convoys over passes with no signal, a sweep rider who needs to know
                who is behind, fuel and stay split eight ways, and a garage of bikes
                with their papers in it.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Trekking &amp; walking groups</h3>
              <p>
                Enrolment windows so you know the group size before you book the
                huts, blood groups and emergency contacts on the roster, and a map
                for the stretch where the group spreads out.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Company teams &amp; offsites</h3>
              <p>
                Two days of planning and one evening of karaoke, with who is coming,
                who is driving whom, and what it cost all in one place instead of
                three chat threads and a spreadsheet.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Volunteering &amp; conservation</h3>
              <p>
                A catalogue of 291 activities with the kit list and the safety notes
                already written, and a serialised certificate for every volunteer
                once the day is done.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Neighbourhood &amp; social circles</h3>
              <p>
                Kitty parties, potlucks, family days and dinners — with a running
                kitty that everybody can see, and a feed where the photos stay
                findable.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Alumni, learning &amp; conferences</h3>
              <p>
                Workshops, training and group travel to a conference, run by
                appointed captains rather than by whoever happens to be an
                administrator.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Get the app */}
      <section id="get" className={styles.downloads}>
        <div className={styles.container}>
          <div className={styles.downloadsInner}>
            <h2 className={styles.downloadsTitle}>Start a club, or join yours</h2>
            <p className={styles.downloadsText}>
              Free — no advertisements, no in-app purchases, no subscriptions. Sign
              up, found your club in a short setup wizard, pick its name, crest and
              two brand colours, and invite the first members by email.
            </p>

            <div>
              <span className={styles.comingSoon}>
                Launching shortly on both stores
              </span>
            </div>

            <div className={styles.badgesContainer}>
              <a
                href={PLAY_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badgeLink}
              >
                <Image
                  src="/theoutdoorclub/badges/google-play-badge.png"
                  alt="Get The Outdoor Club on Google Play"
                  width={220}
                  height={65}
                />
              </a>

              <a
                href={APP_STORE_URL}
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badgeLink}
              >
                <Image
                  src="/theoutdoorclub/badges/download_on_appstore_badge.svg"
                  alt="Download The Outdoor Club on the App Store"
                  width={220}
                  height={65}
                />
              </a>
            </div>

            <p className={styles.downloadsNote}>
              Questions first? The{" "}
              <Link href="/theoutdoorclub/faq">FAQ</Link> answers most of them —
              what is required and what is optional, who can see what, and how to
              leave. Anything else, write to{" "}
              <a href="mailto:toc@airmicroservices.com">toc@airmicroservices.com</a>.
            </p>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>The Outdoor Club</h4>
              <p className={styles.footerText}>
                A private platform where clubs organize outings such as road trips, hikes, cycling, off-roading, meetups, conferences, workshops, and other group activities.
              </p>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>App</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href={PLAY_STORE_URL} target="_blank" rel="noopener noreferrer">
                    Google Play
                  </a>
                </li>
                <li>
                  <a href={APP_STORE_URL} target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                </li>
                <li>
                  <a href="#features">Features</a>
                </li>
                <li>
                  <a href="#impact">Community Impact</a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Legal</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/theoutdoorclub/terms">Terms &amp; Conditions</Link>
                </li>
                <li>
                  <Link href="/theoutdoorclub/faq">FAQ</Link>
                </li>
                <li>
                  <a href="mailto:toc@airmicroservices.com">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Air Microservices LLC. All rights reserved.</p>
            <p>
              The Outdoor Club is a product of{" "}
              <Link href="/">Air Microservices LLC</Link>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
