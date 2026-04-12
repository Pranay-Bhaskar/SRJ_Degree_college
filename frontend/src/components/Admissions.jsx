import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiArrowRight } from "react-icons/fi";
import { admissionsSteps, importantDates, requiredDocuments } from "../data/mockData";
import "./Admissions.css";

export default function Admissions() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="admissions section section--light" id="admissions" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Admissions 2026–27</span>
          <h2 className="section-title">
            Simple <span>Admission</span> Process
          </h2>
          <p className="section-subtitle">
            We've made applying straightforward. Follow these six steps to secure your seat at Dr. SRJ Degree College.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Admission Steps Timeline */}
        <div className="admissions__timeline">
          {admissionsSteps.map((step, idx) => (
            <motion.div
              key={step.step}
              className="timeline-step"
              initial={{ opacity: 0, x: idx % 2 === 0 ? -40 : 40 }}
              animate={inView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.55, delay: idx * 0.12 }}
            >
              <div className="timeline-step__icon-col">
                <div className="timeline-step__icon-wrap">
                  <span className="timeline-step__emoji">{step.icon}</span>
                  <div className="timeline-step__num">{step.step}</div>
                </div>
                {idx < admissionsSteps.length - 1 && (
                  <div className="timeline-step__line" />
                )}
              </div>
              <div className="timeline-step__content">
                <h4 className="timeline-step__title">{step.title}</h4>
                <p className="timeline-step__desc">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="admissions__bottom">
          {/* Important Dates */}
          <motion.div
            className="admissions__card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <h3 className="admissions__card-title">📅 Important Dates</h3>
            <ul className="admissions__dates">
              {importantDates.map((d) => (
                <li key={d.label} className="admissions__date-item">
                  <span className="admissions__date-label">{d.label}</span>
                  <span className="admissions__date-val badge badge-accent">{d.date}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Required Documents */}
          <motion.div
            className="admissions__card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.45 }}
          >
            <h3 className="admissions__card-title">📁 Required Documents</h3>
            <ul className="admissions__docs">
              {requiredDocuments.map((doc) => (
                <li key={doc} className="admissions__doc-item">
                  <span className="admissions__doc-check">✓</span>
                  {doc}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* CTA Card */}
          <motion.div
            className="admissions__cta-card"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <span style={{ fontSize: "3rem" }}>🎓</span>
            <h3>Ready to Join?</h3>
            <p>Secure your future with a government-recognized degree from Dr. SRJ Degree College, Atmakur.</p>
            <button
              className="btn btn-accent"
              style={{ marginTop: "16px", justifyContent: "center", width: "100%" }}
              onClick={() => document.getElementById("contact")?.scrollIntoView({ behavior: "smooth" })}
            >
              Apply Now <FiArrowRight />
            </button>
            <button
              className="btn btn-outline-blue btn-sm"
              style={{ marginTop: "10px", justifyContent: "center", width: "100%" }}
            >
              Download Brochure
            </button>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
