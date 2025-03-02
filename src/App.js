import React, { useState } from "react";
import "./styles.css";
import { ai_content } from "./api_content";
import profilePic from "./assets/profile_pic.jpeg";

const API_KEY = 'sk-JFjJ134nDTT6meeizb9pufeqxvqKbdQ0zEwXLiDbBkT3BlbkFJ28gd4zd0rd57JWmNCkN-EFOwJ_tk0k50rsr406sa0A'; // Replace with your actual API Key

const App = () => {
  const [messages, setMessages] = useState([
    { text: "Hello! How can I assist you today?", sender: "bot" },
  ]);
  const [input, setInput] = useState("");
  const [loading, setLoading] = useState(false);

  // Handle Sending Message
  const handleSend = async () => {
    if (!input.trim()) return;

    const userMessage = { text: input, sender: "user" };
    setMessages([...messages, userMessage]);
    setInput("");
    setLoading(true);

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Authorization: `Bearer ${API_KEY}`,
        },
        body: JSON.stringify({
          model: "gpt-3.5-turbo",
          messages: [
            { role: "system", content: ai_content },
            ...messages.map((m) => ({
              role: m.sender === "user" ? "user" : "assistant",
              content: m.text,
            })),
            { role: "user", content: input },
          ],
          max_tokens: 150,
        }),
      });

      const data = await response.json();
      const botMessage = {
        text: data.choices[0]?.message?.content || "I'm sorry, I couldn't generate a response.",
        sender: "bot",
      };

      setMessages((prevMessages) => [...prevMessages, botMessage]);
    } catch (error) {
      console.error("Error fetching OpenAI response:", error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="main-container">
      {/* Left Section */}
      <div className="left-section">
        <h1>Anwar Syed</h1>
        <h2>Accenture LLP.</h2>
        <p>
          <strong>Contact:</strong>
          <br />
          <span role="img" aria-label="email">✉️</span>{" "}
          <a href="mailto:anwar.a.syed@accenture.com">anwar.a.syed@accenture.com</a>
          <br />
          <span role="img" aria-label="phone">📞</span> 407-416-9242
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
        <ul>
          <li>Workday Extend</li>
          <li>Workday Orchestrate</li>
          <li>Workday Integrations Core</li>
          <li>Workday Advanced Data Conversion</li>
          <li>Workday Studio</li>
        </ul>
        <p>Master of Business Administration</p>
      </div>

      {/* Middle Content */}
      <div className="content">
        <h2>Workday Technical Lead - Workday Extend | Orchestrate | Integrations | Data Conversion</h2>
        <p>
          Anwar is a Manager in Accenture Federal Services. He is a Workday Consultant
          with 10+ years of expertise in Workday Extend, Orchestrate, Integrations,
          and Data Conversion. He has developed custom solutions for multiple Federal,
          State, Pharma, Tech, Energy, and Higher-Ed organizations. His background
          includes advanced experience with Java, REST, JSON, XML, Jenkins, and
          various Workday technologies.
        </p>
        <p>
          His responsibilities often include architecting, configuring, and delivering
          Workday solutions, building Extend apps, orchestrating custom workflows,
          designing advanced integrations, and performing large-scale data conversions.
          He has collaborated on Security &amp; Compliance (ATO, NIST), Performance Tuning
          (SQL, Oracle, MySQL), and Enterprise Reporting (RaaS, BIRT, Prism).
        </p>
        <p>
          Anwar also has extensive experience with PeopleSoft, PL/SQL, and other
          legacy systems. He holds a Master of Business Administration and multiple
          Workday certifications.
        </p>
        <h3>Selected Relevant Experience</h3>
        <h4>AFS: Technical Lead for a Title V Federal Project (02/2023 – 12/2024)</h4>
        <ul>
          <li>Managed development portal for AFS for Workday Extend &amp; Orchestrate.</li>
          <li>Built Workday Extend scalable automation workflows.</li>
          <li>Designed Workday integrations with OPM and third-party systems.</li>
          <li>Managed data conversions from PeopleSoft and legacy systems.</li>
          <li>Provided technical insights for ATO processes.</li>
        </ul>
        <h4>DELOITTE: Workday Integrations &amp; Data Conversions (08/2015 – 02/2023)</h4>
        <ul>
          <li>Workday Studio: Designed 50+ integrations.</li>
          <li>Data Migration: Migrated 1M+ employees' data.</li>
          <li>Developed advanced tools for validation &amp; transformation.</li>
        </ul>
        <h3>Specialization &amp; Core Skills</h3>
        <ul>
          <li>
            <strong>Workday Technologies:</strong> Extend, Orchestrate, Studio, EIB, Core Connectors
          </li>
          <li>
            <strong>Database Engineering &amp; Performance Tuning:</strong> SQL Server, Oracle, MySQL
          </li>
          <li>
            <strong>Data Governance, Security &amp; Compliance:</strong> ATO, NIST, Splunk
          </li>
          <li>
            <strong>Enterprise Data Access &amp; Reporting:</strong> Workday RAAS, BIRT, Prism Analytics
          </li>
        </ul>
      </div>

      {/* Right Section */}
      <div className="right-section">
        {/* Profile Picture */}
        <img src={profilePic} alt="Anwar Syed" className="profile-pic" />

        {/* ChatBot */}
        <div className="chat-window">
          <div className="chat-header">
            <span>ChatBot: Chat with Anwar's Intelligence (AI)</span>
          </div>
          <div className="chat-body">
            {messages.map((msg, index) => (
              <div key={index} className={msg.sender === "user" ? "user-msg" : "bot-msg"}>
                {msg.text}
              </div>
            ))}
            {loading && <div className="loading">Typing...</div>}
          </div>
          <div className="chat-input">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Ask something..."
              disabled={loading}
            />
            <button onClick={handleSend} disabled={loading}>
              {loading ? "..." : "Send"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default App;
