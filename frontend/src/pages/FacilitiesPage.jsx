import "./FacilitiesPage.css";
import {
  FiHome,
  FiBookOpen,
  FiUsers,
  FiShield,
  FiArrowRight,
  FiHeadphones,
  FiMonitor,
  FiCoffee,
} from "react-icons/fi";
import { GiMicroscope, GiRunningShoe, GiDesk } from "react-icons/gi";
import { MdMeetingRoom, MdBedroomParent } from "react-icons/md";
import { PiBuildingOfficeBold } from "react-icons/pi";

const heroHighlights = [
  {
    icon: <PiBuildingOfficeBold />,
    title: "Well Maintained",
    text: "Clean, safe & student friendly infrastructure",
  },
  {
    icon: <FiBookOpen />,
    title: "Learning Focused",
    text: "Facilities designed to support academic excellence",
  },
  {
    icon: <FiUsers />,
    title: "Student Centric",
    text: "All resources aimed at holistic student growth",
  },
  {
    icon: <FiShield />,
    title: "Safe & Secure",
    text: "Ensuring a secure and disciplined campus",
  },
];

const facilities = [
  {
    title: "Classrooms",
    text: "Spacious and well-ventilated classrooms that create the perfect atmosphere for effective learning.",
    image: "/images/classroom.jpg",
    icon: <PiBuildingOfficeBold />,
    color: "fp-facility__icon--blue",
  },
  {
    title: "Library",
    text: "A rich collection of books, journals, magazines and digital resources to support academics and research.",
    image: "/images/library.jpg",
    icon: <FiBookOpen />,
    color: "fp-facility__icon--gold",
  },
  {
    title: "Laboratories",
    text: "Well-equipped labs for science and computer applications with modern instruments and tools.",
    image: "/images/laboratory.jpg",
    icon: <GiMicroscope />,
    color: "fp-facility__icon--blue",
  },
  {
    title: "Computer Lab",
    text: "Latest computers and software with internet access to enhance technical skills and knowledge.",
    image: "/images/computer-lab.jpg",
    icon: <FiMonitor />,
    color: "fp-facility__icon--gold",
  },
  {
    title: "Seminar Hall",
    text: "A modern seminar hall for conferences, workshops, guest lectures and student events.",
    image: "/images/seminar-hall.jpg",
    icon: <MdMeetingRoom />,
    color: "fp-facility__icon--blue",
  },
  {
    title: "Sports & Games",
    text: "A wide range of indoor and outdoor sports facilities to promote physical fitness and teamwork.",
    image: "/images/sports.jpg",
    icon: <GiRunningShoe />,
    color: "fp-facility__icon--gold",
  },
  {
    title: "Hostel",
    text: "Comfortable and secure hostel accommodation for boys with necessary amenities.",
    image: "/images/hostel.jpg",
    icon: <MdBedroomParent />,
    color: "fp-facility__icon--blue",
  },
  {
    title: "Canteen",
    text: "A hygienic canteen offering nutritious and affordable food for students and staff.",
    image: "/images/canteen.jpg",
    icon: <FiCoffee />,
    color: "fp-facility__icon--gold",
  },
];

const stats = [
  { icon: <PiBuildingOfficeBold />, value: "15+", label: "Classrooms", color: "fp-stat__icon--lavender" },
  { icon: <GiMicroscope />, value: "6+", label: "Laboratories", color: "fp-stat__icon--gold" },
  { icon: <FiMonitor />, value: "100+", label: "Computers", color: "fp-stat__icon--lavender" },
  { icon: <GiDesk />, value: "500+", label: "Library Books", color: "fp-stat__icon--gold" },
];

export default function FacilitiesPage() {
  return (
    <main className="facilities-page">
      <section className="fp-hero">
        <div className="fp-container">
          <div className="fp-hero__grid">
            <div className="fp-hero__content">
              {/*<span className="fp-badge">Our Facilities</span>*/}
              <h1>
                Facilities for <br />
                Learning & <span>Growth</span>
              </h1>
              <div className="fp-titleLine" />
              <p>
                We provide a supportive environment with essential facilities
                that enhance learning, innovation, and overall development of
                our students.
              </p>
            </div>

            <div className="fp-hero__cards">
              {heroHighlights.map((item) => (
                <div key={item.title} className="fp-heroCard">
                  <div className="fp-heroCard__icon">{item.icon}</div>
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fp-facilities">
        <div className="fp-container">
          <div className="fp-sectionTitle">
            <h2>Our Facilities</h2>
            <span />
          </div>

          <div className="fp-grid">
            {facilities.map((item) => (
              <article key={item.title} className="fp-facility">
                <div className="fp-facility__imageWrap">
                  <img
                    src={item.image}
                    alt={item.title}
                    className="fp-facility__image"
                  />
                </div>
                <div className={`fp-facility__icon ${item.color}`}>
                  {item.icon}
                </div>
                <div className="fp-facility__body">
                  <h3>{item.title}</h3>
                  <p>{item.text}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="fp-commitment">
        <div className="fp-container">
          <div className="fp-commitment__box">
            <div className="fp-commitment__intro">
              <div className="fp-commitment__icon">
                <PiBuildingOfficeBold />
              </div>
              <div>
                <h2>Committed to providing a better campus experience</h2>
                <p>
                  We continuously strive to improve our infrastructure and
                  facilities to support academic excellence and student
                  well-being.
                </p>
              </div>
            </div>

            <div className="fp-stats">
              {stats.map((stat) => (
                <div key={stat.label} className="fp-stat">
                  <div className={`fp-stat__icon ${stat.color}`}>{stat.icon}</div>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section className="fp-campusCta">
        <div className="fp-container">
          <div className="fp-campusCta__inner">
            <div className="fp-campusCta__left">
              <div className="fp-campusCta__icon">
                <FiHome />
              </div>
              <div>
                <h2>Come, Explore Our Campus</h2>
                <p>
                  Experience the facilities and environment that make learning
                  better every day.
                </p>
              </div>
            </div>

            <div className="fp-campusCta__right">
              <a href="/" className="fp-btn fp-btn--gold">
                Plan Your Visit <FiArrowRight />
              </a>
              <p>
                Have questions? <a href="/">Contact Us</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="fp-bottomBar">
        <div className="fp-container">
          <div className="fp-bottomBar__inner">
            <div className="fp-bottomBar__left">
              <FiHeadphones />
              <span>Need more information about our facilities?</span>
              <small>We're here to help you!</small>
            </div>

            <a href="/" className="fp-btn fp-btn--light">
              Contact Admissions Office <FiArrowRight />
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}