const { useState, useEffect, useRef } = React;

// Navigation Component
const Navigation = () => {
  return (
    <nav className="nav">
      <div className="nav-container">
        <div className="logo">NINAD</div>
        <ul className="nav-links">
          <li><a href="#hero">Home</a></li>
          <li><a href="#services">Services</a></li>
          <li><a href="#experience">Experience</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  useEffect(() => {
    const timeline = anime.timeline({
      easing: 'easeOutExpo',
      duration: 1000
    });

    timeline
      .add({
        targets: '.hero-tag',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 800
      })
      .add({
        targets: '.hero-title',
        opacity: [0, 1],
        translateY: [50, 0],
        duration: 1200
      }, '-=600')
      .add({
        targets: '.hero-subtitle',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000
      }, '-=800')
      .add({
        targets: '.hero-description',
        opacity: [0, 1],
        translateY: [30, 0],
        duration: 1000
      }, '-=700');
  }, []);

  return (
    <section id="hero" className="hero">
      <div className="hero-background">
        <div className="grid-overlay"></div>
      </div>
      <div className="hero-content">
        <div className="hero-tag">Senior Live Director</div>
        <h1 className="hero-title">High-Stakes Live Sports & Esports Broadcasting</h1>
        <p className="hero-subtitle">Transmission Operations Specialist | MCR Expert</p>
        <p className="hero-description">
          10 years experience delivering 25,000+ broadcast hours with 99.9% uptime. 
          Managed 10-30 simultaneous live streams and executed flawless delivery to 1.2M concurrent viewers globally.
        </p>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary">Work With Me</a>
          <a href="#portfolio" className="btn btn-secondary">View Portfolio</a>
        </div>
      </div>
    </section>
  );
};

// Services Component
const Services = () => {
  const services = [
    {
      title: "Live Transmission & MCR",
      description: "Executing daily transmission operations with 99.9% uptime. Managing 10-30 simultaneous live streams across OTT platforms.",
      icon: "📡"
    },
    {
      title: "Broadcast Infrastructure",
      description: "Designing NDI/SDI/12G-SDI hybrid workflows and SMPTE-standard signal routing for multi-venue live events.",
      icon: "🏗️"
    },
    {
      title: "Quality Assurance",
      description: "Real-time monitoring of bitrate, audio sync, and video integrity using CloudWatch, Grafana, and Prometheus.",
      icon: "🛡️"
    }
  ];

  return (
    <section id="services">
      <div className="section-header">
        <h2 className="section-title">Core Competencies</h2>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card cyan">
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component - NEW Display Cards Implementation
const Experience = () => {
  const experiences = [
    {
      role: "Broadcasting Manager",
      company: "Fluidscapes Consultants",
      period: "March 2024 - Present",
      summary: "99.9% uptime across 10,000+ live hours.",
      icon: "📡",
      achievements: [
        "Execute daily transmission operations maintaining 99.9% uptime across multiple simultaneous live streams",
        "Design and implement broadcast infrastructure following industry-standard workflows",
        "Zero critical on-air failures across 10,000 hours of live events"
      ]
    },
    {
      role: "Manager - Broadcast Partnerships",
      company: "Trifecta, Chennai",
      period: "May 2022 - Feb 2024",
      summary: "40% latency reduction via hybrid NDI workflows.",
      icon: "⚡",
      achievements: [
        "Led transmission operations for multi-title live championships (GGNation Challenger Series)",
        "Managed simultaneous monitoring and quality control of 10-15 concurrent streams",
        "Achieved 40% latency reduction through NDI/12G-SDI hybrid infrastructure optimization"
      ]
    },
    {
      role: "Project Manager",
      company: "GGNation, Chennai",
      period: "March 2021 - April 2022",
      summary: "India's largest collegiate esports network.",
      icon: "🎮",
      achievements: [
        "Managed live operations for GG1 Weekend Wars 9-day continuous live tournament",
        "Coordinated College Esports Championship with 10,000 registrations across 500 colleges",
        "Built India's largest collegiate esports network with 250 partnerships"
      ]
    },
    {
        role: "Manager - Esports Broadcast",
        company: "Immortals India Gaming",
        period: "Sept 2018 - Feb 2021",
        achievements: [
          "Owned end-to-end live transmission operations delivering 15,000 broadcast hours",
          "Managed monitoring of 8-12 live competition streams during major events",
          "Zero critical on-air failures across 250,000 viewer-hours"
        ]
    },
    {
        role: "Manager - League Ops",
        company: "MTV Ucypher",
        period: "Sept 2017 - Feb 2018",
        achievements: [
          "Managed live-to-tape operations for 35 episodes reaching 10.7M viewers",
          "Successfully launched India's first televised esports series with zero delays"
        ]
    }
  ];

  return (
    <section id="experience" className="experience-section">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
        <p className="section-subtitle">A decade of excellence in high-stakes live broadcasting</p>
      </div>

      <div className="experience-layout">
        {/* Left: Stacking Display Cards (Top 3 Roles) */}
        <div className="display-cards-grid">
          {experiences.slice(0, 3).map((exp, i) => (
            <div 
              key={i} 
              className={`display-card card-${i + 1} stacked`}
            >
              <div className="display-card-content">
                <div className="display-card-header">
                  <div className="display-card-icon">{exp.icon}</div>
                  <h3 className="display-card-title">{exp.company}</h3>
                </div>
                <p className="display-card-role">{exp.role}</p>
                <p className="display-card-description">{exp.summary}</p>
                <div className="display-card-date">{exp.period}</div>
              </div>
            </div>
          ))}
        </div>

        {/* Right: Detailed List (All Roles) */}
        <div className="experience-list">
          {experiences.map((exp, i) => (
            <div key={i} className="experience-item">
              <div className="experience-item-header">
                <h3 className="experience-item-role">{exp.role}</h3>
                <div className="experience-item-meta">
                  <span className="experience-item-company">{exp.company}</span>
                  <span className="experience-item-period">{exp.period}</span>
                </div>
              </div>
              <ul className="experience-item-achievements">
                {exp.achievements.map((a, j) => (
                  <li key={j}>{a}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Portfolio Component
const Portfolio = () => {
  const events = [
    { name: "Indian Esports Championship", year: "2016", viewers: "1.2M+" },
    { name: "PUBG Acer Predator League", year: "2019-2020", viewers: "500K+" },
    { name: "MTV Ucypher", year: "2018", viewers: "100K+" },
    { name: "Valorant Battle of Agents", year: "2021", viewers: "200K+" },
    { name: "FreeFire India Today League", year: "2019", viewers: "300K+" },
    { name: "GGNation Challenger Series", year: "2022", viewers: "150K+" },
    { name: "Esportz Premier Series", year: "2023", viewers: "180K+" },
    { name: "Hitwicket World Championship", year: "2023", viewers: "120K+" }
  ];

  return (
    <section id="portfolio">
      <div className="section-header">
        <h2 className="section-title">Event Portfolio</h2>
        <p className="section-subtitle">29 Major Event IPs Powered Globally</p>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <h3 className="event-name">{event.name}</h3>
            <p className="event-year">{event.year}</p>
            <p className="event-viewers">{event.viewers} viewers</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="contact-section">
      <h2 className="contact-heading">Let's Connect</h2>
      <p className="contact-subheading">Available for high-stakes broadcast consultations and roles</p>
      <div className="contact-info">
        <div className="contact-item">📧 <a href="mailto:ninad.acads@gmail.com">ninad.acads@gmail.com</a></div>
        <div className="contact-item">📱 +91-9757053635</div>
        <div className="contact-item">🔗 <a href="https://linkedin.com/in/ninad4hire">linkedin.com/in/ninad4hire</a></div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>© 2026 Ninad Yadav. Senior Live Director & Transmission Specialist.</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/ninad4hire" className="social-link">LinkedIn</a>
          <a href="mailto:ninad.acads@gmail.com" className="social-link">Email</a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="app">
      <Navigation />
      <Hero />
      <Services />
      <Experience />
      <Portfolio />
      <Contact />
      <Footer />
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById('root'));
