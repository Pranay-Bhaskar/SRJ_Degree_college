
import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { facilities } from "../data/mockData";
import "./Facilities.css";

const tagColors = {
  Academic: "badge-primary",
  Science:  "badge-accent",
  Tech:     "badge-primary",
  Hostel:   "badge-urgent",
  Transport:"badge-accent",
  Sports:   "badge-primary",
};

export default function Facilities() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="facilities section section--light" id="facilities" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Infrastructure</span>
          <h2 className="section-title">
            World-Class <span>Facilities</span>
          </h2>
          <p className="section-subtitle">
            We invest in state-of-the-art infrastructure to ensure every student has the environment to learn, grow, and thrive.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="facilities__grid">
          {facilities.map((f, idx) => (
            <motion.div
              key={f.id}
              className="facility-card"
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="facility-card__icon-wrap">
                <span className="facility-card__icon">{f.icon}</span>
              </div>
              <div className="facility-card__content">
                <div className="facility-card__header">
                  <h4 className="facility-card__name">{f.name}</h4>
                  <span className={`badge ${tagColors[f.tag] || "badge-primary"}`}>{f.tag}</span>
                </div>
                <p className="facility-card__desc">{f.description}</p>
              </div>
              <div className="facility-card__hover-line" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
