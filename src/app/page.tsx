import React from "react";
import Navbar from "@/components/Navbar";
import AirMSLogo from "@/components/AirMSLogo";
import Logo from "@/components/Logo";
import Button from "@/components/Button";
import Card from "@/components/Card";
import EmailDisplay from "@/components/EmailDisplay";
import styles from "./page.module.css";

export default function Home() {
  const currentYear = new Date().getFullYear();

  const servicesList = [
    {
      number: "01",
      title: "Backend Development",
      description: "High-performance application logic engineered for speed, safety, and deterministic behavior. We translate complex business logic into clean, maintainable, and type-safe code structures.",
      tags: ["Golang", "Node.js / TS", "Rust", "PostgreSQL"],
    },
    {
      number: "02",
      title: "Microservices Architecture",
      description: "Decoupling monolithic platforms into fault-tolerant distributed systems. We design message topologies, event distribution patterns, and clear transactional boundaries.",
      tags: ["gRPC", "Kafka / RabbitMQ", "Event Sourcing", "Redis"],
    },
    {
      number: "03",
      title: "API Design & Integration",
      description: "Crafting expressive, self-documenting, and secure interfaces. We build REST, GraphQL, and gRPC endpoints designed to be developer-friendly, reliable, and secure.",
      tags: ["RESTful", "GraphQL", "Protobufs", "OAuth2 / OIDC"],
    },
    {
      number: "04",
      title: "Cloud-Native Engineering",
      description: "Deploying containerized workloads to dynamic, self-healing cloud clusters. We define infrastructure-as-code and orchestrate auto-scaling, highly available architectures.",
      tags: ["Kubernetes", "Docker", "Terraform", "AWS / GCP"],
    },
    {
      number: "05",
      title: "System Modernization",
      description: "Safely migrating legacy backend platforms to modern technology stacks. We upgrade libraries, decouple legacy dependencies, and refactor databases with zero downtime.",
      tags: ["Refactoring", "Legacy Systems", "Database Migration", "CI/CD"],
    },
    {
      number: "06",
      title: "Technical Consulting",
      description: "Strategic guidance on database optimization, software architecture design, performance profiling, and technical audits to prepare systems for massive scale.",
      tags: ["Profiling", "Query Tuning", "Architecture Audit", "Scaling Plan"],
    },
  ];

  const approachSteps = [
    {
      number: "01",
      title: "Understand",
      text: "We deep-dive into your system constraints, traffic profiles, and business goals. We align on technical boundaries, performance indicators, and scale projections before planning implementation details.",
    },
    {
      number: "02",
      title: "Design",
      text: "We sketch data models, communication flows, and system topologies. Everything is documented with precision, establishing clear interface contracts, schemas, and architecture blueprints.",
    },
    {
      number: "03",
      title: "Build & Scale",
      text: "We write highly optimized, thoroughly tested, and modular code. We configure auto-scaling infrastructure, telemetry tracing, and automated validation pipelines to guarantee production resilience.",
    },
  ];

  return (
    <div className={styles.page}>
      <Navbar />

      <main>
        {/* HERO SECTION */}
        <section id="hero" className={styles.hero} aria-label="Introduction">
          <div className="grid-bg" />
          <div className={`container ${styles.heroContent}`}>
            <div className={styles.heroNote}>
              <span className={styles.pulsingDotSmall} />
              <span>CURRENTLY OCCUPIED • NOT OPEN TO NEW PROJECTS</span>
            </div>
            
            <div className={styles.heroLogoContainer}>
              <AirMSLogo size={130} />
              <Logo size={130} />
            </div>
            
            <h1 className={styles.heroTitle}>
              Backend systems,<br />built with clarity.
            </h1>
            
            <p className={styles.heroSubtitle}>
              Air Microservices LLC partners with engineering teams to design, build, and scale reliable backend platforms, APIs, and microservice-based architectures.
            </p>
            
            <div className={styles.heroActions}>
              <Button variant="primary" href="#contact">
                Contact us
              </Button>
              <Button variant="secondary" href="#services">
                View services
              </Button>
            </div>
          </div>
        </section>

        {/* SERVICES SECTION */}
        <section id="services" className={`section-padding ${styles.services}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeaderMono}>01 / Core Capabilities</span>
              <h2 className={styles.sectionHeaderTitle}>Services</h2>
            </div>

            <div className={styles.servicesGrid}>
              {servicesList.map((service) => (
                <Card
                  key={service.number}
                  number={service.number}
                  title={service.title}
                  description={service.description}
                  tags={service.tags}
                />
              ))}
            </div>
          </div>
        </section>

        {/* APPROACH SECTION */}
        <section id="approach" className={`section-padding ${styles.approach}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeaderMono}>02 / Workflow Integration</span>
              <h2 className={styles.sectionHeaderTitle}>Our Approach</h2>
            </div>

            <div className={styles.approachGrid}>
              {approachSteps.map((step) => (
                <div key={step.number} className={styles.approachStep}>
                  <span className={styles.approachStepNumber}>{step.number}</span>
                  <h3 className={styles.approachStepTitle}>{step.title}</h3>
                  <p className={styles.approachStepText}>{step.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ABOUT SECTION */}
        <section id="about" className={`section-padding ${styles.about}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeaderMono}>03 / Engineering Philosophy</span>
              <h2 className={styles.sectionHeaderTitle}>About the company</h2>
            </div>

            <div className={styles.aboutLayout}>
              <h3 className={styles.aboutLead}>
                Air Microservices LLC is a backend-focused software engineering company helping businesses create maintainable, scalable, production-ready systems.
              </h3>
              
              <div className={styles.aboutBody}>
                <p className={styles.aboutParagraph}>
                  We believe that complexity is the enemy of system reliability. Modern architectures often suffer from over-engineering, resulting in brittle systems that are difficult to debug and expensive to operate. Our mission is to build clean, deterministic backend architectures with clear boundaries, type-safety, and minimal moving parts.
                </p>
                <p className={styles.aboutParagraph}>
                  We operate as an elite engineering partner, collaborating closely with your technology leaders. Whether you are bootstrapping a new microservices platform, upgrading APIs, or modernizing legacy systems, we deliver the structural clarity and robust performance your business demands.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CONTACT SECTION */}
        <section id="contact" className={`section-padding ${styles.contact}`}>
          <div className="container">
            <div className={styles.sectionHeader}>
              <span className={styles.sectionHeaderMono}>04 / Commencing Projects</span>
              <h2 className={styles.sectionHeaderTitle}>Connect With Us</h2>
            </div>

            <div className={styles.contactLayout}>
              <div className={styles.contactInfo}>
                <div>
                  <h3 className={styles.contactLabel}>Electronic Mail</h3>
                  <EmailDisplay />
                </div>

                <div>
                  <h3 className={styles.contactLabel}>ADDRESS</h3>
                  <address className={styles.addressBlock}>
                    7901 4TH ST N STE 4000<br />
                    ST. PETERSBURG, FLORIDA<br />
                    USA 33702
                  </address>
                </div>
              </div>

              {/* Technical Visual Representation */}
              <div className={styles.contactVisual} aria-hidden="true">
                <svg viewBox="0 0 300 300" width="100%" height="100%" style={{ maxHeight: "350px", maxWidth: "350px" }} xmlns="http://www.w3.org/2000/svg" fill="none" stroke="var(--text-primary)" strokeWidth="3" strokeLinecap="round" strokeLinejoin="round">
                  {/* Left Arm / Wrist */}
                  <path d="M 40 260 L 110 190" />
                  <path d="M 25 245 L 95 175" opacity="0.3" strokeWidth="1.5" />
                  
                  {/* Right Arm / Wrist */}
                  <path d="M 260 40 L 190 110" />
                  <path d="M 275 55 L 205 125" opacity="0.3" strokeWidth="1.5" />

                  {/* Left Hand Loop (Interlocking Clasp) */}
                  <path d="M 110 190 L 140 160 C 150 150, 165 150, 175 160 C 185 170, 185 185, 175 195 C 165 205, 150 205, 140 195 L 130 185" />
                  
                  {/* Right Hand Loop (Interlocking Clasp) */}
                  <path d="M 190 110 L 160 140 C 150 150, 135 150, 125 140 C 115 130, 115 115, 125 105 C 135 95, 150 95, 160 105 L 170 115" />
                </svg>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* FOOTER */}
      <footer className={styles.footer}>
        <div className={`container ${styles.footerContainer}`}>
          <div className={styles.footerTop}>
            <div>
              <div className={styles.footerBrandContainer}>
                <AirMSLogo size={36} />
                <span className={styles.footerBrand}>Air Microservices LLC</span>
              </div>
              <p style={{ fontSize: "0.85rem", marginTop: "0.5rem", maxWidth: "340px", lineHeight: "1.6", color: "var(--text-secondary)" }}>
                Your partner in backend development excellence. We help engineering teams architect, construct, and scale reliable backend platforms, secure APIs, and resilient microservices.
              </p>
            </div>
            
            <div className={styles.footerLinks}>
              <div className={styles.footerColumn}>
                <span className={styles.footerColumnTitle}>Navigation</span>
                <ul className={styles.footerLinkList}>
                  <li><a href="#services" className={styles.footerLink}>Services</a></li>
                  <li><a href="#approach" className={styles.footerLink}>Approach</a></li>
                  <li><a href="#about" className={styles.footerLink}>About</a></li>
                  <li><a href="#contact" className={styles.footerLink}>Contact</a></li>
                </ul>
              </div>
              <div className={styles.footerColumn}>
                <span className={styles.footerColumnTitle}>Inquiries</span>
                <ul className={styles.footerLinkList}>
                  <li>
                    <a href="mailto:hello@airmicroservices.com" className={styles.footerLink}>
                      hello@airmicroservices.com
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className={styles.footerBottom}>
            <div>
              Air Microservices LLC &copy; 2023 - {currentYear}. All rights reserved.
            </div>
            
            <address className={styles.footerAddress}>
              7901 4TH ST N STE 4000, ST. PETERSBURG, FL, USA 33702
            </address>
          </div>
        </div>
      </footer>
    </div>
  );
}
