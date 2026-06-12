"use client";

import React from "react";
import styles from "./Logo.module.css";

interface LogoProps {
  size?: number;
  className?: string;
}

export default function Logo({ size = 140, className = "" }: LogoProps) {
  return (
    <div 
      className={`${styles.logoWrapper} ${className}`} 
      style={{ width: size, height: size }}
    >
      <svg 
        viewBox="0 0 200 200" 
        className={styles.logoSvg}
        xmlns="http://www.w3.org/2000/svg"
      >
        {/* Invisible path for the circular text to follow */}
        <path
          id="logoTextPath"
          d="M 100, 32 a 68,68 0 1,1 0,136 a 68,68 0 1,1 0,-136"
          fill="none"
        />

        {/* Technical Crosshairs (Engineering Aesthetic) */}
        <line x1="100" y1="12" x2="100" y2="188" className={styles.crosshair} />
        <line x1="12" y1="100" x2="188" y2="100" className={styles.crosshair} />

        {/* Rings */}
        <circle cx="100" cy="100" r="96" className={styles.outerRing} />
        <circle cx="100" cy="100" r="54" className={styles.outerRing} />

        {/* Center Minimal Indicator */}
        <circle cx="100" cy="100" r="3.5" className={styles.centerDot} />

        {/* Rotating Text */}
        <text className={styles.circleText}>
          <textPath href="#logoTextPath" startOffset="0%">
            AIR MICROSERVICES LLC • BACKEND EXCELLENCE •&nbsp;
          </textPath>
        </text>
      </svg>
    </div>
  );
}
