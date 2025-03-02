import React from "react";
import "./styles.css";

const WorkdayProfile = () => {
  return (
    <div className="container">
      <div className="sidebar">
        <img src="/profile.jpg" alt="Anwar Syed" className="profile-pic" />
        <h1>Anwar Syed</h1>
        <h2>Workday Technical Lead</h2>
        <p className="contact">
          <strong>Contact:</strong> <br />
          <a href="mailto:anwar.a.syed@accenture.com">
            anwar.a.syed@accenture.com
          </a>
          <br />
          407-416-9242
        </p>
        <h3>Industry Experience</h3>
        <p>Federal, State, Tech, Pharma, Energy, Higher-Ed</p>
        <h3>Functional Experience</h3>
        <p>
          Program Management, Product Management, Agile, Data Analysis,
          Requirements Gathering, Production Support, Collaboration
        </p>
        <h3>Application Focus</h3>
        <p>
          HR, Finance, Payroll, Talent, Recruiting, HR, Benefits, Compensation,
          General Ledger, Payables and Receivables
        </p>
        <h3>Certifications & Education</h3>
        <p>
          Workday Extend, Workday Orchestrate, Workday Integrations Core,
          Workday Advanced Data Conversion, Workday Studio
        </p>
        <p>Master of Business Administration</p>
      </div>
      <div className="content">
        <h2>
          Workday Technical Lead - Workday Extend | Orchestrate | Integrations |
          Data Conversion
        </h2>
        <p>
          Anwar is a Manager in Accenture Federal Services. He is a Workday
          Consultant with 10+ years of expertise in Workday Extend, Orchestrate,
          Integrations, and Data Conversion...
        </p>

        <h3>Selected Relevant Experience</h3>
        <h4>AFS : Technical Lead for a Title V federal project - 02/2023 - 12/2024</h4>
        <ul>
          <li>Managed development portal for AFS for Workday Extend & Orchestrate.</li>
          <li>Built Workday Extend scalable automation workflows.</li>
          <li>Designed Workday integrations with OPM and third-party systems.</li>
          <li>Managed data conversions from PeopleSoft and legacy systems.</li>
          <li>Provided technical insights for ATO processes.</li>
        </ul>

        <h4>DELOITTE: Workday Integrations & Data Conversions 08/2015 - 02/2023</h4>
        <ul>
          <li>Workday Studio: Designed 50+ integrations.</li>
          <li>Data Migration: Migrated 1M+ employees' data.</li>
          <li>Developed advanced tools for validation & transformation.</li>
        </ul>

        <h3>Specialization and Core Skills</h3>
        <ul>
          <li><strong>Workday Technologies:</strong> Extend, Orchestrate, Studio, EIB, Core Connectors</li>
          <li><strong>Database Engineering & Performance Tuning:</strong> SQL Server, Oracle, MySQL</li>
          <li><strong>Data Security & Compliance:</strong> ATO, NIST, Splunk</li>
          <li><strong>Enterprise Data Access & Reporting:</strong> Workday RAAS, BIRT, Prism Analytics</li>
        </ul>
      </div>
    </div>
  );
};

export default WorkdayProfile;
