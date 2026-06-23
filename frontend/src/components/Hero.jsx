import { useEffect, useRef } from "react";
import { motion, animate } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import {
  HiAcademicCap,
  HiUserGroup,
  HiBookOpen,
  HiBuildingLibrary,
  HiShieldCheck,
  HiStar,
  HiGlobeAlt,
} from "react-icons/hi2";
import "./Hero.css";

/* ── Animated Counter ────────────────────────────────── */
function Counter({ to, suffix = "" }) {
  const ref = useRef(null);
  useEffect(() => {
    const node = ref.current;
    const ctrl = animate(0, parseInt(to), {
      duration: 2,
      delay: 1,
      ease: [0.16, 1, 0.3, 1],
      onUpdate: (v) => { if (node) node.textContent = Math.floor(v) + suffix; },
    });
    return ctrl.stop;
  }, [to, suffix]);
  return <span ref={ref}>0{suffix}</span>;
}

const stats = [
  { icon: HiAcademicCap, value: "40", suffix: "+", label: "Years of Legacy", sub: "Excellence in Education" },
  { icon: HiUserGroup, value: "5000", suffix: "+", label: "Students", sub: "Empowered Minds" },
  { icon: HiBookOpen, value: "15", suffix: "+", label: "Courses", sub: "Across Disciplines" },
  { icon: HiBuildingLibrary, value: "30", suffix: "+", label: "Dedicated Faculty", sub: "Guiding Futures" },
];

const values = [
  { icon: HiShieldCheck, label: "Quality", sub: "Education" },
  { icon: HiStar, label: "Holistic", sub: "Development" },
  { icon: HiUserGroup, label: "Community", sub: "Engagement" },
  { icon: HiGlobeAlt, label: "Excellence", sub: "Always" },
];

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } },
});

export default function Hero() {
  const handleScroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home">

      {/* Sky-blue circle behind the building image */}
      <div className="hero__circle-bg" aria-hidden="true" />

      {/* ══ MAIN LAYOUT ══════════════════════════════════ */}
      <div className="hero__body">

        {/* LEFT COLUMN */}
        <div className="hero__left">

          {/* "WELCOME TO" label */}
          <motion.div
            className="hero__welcome"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            <span className="welcome__bar" />
            <span className="welcome__text">WELCOME TO</span>
          </motion.div>

          {/* Main Heading */}
          <motion.h1
            className="hero__heading"
            variants={fadeUp(0.1)}
            initial="hidden"
            animate="visible"
          >
         {/*   <span className="h1__top">Government College</span>  */}
            <span className="h1__main">Dr. S R J Degree College</span>
          </motion.h1>

          {/* Gold rule */}
          <motion.div
            className="hero__rule"
            initial={{ scaleX: 0 }}
            animate={{ scaleX: 1 }}
            transition={{ duration: 0.55, delay: 0.26, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle */}
          <motion.p
            className="hero__subtitle"
            variants={fadeUp(0.34)}
            initial="hidden"
            animate="visible"
          >
            Empowering minds. Enriching futures. Building
            <br />responsible citizens through quality education
            <br />and holistic development.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="hero__ctas"
            variants={fadeUp(0.46)}
            initial="hidden"
            animate="visible"
          >
            <button
              className="btn btn--primary"
              onClick={() => handleScroll("courses")}
            >
              <FiArrowRight strokeWidth={2.5} />
              Explore Courses
            </button>
            <button
              className="btn btn--outline"
              onClick={() => handleScroll("about")}
            >
              <CollegeIcon />
              About Our College
            </button>
          </motion.div>

        </div>

        {/* RIGHT COLUMN — Building photo */}
        <motion.div
          className="hero__right"
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.85, delay: 0.18, ease: [0.16, 1, 0.3, 1] }}
        >
          <img
            src="/images/campus2.png"
            alt="Dr. S R J Degree College Building"
            className="hero__img"
          />
        </motion.div>
      </div>

      {/* ══ STATS CARD ═══════════════════════════════════ */}
      <motion.div
        className="hero__stats"
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.65, delay: 0.7 }}
      >
        {stats.map(({ icon: Icon, value, suffix, label, sub }, i) => (
          <div key={label} className="stat">
            <div className="stat__icon"><Icon size={24} /></div>
            <div className="stat__info">
              <span className="stat__value"><Counter to={value} suffix={suffix} /></span>
              <span className="stat__label">{label}</span>
              <span className="stat__sub">{sub}</span>
            </div>
            {i < stats.length - 1 && <div className="stat__sep" />}
          </div>
        ))}
      </motion.div>

      {/* ══ DARK FOOTER STRIP ════════════════════════════ */}

      <motion.div
        className="hero__footer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.65, delay: 0.9 }}
        style={{ position: 'relative', overflow: 'visible' }}
      >
        {/* Wave SVG at the top of the footer */}
        <div className="footer__wave">
          <svg
            viewBox="0 0 1440 80"
            xmlns="http://www.w3.org/2000/svg"
            preserveAspectRatio="none"
            style={{ display: 'block', width: '100%', height: '80px' }}
          >
            <path
              d="M0,80 L0,40 Q200,0 400,30 Q650,65 900,20 Q1150,-20 1440,30 L1440,80 Z"
              fill="var(--navy)"
            />

            <path
              d="M0,40 Q200,0 400,30 Q650,65 900,20 Q1150,-20 1440,30"
              fill="none"
              stroke="var(--gold)"
              strokeWidth="3"
              strokeLinecap="round"
            />
          </svg>
        </div>

        <div className="footer__quote">
          <span className="footer__qmark">"</span>
          <div>
            <p>Education is the most powerful weapon which you can use to change the world.</p>
            <cite>– Nelson Mandela</cite>
          </div>
        </div>

        <div className="footer__values">
          {values.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="footer__val">
              <div className="footer__val-icon"><Icon size={22} /></div>
              <div className="footer__val-text">
                <strong>{label}</strong>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

    </section>
  );
}

function CollegeIcon() {
  return (
    <svg width="16" height="16" viewBox="0 0 24 24" fill="none"
      stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M3 21h18M3 10h18M5 6l7-3 7 3M4 10v11M20 10v11M8 14v3M12 14v3M16 14v3" />
    </svg>
  );
}
