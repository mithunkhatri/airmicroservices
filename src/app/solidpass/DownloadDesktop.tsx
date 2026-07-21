"use client";

import { useEffect, useState } from "react";
import styles from "./DownloadDesktop.module.css";

// Public GitHub repo where the desktop installers are published as Releases.
// Must be public so anonymous download links work. Change here if it moves.
const REPO = "airmicroservices/solidpass-artifacts";
const dl = (file: string) =>
  `https://github.com/${REPO}/releases/latest/download/${file}`;

const FILES = {
  macArm: "SolidPass-mac-arm64.dmg",
  macIntel: "SolidPass-mac-x64.dmg",
  win: "SolidPass-win-x64.exe",
  linuxAppImage: "SolidPass-linux-x86_64.AppImage",
  linuxDeb: "SolidPass-linux-amd64.deb",
};

type OS = "mac" | "windows" | "linux" | "mobile" | "unknown";

function detectOS(): OS {
  if (typeof navigator === "undefined") return "unknown";
  const ua = navigator.userAgent.toLowerCase();
  const platform = (navigator.platform || "").toLowerCase();
  if (/android|iphone|ipad|ipod/.test(ua)) return "mobile";
  if (ua.includes("win") || platform.includes("win")) return "windows";
  if (ua.includes("mac") || platform.includes("mac")) return "mac";
  if (ua.includes("linux") || platform.includes("linux")) return "linux";
  return "unknown";
}

function AppleIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M16.365 1.43c0 1.14-.417 2.2-1.11 2.98-.83.94-2.19 1.67-3.32 1.58-.14-1.1.42-2.27 1.06-3 .72-.82 2.03-1.44 3.13-1.5.02.31.24.31.24-.06zM20.9 17.06c-.55 1.27-.82 1.84-1.53 2.96-.99 1.57-2.39 3.52-4.12 3.53-1.54.02-1.94-.99-4.02-.98-2.08.01-2.52 1-4.06.98-1.73-.02-3.05-1.78-4.04-3.34C-.09 15.8-.36 10.53 1.4 7.75c1.25-1.98 3.22-3.14 5.08-3.14 1.89 0 3.08 1.03 4.65 1.03 1.52 0 2.44-1.03 4.63-1.03 1.66 0 3.42.9 4.68 2.46-4.11 2.25-3.45 8.12.46 9.99z" />
    </svg>
  );
}
function WindowsIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M3 5.1 10.3 4v7.3H3V5.1zM10.3 12.7V20L3 18.9v-6.2h7.3zM11.5 3.85 21 2.5v8.8h-9.5V3.85zM21 12.7v8.8l-9.5-1.35v-7.45H21z" />
    </svg>
  );
}
function LinuxIcon() {
  return (
    <svg className={styles.cardIcon} viewBox="0 0 24 24" fill="currentColor" aria-hidden>
      <path d="M12 2c-2 0-3.2 1.7-3.2 3.9 0 1.4.5 2.2.5 3.4 0 1.1-1 2-1.9 3.4-.9 1.3-2 2.7-2 4.6 0 .8.3 1.4.8 1.8-.2.5-.3 1 .1 1.4.5.5 1.5.4 2.6.6 1 .2 1.7.9 2.9.9h.4c1.2 0 1.9-.7 2.9-.9 1.1-.2 2.1-.1 2.6-.6.4-.4.3-.9.1-1.4.5-.4.8-1 .8-1.8 0-1.9-1.1-3.3-2-4.6-.9-1.4-1.9-2.3-1.9-3.4 0-1.2.5-2 .5-3.4C15.2 3.7 14 2 12 2zm-1.4 4.1c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zm2.8 0c.4 0 .7.4.7.9s-.3.9-.7.9-.7-.4-.7-.9.3-.9.7-.9zM12 9.3c.8 0 1.6.5 1.6.9 0 .3-.8.6-1.6.6s-1.6-.3-1.6-.6c0-.4.8-.9 1.6-.9z" />
    </svg>
  );
}
function DownloadIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden>
      <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
      <polyline points="7 10 12 15 17 10" />
      <line x1="12" y1="15" x2="12" y2="3" />
    </svg>
  );
}

export default function DownloadDesktop() {
  const [os, setOs] = useState<OS>("unknown");
  useEffect(() => setOs(detectOS()), []);

  const primary =
    os === "windows"
      ? { href: dl(FILES.win), label: "Download for Windows" }
      : os === "mac"
        ? { href: dl(FILES.macArm), label: "Download for macOS" }
        : os === "linux"
          ? { href: dl(FILES.linuxAppImage), label: "Download for Linux" }
          : null;

  return (
    <div className={styles.wrap}>
      {/* Platform badges */}
      <div className={styles.badges}>
        <span className={styles.badge}><AppleIcon />macOS 11+</span>
        <span className={styles.badge}><WindowsIcon />Windows 10+</span>
        <span className={styles.badge}><LinuxIcon />Linux</span>
      </div>

      {/* Auto-detected primary download */}
      <div className={styles.primaryRow}>
        {primary && (
          <a className={styles.primaryBtn} href={primary.href} rel="noopener noreferrer">
            <DownloadIcon />
            {primary.label}
          </a>
        )}
        {os === "mac" && (
          <a className={styles.altLink} href={dl(FILES.macIntel)}>
            Using an Intel Mac? Download the Intel build →
          </a>
        )}
        {os === "mobile" && (
          <span className={styles.altLink}>
            You&apos;re on mobile — grab SolidPass from the App Store or Google Play above.
          </span>
        )}
      </div>

      {/* All platforms */}
      <div className={styles.grid}>
        <div className={`${styles.card} ${os === "mac" ? styles.cardActive : ""}`}>
          <div className={styles.cardHead}>
            <AppleIcon />
            <span className={styles.cardName}>macOS</span>
            {os === "mac" && <span className={styles.recommended}>Detected</span>}
          </div>
          <div className={styles.cardLinks}>
            <a className={styles.dlLink} href={dl(FILES.macArm)}>Apple Silicon (.dmg)</a>
            <a className={styles.dlLink} href={dl(FILES.macIntel)}>Intel (.dmg)</a>
          </div>
        </div>

        <div className={`${styles.card} ${os === "windows" ? styles.cardActive : ""}`}>
          <div className={styles.cardHead}>
            <WindowsIcon />
            <span className={styles.cardName}>Windows</span>
            {os === "windows" && <span className={styles.recommended}>Detected</span>}
          </div>
          <div className={styles.cardLinks}>
            <a className={styles.dlLink} href={dl(FILES.win)}>Installer (.exe)</a>
          </div>
        </div>

        <div className={`${styles.card} ${os === "linux" ? styles.cardActive : ""}`}>
          <div className={styles.cardHead}>
            <LinuxIcon />
            <span className={styles.cardName}>Linux</span>
            {os === "linux" && <span className={styles.recommended}>Detected</span>}
          </div>
          <div className={styles.cardLinks}>
            <a className={styles.dlLink} href={dl(FILES.linuxAppImage)}>AppImage</a>
            <a className={styles.dlLink} href={dl(FILES.linuxDeb)}>Debian/Ubuntu (.deb)</a>
          </div>
        </div>
      </div>

      <p className={styles.note}>
        100% offline. Your vault is created on mobile and imported here via an encrypted
        .solidpass backup.
      </p>
    </div>
  );
}
