import React from "react";
import Link from "next/link";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Outdoor Club Privacy Policy | Air Microservices LLC",
  description:
    "Privacy Policy for The Outdoor Club: what the app collects, who in your club can see it, where it is stored, and how to delete it.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TheOutdoorClubPrivacy() {
  const currentYear = new Date().getFullYear();

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
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.meta}>
            <span>Effective Date: July 31, 2026</span>
          </div>
        </div>
      </header>

      <main className={styles.bodyContent}>
        <div className={styles.legalContainer}>

          <div className={styles.callout}>
            <span className={styles.calloutTitle}>In short</span>
            <p className={styles.calloutText}>
              The Outdoor Club is a private app for a club and its members. Everything it holds about you, you typed in or chose to share. There is <strong>no advertising, no analytics, no tracking and no profiling</strong> anywhere in the app, and we do not sell or rent your data to anyone. What you enter is visible to the clubs you belong to — not to the public, and not to other clubs. You can leave a club or close your account from inside the app at any time, and you get a real choice about what happens to the things you wrote.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Who we are and what this covers</h2>
            <p className={styles.paragraph}>
              This Privacy Policy describes how Air Microservices LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles personal data in The Outdoor Club mobile application (&quot;The Outdoor Club&quot; or the &quot;App&quot;). It covers the App and the backend service it talks to. It does not cover anything your club does outside the App.
            </p>
            <p className={styles.paragraph}>
              For members in the European Economic Area and the United Kingdom, Air Microservices LLC is the data controller for the purposes of the UK GDPR and the EU General Data Protection Regulation. Your club&apos;s administrators also make decisions about your data within the App — see <strong>section 5</strong>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. How the App is organised, and why it matters here</h2>
            <p className={styles.paragraph}>
              The Outdoor Club holds many clubs in one service. You cannot browse it: you either found a club yourself or an administrator invited you by email address. A club sees only its own data, enforced in the database rather than only in the App.
            </p>
            <p className={styles.paragraph}>
              You may belong to more than one club. Your profile, your garage and your documents belong to <em>you</em> rather than to any one club, and each club you belong to can see them. Everything else — posts, outings, the club ledger, positions on the map — belongs to a single club and is never visible from another.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. What we collect</h2>
            <p className={styles.paragraph}>
              All of it is entered by you or produced by your own use of the App. None of it is bought, inferred, scraped or obtained from third parties.
            </p>

            <h3 className={styles.sectionTitle} style={{ fontSize: "1.05rem" }}>Account and profile</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Required:</span> email address and password. The password is handled by our authentication provider and is stored only as a salted hash — we never see or store it in readable form.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Required to complete joining:</span> your full name, phone number, city, gender and t-shirt size. The app will not let you finish setting up your membership without them, and the first two cannot be cleared afterwards.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Optional:</span> a profile photo, your profession, the year you started going on outings, the year you joined the club, and a federation or association membership number.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Birthday:</span> optional, and day and month only. The App deliberately has no field for the year, so it never learns your age.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Blood group: optional.</span> Collected for one reason — so that whoever is with you on an outing can give it to a paramedic. This is health data and is treated as a special category of personal data, which is why it is asked for rather than demanded: the picker carries a <em>&quot;Prefer not to say&quot;</em> option, you can complete your membership without it, and you can clear it again at any time from your profile.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Emergency contact: optional.</span> A name and a phone number, offered rather than demanded and clearable at any time. This is somebody else&apos;s personal data, which is the main reason it is not compulsory — please make sure they are content for you to give it to your club, and tell them where it is.
              </li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: "1.05rem" }}>Documents</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>One identity document: required.</span> Uploading one is a condition of completing your membership — the App says so plainly at that step and will not let you past it. <strong>Any government-issued document is accepted</strong>: a passport, a national identity card, or a driving licence. The App does not ask for one in particular, because clubs differ and a walking club has no reason to want a licence. Members of a club meet in person, travel together to remote places, and share their live position with one another for the length of an outing; one document on file is what lets a club&apos;s administrators satisfy themselves that the person arriving is the person they invited.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>A second identity document:</span> optional.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Any other papers you choose to add:</span> optional — a passport, a medical certificate, a federation card, vehicle registration and insurance papers.
              </li>
            </ul>
            <p className={styles.paragraph}>
              <strong>Nothing you upload is checked or verified.</strong> The App stores the file and shows it to the people listed in section 6. There is no automated reading of the document, no identity-verification service, and no third party is sent it. We say &quot;on file&quot;, never &quot;verified&quot;, and you should not treat another member&apos;s document as having been confirmed by us.
            </p>
            <p className={styles.paragraph}>
              Identity documents are a special category of personal data in some jurisdictions. How they are stored, and who can retrieve them, is set out in <strong>section 7</strong>. How long they are kept is set out in <strong>section 12</strong>.
            </p>

            <h3 className={styles.sectionTitle} style={{ fontSize: "1.05rem" }}>Vehicles</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Optional. Make, model, year and registration plate of each vehicle you add, plus any documents you attach to it. Your garage may stay empty, and vehicles can be added or removed at any time.
              </li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: "1.05rem" }}>Location</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Precise position, including in the background</span> — but only while you have turned sharing on, and only for the one club you are currently viewing. This is covered in full in <strong>section 6</strong>.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Places you search for</span> when planning an outing or setting a club&apos;s base location. See <strong>section 8</strong> for who receives those searches.
              </li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: "1.05rem" }}>Things you and your club create</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                Posts, photos, comments, reactions, poll votes, and the members you tag in a post.
              </li>
              <li className={styles.listItem}>
                Outings: titles, descriptions, routes, waypoints, itineraries, who enrolled, who was checked in, and which vehicle they brought.
              </li>
              <li className={styles.listItem}>
                Money: entries in the club ledger and shared outing expenses — title, amount, category, date, description and any receipt image. The App records what a club spent; it never takes a payment. See <strong>Terms, section 10</strong>.
              </li>
              <li className={styles.listItem}>
                Reports you file about a post or comment, and the outcome an administrator recorded.
              </li>
              <li className={styles.listItem}>
                Club material: the club&apos;s name, crest, colours, base location, founding year, contact email, documents, artwork and rules.
              </li>
            </ul>

            <h3 className={styles.sectionTitle} style={{ fontSize: "1.05rem" }}>Technical</h3>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Push notification token:</span> an identifier for the app installation on your device, stored only if you allow notifications. See <strong>section 9</strong>.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Device name:</span> stored alongside that token, so the record is recognisable. It is never sent anywhere.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Server logs:</span> our backend provider records request metadata, including IP addresses, for security and troubleshooting.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. What we do not collect</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>No analytics or crash-reporting SDKs.</span> The App contains no Google Analytics, no Firebase Analytics, no Crashlytics, no Sentry, and nothing comparable. We do not measure how you use the App.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>No advertising and no tracking.</span> There are no ad networks, no advertising identifiers, and no tracking of you across other apps or websites. We do not build profiles and we make no automated decisions about you.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>No address book, no calendar, no microphone, no camera roll scanning.</span> The App never reads your contacts or your calendar and does not record audio. When you pick a photo or a file, it receives only the file you chose.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>No age or date of birth</span>, as explained above.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>We never sell, rent or trade your personal data</span>, and we do not share it for anybody else&apos;s marketing.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Who can see your data</h2>
            <p className={styles.paragraph}>
              Nothing in the App is public. Visibility is enforced by row-level security rules in the database, so a request for another club&apos;s data is refused by the database itself rather than merely hidden by the App.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Members of your club</span> can see your profile — including your blood group, emergency contact and garage if you filled them in, and your vehicles&apos; papers — along with your posts, your outing enrolments and your position on the map while you are sharing it. This is the point of the app: a club that cannot see who is riding with it cannot look after them.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Your identity documents are narrower.</span> Your identity document and any other papers you attach to your profile are visible only to <strong>you and your club&apos;s administrators</strong> — not to ordinary members, and not to the treasurer. They are collected so that whoever runs the club can satisfy themselves that the person turning up to an outing is the person they invited, and that is the only reason anybody else sees them. An administrator keeps that access if they suspend a member, since a suspension does not undo the check the club admitted them on.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Club administrators</span> can additionally invite and remove members, change what a member may do, pin or remove posts and comments, act on reports, and close the club. An administrator can see the profile of a member they have suspended.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Treasurers and administrators</span> can see and edit the club ledger. A treasurer gets no access to anybody&apos;s identity documents: keeping the books has nothing to do with a member&apos;s passport.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Other clubs you belong to</span> see your profile and your garage, because those belong to you rather than to a club — and their administrators, like the first club&apos;s, can see your identity documents. They see nothing of another club&apos;s posts, outings, ledger or map.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Clubs you do not belong to</span> see nothing about you at all.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Platform administrators.</span> A small number of accounts operated by Air Microservices LLC can select any club on the platform in order to support and moderate the service, and while doing so have the powers of an administrator of that club. Such an account is protected by mandatory two-factor authentication, and it is not counted as a member of the club — it never appears on the club&apos;s map. We use this only where it is necessary to run the service, to resolve a fault, or to meet a legal obligation.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Location, in detail</h2>
            <p className={styles.paragraph}>
              Location is the most sensitive thing the App handles, so it is worth being precise about.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>It is off until you turn it on.</span> Sharing is never enabled by default. You start it from the map screen, and you can stop it there at any time.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Why it exists:</span> so that the members of a club can see each other on a map during an outing — to regroup, to catch up, and to find somebody who has stopped.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>It continues in the background.</span> With your permission the App keeps reporting your position while it is not on screen, because a map that only updates when somebody is staring at their phone is no use on a ride. Your device will show its own indicator while this is happening.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>One club at a time.</span> Your position is reported to the single club you were viewing when you turned sharing on. If you switch clubs, the App checks that the club it is reporting to is still the one you have selected, and stops rather than reporting your position to a club you did not choose.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Only your latest position is kept</span> — one record per member, overwritten each time. The App keeps no history, no route log and no trail of where you have been.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Turning sharing off deletes that record</span>, and your pin disappears from every other member&apos;s map. Until you turn it off, your last reported position remains visible to your club even if it is some hours old, so stop sharing when your outing ends.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Withdrawing permission.</span> You can revoke location access in your device settings at any time. Nothing else in the App depends on it.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Documents and files</h2>
            <p className={styles.paragraph}>
              Profile photos, post photos and club artwork are stored so that they can be displayed to your club without a delay, and the links to them are not individually access-controlled.
            </p>
            <p className={styles.paragraph}>
              <strong>Identity documents, vehicle papers and expense receipts are stored differently.</strong> They are held in private storage and cannot be fetched with a plain link. When somebody entitled to view one opens it, the service issues a short-lived signed link for that single file, which expires shortly afterwards. Who is entitled differs by kind: identity documents are yours and your administrators&apos;, vehicle papers are visible to your club, a receipt is visible to the club whose ledger it belongs to, and a club&apos;s own documents to that club&apos;s members.
            </p>
            <p className={styles.paragraph}>
              One limitation is worth stating rather than glossing over. Other members of your club can see <em>that</em> you have supplied an identity document — the app records a reference to the file against your profile, and that reference is visible to the club. What they cannot do is open it: retrieving the file needs a signed link, and the service issues one only to you and to your club&apos;s administrators. So the existence of a document is club-visible; its contents are not.
            </p>
            <p className={styles.paragraph}>
              One consequence is worth stating plainly: on Android, a PDF cannot be displayed by the operating system inside an app, so a PDF you open in the App is rendered through Google&apos;s document viewer, which means Google receives that file in order to draw it. Images and PDFs on iOS are rendered on your device and are not sent to anybody. If you would rather Google never received a document, upload it as an image rather than a PDF, or view it on iOS.
            </p>
            <p className={styles.paragraph}>
              You can delete any document you uploaded, from your profile or your garage, at any time — with one exception. The single identity document required for membership can be replaced but not removed while your account is open, because supplying one is a condition of belonging to a club; it is deleted when you close your account. See <strong>section 12</strong>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Processors and other recipients</h2>
            <p className={styles.paragraph}>
              We keep this list short deliberately. Everything the App talks to is named here.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Supabase, Inc.</span> — our database, authentication, file storage and server functions. This is where your data lives. Supabase also sends the App&apos;s invitation and password-reset emails, and keeps server logs including IP addresses. Supabase acts as our processor under a data processing agreement.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Expo (650 Industries, Inc.)</span> — relays push notifications to your device. It receives the notification&apos;s title and text and your device&apos;s push token. Only used if you allow notifications.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Google (Firebase Cloud Messaging)</span> on Android and <span className={styles.listItemStrong}>Apple (Apple Push Notification service)</span> on iOS — deliver that notification the last step to your device, and likewise see its title and text.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Google (Docs viewer)</span> — receives a PDF you open on Android, in order to render it. See <strong>section 7</strong>.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>OpenStreetMap Foundation</span> — receives the text you type when searching for a place, in order to return matching locations, and on Android serves the map tiles, which reveals the area of the map you are looking at. Your IP address is visible to it in both cases.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>unpkg (Cloudflare, Inc.)</span> — serves the mapping library used by the Android map, and sees your IP address when it loads.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Apple (MapKit)</span> — renders the map on iOS.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Google Maps or Apple Maps</span> — when you tap to open a waypoint for directions, the App hands that destination to the maps app you choose. That is a deliberate act on your part each time.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Apple and Google, as app stores</span> — handle distribution and updates under their own privacy policies. We receive no personal data about you from either.
              </li>
            </ul>
            <p className={styles.paragraph}>
              We may also disclose data where we are legally required to, or to establish or defend legal claims. If we ever transfer the service to another company, we will say so here before it happens.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Notifications</h2>
            <p className={styles.paragraph}>
              If you allow notifications, the App registers your device so the service can reach it. You are asked once; if you decline, the App works normally and simply tells you nothing while it is closed. You can change your mind in your device settings.
            </p>
            <p className={styles.paragraph}>
              A notification contains what it needs to be useful, which means real content leaves our service and passes through Expo and then Google or Apple. Concretely, we send notifications when a member joins or leaves your club, when you are tagged in a post, when a post is addressed to the whole club — in which case up to 160 characters of that post travel with it — when money is recorded in the club ledger, including the amount and what it was for, and when an outing you enrolled on sets off.
            </p>
            <p className={styles.paragraph}>
              Your push token is deleted when you sign out, so a phone that changes hands stops receiving another member&apos;s notifications. A record of a notification we sent is kept for up to 30 days and then deleted.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Where your data is stored</h2>
            <p className={styles.paragraph}>
              The database and file storage are hosted by Supabase, Inc. in its <strong>Mumbai, India</strong> region. Server functions run on Supabase&apos;s serverless platform.
            </p>
            <p className={styles.paragraph}>
              Air Microservices LLC is established in the United States. If you are in the European Economic Area, the United Kingdom or Switzerland, your personal data is therefore transferred outside your country — to India, where it is stored, and to the United States and elsewhere insofar as we and the recipients named in section 8 process it. Neither India nor the United States is the subject of a UK or EU adequacy decision that covers these transfers, so we rely on the <strong>European Commission&apos;s Standard Contractual Clauses</strong> (and the UK Addendum where applicable) in our agreements with our processors. You may ask us for further information about these safeguards using the contact details below.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Why we are allowed to process it</h2>
            <p className={styles.paragraph}>
              For members in the EEA and the UK, our legal bases are:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Performance of a contract</span> — your account, your club membership, and the features you use: outings, the feed, the ledger.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Consent</span> — location sharing, notifications, and the optional parts of your profile. Each of these is genuinely a choice: declining any of them leaves the rest of the App working, and you may withdraw consent at any time, which takes effect immediately and does not affect anything done beforehand.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Explicit consent, for special category data</span> — your blood group, and any medical document you choose to upload. Both are optional in the full sense: you can complete a membership without either, nothing else in the App behaves differently if you decline, and clearing or deleting one withdraws that consent immediately, with no effect on anything done beforehand. That is deliberate, because consent that is a condition of being allowed in is not consent at all.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Your identity document is the exception</span>, and it is worth being plain about it: uploading one is required to complete a membership, so it is not offered on the basis of consent. We process it as necessary for the membership itself — a club whose members meet in person, travel together and share their live position has a real interest in establishing who they are admitting. It is ordinary personal data rather than a special category, and the club&apos;s administrators are the only people who can open it. If you would rather no club held one, do not complete a membership; if you have joined and changed your mind, closing your account deletes it.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Legitimate interests</span> — keeping the service secure and available, preventing abuse, and handling reports about content.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Legal obligation</span> — where the law requires us to retain or disclose something.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. How long we keep it</h2>
            <p className={styles.paragraph}>
              We keep your data while your account exists. Beyond that:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Your identity documents</span> — for as long as your account exists, and deleted with it. We keep no copy afterwards and we do not archive them. Leaving a club does not delete them, because they are yours rather than that club&apos;s and your other clubs still rely on them — but that club stops being able to see them the moment you leave. The required document can be <em>replaced</em> at any time and cannot be removed outright while the account is open, since supplying one is a condition of membership; closing your account is what deletes it. Every other document — a second ID, vehicle papers, anything else you attached — can be deleted whenever you like.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Your latest position</span> — until you turn sharing off, or leave the club, or close your account, whichever comes first.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Records of notifications sent</span> — up to 30 days.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Your push token</span> — until you sign out or turn notifications off.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Server logs</span> — for the period our provider retains them, which is a matter of days.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Club financial records</span> — kept by the club for as long as the club exists, even after you go. See below.
              </li>
            </ul>
          </section>

          <section className={styles.section} id="account-deletion">
            <h2 className={styles.sectionTitle}>13. Leaving, and deleting your account</h2>
            <p className={styles.paragraph}>
              Both are in the App, and neither requires you to ask us.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.strongText}>Leaving a club</span> — from the club screen. Your membership ends and that club stops seeing you: your position, your profile and your documents are no longer visible to it. Your account, your other clubs and your garage are untouched. You are asked what should happen to the posts and comments you wrote in that club, and you may either detach them from your name — they remain, attributed to &quot;Former Member&quot; — or delete them outright. If you are the club&apos;s only administrator you must first make somebody else an administrator, or close the club; otherwise the club would be left with nobody able to run it.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.strongText}>Closing your account</span> — Settings → Danger Zone. This is irreversible. It ends every club membership, and deletes your login, your profile, your garage, your documents, your profile photo, your reactions, your poll votes, the record of you being tagged, your push tokens and your location record. You are asked the same question about your posts and comments, and it applies across every club.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.strongText}>What a club keeps.</span> Entries in a club&apos;s ledger, shared outing expenses, receipts, and the history of outings survive your departure, with your name detached from them. A club&apos;s accounts are its own records, and one member leaving cannot rewrite them. If you believe a particular record should nevertheless be erased, write to us.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.strongText}>If a club closes</span>, its posts, outings, ledger, documents and rules are deleted with it. Its members keep their accounts, their other clubs, their profiles and their garages.
            </p>
            <p className={styles.paragraph}>
              <span className={styles.strongText}>If you cannot use the App</span> — because you have lost access to the device or the account — email <strong>toc@airmicroservices.com</strong> from the address the account uses and ask us to delete it. We will verify that the request comes from you and act within 30 days.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Your rights</h2>
            <p className={styles.paragraph}>
              Wherever you are, you may ask us for a copy of your data, to correct it, to delete it, or to receive it in a portable form. If you are in the EEA or the UK you also have the right to restrict or object to processing, to withdraw consent at any time, and to lodge a complaint with your data protection authority — in the EEA, the supervisory authority of your country of residence; in the UK, the Information Commissioner&apos;s Office.
            </p>
            <p className={styles.paragraph}>
              Much of this you can do yourself and immediately: the profile screen edits and deletes your details and documents, the map screen stops location sharing, and the settings screen closes your account. For anything else write to <strong>toc@airmicroservices.com</strong>. We will respond within 30 days and will not charge you.
            </p>
            <p className={styles.paragraph}>
              We do not discriminate against anybody for exercising these rights.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>15. Security</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                All traffic between the App and our service is encrypted with HTTPS. Data is encrypted at rest by our hosting provider.
              </li>
              <li className={styles.listItem}>
                Access is enforced in the database by row-level security, so one club&apos;s data cannot be read by another even if the App were modified or replaced.
              </li>
              <li className={styles.listItem}>
                Passwords are stored only as salted hashes, by our authentication provider. Nobody at Air Microservices LLC can read your password.
              </li>
              <li className={styles.listItem}>
                Platform administrator accounts must complete two-factor authentication with a one-time code before they can reach any club&apos;s data.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>On your device:</span> your signed-in session is held in the App&apos;s own private storage, which other apps cannot read. The optional biometric lock asks for your fingerprint or face when the App opens; it is a convenience that keeps a casual passer-by out, and it does not encrypt the App&apos;s data — a lost or unlocked device remains the main risk to your account, so please use a device passcode.
              </li>
            </ul>
            <p className={styles.paragraph}>
              No service can promise perfect security. If a breach ever affects your personal data we will notify you and the relevant authority as the law requires.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>16. Children</h2>
            <p className={styles.paragraph}>
              The Outdoor Club is not intended for children. It is built for adult members of riding and outdoor clubs, and it asks for a government identity document. You must be at least 18 to hold an account. We do not knowingly collect data from children, and the App never asks for an age or a date of birth. If you believe a child holds an account, tell us and we will delete it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>17. Changes to this Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update this policy to reflect changes to the App or to our legal obligations. The effective date at the top will change, and if a change materially affects how we handle your data we will tell you in the App before it takes effect.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>18. Contact us</h2>
            <p className={styles.paragraph}>
              For any question about this policy, or to exercise any of your rights:
            </p>
            <p className={styles.paragraph} style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
              Air Microservices LLC<br />
              Email: toc@airmicroservices.com
            </p>
          </section>

        </div>
      </main>

      <footer className={styles.legalFooter}>
        <div className={styles.legalContainer}>
          Air Microservices LLC &copy; 2023 - {currentYear}. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
