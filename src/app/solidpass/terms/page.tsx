import React from "react";
import Link from "next/link";
import styles from "../legal.module.css";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "SolidPass Terms and Conditions | Air Microservices LLC",
  description: "Terms and Conditions governing the use of SolidPass offline password manager and secure personal vault.",
  robots: {
    index: false,
    follow: true,
  }
};

export default function SolidPassTerms() {
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
          <span className={styles.appName}>SolidPass</span>
          <h1 className={styles.title}>Terms &amp; Conditions</h1>
          <div className={styles.meta}>
            <span>Last Updated: July 7, 2026</span>
          </div>
        </div>
      </header>

      <main className={styles.bodyContent}>
        <div className={styles.legalContainer}>
          
          <div className={`${styles.callout} ${styles.calloutWarning}`}>
            <span className={styles.calloutWarningTitle}>CRITICAL NOTICE: NO CLOUD RECOVERY</span>
            <p className={styles.calloutText}>
              SolidPass is a 100% offline application. <strong>We do not have access to, nor do we store, your Master Password or your encrypted database.</strong> If you lose or forget your Master Password, we cannot recover or reset it. Your stored data will be permanently and irreversibly lost. You are solely responsible for memorizing your Master Password and maintaining your own encrypted backups.
            </p>
          </div>

          <div className={styles.callout}>
            <span className={styles.calloutTitle}>Paid Application &amp; Refund Policy</span>
            <p className={styles.calloutText}>
              SolidPass is a paid application. <strong>All purchases of the App are final, and Air Microservices LLC does not offer or guarantee any refunds.</strong> Transaction disputes, payment processing, and refund requests (if any) are handled exclusively by the platform provider where you purchased the App (i.e., Apple App Store or Google Play Store) and are subject to their respective terms and conditions.
            </p>
          </div>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>1. Agreement to Terms</h2>
            <p className={styles.paragraph}>
              By downloading, installing, accessing, or using the SolidPass mobile application (&quot;SolidPass&quot; or the &quot;App&quot;), a product developed and owned by Air Microservices LLC (&quot;we,&quot; &quot;us,&quot; or &quot;our&quot;), you agree to be bound by these Terms and Conditions (&quot;Terms&quot;). If you do not agree to these Terms, do not install or use the App.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>2. Description of Service &amp; License</h2>
            <p className={styles.paragraph}>
              SolidPass is an offline-first password manager and personal vault. We grant you a limited, non-exclusive, non-transferable, revocable license to install and use one copy of the App on a compatible mobile device owned or controlled by you, solely for your personal or internal business use.
            </p>
            <p className={styles.paragraph}>
              You agree not to copy, modify, distribute, sell, lease, reverse-engineer, decompile, translate, or attempt to extract the source code of the App or its database schemas.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>3. User Responsibilities &amp; Vault Security</h2>
            <p className={styles.paragraph}>
              Because of the offline, zero-cloud architecture of the App, the security, integrity, and availability of your data depend entirely on your actions.
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Master Password:</span> You are responsible for creating a sufficiently strong Master Password. Since your Master Password is never stored on disk or sent to a server, we cannot verify, reset, or recover it.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Device Security:</span> You must secure your physical device against unauthorized access. If your device is lost, stolen, compromised, rooted, or jailbroken, the cryptographic guarantees of the App could be bypassed or weakened.
              </li>
              <li className={styles.listItem}>
                <span className={styles.listItemStrong}>Biometrics:</span> Biometric unlock features (Face ID, Fingerprint) rely on your device&apos;s hardware Secure Enclave. If you register multiple profiles or allow other individuals to register biometrics on your device, they may be able to access your SolidPass vault.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>4. Backups, Data Loss, &amp; Unencrypted Exports</h2>
            <p className={styles.paragraph}>
              You have the sole responsibility to perform manual backups using the App&apos;s encrypted export function. 
            </p>
            <ul className={styles.list}>
              <li className={styles.listItem}>
                We do not maintain copies, logs, or history of your passwords or database. In the event of device failure, database corruption, accidental deletion, or factory reset, your data is unrecoverable unless you have a secure <code className="technical">.solidpass</code> backup.
              </li>
              <li className={styles.listItem}>
                If you choose to export your data into standard CSV files for import into other utilities, <strong>this data will be exported as unencrypted plain text.</strong> Anyone with access to this exported CSV file can read your credentials. You assume all liability and security risks for how you store, transmit, or delete unencrypted exported data.
              </li>
            </ul>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>5. Disclaimer of Warranties</h2>
            <p className={styles.paragraph}>
              THE APPLICATION AND RELATED UTILITIES ARE PROVIDED ON AN &quot;AS IS&quot; AND &quot;AS AVAILABLE&quot; BASIS, WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED. 
            </p>
            <p className={styles.paragraph}>
              TO THE FULLEST EXTENT PERMISSIBLE UNDER APPLICABLE LAW, AIR MICROSERVICES LLC DISCLAIMS ALL WARRANTIES, INCLUDING BUT NOT LIMITED TO, IMPLIED WARRANTIES OF MERCHANTABILITY, FITNESS FOR A PARTICULAR PURPOSE, TITLE, NON-INFRINGEMENT, AND SECURITY. WE DO NOT WARRANT THAT THE APP WILL BE FREE FROM BUGS, ERRORS, CORRUPTION, DATA LOSS, OR SYSTEM FAILURES, OR THAT CRYPTOGRAPHIC METHODS WILL REMAIN ABSOLUTELY SECURE AGAINST FUTURE COMPUTATIONAL OR CRYPTANALYTIC BREAKTHROUGHS.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>6. Limitation of Liability</h2>
            <p className={styles.paragraph}>
              TO THE MAXIMUM EXTENT PERMITTED BY LAW, IN NO EVENT SHALL AIR MICROSERVICES LLC, ITS DIRECTORS, EMPLOYEES, OR AGENTS BE LIABLE FOR ANY INDIRECT, SPECIAL, INCIDENTAL, CONSEQUENTIAL, OR EXEMPLARY DAMAGES (INCLUDING, BUT NOT LIMITED TO, LOSS OF DATA, CORRUPTION OF DATABASE, LOST PROFITS, LOSS OF REVENUE, BUSINESS INTERRUPTION, COST OF SUBSTITUTE GOODS, OR DAMAGE TO DEVICES) ARISING OUT OF THE USE OR INABILITY TO USE THE APPLICATION, EVEN IF ADVISED OF THE POSSIBILITY OF SUCH DAMAGE.
            </p>
            <p className={styles.paragraph}>
              IN NO EVENT SHALL OUR TOTAL LIABILITY TO YOU FOR ALL CLAIMS OR DAMAGES EXCEED THE AMOUNT PAID BY YOU TO PURCHASE THE APPLICATION.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>7. Intellectual Property</h2>
            <p className={styles.paragraph}>
              All intellectual property rights in and to SolidPass, including the design, code, logos, assets, branding, and user interfaces, are owned exclusively by Air Microservices LLC. These are protected by copyright, trademark, and other laws of the United States and foreign countries.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>8. Governing Law &amp; Jurisdiction</h2>
            <p className={styles.paragraph}>
              These Terms are governed by and construed in accordance with the laws of the State of Florida, United States, without regard to its conflict of law principles. Any legal action or proceeding arising under these Terms shall be brought exclusively in the federal or state courts located in Florida, and you consent to the personal jurisdiction and venue of such courts.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>9. Changes to Terms</h2>
            <p className={styles.paragraph}>
              We reserve the right, at our sole discretion, to modify or replace these Terms at any time. When we make updates, we will update the &quot;Last Updated&quot; date at the top of these Terms. Your continued use of the App following any changes constitutes acceptance of the new Terms.
            </p>
          </section>

          <section className={styles.section}>
            <h2 className={styles.sectionTitle}>10. Contact Us</h2>
            <p className={styles.paragraph}>
              If you have any questions, concerns, or feedback regarding these Terms, please contact us at:
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
