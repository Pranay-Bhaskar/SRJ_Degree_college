import { useEffect, useRef, useState } from "react";
import { motion, useMotionValue, useTransform, animate } from "framer-motion";
import { FiArrowRight, FiBookOpen, FiMapPin, FiChevronDown } from "react-icons/fi";
import {
  HiAcademicCap,
  HiUserGroup,
  HiBookOpen,
  HiLightBulb,
  HiStar,
  HiGlobeAlt,
  HiShieldCheck,
} from "react-icons/hi2";
import "./Hero.css";

/* ─── Animated Counter ─────────────────────────────────────────── */
function Counter({ to, suffix = "" }) {
  const nodeRef = useRef(null);
  useEffect(() => {
    const node = nodeRef.current;
    const controls = animate(0, parseInt(to), {
      duration: 2.2,
      delay: 0.8,
      ease: [0.16, 1, 0.3, 1],
      onUpdate(v) {
        if (node) node.textContent = Math.floor(v) + suffix;
      },
    });
    return controls.stop;
  }, [to, suffix]);
  return <span ref={nodeRef}>0{suffix}</span>;
}

/* ─── Floating Particle ────────────────────────────────────────── */
function Particle({ style }) {
  return <div className="particle" style={style} />;
}

const stats = [
  { icon: HiAcademicCap, value: "50", suffix: "+", label: "Years of Legacy",   sub: "Excellence in Education" },
  { icon: HiUserGroup,   value: "5000", suffix: "+", label: "Students",         sub: "Empowered Minds" },
  { icon: HiBookOpen,    value: "25",  suffix: "+", label: "Courses",           sub: "Across Disciplines" },
  { icon: HiLightBulb,  value: "30",  suffix: "+", label: "Dedicated Faculty", sub: "Guiding Futures" },
];

const values = [
  { icon: HiShieldCheck, label: "Quality",   sub: "Education" },
  { icon: HiStar,        label: "Holistic",  sub: "Development" },
  { icon: HiUserGroup,   label: "Community", sub: "Engagement" },
  { icon: HiGlobeAlt,    label: "Excellence",sub: "Always" },
];

const particles = Array.from({ length: 18 }, (_, i) => ({
  width:  `${6 + Math.random() * 10}px`,
  height: `${6 + Math.random() * 10}px`,
  left:   `${Math.random() * 100}%`,
  top:    `${Math.random() * 100}%`,
  animationDelay:    `${Math.random() * 5}s`,
  animationDuration: `${5 + Math.random() * 6}s`,
  opacity: 0.12 + Math.random() * 0.2,
}));

/* ─── Stagger helpers ──────────────────────────────────────────── */
const fadeUp = (delay = 0, y = 30) => ({
  hidden:  { opacity: 0, y },
  visible: { opacity: 1, y: 0, transition: { duration: 0.75, delay, ease: [0.16, 1, 0.3, 1] } },
});
const fadeLeft = (delay = 0) => ({
  hidden:  { opacity: 0, x: 60 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.85, delay, ease: [0.16, 1, 0.3, 1] } },
});

export default function Hero() {
  const [imageLoaded, setImageLoaded] = useState(false);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const rotateX = useTransform(mouseY, [-300, 300], [4, -4]);
  const rotateY = useTransform(mouseX, [-300, 300], [-4, 4]);

  const handleMouseMove = (e) => {
    const rect = e.currentTarget.getBoundingClientRect();
    mouseX.set(e.clientX - rect.left - rect.width / 2);
    mouseY.set(e.clientY - rect.top - rect.height / 2);
  };

  const handleScroll = (id) =>
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });

  return (
    <section className="hero" id="home" onMouseMove={handleMouseMove}>
      {/* ── Ambient Background ────────────────────────────── */}
      <div className="hero__bg-mesh" />
      <div className="hero__bg-wave" />
      {particles.map((p, i) => <Particle key={i} style={p} />)}

      {/* ── Grid Lines ────────────────────────────────────── */}
      <div className="hero__grid-lines" aria-hidden="true">
        {[...Array(6)].map((_, i) => <div key={i} className="grid-line" />)}
      </div>

      {/* ══════════════════════════════════════════════════
          MAIN CONTENT
      ══════════════════════════════════════════════════ */}
      <div className="hero__body container">

        {/* ── LEFT ──────────────────────────────────────── */}
        <div className="hero__left">
          {/* Welcome pill */}
          <motion.div
            className="hero__welcome-pill"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            <span className="pill__dot" />
            <span>WELCOME TO</span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="hero__heading"
            variants={fadeUp(0.12)}
            initial="hidden"
            animate="visible"
          >
            <span className="heading__top">Government College</span>
            <span className="heading__main">
              SRJ Degree<br />College
            </span>
          </motion.h1>

          {/* Gold divider */}
          <motion.div
            className="hero__divider"
            initial={{ scaleX: 0, opacity: 0 }}
            animate={{ scaleX: 1, opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
          />

          {/* Subtitle */}
          <motion.p
            className="hero__subtitle"
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            Empowering minds. Enriching futures. Building responsible citizens
            through quality education and holistic development.
          </motion.p>

          {/* Location */}
          <motion.div
            className="hero__location"
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
          >
            <FiMapPin size={13} />
            <span>Atmakur, Nellore — Andhra Pradesh 524&nbsp;322</span>
            &nbsp;·&nbsp;
            <a
              href="https://vsu.ac.in"
              target="_blank"
              rel="noreferrer"
              className="hero__affiliation-link"
            >
              Affiliated to VSU
            </a>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero__ctas"
            variants={fadeUp(0.6)}
            initial="hidden"
            animate="visible"
          >
            <button
              className="btn btn--primary"
              onClick={() => handleScroll("courses")}
            >
              <span>Explore Courses</span>
              <FiArrowRight />
            </button>
            <button
              className="btn btn--outline"
              onClick={() => handleScroll("about")}
            >
              <FiBookOpen />
              <span>About Our College</span>
            </button>
          </motion.div>

          {/* Admissions badge */}
          <motion.div
            className="hero__admissions"
            variants={fadeUp(0.7)}
            initial="hidden"
            animate="visible"
          >
            <span className="admissions__dot" />
            <span>🎓 Admissions Open 2026–27 · Apply Now</span>
          </motion.div>
        </div>

        {/* ── RIGHT — Building Image ─────────────────────── */}
        <motion.div
          className="hero__right"
          variants={fadeLeft(0.3)}
          initial="hidden"
          animate="visible"
          style={{ rotateX, rotateY, transformPerspective: 1200 }}
        >
          {/* Decorative rings */}
          <div className="ring ring--1" />
          <div className="ring ring--2" />
          <div className="ring ring--3" />

          {/* Glow blob */}
          <div className="hero__glow" />

          {/* Image frame */}
          <div className="hero__image-frame">
            <div className="image-inner">
              <img
                src="/assets/hero.png"
                alt="SRJ Degree College Building"
                className={`building-img${imageLoaded ? " loaded" : ""}`}
                onLoad={() => setImageLoaded(true)}
              />
              {/* Shimmer overlay while loading */}
              {!imageLoaded && <div className="image-shimmer" />}
            </div>
            {/* Corner accents */}
            <div className="frame-corner frame-corner--tl" />
            <div className="frame-corner frame-corner--tr" />
            <div className="frame-corner frame-corner--bl" />
            <div className="frame-corner frame-corner--br" />
          </div>

          {/* Floating info chips */}
          <motion.div
            className="chip chip--est"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.9, type: "spring", stiffness: 200 }}
          >
            <HiAcademicCap size={16} />
            <div>
              <strong>Est. 1965</strong>
              <span>Govt. Aided</span>
            </div>
          </motion.div>

          <motion.div
            className="chip chip--accredited"
            initial={{ opacity: 0, scale: 0.7 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 1.1, type: "spring", stiffness: 200 }}
          >
            <HiShieldCheck size={16} />
            <div>
              <strong>VSU Affiliated</strong>
              <span>Recognized</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* ══════════════════════════════════════════════════
          STATS STRIP
      ══════════════════════════════════════════════════ */}
      <motion.div
        className="hero__stats-strip"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.85, ease: [0.16, 1, 0.3, 1] }}
      >
        {stats.map(({ icon: Icon, value, suffix, label, sub }, i) => (
          <div key={label} className="stat-item">
            <div className="stat-icon-wrap">
              <Icon size={20} />
            </div>
            <div className="stat-text">
              <span className="stat-value">
                <Counter to={value} suffix={suffix} />
              </span>
              <span className="stat-label">{label}</span>
              <span className="stat-sub">{sub}</span>
            </div>
            {i < stats.length - 1 && <div className="stat-divider" />}
          </div>
        ))}
      </motion.div>

      {/* ══════════════════════════════════════════════════
          BOTTOM BAR — Quote + Values
      ══════════════════════════════════════════════════ */}
      <motion.div
        className="hero__bottom-bar"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.9, delay: 1.1 }}
      >
        <div className="bottom-bar__quote">
          <span className="quotemark">"</span>
          <p>
            Education is the most powerful weapon which you can use to change
            the world.
          </p>
          <cite>— Nelson Mandela</cite>
        </div>

        <div className="bottom-bar__divider" />

        <div className="bottom-bar__values">
          {values.map(({ icon: Icon, label, sub }) => (
            <div key={label} className="value-item">
              <div className="value-icon">
                <Icon size={18} />
              </div>
              <div className="value-text">
                <strong>{label}</strong>
                <span>{sub}</span>
              </div>
            </div>
          ))}
        </div>
      </motion.div>

      {/* Scroll hint */}
      <motion.div
        className="hero__scroll-hint"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
      >
        <FiChevronDown size={20} />
      </motion.div>
    </section>
  );
}
