import "./AdmissionsPage.css";
import {
  FiArrowRight,
  FiDownload,
  FiCheckSquare,
  FiEdit3,
  FiUpload,
  FiUsers,
  FiAward,
  FiCalendar,
  FiClock,
  FiFileText,
  FiCreditCard,
  FiInfo,
  FiCheck,
  FiBookOpen,
  FiBarChart2,
  FiCpu,
  FiBriefcase,
  FiGrid,
} from "react-icons/fi";

const processSteps = [
  {
    no: "01",
    icon: <FiCheckSquare />,
    title: "Check Eligibility",
    text: "Ensure you meet the eligibility criteria for your desired course.",
  },
  {
    no: "02",
    icon: <FiEdit3 />,
    title: "Fill Application",
    text: "Complete the online application form with accurate details.",
  },
  {
    no: "03",
    icon: <FiUpload />,
    title: "Submit Documents",
    text: "Upload the required documents and submit your form.",
  },
  {
    no: "04",
    icon: <FiUsers />,
    title: "Verification",
    text: "Your application will be verified by our admission committee.",
  },
  {
    no: "05",
    icon: <FiAward />,
    title: "Confirmation",
    text: "Once selected, confirm your admission and complete enrollment.",
  },
];

const importantInfo = [
  ["Academic Session", "2026 - 2027"],
  ["Application Start Date", "01 May 2026"],
  ["Last Date to Apply", "30 Jul 2026"],
  ["Classes Commence", "01 Aug 2026"],
  ["Mode of Application", "Online / Offline"],
  ["Application Fee", "Free of Cost"],
];

const documents = [
  "SSC / 10th Class Marks Memo",
  "Intermediate / 12th Marks Memo",
  "Transfer Certificate (TC)",
  "Caste Certificate (if applicable)",
  "Aadhaar Card",
  "Passport Size Photographs",
  "Other Certificates (if applicable)",
];

const courseGroups = [
  {
    icon: <FiBookOpen />,
    iconClass: "ad-course__icon--gold",
    title: "B.A.",
    items: ["History", "Economics", "Political Science", "English"],
  },
  {
    icon: <FiBarChart2 />,
    iconClass: "ad-course__icon--blue",
    title: "B.Com.",
    items: ["General", "Computer Applications", "Taxation"],
  },
  {
    icon: <FiCpu />,
    iconClass: "ad-course__icon--purple",
    title: "B.Sc.",
    items: ["Mathematics", "Physics", "Chemistry", "Botany / Zoology"],
  },
  {
    icon: <FiBriefcase />,
    iconClass: "ad-course__icon--green",
    title: "BBA",
    items: ["Business Management", "Finance", "Marketing"],
  },
  {
    icon: <FiGrid />,
    iconClass: "ad-course__icon--indigo",
    title: "Other Programs",
    items: ["Add-on Courses", "Value Added Courses", "Certificate Programs"],
  },
];

export default function AdmissionsPage() {
  return (
    <main className="admissions-page">
      <section className="ad-hero">
        <div className="ad-container">
          <div className="ad-hero__grid">
            <div className="ad-hero__content">
              {/*<span className="ad-badge">Admissions</span>*/}
              <h1 className="ad-hero__title">
                Begin Your Journey <br />
                <span>at Dr. S R J</span>
              </h1>
              <p className="ad-hero__text">
                Take the first step towards a brighter future. Quality education,
                guidance, and opportunities await you at Dr. S R J Degree College.
              </p>

              <div className="ad-hero__actions">
                <a href="#admission-process" className="ad-btn ad-btn--primary">
                  Apply Now <FiArrowRight />
                </a>
                <a href="/" className="ad-btn ad-btn--secondary">
                  Download Prospectus <FiDownload />
                </a>
              </div>
            </div>

            <div className="ad-hero__visual">
              <div className="ad-hero__imageWrap">
                <img
                  src="/images/campus.jpg"
                  alt="Dr. S R J Degree College building"
                  className="ad-hero__image"
                />
                <div className="ad-hero__featureBar">
                  <div className="ad-hero__feature">
                    <span>🏛</span>
                    <p>Government Aided Institution</p>
                  </div>
                  <div className="ad-hero__feature">
                    <span>⚓</span>
                    <p>Affordable Education</p>
                  </div>
                  <div className="ad-hero__feature">
                    <span>♡</span>
                    <p>Quality Teaching</p>
                  </div>
                  <div className="ad-hero__feature">
                    <span>⚙</span>
                    <p>Holistic Development</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section id="admission-process" className="ad-process">
        <div className="ad-container">
          <div className="ad-panel">
            <div className="ad-sectionTitle">
              <h2>Admission Process</h2>
              <span />
            </div>

            <div className="ad-process__timeline">
              {processSteps.map((step, index) => (
                <div key={step.no} className="ad-step">
                  <div className="ad-step__top">
                    <div className="ad-step__icon">{step.icon}</div>
                    {index !== processSteps.length - 1 && (
                      <div className="ad-step__line" />
                    )}
                  </div>
                  <div className="ad-step__body">
                    <span className="ad-step__no">{step.no}</span>
                    <h3>{step.title}</h3>
                    <p>{step.text}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="ad-info">
        <div className="ad-container">
          <div className="ad-info__grid">
            <div className="ad-card">
              <div className="ad-sectionTitle ad-sectionTitle--left">
                <h2>Important Information</h2>
                <span />
              </div>

              <div className="ad-infoList">
                {importantInfo.map(([label, value]) => (
                  <div key={label} className="ad-infoList__row">
                    <div className="ad-infoList__left">
                      <span className="ad-infoList__icon">
                        {label.includes("Session") && <FiCalendar />}
                        {label.includes("Start") && <FiCalendar />}
                        {label.includes("Apply") && !label.includes("Start") && <FiClock />}
                        {label.includes("Commence") && <FiCalendar />}
                        {label.includes("Mode") && <FiFileText />}
                        {label.includes("Fee") && <FiCreditCard />}
                      </span>
                      <span>{label}</span>
                    </div>
                    <strong>{value}</strong>
                  </div>
                ))}
              </div>

              <div className="ad-note">
                <FiInfo />
                <p>
                  <strong>Note:</strong> Dates are subject to change. Please
                  check the latest updates on the website regularly.
                </p>
              </div>
            </div>

            <div className="ad-card">
              <div className="ad-sectionTitle ad-sectionTitle--left">
                <h2>Documents Required</h2>
                <span />
              </div>

              <ul className="ad-docs">
                {documents.map((item) => (
                  <li key={item}>
                    <FiCheck />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>

              <a href="/" className="ad-btn ad-btn--tertiary">
                View All Details <FiArrowRight />
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="ad-courses">
        <div className="ad-container">
          <div className="ad-sectionTitle">
            <h2>Courses Offered</h2>
            <span />
          </div>

          <div className="ad-courses__grid">
            {courseGroups.map((course) => (
              <article key={course.title} className="ad-course">
                <div className={`ad-course__icon ${course.iconClass}`}>
                  {course.icon}
                </div>
                <h3>{course.title}</h3>
                <ul>
                  {course.items.map((item) => (
                    <li key={item}>{item}</li>
                  ))}
                </ul>
                <a href="/courses" className="ad-course__link">
                  View Details <FiArrowRight />
                </a>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="ad-cta">
        <div className="ad-container">
          <div className="ad-cta__inner">
            <div className="ad-cta__left">
              <div className="ad-cta__icon">🎓</div>
              <div>
                <h2>Ready to take the next step?</h2>
                <p>
                  Join SRJ Degree College and build a strong foundation for your
                  future.
                </p>
              </div>
            </div>

            <div className="ad-cta__right">
              <a href="#admission-process" className="ad-btn ad-btn--gold">
                Apply Now <FiArrowRight />
              </a>
              <p>
                Need help? <a href="/">Contact Admissions Office</a>
              </p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
