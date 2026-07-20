import React from "react";
import Link from "next/link";
import Image from "next/image";
import styles from "./page.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolidPass — Offline Password Manager & Secure Vault",
  description:
    "SolidPass is an ad-free, offline-first password manager that keeps your data on-device. AES-256-GCM encryption, zero-cloud, and biometric unlock support.",
  keywords: [
    "SolidPass",
    "password manager",
    "offline password manager",
    "encrypted vault",
    "AES-256",
    "privacy",
  ],
  authors: [{ name: "Air Microservices LLC" }],
  robots: { index: true, follow: true },
  openGraph: {
    title: "SolidPass — Offline Password Manager & Secure Vault",
    description:
      "Ad-free, offline-first vault that keeps your secrets local. Military-grade encryption, no tracking, no cloud.",
    type: "website",
    locale: "en_US",
    url: "https://airmicroservices.com/solidpass",
    images: [
      {
        url: "https://airmicroservices.com/solidpass/solidpass-logo.svg",
        width: 600,
        height: 600,
        alt: "SolidPass logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SolidPass — Offline Password Manager & Secure Vault",
    description:
      "Ad-free, offline-first vault that keeps your secrets local. Military-grade encryption, no tracking, no cloud.",
    images: ["https://airmicroservices.com/solidpass/solidpass-logo.svg"],
  },
  alternates: {
    canonical: "https://airmicroservices.com/solidpass",
  },
};

export default function SolidPassPage() {
  // screenshots removed per request to keep page minimal

  const jsonLd = JSON.stringify({
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: "SolidPass",
    url: "https://airmicroservices.com/solidpass",
    image: "https://airmicroservices.com/solidpass/solidpass-logo.svg",
    description:
      "SolidPass is an ad-free, offline-first password manager. Stores encrypted data locally using AES-256-GCM. No tracking, no cloud.",
    applicationCategory: "SecurityApplication",
    operatingSystem: "iOS, Android",
    offers: {
      "@type": "Offer",
      priceSpecification: {
        "@type": "PriceSpecification",
        priceCurrency: "USD"
      }
    }
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
            <span className={styles.backLabel}>Air Microservices</span>
          </Link>

          <div className={styles.docLinks}>
            <a href="/solidpass/usage" className={styles.docLink}>
              Quick Tour
            </a>
            <a href="/solidpass/guide" className={styles.docLink}>
              User Guide
            </a>
            <a href="/solidpass/encryption-explained" className={styles.docLink}>
              Encryption
            </a>
          </div>
        </nav>
      </header>

      {/* Hero Section */}
      <section className={styles.hero}>
        <div className={styles.container}>
          <div className={styles.heroContent}>
            <div className={styles.heroText}>
              <div className={styles.logoContainer}>
                <Image
                  src="/solidpass/solidpass-logo.svg"
                  alt="SolidPass Logo"
                  width={120}
                  height={120}
                  className={styles.heroLogo}
                />
              </div>
              <h1 className={styles.heroTitle}>SolidPass</h1>
              <p className={styles.heroSubtitle}>
                Your Private, Encrypted, Offline Vault
              </p>
              <p className={styles.heroDescription}>
                Military-grade password management that never leaves your device.
                Zero accounts, zero tracking, zero cloud. Just you and your secrets.
              </p>

              <div className={styles.ctaButtons}>
                <a
                  href="https://play.google.com/store/apps/details?id=com.airmicroservices.solidpass"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaPrimary}
                >
                  Get on Google Play
                </a>
                <a
                  href="https://apps.apple.com/us/app/solidpass-offline-vault/id6789066185"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={styles.ctaSecondary}
                >
                  Get on App Store
                </a>
              </div>

              <div className={styles.heroMeta}>
                <span className={styles.metaBadge}>✓ Available on iOS, Android (Other platforms coming soon)</span>
              </div>
            </div>

            <div className={styles.heroImage}>
              <div className={styles.heroImagePlaceholder}>
                <Image
                  src="/solidpass/screenshots/SolidPass-AllSet.jpg"
                  alt="SolidPass App Screenshot"
                  width={280}
                  height={560}
                  priority
                  className={styles.heroScreenshot}
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy Section */}
      <section className={styles.philosophy}>
        <div className={styles.container}>
          <div className={styles.philosophyContent}>
            <h2 className={styles.sectionTitle}>Privacy by Design</h2>
            <p className={styles.philosophyText}>
              SolidPass is built from the ground up with an unwavering commitment to your privacy.
              We operate on a <strong>zero-cloud, zero-trust architecture</strong>. We do not collect,
              store, or see your data. Because the application runs 100% offline, there are no remote
              servers, databases, analytics, or tracking SDKs. You are the sole custodian of your
              digital vault.
            </p>
          </div>
        </div>
      </section>

      {/* Core Features */}
      <section className={styles.features}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Built on Three Pillars</h2>
          <div className={styles.featureGrid}>
            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔒</div>
              <h3 className={styles.featureTitle}>Zero-Cloud Architecture</h3>
              <p className={styles.featureDescription}>
                No accounts. No servers. No internet required. Everything happens on your device,
                in your hands. Your data never leaves unless you choose to export it.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>🔐</div>
              <h3 className={styles.featureTitle}>Military-Grade Encryption</h3>
              <p className={styles.featureDescription}>
                AES-256-GCM encryption with unique initialization vectors for every item.
                Master passwords are never stored—instead, they're converted into cryptographic
                keys using PBKDF2-HMAC-SHA256 with 10,000 iterations.
              </p>
            </div>

            <div className={styles.featureCard}>
              <div className={styles.featureIcon}>📱</div>
              <h3 className={styles.featureTitle}>Truly Multi-Platform</h3>
              <p className={styles.featureDescription}>
                Native apps for iOS and Android (macOS, Windows, and Linux will be rolled out soon). Synced locally across all your devices via encrypted backups.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Security Deep Dive */}
      <section className={styles.security}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Cryptographic Security</h2>
          <div className={styles.securityGrid}>
            <div className={styles.securityItem}>
              <h4 className={styles.securityItemTitle}>Master Password Derivation</h4>
              <p className={styles.securityItemText}>
                Your master password is never saved. Instead, we derive a Key Encryption Key (KEK)
                using PBKDF2-HMAC-SHA256 with 10,000 iterations and a cryptographically random
                32-byte salt.
              </p>
            </div>

            <div className={styles.securityItem}>
              <h4 className={styles.securityItemTitle}>Item-Level Encryption</h4>
              <p className={styles.securityItemText}>
                Every password, credit card, account, key, and note is encrypted with AES-256-GCM,
                using unique 12-byte initialization vectors (IVs) and authenticated tags for integrity.
              </p>
            </div>

            <div className={styles.securityItem}>
              <h4 className={styles.securityItemTitle}>Memory Security (Zeroization)</h4>
              <p className={styles.securityItemText}>
                All sensitive buffers, password inputs, and derived keys are explicitly wiped from
                memory immediately after use to prevent memory-scraping attacks.
              </p>
            </div>

            <div className={styles.securityItem}>
              <h4 className={styles.securityItemTitle}>Biometric Security</h4>
              <p className={styles.securityItemText}>
                Optional biometric unlock uses your device's native secure enclave (iOS Keychain or
                Android Keystore). Your fingerprint or face data never leaves your device.
              </p>
            </div>

            <div className={styles.securityItem}>
              <h4 className={styles.securityItemTitle}>Auto-Lock & Session Management</h4>
              <p className={styles.securityItemText}>
                Automatic session locks on app backgrounding. Customizable inactivity timeouts wipe
                memory buffers and force re-authentication.
              </p>
            </div>

            <div className={styles.securityItem}>
              <h4 className={styles.securityItemTitle}>Encrypted Backups</h4>
              <p className={styles.securityItemText}>
                Export fully encrypted vault backups (.solidpass files) signed with SHA-256 checksums.
                Backups require your master password to restore.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Screenshots removed to keep the page minimal and focused */}

      {/* Download Badges */}
      <section className={styles.downloads}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>Download Now</h2>

          <div className={styles.badgesContainer}>
            <div className={styles.badgeWrapper}>
              <a
                href="https://play.google.com/store/apps/details?id=com.airmicroservices.solidpass"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badgeLink}
              >
                <Image
                  src="/solidpass/badges/google-play-badge.png"
                  alt="Google Play Store"
                  width={220}
                  height={65}
                />
              </a>
            </div>

            <div className={styles.badgeWrapper}>
              <a
                href="https://apps.apple.com/us/app/solidpass-offline-vault/id6789066185"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badgeLink}
              >
                <Image
                  src="/solidpass/badges/download_on_appstore_badge.svg"
                  alt="Apple App Store"
                  width={220}
                  height={65}
                />
              </a>
            </div>

            <div className={styles.badgeWrapper}>
              <a
                href="https://www.producthunt.com/products/solidpass-offline-vault?utm_source=badge-follow&utm_medium=badge&utm_source=badge-solidpass&#0045;offline&#0045;vault"
                target="_blank"
                rel="noopener noreferrer"
                className={styles.badgeLink}
              >
                <img
                  src="https://api.producthunt.com/widgets/embed-image/v1/follow.svg?product_id=1270528&theme=light"
                  alt="SolidPass - Commercial-grade offline password manager & secure vault | Product Hunt"
                  style={{ width: "220px", height: "65px" }}
                />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Use Cases */}
      <section className={styles.useCases}>
        <div className={styles.container}>
          <h2 className={styles.sectionTitle}>For Everyone Who Values Privacy</h2>
          <div className={styles.useCaseGrid}>
            <div className={styles.useCaseCard}>
              <h3>Privacy Advocates</h3>
              <p>
                No cloud, no tracking, no data mining. Just pure, local encryption.
                Your digital autonomy restored.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Security Professionals</h3>
              <p>
                Military-grade cryptography, memory zeroization, and biometric
                authentication for the discerning security expert.
              </p>
            </div>

            <div className={styles.useCaseCard}>
              <h3>Everyday Users</h3>
              <p>
                Simple, intuitive interface that protects your digital life without
                requiring you to understand the underlying cryptography.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className={styles.footer}>
        <div className={styles.container}>
          <div className={styles.footerContent}>
            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>SolidPass</h4>
              <p className={styles.footerText}>
                Commercial-grade offline vault & password manager from Air Microservices LLC.
              </p>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Links</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <a href="https://play.google.com/store/apps/details?id=com.airmicroservices.solidpass" target="_blank" rel="noopener noreferrer">
                    Google Play
                  </a>
                </li>
                <li>
                  <a href="https://apps.apple.com/us/app/solidpass-offline-vault/id6789066185" target="_blank" rel="noopener noreferrer">
                    App Store
                  </a>
                </li>
                <li>
                  <a href="https://www.producthunt.com/products/solidpass-offline-vault" target="_blank" rel="noopener noreferrer">
                    Product Hunt
                  </a>
                </li>
              </ul>
            </div>

            <div className={styles.footerSection}>
              <h4 className={styles.footerTitle}>Legal</h4>
              <ul className={styles.footerLinks}>
                <li>
                  <Link href="/solidpass/privacy">Privacy Policy</Link>
                </li>
                <li>
                  <Link href="/solidpass/terms">Terms & Conditions</Link>
                </li>
                <li>
                  <Link href="/solidpass/faq">FAQ</Link>
                </li>
                <li>
                  <a href="mailto:solidpass@airmicroservices.com">Contact</a>
                </li>
              </ul>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <p>© {new Date().getFullYear()} Air Microservices LLC. All rights reserved.</p>
            <p>
              SolidPass is a product of <a href="/">Air Microservices LLC</a>.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
