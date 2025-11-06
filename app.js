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
          <li><a href="#process">Process</a></li>
          <li><a href="#portfolio">Portfolio</a></li>
          <li><a href="#contact">Contact</a></li>
        </ul>
      </div>
    </nav>
  );
};

// Hero Component
const Hero = () => {
  const heroRef = useRef(null);

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
      }, '-=700')
      .add({
        targets: '.value-prop',
        opacity: [0, 1],
        translateY: [40, 0],
        scale: [0.8, 1],
        duration: 800,
        delay: anime.stagger(100)
      }, '-=600')
      .add({
        targets: '.cta-buttons .btn',
        opacity: [0, 1],
        scale: [0.8, 1],
        duration: 800,
        delay: anime.stagger(150)
      }, '-=400');

    // Floating orbs animation
    anime({
      targets: '.glow-orb',
      translateX: () => anime.random(-50, 50),
      translateY: () => anime.random(-50, 50),
      scale: () => anime.random(0.9, 1.1),
      duration: 8000,
      easing: 'easeInOutQuad',
      loop: true,
      direction: 'alternate'
    });
  }, []);

  return (
    <section id="hero" className="hero" ref={heroRef}>
      <div className="hero-background">
        <div className="grid-overlay"></div>
        <div className="glow-orb" style={{width: '400px', height: '400px', background: 'var(--neon-purple)', top: '-10%', left: '-10%'}}></div>
        <div className="glow-orb" style={{width: '350px', height: '350px', background: 'var(--neon-cyan)', top: '20%', right: '-5%'}}></div>
        <div className="glow-orb" style={{width: '300px', height: '300px', background: 'var(--neon-pink)', bottom: '-5%', left: '30%'}}></div>
      </div>
      <div className="hero-content">
        <div className="hero-tag" style={{opacity: 0}}>One-Stop Turnkey Solution</div>
        <h1 className="hero-title" style={{opacity: 0}}>One-Stop Esports &amp; Broadcast Production</h1>
        <p className="hero-subtitle" style={{opacity: 0}}>Concept → Production → Global Delivery</p>
        <p className="hero-description" style={{opacity: 0}}>Complete broadcast solutions from one expert. Studio setup, production control, live streaming infrastructure, technical direction, and strategic consulting—all handled seamlessly by me.</p>
        <div className="value-props">
          <div className="value-prop" style={{opacity: 0}}>Studio Setup &amp; Design</div>
          <div className="value-prop" style={{opacity: 0}}>Live Streaming Infrastructure</div>
          <div className="value-prop" style={{opacity: 0}}>Multi-Platform Broadcasting</div>
          <div className="value-prop" style={{opacity: 0}}>End-to-End Event Management</div>
        </div>
        <div className="cta-buttons">
          <a href="#contact" className="btn btn-primary" style={{opacity: 0}}>Let's Create Something Extraordinary</a>
          <a href="#portfolio" className="btn btn-secondary" style={{opacity: 0}}>View Portfolio</a>
        </div>
      </div>
    </section>
  );
};

// Service Card Component
const ServiceCard = ({ service, index }) => {
  const cardRef = useRef(null);

  return (
    <div ref={cardRef} className={`service-card ${service.color}`} style={{opacity: 0}}>
      <div className="service-icon">{service.icon}</div>
      <h3 className="service-title">{service.title}</h3>
      <p className="service-description">{service.description}</p>
      <ul className="service-highlights">
        {service.highlights.map((highlight, idx) => (
          <li key={idx}>{highlight}</li>
        ))}
      </ul>
    </div>
  );
};

// Turnkey Solutions Section
const TurneySolutions = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '.section-header .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.section-header .section-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 200
            });

            anime({
              targets: '#services .service-card',
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.8, 1],
              rotate: [5, 0],
              duration: 1000,
              easing: 'easeOutElastic(1, .8)',
              delay: anime.stagger(100)
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const services = [
    {
      title: "Broadcast Solutions",
      description: "Seamless broadcast workflows ensuring your message reaches global audiences with precision and reliability. Complete infrastructure setup and technical management.",
      icon: "📡",
      highlights: ["SDI/IP Workflow Design", "Multi-Protocol Streaming", "Quality Assurance & Monitoring"],
      color: "purple"
    },
    {
      title: "Media Production",
      description: "High-quality, engaging content tailored to your brand's vision. From concept through post-production, I create stories that resonate with your audience.",
      icon: "🎬",
      highlights: ["Technical Direction", "Color Grading & Post", "Content Optimization"],
      color: "cyan"
    },
    {
      title: "Streaming Infrastructure",
      description: "Multi-platform streaming with advanced encoding, distribution, and real-time optimization. Reach your audience wherever they are.",
      icon: "🌐",
      highlights: ["Cloud Encoding", "Multi-CDN Distribution", "Real-time Monitoring"],
      color: "pink"
    },
    {
      title: "Live Event Services",
      description: "End-to-end event production delivering flawless execution, unforgettable experiences, and seamless audience engagement for every occasion.",
      icon: "🎪",
      highlights: ["Event Planning & Coordination", "Live Technical Direction", "Crisis Management"],
      color: "green"
    },
    {
      title: "Strategic Consulting",
      description: "Expert industry guidance helping you navigate broadcasting trends and develop strategic solutions that drive measurable success.",
      icon: "🎯",
      highlights: ["Technology Strategy", "Workflow Optimization", "Industry Best Practices"],
      color: "blue"
    },
    {
      title: "Studio & Facility Solutions",
      description: "Complete production control rooms, studio design, infrastructure planning, and facility optimization for professional broadcast operations.",
      icon: "🏗️",
      highlights: ["Studio Design & Setup", "Equipment Integration", "Infrastructure Planning"],
      color: "orange"
    }
  ];

  return (
    <section id="services" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>Complete Broadcast Solutions, Delivered Seamlessly</h2>
        <p className="section-subtitle" style={{opacity: 0}}>Everything you need from one trusted expert</p>
      </div>
      <div className="services-grid">
        {services.map((service, index) => (
          <ServiceCard key={index} service={service} index={index} />
        ))}
      </div>
    </section>
  );
};

// Process Flow Section
const ProcessFlow = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#process .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '#process .section-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 200
            });

            anime({
              targets: '.process-step',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 800,
              easing: 'easeOutExpo',
              delay: anime.stagger(150)
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const steps = [
    {
      step: 1,
      title: "Concept & Strategy",
      description: "Understand your vision, goals, and target audience",
      details: ["Define event objectives", "Identify key deliverables", "Plan audience reach strategy"]
    },
    {
      step: 2,
      title: "Infrastructure Design",
      description: "Plan technical architecture for optimal performance",
      details: ["Network architecture planning", "Equipment requirements", "Workflow optimization"]
    },
    {
      step: 3,
      title: "Studio Setup",
      description: "Configure production control room and facilities",
      details: ["Equipment installation", "System integration", "Testing & validation"]
    },
    {
      step: 4,
      title: "Live Production",
      description: "Execute flawlessly with real-time technical management",
      details: ["Technical direction", "Real-time monitoring", "Crisis management"]
    },
    {
      step: 5,
      title: "Multi-Platform Distribution",
      description: "Reach your global audience across all channels",
      details: ["Multi-platform streaming", "Content adaptation", "Real-time optimization"]
    },
    {
      step: 6,
      title: "Post-Production & Analytics",
      description: "Final cut, analysis, and optimization for future events",
      details: ["Content editing", "Performance analytics", "Optimization insights"]
    }
  ];

  return (
    <section id="process" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>From Concept to Final Cut</h2>
        <p className="section-subtitle" style={{opacity: 0}}>Your complete production journey</p>
      </div>
      <div className="process-flow">
        <div className="process-steps">
          {steps.map((step) => (
            <div key={step.step} className="process-step" style={{opacity: 0}}>
              <div className="step-number">{step.step}</div>
              <h3 className="step-title">{step.title}</h3>
              <p className="step-description">{step.description}</p>
              <ul className="step-details">
                {step.details.map((detail, idx) => (
                  <li key={idx}>{detail}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

// Expertise Section
const Expertise = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#expertise .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.expertise-card',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: anime.stagger(200)
            });

            setTimeout(() => {
              const fills = document.querySelectorAll('.proficiency-fill');
              fills.forEach(fill => {
                const level = fill.getAttribute('data-level');
                anime({
                  targets: fill,
                  width: level + '%',
                  duration: 2000,
                  easing: 'easeInOutQuad'
                });
              });
            }, 500);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const categories = [
    {
      category: "Broadcast Engineering",
      description: "Complete technical broadcast mastery",
      skills: ["SDI, HD-SDI, 3G-SDI, 12G-SDI Workflows", "RTMP, SRT, NDI, HLS, DASH, WebRTC", "H.264/H.265/AV1 Encoding", "SMPTE ST 2110 IP Workflows", "AWS Elemental Cloud Services"],
      proficiency: 95,
      icon: "⚙️"
    },
    {
      category: "Production Technology",
      description: "Industry-standard tools and equipment",
      skills: ["Vision Mixers & Switchers", "Multi-Camera PTZ Control", "Audio Routing & Mixing", "Real-time Color Grading", "Graphics & Branding Integration"],
      proficiency: 92,
      icon: "🎮"
    },
    {
      category: "Streaming Software",
      description: "All major streaming platforms mastered",
      skills: ["OBS Studio, VMix, XSplit", "Wirecast, GT Editor, Titler", "ATEM Software Control", "LiveU Bonding Systems", "Cloud Encoding Platforms"],
      proficiency: 90,
      icon: "💻"
    },
    {
      category: "Infrastructure & Network",
      description: "Enterprise-grade facility design",
      skills: ["Network Architecture Design", "Broadcast Standards (SMPTE, EBU, ITU-R)", "Quality of Service Management", "Facility Planning & Optimization", "Cabling & Infrastructure Standards"],
      proficiency: 88,
      icon: "🌐"
    }
  ];

  return (
    <section id="expertise" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>Everything You Need, From One Expert</h2>
      </div>
      <div className="expertise-grid">
        {categories.map((cat, index) => (
          <div key={index} className="expertise-card" style={{opacity: 0}}>
            <div className="expertise-icon">{cat.icon}</div>
            <h3 className="expertise-category">{cat.category}</h3>
            <p className="expertise-description">{cat.description}</p>
            <ul className="expertise-skills">
              {cat.skills.map((skill, idx) => (
                <li key={idx}>{skill}</li>
              ))}
            </ul>
            <div className="proficiency-bar">
              <div className="proficiency-fill" data-level={cat.proficiency} style={{width: '0%'}}></div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

// Scale & Scope Section
const ScaleScope = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#scale .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '#scale .section-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 200
            });

            anime({
              targets: '.scale-card',
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.8, 1],
              duration: 800,
              easing: 'easeOutExpo',
              delay: anime.stagger(100)
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const tiers = [
    {
      tier: "Podcasts & Streaming",
      range: "1-Hour Studio Productions",
      description: "Perfect for regular streaming shows, interviews, and content creation",
      examples: ["Studio Podcasts", "Creator Content", "Training Streams"],
      icon: "🎙️"
    },
    {
      tier: "Intimate Events",
      range: "50-500 Concurrent Viewers",
      description: "Community events, small tournaments, corporate meetings",
      examples: ["Team Meetings", "Small Tournaments", "Community Events"],
      icon: "👥"
    },
    {
      tier: "Mid-Scale Events",
      range: "1K - 50K Viewers",
      description: "Regional tournaments, esports competitions, corporate events",
      examples: ["Regional Tournaments", "Brand Activations", "Championships"],
      icon: "📊"
    },
    {
      tier: "Large-Scale Events",
      range: "50K - 500K Viewers",
      description: "National tournaments, major publishers, broadcast partnerships",
      examples: ["Major Tournaments", "Broadcast Series", "Live Shows"],
      icon: "🏆"
    },
    {
      tier: "Arena & Festivals",
      range: "500K+ Viewers",
      description: "Festival productions, arena fills, international broadcasts",
      examples: ["DreamHack Scale", "Festival Productions", "International Events"],
      icon: "🎪"
    }
  ];

  return (
    <section id="scale" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>Scale Your Vision, From Intimate to Arena</h2>
        <p className="section-subtitle" style={{opacity: 0}}>I handle any size event with the same professional excellence</p>
      </div>
      <div className="scale-grid">
        {tiers.map((tier, index) => (
          <div key={index} className="scale-card" style={{opacity: 0}}>
            <div className="scale-icon">{tier.icon}</div>
            <h3 className="scale-tier">{tier.tier}</h3>
            <div className="scale-range">{tier.range}</div>
            <p className="scale-description">{tier.description}</p>
            <ul className="scale-examples">
              {tier.examples.map((example, idx) => (
                <li key={idx}>{example}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

// Track Record Section
const TrackRecord = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#stats .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '#stats .section-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 200
            });

            anime({
              targets: '.stat-card',
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.8, 1],
              duration: 800,
              easing: 'easeOutExpo',
              delay: anime.stagger(100)
            });

            // Animate counters
            setTimeout(() => {
              const numbers = document.querySelectorAll('.stat-number');
              numbers.forEach(numEl => {
                const text = numEl.getAttribute('data-value');
                const hasPercent = text.includes('%');
                const hasPlus = text.includes('+');
                const hasM = text.includes('M');
                const hasK = text.includes('K');
                
                let numValue = parseFloat(text.replace(/[^0-9.]/g, ''));
                
                if (!isNaN(numValue)) {
                  let obj = { value: 0 };
                  anime({
                    targets: obj,
                    value: numValue,
                    duration: 2000,
                    easing: 'easeOutExpo',
                    round: hasPercent ? 1 : 0,
                    update: function() {
                      let displayValue = obj.value;
                      if (hasK) displayValue = displayValue.toFixed(0) + 'K';
                      else if (hasM) displayValue = displayValue.toFixed(1) + 'M';
                      else if (hasPercent) displayValue = displayValue.toFixed(1) + '%';
                      else displayValue = displayValue.toFixed(0);
                      
                      if (hasPlus && !hasPercent) displayValue += '+';
                      numEl.textContent = displayValue;
                    }
                  });
                }
              });
            }, 300);

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const stats = [
    { number: "150+", label: "Live Productions", description: "Executed with precision and reliability" },
    { number: "25,000+", label: "Hours Delivered", description: "Of live broadcast content" },
    { number: "1.2M+", label: "Peak Viewers", description: "Indian Esports Championship 2016" },
    { number: "29", label: "Major Event IPs", description: "Successfully powered" },
    { number: "1B+", label: "Online Engagements", description: "Across 10+ year career" },
    { number: "99.9%", label: "Uptime Standard", description: "Consistent reliability" }
  ];

  return (
    <section id="stats" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>Proven Track Record</h2>
        <p className="section-subtitle" style={{opacity: 0}}>10+ Years of Excellence in Live Broadcasting</p>
      </div>
      <div className="stats-grid">
        {stats.map((stat, index) => (
          <div key={index} className="stat-card" style={{opacity: 0}}>
            <div className="stat-number" data-value={stat.number}>{stat.number}</div>
            <div className="stat-label">{stat.label}</div>
            <p className="stat-description">{stat.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Portfolio Section
const Portfolio = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#portfolio .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '#portfolio .section-subtitle',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 200
            });

            anime({
              targets: '.event-card',
              opacity: [0, 1],
              translateY: [50, 0],
              scale: [0.8, 1],
              duration: 600,
              easing: 'easeOutExpo',
              delay: anime.stagger(50)
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

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
    <section id="portfolio" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>29 Major Event IPs Powered</h2>
        <p className="section-subtitle" style={{opacity: 0}}>Trusted by publishers, esports orgs, and broadcasters</p>
      </div>
      <div className="events-grid">
        {events.map((event, index) => (
          <div key={index} className="event-card" style={{opacity: 0}}>
            <div className="event-name">{event.name}</div>
            <div className="event-year">{event.year}</div>
            <div className="event-viewers">{event.viewers} viewers</div>
          </div>
        ))}
      </div>
    </section>
  );
};

// What Sets Apart Section
const WhatSetsApart = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#differentiators .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.differentiator-card',
              opacity: [0, 1],
              translateY: [60, 0],
              scale: [0.8, 1],
              duration: 800,
              easing: 'easeOutExpo',
              delay: anime.stagger(100)
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const differentiators = [
    {
      title: "One Expert, Full Service",
      description: "No coordination overhead between teams. Direct communication, unified vision, complete ownership of your production. I understand every layer of your event.",
      icon: "👤"
    },
    {
      title: "Proven Track Record",
      description: "10+ years delivering 150+ productions for major publishers. I've pioneered esports broadcasting in India and consistently achieve 99.9% uptime.",
      icon: "🏆"
    },
    {
      title: "Flexible & Scalable",
      description: "From a 1-hour podcast to arena-filling festivals. I adapt my approach to your needs, providing enterprise-level quality at any scale.",
      icon: "📈"
    },
    {
      title: "Latest Technology",
      description: "Always staying current with cutting-edge broadcast tools, encoding standards, and streaming solutions. You get industry-leading performance.",
      icon: "⚡"
    },
    {
      title: "Results-Driven",
      description: "Obsessed with delivery excellence. Every decision focuses on maximizing your reach, engagement, and measurable impact.",
      icon: "🎯"
    }
  ];

  return (
    <section id="differentiators" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>What Sets Me Apart</h2>
      </div>
      <div className="differentiators-grid">
        {differentiators.map((diff, index) => (
          <div key={index} className="differentiator-card" style={{opacity: 0}}>
            <div className="diff-icon">{diff.icon}</div>
            <h3 className="diff-title">{diff.title}</h3>
            <p className="diff-description">{diff.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

// Partners Section
const Partners = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '#partners .section-title',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.partner-tag',
              opacity: [0, 1],
              scale: [0, 1],
              duration: 600,
              easing: 'easeOutElastic(1, .6)',
              delay: anime.stagger(80)
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const partners = ["Tencent", "Garena", "MTV", "India Today Group", "PUBG", "Valorant", "FreeFire", "Acer", "Immortals", "GGNation"];

  return (
    <section id="partners" ref={sectionRef}>
      <div className="section-header">
        <h2 className="section-title" style={{opacity: 0}}>Trusted by Industry Leaders</h2>
      </div>
      <div className="partners-grid">
        {partners.map((partner, index) => (
          <div key={index} className="partner-tag" style={{opacity: 0}}>{partner}</div>
        ))}
      </div>
    </section>
  );
};

// Contact Section
const Contact = () => {
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            anime({
              targets: '.contact-heading',
              opacity: [0, 1],
              translateY: [50, 0],
              duration: 1000,
              easing: 'easeOutExpo'
            });

            anime({
              targets: '.contact-subheading',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 1000,
              easing: 'easeOutExpo',
              delay: 200
            });

            anime({
              targets: '.contact-item',
              opacity: [0, 1],
              scale: [0.8, 1],
              duration: 800,
              easing: 'easeOutExpo',
              delay: anime.stagger(100, {start: 400})
            });

            anime({
              targets: '#contact .cta-buttons .btn',
              opacity: [0, 1],
              translateY: [30, 0],
              duration: 800,
              easing: 'easeOutExpo',
              delay: anime.stagger(150, {start: 800})
            });

            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  return (
    <section id="contact" ref={sectionRef}>
      <div className="contact-section">
        <h2 className="contact-heading" style={{opacity: 0}}>Ready to Broadcast Greatness?</h2>
        <p className="contact-subheading" style={{opacity: 0}}>Let's discuss how I can handle your complete production needs</p>
        <div className="contact-info">
          <div className="contact-item" style={{opacity: 0}}>📧 <a href="mailto:ninad.acads@gmail.com">ninad.acads@gmail.com</a></div>
          <div className="contact-item" style={{opacity: 0}}>📱 <a href="tel:+919757053635">+91-9757053635</a></div>
          <div className="contact-item" style={{opacity: 0}}>💼 <a href="https://linkedin.com/in/ninad4hire" target="_blank" rel="noopener noreferrer">LinkedIn</a></div>
        </div>
        <div className="cta-buttons">
          <a href="mailto:ninad.acads@gmail.com" className="btn btn-primary" style={{opacity: 0}}>Schedule a Consultation</a>
          <a href="tel:+919757053635" className="btn btn-secondary" style={{opacity: 0}}>Get a Quote</a>
        </div>
      </div>
    </section>
  );
};

// Footer Component
const Footer = () => {
  return (
    <footer>
      <div className="footer-content">
        <p>&copy; 2025 Ninad Yadav. All rights reserved. | One-Stop Turnkey Broadcast Production</p>
        <div className="social-links">
          <a href="https://linkedin.com/in/ninad4hire" target="_blank" rel="noopener noreferrer" className="social-link">LinkedIn</a>
          <a href="mailto:ninad.acads@gmail.com" className="social-link">Email</a>
          <a href="tel:+919757053635" className="social-link">Phone</a>
        </div>
      </div>
    </footer>
  );
};

// Main App Component
const App = () => {
  return (
    <div>
      <Navigation />
      <Hero />
      <TurneySolutions />
      <ProcessFlow />
      <Expertise />
      <ScaleScope />
      <TrackRecord />
      <Portfolio />
      <WhatSetsApart />
      <Partners />
      <Contact />
      <Footer />
    </div>
  );
};

// Render the app
ReactDOM.render(<App />, document.getElementById('root'));