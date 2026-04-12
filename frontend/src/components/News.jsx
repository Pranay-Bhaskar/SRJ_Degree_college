import { useRef } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { news } from "../data/mockData";
import "./News.css";

export default function News() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  return (
    <section className="news section section--white" id="news" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Latest Updates</span>
          <h2 className="section-title">
            News & <span>Announcements</span>
          </h2>
          <div className="section-divider" />
        </motion.div>

        <div className="news__grid">
          {news.map((item, idx) => (
            <motion.div
              key={item.id}
              className={`news-card ${item.urgent ? "news-card--urgent" : ""}`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
            >
              <div className="news-card__header">
                <span className={`badge ${item.urgent ? "badge-urgent" : "badge-primary"}`}>
                  {item.tag}
                </span>
                {item.urgent && <span className="news-card__live">🔴 Live</span>}
              </div>
              <h4 className="news-card__title">{item.title}</h4>
              <p className="news-card__body">{item.body}</p>
              <div className="news-card__footer">
                <span className="news-card__date">📅 {item.date}</span>
                <a href="#" className="news-card__link">Read More →</a>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
