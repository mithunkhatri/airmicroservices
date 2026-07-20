'use client';

/* eslint-disable no-var, @typescript-eslint/no-explicit-any, react/no-unescaped-entities */

import { useEffect } from 'react';

export default function EncryptionClient() {
  useEffect(() => {
    (function(){
      "use strict";
      var reduce = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      var bridge: any   = document.getElementById('bridge');
      var packet: any   = document.getElementById('packet');
      var uiField: any  = document.getElementById('uiField');
      var uiEye: any    = document.getElementById('uiEye');
      var kdf: any      = document.getElementById('kdf');
      var kdfCounter: any = document.getElementById('kdfCounter');
      var aes: any      = document.getElementById('aes');
      var dkbox: any    = document.getElementById('dkbox');
      var dkVal: any    = document.getElementById('dkVal');
      var dkLock: any   = document.getElementById('dkLock');
      var rows: any     = document.getElementById('rows');
      var encdkRow: any = document.getElementById('encdkRow');
      var lamp: any     = document.getElementById('lamp');
      var statusText: any = document.getElementById('statusText');

      var btnUnlock: any = document.getElementById('btnUnlock');
      var btnSave: any   = document.getElementById('btnSave');
      var btnOpen: any   = document.getElementById('btnOpen');
      var btnLock: any   = document.getElementById('btnLock');

      var HEX = "0123456789abcdef";
      function hx(n: any){ var s=""; for(var i=0;i<n;i++) s+=HEX[Math.floor(Math.random()*16)]; return s; }
      function cipherText(){ return hx(6)+"…:"+hx(4)+"…"+hx(4)+"…"+hx(2); }
      function keyText(){ return hx(4)+" "+hx(4)+" "+hx(4)+" "+hx(4); }

      var unlocked = false, busy = false;
      var SECRET = "hunter2!";

      function wait(ms: any){ return new Promise<void>(function(r){ setTimeout(r, reduce?0:ms); }); }

      function centerOf(el: any){
        var b = bridge.getBoundingClientRect(), r = el.getBoundingClientRect();
        return { x: r.left-b.left + r.width/2, y: r.top-b.top + r.height/2 };
      }
      function placeAt(el: any){
        var c = centerOf(el);
        packet.style.transition = 'none';
        packet.style.transform = 'translate('+c.x+'px,'+c.y+'px) translate(-50%,-50%)';
        // force reflow so the next transition takes effect
        /* eslint-disable no-unused-expressions */
        packet.getBoundingClientRect();
      }
      function glideTo(el: any, ms: any){
        return new Promise<void>(function(res){
          var c = centerOf(el);
          if(reduce){ packet.style.transition='none'; packet.style.transform='translate('+c.x+'px,'+c.y+'px) translate(-50%,-50%)'; return res(); }
          packet.style.transition = 'transform '+ms+'ms cubic-bezier(.5,.05,.2,1)';
          packet.style.transform = 'translate('+c.x+'px,'+c.y+'px) translate(-50%,-50%)';
          var done=false;
          function fin(){ if(done)return; done=true; packet.removeEventListener('transitionend',fin); res(); }
          packet.addEventListener('transitionend', fin);
          setTimeout(fin, ms+150);
        });
      }
      function setPacket(cls: any, text: any){
        packet.className = 'packet show '+cls;
        packet.textContent = text;
      }
      function hidePacket(){ packet.className='packet'; }

      function setButtons(){
        btnSave.disabled = busy || !unlocked;
        btnOpen.disabled = busy || !unlocked || rows.querySelectorAll('.vrow:not(.encdk)').length===0;
        btnLock.disabled = busy || !unlocked;
        btnUnlock.disabled = busy || unlocked;
      }
      function setStatus(txt: any, on: any){ statusText.textContent = txt; lamp.classList.toggle('on', !!on); }

      async function runKdf(){
        kdf.style.borderColor = 'var(--indigo)';
        // Argon2id is memory-hard: it fills a large block of memory across passes.
        var memMiB = 19, passes = 2, frames = reduce?1:18;
        for(var pass=1;pass<=passes;pass++){
          for(var i=1;i<=frames;i++){
            var v = (memMiB*(i/frames)).toFixed(1);
            kdfCounter.textContent = 'Argon2id · pass '+pass+'/'+passes+' · filling '+v+' MiB / '+memMiB+' MiB';
            await wait(22);
          }
        }
        kdfCounter.textContent = 'Argon2id · '+passes+' passes over '+memMiB+' MiB ✓';
        kdf.style.borderColor = '';
      }

      function armDk(on: any){
        if(on){
          dkbox.classList.add('armed'); dkLock.textContent='🔓';
          dkVal.textContent = keyText(); dkVal.style.color='var(--green)';
        } else {
          dkbox.classList.remove('armed'); dkLock.textContent='🔒';
          dkVal.textContent = '— locked —'; dkVal.style.color='';
        }
      }

      async function unlock(){
        if(busy||unlocked) return; busy=true; setButtons();
        setStatus('Deriving key from master password…', false);
        setPacket('keyp', 'master password');
        placeAt(document.querySelector('.pwline'));
        await wait(60);
        await glideTo(kdf, 700);
        await runKdf();
        setPacket('keyp', 'KEK ready');
        await glideTo(encdkRow, 650);      // KEK goes to the wrapped key on disk
        encdkRow.classList.add('new'); setTimeout(function(){encdkRow.classList.remove('new');},700);
        setPacket('keyp', 'unwrap DK');
        await glideTo(dkbox, 650);         // unwrapped DK lands in memory
        hidePacket();
        armDk(true);
        unlocked = true; busy=false;
        setStatus('Unlocked — database key held in memory', true);
        setButtons();
      }

      async function save(){
        if(busy||!unlocked) return; busy=true; setButtons();
        setStatus('Encrypting a new secret…', true);
        // reveal what we're about to save, briefly
        uiField.textContent = SECRET; uiField.className='val warm'; uiEye.textContent='👁 shown';
        setPacket('plain', 'Wi-Fi: '+SECRET);
        placeAt(uiField);
        await wait(120);
        await glideTo(aes, 800);
        aes.classList.add('pulsing');
        await wait(reduce?0:520);
        aes.classList.remove('pulsing');
        setPacket('cipher', cipherText());          // transformed into ciphertext
        await glideTo(rows, 800);
        // create the new stored row
        var row = document.createElement('div');
        row.className='vrow new';
        row.innerHTML = '<div class="lab">vault_item · encrypted_details</div><div class="hex">'+cipherText()+'</div>';
        rows.appendChild(row);
        setTimeout(function(){ row.classList.remove('new'); }, 700);
        hidePacket();
        // hide the plaintext again in the UI
        uiField.textContent='••••••••'; uiField.className='val hidden'; uiEye.textContent='👁 hidden';
        busy=false; setStatus('Unlocked — database key held in memory', true); setButtons();
      }

      async function open(){
        if(busy||!unlocked) return; busy=true; setButtons();
        setStatus('Decrypting from the vault…', true);
        var lastRow = rows.querySelector('.vrow:not(.encdk):last-child') || rows.querySelectorAll('.vrow:not(.encdk)')[0];
        setPacket('cipher', lastRow ? lastRow.querySelector('.hex').textContent : cipherText());
        placeAt(lastRow || rows);
        await wait(120);
        await glideTo(aes, 800);
        aes.classList.add('pulsing');
        await wait(reduce?0:520);
        aes.classList.remove('pulsing');
        setPacket('plain', 'Wi-Fi: '+SECRET);        // transformed back into plaintext
        await glideTo(uiField, 800);
        hidePacket();
        uiField.textContent = SECRET; uiField.className='val warm'; uiEye.textContent='👁 shown';
        await wait(1400);
        uiField.textContent='••••••••'; uiField.className='val hidden'; uiEye.textContent='👁 hidden';
        busy=false; setStatus('Unlocked — database key held in memory', true); setButtons();
      }

      async function lock(){
        if(busy||!unlocked) return; busy=true; setButtons();
        setStatus('Wiping key from memory…', false);
        // zeroization sweep
        var frames = reduce?1:8;
        for(var i=0;i<frames;i++){ dkVal.textContent = '00 '.repeat(4).trim(); await wait(60); dkVal.textContent = keyText(); await wait(40); }
        dkVal.style.color='';
        armDk(false);
        unlocked=false; busy=false;
        setStatus('Locked — key not in memory', false);
        setButtons();
      }

      btnUnlock.addEventListener('click', unlock);
      btnSave.addEventListener('click', save);
      btnOpen.addEventListener('click', open);
      btnLock.addEventListener('click', lock);
      setButtons();

      // recovery 2-of-3 demo: gently highlight two of three codes on a loop
      (function recoveryLoop(){
        if(reduce) return;
        var chips = Array.prototype.slice.call(document.querySelectorAll('#rcvis .rc'));
        var combos = [[0,1],[1,2],[0,2]], k=0;
        setInterval(function(){
          chips.forEach(function(c){ c.classList.remove('pick'); });
          combos[k%3].forEach(function(i){ chips[i].classList.add('pick'); });
          k++;
        }, 1600);
      })();

      // gentle auto-demo once, after load (skipped under reduced motion)
      window.addEventListener('load', function(){
        if(reduce){ return; }
        setTimeout(async function(){
          await unlock();
          await wait(500);
          await save();
          await wait(500);
          await open();
        }, 700);
      });
    })();
  }, []);

  return (
    <div className="spDoc">
      <div className="wrap">

        <a className="site-back" href="/solidpass">← Back to SolidPass</a>

        <header className="hero">
          <div className="krow">
            <div className="keymark" aria-hidden="true">
              <svg viewBox="0 0 24 24" fill="none" stroke="#fff" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="4" y="10.5" width="16" height="10.5" rx="2.2"/><path d="M8 10.5V7a4 4 0 0 1 8 0v3.5"/><circle cx="12" cy="15.6" r="1.4" fill="#fff" stroke="none"/>
              </svg>
            </div>
            <div className="brand">SolidPass <span>/ security internals</span></div>
          </div>
          <div className="eyebrow">Zero-knowledge · on-device · offline</div>
          <h1>Inside the encryption</h1>
          <p className="lede">Your master password is the only thing that opens the vault — and it never leaves your device or gets stored anywhere. Here's exactly how a secret travels from the screen into the encrypted database, and back again.</p>
          <div className="facts">
            <div className="fact"><b>Argon2id</b> · memory-hard key derivation</div>
            <div className="fact"><b>AES-256-GCM</b> authenticated encryption</div>
            <div className="fact">256-bit random <b>database key</b></div>
            <div className="fact">No network permission</div>
          </div>
        </header>

        {/* ================= CENTERPIECE ================= */}
        <section id="bridge-section">
          <div className="section-head">
            <div className="eyebrow">The workflow, both directions</div>
            <h2>The vault bridge</h2>
            <p className="lede">Press the controls to watch data move. <b style={{ color: 'var(--warm-soft)' }}>Warm</b> is your readable secret; <b style={{ color: 'var(--cyan)' }}>cool</b> is ciphertext on disk. Nothing is readable in the vault without the key held in memory.</p>
          </div>

          <div className="stage-shell">
            <div className="controls">
              <button className="btn primary" id="btnUnlock">🔓 Unlock vault</button>
              <button className="btn warm" id="btnSave" disabled><span className="dot"></span> Save a secret →</button>
              <button className="btn cool" id="btnOpen" disabled><span className="dot"></span> ← Open a secret</button>
              <button className="btn" id="btnLock" disabled>🔒 Lock</button>
              <div className="status"><span className="statelamp" id="lamp"></span><span id="statusText">Locked — key not in memory</span></div>
            </div>

            <div className="bridge" id="bridge">
              {/* LEFT: phone UI */}
              <div className="col phone">
                <div className="cap"><span className="n">01</span> Your screen</div>
                <div className="device">
                  <div className="scr">
                    <div className="ttl">Wi-Fi password</div>
                    <div className="secretfield">
                      <span className="val hidden" id="uiField">••••••••</span>
                      <span className="eye" id="uiEye">👁 hidden</span>
                    </div>
                    <div className="pwline">master&nbsp;password&nbsp;·&nbsp;typed&nbsp;by&nbsp;you</div>
                  </div>
                </div>
              </div>

              {/* MIDDLE: keys + engine */}
              <div className="col engine-col">
                <div className="cap"><span className="n">02</span> In memory only</div>
                <div className="kdf" id="kdf">
                  <div className="h"><span>Key derivation</span><span className="tag">Argon2id · memory-hard</span></div>
                  <div className="sub">master password + salt → KEK</div>
                  <div className="counter" id="kdfCounter">filling 0 MiB / 19 MiB</div>
                </div>
                <div className="dkbox" id="dkbox">
                  <div className="dkchip"><span className="k">Database key (256-bit)</span><span id="dkVal">— locked —</span></div>
                  <div className="lock" id="dkLock">🔒</div>
                </div>
                <div className="aes" id="aes">
                  <div className="h"><span>AES-256-GCM</span><span className="tag">iv : ciphertext+tag</span></div>
                  <div className="cipherwave"><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i><i></i></div>
                </div>
              </div>

              {/* RIGHT: encrypted vault */}
              <div className="col vault">
                <div className="cap"><span className="n">03</span> Encrypted vault · SQLite</div>
                <div className="rows" id="rows">
                  <div className="vrow encdk" id="encdkRow">
                    <div className="lab">metadata · encrypted_dk</div>
                    <div className="hex">2b9f…&lt;wrapped database key&gt;…e07a</div>
                  </div>
                  <div className="vrow">
                    <div className="lab">vault_item · encrypted_details</div>
                    <div className="hex">7c14a0…f92:8ad3…&lt;cipher&gt;…b6</div>
                  </div>
                </div>
                <div className="disknote">this is all that ever touches the disk</div>
              </div>

              <div className="packet" id="packet"></div>
            </div>

            <div className="legend">
              <span><span className="swatch sw-warm"></span><b>Plaintext</b> — human-readable</span>
              <span><span className="swatch sw-cool"></span><b>Ciphertext</b> — stored on disk</span>
              <span><span className="swatch sw-key"></span><b>Keys</b> — memory only, wiped on lock</span>
            </div>
          </div>
        </section>

        {/* ================= HIERARCHY ================= */}
        <section>
          <div className="section-head">
            <div className="eyebrow">The key hierarchy</div>
            <h2>One password, two keys</h2>
            <p className="lede">Your password never encrypts data directly. It derives a wrapping key, which unlocks a random database key — the one that actually encrypts every item.</p>
          </div>
          <div className="flow">
            <div className="node">
              <div className="big">🔑</div><div className="step">STEP 01</div>
              <h3>Master password</h3>
              <p>Known only to you. Never stored, never transmitted, never recoverable by anyone.</p>
            </div>
            <div className="node k">
              <div className="big">🧮</div><div className="step">STEP 02 · Argon2id</div>
              <h3>Key-encryption key</h3>
              <p>Argon2id churns your password + a 32-byte random salt through a large block of memory, making brute-force attacks with GPUs or specialized hardware ruinously expensive.</p>
            </div>
            <div className="node k">
              <div className="big">🗝️</div><div className="step">STEP 03 · AES-GCM unwrap</div>
              <h3>Database key</h3>
              <p>A random 256-bit key, itself stored only in encrypted form. The KEK unwraps it into memory.</p>
            </div>
            <div className="node">
              <div className="big">🗂️</div><div className="step">STEP 04</div>
              <h3>Your items</h3>
              <p>Every password, card and note is individually encrypted with the database key.</p>
            </div>
          </div>
        </section>

        {/* ================= PRIMITIVES ================= */}
        <section>
          <div className="section-head">
            <div className="eyebrow">The building blocks</div>
            <h2>What's doing the work</h2>
          </div>
          <div className="cards">
            <div className="card">
              <div className="ico">🧮</div>
              <h3>Memory-hard by design</h3>
              <p>Argon2id (RFC 9106) turns your password into a key by working through a large block of memory, not just raw computation — so the GPU and ASIC rigs that shred older KDFs lose their edge, even offline.</p>
              <div className="spec">Argon2id · m = 19 MiB · t = 2 passes · p = 1 · dkLen = 32 bytes · salt = 32 random bytes</div>
            </div>
            <div className="card">
              <div className="ico">🔐</div>
              <h3>Encrypt <em>and</em> verify</h3>
              <p>AES-256-GCM doesn't just scramble data — it attaches an authentication tag. If a single byte of the ciphertext is tampered with, decryption refuses.</p>
              <div className="spec">256-bit key · 12-byte IV · 16-byte tag · format iv:ct+tag</div>
            </div>
            <div className="card">
              <div className="ico">🎲</div>
              <h3>Real randomness</h3>
              <p>The database key, salts and IVs come from the device's cryptographic RNG — never from your password or anything predictable.</p>
              <div className="spec">Crypto.getRandomValues() · fresh IV per encryption</div>
            </div>
            <div className="card">
              <div className="ico">🆘</div>
              <h3>2-of-3 recovery</h3>
              <p>Three recovery codes each help wrap a spare copy of the database key. Any two, in any order, can reopen the vault if you forget your password.</p>
              <div className="recovery-vis" id="rcvis">
                <div className="rc" data-i="0">SP-4K7Q</div>
                <div className="rc" data-i="1">SP-B3XN</div>
                <div className="rc" data-i="2">SP-M2HV</div>
              </div>
            </div>
            <div className="card">
              <div className="ico">🧽</div>
              <h3>Wiped on lock</h3>
              <p>The database key lives only in RAM while the vault is open. Lock, auto-lock, or minimise, and its bytes are overwritten with zeros.</p>
              <div className="spec">zeroize(key) · no plaintext key ever written to disk</div>
            </div>
            <div className="card">
              <div className="ico">📴</div>
              <h3>Nowhere to leak</h3>
              <p>The app ships with no internet permission at all, so encrypted or not, your data has no path off the device unless you export it yourself.</p>
              <div className="spec">INTERNET permission stripped · zero telemetry</div>
            </div>
          </div>
        </section>

        {/* ================= ON DISK ================= */}
        <section>
          <div className="section-head">
            <div className="eyebrow">Ground truth</div>
            <h2>What's actually on disk</h2>
            <p className="lede">If someone copied the database file, this is all they'd see. No master password, no plaintext, no key — only a salt, the KDF settings, and ciphertext. Even item titles, types and tags are encrypted.</p>
          </div>
          <div className="disk">
            <table>
              <thead><tr><th>Table</th><th>Column</th><th>Stored value</th></tr></thead>
              <tbody>
                <tr><td className="name">metadata</td><td>kdf_salt</td><td>a19c…&lt;32 random bytes&gt;…7f</td></tr>
                <tr><td className="name">metadata</td><td>kdf_algorithm</td><td>argon2id</td></tr>
                <tr><td className="name">metadata</td><td>kdf_params</td><td>{'{"t":2,"m":19456,"p":1}'}</td></tr>
                <tr><td className="name">metadata</td><td>encrypted_dk</td><td className="i">3d0b…:4c8e…&lt;database key wrapped by your password&gt;…</td></tr>
                <tr><td className="name">metadata</td><td>recovery_dk_ab / bc / ac</td><td className="i">…&lt;database key wrapped by each pair of recovery codes&gt;…</td></tr>
                <tr><td className="name">vault_items</td><td>title / type / tags</td><td className="c">7c33…:e0a1…&lt;AES-256-GCM ciphertext + tag&gt;…</td></tr>
                <tr><td className="name">vault_items</td><td>encrypted_details</td><td className="c">9f21…:8b7a…&lt;AES-256-GCM ciphertext + tag&gt;…</td></tr>
                <tr><td className="name">vault_items</td><td>encrypted_notes</td><td className="c">c40e…:1d55…&lt;ciphertext + tag&gt;…</td></tr>
                <tr><td className="name">scanned_document_pages</td><td>encrypted_image_data</td><td className="c">b8f2…:6a4d…&lt;ciphertext + tag&gt;…</td></tr>
              </tbody>
            </table>
          </div>
        </section>

        <footer>
          <div className="rule"></div>
          <div className="foot-grid">
            <div>
              <p><b style={{ color: 'var(--ink)' }}>In one sentence:</b> your password derives a key that unwraps a random database key in memory; that key encrypts and decrypts each item with authenticated AES-256; the moment the vault locks, the key is gone.</p>
              <p>Cryptography is implemented with the audited <code>@noble/hashes</code> and <code>@noble/ciphers</code> libraries — no home-grown algorithms.</p>
            </div>
            <div className="warnbox">
              <b>The trade-off of true zero-knowledge:</b> because nothing about your password is stored, losing it <em>and</em> your recovery codes means the data is unrecoverable — by design, and by anyone.
            </div>
          </div>
          <div className="tiny">SolidPass — security internals · this page runs entirely offline and stores nothing.</div>
        </footer>

      </div>
    </div>
  );
}
