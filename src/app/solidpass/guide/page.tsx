import type { Metadata } from 'next';
import './guide.css';

export const metadata: Metadata = { title: 'SolidPass — How-To Guide' };

export default function Page() {
  return (
    <div className="spDoc">
      <div className="site-back-bar"><a className="site-back" href="/solidpass">← Back to SolidPass</a></div>

      {/* COVER */}
      <section className="cover">
        <img className="brandlogo" src="data:image/png;base64,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" alt="SolidPass logo" />
        <h1>SolidPass</h1>
        <div className="tag">The complete How-To Guide — your offline, encrypted vault</div>
        <div className="pills">
          <span className="pill">100% Offline</span>
          <span className="pill">AES-256 Encrypted</span>
          <span className="pill">Zero Tracking</span>
          <span className="pill">No Account Needed</span>
        </div>
        <div className="foot">Security Without Compromise · Air Microservices LLC</div>
      </section>

      {/* TOC */}
      <section className="page page-break">
        <div className="section-eyebrow">Contents</div>
        <h2>What's in this guide</h2>
        <ol className="toc">
          <li><span className="num">1</span> Welcome &amp; how SolidPass protects you</li>
          <li><span className="num">2</span> Getting started — creating your vault</li>
          <li><span className="num">3</span> Locking &amp; unlocking (password, biometrics, recovery)</li>
          <li><span className="num">4</span> The Vault — adding &amp; organising items</li>
          <li><span className="num">5</span> Item types &amp; the fields they store</li>
          <li><span className="num">6</span> Viewing an item (copy, reveal, 2FA codes)</li>
          <li><span className="num">7</span> Scanning — cards, IDs, QR codes &amp; attachments</li>
          <li><span className="num">8</span> Document Scanner</li>
          <li><span className="num">9</span> Password Generator</li>
          <li><span className="num">10</span> Security Health</li>
          <li><span className="num">11</span> Settings</li>
          <li><span className="num">12</span> Backup, restore &amp; moving to a new device</li>
          <li><span className="num">13</span> Importing from other apps</li>
          <li><span className="num">14</span> Autofill</li>
          <li><span className="num">15</span> FAQ &amp; troubleshooting</li>
          <li><span className="num">16</span> Security best practices</li>
        </ol>
      </section>

      {/* 1. WELCOME */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 1</div>
        <h2>Welcome &amp; how SolidPass protects you</h2>
        <p className="lead">SolidPass is a personal vault for everything you need to keep private — passwords, two-factor (2FA) codes, payment cards, identity documents, bank accounts, crypto wallets, Wi-Fi credentials, secure notes and more. It runs entirely on your device.</p>

        <h3>The core promise</h3>
        <ul>
          <li><b>100% offline.</b> There is no account, no server, and no cloud. The app has no internet permission at all — your data physically cannot leave your device over the network.</li>
          <li><b>Zero analytics &amp; tracking.</b> No logs, no trackers, no ads, no telemetry.</li>
          <li><b>Strong encryption.</b> Your master password derives a key with <b>Argon2id</b> — a memory-hard algorithm built to resist GPU and specialized-hardware attacks — which unlocks a random 256-bit vault key. Every item is individually encrypted with AES-256-GCM, including its title, type, tags and attachment names.</li>
          <li><b>Nothing stored in plain text.</b> The decrypted key lives only in memory while the vault is unlocked and is wiped the moment it locks.</li>
        </ul>

        <div className="warn"><b>Because SolidPass has no cloud, you are in full control — and fully responsible.</b> If you forget your master password <i>and</i> lose your recovery codes, no one (including us) can recover your data. Please read Section 2 carefully and keep a backup (Section 12).</div>

        <h3>What you'll need</h3>
        <ul>
          <li>A master password you can remember (minimum 8 characters — longer is stronger).</li>
          <li>A safe place to store your 3 recovery codes (write them down or print them).</li>
          <li>Optionally, Face ID / Touch ID / fingerprint set up on your device for quick unlock.</li>
        </ul>
      </section>

      {/* 2. GETTING STARTED */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 2</div>
        <h2>Getting started — creating your vault</h2>
        <p className="lead">The first time you open SolidPass, a short setup walks you through three steps. (If you already have a backup file from another device, tap <b>Restore from Backup</b> on the welcome screen instead — see Section 12.)</p>

        <ol className="steps">
          <li><b>Welcome.</b> Review the "100% Offline" and "Zero Analytics &amp; Tracking" principles, then tap <b>Get Started</b>.</li>
          <li><b>Set your Master Password.</b> Enter a password (minimum 8 characters) and confirm it. A live strength meter (Weak → Moderate → Strong) helps you choose a good one. Tap <b>Continue</b>.</li>
          <li><b>Save your Emergency Recovery Kit.</b> SolidPass generates <b>3 recovery codes</b> in the form <code>SP-XXXX-XXXX</code>. Tap <b>Save Recovery Codes (.txt)</b> to export them, then store them somewhere safe. Tap <b>Complete Setup &amp; Initialize</b>.</li>
          <li><b>Enable biometric unlock (optional).</b> If your device supports Face ID / Touch ID / fingerprint, choose <b>Yes, Enable</b> or <b>Skip</b>.</li>
          <li><b>You're all set.</b> A confirmation screen summarises your protection. Tap <b>Enter the Vault</b>.</li>
        </ol>

        <div className="tip"><b>Faster setup:</b> While you're reading and saving your recovery codes, SolidPass is already building your encrypted vault in the background — you'll see a "Preparing encrypted vault… %" indicator turn into "Encryption ready". By the time you tap <b>Complete Setup</b>, it finishes almost instantly. This uses the exact same strong encryption; it just does the heavy work while you read.</div>

        <div className="warn"><b>About the 3 recovery codes:</b> you need <b>any 2 of the 3</b> to recover your vault if you forget your master password. Keep them separate from your device, and don't store the only copy inside SolidPass itself.</div>
      </section>

      {/* 3. LOCK/UNLOCK */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 3</div>
        <h2>Locking &amp; unlocking</h2>

        <h3>Unlocking your vault</h3>
        <ul>
          <li><b>With biometrics</b> (if enabled): the Face ID / fingerprint prompt appears automatically. You can also tap <b>Tap to Scan Biometrics</b>.</li>
          <li><b>With your master password:</b> type it and tap <b>Unlock</b>.</li>
        </ul>

        <h3>If you forget your master password</h3>
        <ol className="steps">
          <li>On the lock screen, tap <b>Forgot Password? Recover Vault</b>.</li>
          <li>Enter <b>any 2 of your 3 recovery codes</b>, then tap <b>Verify Codes &amp; Decrypt</b>.</li>
          <li>Set a <b>new master password</b> and confirm it, then tap <b>Save &amp; Open Vault</b>.</li>
        </ol>

        <h3>How auto-locking works</h3>
        <ul>
          <li>SolidPass locks automatically after a period of inactivity (default <b>5 minutes</b> — configurable in Settings: 1m / 5m / 15m / Never).</li>
          <li>Optionally, <b>Lock on Minimise</b> locks the vault the instant you switch away from the app.</li>
          <li>You can lock immediately any time with the <b>Lock Vault</b> button at the top of Settings.</li>
        </ul>

        <div className="note"><b>Your biometrics are never stored by SolidPass.</b> Enabling biometric unlock saves your vault key inside your device's secure hardware (Keychain / Keystore), released only after a successful Face ID / fingerprint check by the operating system.</div>
      </section>

      {/* 4. THE VAULT */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 4</div>
        <h2>The Vault — adding &amp; organising items</h2>
        <p className="lead">The <b>Vault</b> tab is your home screen: a searchable list of everything you've saved.</p>

        <h3>Finding things</h3>
        <ul>
          <li><b>Search bar</b> — type to match titles, tags, usernames, websites, note content, and 2FA issuer/account names.</li>
          <li><b>Category filters</b> — tap a pill to show only a type: All Items, Favorites, Passwords, Authenticators (2FA), Cards, Notes, Bank Accounts, Crypto Wallets, Identities, Wi-Fi, Licenses, API Keys, SSH Keys, Recovery Codes, Contacts, or Custom Items.</li>
          <li><b>Favorites</b> — tap the star on any item to pin it to the Favorites filter.</li>
        </ul>
        <div className="tip"><b>2FA at a glance:</b> Authenticator items show a live 6-digit code and a countdown right in the list. The countdown turns red in the last 5 seconds before it refreshes.</div>

        <h3>Adding an item</h3>
        <ol className="steps">
          <li>Tap the floating <b>+</b> button.</li>
          <li>Choose an item type from the grid.</li>
          <li>For <b>Payment Card</b> and <b>Identity</b>, you'll be asked <b>Enter Manually</b> or <b>Scan &amp; Autofill</b> (see Section 7).</li>
          <li>Fill in the fields. Every item has a <b>Title</b> (required), an <b>Add to Favorites</b> toggle, a <b>Tags</b> section, and a <b>General Notes</b> field.</li>
          <li>Tap <b>Create Item</b> (or <b>Save Changes</b> when editing).</li>
        </ol>
      </section>

      {/* 5. ITEM TYPES */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 5</div>
        <h2>Item types &amp; the fields they store</h2>
        <table>
          <tr><th>Type</th><th>Fields</th></tr>
          <tr><td><b>Password</b></td><td>Username / Email, Password (with a one-tap generate button), Website / Domain</td></tr>
          <tr><td><b>Authenticator (2FA / TOTP)</b></td><td>Scan QR code, Secret Key (required), Issuer, Account Name; advanced: Algorithm (SHA1/256/512), Digits, Period</td></tr>
          <tr><td><b>Payment Card</b></td><td>Scan card, Cardholder Name, Card Number, Expiry (MM/YY), CVV, Card PIN, plus image attachments</td></tr>
          <tr><td><b>Secure Note</b></td><td>Free-form multi-line note</td></tr>
          <tr><td><b>Bank Account</b></td><td>Bank Name, Account Holder, Account Number, Routing Number, SWIFT/BIC, IBAN</td></tr>
          <tr><td><b>Crypto Wallet</b></td><td>Wallet Type/Network, Wallet Address, "Watch-only" toggle; if not watch-only: Seed Phrase (+ optional passphrase), Derivation Path</td></tr>
          <tr><td><b>Identity</b></td><td>Full Name, Document Type, Document Number, Expiration &amp; Issue dates, Issuing Authority, plus photo/PDF attachments</td></tr>
          <tr><td><b>Wi-Fi Password</b></td><td>Scan Wi-Fi QR, SSID, Password, Security Type (WPA3/WPA2/WEP/None)</td></tr>
          <tr><td><b>Software License</b></td><td>License Key, Publisher, Version, Purchase Date</td></tr>
          <tr><td><b>API Key</b></td><td>API Key, Endpoint URL, Header Name, Environment (Dev/Staging/Prod)</td></tr>
          <tr><td><b>SSH Key</b></td><td>Private Key, Public Key, Passphrase, Key Fingerprint</td></tr>
          <tr><td><b>Recovery Codes</b></td><td>Service Name + a list of one-time backup codes</td></tr>
          <tr><td><b>Contact</b></td><td>First/Last Name, Company, and lists of Phones, Emails, Addresses</td></tr>
          <tr><td><b>Custom Item</b></td><td>Any number of Label + Value fields, each with an optional "hide value" toggle</td></tr>
        </table>
        <div className="note"><b>Attachments</b> (Cards &amp; Identities): add a scanned document, a photo, an image from your gallery, or a PDF (Identities). Limit 3&nbsp;MB per file; images and PDFs only. Photos taken in-app are <b>not</b> saved to your device's camera roll.</div>
      </section>

      {/* 6. ITEM DETAILS */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 6</div>
        <h2>Viewing an item</h2>
        <p className="lead">Tap any item to open its details.</p>
        <ul>
          <li><b>Reveal secrets.</b> Passwords, CVVs, PINs, API keys, SSH private keys, seed phrases, recovery codes and 2FA secrets are hidden behind an eye icon — tap to reveal.</li>
          <li><b>Copy fields.</b> Every field has a copy button. Copied secrets are <b>automatically cleared from the clipboard after 45 seconds</b>.</li>
          <li><b>Live 2FA codes.</b> Authenticator items show a large rotating code with a progress bar, a "seconds remaining" readout and a <b>Copy Authentication Code</b> button.</li>
          <li><b>Attachments.</b> Cards and Identities display their images/PDFs — tap to preview full-screen or share.</li>
          <li><b>Favorite / Edit / Delete.</b> Toggle the star, tap <b>Edit Item</b> to change fields, or <b>Delete Item</b> (with confirmation) to remove it.</li>
        </ul>
      </section>

      {/* 7. SCANNING */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 7</div>
        <h2>Scanning — cards, IDs, QR codes &amp; attachments</h2>
        <p className="lead">SolidPass reads documents entirely on-device (offline OCR). Nothing is uploaded.</p>

        <h3>Scanning a payment card</h3>
        <ol className="steps">
          <li>Add a <b>Payment Card</b> and choose <b>Scan &amp; Autofill</b> (or tap <b>Scan Payment Card</b> inside the form).</li>
          <li>Align the card within the guide. SolidPass captures at full quality and reads the number, expiry and name.</li>
          <li>The card number is checked with the <b>Luhn checksum</b> and the network (Visa, Mastercard, Amex, …) is detected. If a digit looks wrong, you'll be warned so you can fix it.</li>
          <li>Review the fields and tap <b>Create Item</b>.</li>
        </ol>

        <h3>Scanning an identity document (passport / ID card)</h3>
        <ol className="steps">
          <li>Add an <b>Identity</b> and choose <b>Scan &amp; Autofill</b>.</li>
          <li>Capture the document so the <b>machine-readable zone</b> (the two or three <code>&lt;&lt;&lt;</code> lines) is clearly visible.</li>
          <li>SolidPass parses the MRZ following the ICAO 9303 standard and <b>validates the check digits</b> — when they verify, you'll see "The machine-readable zone was verified", which means the document number, dates and name were read reliably.</li>
          <li>Review and save. Some fields (like the issue date) aren't in the MRZ, so add those by hand if needed.</li>
        </ol>
        <div className="tip"><b>For the most reliable scans:</b> use good, even lighting; lay the card/document flat on a dark surface; avoid glare; and fill the frame with the document. For IDs, the MRZ lines at the bottom are what make reading accurate — make sure they're sharp.</div>

        <h3>Other scanners</h3>
        <ul>
          <li><b>2FA QR codes</b> — Authenticator items can scan an <code>otpauth://</code> QR, including Google Authenticator "export" QRs (multiple accounts at once). See Section 13.</li>
          <li><b>Wi-Fi QR codes</b> — Wi-Fi items can scan the standard Wi-Fi QR to fill SSID, password and security type.</li>
        </ul>
      </section>

      {/* 8. DOCUMENT SCANNER */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 8</div>
        <h2>Document Scanner</h2>
        <p className="lead">The <b>Scanner</b> tab is a document store, separate from vault items — ideal for multi-page paperwork you want kept encrypted and exportable as a PDF.</p>
        <ol className="steps">
          <li>Tap <b>+</b> to create a new document, or open an existing one to edit.</li>
          <li>Give it a <b>Title</b>, then add pages with <b>Scan Page / Take Photo</b> or <b>Import from Photo Gallery</b> (multi-select).</li>
          <li>Reorder pages up/down or remove them. Pages are optimised for size and encrypted on save.</li>
          <li>From the list or the full-screen preview, tap <b>share / export</b> to compile all pages into a single PDF.</li>
        </ol>
        <p className="kbd">Also reachable from Settings → Tools &amp; Utilities → Solid Document Scanner.</p>
      </section>

      {/* 9. GENERATOR */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 9</div>
        <h2>Password Generator</h2>
        <p className="lead">The <b>Generator</b> tab creates strong, random secrets. Tap the copy icon to use one (auto-cleared from the clipboard after 45 seconds); tap <b>Regenerate</b> for a new value.</p>
        <div className="grid">
          <div className="box">
            <h4>Password</h4>
            <ul>
              <li>Length 8–64 (default 16)</li>
              <li>Toggle uppercase, lowercase, numbers, symbols</li>
              <li>"Exclude Ambiguous" removes <code>0 1 O l I</code></li>
              <li>Guarantees at least one of each selected type</li>
            </ul>
          </div>
          <div className="box">
            <h4>Passphrase</h4>
            <ul>
              <li>3–10 words (default 4) from a curated list</li>
              <li>Separator: <code>-</code> <code>_</code> <code>.</code> <code>/</code></li>
              <li>Easy to type, hard to crack</li>
            </ul>
          </div>
          <div className="box">
            <h4>PIN</h4>
            <ul>
              <li>4–16 digits (default 6)</li>
              <li>Secure random number generation</li>
            </ul>
          </div>
          <div className="box">
            <h4>Tip</h4>
            <ul>
              <li>Inside a Password item, tap the refresh icon next to the password field to drop in a fresh 16-character password without leaving the form.</li>
            </ul>
          </div>
        </div>
      </section>

      {/* 10. HEALTH */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 10</div>
        <h2>Security Health</h2>
        <p className="lead">The <b>Health</b> tab audits your vault entirely on-device and gives you a <b>Vault Score</b> out of 100 (Excellent ≥ 80, Needs Work ≥ 50, otherwise Critical). Expand any section to see the affected items and jump straight to them.</p>
        <table>
          <tr><th>Check</th><th>What it flags</th></tr>
          <tr><td>Weak Passwords</td><td>Under 8 characters, or fewer than 3 character types</td></tr>
          <tr><td>Reused Passwords</td><td>The same password used on more than one entry</td></tr>
          <tr><td>Old Passwords</td><td>Not changed in over 180 days</td></tr>
          <tr><td>Missing URLs</td><td>Password entries with no website (harder to autofill/verify)</td></tr>
          <tr><td>Expiring Documents</td><td>Cards &amp; IDs already expired or expiring within 3 months</td></tr>
          <tr><td>Wallets Without Backup</td><td>Non-watch-only crypto wallets with no saved seed phrase</td></tr>
        </table>
        <div className="note">The Health check only ever reads your decrypted data in memory. Nothing is sent anywhere.</div>
      </section>

      {/* 11. SETTINGS */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 11</div>
        <h2>Settings</h2>
        <h3>Security</h3>
        <ul>
          <li><b>Biometric Unlock</b> — enable/disable Face ID / Touch ID / fingerprint (enabling requires a biometric confirmation).</li>
          <li><b>Lock on Minimise</b> — lock instantly when you leave the app.</li>
          <li><b>Auto-Lock Timeout</b> — 1m / 5m / 15m / Never.</li>
          <li><b>Change Master Password</b> — enter current + new password; your vault key is re-encrypted and the vault re-locks.</li>
        </ul>
        <h3>Backup &amp; Imports</h3>
        <ul>
          <li><b>Export Encrypted Vault (.solidpass)</b> and <b>Restore Vault from .solidpass</b> — see Section 12.</li>
          <li><b>Import from CSV</b> (Bitwarden, 1Password, Chrome) and <b>Import from Google Authenticator</b> — see Section 13.</li>
        </ul>
        <h3>Emergency Kit</h3>
        <ul><li><b>Download Emergency Kit</b> — re-export your 3 recovery codes as a .txt file.</li></ul>
        <h3>Other</h3>
        <ul>
          <li><b>Tools &amp; Utilities</b> → Document Scanner. <b>Autofill</b> setup (Section 14).</li>
          <li><b>Support &amp; Information</b> → Frequently Asked Questions, Contact Us.</li>
          <li>Appearance follows your device's light/dark setting automatically.</li>
        </ul>
        <div className="warn"><b>Danger Zone — Reset Vault &amp; Wipe All Data.</b> This permanently deletes your database, credentials, recovery codes and settings from the device. You must type <code>wipe all data</code> to confirm. There is no undo — export a backup first if you might want your data later.</div>
      </section>

      {/* 12. BACKUP/RESTORE */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 12</div>
        <h2>Backup, restore &amp; moving to a new device</h2>
        <div className="warn"><b>Uninstalling the app deletes everything.</b> Because SolidPass keeps no cloud copy, always export a backup before uninstalling, resetting, or switching phones.</div>

        <h3>Creating a backup</h3>
        <ol className="steps">
          <li>Go to <b>Settings → Export Encrypted Vault (.solidpass)</b>.</li>
          <li>Choose where to save/share the file. Keep it somewhere durable that survives an uninstall (e.g. Files / a folder you control).</li>
        </ol>
        <p>The <code>.solidpass</code> file is a complete, fully encrypted copy of your vault — all items, their file attachments, and your Scanner-tab documents — and can only be opened with the <b>master password that created it</b> (or that vault's recovery codes). It carries a checksum to detect corruption.</p>

        <h3>Restoring a backup</h3>
        <p><b>On a fresh install:</b> tap <b>Restore from Backup</b> on the welcome screen, pick your <code>.solidpass</code> file, and enter that backup's master password.</p>
        <p><b>Into an existing vault (Settings → Restore Vault from .solidpass):</b> choose either —</p>
        <ul>
          <li><b>Merge</b> — decrypts the backup and adds its items, attachments and scanned documents to your current vault (keeps what you already have).</li>
          <li><b>Replace &amp; Import</b> — destructive: wipes the current vault and replaces it with the backup. You'll then unlock with the backup's master password.</li>
        </ul>
        <div className="tip"><b>Moving to a new phone:</b> Export on the old device → transfer the <code>.solidpass</code> file → install SolidPass on the new device → Restore from Backup.</div>
      </section>

      {/* 13. IMPORTS */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 13</div>
        <h2>Importing from other apps</h2>
        <h3>From a password manager (CSV)</h3>
        <ol className="steps">
          <li>Export a CSV from Bitwarden, 1Password, or Chrome.</li>
          <li>In SolidPass: <b>Settings → Import from CSV</b>, then pick the matching format.</li>
          <li>Logins are imported (Bitwarden also brings in secure notes) and tagged with the source name.</li>
        </ol>
        <div className="warn"><b>Delete the plaintext CSV afterwards.</b> Exported CSV files are unencrypted — remove them from your device once the import succeeds.</div>

        <h3>From Google Authenticator</h3>
        <ol className="steps">
          <li>In Google Authenticator, choose <b>Transfer accounts → Export</b> to show a QR code.</li>
          <li>In SolidPass: <b>Settings → Import from Google Authenticator</b> and scan the QR.</li>
          <li>One Authenticator item is created per account. (Older HOTP entries are skipped.)</li>
        </ol>
      </section>

      {/* 14. AUTOFILL */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 14</div>
        <h2>Autofill</h2>
        <p className="lead">Open <b>Settings → Autofill</b> for step-by-step instructions to set SolidPass as your device's autofill provider.</p>
        <ul>
          <li><b>iOS:</b> Settings → General → AutoFill &amp; Passwords.</li>
          <li><b>Android:</b> System autofill service picker.</li>
          <li>The screen includes an <b>Open Autofill Settings</b> shortcut that jumps to the right system page.</li>
        </ul>
        <div className="note">Autofill is being rolled out; the in-app screen always shows the current status and exact steps for your platform.</div>
      </section>

      {/* 15. FAQ */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 15</div>
        <h2>FAQ &amp; troubleshooting</h2>

        <h4>I forgot my master password. What now?</h4>
        <p>Use <b>Forgot Password? Recover Vault</b> on the lock screen with any 2 of your 3 recovery codes, then set a new password. Without the password and without 2 recovery codes, the data cannot be recovered — this is by design.</p>

        <h4>The camera scan didn't read my card / ID correctly.</h4>
        <p>Improve lighting, remove glare, lay the item flat on a dark surface and fill the frame. For IDs, keep the bottom <code>&lt;&lt;&lt;</code> lines sharp — that's what SolidPass validates. You can always correct any field by hand before saving; a card number that fails its checksum will be flagged.</p>

        <h4>Why does the app lock when I switch apps?</h4>
        <p>If <b>Lock on Minimise</b> is on, SolidPass locks the moment it goes to the background for safety. Turn it off in Settings if you prefer, and adjust the Auto-Lock timeout.</p>

        <h4>Can I take a screenshot?</h4>
        <p>No — screenshots and screen recording are blocked app-wide, and the app preview is blanked in the task switcher, to keep your secrets off the screen.</p>

        <h4>Is there a subscription or ads?</h4>
        <p>No ads, ever, and no tracking. All functionality is available.</p>

        <h4>Does anything leave my device?</h4>
        <p>No. There is no network access at all. Backups only leave your device if <i>you</i> explicitly export and share a file.</p>
      </section>

      {/* 16. BEST PRACTICES */}
      <section className="page page-break">
        <div className="section-eyebrow">Section 16</div>
        <h2>Security best practices</h2>
        <ol>
          <li><b>Use a strong, unique master password</b> — this is the one key to everything. A long passphrase is ideal.</li>
          <li><b>Store your recovery codes offline</b> — printed or written, kept somewhere separate from your phone. You need 2 of 3.</li>
          <li><b>Back up regularly</b> — export a <code>.solidpass</code> file after major changes and before uninstalling or switching devices.</li>
          <li><b>Enable biometrics + a short auto-lock</b> — convenient and safe on a device only you can unlock.</li>
          <li><b>Turn on Lock on Minimise</b> if you share your device or work in public.</li>
          <li><b>Delete plaintext exports</b> (CSV from other apps) as soon as you've imported them.</li>
          <li><b>Run Security Health periodically</b> and fix weak, reused or old passwords.</li>
          <li><b>Keep your backup file's password safe too</b> — a backup can only be opened with the master password that created it.</li>
        </ol>

        <hr className="hr" />
        <p style={{ textAlign: 'center', color: 'var(--muted)' }}>SolidPass — Security Without Compromise<br />
        Offline &amp; zero-knowledge · Air Microservices LLC<br />
        Support: solidpass@airmicroservices.com</p>
        <footer className="pageid">This guide reflects the current version of SolidPass. Screens and labels may vary slightly by device and app version.</footer>
      </section>
    </div>
  );
}
