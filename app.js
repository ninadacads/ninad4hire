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
        <div className="glow-orb" style={{width: '400px', height: '400px', background: 'var(--neon-purple)', top: '-10%', left: '-10%'}}></div>
        <div className="glow-orb" style={{width: '350px', height: '350px', background: 'var(--neon-cyan)', top: '20%', right: '-5%'}}></div>
      </div>
      <div className="hero-content">
        <div className="hero-tag" style={{opacity: 0}}>Senior Live Director</div>
        <h1 className="hero-title" style={{opacity: 0}}>High-Stakes Live Sports & Esports Broadcasting</h1>
        <p className="hero-subtitle" style={{opacity: 0}}>Transmission Operations Specialist | MCR Expert</p>
        <p className="hero-description" style={{opacity: 0}}>10 years experience delivering 25,000+ broadcast hours with 99.9% uptime. Managed 10-30 simultaneous live streams and executed flawless delivery to 1.2M concurrent viewers globally.</p>
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
    <section id="services" className="services">
      <div className="section-header">
        <h2 className="section-title">Core Competencies</h2>
      </div>
      <div className="services-grid">
        {services.map((s, i) => (
          <div key={i} className="service-card">
            <div className="service-icon">{s.icon}</div>
            <h3 className="service-title">{s.title}</h3>
            <p className="service-description">{s.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Experience Component
const Experience = () => {
  const experiences = [
    {
      role: "Broadcasting Manager",
      company: "Fluidscapes Consultants",
      period: "March 2024 - Present",
      achievements: [
        "Zero critical on-air failures across 10,000+ hours of live events",
        "Implemented automated monitoring systems reducing fault detection time by 60%",
        "Established backup transmission protocols minimizing potential downtime"
      ]
    },
    {
      role: "Manager - Broadcast Partnerships",
      company: "Trifecta",
      period: "May 2022 - Feb 2024",
      achievements: [
        "Managed 10-15 concurrent live streams with global distribution",
        "Achieved 40% latency reduction through NDI/12G-SDI hybrid infrastructure",
        "Zero on-air errors across multi-venue live events"
      ]
    }
  ];

  return (
    <section id="experience" className="experience">
      <div className="section-header">
        <h2 className="section-title">Professional Experience</h2>
      </div>
      <div className="experience-list">
        {experiences.map((exp, i) => (
          <div key={i} className="experience-card">
            <h3>{exp.role} @ {exp.company}</h3>
            <span className="period">{exp.period}</span>
            <ul>
              {exp.achievements.map((a, j) => <li key={j}>{a}</li>)}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// Portfolio Component (Preserved Eventlist)
const Portfolio = () => {
  const events = [
    { name: "Indian Esports Championship", year: "2016", viewers: "1.2M+" },
    { name: "PUBG Acer Predator League", year: "2019-2020", viewers: "500K+" },
    { name: "MTV Ucypher", year: "2018", viewers: "100K+" },
    { name: "Valorant Battle of Agents", year: "2021", viewers: "200K+" },
    { name: "FreeFire India Today League", year: "2019", viewers: "300K+" },
    { name: "GGNation Challenger Series", year: "2022", viewers: "150K+" },
    { name: "Esportz Premier Series", year: "2023", viewers: "180K+" },
    { name: "Hitwicket World Championship", year: "2023", viewers: "120K+" },
    { name: "PUBG Mobile Campus Championship", year: "2019", viewers: "250K+" },
    { name: "Acer PUBG PC Championship", year: "2019", viewers: "200K+" },
    { name: "PUBG Mobile All Stars", year: "2019", viewers: "300K+" },
    { name: "Mumbai Esports Championship", year: "2019-20", viewers: "100K+" }
  ];

  return (
    <section id="portfolio" className="portfolio">
      <div className="section-header">
        <h2 className="section-title">Event Portfolio</h2>
        <p className="section-subtitle">29 Major Event IPs Powered</p>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card">
            <div className="event-name">{event.name}</div>
            <div className="event-year">{event.year}</div>
            <div className="event-viewers">{event.viewers} viewers</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Contact Component
const Contact = () => {
  return (
    <section id="contact" className="contact">
      <div className="contact-content">
        <h2 className="section-title">Let's Connect</h2>
        <div className="contact-info">
          <p>📧 ninad.acads@gmail.com</p>
          <p>📱 +91-9757053635</p>
          <p>🔗 <a href="https://linkedin.com/in/ninad4hire">linkedin.com/in/ninad4hire</a></p>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <p>© 2026 Ninad Yadav. Senior Live Director & Transmission Specialist.</p>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div className="app-container">
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
