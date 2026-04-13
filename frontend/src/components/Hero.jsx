import { motion } from "framer-motion";
import { FiDownload, FiArrowRight, FiMapPin } from "react-icons/fi";
import "./Hero.css";

const fadeUp = (delay = 0) => ({
  hidden: { opacity: 0, y: 40 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.7, delay, ease: "easeOut" } },
});

const stats = [
  { value: "1983", label: "Established" },
  { value: "5+",   label: "Courses Offered" },
  { value: "40+",  label: "Years of Excellence" },
  { value: "2000+",label: "Alumni Strong" },
];

export default function Hero() {
  const handleScroll = (id) => {
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="hero" id="home">
      {/* Background Overlay */}
      <div className="hero__bg" />
      <div className="hero__overlay" />

      {/* Floating Decorative Shapes */}
      <div className="hero__shape hero__shape--1" />
      <div className="hero__shape hero__shape--2" />
      <div className="hero__shape hero__shape--3" />

      <div className="hero__content container">
        {/* Left / Main Content */}
        <div className="hero__main">
          {/* Admissions Badge */}
          <motion.div
            className="hero__badge"
            variants={fadeUp(0)}
            initial="hidden"
            animate="visible"
          >
            <span className="ribbon">🎓 Admissions Open 2026–27</span>
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="hero__title"
            variants={fadeUp(0.15)}
            initial="hidden"
            animate="visible"
          >
            Empowering
            <span className="hero__title-accent"> Rural Youth</span>
            <br />
            Through Quality
            <br />
            <span className="hero__title-outline">Education</span>
          </motion.h1>

          {/* Subtext */}
          <motion.p
            className="hero__subtitle"
            variants={fadeUp(0.3)}
            initial="hidden"
            animate="visible"
          >
            Affiliated to{" "}
            <a href="https://vsu.ac.in" target="_blank" rel="noreferrer" className="hero__affiliation-link">
              Vikrama Simhapuri University
            </a>{" "}
            · Atmakur, Nellore, Andhra Pradesh
          </motion.p>

          {/* Location tag */}
          <motion.div
            className="hero__location"
            variants={fadeUp(0.4)}
            initial="hidden"
            animate="visible"
          >
            <FiMapPin size={14} />
            <span>Atmakur, Nellore — Andhra Pradesh 524 322</span>
          </motion.div>

          {/* CTA Buttons */}
          <motion.div
            className="hero__ctas"
            variants={fadeUp(0.5)}
            initial="hidden"
            animate="visible"
          >
            <button
              className="btn btn-accent hero__btn"
              onClick={() => handleScroll("admissions")}
            >
              Apply Now <FiArrowRight />
            </button>
            <button className="btn btn-outline hero__btn">
              <FiDownload /> Download Prospectus
            </button>
          </motion.div>
        </div>

        {/* Right / Stats Card
        <motion.div
          className="hero__stats-card glass-card"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
        >
          <h3 className="hero__stats-title">At a Glance</h3>
          <div className="hero__stats-grid">
            {stats.map((s) => (
              <div key={s.label} className="hero__stat-item">
                <span className="hero__stat-value">{s.value}</span>
                <span className="hero__stat-label">{s.label}</span>
              </div>
            ))}
          </div>
          <div className="hero__stats-cta">
            <button
              className="btn btn-primary"
              style={{ width: "100%", justifyContent: "center" }}
              onClick={() => handleScroll("courses")}
            >
              Explore Courses
            </button>
          </div>
          <p className="hero__stats-note">
            🏛️ Proudly Affiliated to VSU · Government Aided Programs
          </p>
        </motion.div> */}
      </div>

    </section>
  );
}
