import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { FiCheckCircle, FiMapPin, FiCalendar, FiAward } from "react-icons/fi";
import { collegeInfo } from "../data/mockData";
import "./About.css";

const highlights = [
  { icon: <FiCalendar />, label: "Established", value: collegeInfo.established },
  { icon: <FiAward />,    label: "Affiliated To", value: "VSU" },
  { icon: <FiMapPin />,   label: "Location", value: "Atmakur, Nellore" },
  { icon: <FiCheckCircle />, label: "Programs", value: "5 Courses" },
];

const pillars = [
  "Government-aided programs with recognized degrees",
  "20+ years of academic excellence in Nellore",
  "Experienced faculty with research background",
  "Strong rural outreach & scholarship support",
];

export default function About() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="about section section--white" id="about" ref={ref}>
      <div className="container">
        <div className="about__grid">
          {/* Left: Visual Panel */}
          <motion.div
            className="about__visual"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <div className="about__image-wrap">
              <div className="about__image-main">
                <div className="about__image-placeholder">
                  <span className="about__college-emblem">🏛️</span>
                  <p>Dr. SRJ Degree College</p>
                  <small>Atmakur, Nellore</small>
                </div>
              </div>
              <div className="about__stats-float glass-card">
                <div className="about__float-stat">
                  <span className="about__float-num">20+</span>
                  <span className="about__float-label">Years of Excellence</span>
                </div>
              </div>
              <div className="about__badge-float">
                <span>🎓</span>
                <span>Govt. Aided</span>
              </div>
            </div>
            {/* Highlight Chips */}
            <div className="about__highlights">
              {highlights.map((h) => (
                <div key={h.label} className="about__highlight-chip">
                  <span className="about__highlight-icon">{h.icon}</span>
                  <div>
                    <span className="about__highlight-val">{h.value}</span>
                    <span className="about__highlight-lbl">{h.label}</span>
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          {/* Right: Content */}
          <motion.div
            className="about__content"
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.15, ease: "easeOut" }}
          >
            <span className="section-tag">About Us</span>
            <h2 className="section-title">
              A Legacy of <span>Excellence</span> in Rural Education
            </h2>
            <p className="about__body">{collegeInfo.about}</p>

            {/* Pillars */}
            <ul className="about__pillars">
              {pillars.map((p) => (
                <li key={p} className="about__pillar">
                  <FiCheckCircle className="about__pillar-icon" />
                  <span>{p}</span>
                </li>
              ))}
            </ul>

            {/* Vision & Mission */}
            <div className="about__vm-grid">
              <div className="about__vm-card about__vm-card--vision">
                <h4>🔭 Our Vision</h4>
                <p>{collegeInfo.vision}</p>
              </div>
              <div className="about__vm-card about__vm-card--mission">
                <h4>🎯 Our Mission</h4>
                <p>{collegeInfo.mission}</p>
              </div>
            </div>

            <a href={collegeInfo.mapsUrl} target="_blank" rel="noreferrer" className="btn btn-primary" style={{ marginTop: "8px" }}>
              <FiMapPin /> View on Google Maps
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
