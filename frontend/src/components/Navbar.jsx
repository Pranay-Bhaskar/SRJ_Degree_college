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
      {/* Top Info Bar */}
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

      {/* Main Navbar */}
      <motion.header
        className={`navbar ${scrolled ? "navbar--scrolled" : ""}`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="navbar__inner">
          {/* Logo */}
          <Link to="/" className="navbar__logo">
            <div className="navbar__logo-icon">
              <span>SRJ</span>
            </div>
            <div className="navbar__logo-text">
              <span className="navbar__logo-name">Dr. SRJ Degree College</span>
              <span className="navbar__logo-tagline">{collegeInfo.tagline}</span>
            </div>
          </Link>

          {/* Desktop Nav Links */}
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

          {/* CTA Buttons + Theme Toggle */}
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

          {/* Mobile Hamburger */}
          <button className="navbar__hamburger" onClick={() => setMobileOpen(!mobileOpen)}>
            {mobileOpen ? <FiX size={24} /> : <FiMenu size={24} />}
          </button>
        </div>

        {/* Mobile Menu */}
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
