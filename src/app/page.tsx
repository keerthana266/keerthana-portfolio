'use client';

import { motion } from 'framer-motion';
import {
  ArrowDownToLine,
  BriefcaseBusiness,
  Code2,
  Crown,
  Download,
  Github,
  GraduationCap,
  HeartHandshake,
  Mail,
  MapPin,
  Menu,
  Phone,
  Sparkles,
  Terminal,
  Users,
  X,
} from 'lucide-react';
import { useState, type ReactNode } from 'react';

/* ================================================================
   EDITABLE CONTENT
   ================================================================ */

const site = {
  name: 'Keerthana Dasari',
  brand: "Keerthana's Portfolio",
  role: 'Computer Science & Engineering',
  headline: 'AI/ML Enthusiast | Software Developer',

  intro:
    'I build practical software and machine-learning solutions while exploring research, intelligent systems, and open-source engineering.',

  email: 'dasarikeerthana2006@gmail.com',
  phone: '+91 7893258486',
  location: 'Telangana, India',

  institution:
    'National Institute of Technology, Durgapur',

  github:
    'https://github.com/keerthana266',

  linkedin:
    'https://www.linkedin.com/in/keerthana-dasari-0b4783285/',

  resume: '/resume.pdf',

  profileImage: '/profile.jpg',
};

/* ================= ABOUT ================= */

const about = {
  title: 'Engineering Excellence Through Innovation',

  paragraphs: [
    <>
      I&apos;m currently pursuing my{' '}
      <strong>
        B.Tech in Computer Science and Engineering
      </strong>{' '}
      at the{' '}
      <strong>
        National Institute of Technology, Durgapur
      </strong>{' '}
      (Expected 2027) with a strong academic record and{' '}
      <strong>CGPA of 7.36.</strong>
    </>,

    <>
      I&apos;m particularly interested in{' '}
      <strong>
        Artificial Intelligence, Machine Learning,
        software development, and problem solving
      </strong>
      . I enjoy turning ideas into working applications
      while continuously exploring new technologies and
      improving my technical skills.
    </>,
  ],
};

/* ================= EXPERIENCE ================= */

const experience = [
  {
    title: 'Research Intern',

    org:
      'National Institute of Technology Warangal',

    date: 'Research Internship',

    text:
      'Conducted a comparative study of ML/DL models for cancer detection using genomic data. Evaluated model performance and benchmarked results against published research.',

    tags: [
      'Python',
      'Machine Learning',
      'Deep Learning',
      'Model Evaluation',
      'Research Analysis',
    ],

    certificate:
      'https://drive.google.com/file/d/1ZD6f7shl4IYbe7sX72X4JgS50r8nUD5E/view?usp=sharing',
  },

  {
    title: 'Open-Source Contributor',

    org:
      'GirlScript Summer of Code (GSSoC) 2026',

    date: 'Open Source',

    text:
      'Contributed to multiple open-source projects through GSSoC 2026 by identifying and fixing bugs, implementing feature improvements, and collaborating with project maintainers and fellow contributors.',

    tags: [
      'Git',
      'GitHub',
      'Open Source',
      'Collaboration',
      'Problem Solving',
    ],
  },
];

/* ================= PROJECTS ================= */

const projects = [
  {
    title:
      'AI-Powered Smart Expense Tracker',

    subtitle:
      'AI financial intelligence application',

    description:
      'AI-powered expense tracking system that processes payment notifications, extracts transaction information using an LLM, categorizes expenses, generates spending insights, and provides budget alerts.',

    tags: [
      'Android',
      'Kotlin',
      'Node.js',
      'Express.js',
      'MongoDB',
    ],

    link:
      'https://github.com/keerthana266',
  },

  {
    title:
      'Customer Churn Prediction',

    subtitle:
      'Machine learning classification solution',

    description:
      'Built a machine-learning model to predict customer churn using customer data. Performed preprocessing, feature engineering, model evaluation, and classification-model comparison to improve prediction performance.',

    tags: [
      'Python',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Matplotlib',
    ],

    link:
      'https://github.com/keerthana266/Customer-Churn-Prediction',
  },

  {
    title:
      'Customer-Service-Chatbot',

    subtitle:
      'A simple NLP-based Customer Service Chatbot',

    description:
      'This chatbot is designed to simulate a basic customer support system. It uses Natural Language Processing (NLP) techniques to understand user queries and return relevant responses from predefined intents.',

    tags: [
      'Python',
      'Flask',
      'NLTK',
      'Scikit-learn',
      'TF-IDF Vectorizer',
    ],

    link:
      'https://github.com/keerthana266/Customer-Service-Chatbot',
  },
];

/* ================= SKILLS ================= */

const skills: [string, string[]][] = [
  [
    'Programming Languages',
    [
      'C',
      'C++',
      'Python',
      'SQL',
    ],
  ],

  [
    'Core Subjects',
    [
      'DSA',
      'OOPS',
      'DBMS',
      'Operating Systems',
      'Computer Networks',
    ],
  ],

  [
    'Web Technologies',
    [
      'HTML',
      'CSS',
      'JavaScript',
      'Bootstrap',
    ],
  ],

  [
    'Libraries & AI/ML',
    [
      'Pandas',
      'NumPy',
      'Scikit-learn',
    ],
  ],
];

/* ================= COMMUNITY ================= */

const community = [
  {
    title:
      'NSS — Senior Volunteer & Student Leader',

    organization:
      'National Service Scheme',

    description:
      'Took an active leadership role in organizing and supporting NSS community initiatives, coordinating with student volunteers during outreach activities, literacy programs, and social-awareness campaigns.',

    icon: Crown,

    tags: [
      'Leadership',
      'Team Coordination',
      'Community Outreach',
      'Social Awareness',
    ],
  },

  {
    title:
      'Kho-Kho Captain',

    organization:
      'NITDGP',

    description:
      'Led the team through coordination, strategy, and effective communication while fostering teamwork and discipline.',

    icon: HeartHandshake,

    tags: [
      'Leadership',
      'Teamwork',
      'Communication',
      'Sports',
    ],
  },
];

/* ================= ANIMATION ================= */

function Reveal({
  children,
  delay = 0,
}: {
  children: ReactNode;
  delay?: number;
}) {
  return (
    <motion.div
      initial={{
        opacity: 0,
        y: 24,
      }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{
        once: true,
        amount: 0.08,
      }}
      transition={{
        duration: 0.55,
        delay,
      }}
    >
      {children}
    </motion.div>
  );
}

/* ================= HEADING ================= */

function Heading({
  eyebrow,
  title,
  intro,
}: {
  eyebrow: string;
  title: string;
  intro?: string;
}) {
  return (
    <div className="heading">
      <div className="eyebrow">
        <Sparkles size={15} />
        {eyebrow}
      </div>

      <h2>{title}</h2>

      <div className="line" />

      {intro && <p>{intro}</p>}
    </div>
  );
}

/* ================= MAIN ================= */

export default function Home() {
  const [menu, setMenu] = useState(false);

  const nav = [
    'Home',
    'About',
    'Projects',
    'Experience',
    'Resume',
    'Contact',
  ];

  const close = () => setMenu(false);

  return (
    <main>
      {/* Ambient background */}

      <div className="ambient a1" />

      <div className="ambient a2" />

      <div
        className="dots"
        aria-hidden="true"
      >
        {Array.from({ length: 28 }).map(
          (_, i) => (
            <i
              key={i}
              style={{
                left: `${(i * 31) % 100}%`,
                top: `${(i * 47) % 100}%`,
                animationDelay: `${
                  (i % 7) * 0.55
                }s`,
              }}
            />
          ),
        )}
      </div>

      {/* ================= NAVBAR ================= */}

      <header className="navbar">
        <a
          className="brand"
          href="#home"
          onClick={close}
        >
          {site.brand}
        </a>

        <button
          className="menu"
          onClick={() => setMenu(!menu)}
          aria-label="Toggle menu"
        >
          {menu ? <X /> : <Menu />}
        </button>

        <nav
          className={
            menu ? 'nav open' : 'nav'
          }
        >
          {nav.map((x) => (
            <a
              key={x}
              href={`#${x.toLowerCase()}`}
              onClick={close}
            >
              {x}
            </a>
          ))}
        </nav>
      </header>

      {/* ================= HOME ================= */}

      <section
        id="home"
        className="hero wrap"
      >
        <div className="hero-copy">
          <motion.h1
            initial={{
              opacity: 0,
              y: 22,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              duration: 0.6,
            }}
          >
            Hi, I&apos;m{' '}
            <span>Dasari</span>
            <br />
            <b>Keerthana</b>
          </motion.h1>

          <motion.h3
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.25,
            }}
          >
            {site.role}
          </motion.h3>

          <motion.p
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            transition={{
              delay: 0.35,
            }}
          >
            {site.headline}
          </motion.p>

          <motion.div
            className="actions"
            initial={{
              opacity: 0,
              y: 12,
            }}
            animate={{
              opacity: 1,
              y: 0,
            }}
            transition={{
              delay: 0.45,
            }}
          >
            <a
              className="btn primary"
              href={site.resume}
              download
            >
              <Download size={18} />
              Download Resume
            </a>

            <a
              className="btn secondary"
              href="#projects"
            >
              <Code2 size={18} />
              Explore My Work
            </a>
          </motion.div>
        </div>

        <motion.div
          className="hero-photo"
          initial={{
            opacity: 0,
            scale: 0.88,
          }}
          animate={{
            opacity: 1,
            scale: 1,
          }}
          transition={{
            duration: 0.7,
          }}
        >
          <div className="photo-ring">
            <img
              src={site.profileImage}
              alt="Keerthana Dasari"
            />
          </div>
        </motion.div>
      </section>

      {/* ================= ABOUT ================= */}

      <section
        id="about"
        className="section"
      >
        <div className="wrap">
          <Heading
            eyebrow="About Me"
            title={about.title}
          />

          <div className="about-grid">
            <Reveal>
              <div className="about-text">
                {about.paragraphs.map(
                  (p, i) => (
                    <p key={i}>{p}</p>
                  ),
                )}

                <div className="languages">
                  <b>Languages:</b>

                  English · Hindi · Telugu
                </div>
              </div>
            </Reveal>

            <div className="achievement">
              <Reveal>
                <h3>
                  <strong>
                    Academic Excellence &
                    Recognition:
                  </strong>
                </h3>

                <article>
                  <GraduationCap />

                  <div>
                    <h3>
                      Scholar Student
                    </h3>

                    <p>
                      Consistent academic
                      excellence for 10
                      consecutive years
                    </p>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.06}>
                <article>
                  <Sparkles />

                  <div>
                    <h3>
                      AI / ML Focus
                    </h3>

                    <p>
                      ML projects + genomic
                      research
                    </p>
                  </div>
                </article>
              </Reveal>

              <Reveal delay={0.12}>
                <article>
                  <Github />

                  <div>
                    <h3>
                      Open Source
                    </h3>

                    <p>
                      GSSoC 2026 contributor
                    </p>
                  </div>
                </article>
              </Reveal>
            </div>
          </div>
        </div>
      </section>

      {/* ================= PROJECTS ================= */}

      <section
        id="projects"
        className="section alt"
      >
        <div className="wrap">
          <Heading
            eyebrow="Featured Work"
            title="Innovation in Action"
          />

          <h3 className="subheading">
            <Terminal />
            AI/ML & Software Engineering
          </h3>

          <div className="project-grid">
            {projects.map((p, i) => (
              <Reveal
                key={p.title}
                delay={i * 0.06}
              >
                <article className="project-card">
                  <div className="project-body">
                    <div className="project-row">
                      <h3>{p.title}</h3>

                      <span>
                        Completed
                      </span>
                    </div>

                    <h4>{p.subtitle}</h4>

                    <p>
                      {p.description}
                    </p>

                    <div className="tags">
                      {p.tags.map(
                        (tag) => (
                          <em key={tag}>
                            {tag}
                          </em>
                        ),
                      )}
                    </div>

                    <a
                      className="project-link"
                      href={p.link}
                      target="_blank"
                      rel="noreferrer"
                    >
                      View on GitHub

                      <Github size={17} />
                    </a>
                  </div>
                </article>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ================= EXPERIENCE ================= */}

      <section
        id="experience"
        className="section"
      >
        <div className="wrap">
          <Heading
            eyebrow="Professional Experience"
            title="Experience & Collaboration"
          />

          <div className="experience-list">
            {experience.map(
              (e, i) => (
                <Reveal
                  key={e.title}
                  delay={i * 0.06}
                >
                  <article className="experience-card">
                    <div className="exp-icon">
                      <BriefcaseBusiness />
                    </div>

                    <div className="exp-body">
                      <div className="exp-top">
                        <div>
                          <h3>
                            {e.title}
                          </h3>

                          <h4>
                            {e.org}
                          </h4>
                        </div>

                        <span>
                          {e.date}
                        </span>
                      </div>

                      <p>
                        {e.text}
                      </p>

                      <div className="tags">
                        {e.tags.map(
                          (tag) => (
                            <em
                              key={tag}
                            >
                              {tag}
                            </em>
                          ),
                        )}

                        {e.certificate && (
                          <a
                            href={
                              e.certificate
                            }
                            target="_blank"
                            rel="noopener noreferrer"
                            className="certificate-tag"
                          >
                            Certificate
                          </a>
                        )}
                      </div>
                    </div>
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= SKILLS ================= */}

      <section
        className="section alt"
        id="skills"
      >
        <div className="wrap">
          <Heading
            eyebrow="Technical Skills"
            title="Tools & Technologies"
          />

          <div className="skills-grid">
            {skills.map(
              (s, i) => (
                <Reveal
                  key={s[0]}
                  delay={i * 0.04}
                >
                  <article className="skill-card">
                    <Terminal />

                    <h3>{s[0]}</h3>

                    <ul>
                      {s[1].map(
                        (x) => (
                          <li key={x}>
                            {x}
                          </li>
                        ),
                      )}
                    </ul>
                  </article>
                </Reveal>
              ),
            )}
          </div>
        </div>
      </section>

      {/* ================= COMMUNITY ================= */}

      <section
        className="section"
        id="community"
      >
        <div className="wrap">
          <Heading
            eyebrow="Community & Responsibility"
            title="Leadership & Community Impact"
          />

          <div className="timeline">
            {community.map(
              (c, i) => {
                const Icon = c.icon;

                return (
                  <Reveal
                    key={c.title}
                    delay={i * 0.06}
                  >
                    <article className="community-card">
                      <div className="node" />

                      <div className="community-icon">
                        <Icon size={25} />
                      </div>

                      <div className="community-content">
                        <h3>
                          {c.title}
                        </h3>

                        <h4>
                          {c.organization}
                        </h4>

                        <p>
                          {c.description}
                        </p>

                        {/* Community tags */}
                        <div className="tags">
                          {c.tags.map(
                            (tag) => (
                              <em key={tag}>
                                {tag}
                              </em>
                            ),
                          )}
                        </div>
                      </div>
                    </article>
                  </Reveal>
                );
              },
            )}
          </div>
        </div>
      </section>

      {/* ================= RESUME ================= */}

      <section
        className="resume"
        id="resume"
      >
        <div className="wrap resume-inner">
          <Heading
            eyebrow="Resume"
            title="Complete Professional Profile"
            intro="Access my comprehensive resume featuring my education, technical skills, project experience, research internship, and open-source contributions."
          />

          <a
            className="btn primary"
            href={site.resume}
            download
          >
            <ArrowDownToLine size={18} />
            Download Resume
          </a>
        </div>
      </section>

      {/* ================= CONTACT ================= */}

      <section
        className="contact section"
        id="contact"
      >
        <div className="wrap">
          <Heading
            eyebrow="Get In Touch"
            title="Let's Connect & Collaborate"
            intro="I'm open to opportunities, research collaborations, project ideas, and meaningful engineering conversations."
          />

          <div className="contact-grid">
            <article>
              <Mail />

              <div>
                <b>Email</b>

                <span>
                  {site.email}
                </span>
              </div>
            </article>

            <article>
              <Phone />

              <div>
                <b>Phone</b>

                <span>
                  {site.phone}
                </span>
              </div>
            </article>

            <article>
              <MapPin />

              <div>
                <b>Location</b>

                <span>
                  {site.location}
                </span>
              </div>
            </article>

            <article>
              <GraduationCap />

              <div>
                <b>Institution</b>

                <span>
                  {site.institution}
                </span>
              </div>
            </article>
          </div>

          <div className="socials">
            <a
              href={site.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <Users size={17} />
              LinkedIn
            </a>

            <a
              href={site.github}
              target="_blank"
              rel="noreferrer"
            >
              <Github size={17} />
              GitHub
            </a>
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}

      <footer>
        © 2026 {site.name}. All rights reserved.
      </footer>
    </main>
  );
}