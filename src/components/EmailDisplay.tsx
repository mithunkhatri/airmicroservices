"use client";

import React, { useState } from "react";
import styles from "./EmailDisplay.module.css";

export default function EmailDisplay() {
  const [copied, setCopied] = useState(false);
  const email = "hello@airmicroservices.com";

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(email);
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    } catch (err) {
      console.error("Failed to copy email: ", err);
    }
  };

  return (
    <div className={styles.container}>
      <a href={`mailto:${email}`} className={styles.email}>
        {email}
      </a>
      <button
        onClick={handleCopy}
        className={`${styles.copyButton} ${copied ? styles.copied : ""}`}
        aria-label="Copy email address to clipboard"
      >
        {copied ? "Copied" : "Copy"}
      </button>
    </div>
  );
}
