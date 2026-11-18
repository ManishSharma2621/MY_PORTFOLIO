
import React from "react";
import "./styles.css";

const skills = [
  {
    number: "01",
    name: "Python",
    description: "Core programming and application logic",
  },
  {
    number: "02",
    name: "Django",
    description: "Dynamic web applications and backend development",
  },
  {
    number: "03",
    name: "Django REST Framework",
    description: "REST APIs and CRUD operations",
  },
  {
    number: "04",
    name: "HTML & CSS",
    description: "Responsive layouts and modern interfaces",
  },
  {
    number: "05",
    name: "JavaScript",
    description: "Interactive and dynamic web experiences",
  },
  {
    number: "06",
    name: "SQL",
    description: "Database queries and data management",
  },
  {
    number: "07",
    name: "Git & GitHub",
    description: "Version control and project collaboration",
  },
];

const projects = [
  {
    number: "01",
    title: "Musafir cafe Backend",
    category: "BACKEND DEVELOPMENT",
    description:
      "A Django-based cafe backend featuring product management, categories, cart functionality, orders, using qrcodes and HTML & CSS For the frontend.",
    tech: ["Python", "Django", "DRF", "SQL"],
    symbol: "⌘",
    github: "https://github.com/ManishSharma2621/Cafe_Project",
  },
  {
    number: "02",
    title: "2D_GUN SHOOTER GAME",
    category: "GAME DEVELOPMENT",
    description:
      "A 2D gun shooter game built with Python and Pygame, featuring player movement, enemies, shooting mechanics, health management, and sound effects.",
    tech: ["Python", "Pygame"],
    symbol: "✚",
    github: "https://github.com/ManishSharma2621/2D-Gun-Shooter-Game",
  },
  {
    number: "03",
    title: " Running application",
    category: "web application",
    description:
      "A Python based project to manage user running activities, exercise tracking, and health management using  Django REST Framework.",
    tech: ["Python", "Django", "Django REST Framework"],
    symbol: "✳",
    github: "https://github.com/ManishSharma2621/Running-Application",
  },
];


function ContactSection() {
  const [form, setForm] = React.useState({
    name: "",
    email: "",
    subject: "Project inquiry",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((previous) => ({ ...previous, [name]: value }));
  };

  const [loading, setLoading] = React.useState(false);
  const [response, setResponse] = React.useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();
    setLoading(true);
    setResponse("");

    try {
      const result = await fetch("http://127.0.0.1:8000/api/contact/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(form),
      });

      const data = await result.json();

      if (!result.ok) {
        throw new Error(
          data.message || JSON.stringify(data.errors || data.error || data)
        );
      }

      setResponse("Success! Your message has been sent.");
      setForm({
        name: "",
        email: "",
        subject: "Project inquiry",
        message: "",
      });
    } catch (error) {
      console.error("Contact form error:", error);
      setResponse(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <style>{`
/* Premium 3D purple contact section */
.contact-section{--purple:#8b5cf6;--pink:#d946ef;position:relative;isolation:isolate;overflow:hidden;min-height:680px;padding:100px 5% 70px;display:flex;align-items:center;justify-content:center;color:#fff;background:radial-gradient(ellipse at 50% 85%,#351052 0%,transparent 48%),radial-gradient(ellipse at 50% 40%,#100c25 0%,transparent 65%),#070711;border-top:1px solid #a855f733;font-family:Inter,Arial,sans-serif}
.contact-section *,.contact-section *:before,.contact-section *:after{box-sizing:border-box}.contact-content{position:relative;z-index:2;width:100%;max-width:1500px;margin:auto;text-align:center}.contact-orb{position:absolute;z-index:-1;pointer-events:none;border-radius:50%;filter:blur(1px);animation:contactFloat 7s ease-in-out infinite}.orb-one{top:5%;left:14%;width:65px;height:65px;background:radial-gradient(circle at 30% 25%,#a855f7,#3b0764 65%,#080817);box-shadow:0 0 40px #7c3aed44}.orb-two{top:2%;right:5%;width:125px;height:125px;background:radial-gradient(circle at 30% 20%,#a855f7,#30106d 60%,#080817);opacity:.7}.orb-three{bottom:-110px;right:-80px;width:270px;height:270px;border:5px solid #7c3aed;box-shadow:0 0 45px #9333ea55,inset 0 0 40px #9333ea33}@keyframes contactFloat{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-15px) rotate(5deg)}}
.contact-eyebrow{display:flex;justify-content:center;align-items:center;gap:18px;margin-bottom:28px;color:#c084fc;font-size:15px;font-weight:800;letter-spacing:5px}.eyebrow-line{width:75px;height:1px;background:linear-gradient(90deg,transparent,#9333ea)}.eyebrow-line:last-child{transform:rotate(180deg)}.eyebrow-icon{display:grid;place-items:center;width:40px;height:40px;border:1px solid #7c3aed88;border-radius:50%;background:linear-gradient(145deg,#38136b,#100923);box-shadow:0 0 22px #9333ea33;font-size:20px}
.contact-heading{margin:0 auto 24px;max-width:1250px;color:#fff;font-size:clamp(38px,5.3vw,78px);font-weight:900;line-height:1.08;letter-spacing:-3px;text-wrap:balance;text-shadow:0 5px 0 #34224e,0 12px 35px #9333ea22}.contact-heading span{display:block;margin-top:5px;padding-bottom:8px;color:transparent;background:linear-gradient(100deg,#e9d5ff 2%,#a855f7 32%,#6366f1 58%,#d946ef 90%);background-clip:text;-webkit-background-clip:text;filter:drop-shadow(0 8px 18px #9333ea44)}.contact-description{margin:28px auto 52px;color:#bcb9dc;font-size:18px;line-height:1.8}
.contact-decoration{position:absolute;z-index:-1;color:#c084fc;font-family:cursive;font-size:25px;font-style:italic;line-height:1.2;text-shadow:0 0 18px #a855f766;pointer-events:none}.decoration-left{top:22%;left:-1%;transform:rotate(-9deg)}.decoration-left span{display:block;margin:10px 0 0 55px;font-size:45px}.decoration-right{top:12%;right:1%;transform:rotate(7deg)}.floating-envelope{position:absolute;z-index:-1;top:42%;left:-1%;width:125px;filter:drop-shadow(0 0 22px #a855f766);transform:rotate(-12deg);animation:envelopeFloat 5s ease-in-out infinite}.floating-envelope svg{width:100%;display:block}.floating-plane{position:absolute;z-index:-1;top:35%;right:3%;color:#c084fc;font-size:100px;text-shadow:0 0 25px #9333ea99;transform:rotate(-35deg);animation:planeFloat 5s ease-in-out infinite}@keyframes envelopeFloat{0%,100%{transform:translateY(0) rotate(-12deg)}50%{transform:translateY(-12px) rotate(-7deg)}}@keyframes planeFloat{0%,100%{translate:0 0}50%{translate:0 -12px}}
.contact-form{display:grid;grid-template-columns:1fr 1fr .95fr 1.1fr auto;align-items:center;gap:20px;width:100%;padding:25px;border:1px solid #a855f7;border-radius:30px;background:linear-gradient(135deg,#1e163dcc,#0a0d25f0);box-shadow:0 0 0 1px #7c3aed33,0 20px 65px #5b21b544,inset 0 1px 0 #ffffff16;backdrop-filter:blur(20px);transition:border-color .3s,box-shadow .3s}.contact-form:hover{border-color:#c084fc;box-shadow:0 0 0 1px #a855f744,0 25px 75px #7c3aed33,inset 0 1px 0 #ffffff22}.contact-field{display:flex;align-items:center;gap:12px;min-width:0;min-height:68px;padding:0 14px;border:1px solid #7041f5;border-radius:17px;background:linear-gradient(145deg,#17152f,#10132a);box-shadow:inset 0 2px 10px #00000025;transition:border-color .25s,box-shadow .25s,transform .25s}.contact-field:focus-within{border-color:#d946ef;box-shadow:0 0 0 3px #a855f722,0 0 22px #9333ea22;transform:translateY(-2px)}.field-icon{flex-shrink:0;display:grid;place-items:center;width:40px;height:40px;border-radius:11px;color:#d8b4fe;background:linear-gradient(145deg,#271354,#10102c);font-size:23px}.contact-field input,.contact-field select,.contact-field textarea{width:100%;min-width:0;border:0;outline:0;color:#f5f3ff;background:transparent;font:inherit;font-size:15px}.contact-field input::placeholder,.contact-field textarea::placeholder{color:#c4c3df;opacity:1}.contact-field select{cursor:pointer}.contact-field select option{color:#fff;background:#15112b}.message-field{min-height:88px;padding-top:14px;padding-bottom:14px;align-items:flex-start}.message-field textarea{min-height:56px;resize:vertical;line-height:1.5}
.contact-submit{position:relative;isolation:isolate;display:flex;justify-content:center;align-items:center;gap:10px;min-height:70px;padding:0 23px;overflow:hidden;border:1px solid #d8b4fe;border-radius:19px;color:#fff;background:linear-gradient(135deg,#c084fc,#9333ea 58%,#6d28d9);box-shadow:0 8px 0 #4c1d95,0 13px 28px #9333ea55,inset 0 1px 0 #ffffff77;font-size:15px;font-weight:800;white-space:nowrap;cursor:pointer;transition:transform .2s,box-shadow .2s,filter .2s}.contact-submit:before{content:"";position:absolute;z-index:-1;top:0;left:-120%;width:75%;height:100%;background:linear-gradient(90deg,transparent,#ffffff55,transparent);transform:skewX(-25deg);transition:left .6s}.contact-submit:hover:before{left:150%}.contact-submit:hover{filter:brightness(1.13);transform:translateY(-3px);box-shadow:0 11px 0 #4c1d95,0 18px 35px #a855f777}.contact-submit:active{transform:translateY(5px);box-shadow:0 3px 0 #4c1d95,0 7px 15px #9333ea33}.submit-arrow{font-size:20px}
.contact-note{display:flex;justify-content:center;align-items:center;flex-wrap:wrap;gap:7px;margin:30px auto 38px;color:#aaa9cb;font-size:14px;line-height:1.8}.contact-note>span{margin-right:5px;color:#d946ef;font-size:23px}.contact-note strong{color:#c084fc;overflow-wrap:anywhere}.contact-footer{display:flex;justify-content:center;align-items:center;gap:20px;margin:0 auto}.contact-footer span{width:110px;height:1px;background:linear-gradient(90deg,transparent,#9333ea)}.contact-footer span:last-child{transform:rotate(180deg)}.contact-footer b{color:#c084fc;font-size:24px;text-shadow:0 0 18px #a855f799}
@media(max-width:1100px){.contact-section{padding:80px 5%}.contact-form{grid-template-columns:repeat(2,minmax(0,1fr));gap:15px}.contact-submit{grid-column:1/-1;justify-self:center;width:100%;max-width:320px}.floating-envelope{left:-2%;width:90px}.floating-plane{right:1%;font-size:75px}.decoration-left,.decoration-right{font-size:19px}}
@media(max-width:600px){.contact-section{min-height:auto;padding:75px 18px 55px}.contact-eyebrow{gap:9px;margin-bottom:25px;font-size:11px;letter-spacing:3px}.eyebrow-line{width:30px}.eyebrow-icon{width:32px;height:32px}.contact-heading{font-size:clamp(35px,10vw,49px);line-height:1.12;letter-spacing:-1.5px}.contact-description{margin:22px auto 35px;font-size:15px;line-height:1.8}.contact-description br{display:none}.contact-form{grid-template-columns:minmax(0,1fr);gap:13px;padding:16px;border-radius:23px}.contact-field{min-height:61px;padding:0 12px;border-radius:14px}.message-field{min-height:100px;padding-top:15px}.contact-submit{grid-column:auto;width:100%;max-width:none;min-height:62px;border-radius:15px}.contact-note{align-items:flex-start;margin:25px auto;font-size:12px}.contact-decoration,.floating-envelope,.floating-plane{display:none}.orb-one{left:4%;width:35px;height:35px}.orb-two{right:-20px;width:75px;height:75px}.orb-three{right:-140px;width:200px;height:200px}}
@media(prefers-reduced-motion:reduce){.contact-section *,.contact-section *:before,.contact-section *:after{animation:none!important;transition:none!important}}

      `}</style>
      <section className="contact-section" id="contact">
      <div className="contact-orb orb-one" aria-hidden="true" />
      <div className="contact-orb orb-two" aria-hidden="true" />
      <div className="contact-orb orb-three" aria-hidden="true" />

      <div className="contact-content">
        <div className="contact-eyebrow">
          <span className="eyebrow-line" />
          <span className="eyebrow-icon">➤</span>
          GET IN TOUCH
          <span className="eyebrow-line" />
        </div>

        <h2 className="contact-heading">
          Let's build something
          <span>great together.</span>
        </h2>

        <p className="contact-description">
          Have a project or opportunity in mind? Feel free to contact me.
          <br />
          I'm always open to discussing new ideas, collaborations, and exciting opportunities.
        </p>

        <div className="contact-decoration decoration-left" aria-hidden="true">
          Let's<br />Connect<span>↘</span>
        </div>
        <div className="contact-decoration decoration-right" aria-hidden="true">
          Ideas<br />↓ Projects<br />↓ Success
        </div>

        <div className="floating-envelope" aria-hidden="true">
          <svg viewBox="0 0 100 75" fill="none">
            <path d="M8 15 Q8 8 16 8 H84 Q92 8 92 16 V60 Q92 68 84 68 H16 Q8 68 8 60 Z" fill="url(#contactEnvelopeFill)" stroke="#a855f7" strokeWidth="2" />
            <path d="M10 13 L50 43 L90 13" stroke="#d8b4fe" strokeWidth="2.5" />
            <path d="M10 63 L37 38 M90 63 L63 38" stroke="#9333ea" strokeWidth="2" />
            <defs>
              <linearGradient id="contactEnvelopeFill" x1="0" y1="0" x2="1" y2="1">
                <stop stopColor="#32106b" /><stop offset="1" stopColor="#080d28" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div className="floating-plane" aria-hidden="true">➤</div>

        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="contact-field" htmlFor="contact-name">
            <span className="field-icon" aria-hidden="true">♙</span>
            <input id="contact-name" type="text" name="name" placeholder="Your name" value={form.name} onChange={handleChange} autoComplete="name" required />
          </label>

          <label className="contact-field" htmlFor="contact-email">
            <span className="field-icon" aria-hidden="true">✉</span>
            <input id="contact-email" type="email" name="email" placeholder="Your email" value={form.email} onChange={handleChange} autoComplete="email" required />
          </label>

          <label className="contact-field" htmlFor="contact-subject">
            <span className="field-icon" aria-hidden="true">◎</span>
            <select id="contact-subject" name="subject" value={form.subject} onChange={handleChange}>
              <option value="Project inquiry">Project inquiry</option>
              <option value="Job opportunity">Job opportunity</option>
              <option value="Freelance work">Freelance work</option>
              <option value="Collaboration">Collaboration</option>
              <option value="Other">Other</option>
            </select>
          </label>

          <label className="contact-field message-field" htmlFor="contact-message">
            <span className="field-icon" aria-hidden="true">▤</span>
            <textarea id="contact-message" name="message" placeholder="Write your message..." value={form.message} onChange={handleChange} rows={2} required />
          </label>

          <button className="contact-submit" type="submit" disabled={loading}>
            <span aria-hidden="true">➤</span>
            {loading ? "Sending..." : "Send Message"}
            <span className="submit-arrow" aria-hidden="true">→</span>
          </button>
        </form>

        {response && (
          <p className="contact-note" role="status" aria-live="polite">
            <span aria-hidden="true">{response.startsWith("Error:") ? "!" : "✓"}</span>
            {response}
          </p>
        )}
        <div className="contact-footer" aria-hidden="true"><span /><b>♥</b><span /></div>
      </div>
      </section>
    </>
  );
}

function App() {
  return (
    <div className="portfolio">
      {/* NAVIGATION */}
      <header className="navbar">
        <a href="#home" className="logo">
          MS<span>.</span>
        </a>

        <nav className="nav-links">
          <a href="#about">About</a>
          <a href="#skills">Skills</a>
          <a href="#projects">Projects</a>
          <a href="#contact">Contact</a>
        </nav>

        <a className="nav-cta" href="#contact">
          Let's Talk <span>↗</span>
        </a>
      </header>


        {/* HERO */}
        <section className="hero" id="home">
          <div className="hero-copy">
            <div className="availability">
              <span className="status-dot"></span>
              OPEN TO LEARNING & OPPORTUNITIES
            </div>

            <p className="eyebrow">HELLO, I'M MANISH SHARMA</p>

            <h1>
              Turning Ideas
              <br />
              Into <span className="gradient-text">Digital</span>
              <br />
              Experiences<span className="gradient-text">.</span>
            </h1>

            <p className="hero-description">
              I'm a Full Stack Developer aspirant currently pursuing a
              Full Stack Development course at TOPS Technologies. I enjoy
              building modern web applications, useful APIs, and interactive
              digital experiences.
            </p>

            <div className="hero-buttons">
              <a className="button-primary" href="#projects">
                Explore My Work <span>↗</span>
              </a>

              <a className="button-secondary" href="#about">
                Discover My Journey
              </a>
            </div>

            <div className="hero-stats">
              <div>
                <h3>Python</h3>
                <p>Programming</p>
              </div>

              <span className="stat-divider"></span>

              <div>
                <h3>Django</h3>
                <p>Backend & APIs</p>
              </div>

              <span className="stat-divider"></span>

              <div>
                <h3>Web</h3>
                <p>Development</p>
              </div>
            </div>
          </div>

          {/* 3D VISUAL */}
          <div className="hero-visual">
            <div className="orbit orbit-one"></div>
            <div className="orbit orbit-two"></div>
            <div className="orbit orbit-three"></div>

            <div className="purple-sphere">
              <div className="sphere-shine"></div>
              <div className="sphere-ring"></div>
            </div>

            <div className="floating-card card-code">
              <span className="card-icon">{"</>"}</span>
              <div>
                <strong>Clean Code</strong>
                <p>Building with purpose</p>
              </div>
            </div>

            <div className="floating-card card-python">
              <span className="card-icon python-icon">Py</span>
              <div>
                <strong>Python</strong>
                <p>Backend development</p>
              </div>
            </div>

            <div className="floating-card card-api">
              <span className="card-icon api-icon">API</span>
              <div>
                <strong>REST APIs</strong>
                <p>Connecting applications</p>
              </div>
            </div>

            <div className="visual-caption">
              <span className="caption-line"></span>
              CREATIVITY MEETS TECHNOLOGY
            </div>
          </div>

          <a className="scroll-indicator" href="#about">
            <span className="scroll-line"></span>
            SCROLL TO EXPLORE
          </a>
        </section>

        {/* ABOUT */}
        <section className="section about" id="about">
          <div className="section-label">01 / ABOUT ME</div>

          <div className="about-grid">
            <div className="about-symbol">
              <span className="about-symbol-glow"></span>
              <span className="about-monogram">MS</span>
              <span className="about-symbol-caption">
                DEVELOPER IN PROGRESS
              </span>
            </div>

            <div className="about-text">
              <p className="eyebrow">A LITTLE ABOUT MYSELF</p>

              <h2>
                Curious Mind.
                <br />
                <span className="gradient-text">Creative Builder.</span>
              </h2>

              <p>
                I'm Manish Sharma, an aspiring Full Stack Developer with a
                background in Biology and professional experience in the
                textile industry. My interest in technology inspired me to
                pursue a career in software development.
              </p>

              <p>
                I'm currently pursuing a Full Stack Development course at
                TOPS Technologies, where I'm developing my skills in Python,
                Django, Django REST Framework, frontend technologies, and
                database management.
              </p>

              <p>
                My goal is to turn ideas into practical applications,
                strengthen my problem-solving abilities, and contribute to
                real-world software projects while continuing to learn.
              </p>

              <a className="text-link" href="#contact">
                Let's build something meaningful <span>↗</span>
              </a>
            </div>
          </div>
        </section>

        {/* SKILLS */}
        <section className="section skills-section" id="skills">
          <div className="section-label">02 / TECHNICAL SKILLS</div>

          <div className="section-heading">
            <div>
              <p className="eyebrow">MY TOOLKIT</p>

              <h2>
                Technologies I
                <br />
                <span className="gradient-text">Work With.</span>
              </h2>
            </div>

            <p className="muted">
              The tools and technologies I'm learning and using to build
              web applications, APIs, and interactive projects.
            </p>
          </div>

          <div className="skills-grid">
            {skills.map((skill) => (
              <article className="skill-card" key={skill.number}>
                <span className="skill-number">{skill.number}</span>

                <div className="skill-card-content">
                  <h3>{skill.name}</h3>
                  <p>{skill.description}</p>
                </div>

                <span className="skill-arrow">↗</span>
              </article>
            ))}
          </div>
        </section>

        {/* PROJECTS */}
        <section className="section projects-section" id="projects">
          <div className="section-label">03 / SELECTED PROJECTS</div>

          <div className="section-heading project-intro">
            <div>
              <p className="eyebrow">IDEAS INTO APPLICATIONS</p>

              <h2>
                Work That
                <br />
                <span className="gradient-text">Speaks for Itself.</span>
              </h2>
            </div>

            <p className="muted">
              A selection of projects that reflect my learning journey,
              technical interests, and practical development experience.
            </p>
          </div>

          <div className="projects-grid">
            {projects.map((project) => (
              <article className="project-card" key={project.number}>
                <div className="project-top">
                  <span className="project-symbol">{project.symbol}</span>
                  <span className="project-number">{project.number}</span>
                </div>

                <div className="project-art">
                  <div className="project-orb"></div>

                  <span className="project-art-label">
                    {project.category}
                  </span>
                </div>

                <div className="project-card-content">
                  <p className="eyebrow">{project.category}</p>
                  <h3>{project.title}</h3>
                  <p>{project.description}</p>

                  <div className="tech-list">
                    {project.tech.map((technology) => (
                      <span key={technology}>{technology}</span>
                    ))}
                  </div>

                  <a
                    className="text-link"
                    href={project.github}
                    target="_blank"
                    rel="noreferrer"
                  >
                    Explore on GitHub <span>↗</span>
                  </a>
                </div>
              </article>
            ))}
          </div>
        </section>

        {/* CONTACT */}
        <ContactSection />

        {/* FOOTER */}
        <footer className="footer">
          <p>© 2026 Manish Sharma. All rights reserved.</p>
          <a href="#home">Back to top ↑</a>
        </footer>
      </div>
  );
}

export default App;
