import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { whyChooseUs } from "../data/mockData";
import "./WhyChooseUs.css";

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.1 } },
};
const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function WhyChooseUs() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="why section section--light" id="why">
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
          ref={ref}
        >
          <span className="section-tag">Why Choose Us</span>
          <h2 className="section-title">
            The SRJ <span>Difference</span>
          </h2>
          <p className="section-subtitle">
            More than just a college — we're a community that invests in your future <br />
            and stands with you at every step of your academic journey.
          </p>
          <div className="section-divider" />
        </motion.div>

        <motion.div
          className="why__grid"
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {whyChooseUs.map((item, idx) => (
            <motion.div key={item.title} className="why__card" variants={cardVariants}>
              <div className="why__icon-wrap">
                <span className="why__icon">{item.icon}</span>
                <div className="why__icon-glow" />
              </div>
              <h4 className="why__title">{item.title}</h4>
              <p className="why__desc">{item.desc}</p>
              <div className="why__card-accent" />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
