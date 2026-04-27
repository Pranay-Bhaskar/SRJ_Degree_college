{/* 
import { useState, useEffect, useRef } from "react";
import { Link, useLocation } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiPhone, FiMail, FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from "react-icons/fi";
import { collegeInfo } from "../data/mockData";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  {
    label: "Courses",
    href: "/#courses",
    dropdown: [
      { label: "BA Telugu (Aided)", href: "/#courses" },
      { label: "B.Sc Dairy Science", href: "/#courses" },
      { label: "B.Sc Food Science & Technology", href: "/#courses" },
      { label: "BCA", href: "/#courses" },
      { label: "B.Com", href: "/#courses" },
    ],
  },
  { label: "Admissions", href: "/#admissions" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Faculty", href: "/#management" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Placements", href: "/#placements" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar({ theme, toggleTheme }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <>
      {/* Top Info Bar 
       <div className="topbar">
        <div className="topbar__inner">
          <div className="topbar__contact">
            <a href={`tel:${collegeInfo.phone[0]}`} className="topbar__item">
              <FiPhone size={13} />
              <span>{collegeInfo.phone[0]}</span>
            </a>
            <span className="topbar__sep">|</span>
            <a href={`mailto:${collegeInfo.email}`} className="topbar__item">
              <FiMail size={13} />
              <span>{collegeInfo.email}</span>
            </a>
          </div>
          <div className="topbar__affiliation">
            <span>Affiliated to </span>
            <a href="https://vsu.ac.in" target="_blank" rel="noreferrer">
              Vikrama Simhapuri University
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar 
      <motion.header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar__inner">
          {/* Logo *
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <img src="/SRJ.svg" alt="SRJ College Logo" className="logo-img" />
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Dr. SRJ Degree College</span>
              <span className="navbar__logo-tagline">{collegeInfo.tagline}</span>
            </div>
          </Link>

          {/* Desktop Nav Links *
          <nav className="navbar__links" ref={dropdownRef}>
            {navLinks.map((link) => (
              <div
                key={link.label}
                className="navbar__link-wrap"
                onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
                onMouseLeave={() => setActiveDropdown(null)}
              >
                <a
                  href={link.href}
                  className="navbar__link"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                  {link.dropdown && <FiChevronDown className={`navbar__chevron ${activeDropdown === link.label ? "open" : ""}`} />}
                </a>
                {link.dropdown && (
                  <AnimatePresence>
                    {activeDropdown === link.label && (
                      <motion.div
                        className="navbar__dropdown"
                        initial={{ opacity: 0, y: 8 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 8 }}
                        transition={{ duration: 0.18 }}
                      >
                        {link.dropdown.map((item) => (
                          <a
                            key={item.label}
                            href={item.href}
                            className="navbar__dropdown-item"
                            onClick={(e) => handleSmoothScroll(e, item.href)}
                          >
                            {item.label}
                          </a>
                        ))}
                      </motion.div>
                    )}
                  </AnimatePresence>
                )}
              </div>
            ))}
          </nav>

          {/* CTA Buttons + Theme Toggle *
          <div className="navbar__actions">
            <button className="navbar__theme-btn" onClick={toggleTheme} title="Toggle Dark Mode">
              {theme === "dark" ? <FiSun /> : <FiMoon />}
            </button>
            <a
              href="/#admissions"
              className="btn btn-accent btn-sm"
              onClick={(e) => handleSmoothScroll(e, "/#admissions")}
            >
              Apply Now
            </a>
            <a
              href="/#contact"
              className="btn btn-primary btn-sm"
              onClick={(e) => handleSmoothScroll(e, "/#contact")}
            >
              Contact
            </a>
          </div>

          {/* Mobile Hamburger *
          <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu *
        <AnimatePresence>
          {mobileOpen && (
            <motion.div
              className="navbar__mobile"
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
            >
              {navLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  className="navbar__mobile-link"
                  onClick={(e) => handleSmoothScroll(e, link.href)}
                >
                  {link.label}
                </a>
              ))}
              <div className="navbar__mobile-ctas">
                <a href="/#admissions" className="btn btn-accent" onClick={(e) => handleSmoothScroll(e, "/#admissions")}>Apply Now</a>
                <a href="/#contact" className="btn btn-primary" onClick={(e) => handleSmoothScroll(e, "/#contact")}>Contact Us</a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
*/}





{/*  
import { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { FiMenu, FiX, FiChevronDown, FiSun, FiMoon } from "react-icons/fi";
import { collegeInfo } from "../data/mockData";
import "./Navbar.css";

const navLinks = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/#about" },
  {
    label: "Courses",
    href: "/#courses",
    dropdown: [
      { label: "BA Telugu (Aided)", href: "/#courses" },
      { label: "B.Sc Dairy Science", href: "/#courses" },
      { label: "B.Sc Food Science & Technology", href: "/#courses" },
      { label: "BCA", href: "/#courses" },
      { label: "B.Com", href: "/#courses" },
    ],
  },
  {
    label: "Examinations",
    href: "/#examinations",
    dropdown: [
      { label: "Notifications", href: "/#notifications" },
      { label: "Orders & Circulars", href: "/#orders" },
      { label: "Downloads", href: "/#downloads" },
    ],
  },
  { label: "Admissions", href: "/#admissions" },
  { label: "Facilities", href: "/#facilities" },
  { label: "Faculty", href: "/#management" },
  { label: "Gallery", href: "/#gallery" },
  { label: "Placements", href: "/#placements" },
  { label: "Contact", href: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 60);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const handleSmoothScroll = (e, href) => {
    if (href.startsWith("/#")) {
      e.preventDefault();
      const id = href.replace("/#", "");
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
      setMobileOpen(false);
    }
  };

  return (
    <motion.header
      className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5, ease: "easeOut" }}
    >
      {/* Brand Section *
      <div className="navbar__brand">
        <div className="navbar__logo-block">
          <img src="/SRJ.svg" alt="SRJ College Logo" className="college-logo" />
          <div className="college-text">
            <h1 className="college-name">Dr. S R J Degree College</h1>
            <p className="college-tagline">Empowering Rural Youth Through Quality Education</p> 
            <p className="college-accreditation">
              Affiliated to Vikrama Simhapuri University · Atmakur, Nellore, Andhra Pradesh
            </p>
          </div>
        </div>
        <div className="navbar__badges">
          <img src="/vsu_logo.png" alt="Affiliated" className="badge" />
          <img src="/AICTE.svg.png" alt="AICTE Badge" className="badge" />
          <img src="/APSCHE.svg" alt="APSCHE Badge" className="badge" />
        </div>
      </div>

      {/* Navigation Section *
      <div className="navbar__nav">
        <nav className="navbar__links" ref={dropdownRef}>
          {navLinks.map((link) => (
            <div
              key={link.label}
              className="navbar__link-wrap"
              onMouseEnter={() => link.dropdown && setActiveDropdown(link.label)}
              onMouseLeave={() => setActiveDropdown(null)}
            >
              <a
                href={link.href}
                className="navbar__link"
                onClick={(e) => handleSmoothScroll(e, link.href)}
              >
                {link.label}
                {link.dropdown && (
                  <FiChevronDown
                    className={`navbar__chevron ${activeDropdown === link.label ? "open" : ""}`}
                  />
                )}
              </a>
              {link.dropdown && (
                <AnimatePresence>
                  {activeDropdown === link.label && (
                    <motion.div
                      className="navbar__dropdown"
                      initial={{ opacity: 0, y: 8 }}
                      animate={{ opacity: 1, y: 0 }}
                      exit={{ opacity: 0, y: 8 }}
                      transition={{ duration: 0.18 }}
                    >
                      {link.dropdown.map((item) => (
                        <a
                          key={item.label}
                          href={item.href}
                          className="navbar__dropdown-item"
                          onClick={(e) => handleSmoothScroll(e, item.href)}
                        >
                          {item.label}
                        </a>
                      ))}
                    </motion.div>
                  )}
                </AnimatePresence>
              )}
            </div>
          ))}
        </nav>

        {/* Theme Toggle Only 
        <div className="navbar__actions">
          <button
            className="navbar__theme-btn"
            onClick={toggleTheme}
            title="Toggle Dark Mode"
          >
            {theme === "dark" ? <FiSun /> : <FiMoon />}
          </button>
        </div>*/}

        {/* Mobile Hamburger *
        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      {/* Mobile Menu *
      {mobileOpen && (
        <div className="navbar__mobile">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="navbar__mobile-link"
              onClick={(e) => handleSmoothScroll(e, link.href)}
            >
              {link.label}
            </a>
          ))}
        </div>
      )}
    </motion.header>
  );
}

*/}


import { useState, useEffect, useRef } from "react";
import { Link, NavLink, useLocation, useNavigate } from "react-router-dom";
import { AnimatePresence, motion } from "framer-motion";
import { FiMenu, FiX, FiChevronDown } from "react-icons/fi";
import "./Navbar.css";

const navLinks = [
  { label: "Home", path: "/" },
  {
    label: "About Us",
    path: "/about",
    dropdown: [
      { label: "About Us", path: "/about#about-college" },
      { label: "Principal's Message", path: "/about#principal-message" },
      { label: "Director's Message", path: "/about#director-message" },
    {/*  { label: "Vision and Mission", path: "/about#vision-mission" }, */}
    ],
  },
  {
    label: "Courses",
    path: "/courses",
    dropdown: [
      { label: "All Courses", path: "/courses" },
      { label: "B.A Honours (Political Science)", path: "/courses#ba-political-science" },
      { label: "B.Com Honours (General)", path: "/courses#bcom-general" },
      { label: "B.A Honours (Special Telugu)", path: "/courses#ba-telugu" },
      { label: "B.A Honours (Economics)", path: "/courses#ba-economics" },
      { label: "B.A Honours (History)", path: "/courses#ba-history" },
      { label: "B.Com Honours (Computer Applications)", path: "/courses#bcom-computer-apps" },
      { label: "B.Sc Honours (Computer Science)", path: "/courses#bsc-computer-science" },
      { label: "B.Sc Honours (Dairy Science)", path: "/courses#bsc-dairy-science" },
      { label: "B.Sc Honours (Statistics)", path: "/courses#bsc-statistics" },
      { label: "B.Sc Honours (Biotechnology)", path: "/courses#bsc-biotech" },
      { label: "B.Sc Honours (Food Science & Technology)", path: "/courses#bsc-food-science" },
      { label: "B.Sc Honours (Chemistry)", path: "/courses#bsc-chemistry" },
      { label: "B.Voc Honours (Dairy Technology)", path: "/courses#bvoc-dairy-tech" },
      { label: "B.Sc Honours (Cloud Computing)", path: "/courses#bsc-cloud-computing" },
      { label: "BMS Honours (E-Commerce Operations)", path: "/courses#bms-ecommerce" },
      { label: "BBA Honours (Digital Marketing)", path: "/courses#bba-digital-marketing" },
      { label: "BCA Honours", path: "/courses#bca" },
      { label: "BCA Honours (Artificial Intelligence)", path: "/courses#bca-ai" },
    ],
  },
  { label: "Admissions", path: "/admissions" },
  { label: "Management", path: "/management" },
  { label: "Facilities", path: "/facilities" },
  { label: "Gallery", path: "/#gallery" },
  { label: "Placements", path: "/#placements" },
  { label: "Contact", path: "/#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState(null);
  const [hideNavbar, setHideNavbar] = useState(false);

  const dropdownRef = useRef(null);
  const lastScrollY = useRef(0);

  const location = useLocation();
  const navigate = useNavigate();

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setScrolled(currentScrollY > 60);

      if (currentScrollY <= 20) {
        setHideNavbar(false);
      } else if (currentScrollY > lastScrollY.current && currentScrollY > 120) {
        setHideNavbar(true);
        setActiveDropdown(null);
      } else if (currentScrollY < lastScrollY.current) {
        setHideNavbar(false);
      }

      lastScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const handleClickOutside = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setActiveDropdown(null);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  const scrollToSection = (sectionId) => {
    if (!sectionId) return;
    const el = document.getElementById(sectionId);
    if (el) {
      el.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  const handleHashNavigation = (e, path) => {
    e.preventDefault();

    const [pathname, hash] = path.split("#");
    const targetId = hash || "";

    if (location.pathname !== pathname) {
      navigate(pathname);
      setTimeout(() => {
        scrollToSection(targetId);
      }, 250);
    } else {
      scrollToSection(targetId);
    }

    setMobileOpen(false);
    setActiveDropdown(null);
    setHideNavbar(false);
  };

  const closeMenus = () => {
    setMobileOpen(false);
    setActiveDropdown(null);
  };

  const renderDesktopLink = (link) => {
    const hasDropdown = !!link.dropdown;
    const isHashLink = link.path.includes("#");

    return (
      <div
        key={link.label}
        className="navbar__link-wrap"
        onMouseEnter={() => hasDropdown && setActiveDropdown(link.label)}
        onMouseLeave={() => hasDropdown && setActiveDropdown(null)}
      >
        {isHashLink ? (
          <a
            href={link.path}
            className="navbar__link"
            onClick={(e) => handleHashNavigation(e, link.path)}
          >
            {link.label}
            {hasDropdown && (
              <FiChevronDown
                className={`navbar__chevron ${activeDropdown === link.label ? "open" : ""}`}
              />
            )}
          </a>
        ) : (
          <NavLink
            to={link.path}
            //new
            end={link.path === "/"}

            className="navbar__link"
            onClick={closeMenus}
          >
            {link.label}
            {hasDropdown && (
              <FiChevronDown
                className={`navbar__chevron ${activeDropdown === link.label ? "open" : ""}`}
              />
            )}
          </NavLink>
        )}

        {hasDropdown && (
          <AnimatePresence>
            {activeDropdown === link.label && !hideNavbar && (
              <motion.div
                className={`navbar__dropdown ${
                  link.label === "Courses" ? "courses-dropdown" : ""
                }`}
                initial={{ opacity: 0, y: 8 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 8 }}
                transition={{ duration: 0.18 }}
              >
                {link.dropdown.map((item) =>
                  item.path.includes("#") ? (
                    <a
                      key={item.label}
                      href={item.path}
                      className="navbar__dropdown-item"
                      onClick={(e) => handleHashNavigation(e, item.path)}
                    >
                      {item.label}
                    </a>
                  ) : (
                    <NavLink
                      key={item.label}
                      to={item.path}
                      className="navbar__dropdown-item"
                      onClick={closeMenus}
                    >
                      {item.label}
                    </NavLink>
                  )
                )}
              </motion.div>
            )}
          </AnimatePresence>
        )}
      </div>
    );
  };

  const renderMobileLink = (link) => {
    const hasDropdown = !!link.dropdown;
    const isHashLink = link.path.includes("#");

    return (
      <div key={link.label} className="navbar__mobile-item">
        {isHashLink ? (
          <a
            href={link.path}
            className="navbar__mobile-link"
            onClick={(e) => handleHashNavigation(e, link.path)}
          >
            {link.label}
          </a>
        ) : (
          <NavLink
            to={link.path}
            //new
            end={link.path === "/"}
            
            className="navbar__mobile-link"
            onClick={closeMenus}
          >
            {link.label}
          </NavLink>
        )}

        {hasDropdown && (
          <div className="navbar__mobile-dropdown">
            {link.dropdown.map((item) =>
              item.path.includes("#") ? (
                <a
                  key={item.label}
                  href={item.path}
                  className="navbar__mobile-sublink"
                  onClick={(e) => handleHashNavigation(e, item.path)}
                >
                  {item.label}
                </a>
              ) : (
                <NavLink
                  key={item.label}
                  to={item.path}
                  className="navbar__mobile-sublink"
                  onClick={closeMenus}
                >
                  {item.label}
                </NavLink>
              )
            )}
          </div>
        )}
      </div>
    );
  };

  return (
    <header className={`navbar ${scrolled ? "navbar--scrolled" : ""} ${hideNavbar ? "navbar--hidden" : ""}`}>
      <div className="navbar__brand">
        <Link to="/" className="navbar__logo-block" onClick={closeMenus}>
          <img src="/SRJ.png" alt="SRJ College Logo" className="college-logo" />

          <div className="college-text">
            <h1 className="college-name">Dr. S R J Degree College</h1>
            <p className="college-tagline">
              Empowering Rural Youth Through Quality Education
            </p>
            <p className="college-accreditation">
              Affiliated to Vikrama Simhapuri University · Atmakur, Nellore, Andhra Pradesh
            </p>
          </div>
        </Link>

        <div className="navbar__badges">
          <img src="/vsu_logo.png" alt="VSU badge" className="badge" />
          <img src="/AICTE.svg.png" alt="AICTE badge" className="badge" />
          <img src="/APSCHE.svg" alt="APSCHE badge" className="badge" />
        </div>
      </div>

      <div className="navbar__nav">
        <nav className="navbar__links" ref={dropdownRef}>
          {navLinks.map((link) => renderDesktopLink(link))}
        </nav>

        <button
          className="navbar__hamburger"
          onClick={() => setMobileOpen((prev) => !prev)}
          type="button"
          aria-label="Toggle mobile menu"
        >
          {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
        </button>
      </div>

      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            className="navbar__mobile"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.25 }}
          >
            {navLinks.map((link) => renderMobileLink(link))}
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}