import React from "react";
import Link from "next/link";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Outdoor Club FAQ | Air Microservices",
  description:
    "Frequently asked questions about The Outdoor Club: clubs and invitations, outings, location sharing, notifications, documents, club finances, privacy and account deletion.",
  robots: {
    index: true,
    follow: true,
  },
};

export default function TheOutdoorClubFAQ() {
  const currentYear = new Date().getFullYear();
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: [
      {
        "@type": "Question",
        name: "What is The Outdoor Club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The Outdoor Club is a private app for running a riding or outdoor club: its members, its outings, a shared feed, a live map during an outing, shared expenses and a club ledger, plus the club's documents and rules. It is not a social network — there is no public directory and no way to find a club you were not invited to.",
        },
      },
      {
        "@type": "Question",
        name: "How do I join a club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Either an administrator invites your email address and you accept the invitation the next time you sign in, or you found a club yourself, which makes you its administrator. There is no way to browse or request to join a club from inside the app.",
        },
      },
      {
        "@type": "Question",
        name: "Can I belong to more than one club?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes. You switch between them from the top bar. Your profile, your garage and your documents follow you to every club you belong to, because they belong to you rather than to a club. Posts, outings, the ledger and the map belong to a single club and are never visible from another.",
        },
      },
      {
        "@type": "Question",
        name: "Who can see my profile, blood group and emergency contact?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "The members of the clubs you belong to, for your profile, blood group, emergency contact and garage. Your identity documents are narrower: only you and your club's administrators can open those. Nothing in the app is public, and a club you do not belong to sees nothing about you at all. One identity document is required to complete a membership; blood group, an emergency contact, a profile photo, birthday and your garage are optional.",
        },
      },
      {
        "@type": "Question",
        name: "Is location sharing always on?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. It is off until you turn it on from the map screen, and you can turn it off there at any time. While it is on your position is shown to the one club you have selected, and it keeps updating in the background so the map stays useful during an outing. Only your latest position is kept — there is no route history — and turning sharing off deletes it.",
        },
      },
      {
        "@type": "Question",
        name: "Does the app keep a history of where I have been?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The app stores one position per member and overwrites it each time. There is no trail, no route log and no history of your movements.",
        },
      },
      {
        "@type": "Question",
        name: "What notifications will I get?",
        acceptedAnswer: {
          "@type": "Answer",
            text: "When a member joins or leaves your club, when you are tagged in a post, when a post is addressed to the whole club with the @all tag, when a transaction is recorded in the club ledger, and when an outing you enrolled on sets off. You are asked once for permission; if you decline, the app works normally and simply tells you nothing while it is closed.",
        },
      },
      {
        "@type": "Question",
        name: "Does the app show adverts or track me?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. There is no advertising, no analytics, no crash-reporting SDK and no cross-app tracking anywhere in the app. We do not profile you and we never sell or rent your data.",
        },
      },
      {
        "@type": "Question",
        name: "Is The Outdoor Club free?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Yes, it is currently free, with no advertisements, in-app purchases or subscriptions. We may introduce paid features in future, and if we do we will say so in advance and never charge without your express agreement.",
        },
      },
      {
        "@type": "Question",
        name: "Does the app handle money?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "No. The ledger and shared-expense features are record-keeping only. No money passes through the app: it does not process payments, hold funds or settle debts between members. Every figure in it was typed in by a member.",
        },
      },
      {
        "@type": "Question",
        name: "How do I leave a club without deleting my account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "From the club screen. Your membership ends and that club stops seeing you, while your account, your other clubs and your garage are untouched. You choose whether the posts and comments you wrote in that club are deleted or simply detached from your name. A club's only administrator must first appoint another administrator or close the club.",
        },
      },
      {
        "@type": "Question",
        name: "How do I delete my account?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Settings, then Danger Zone, then Close My Account. It is irreversible: it ends every club membership and deletes your login, profile, garage, documents, photo and location record. You choose whether your posts and comments go with it or stay with your name removed. If you cannot reach the app, email toc@airmicroservices.com from the account's address and we will delete it within 30 days.",
        },
      },
      {
        "@type": "Question",
        name: "Where is my data stored?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "In a database and file storage hosted by Supabase in its Mumbai, India region. Full detail, including the safeguards for members in the EEA and the UK, is in the Privacy Policy.",
        },
      },
      {
        "@type": "Question",
        name: "Why does the club want an identity document?",
        acceptedAnswer: {
          "@type": "Answer",
          text: "Club members meet in person, travel together to remote places and share their live position during an outing, so the club's administrators need to satisfy themselves that whoever turns up is the person they invited. Any government document is accepted - a passport, a national ID or a driving licence - and uploading one is required to complete a membership. It is stored privately and retrieved only through short-lived signed links, and only you and your club's administrators can open it - not ordinary members and not the treasurer. We do not check or verify it, and no club should treat its presence as verification.",
        },
      },
    ],
  });

  return (
    <div className={styles.page}>
      <header className={styles.legalHeader}>
        <div className={styles.legalContainer}>
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
              style={{ marginRight: "0.25rem" }}
            >
              <line x1="19" y1="12" x2="5" y2="12" />
              <polyline points="12 19 5 12 12 5" />
            </svg>
            Back to Air Microservices
          </Link>
          <span className={styles.appName}>The Outdoor Club</span>
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <div className={styles.meta}>
            <span>Last updated: July 31, {currentYear}</span>
          </div>
        </div>
      </header>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <main className={styles.bodyContent}>
        <div className={styles.legalContainer}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>General</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What is The Outdoor Club?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  It is a private app for running a riding or outdoor club: who its members are, what outings it has planned, a shared feed, a live map while an outing is under way, shared expenses and a club ledger, and the club&apos;s own documents and rules.
                </p>
                <p className={styles.paragraph}>
                  It is deliberately not a social network. There is no public directory, no discovery and no way to see a club you have not been invited to or founded yourself.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Which platforms are supported?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Android and iOS, through their respective app stores. Check the store listing for the current minimum operating system version.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Is it free?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Yes, currently free — no advertisements, no in-app purchases, no subscriptions. We may introduce paid features in future. If we do, we will say so clearly in advance, nothing will be charged without your express agreement, and nothing you have already done will be charged for retroactively.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What do I have to provide, and what is optional?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  <strong>Required to finish joining:</strong> your name, phone number, city, gender, t-shirt size, and a photograph of one identity document — a passport, a national ID or a driving licence, whichever you have. The app will not let you complete setup without them, and your name and phone number cannot be cleared afterwards.
                </p>
                <p className={styles.paragraph}>
                  <strong>Optional:</strong> your blood group, an emergency contact, a profile photo, your profession, your birthday (day and month only), the year you started going on outings, the year you joined, a federation membership number, a second identity document, any other papers, and your garage — which may stay empty.
                </p>
                <p className={styles.paragraph}>
                  Blood group and emergency contact are both there for one purpose: so that whoever is with you when something goes wrong can hand a paramedic something useful. Both are optional — blood group because it is health data, and the emergency contact because it is somebody else&apos;s name and number rather than yours to give away. Filling them in is strongly worth doing before an outing all the same.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Is there a minimum age?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  You must be 18 or older. The app is built for adult club members and asks for a government identity document. It never asks for your age or date of birth — the birthday field stores a day and month only, so the app cannot work out how old you are.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Clubs &amp; Membership</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I join a club?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  One of two ways. An administrator invites your email address, and the invitation is waiting for you the next time you sign in — you can accept or decline it. Or you found a club yourself, which makes you its administrator.
                </p>
                <p className={styles.paragraph}>
                  If you were invited before you had an account, the email contains a link that sets your password and then hands you the invitation.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Can I belong to more than one club?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Yes, and you switch between them from the top bar. Your profile, your garage and your documents follow you into every club you belong to, because they are yours rather than any club&apos;s — which also means you enter your motorcycle once, not once per club.
                </p>
                <p className={styles.paragraph}>
                  Everything else is walled off. Posts, outings, the ledger and the map belong to one club and are never visible from another.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What can a club administrator do?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Invite and remove members, decide who is a member, treasurer or administrator, create and run outings, appoint outing captains, edit the club&apos;s branding, documents and rules, pin or remove posts and comments, act on reports, and close the club. A treasurer can additionally keep the club&apos;s books.
                </p>
                <p className={styles.paragraph}>
                  A role applies only in the club it was given in. Running one club confers nothing in another.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Who can see my profile?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  The members of the clubs you belong to. That includes your blood group, emergency contact and garage — a club that cannot see who is riding with it cannot look after them.
                </p>
                <p className={styles.paragraph}>
                  Your <strong>identity documents are narrower</strong>: only you and your club&apos;s administrators can open those. Ordinary members cannot, and neither can the treasurer.
                </p>
                <p className={styles.paragraph}>
                  A club you do not belong to sees nothing about you. This is enforced in the database rather than only in the app, so it holds even against a modified client.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What happens if I am removed or suspended?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Being removed from a club ends that membership only — your account and any other clubs are untouched, and you are returned to the club picker. Being suspended is also per club: it stops you acting in that club and nowhere else.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Outings &amp; the Map</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Is location sharing always on?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. It is off until you turn it on from the map screen, and you can turn it off there whenever you like. While it is on, your position is shown to the members of the one club you have selected — switch clubs and it stops rather than reporting you to a club you did not choose.
                </p>
                <p className={styles.paragraph}>
                  It does keep updating while the app is in the background, because a map that only refreshes when somebody is looking at their phone is no use on a ride. Your device shows its own indicator while that is happening.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Does it keep a history of where I have been?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. One position per member, overwritten each time. There is no trail, no route log and no history. Turning sharing off deletes the position entirely and your pin disappears from everybody else&apos;s map.
                </p>
                <p className={styles.paragraph}>
                  Until you turn it off, your last reported position stays visible to your club even if it is hours old — so stop sharing when your outing ends.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Can I rely on the map to know somebody is safe?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No, and please do not. A pin can be minutes or hours old, a phone can lose signal or run out of battery, and a member may not be sharing at all. The map is an aid for regrouping, not a safety system. If somebody is in difficulty, call the emergency services.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What is an outing captain?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  A member trusted to run one particular outing — to advance its status, check people in and correct the plan — without being an administrator of the club. Captains are appointed by administrators, and being one says nothing about your standing in the club.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What happens if an outing is cancelled?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  It is marked cancelled rather than deleted, and everything attached to it — enrolments, expenses, feed posts — is kept. Members had already committed to a date, and an outing that simply vanished would tell them nothing.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Notifications</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What will I be notified about?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  When a member joins your club, and you are an administrator; when you yourself join, as a welcome; when a member leaves, again for administrators; when you are tagged in a post; when a post is addressed to the whole club; when money is recorded in the club ledger, if you are an administrator or treasurer; and when an outing you enrolled on sets off.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What does the @all tag do?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Writing <strong>@all</strong> in a post notifies every member of the club, and sends part of what you wrote with it. It is offered in the composer&apos;s suggestion list, labelled so it is clear what it will do. The app also adds it automatically to the one post that warrants it — the announcement that enrolment for an outing has opened, since an outing nobody hears about is an outing nobody joins.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>I said no to notifications. Can I change my mind?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Yes, but it has to be done in your device settings — once you have declined, neither iOS nor Android will let the app ask again. Settings inside the app shows a Notifications row that explains this and takes you straight there.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Are notifications guaranteed to arrive?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. They travel through Expo and then Apple or Google, any of which may delay or drop one, as may your own device&apos;s battery settings. Nothing time-critical should depend on a notification arriving.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>I signed out. Will my phone still buzz?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. Signing out withdraws the device, so whoever uses the phone next does not receive notifications meant for you.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Documents &amp; Money</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Why does my club want an identity document?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Club members meet in person, travel together to remote places and share their live position during an outing, so a club&apos;s administrators need to satisfy themselves that whoever turns up is the person they invited. Uploading one document is <strong>required</strong> to finish joining — the app will not let you past that step without it. The second one beside it is optional.
                </p>
                <p className={styles.paragraph}>
                  <strong>Any government document is accepted</strong> — a passport, a national identity card, or a driving licence. The app does not ask for one in particular: clubs differ, and a walking club has no reason to want a licence.
                </p>
                <p className={styles.paragraph}>
                  We do not check or verify what you upload. No club should treat the presence of a document in the app as verification of it.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How are my documents stored?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Identity documents, vehicle papers and receipts are held in private storage and cannot be fetched with a plain link — opening one issues a short-lived signed link for that single file, and only to somebody entitled to it. For an identity document that means you and your club&apos;s administrators only. Profile photos, post photos and club artwork are stored without individual access control, because they exist to be shown to your club.
                </p>
                <p className={styles.paragraph}>
                  One thing worth knowing: on Android a PDF cannot be drawn inside an app by the operating system, so a PDF you open is rendered through Google&apos;s document viewer, which means Google receives that file. Upload an image instead of a PDF if you would rather it did not.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Does the app take payments?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. The ledger and the shared-expense split are record-keeping tools. No money moves through the app — it does not process payments, hold funds, or settle up between members. Every figure was typed in by somebody, and how the club actually settles is up to the club.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Who can see the club&apos;s books?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Every member of the club can see the ledger. Administrators and treasurers can add to and correct it. Shared outing expenses can be added by any member, and corrected by whoever logged them or by an administrator.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Privacy &amp; Your Data</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Do you show adverts, or track me?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. There is no advertising, no advertising identifier, no analytics, no crash-reporting SDK and no tracking across other apps or sites. We build no profiles, make no automated decisions about you, and never sell or rent your data.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Where is my data stored?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  In a database and file storage hosted by Supabase in its Mumbai, India region. If you are in the EEA or the UK, the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link> sets out the transfer and the safeguards we rely on.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What third parties are involved?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Supabase for hosting, authentication, storage and email; Expo with Apple or Google to deliver notifications; OpenStreetMap for place search and, on Android, map tiles; Apple Maps on iOS; and Google&apos;s viewer to render a PDF on Android. All of them are named, with what each receives, in the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Is the biometric lock the same as encryption?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No, and it is worth being clear about. The optional biometric lock asks for your fingerprint or face when the app opens; it keeps a casual passer-by out but does not encrypt anything on the device. Use a device passcode as well.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Leaving &amp; Deleting</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I leave a club but keep my account?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  From the club screen. That membership ends and the club stops seeing you, while your account, your other clubs and your garage are untouched. You are asked what should become of the posts and comments you wrote there: delete them, or leave them behind with your name detached, shown as &quot;Former Member&quot;.
                </p>
                <p className={styles.paragraph}>
                  If you are the club&apos;s only administrator you have to make somebody else an administrator first, or close the club — otherwise it would be left with nobody able to run it.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I delete my account?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Settings → Danger Zone → Close My Account. It is irreversible. It ends every club membership and deletes your login, profile, garage, documents, profile photo, reactions, poll votes, push tokens and location record, and you make the same choice about your posts and comments across every club.
                </p>
                <p className={styles.paragraph}>
                  If you cannot reach the app, email <a href="mailto:toc@airmicroservices.com">toc@airmicroservices.com</a> from the address on the account and we will verify the request and delete it within 30 days.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What does my club keep after I go?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Its books and its history: ledger entries, shared outing expenses, receipts and past outings, all with your name detached. A club&apos;s accounts are its own records, and one member&apos;s departure cannot rewrite them. If you think a specific record should still be erased, write to us.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What happens if the club closes?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Its posts, outings, ledger, documents and rules go with it. Members keep their accounts, their other clubs, their profiles and their garages — a club folding does not take away the motorcycle somebody rode to its outings.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I get a copy of my data?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Email <a href="mailto:toc@airmicroservices.com">toc@airmicroservices.com</a> and we will send it within 30 days, at no charge. Your rights are set out in the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Trouble</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>My invitation link opened a browser instead of the app</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Make sure the app is installed before following the link, and open the link on the same device. An invitation link works only once — if it has already been used, ask your club to send another.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>I am signed in but see no club</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  That is what you see with no membership yet: either an invitation is waiting to be accepted, or you can found a club of your own from the picker. It is also where you land after leaving your last club.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Nobody appears on the map</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Only members who have turned sharing on appear. Check that you and they have granted location permission, that sharing is switched on for the club you are looking at, and that background location is allowed if you want it to keep working with the app closed.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Questions or bug reports</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Contact us at <a href="mailto:toc@airmicroservices.com">toc@airmicroservices.com</a>. See also the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link> and the <Link href="/theoutdoorclub/terms">Terms &amp; Conditions</Link>.
                </p>
              </div>
            </details>

          </section>

        </div>
      </main>
    </div>
  );
}
