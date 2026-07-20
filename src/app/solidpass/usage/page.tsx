import type { Metadata } from 'next';
import './usage.css';

export const metadata: Metadata = { title: 'SolidPass — Usage Guide' };

const logo = 'data:image/png;base64,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';

export default function Page() {
  return (
    <div className="spDoc">
      <div className="site-back-bar"><a className="site-back" href="/solidpass">← Back to SolidPass</a></div>

      {/* COVER */}
      <section className="cover">
        <img className="brandlogo" src={logo} alt="SolidPass logo" />
        <h1>SolidPass</h1>
        <p>A quick visual guide — how to use the app</p>
        <div className="chips">
          <span className="chip">🔐 Encrypted</span>
          <span className="chip">📴 Offline</span>
          <span className="chip">👆 Simple</span>
        </div>
      </section>

      {/* 1. CREATE VAULT */}
      <section className="slide">
        <div className="copy">
          <span className="step">1</span>
          <div className="eyebrow">Get started</div>
          <h1>Create your vault</h1>
          <p>Pick one strong master password. It's the only key to everything — write it down.</p>
          <ul><li>Minimum 8 characters</li><li>A live meter shows its strength</li><li>We can never see or reset it</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="center">
              <div className="bigicon">🔑</div>
              <div className="h-title">Set Master Password</div>
              <div className="h-sub">This password encrypts your entire vault.</div>
              <div className="field"><label>MASTER PASSWORD</label><div className="input">••••••••••••</div></div>
              <div className="meter"><i className="on"></i><i className="on"></i><i className="on"></i></div>
              <div className="field"><label>CONFIRM PASSWORD</label><div className="input">••••••••••••</div></div>
              <div className="btn">Continue</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">1</div>
      </section>

      {/* 2. RECOVERY KIT */}
      <section className="slide">
        <div className="copy">
          <span className="step">2</span>
          <div className="eyebrow">Safety net</div>
          <h1>Save your recovery codes</h1>
          <p>Three codes are your backup key. Keep them somewhere safe and offline.</p>
          <ul><li>Any 2 of the 3 unlock your vault</li><li>Use them if you forget your password</li><li>Save or print them — then finish setup</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="center">
              <div className="bigicon">📄</div>
              <div className="h-title">Emergency Recovery Kit</div>
              <div className="h-sub">You need at least 2 of these to recover.</div>
              <div className="codebox">
                <div className="coderow">SP-4K7Q-9WZ2</div>
                <div className="coderow">SP-B3XN-6TR8</div>
                <div className="coderow">SP-M2HV-5DL4</div>
              </div>
              <div className="btn sec">Save Recovery Codes (.txt)</div>
              <div className="btn">Complete Setup</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">2</div>
      </section>

      {/* 3. UNLOCK */}
      <section className="slide">
        <div className="copy">
          <span className="step">3</span>
          <div className="eyebrow">Every time you open</div>
          <h1>Unlock in a tap</h1>
          <p>Use Face ID / fingerprint, or type your master password.</p>
          <ul><li>Biometrics never leave your device</li><li>Auto-locks when idle or minimised</li><li>Forgot it? Recover with your codes</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="center">
              <div className="bigicon">🔒</div>
              <div className="h-title">Vault is Locked</div>
              <div className="h-sub">Unlock to access your secrets.</div>
              <div style={{ width: '88px', height: '88px', borderRadius: '50%', background: 'var(--primaryLight)', display: 'flex', alignItems: 'center', justifyContent: 'center', fontSize: '40px', margin: '6px 0 8px' }}>👆</div>
              <div className="h-sub">Tap to Scan Biometrics</div>
              <div className="field"><label>MASTER PASSWORD</label><div className="input">••••••••••</div></div>
              <div className="btn">Unlock</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">3</div>
      </section>

      {/* 4. VAULT */}
      <section className="slide">
        <div className="copy">
          <span className="step">4</span>
          <div className="eyebrow">Your home screen</div>
          <h1>Everything in one vault</h1>
          <p>All your logins, cards, notes and 2FA codes — searchable and organised.</p>
          <ul><li>Search or filter by category</li><li>2FA codes refresh live in the list</li><li>Tap ✚ to add anything</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="appbar"><h2>Vault</h2></div>
            <div className="search"><span>🔍</span> Search vault…</div>
            <div className="pills"><span className="pill on">All</span><span className="pill">Passwords</span><span className="pill">2FA</span><span className="pill">Cards</span></div>
            <div className="scr-pad">
              <div className="vcard"><div className="ic indigo">🔑</div><div className="vmeta"><div className="vt">Google</div><div className="vs">me@gmail.com</div></div><span className="star">★</span><span className="chev">›</span></div>
              <div className="vcard"><div className="ic teal">⏱️</div><div className="vmeta"><div className="vt">GitHub</div><div className="vs">2FA</div></div><div className="totp"><div className="code">418 205</div><div className="t red">6s</div></div></div>
              <div className="vcard"><div className="ic amber">💳</div><div className="vmeta"><div className="vt">Visa •• 4242</div><div className="vs">Payment Card</div></div><span className="chev">›</span></div>
              <div className="vcard"><div className="ic rose">🪪</div><div className="vmeta"><div className="vt">Passport</div><div className="vs">Identity</div></div><span className="chev">›</span></div>
              <div className="vcard"><div className="ic indigo">📝</div><div className="vmeta"><div className="vt">Wi-Fi codes</div><div className="vs">Secure Note</div></div><span className="chev">›</span></div>
            </div>
            <div className="fab">+</div>
            <div className="tabbar">
              <div className="tab on"><span className="g">🔒</span>Vault</div>
              <div className="tab"><span className="g">📷</span>Scan</div>
              <div className="tab"><span className="g">🎲</span>Generate</div>
              <div className="tab"><span className="g">❤️</span>Health</div>
              <div className="tab"><span className="g">⚙️</span>Settings</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">4</div>
      </section>

      {/* 5. ADD ITEM */}
      <section className="slide">
        <div className="copy">
          <span className="step">5</span>
          <div className="eyebrow">Add anything</div>
          <h1>15 types of secrets</h1>
          <p>Not just passwords — cards, IDs, bank details, crypto wallets, Wi-Fi and more.</p>
          <ul><li>Pick a type, fill it in, save</li><li>Each type has the right fields</li><li>Add notes, tags and favourites</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="appbar"><h2>Choose Item Type</h2></div>
            <div className="scr-pad" style={{ paddingTop: '6px' }}>
              <div className="grid">
                <div className="cell"><div className="g">🔑</div><div className="l">Password</div></div>
                <div className="cell"><div className="g">⏱️</div><div className="l">2FA Code</div></div>
                <div className="cell"><div className="g">💳</div><div className="l">Card</div></div>
                <div className="cell"><div className="g">📝</div><div className="l">Note</div></div>
                <div className="cell"><div className="g">🏦</div><div className="l">Bank</div></div>
                <div className="cell"><div className="g">👛</div><div className="l">Crypto</div></div>
                <div className="cell"><div className="g">🪪</div><div className="l">Identity</div></div>
                <div className="cell"><div className="g">📶</div><div className="l">Wi-Fi</div></div>
                <div className="cell"><div className="g">⌨️</div><div className="l">SSH Key</div></div>
              </div>
            </div>
            <div className="tabbar">
              <div className="tab on"><span className="g">🔒</span>Vault</div>
              <div className="tab"><span className="g">📷</span>Scan</div>
              <div className="tab"><span className="g">🎲</span>Generate</div>
              <div className="tab"><span className="g">❤️</span>Health</div>
              <div className="tab"><span className="g">⚙️</span>Settings</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">5</div>
      </section>

      {/* 6. SCAN */}
      <section className="slide">
        <div className="copy">
          <span className="step">6</span>
          <div className="eyebrow">Camera magic</div>
          <h1>Scan cards &amp; IDs</h1>
          <p>Point your camera — SolidPass reads the details for you, all on-device.</p>
          <ul><li>Card number is checked for accuracy</li><li>Passports/IDs read their secure zone</li><li>Nothing is uploaded anywhere</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb" style={{ color: '#fff' }}><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="cam">
              <div className="guide"></div>
              <div className="cardface">
                <div style={{ fontSize: '18px' }}>💳</div>
                <div className="num">4242 4242 4242 4242</div>
                <div className="row"><span>J. APPLESEED</span><span>12/28</span></div>
              </div>
              <div className="camhint">Align the card inside the frame</div>
              <div className="shutter"></div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">6</div>
      </section>

      {/* 7. GENERATOR */}
      <section className="slide">
        <div className="copy">
          <span className="step">7</span>
          <div className="eyebrow">Stronger passwords</div>
          <h1>Generate in one tap</h1>
          <p>Create strong passwords, memorable passphrases, or PINs.</p>
          <ul><li>Choose length &amp; character types</li><li>Copy — it auto-clears in 45s</li><li>Tap regenerate for a new one</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="appbar"><h2>Generator</h2></div>
            <div className="scr-pad" style={{ paddingTop: '8px' }}>
              <div className="gen-out">
                <div className="gen-val">7fK$2wq!Rm9pXa4Z</div>
                <div className="gen-row"><span>Strong password</span><span>🔄  📋</span></div>
              </div>
              <div className="pills" style={{ paddingLeft: '0', paddingRight: '0' }}><span className="pill on">Password</span><span className="pill">Passphrase</span><span className="pill">PIN</span></div>
              <div className="srow">Length<span className="badge ok" style={{ marginLeft: 'auto' }}>16</span></div>
              <div className="srow">Numbers &amp; symbols <span className="toggle"></span></div>
              <div className="srow">Exclude ambiguous (0 1 O l I) <span className="toggle"></span></div>
              <div className="btn">Regenerate</div>
            </div>
            <div className="tabbar">
              <div className="tab"><span className="g">🔒</span>Vault</div>
              <div className="tab"><span className="g">📷</span>Scan</div>
              <div className="tab on"><span className="g">🎲</span>Generate</div>
              <div className="tab"><span className="g">❤️</span>Health</div>
              <div className="tab"><span className="g">⚙️</span>Settings</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">7</div>
      </section>

      {/* 8. HEALTH */}
      <section className="slide">
        <div className="copy">
          <span className="step">8</span>
          <div className="eyebrow">Stay secure</div>
          <h1>Check your vault health</h1>
          <p>A single score tells you how safe your passwords are.</p>
          <ul><li>Finds weak &amp; reused passwords</li><li>Flags expiring cards &amp; IDs</li><li>Tap an issue to fix it</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="appbar"><h2>Security Health</h2></div>
            <div className="scr-pad" style={{ alignItems: 'center', display: 'flex', flexDirection: 'column' }}>
              <div className="dial"><div className="inner"><div className="score">82</div><div className="lbl">EXCELLENT</div></div></div>
              <div className="hrow">⚠️ Weak passwords <span className="badge warn">2</span></div>
              <div className="hrow">🔁 Reused passwords <span className="badge warn">1</span></div>
              <div className="hrow">📅 Expiring documents <span className="badge ok">0</span></div>
              <div className="hrow">👛 Wallets without backup <span className="badge ok">0</span></div>
            </div>
            <div className="tabbar">
              <div className="tab"><span className="g">🔒</span>Vault</div>
              <div className="tab"><span className="g">📷</span>Scan</div>
              <div className="tab"><span className="g">🎲</span>Generate</div>
              <div className="tab on"><span className="g">❤️</span>Health</div>
              <div className="tab"><span className="g">⚙️</span>Settings</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">8</div>
      </section>

      {/* 9. BACKUP & SETTINGS */}
      <section className="slide">
        <div className="copy">
          <span className="step">9</span>
          <div className="eyebrow">Don't lose your data</div>
          <h1>Back up &amp; restore</h1>
          <p>Export an encrypted backup file, and restore it on a new device.</p>
          <ul><li>Turn on biometrics &amp; auto-lock</li><li>Export a .solidpass backup anytime</li><li>Restore it during first-time setup</li></ul>
        </div>
        <div className="stage">
          <div className="phone"><div className="screen">
            <div className="notch"></div>
            <div className="sb"><span>9:41</span><span className="r">📶 🔋</span></div>
            <div className="appbar"><h2>Settings</h2></div>
            <div className="scr-pad" style={{ paddingTop: '6px' }}>
              <div className="sectionlabel" style={{ marginLeft: '0' }}>Security</div>
              <div className="srow">👆 Biometric Unlock <span className="toggle"></span></div>
              <div className="srow">⏱️ Lock on minimise <span className="toggle off"></span></div>
              <div className="sectionlabel" style={{ marginLeft: '0' }}>Backup</div>
              <div className="srow">⬆️ Export Encrypted Vault <span className="chev" style={{ marginLeft: 'auto' }}>›</span></div>
              <div className="srow">⬇️ Restore from .solidpass <span className="chev" style={{ marginLeft: 'auto' }}>›</span></div>
              <div className="srow">🔑 Change Master Password <span className="chev" style={{ marginLeft: 'auto' }}>›</span></div>
            </div>
            <div className="tabbar">
              <div className="tab"><span className="g">🔒</span>Vault</div>
              <div className="tab"><span className="g">📷</span>Scan</div>
              <div className="tab"><span className="g">🎲</span>Generate</div>
              <div className="tab"><span className="g">❤️</span>Health</div>
              <div className="tab on"><span className="g">⚙️</span>Settings</div>
            </div>
          </div></div>
        </div>
        <div className="brandmark"><img className="brandmark-logo" src={logo} alt="" /> SolidPass</div>
        <div className="pagenum">9</div>
      </section>

      {/* CLOSING */}
      <section className="cover">
        <img className="brandlogo" src={logo} alt="SolidPass logo" />
        <h1 style={{ fontSize: '46px' }}>You're in control</h1>
        <p>Your secrets stay encrypted on your device — only your master password opens them.</p>
        <div className="chips">
          <span className="chip">🔐 AES-256 encryption</span>
          <span className="chip">🔑 You hold the only key</span>
        </div>
      </section>
    </div>
  );
}
