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
      { label: "Vision and Mission", path: "/about#vision-mission" },
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
  { label: "Facilities", path: "/#facilities" },
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