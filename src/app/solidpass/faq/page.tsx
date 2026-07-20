import React from "react";
import Link from "next/link";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolidPass FAQ | Air Microservices",
  description: "Frequently asked questions about SolidPass: encryption, usage, import/export, wiping the vault, and distribution.",
  robots: {
    index: true,
    follow: true,
  }
};

export default function SolidPassFAQ() {
  const currentYear = new Date().getFullYear();
  const faqJsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What is SolidPass?",
        "acceptedAnswer": {"@type": "Answer", "text": "SolidPass is a commercial-grade, privacy-first, offline password manager and personal vault. It stores your secrets locally on your device and never transmits them to a cloud service."}
      },
      {
        "@type": "Question",
        "name": "Which platforms are supported?",
        "acceptedAnswer": {"@type": "Answer", "text": "SolidPass is currently available for Android and iOS through their respective app stores. Desktop builds for macOS, Windows, and Linux are planned and will be released in future updates."}
      },
      {
        "@type": "Question",
        "name": "How is my data protected?",
        "acceptedAnswer": {"@type": "Answer", "text": "All sensitive data is encrypted locally using AES-256-GCM. A 256-bit Database Key (DK) encrypts the database, and each item uses unique initialization vectors for authenticated encryption. Item metadata such as titles, types, tags, and attachment names is encrypted too."}
      },
      {
        "@type": "Question",
        "name": "How is the master password handled?",
        "acceptedAnswer": {"@type": "Answer", "text": "Your Master Password is never stored. SolidPass derives a Key Encryption Key (KEK) from the Master Password using Argon2id (RFC 9106), a memory-hard algorithm that resists GPU and ASIC brute-force attacks, with a cryptographically random salt. The DK is encrypted with the KEK and stored locally; the Master Password is used only in memory and is zeroized after use."}
      },
      {
        "@type": "Question",
        "name": "Does SolidPass collect analytics or track me?",
        "acceptedAnswer": {"@type": "Answer", "text": "No. SolidPass is built with a strict zero-tracking policy. There are no analytics, ads, or third-party trackers integrated into the application."}
      },
      {
        "@type": "Question",
        "name": "How does biometric unlock work?",
        "acceptedAnswer": {"@type": "Answer", "text": "When enabled, a derived database key may be stored securely in the OS-provided secure enclave (Keychain / Keystore) with device authentication required. Biometric data never leaves your device."}
      },
      {
        "@type": "Question",
        "name": "How do exports and backups work?",
        "acceptedAnswer": {"@type": "Answer", "text": "You can export your vault to a fully encrypted backup file (.solidpass). The file is encrypted with your vault's keys and signed with a SHA-256 checksum for integrity; it can be stored locally or transferred by you to another device."}
      },
      {
        "@type": "Question",
        "name": "Can I sync across devices?",
        "acceptedAnswer": {"@type": "Answer", "text": "SolidPass intentionally does not provide automatic cloud sync. To move your vault between devices, export an encrypted backup and import it on the target device."}
      },
      {
        "@type": "Question",
        "name": "How do I wipe my vault?",
        "acceptedAnswer": {"@type": "Answer", "text": "From the Settings screen you can choose to wipe the vault. This removes the encrypted database and metadata from the device and is irreversible. Export an encrypted backup first if you need a copy."}
      },
      {
        "@type": "Question",
        "name": "Is SolidPass paid? Are there ads?",
        "acceptedAnswer": {"@type": "Answer", "text": "SolidPass is a paid application available through the Apple App Store and Google Play. The app is ad-free and does not include third-party advertising or tracking. Prices and promotions are handled by the app stores."}
      }
    ]
  });

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
          <h1 className={styles.title}>Frequently Asked Questions</h1>
          <div className={styles.meta}>
            <span>Last updated: July 15, {currentYear}</span>
          </div>
        </div>
      </header>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: faqJsonLd }} />

      <main className={styles.bodyContent}>
        <div className={styles.legalContainer}>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>General</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What is SolidPass?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  SolidPass is a commercial-grade, privacy-first, offline password manager and personal vault. It stores your secrets locally on your device and never transmits them to a cloud service.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Which platforms are supported?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  SolidPass is currently available for Android and iOS through their respective app stores. Desktop builds for macOS, Windows, and Linux are planned and will be released in future updates. See the app store listings for platform-specific availability.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Encryption & Security</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How is my data protected?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  All sensitive data is encrypted locally using AES-256-GCM. A 256-bit Database Key (DK) encrypts the database, and each item uses unique initialization vectors for authenticated encryption. Item metadata — titles, types, tags, and attachment names — is encrypted as well, so a stolen database or backup file reveals nothing about what you store.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How is the master password handled?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Your Master Password is never stored. SolidPass derives a Key Encryption Key (KEK) from the Master Password using Argon2id (RFC 9106) — a memory-hard algorithm that makes brute-forcing with GPUs or specialized hardware prohibitively expensive — together with a cryptographically-random salt. The DK is encrypted with the KEK and stored in local metadata. The Master Password itself is only used to derive keys in memory and is zeroized (overwritten) after use.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Does SolidPass collect analytics or track me?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  No. SolidPass is built with a strict zero-tracking policy. There are no analytics, ads, or third-party trackers integrated into the application.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How does biometric unlock work?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  When you enable biometric unlock, a derived database key may be stored securely in the OS-provided secure enclave (Keychain / Keystore) with device authentication required. Biometric data never leaves your device and is never accessible to SolidPass.
                </p>
              </div>
            </details>

          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Usage & Data Management</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I create a new vault?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  When you first open SolidPass you will be prompted to create a Master Password. This Master Password unlocks your vault and is used to derive the cryptographic keys. Choose a strong, memorable password — if you lose it, there is no recovery.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I add or edit items?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Use the add (+) button inside the app to create new secrets. Each item supports fields such as username, password, notes, and optional TOTP. All fields are encrypted before being written to storage.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Can I organize my vault?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Yes — SolidPass supports tags and secret types to help you categorize and find entries quickly.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Import / Export & Backups</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do exports and backups work?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  You can export your vault to a fully encrypted backup file with the extension <code className={styles.calloutText}>.solidpass</code>. The file is encrypted with your vault's keys and is signed with a SHA-256 checksum for integrity. The exported file can be stored locally or transferred by you to another device.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I restore a backup?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Use the import/restore feature in the Settings screen and select the encrypted backup file. You will need to enter the Master Password that was active when the backup was created to decrypt and restore the vault.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Can I sync across devices?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  SolidPass intentionally does not provide automatic cloud sync. If you want to move your vault between devices, export an encrypted backup and import it on the target device.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Wiping & Reset</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>How do I wipe my vault?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  From the Settings screen you can choose to wipe the vault. This removes the encrypted database and all associated metadata from the device. Wiping is irreversible. If you need a copy before wiping, export an encrypted backup first.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>What if I forget my Master Password?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  There is no password recovery built into SolidPass. The Master Password is the sole secret that protects the vault. If you lose it, the encrypted data is inaccessible. This design is intentional to preserve privacy and local-only security.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Pricing</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Is SolidPass paid? Are there ads? How do price changes and promo codes work?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  SolidPass is a paid application available through the Apple App Store and Google Play. The app is ad-free and does not include third-party advertising or tracking.
                </p>
                <p className={styles.paragraph}>
                  Prices may change from time to time and can vary by region. We may run promotions or accept promo codes for limited periods; when offered, discounts are processed by the store platforms. For billing questions or refund requests, please consult the store where you made the purchase as they handle transactions and refunds.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Distribution & App Stores</h2>
            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Where is SolidPass distributed?</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  SolidPass is distributed via third-party platform stores (Google Play, Apple App Store). These stores may collect transaction data and device identifiers during purchase. Review the app store policies for details.
                </p>
              </div>
            </details>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>Troubleshooting</h2>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>App won't open / crashes</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Try updating to the latest version from the app store. If the issue persists, reinstalling the app will wipe the local vault; ensure you have an exported backup before reinstalling.
                </p>
              </div>
            </details>

            <details className={styles.faqItem}>
              <summary className={styles.faqSummary}>Questions or bug reports</summary>
              <div className={styles.faqContent}>
                <p className={styles.paragraph}>
                  Contact us at <a href="mailto:solidpass@airmicroservices.com">solidpass@airmicroservices.com</a>.
                </p>
              </div>
            </details>

          </section>

        </div>
      </main>
    </div>
  );
}
