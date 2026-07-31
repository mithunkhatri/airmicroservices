import React from "react";
import Link from "next/link";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "The Outdoor Club Terms and Conditions | Air Microservices LLC",
  description:
    "Terms and Conditions governing the use of The Outdoor Club, the club management app for outings, members, and club finances.",
  robots: {
    index: false,
    follow: true,
  },
};

export default function TheOutdoorClubTerms() {
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
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
          <div className={styles.meta}>
            <span>Last Updated: July 31, 2026</span>
          </div>
        </div>
      </header>

      <main className={styles.bodyContent}>
        <div className={styles.legalContainer}>

          <div className={`${styles.callout} ${styles.calloutWarning}`}>
            <span className={styles.calloutWarningTitle}>CRITICAL NOTICE: OUTINGS ARE YOUR CLUB&apos;S, NOT OURS</span>
            <p className={styles.calloutText}>
              The Outdoor Club is software for organising. <strong>We do not organise, lead, vet, supervise or insure any outing, and we are not a party to anything your club does.</strong> Riding and outdoor activity carry a real risk of injury and death. Your club, its organisers and you are responsible for your licences, insurance, equipment, roadworthiness, fitness to ride and obedience to the law. Do not rely on the App for anything safety-critical: a map pin can be stale, a notification can fail to arrive, and a phone can lose signal or run out of battery.
            </p>
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutTitle}>Free to use, for now</span>
            <p className={styles.calloutText}>
              The Outdoor Club is currently provided free of charge. There are no advertisements, no in-app purchases and no subscriptions. <strong>We may introduce paid features in the future</strong>; if we do, we will say so clearly in advance, no charge will ever be applied without your express agreement, and nothing you have already done in the App will be charged for retroactively.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
            <p className={styles.paragraph}>
              By downloading, installing, accessing, or using The Outdoor Club mobile application (&quot;The Outdoor Club&quot; or the &quot;App&quot;), a product developed and owned by Air Microservices LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, do not install or use the App.
            </p>
            <p className={styles.paragraph}>
              Our handling of personal data is described in the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>, which forms part of these Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Eligibility</h2>
            <p className={styles.paragraph}>
              You must be at least 18 years old to hold an account. The App is built for adult members of riding and outdoor clubs and asks for a government identity document; it is not intended for children and must not be used by them. By creating an account you confirm that you are 18 or older and that the details you provide are true.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Description of Service &amp; License</h2>
            <p className={styles.paragraph}>
              The Outdoor Club helps a club keep its records: its members, its outings, its shared expenses and ledger, a private feed, a live map during an outing, and its documents and rules. It is a private space — there is no public directory, no discovery, and no way to see a club you have not been invited to or founded.
            </p>
            <p className={styles.paragraph}>
              We grant you a limited, non-exclusive, non-transferable, revocable license to install and use the App on devices you own or control, for your personal and club use. You agree not to copy, modify, distribute, sell, lease, reverse-engineer, decompile, translate, or attempt to extract the source code of the App or its database schemas, and not to access the service by any means other than the App itself.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Accounts, Invitations, and Clubs</h2>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Your account is yours alone.</span> You are responsible for your password and for everything done from your account. Tell us at once if you believe somebody else has access to it.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Joining a club</span> happens in one of two ways: you found one, which makes you its administrator, or an administrator invited your email address and you accepted. You may belong to more than one club.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Inviting somebody</span> means submitting their email address to us so we can write to them. Only invite people who would expect to hear from your club, and only using an address you are entitled to use.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Roles.</span> A club&apos;s administrators decide who is a member, who is a treasurer, and who is an administrator. Those decisions are the club&apos;s, not ours. A role in one club confers nothing in another.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Leaving.</span> You may leave a club, or close your account entirely, at any time from within the App. A club&apos;s only administrator must first appoint another administrator or close the club.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Your Content</h2>
            <p className={styles.paragraph}>
              You keep ownership of everything you put into the App — posts, photos, comments, documents, outing plans and ledger entries. You grant us only the licence we need to run the service: to store your content, and to display it to the members of the clubs you have shared it with. We claim no right to publish, promote, sell or otherwise use your content, and we do not use it to train anything.
            </p>
            <p className={styles.paragraph}>
              You confirm that you have the right to upload what you upload. In particular, do not upload another person&apos;s identity documents, a photograph of somebody who has not agreed to it, or anything that infringes somebody&apos;s copyright. If you enter an emergency contact, make sure that person is content for you to give their details to your club.
            </p>
            <p className={styles.paragraph}>
              Content you have shared with a club may persist in that club&apos;s records after you leave. When you leave a club, or close your account, the App asks whether your posts and comments should be deleted or detached from your name — the choice is yours. A club&apos;s financial records and outing history survive your departure with your name removed, because they are the club&apos;s records rather than yours; see the <Link href="/theoutdoorclub/privacy#account-deletion">Privacy Policy</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Acceptable Use</h2>
            <p className={styles.paragraph}>
              You agree not to use the App to:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                harass, threaten, defame, impersonate or intimidate anybody, or post content that is unlawful, hateful, obscene, or that sexualises a child;
              </li>
              <li className={styles.listItem}>
                upload malware, or attempt to break, overload, probe or circumvent the security of the service or to reach data belonging to a club you are not a member of;
              </li>
              <li className={styles.listItem}>
                use another member&apos;s position, contact details, emergency contact, documents or vehicle details for any purpose other than the club business they were shared for — and never to follow, locate or contact somebody who does not want it;
              </li>
              <li className={styles.listItem}>
                extract, scrape or bulk-export another member&apos;s personal data, or send members unsolicited marketing;
              </li>
              <li className={styles.listItem}>
                misuse the club-wide notification tag to send members content they have not asked for;
              </li>
              <li className={styles.listItem}>
                break any law, or encourage others to, including road traffic law while an outing is under way.
              </li>
            </ul>
            <p className={styles.paragraph}>
              The App lets any member report a post or comment, and a club&apos;s administrators can remove content and suspend or remove a member. We may also remove content or suspend an account where these Terms have been broken. We are not obliged to monitor content, and we do not pre-moderate it.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Location Sharing</h2>
            <p className={styles.paragraph}>
              Location sharing is off until you turn it on, and continues in the background once you do so that the map stays useful during an outing. By turning it on you agree that your position is shown to the members of the club you have selected, until you turn it off.
            </p>
            <p className={styles.paragraph}>
              <strong>The map is an aid, not a safety system.</strong> A position can be minutes or hours old, a device can lose signal or power, and the App may report nothing at all. Never rely on it to establish that somebody is safe, and never use it to keep track of a person against their wishes. If somebody is in difficulty, call the emergency services.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Notifications</h2>
            <p className={styles.paragraph}>
              If you allow notifications, we send them for the events described in the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>. They travel through Expo and then Apple or Google, and delivery is not guaranteed — a notification may be delayed, deduplicated or dropped entirely by those services or by your device. Nothing time-critical should depend on one arriving.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Outings, Safety, and Assumption of Risk</h2>
            <p className={styles.paragraph}>
              This is the most important section of these Terms.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>We are not an organiser.</span> Outings are planned, led and run by clubs and their members. We do not create them, approve them, vet routes, check anybody&apos;s licence, insurance or equipment, or supervise anything that happens.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>We do not verify members or documents.</span> An identity document uploaded to a profile has not been checked by us — there is no automated reading of it and no verification service involved. Its presence proves nothing about its authenticity or validity, and no club should treat it as verification.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>You accept the risk.</span> Riding and outdoor activity can cause serious injury and death. By using the App to enrol on or run an outing you acknowledge those risks and accept them for yourself.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Blood group and emergency contact fields are a convenience, not a medical record.</span> They are whatever the member typed, they may be wrong or out of date, and nobody should rely on them for a clinical decision. Give paramedics the information; do not let the App be the only place it exists.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Routes and maps are indicative.</span> Waypoints, itineraries and map data come from your club and from third-party map providers. They may be inaccurate, impassable, unlawful for your vehicle, or unsafe. Judge the road in front of you, not the line on the screen.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Do not use the App while riding or driving.</span> Stop somewhere safe first.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Club Finances</h2>
            <p className={styles.paragraph}>
              The ledger and the shared-expense features are <strong>record-keeping tools only</strong>. The App does not process payments, hold funds, transfer money, settle debts between members, or act as a payment service, money transmitter or escrow of any kind. No money moves through it. Every figure in it was typed in by a member.
            </p>
            <p className={styles.paragraph}>
              Whether a club&apos;s books are accurate, complete, or adequate for tax, audit or legal purposes is a matter for the club and its treasurer. We give no accounting, tax or legal advice and accept no responsibility for a club&apos;s accounts, for a dispute between members about money, or for any sum a member believes they are owed.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>11. Availability, Changes, and Termination</h2>
            <p className={styles.paragraph}>
              We aim to keep the service available but do not guarantee it. It may be interrupted for maintenance, by a fault, or by a failure at one of the providers we depend on. We may change, add or withdraw features, and we may discontinue the App; if we discontinue it we will give reasonable notice and a means of exporting your data where we can.
            </p>
            <p className={styles.paragraph}>
              You may stop using the App and delete your account at any time. We may suspend or terminate your access if you break these Terms, if it is necessary to protect the service or other members, or if the law requires it. Deleting your account is irreversible and works as described in the <Link href="/theoutdoorclub/privacy#account-deletion">Privacy Policy</Link>.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>12. Third-Party Services</h2>
            <p className={styles.paragraph}>
              The App relies on services operated by others — hosting and authentication, push notification delivery, map tiles, place search, and document rendering. They are listed in the <Link href="/theoutdoorclub/privacy">Privacy Policy</Link>. Their availability and behaviour are not within our control, and we are not responsible for their acts or omissions. Distribution through the Apple App Store and Google Play is subject to those platforms&apos; own terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>13. Disclaimer of Warranties</h2>
            <p className={styles.paragraph}>
              THE APPLICATION AND RELATED SERVICES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED.
            </p>
            <p className={styles.paragraph}>
              TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, AIR MICROSERVICES LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND SECURITY. WE DO NOT WARRANT THAT THE APP WILL BE UNINTERRUPTED, TIMELY, SECURE OR ERROR-FREE, THAT NOTIFICATIONS WILL BE DELIVERED, THAT LOCATION DATA WILL BE ACCURATE, CURRENT OR AVAILABLE, THAT MAP OR ROUTE INFORMATION WILL BE CORRECT OR SAFE, OR THAT DATA WILL NOT BE LOST OR CORRUPTED.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>14. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AIR MICROSERVICES LLC, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, BUT NOT LIMITED TO, PERSONAL INJURY, LOSS OF DATA, LOST PROFITS, BUSINESS INTERRUPTION, OR DAMAGE TO DEVICES OR VEHICLES) ARISING OUT OF OR RELATING TO THE USE OF OR INABILITY TO USE THE APPLICATION, ANY OUTING ORGANISED OR RECORDED THROUGH IT, ANY RELIANCE ON LOCATION, MAP, MEDICAL OR FINANCIAL INFORMATION SHOWN IN IT, OR THE CONDUCT OF ANY MEMBER OR CLUB, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
            <p className={styles.paragraph}>
              IN NO EVENT SHALL OUR TOTAL AGGREGATE LIABILITY TO YOU FOR ALL CLAIMS EXCEED THE GREATER OF THE AMOUNT YOU HAVE PAID US FOR THE APPLICATION IN THE TWELVE MONTHS PRECEDING THE CLAIM, OR ONE HUNDRED UNITED STATES DOLLARS (USD 100).
            </p>
            <p className={styles.paragraph}>
              Nothing in these Terms excludes or limits liability that cannot lawfully be excluded or limited — including liability for death or personal injury caused by our negligence, or for fraud. Some jurisdictions do not allow certain exclusions, so parts of this section may not apply to you; consumers retain all rights granted by the mandatory law of their country of residence.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>15. Indemnity</h2>
            <p className={styles.paragraph}>
              You agree to indemnify and hold harmless Air Microservices LLC against claims, damages and reasonable costs arising from content you uploaded, from your use of another member&apos;s personal data, from your conduct on an outing, or from your breach of these Terms. This does not apply to a claim caused by our own breach or negligence.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>16. Intellectual Property</h2>
            <p className={styles.paragraph}>
              All intellectual property rights in and to The Outdoor Club, including the design, code, logos, assets, branding, and user interfaces, are owned exclusively by Air Microservices LLC. These are protected by copyright, trademark, and other laws of the United States and foreign countries. A club&apos;s own name, crest and artwork remain that club&apos;s; uploading them grants us only the licence needed to display them in the App.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>17. Governing Law &amp; Jurisdiction</h2>
            <p className={styles.paragraph}>
              These Terms are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Florida, and you consent to the personal jurisdiction and venue of such courts. If you are a consumer resident in the European Economic Area or the United Kingdom, this does not deprive you of the protection of the mandatory consumer law of your country of residence, nor of the right to bring proceedings in your local courts where that law so provides.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>18. General</h2>
            <p className={styles.paragraph}>
              If any provision of these Terms is held unenforceable, the rest remains in force. Our failure to enforce a provision is not a waiver of it. You may not assign these Terms; we may assign them to a successor of the business. These Terms and the Privacy Policy are the entire agreement between us regarding the App.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>19. Changes to Terms</h2>
            <p className={styles.paragraph}>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. When we make updates, we will update the &quot;Last Updated&quot; date at the top of these Terms, and we will notify you in the App of any material change before it takes effect. Your continued use of the App following any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>20. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions, concerns, or feedback regarding these Terms, please contact us at:
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
