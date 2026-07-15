import React from "react";
import Link from "next/link";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolidPass Privacy Policy | Air Microservices LLC",
  description: "Privacy Policy for SolidPass, the zero-cloud, zero-trust offline password manager and secure personal vault.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function SolidPassPrivacy() {
  const currentYear = new Date().getFullYear();

  return (
    <div className={styles.page}>
      <header className={styles.legalHeader}>
        <div className={styles.legalContainer}>
          <Link href="/solidpass" className={styles.backLink}>
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
            Back to SolidPass
          </Link>
          <span className={styles.appName}>SolidPass</span>
          <h1 className={styles.title}>Privacy Policy</h1>
          <div className={styles.meta}>
            <span>Effective Date: July 7, 2026</span>
          </div>
        </div>
      </header>

      <main className={styles.bodyContent}>
        <div className={styles.legalContainer}>
          
          <div className={styles.callout}>
            <span className={styles.calloutTitle}>Privacy by Design</span>
            <p className={styles.calloutText}>
              SolidPass is built from the ground up for absolute, uncompromising privacy. We operate on a <strong>zero-cloud, zero-trust architecture</strong>. We do not collect, share, monetize, or even see your data. Because the application runs 100% offline, there are no remote servers, databases, or tracking SDKs. You are the sole custodian of your digital vault.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Scope & Acceptance</h2>
            <p className={styles.paragraph}>
              This Privacy Policy describes how Air Microservices LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;) handles data in the SolidPass mobile application (&quot;SolidPass&quot; or the &quot;App&quot;). By downloading, installing, or using SolidPass, you agree to the practices outlined in this policy.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Information Collection and Transmission</h2>
            <p className={styles.paragraph}>
              Because SolidPass is designed as an offline-first utility, our data collection practices are simple: <strong>we collect absolutely nothing.</strong>
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Personal Data & Accounts:</span> SolidPass does not require or support user accounts, registration, email sign-ups, or profile creation.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Vault Contents:</span> Your passwords, credit cards, credentials, notes, and other sensitive information stay on your device. We have no technical access to this data, and it is never transmitted over the internet.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Network Logs:</span> The App operates entirely without internet access permissions on your device. It cannot communicate with remote systems or external servers.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>No Tracking or Analytics:</span> We do not integrate any third-party tracking, analytics SDKs (such as Google Analytics or Firebase), or advertisements. Your interaction with the App remains entirely private.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. Local Encryption & Security</h2>
            <p className={styles.paragraph}>
              Your data is secured locally using state-of-the-art cryptographic standards:
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Master Password Security:</span> Your Master Password is never stored on disk. SolidPass derives a robust Key Encryption Key (KEK) using PBKDF2-HMAC-SHA256 with 10,000 iterations and a secure, cryptographically random salt.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Database Encryption:</span> A secure 256-bit Database Key (DK) is generated locally to encrypt your SQLite database. Individual sensitive items are further encrypted using AES-256-GCM with unique 12-byte initialization vectors (IVs) and authenticated tags.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Memory Security (Zeroization):</span> Sensitive buffers, passwords, and derived keys are explicitly wiped (zeroized) from your device&apos;s active memory immediately after use to prevent memory-snooping attacks.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Biometric Data & Device Keystore</h2>
            <p className={styles.paragraph}>
              If you enable Biometric Unlock (Fingerprint or Face authentication), the App utilizes the native operating system APIs (such as the Android Keystore or iOS Secure Enclave). 
            </p>
            <p className={styles.paragraph}>
              The biometric authentication process is handled entirely by your device&apos;s operating system hardware. SolidPass never accesses, views, collects, or stores your biometric data. The App only receives a cryptographic token confirmation from the operating system to safely release your locally stored database key.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Encrypted Backups</h2>
            <p className={styles.paragraph}>
              You have the option to export your vault into a fully encrypted backup file with the extension <code className="technical">.solidpass</code>. 
            </p>
            <p className={styles.paragraph}>
              Backups are signed with a SHA-256 checksum to ensure data integrity. They are stored locally on your device or in a directory of your choosing. Since these files are encrypted, they can only be restored using the exact Master Password that was active when the backup was created. Air Microservices LLC does not store, host, or have access to your backup files.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Third-Party App Stores</h2>
            <p className={styles.paragraph}>
              SolidPass is distributed through third-party platform stores (such as the Apple App Store and Google Play Store). These platforms may collect transaction data, device identifiers, or basic usage statistics under their own respective privacy policies. We encourage you to review the privacy policy of the app store from which you download the App.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Changes to this Privacy Policy</h2>
            <p className={styles.paragraph}>
              We may update this Privacy Policy from time to time to reflect changes in our practices or legal obligations. Since the App has no network functionality, we cannot notify you of updates within the App. We recommend checking this page periodically for any changes.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions or inquiries regarding this Privacy Policy or SolidPass, please contact us at:
            </p>
            <p className={styles.paragraph} style={{ fontFamily: "var(--font-mono)", fontSize: "0.9rem" }}>
              Air Microservices LLC<br />
              Email: solidpass@airmicroservices.com
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
