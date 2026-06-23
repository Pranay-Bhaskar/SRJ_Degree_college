import {
  FiFacebook,
  FiInstagram,
  FiYoutube,
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";
import { collegeInfo, courses } from "../data/mockData";
import "./Footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  const year = new Date().getFullYear();

  const scroll = (id) => {
    const el = document.getElementById(id);
    const navbar = document.querySelector(".navbar");

    if (el) {
      const navbarHeight = navbar ? navbar.offsetHeight : 0;
      const extraGap = 20;
      const y =
        el.getBoundingClientRect().top +
        window.pageYOffset -
        navbarHeight -
        extraGap;

      window.scrollTo({
        top: y,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="footer" id="footer">
      {/* CTA Banner */}
      <div className="footer__cta-banner">
        <div className="footer__cta-content">
          <div>
            <h3>Ready to Shape Your Future?</h3>
            <p>
              Get in touch with our team to learn more about admissions and
              courses.
            </p>
          </div>

          <div className="footer__cta-btns">
            <button
              className="btn btn-outline"
              onClick={() => scroll("contact")}
            >
              Contact Us
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer */}
      <div className="footer__main">
        <div className="container footer__grid">
          {/* Brand */}
          <div className="footer__brand">
            <div className="footer__logo">
              <img
                src="/SRJ-removebg.png"
                alt="SRJ College Logo"
                className="footer__logo-img"
                style={{ height: '40px', width: 'auto', marginRight: '10px' }}
              />

              <div className="footer__logo-text">
                <span className="footer__college-name">Dr. SRJ Degree College</span>
                <p className="footer__tagline">{collegeInfo.tagline}</p>
              </div>
            </div>

            {/* <p className="footer__tagline">{collegeInfo.tagline}</p> */}

            <div className="footer__contact-mini">
              <a
                href={`tel:${collegeInfo.phone[0]}`}
                className="footer__contact-item"
              >
                <FiPhone size={13} />
                {collegeInfo.phone[0]}
              </a>

              <a
                href={`mailto:${collegeInfo.email}`}
                className="footer__contact-item"
              >
                <FiMail size={13} />
                {collegeInfo.email}
              </a>

              <span className="footer__contact-item">
                <FiMapPin size={13} />
                Atmakur, Nellore, AP 524322
              </span>
            </div>

            {/* <div className="footer__socials">
              <a
                href={collegeInfo.socialLinks.facebook}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
                aria-label="Facebook"
              >
                <FiFacebook />
              </a>

              <a
                href={collegeInfo.socialLinks.instagram}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
                aria-label="Instagram"
              >
                <FiInstagram />
              </a>

              <a
                href={collegeInfo.socialLinks.youtube}
                target="_blank"
                rel="noreferrer"
                className="footer__social"
                aria-label="YouTube"
              >
                <FiYoutube />
              </a>
            </div>*/}
          </div> 


          {/* Quick Links */}
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {[
                { label: "Home", path: "/" },
                { label: "About Us", path: "/about" },
                { label: "Courses", path: "/courses" },
                { label: "Admissions", path: "/admissions" },
                { label: "Facilities", path: "/facilities" },
                /*{ label: "Contact", path: "/contact" },*/
              ].map((l) => (
                <li key={l.label}>
                  <Link
                    to={l.path}
                    className="footer__link"
                  >
                    → {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links 
          <div className="footer__col">
            <h4 className="footer__col-title">Quick Links</h4>
            <ul className="footer__links">
              {[
                { label: "Home", id: "home" },
                { label: "About Us", id: "about" },
                { label: "Courses", id: "courses" },
                { label: "Admissions", id: "admissions" },
                { label: "Facilities", id: "facilities" },
                // { label: "Gallery", id: "gallery" },
                { label: "Contact", id: "contact" },
              ].map((l) => (
                <li key={l.label}>
                  <button
                    className="footer__link"
                    onClick={() => scroll(l.id)}
                  >
                    → {l.label}
                  </button>
                </li>
              ))}
            </ul>
          </div> */}

          {/* Courses */}
          <div className="footer__col">
            <h4 className="footer__col-title">Our Courses</h4>
            <ul className="footer__links">
              {courses.map((c) => (
                <li key={c.id}>
                  {/* Replaced button with Link to route to the courses page */}
                  <Link
                    to="/courses"
                    className="footer__link"
                  >
                    → {c.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Info */}
          <div className="footer__col">
            <h4 className="footer__col-title">Affiliation</h4>

            <p className="footer__col-text">
              Affiliated to{" "}
              <a
                href="https://vsu.ac.in"
                target="_blank"
                rel="noreferrer"
                className="footer__link-inline"
              >
                Vikrama Simhapuri University
              </a>
            </p>

            <p
              className="footer__col-text"
              style={{ marginTop: "10px" }}
            >
              Private-aided institution committed to quality rural education
              since {collegeInfo.established}.
            </p>

            <div className="footer__affiliation-badge">
              <span>🏛️ VSU Affiliated</span>
              <span>Private Aided</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="footer__bottom">
        <div className="footer__bottom-inner">
          <span>© {year} Dr. SRJ Degree College, Atmakur. All rights reserved.</span>
          <span></span>
        </div>
      </div>
    </footer>
  );
}
