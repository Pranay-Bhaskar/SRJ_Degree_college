import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { placements, testimonials } from "../data/mockData";
import "./Placements.css";

export default function Placements() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonials.length);
    }, 4500);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="placements section section--white" id="placements" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
        {/*  <span className="section-tag">Career & Placements</span>  */}
          <h2 className="section-title">
            Your Career <span>Starts Here</span>
          </h2>
          <p className="section-subtitle">
            We actively support students with internships, placement drives, and career counselling.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Stats Strip */}
        <div className="placements__stats">
          {placements.stats.map((s, idx) => (
            <motion.div
              key={s.label}
              className="placement-stat"
              initial={{ opacity: 0, y: 20 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <span className="placement-stat__icon">{s.icon}</span>
              <span className="placement-stat__value">{s.value}</span>
              <span className="placement-stat__label">{s.label}</span>
            </motion.div>
          ))}
        </div>

        {/* Companies */}
        <motion.div
          className="placements__companies"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5, delay: 0.3 }}
        >
          <h4 className="placements__companies-title">Our Placement Partners & Internship Companies</h4>
          <div className="placements__companies-grid">
            {placements.companies.map((company) => (
              <div key={company} className="placements__company-chip">
                🏢 {company}
              </div>
            ))}
          </div>
        </motion.div>

        {/* Testimonials */}
        <div className="testimonials" id="testimonials">
          <h3 className="testimonials__heading">
            💬 What Our <span>Students Say</span>
          </h3>
          <div className="testimonials__carousel">
            <AnimatePresence mode="wait">
              <motion.div
                key={activeTestimonial}
                className="testimonial-card"
                initial={{ opacity: 0, x: 60 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -60 }}
                transition={{ duration: 0.45 }}
              >
                <div className="testimonial-card__stars">
                  {"⭐".repeat(testimonials[activeTestimonial].rating)}
                </div>
                <p className="testimonial-card__text">
                  "{testimonials[activeTestimonial].text}"
                </p>
                <div className="testimonial-card__author">
                  <div className="testimonial-card__avatar">
                    {testimonials[activeTestimonial].name[0]}
                  </div>
                  <div>
                    <span className="testimonial-card__name">{testimonials[activeTestimonial].name}</span>
                    <span className="testimonial-card__course">{testimonials[activeTestimonial].course}</span>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Dot Indicators */}
            <div className="testimonials__dots">
              {testimonials.map((_, idx) => (
                <button
                  key={idx}
                  className={`testimonials__dot ${idx === activeTestimonial ? "active" : ""}`}
                  onClick={() => setActiveTestimonial(idx)}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
