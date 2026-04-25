{/*
  import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiArrowRight, FiClock, FiUsers } from "react-icons/fi";
import { courses } from "../data/mockData";
import "./Courses.css";

const colorMap = {
  blue:   { bg: "rgba(31,42,109,0.08)",  border: "#1F2A6D", badge: "badge-primary" },
  yellow: { bg: "rgba(244,180,0,0.1)",   border: "#F4B400",  badge: "badge-accent"  },
  red:    { bg: "rgba(178,34,34,0.08)",  border: "#B22222",  badge: "badge-urgent"  },
};

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function Courses() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const handleApply = () => {
    document.getElementById("admissions")?.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section className="courses section section--white" id="courses" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Programs Offered</span>
          <h2 className="section-title">
            Explore Our <span>Courses</span>
          </h2>
          <p className="section-subtitle">
            Discover government-recognized degree programs designed to build expertise, open career doors, and empower rural learners.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="courses__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {courses.map((course) => {
            const c = colorMap[course.color];
            return (
              <motion.div
                key={course.id}
                className="course-card"
                variants={cardVariants}
                style={{ "--card-color": c.border }}
              >
                {/* Top Accent *
                <div className="course-card__top" style={{ background: c.bg }}>
                  <span className="course-card__icon">{course.icon}</span>
                  <span className={`badge ${c.badge}`}>{course.type}</span>
                </div>

                {/* Body *
                <div className="course-card__body">
                  <h3 className="course-card__title">{course.name}</h3>
                  <p className="course-card__desc">{course.description}</p>

                  <div className="course-card__meta">
                    <div className="course-card__meta-item">
                      <FiClock size={14} />
                      <span>{course.duration}</span>
                    </div>
                    <div className="course-card__meta-item">
                      <FiUsers size={14} />
                      <span>{course.seats} Seats</span>
                    </div>
                  </div>

                  {/* Eligibility *
                  <div className="course-card__eligibility">
                    <span className="course-card__elig-label">Eligibility:</span>
                    <span className="course-card__elig-val">{course.eligibility}</span>
                  </div>

                  {/* Highlights *
                  <ul className="course-card__highlights">
                    {course.highlights.map((h) => (
                      <li key={h} className="course-card__highlight">
                        <span className="course-card__highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer CTA *
                <div className="course-card__footer">
                  <button className="btn btn-primary btn-sm course-card__apply" onClick={handleApply}>
                    Apply Now <FiArrowRight size={14} />
                  </button>
                  <button className="btn btn-outline-blue btn-sm">Learn More</button>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}


*/}