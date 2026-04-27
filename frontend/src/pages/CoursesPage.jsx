{/*
  import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiClock, FiUsers, FiX } from "react-icons/fi";
import "./CoursesPage.css";

const courses = [
  { id: "ba-political-science", name: "B.A Honours (Political Science)", duration: "3 Years", seats: 30, medium: "English", dept: "Political Science", highlights: ["UGC Approved", "Experienced Faculty", "Research Opportunities"] },
  { id: "bcom-general", name: "B.Com Honours (General)", duration: "3 Years", seats: 60, medium: "English", dept: "Commerce", highlights: ["Industry Oriented", "Placement Support", "Accounting Standards"] },
  { id: "ba-telugu", name: "B.A Honours (Special Telugu)", duration: "3 Years", seats: 30, medium: "Telugu", dept: "Telugu", highlights: ["Regional Focus", "Cultural Studies", "Literature"] },
  { id: "ba-economics", name: "B.A Honours (Economics)", duration: "3 Years", seats: 30, medium: "English", dept: "Economics", highlights: ["Data Analytics", "Research Focus", "Policy Analysis"] },
  { id: "ba-history", name: "B.A Honours (History)", duration: "3 Years", seats: 30, medium: "English", dept: "History", highlights: ["Archival Research", "Heritage Studies", "Ancient Civilizations"] },
  { id: "bcom-computer-apps", name: "B.Com Honours (Computer Applications)", duration: "3 Years", seats: 40, medium: "English", dept: "Commerce", highlights: ["Tally ERP", "Advanced Excel", "Database Management"] },
  { id: "bsc-computer-science", name: "B.Sc Honours (Computer Science)", duration: "3 Years", seats: 20, medium: "English", dept: "Computer Science", highlights: ["AI/ML", "Full Stack Development", "Cloud Computing"] },
  { id: "bsc-dairy-science", name: "B.Sc Honours (Dairy Science)", duration: "3 Years", seats: 30, medium: "English", dept: "Dairy Science", highlights: ["Dairy Processing", "Quality Control", "Animal Nutrition"] },
  { id: "bsc-statistics", name: "B.Sc Honours (Statistics)", duration: "3 Years", seats: 20, medium: "English", dept: "Statistics", highlights: ["Data Science", "R Programming", "Statistical Modeling"] },
  { id: "bsc-biotech", name: "B.Sc Honours (Biotechnology)", duration: "3 Years", seats: 25, medium: "English", dept: "Bio-Technology", highlights: ["Genetic Engineering", "Microbiology", "Molecular Biology"] },
  { id: "bsc-food-science", name: "B.Sc Honours (Food Science & Technology)", duration: "3 Years", seats: 30, medium: "English", dept: "Food Science", highlights: ["Food Safety", "Nutrition", "Food Processing"] },
  { id: "bsc-chemistry", name: "B.Sc Honours (Chemistry)", duration: "3 Years", seats: 25, medium: "English", dept: "Chemistry", highlights: ["Organic Synthesis", "Lab Research", "Analytical Chemistry"] },
  { id: "bvoc-dairy-tech", name: "B.Voc Honours (Dairy Technology)", duration: "3 Years", seats: 30, medium: "English", dept: "Dairy Science", highlights: ["Skill Based", "Industry Ready", "Vocational Training"] },
  { id: "bsc-cloud-computing", name: "B.Sc Honours (Cloud Computing)", duration: "3 Years", seats: 20, medium: "English", dept: "Computer Science", highlights: ["AWS Certified", "DevOps", "Cloud Architecture"] },
  { id: "bms-ecommerce", name: "BMS Honours (E-Commerce Operations)", duration: "3 Years", seats: 60, medium: "English", dept: "Management", highlights: ["Digital Business", "Logistics", "Supply Chain"] },
  { id: "bba-digital-marketing", name: "BBA Honours (Digital Marketing)", duration: "3 Years", seats: 60, medium: "English", dept: "Management", highlights: ["SEO/SEM", "Social Media", "Analytics"] },
  { id: "bca", name: "BCA Honours", duration: "3 Years", seats: 60, medium: "English", dept: "Computer Science", highlights: ["Web Development", "App Development", "Database Systems"] },
  { id: "bca-ai", name: "BCA Honours (Artificial Intelligence)", duration: "3 Years", seats: 60, medium: "English", dept: "Computer Science", highlights: ["Machine Learning", "Deep Learning", "Neural Networks"] }
];

const containerVariants = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.12 } },
};

const cardVariants = {
  hidden: { opacity: 0, y: 40, scale: 0.97 },
  visible: { opacity: 1, y: 0, scale: 1, transition: { duration: 0.55, ease: "easeOut" } },
};

export default function CoursesPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCourse, setSelectedCourse] = useState(null);

  const closeModal = () => setSelectedCourse(null);

  const handleLearnMore = (course) => {
    setSelectedCourse(course);
  };

  return (
    <>
      <section className="courses section section--white" id="courses" ref={ref}>
        <div className="container">
          <motion.div
            className="section-header"
            initial={{ opacity: 0, y: 20 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.5 }}
          >
            <h2 className="section-title">
              Explore Our <span>Courses</span>
            </h2>
            <div className="section-divider" />
          </motion.div>

          <motion.div
            className="courses__grid"
            variants={containerVariants}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            {courses.map((course) => (
              <motion.div
                key={course.id}
                id={course.id}
                className="course-card"
                variants={cardVariants}
                style={{ scrollMarginTop: '120px' }}
              >
                {/* Body - NO TOP SECTION *
                <div className="course-card__body">
                  <h3 className="course-card__title">{course.name}</h3>
                  
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

                  <div className="course-card__eligibility">
                    <span className="course-card__elig-label">Medium:</span>
                    <span className="course-card__elig-val">{course.medium}</span>
                  </div>

                  <ul className="course-card__highlights">
                    {course.highlights.map((h, i) => (
                      <li key={i} className="course-card__highlight">
                        <span className="course-card__highlight-dot" />
                        {h}
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Footer - ONLY Learn More *
                <div className="course-card__footer">
                  <button 
                    className="btn btn-outline-primary btn-sm course-card__learn-more" 
                    onClick={() => handleLearnMore(course)}
                  >
                    Learn More
                  </button>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Course Modal *
      {selectedCourse && (
        <motion.div
          className="course-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={closeModal}
        >
          <motion.div
            className="course-modal"
            initial={{ scale: 0.7, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            exit={{ scale: 0.7, opacity: 0, y: 20 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="course-modal__header">
              <h3>{selectedCourse.name}</h3>
              <button className="course-modal__close" onClick={closeModal}>
                <FiX size={24} />
              </button>
            </div>

            <div className="course-modal__content">
              <div className="course-modal__stats">
                <div className="stat-item">
                  <FiClock size={18} />
                  <span>{selectedCourse.duration}</span>
                </div>
                <div className="stat-item">
                  <FiUsers size={18} />
                  <span>{selectedCourse.seats} Seats</span>
                </div>
              </div>

              <div className="course-modal__details">
                <div className="detail-row">
                  <span className="detail-label">Medium of Instruction:</span>
                  <span className="detail-value">{selectedCourse.medium}</span>
                </div>
                <div className="detail-row">
                  <span className="detail-label">Department:</span>
                  <span className="detail-value">{selectedCourse.dept}</span>
                </div>
              </div>

              <div className="course-modal__highlights">
                <h4>Program Highlights</h4>
                <ul>
                  {selectedCourse.highlights.map((highlight, i) => (
                    <li key={i}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}
  */}






import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiClock, FiUsers, FiX } from "react-icons/fi";
import "./CoursesPage.css";

const courses = [
  { id: "ba-political-science", name: "B.A Honours (Political Science)", duration: "3 Years", seats: 30, medium: "English", dept: "Political Science", highlights: ["UGC Approved", "Experienced Faculty", "Research Opportunities"] },
  { id: "bcom-general", name: "B.Com Honours (General)", duration: "3 Years", seats: 60, medium: "English", dept: "Commerce", highlights: ["Industry Oriented", "Placement Support", "Accounting Standards"] },
  { id: "ba-telugu", name: "B.A Honours (Special Telugu)", duration: "3 Years", seats: 30, medium: "Telugu", dept: "Telugu", highlights: ["Regional Focus", "Cultural Studies", "Literature"] },
  { id: "ba-economics", name: "B.A Honours (Economics)", duration: "3 Years", seats: 30, medium: "English", dept: "Economics", highlights: ["Data Analytics", "Research Focus", "Policy Analysis"] },
  { id: "ba-history", name: "B.A Honours (History)", duration: "3 Years", seats: 30, medium: "English", dept: "History", highlights: ["Archival Research", "Heritage Studies", "Ancient Civilizations"] },
  { id: "bcom-computer-apps", name: "B.Com Honours (Computer Applications)", duration: "3 Years", seats: 40, medium: "English", dept: "Commerce", highlights: ["Tally ERP", "Advanced Excel", "Database Management"] },
  { id: "bsc-computer-science", name: "B.Sc Honours (Computer Science)", duration: "3 Years", seats: 20, medium: "English", dept: "Computer Science", highlights: ["AI/ML", "Full Stack Development", "Cloud Computing"] },
  { id: "bsc-dairy-science", name: "B.Sc Honours (Dairy Science)", duration: "3 Years", seats: 30, medium: "English", dept: "Dairy Science", highlights: ["Dairy Processing", "Quality Control", "Animal Nutrition"] },
  { id: "bsc-statistics", name: "B.Sc Honours (Statistics)", duration: "3 Years", seats: 20, medium: "English", dept: "Statistics", highlights: ["Data Science", "R Programming", "Statistical Modeling"] },
  { id: "bsc-biotech", name: "B.Sc Honours (Biotechnology)", duration: "3 Years", seats: 25, medium: "English", dept: "Bio-Technology", highlights: ["Genetic Engineering", "Microbiology", "Molecular Biology"] },
  { id: "bsc-food-science", name: "B.Sc Honours (Food Science & Technology)", duration: "3 Years", seats: 30, medium: "English", dept: "Food Science", highlights: ["Food Safety", "Nutrition", "Food Processing"] },
  { id: "bsc-chemistry", name: "B.Sc Honours (Chemistry)", duration: "3 Years", seats: 25, medium: "English", dept: "Chemistry", highlights: ["Organic Synthesis", "Lab Research", "Analytical Chemistry"] },
  { id: "bvoc-dairy-tech", name: "B.Voc Honours (Dairy Technology)", duration: "3 Years", seats: 30, medium: "English", dept: "Dairy Science", highlights: ["Skill Based", "Industry Ready", "Vocational Training"] },
  { id: "bsc-cloud-computing", name: "B.Sc Honours (Cloud Computing)", duration: "3 Years", seats: 20, medium: "English", dept: "Computer Science", highlights: ["AWS Certified", "DevOps", "Cloud Architecture"] },
  { id: "bms-ecommerce", name: "BMS Honours (E-Commerce Operations)", duration: "3 Years", seats: 60, medium: "English", dept: "Management", highlights: ["Digital Business", "Logistics", "Supply Chain"] },
  { id: "bba-digital-marketing", name: "BBA Honours (Digital Marketing)", duration: "3 Years", seats: 60, medium: "English", dept: "Management", highlights: ["SEO/SEM", "Social Media", "Analytics"] },
  { id: "bca", name: "BCA Honours", duration: "3 Years", seats: 60, medium: "English", dept: "Computer Science", highlights: ["Web Development", "App Development", "Database Systems"] },
  { id: "bca-ai", name: "BCA Honours (Artificial Intelligence)", duration: "3 Years", seats: 60, medium: "English", dept: "Computer Science", highlights: ["Machine Learning", "Deep Learning", "Neural Networks"] }
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.06,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.4, ease: "easeOut" },
  },
};

export default function CoursesPage() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [selectedCourse, setSelectedCourse] = useState(null);

  const closeModal = () => setSelectedCourse(null);

  return (
    <>
      <main className="courses-page">
        <section className="courses-hero">
          <div className="courses-container">
            <p className="courses-hero__eyebrow">Courses</p>
            <h1 className="courses-hero__title">Undergraduate Programs</h1>
            <p className="courses-hero__text">
              Dr. SRJ Degree College offers undergraduate programs across arts,
              commerce, science, technology, and management to support academic
              excellence and career readiness.
            </p>
          </div>
        </section>

        <section className="courses-listing" ref={ref}>
          <div className="courses-container">
            <div className="courses-listing__intro">
              <h2>Course Catalog</h2>
              <p>
                Explore the available degree programs, duration, seat intake,
                and medium of instruction.
              </p>
            </div>

            <motion.div
              className="courses-grid"
              variants={containerVariants}
              initial="hidden"
              animate={inView ? "visible" : "hidden"}
            >
              {courses.map((course) => (
                <motion.article
                  key={course.id}
                  id={course.id}
                  className="course-item"
                  variants={cardVariants}
                  style={{ scrollMarginTop: "120px" }}
                >
                  <div className="course-item__main">
                    <p className="course-item__dept">{course.dept}</p>
                    <h3 className="course-item__title">{course.name}</h3>

                    <div className="course-item__meta">
                      <span><FiClock size={14} /> {course.duration}</span>
                      <span><FiUsers size={14} /> {course.seats} Seats</span>
                      <span>Medium: {course.medium}</span>
                    </div>

                    <ul className="course-item__highlights">
                      {course.highlights.map((highlight) => (
                        <li key={highlight}>{highlight}</li>
                      ))}
                    </ul>
                  </div>

                  <div className="course-item__action">
                    <button
                      className="course-item__button"
                      onClick={() => setSelectedCourse(course)}
                    >
                      View Details
                    </button>
                  </div>
                </motion.article>
              ))}
            </motion.div>
          </div>
        </section>
      </main>

      {selectedCourse && (
        <motion.div
          className="course-modal-overlay"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          onClick={closeModal}
        >
          <motion.div
            className="course-modal"
            initial={{ opacity: 0, y: 20, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            onClick={(e) => e.stopPropagation()}
          >
            <div className="course-modal__header">
              <div>
                <p className="course-modal__dept">{selectedCourse.dept}</p>
                <h3>{selectedCourse.name}</h3>
              </div>

              <button
                className="course-modal__close"
                onClick={closeModal}
                aria-label="Close modal"
              >
                <FiX size={20} />
              </button>
            </div>

            <div className="course-modal__body">
              <div className="course-modal__meta">
                <div className="course-modal__meta-row">
                  <span className="label">Duration</span>
                  <span className="value">{selectedCourse.duration}</span>
                </div>
                <div className="course-modal__meta-row">
                  <span className="label">Seats</span>
                  <span className="value">{selectedCourse.seats}</span>
                </div>
                <div className="course-modal__meta-row">
                  <span className="label">Medium</span>
                  <span className="value">{selectedCourse.medium}</span>
                </div>
                <div className="course-modal__meta-row">
                  <span className="label">Department</span>
                  <span className="value">{selectedCourse.dept}</span>
                </div>
              </div>

              <div className="course-modal__highlights">
                <h4>Program Highlights</h4>
                <ul>
                  {selectedCourse.highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}