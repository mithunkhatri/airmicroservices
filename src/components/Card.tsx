import React from "react";
import styles from "./Card.module.css";

interface CardProps {
  number: string;
  title: string;
  description: string;
  tags?: string[];
}

export default function Card({ number, title, description, tags = [] }: CardProps) {
  return (
    <div className={styles.card}>
      <div className={styles.cardHeader}>
        <span className={styles.cardNumber}>{number}</span>
        {/* Minimal geometric arrow symbol representing external link/hover action */}
        <span className={styles.cardIcon} aria-hidden="true">
          ↳
        </span>
      </div>

      <div className={styles.cardBody}>
        <h3 className={styles.cardTitle}>{title}</h3>
        <p className={styles.cardDescription}>{description}</p>
        
        {tags.length > 0 && (
          <ul className={styles.cardTechList}>
            {tags.map((tag) => (
              <li key={tag} className={styles.techTag}>
                {tag}
              </li>
            ))}
          </ul>
        )}
      </div>
    </div>
  );
}
