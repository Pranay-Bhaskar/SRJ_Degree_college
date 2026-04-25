import { useRef } from "react";
import { motion, useInView } from "framer-motion";
import {
  FiMapPin, FiCalendar, FiAward, FiArrowRight,
} from "react-icons/fi";
import {
  HiOutlineEye, HiOutlineBuildingLibrary, HiOutlineBookOpen,
  HiOutlineMapPin, HiOutlineCalendarDays, HiOutlineTrophy,
  HiOutlineShieldCheck, HiOutlineUserGroup, HiOutlineStar,
} from "react-icons/hi2";
import { collegeInfo } from "../data/mockData";
import "./About.css";

/* ── Data ─────────────────────────────────────────────── */
const statCards = [
  { icon: <HiOutlineCalendarDays size={26} />, value: "2005",           sub: "Established" },
  { icon: <HiOutlineBuildingLibrary size={26} />, value: "VSU",         sub: "Affiliated To" },
  { icon: <HiOutlineMapPin size={26} />,       value: "Atmakur, Nellore", sub: "Location" },
  { icon: <HiOutlineBookOpen size={26} />,     value: "5+",
    valueExtra: "Courses",                     sub: "Programs" },
];

const features = [
  { icon: <HiOutlineShieldCheck size={24} />, title: "Government",   titleB: "Aided",    sub: "Recognized Programs" },
  { icon: <HiOutlineUserGroup   size={24} />, title: "Experienced",  titleB: "Faculty",  sub: "Research & Practice Driven" },
  { icon: <HiOutlineMapPin      size={24} />, title: "Rural",        titleB: "Focus",    sub: "Empowering First-Generation Learners" },
  { icon: <HiOutlineTrophy      size={24} />, title: "Excellence",   titleB: "Always",   sub: "40+ Years of Trust & Impact" },
];

/* ── Animation helpers ────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 28 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.65, delay, ease: [0.16, 1, 0.3, 1] } },
});
const fadeLeft  = (delay = 0) => ({
  hidden:  { opacity: 0, x: -40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.7,  delay, ease: [0.16, 1, 0.3, 1] } },
});
const fadeRight = (delay = 0) => ({
  hidden:  { opacity: 0, x: 40 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.7,  delay, ease: [0.16, 1, 0.3, 1] } },
});

/* ═══════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════ */
export default function About() {
  const ref   = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="about" id="about" ref={ref}>
      <div className="about__container">
        <div className="about__grid">

          {/* ════════════════════════════
              LEFT — Photo + Stats
          ════════════════════════════ */}
          <motion.div
            className="about__left"
            variants={fadeLeft(0)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* Photo + 40+ card */}
            <div className="about__photo-wrap">
              <img
                src="/hero.png"
                alt="DR. SRJ Degree College — Atmakur, Nellore"
                className="about__photo"
              />

              {/* Overlay years card */}
              <motion.div
                className="about__years-card"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.45, ease: [0.16, 1, 0.3, 1] }}
              >
                {/* Laurel SVG */}
                <div className="years__laurel" aria-hidden="true">
                  <LaurelIcon />
                </div>

                <div className="years__text">
                  <span className="years__num">40+</span>
                  <span className="years__label">Years of<br />Academic Excellence</span>
                </div>

                {/* Faint shield watermark */}
                <div className="years__shield" aria-hidden="true">
                  <ShieldIcon />
                </div>
              </motion.div>
            </div>

            {/* Stat cards row */}
            <div className="about__stat-row">
              {statCards.map(({ icon, value, valueExtra, sub }, i) => (
                <motion.div
                  key={sub}
                  className="about__stat-card"
                  variants={fadeUp(0.5 + i * 0.08)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="stat-card__icon">{icon}</div>
                  <div className="stat-card__value">
                    {value}
                    {valueExtra && <span className="stat-card__value-extra">{valueExtra}</span>}
                  </div>
                  <div className="stat-card__sub">{sub}</div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          {/* ════════════════════════════
              RIGHT — Content
          ════════════════════════════ */}
          <motion.div
            className="about__right"
            variants={fadeRight(0.12)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {/* "ABOUT US" tag */}
            <div className="about__tag">
              <span className="tag__dot" />
              <span className="tag__text">ABOUT US</span>
            </div>

            {/* Heading */}
            <h2 className="about__heading">
              <span className="heading__dark">A Legacy of Excellence</span>
              <span className="heading__gold">in Rural Education</span>
            </h2>

            {/* Gold rule */}
            <motion.div
              className="about__rule"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 0.55, delay: 0.35, ease: [0.16, 1, 0.3, 1] }}
            />

            {/* Body */}
            <p className="about__body">
              {collegeInfo.about}
            </p>

            {/* 4 Feature icons */}
            <div className="about__features">
              {features.map(({ icon, title, titleB, sub }, i) => (
                <motion.div
                  key={title}
                  className="about__feature"
                  variants={fadeUp(0.3 + i * 0.07)}
                  initial="hidden"
                  animate={inView ? "visible" : "hidden"}
                >
                  <div className="feature__icon-wrap">{icon}</div>
                  <div className="feature__label">
                    <strong>{title}<br />{titleB}</strong>
                  </div>
                  <div className="feature__sub">{sub}</div>
                  {i < features.length - 1 && <div className="feature__sep" />}
                </motion.div>
              ))}
            </div>

            {/* Vision & Mission cards */}
            <div className="about__vm">
              <motion.div
                className="vm__card"
                variants={fadeUp(0.55)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="vm__icon vm__icon--navy">
                  <HiOutlineEye size={22} />
                </div>
                <div className="vm__body">
                  <h4 className="vm__title">Our Vision</h4>
                  <p className="vm__text">{collegeInfo.vision}</p>
                </div>
              </motion.div>

              <motion.div
                className="vm__card"
                variants={fadeUp(0.63)}
                initial="hidden"
                animate={inView ? "visible" : "hidden"}
              >
                <div className="vm__icon vm__icon--gold">
                  <MissionIcon />
                </div>
                <div className="vm__body">
                  <h4 className="vm__title">Our Mission</h4>
                  <p className="vm__text">{collegeInfo.mission}</p>
                </div>
              </motion.div>
            </div>

            {/* Google Maps button */}
            <motion.a
              href={collegeInfo.mapsUrl}
              target="_blank"
              rel="noreferrer"
              className="about__map-btn"
              variants={fadeUp(0.72)}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
              whileHover={{ scale: 1.015 }}
              whileTap={{ scale: 0.98 }}
            >
              <FiMapPin size={17} strokeWidth={2.5} />
              <span>VIEW ON GOOGLE MAPS</span>
              <FiArrowRight size={17} strokeWidth={2.5} />
            </motion.a>
          </motion.div>

        </div>
      </div>
    </section>
  );
}

/* ── Inline SVG icons ─────────────────────────────────── */
function LaurelIcon() {
  return (
    <svg viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 44, height: 44 }}>
      {/* Left branch */}
      <path d="M12 36 C8 28 6 20 10 14 C11 18 11 22 12 26 C9 27 8 31 12 36Z"
        fill="#c8a030" opacity="0.85"/>
      <path d="M14 30 C10 24 10 18 14 12 C14.5 16 14 20 14 24 C11.5 24.5 11 28 14 30Z"
        fill="#c8a030" opacity="0.7"/>
      <path d="M17 26 C14 20 14 14 18 10 C18 14 17.5 18 17 22 C14.5 22 14 25.5 17 26Z"
        fill="#c8a030" opacity="0.55"/>
      {/* Right branch */}
      <path d="M36 36 C40 28 42 20 38 14 C37 18 37 22 36 26 C39 27 40 31 36 36Z"
        fill="#c8a030" opacity="0.85"/>
      <path d="M34 30 C38 24 38 18 34 12 C33.5 16 34 20 34 24 C36.5 24.5 37 28 34 30Z"
        fill="#c8a030" opacity="0.7"/>
      <path d="M31 26 C34 20 34 14 30 10 C30 14 30.5 18 31 22 C33.5 22 34 25.5 31 26Z"
        fill="#c8a030" opacity="0.55"/>
      {/* Bottom stem */}
      <path d="M22 38 Q24 40 26 38" stroke="#c8a030" strokeWidth="1.5"
        strokeLinecap="round" fill="none" opacity="0.8"/>
    </svg>
  );
}

function ShieldIcon() {
  return (
    <svg viewBox="0 0 80 96" fill="none" xmlns="http://www.w3.org/2000/svg"
      style={{ width: 80, height: 96 }}>
      <path d="M40 4 L76 18 L76 48 C76 68 60 84 40 92 C20 84 4 68 4 48 L4 18 Z"
        stroke="rgba(255,255,255,0.12)" strokeWidth="2" fill="rgba(255,255,255,0.04)"/>
      <path d="M40 16 L66 27 L66 48 C66 63 54 75 40 82 C26 75 14 63 14 48 L14 27 Z"
        stroke="rgba(255,255,255,0.07)" strokeWidth="1.5" fill="none"/>
    </svg>
  );
}

function MissionIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor"
      strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"
      style={{ width: 22, height: 22 }}>
      <circle cx="12" cy="12" r="10"/>
      <circle cx="12" cy="12" r="6"/>
      <circle cx="12" cy="12" r="2"/>
    </svg>
  );
}
