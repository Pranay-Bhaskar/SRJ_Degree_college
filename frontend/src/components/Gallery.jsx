import { useRef, useState, useEffect, useCallback } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "framer-motion";
import "./Gallery.css";

const slides = [
  {
    id: 1,
    icon: "📖",
    category: "Learning Every Day",
    heading: "Where Curiosity Leads to Excellence",
    text: "Our classrooms inspire ideas, encourage questions, and empower students to build a brighter tomorrow.",
    emojiArt: "🏫",
    gradientFrom: "#1a3a8f",
    gradientMid: "#0d1f6e",
    gradientTo: "#060e3a",
    accentColor: "#F0A800",
    floatEmojis: ["✨", "⭐", "🌟"],
  },
  {
    id: 2,
    icon: "🎓",
    category: "Future Ready",
    heading: "Where Learning Becomes Opportunity",
    text: "Our classrooms go beyond textbooks—empowering students with knowledge, confidence, and real-world skills to shape their future.",
    emojiArt: "🎓",
    gradientFrom: "#1e5c38",
    gradientMid: "#123d25",
    gradientTo: "#071a10",
    accentColor: "#4ade80",
    floatEmojis: ["🌿", "💡", "🚀"],
  },
  {
    id: 3,
    icon: "🧑‍🤝‍🧑",
    category: "Student Life",
    heading: "A Community That Grows Together",
    text: "From classrooms to campus events, students build friendships, leadership, and a sense of belonging that lasts a lifetime.",
    emojiArt: "🤝",
    gradientFrom: "#7a2e12",
    gradientMid: "#4a1a08",
    gradientTo: "#200a02",
    accentColor: "#fb923c",
    floatEmojis: ["❤️", "🎊", "🌸"],
  },
  {
    id: 4,
    icon: "🧪",
    category: "Practical Labs",
    heading: "Practical Learning, Real Impact",
    text: "Hands-on labs and guided learning experiences help students apply concepts, think critically, and gain practical exposure.",
    emojiArt: "🧪",
    gradientFrom: "#2e1280",
    gradientMid: "#1a0852",
    gradientTo: "#080220",
    accentColor: "#a78bfa",
    floatEmojis: ["⚗️", "🔬", "💫"],
  },
  {
    id: 5,
    icon: "🌱",
    category: "Inclusive Education",
    heading: "Empowering Rural Potential",
    text: "We nurture talent from every background, providing accessible education that transforms lives and uplifts communities.",
    emojiArt: "🌱",
    gradientFrom: "#2d6e2d",
    gradientMid: "#1a3f1a",
    gradientTo: "#081508",
    accentColor: "#86efac",
    floatEmojis: ["🌻", "🌾", "✨"],
  },
  {
    id: 6,
    icon: "🏫",
    category: "Academic Excellence",
    heading: "Rooted in Values, Focused on Growth",
    text: "With a strong academic foundation and disciplined environment, we shape responsible and future-ready individuals.",
    emojiArt: "🏛️",
    gradientFrom: "#6e2e12",
    gradientMid: "#3d1808",
    gradientTo: "#180a02",
    accentColor: "#fbbf24",
    floatEmojis: ["📜", "🏆", "🌟"],
  },
  {
    id: 7,
    icon: "🎉",
    category: "Campus Events",
    heading: "Beyond Academics, Beyond Boundaries",
    text: "Cultural events, sports, and activities create a vibrant campus life that encourages creativity and self-expression.",
    emojiArt: "🎉",
    gradientFrom: "#126e80",
    gradientMid: "#083d4a",
    gradientTo: "#021820",
    accentColor: "#22d3ee",
    floatEmojis: ["🎨", "🎭", "💃"],
  },
  {
    id: 8,
    icon: "📚",
    category: "Daily Progress",
    heading: "Every Day is a Step Forward",
    text: "Through continuous learning and guidance, students progress steadily toward their academic and personal goals.",
    emojiArt: "📚",
    gradientFrom: "#4e2a80",
    gradientMid: "#2d1252",
    gradientTo: "#120820",
    accentColor: "#c084fc",
    floatEmojis: ["📝", "🎯", "⭐"],
  },
];

const AUTOPLAY_MS = 5500;

const slideVariants = {
  enter: (dir) => ({
    x: dir > 0 ? "100%" : "-100%",
    opacity: 0,
    scale: 1.04,
  }),
  center: {
    x: 0,
    opacity: 1,
    scale: 1,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  },
  exit: (dir) => ({
    x: dir > 0 ? "-100%" : "100%",
    opacity: 0,
    scale: 0.97,
    transition: { duration: 0.72, ease: [0.16, 1, 0.3, 1] },
  }),
};

const stagger = (i) => ({
  hidden: { opacity: 0, y: 22 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { delay: 0.08 + i * 0.1, duration: 0.48, ease: "easeOut" },
  },
});

export default function Gallery() {
  const sectionRef = useRef(null);
  const inView = useInView(sectionRef, { once: true, margin: "-80px" });
  const [current, setCurrent] = useState(0);
  const [direction, setDirection] = useState(1);
  const [locked, setLocked] = useState(false);
  const [progress, setProgress] = useState(0);
  const rafRef = useRef(null);
  const startRef = useRef(Date.now());

  const goTo = useCallback(
    (idx, dir) => {
      if (locked) return;
      setLocked(true);
      setDirection(dir);
      setCurrent(idx);
      setProgress(0);
      startRef.current = Date.now();
    },
    [locked]
  );

  const next = useCallback(
    () => goTo((current + 1) % slides.length, 1),
    [current, goTo]
  );
  const prev = useCallback(
    () => goTo((current - 1 + slides.length) % slides.length, -1),
    [current, goTo]
  );

  useEffect(() => {
    const tick = () => {
      const p = Math.min((Date.now() - startRef.current) / AUTOPLAY_MS, 1);
      setProgress(p * 100);
      if (p >= 1) {
        setCurrent((c) => (c + 1) % slides.length);
        setDirection(1);
        setProgress(0);
        startRef.current = Date.now();
      }
      rafRef.current = requestAnimationFrame(tick);
    };
    rafRef.current = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(rafRef.current);
  }, []);

  const slide = slides[current];

  return (
    <section className="glry-section" id="gallery" ref={sectionRef}>
      {/* ── Header ── */}
      <motion.div
        className="glry-header"
        initial={{ opacity: 0, y: 32 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.65 }}
      >
        <div className="glry-pill">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
            <circle cx="12" cy="13" r="4" />
          </svg>
          Photo Gallery
        </div>
        <h2 className="glry-title">
          Life at <em>SRJ</em>
        </h2>
        <p className="glry-sub">
          Snapshots of learning, growth, and togetherness that define the SRJ
          experience every day.
        </p>
        <div className="glry-rule" />
      </motion.div>

      {/* ── Carousel ── */}
      <motion.div
        className="glry-carousel-wrap"
        initial={{ opacity: 0, y: 48 }}
        animate={inView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, delay: 0.2 }}
      >
        {/* Progress bar */}
        <div className="glry-progress-track">
          <div
            className="glry-progress-fill"
            style={{
              width: `${progress}%`,
              background: slide.accentColor,
              transition: "width 0.1s linear",
            }}
          />
        </div>

        <div className="glry-carousel">
          {/* ── Left: Visual Area ── */}
          <div className="glry-visual">
            <AnimatePresence
              initial={false}
              custom={direction}
              onExitComplete={() => setLocked(false)}
            >
              <motion.div
                key={current}
                className="glry-slide-bg"
                custom={direction}
                variants={slideVariants}
                initial="enter"
                animate="center"
                exit="exit"
                style={{
                  background: `radial-gradient(ellipse at 38% 55%, ${slide.gradientFrom} 0%, ${slide.gradientMid} 48%, ${slide.gradientTo} 100%)`,
                }}
              >
                {/* Concentric rings */}
                <div
                  className="glry-ring glry-ring--a"
                  style={{ borderColor: `${slide.accentColor}18` }}
                />
                <div
                  className="glry-ring glry-ring--b"
                  style={{ borderColor: `${slide.accentColor}10` }}
                />
                <div
                  className="glry-ring glry-ring--c"
                  style={{ borderColor: `${slide.accentColor}07` }}
                />

                {/* Dot-grid texture */}
                <div className="glry-dots-grid" />

                {/* Glow spot */}
                <div
                  className="glry-glow"
                  style={{
                    background: `radial-gradient(circle, ${slide.accentColor}22 0%, transparent 70%)`,
                  }}
                />

                {/* Main emoji */}
                <div className="glry-emoji-stage">
                  <motion.span
                    className="glry-emoji-main"
                    key={`main-${current}`}
                    initial={{ scale: 0.55, opacity: 0, rotate: -8 }}
                    animate={{ scale: 1, opacity: 1, rotate: 0 }}
                    transition={{
                      delay: 0.18,
                      duration: 0.7,
                      ease: [0.16, 1, 0.3, 1],
                    }}
                  >
                    {slide.emojiArt}
                  </motion.span>

                  {slide.floatEmojis.map((e, i) => (
                    <motion.span
                      key={`fe-${i}`}
                      className={`glry-float-emoji glry-float-emoji--${i}`}
                      initial={{ opacity: 0, scale: 0.4 }}
                      animate={{ opacity: 0.55, scale: 1 }}
                      transition={{ delay: 0.35 + i * 0.12, duration: 0.5 }}
                    >
                      {e}
                    </motion.span>
                  ))}
                </div>

                {/* Watermark */}
                <div className="glry-watermark">SRJ College</div>

                {/* Slide number badge */}
                <div
                  className="glry-badge"
                  style={{
                    background: `${slide.accentColor}22`,
                    borderColor: `${slide.accentColor}44`,
                    color: slide.accentColor,
                  }}
                >
                  {String(current + 1).padStart(2, "0")} /{" "}
                  {String(slides.length).padStart(2, "0")}
                </div>
              </motion.div>
            </AnimatePresence>

            {/* Arrows */}
            <button
              className="glry-arrow glry-arrow--prev"
              onClick={prev}
              aria-label="Previous slide"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="15 18 9 12 15 6" />
              </svg>
            </button>
            <button
              className="glry-arrow glry-arrow--next"
              onClick={next}
              aria-label="Next slide"
            >
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="9 18 15 12 9 6" />
              </svg>
            </button>
          </div>

          {/* ── Right: Info Panel ── */}
          <div className="glry-panel">
            {/* Decorative panel bg element */}
            <div
              className="glry-panel-glow"
              style={{
                background: `radial-gradient(circle at top right, ${slide.accentColor}14 0%, transparent 65%)`,
              }}
            />

            <AnimatePresence mode="wait">
              <motion.div
                key={`panel-${current}`}
                className="glry-panel-content"
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                exit={{ opacity: 0 }}
                transition={{ duration: 0.25 }}
              >
                {/* Icon */}
                <motion.div
                  className="glry-icon-box"
                  variants={stagger(0)}
                  initial="hidden"
                  animate="visible"
                  style={{
                    background: `${slide.accentColor}18`,
                    borderColor: `${slide.accentColor}38`,
                  }}
                >
                  <span className="glry-icon">{slide.icon}</span>
                </motion.div>

                {/* Category */}
                <motion.p
                  className="glry-category"
                  variants={stagger(1)}
                  initial="hidden"
                  animate="visible"
                  style={{ color: slide.accentColor }}
                >
                  {slide.category}
                </motion.p>

                {/* Heading */}
                <motion.h3
                  className="glry-heading"
                  variants={stagger(2)}
                  initial="hidden"
                  animate="visible"
                >
                  {slide.heading}
                </motion.h3>

                {/* Accent rule */}
                <motion.div
                  className="glry-accent-rule"
                  variants={stagger(3)}
                  initial="hidden"
                  animate="visible"
                  style={{ background: slide.accentColor }}
                />

                {/* Body text */}
                <motion.p
                  className="glry-body"
                  variants={stagger(4)}
                  initial="hidden"
                  animate="visible"
                >
                  {slide.text}
                </motion.p>

                {/* Footer: counter + dots */}
                <motion.div
                  className="glry-footer"
                  variants={stagger(5)}
                  initial="hidden"
                  animate="visible"
                >
                  <div className="glry-counter">
                    <span
                      className="glry-counter-curr"
                      style={{ color: slide.accentColor }}
                    >
                      {String(current + 1).padStart(2, "0")}
                    </span>
                    <span className="glry-counter-sep">/</span>
                    <span className="glry-counter-total">
                      {String(slides.length).padStart(2, "0")}
                    </span>
                  </div>

                  <div className="glry-dots">
                    {slides.map((_, i) => (
                      <button
                        key={i}
                        className={`glry-dot ${i === current ? "glry-dot--active" : ""}`}
                        onClick={() => goTo(i, i >= current ? 1 : -1)}
                        aria-label={`Go to slide ${i + 1}`}
                        style={
                          i === current
                            ? { background: slide.accentColor }
                            : {}
                        }
                      />
                    ))}
                  </div>
                </motion.div>
              </motion.div>
            </AnimatePresence>
          </div>
        </div>

        {/* ── Thumbnail strip ── */}
        <div className="glry-thumbs">
          {slides.map((s, i) => (
            <button
              key={s.id}
              className={`glry-thumb ${i === current ? "glry-thumb--active" : ""}`}
              onClick={() => goTo(i, i >= current ? 1 : -1)}
              aria-label={s.category}
              style={
                i === current
                  ? {
                      background: `linear-gradient(135deg, ${s.gradientFrom}, ${s.gradientTo})`,
                      borderColor: s.accentColor,
                      boxShadow: `0 0 0 2px ${s.accentColor}55`,
                    }
                  : {
                      background: `linear-gradient(135deg, ${s.gradientFrom}88, ${s.gradientTo}88)`,
                    }
              }
            >
              <span className="glry-thumb-emoji">{s.emojiArt}</span>
              <span className="glry-thumb-label">{s.category}</span>
            </button>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
