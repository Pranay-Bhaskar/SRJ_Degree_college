import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
//import { management } from "../data/mockData";
import "./Management.css";

export default function Management() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="management section section--white" id="management" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Leadership</span>
          <h2 className="section-title">
            Our <span>Management</span>
          </h2>
          <p className="section-subtitle">
            Driven by a vision to uplift rural education — our leaders guide every decision with passion, commitment, and integrity.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="management__grid">
          {management.map((person, idx) => (
            <motion.div
              key={person.id}
              className="mgmt-card"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: idx * 0.15 }}
            >
              {/* Avatar */}
              <div className="mgmt-card__avatar-wrap">
                <div className="mgmt-card__avatar">
                  <span className="mgmt-card__initials">{person.initials}</span>
                </div>
                <div className="mgmt-card__avatar-ring" />
              </div>

              {/* Info */}
              <div className="mgmt-card__info">
                <h3 className="mgmt-card__name">{person.name}</h3>
                <span className="mgmt-card__role badge badge-primary">{person.role}</span>
              </div>

              {/* Message */}
              <div className="mgmt-card__message">
                <span className="mgmt-card__quote">"</span>
                <p>{person.message}</p>
              </div>

              {/* Bottom Accent */}
              <div className="mgmt-card__accent" />
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
