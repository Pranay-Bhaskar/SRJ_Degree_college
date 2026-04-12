import { useRef, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import { FiX } from "react-icons/fi";
import { gallery } from "../data/mockData";
import "./Gallery.css";

const categories = ["All", "Campus", "Events", "Labs"];

// Placeholder colors for gallery images
const placeholderColors = [
  "#1F2A6D", "#3A4FCF", "#F4B400", "#B22222",
  "#1F2A6D", "#3A4FCF", "#F4B400", "#B22222",
];
const placeholderEmojis = ["🏛️", "🏢", "🎉", "🎭", "🔬", "💻", "📚", "⚽"];

export default function Gallery() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [activeCategory, setActiveCategory] = useState("All");
  const [lightboxIdx, setLightboxIdx] = useState(null);

  const filtered =
    activeCategory === "All"
      ? gallery
      : gallery.filter((g) => g.category === activeCategory);

  return (
    <section className="gallery-section section section--light" id="gallery" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Photo Gallery</span>
          <h2 className="section-title">
            Life at <span>SRJ</span>
          </h2>
          <p className="section-subtitle">
            Campus life, cultural events, well-equipped labs, and a vibrant student community — captured in moments.
          </p>
          <div className="section-divider" />
        </motion.div>

        {/* Filter */}
        <div className="gallery__filters">
          {categories.map((cat) => (
            <button
              key={cat}
              className={`gallery__filter-btn ${activeCategory === cat ? "active" : ""}`}
              onClick={() => setActiveCategory(cat)}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Image Grid */}
        <motion.div className="gallery__grid" layout>
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.id}
                className="gallery__item"
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.35 }}
                onClick={() => setLightboxIdx(idx)}
                style={{ cursor: "pointer" }}
              >
                <div
                  className="gallery__placeholder"
                  style={{ background: `linear-gradient(135deg, ${placeholderColors[item.id - 1]}dd, ${placeholderColors[item.id - 1]}88)` }}
                >
                  <span className="gallery__placeholder-emoji">{placeholderEmojis[item.id - 1]}</span>
                  <span className="gallery__placeholder-label">{item.alt}</span>
                </div>
                <div className="gallery__item-overlay">
                  <span className="gallery__item-category badge badge-accent">{item.category}</span>
                  <span className="gallery__item-alt">{item.alt}</span>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>

      {/* Lightbox */}
      <AnimatePresence>
        {lightboxIdx !== null && (
          <motion.div
            className="lightbox"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setLightboxIdx(null)}
          >
            <motion.div
              className="lightbox__content"
              initial={{ scale: 0.85, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.85, opacity: 0 }}
              onClick={(e) => e.stopPropagation()}
            >
              <div
                className="lightbox__img"
                style={{
                  background: `linear-gradient(135deg, ${placeholderColors[filtered[lightboxIdx]?.id - 1]}dd, ${placeholderColors[filtered[lightboxIdx]?.id - 1]}88)`,
                }}
              >
                <span style={{ fontSize: "6rem" }}>{placeholderEmojis[filtered[lightboxIdx]?.id - 1]}</span>
              </div>
              <div className="lightbox__caption">
                <h4>{filtered[lightboxIdx]?.alt}</h4>
                <span className="badge badge-accent">{filtered[lightboxIdx]?.category}</span>
              </div>
              <button className="lightbox__close" onClick={() => setLightboxIdx(null)}>
                <FiX size={20} />
              </button>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
