import React from "react";
import styles from "./StoryReel.module.css";

/* Inline custom properties: React's CSSProperties has no slot for them. */
type Vars = React.CSSProperties & Record<string, string | number>;

/**
 * A six-scene loop, no JavaScript and no video file.
 *
 * Every animated element runs a 24s animation whose keyframes occupy only the
 * first sixth of it — one 4s scene slot — and is delayed by `--i * 4s` plus its
 * own `--d` beat. So all of them share one period, stay in phase for ever, and a
 * scene is retimed by changing one number rather than by rewriting keyframes.
 *
 * Only `opacity` and `transform` are animated (plus one `stroke-dashoffset` for
 * the route), which is what lets the reduced-motion branch collapse the whole
 * thing into a static grid with a single reset.
 */
const scene = (i: number): Vars => ({ "--i": i });
const beat = (d: number): Vars => ({ "--d": `${d}s` });

const CHATTER = [
  { text: "so are we going or not", x: "4%", y: "6%", r: "-4deg", d: 0.15 },
  { text: "what time??", x: "58%", y: "0%", r: "3deg", d: 0.4 },
  { text: "who's driving", x: "22%", y: "36%", r: "2deg", d: 0.65 },
  { text: "fuel was ₹2,400 na?", x: "48%", y: "58%", r: "-3deg", d: 0.9 },
  { text: "guys?? @all", x: "8%", y: "76%", r: "4deg", d: 1.15 },
];

const ENROLLED = ["AV", "NR", "SK", "DI", "PN", "RS", "MJ", "LD"];

/* Pins sit on the cubic path's segment endpoints, so their percentage positions
   are exactly on the drawn route at any size. viewBox is 460×240. */
const ROUTE = "M 30,190 C 90,150 100,90 160,80 C 220,70 240,150 300,140 C 350,132 370,70 430,55";
const PINS = [
  { who: "AV", role: "Lead", x: "93.5%", y: "22.9%", d: 0.9 },
  { who: "DI", role: "", x: "65.2%", y: "58.3%", d: 1.15 },
  { who: "SK", role: "", x: "34.8%", y: "33.3%", d: 1.4 },
  { who: "NR", role: "Sweep", x: "6.5%", y: "79.2%", d: 1.65 },
];

const SPEND = [
  { what: "Fuel", amount: "₹2,400", d: 0.5 },
  { what: "Stay", amount: "₹6,000", d: 0.7 },
  { what: "Food", amount: "₹1,851", d: 0.9 },
];

export default function StoryReel() {
  return (
    <div className={styles.reel}>
      <div className={styles.stage}>
        <div className={styles.chrome} aria-hidden="true">
          <span className={styles.chromeMark} />
          <span className={styles.chromeName}>The Outdoor Club</span>
        </div>

        {/* 01 — the problem */}
        <section className={styles.scene} style={scene(0)}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.bubbleField}>
              {CHATTER.map((c) => (
                <div
                  key={c.text}
                  className={styles.bubble}
                  style={{ left: c.x, top: c.y, transform: `rotate(${c.r})` }}
                >
                  <span className={styles.bubbleBody} style={beat(c.d)}>
                    {c.text}
                  </span>
                </div>
              ))}
              <span className={styles.bubbleCount} style={beat(1.6)}>
                404 unread
              </span>
            </div>
          </div>
          <p className={styles.caption} style={beat(0.1)}>
            <span className={styles.captionStep}>01 — the group chat</span>
            <span className={styles.captionLine}>
              Four hundred messages, and still no plan.
            </span>
          </p>
        </section>

        {/* 02 — the plan */}
        <section className={styles.scene} style={scene(1)}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.card}>
              <span className={styles.cardTitle} style={beat(0.35)}>
                Spiti Valley Road Trip
              </span>
              <span className={styles.cardRow} style={beat(0.55)}>
                <i className={styles.cardDot} />
                Fri 12 Sep · 9 days
              </span>
              <span className={styles.cardRow} style={beat(0.75)}>
                <i className={styles.cardDot} />
                Manali → Kaza → Manali
              </span>
              <span className={styles.cardCaptains} style={beat(1)}>
                <i className={styles.cardAvatar}>AV</i>
                <i className={styles.cardAvatar}>DI</i>
                <em>captains appointed</em>
              </span>
              <span className={styles.cardWindow} style={beat(1.25)}>
                Enrolment open · closes in 4 days
              </span>
            </div>
          </div>
          <p className={styles.caption} style={beat(0.1)}>
            <span className={styles.captionStep}>02 — the plan</span>
            <span className={styles.captionLine}>
              So the club plans it once, where everybody looks.
            </span>
          </p>
        </section>

        {/* 03 — the people */}
        <section className={styles.scene} style={scene(2)}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.roster}>
              {ENROLLED.map((who, n) => (
                <span
                  key={who}
                  className={styles.rosterAvatar}
                  style={beat(0.35 + n * 0.11)}
                >
                  {who}
                </span>
              ))}
            </div>
            <span className={styles.goingChip} style={beat(1.5)}>
              18 going · 6 carpooling
            </span>
          </div>
          <p className={styles.caption} style={beat(0.1)}>
            <span className={styles.captionStep}>03 — the people</span>
            <span className={styles.captionLine}>
              Everyone enrols themselves. Nobody chases a headcount.
            </span>
          </p>
        </section>

        {/* 04 — the day */}
        <section className={styles.scene} style={scene(3)}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.map}>
              <svg
                className={styles.mapSvg}
                viewBox="0 0 460 240"
                role="presentation"
                focusable="false"
              >
                <path className={styles.terrain} d="M 0,240 L 120,120 L 190,175 L 300,70 L 380,140 L 460,90 L 460,240 Z" />
                <path className={styles.routeBed} d={ROUTE} />
                <path className={styles.route} d={ROUTE} />
              </svg>

              {PINS.map((p) => (
                <span
                  key={p.who}
                  className={styles.pin}
                  style={{ left: p.x, top: p.y }}
                >
                  <span className={styles.pinPop} style={beat(p.d)}>
                    <span className={styles.pinBob}>
                      <span className={styles.pinDisc}>{p.who}</span>
                      {p.role ? <em className={styles.pinRole}>{p.role}</em> : null}
                    </span>
                  </span>
                </span>
              ))}

              <span className={styles.livePill} style={beat(0.5)}>
                <i className={styles.liveDot} />
                Live · 8 sharing
              </span>
            </div>
          </div>
          <p className={styles.caption} style={beat(0.1)}>
            <span className={styles.captionStep}>04 — the day itself</span>
            <span className={styles.captionLine}>
              The whole group on one map — who is ahead, who is sweeping.
            </span>
          </p>
        </section>

        {/* 05 — the money */}
        <section className={styles.scene} style={scene(4)}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.ledger}>
              {SPEND.map((s) => (
                <span key={s.what} className={styles.spendRow} style={beat(s.d)}>
                  <em>{s.what}</em>
                  <b>{s.amount}</b>
                </span>
              ))}
              <span className={styles.spendRule} style={beat(1.1)} />
              <span className={styles.shares}>
                {["AV", "DI", "SK"].map((who, n) => (
                  <span
                    key={who}
                    className={styles.shareChip}
                    style={beat(1.3 + n * 0.13)}
                  >
                    {who} <b>₹3,417</b>
                  </span>
                ))}
              </span>
              <span className={styles.settled} style={beat(1.85)}>
                <i className={styles.tick} />
                Settled
              </span>
            </div>
          </div>
          <p className={styles.caption} style={beat(0.1)}>
            <span className={styles.captionStep}>05 — the money</span>
            <span className={styles.captionLine}>
              The fuel and the stay split themselves. Receipts stay attached.
            </span>
          </p>
        </section>

        {/* 06 — what it adds up to */}
        <section className={styles.scene} style={scene(5)}>
          <div className={styles.art} aria-hidden="true">
            <div className={styles.cert} style={beat(0.35)}>
              <span className={styles.certKicker}>Certificate of</span>
              <span className={styles.certTitle}>Community Impact</span>
              <span className={styles.certName} style={beat(0.8)}>
                Patrick
              </span>
              <span className={styles.certLine} style={beat(1.05)} />
              <span className={styles.certLineShort} style={beat(1.2)} />
              <span className={styles.certCode} style={beat(1.5)}>
                TOC-2026-6B14A9
              </span>
              <span className={styles.seal} style={beat(1.35)}>
                <i className={styles.sealTick} />
              </span>
            </div>
          </div>
          <p className={styles.caption} style={beat(0.1)}>
            <span className={styles.captionStep}>06 — what it adds up to</span>
            <span className={styles.captionLine}>
              Participate in the community impact initiative and receive a certificate of appreciation.
            </span>
          </p>
        </section>

        <div className={styles.track} aria-hidden="true">
          <span className={styles.dots}>
            {[0, 1, 2, 3, 4, 5].map((i) => (
              <i key={i} className={styles.dot} style={scene(i)} />
            ))}
          </span>
          <span className={styles.progress}>
            <i className={styles.progressBar} />
          </span>
        </div>
      </div>
    </div>
  );
}
