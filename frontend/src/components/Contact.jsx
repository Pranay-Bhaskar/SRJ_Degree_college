/**
 * Contact.jsx  —  SRJ Degree College
 *
 * EMAIL SETUP (frontend-only via EmailJS):
 * 1. npm install @emailjs/browser
 * 2. Sign up free at https://www.emailjs.com
 * 3. Create a Service (Gmail/SMTP) → copy Service ID
 * 4. Create an Email Template with these variables:
 *      {{from_name}}, {{from_email}}, {{phone}},
 *      {{course}}, {{message}}, {{to_name}}
 * 5. Copy your Public Key from Account → API Keys
 * 6. Replace the three constants below ↓
 */

import { useRef, useState } from "react";
import { motion, useInView } from "framer-motion";
import emailjs from "@emailjs/browser";
import {
  FiMapPin, FiPhone, FiMail, FiExternalLink,
  FiSend, FiLock, FiClock, FiArrowRight,
} from "react-icons/fi";
import {
  HiOutlineQuestionMarkCircle, HiOutlineDocumentText,
  HiOutlineMapPin, HiOutlinePhone, HiOutlineEnvelope,
  HiOutlineUser, HiOutlinePencil, HiOutlineAcademicCap,
} from "react-icons/hi2";
import { collegeInfo } from "../data/mockData";
import "./Contact.css";

/* ── EmailJS config — replace these ─────────────────── */
const EMAILJS_SERVICE_ID  = "YOUR_SERVICE_ID";
const EMAILJS_TEMPLATE_ID = "YOUR_TEMPLATE_ID";
const EMAILJS_PUBLIC_KEY  = "YOUR_PUBLIC_KEY";

/* ── Static data ──────────────────────────────────────── */
const contactDetails = [
  {
    icon:  <FiMapPin size={18} />,
    color: "navy",
    label: "Address",
    content: (
      <>
        Dr. SRJ Degree College, Atmakur,<br />
        Nellore Palem, Andhra Pradesh 524322
      </>
    ),
  },
  {
    icon:  <FiPhone size={18} />,
    color: "gold",
    label: "Phone",
    content: (
      <>
        <a href="tel:+919876543210">+91 98765 43210</a><br />
        <a href="tel:+918765432109">+91 87654 32109</a>
      </>
    ),
  },
  {
    icon:  <FiMail size={18} />,
    color: "navy",
    label: "Email",
    content: (
      <a href={`mailto:${collegeInfo.email}`}>{collegeInfo.email}</a>
    ),
  },
  {
    icon:  <FiClock size={18} />,
    color: "gold",
    label: "Working Hours",
    content: (
      <>
        Mon – Sat : 9:00 AM – 5:00 PM<br />
        (Except Public Holidays)
      </>
    ),
  },
];

const quickLinks = [
  {
    icon:  <HiOutlineQuestionMarkCircle size={22} />,
    color: "navy",
    title: "General Inquiries",
    sub:   "For any general questions about the college.",
  },
  {
    icon:  <HiOutlineDocumentText size={22} />,
    color: "gold",
    title: "Admissions Help",
    sub:   "Get guidance on courses, eligibility & admissions.",
  },
  {
    icon:  <HiOutlineMapPin size={22} />,
    color: "navy",
    title: "Visit Campus",
    sub:   "We welcome you to visit and experience our campus.",
  },
  {
    icon:  <HiOutlinePhone size={22} />,
    color: "gold",
    title: "Need Support?",
    sub:   "For any support, feel free to reach out anytime.",
  },
];

const COURSES = [
  "BA Telugu (Aided)",
  "B.Sc Dairy Science",
  "B.Sc Food Science & Technology",
  "BCA",
  "B.Com",
];

const INIT = { name: "", email: "", phone: "", course: "", message: "" };

/* ── Animation helpers ────────────────────────────────── */
const fadeUp = (delay = 0) => ({
  hidden:  { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, delay, ease: [0.16, 1, 0.3, 1] } },
});
const fadeLeft  = (d = 0) => ({
  hidden:  { opacity: 0, x: -36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.65, delay: d, ease: [0.16, 1, 0.3, 1] } },
});
const fadeRight = (d = 0) => ({
  hidden:  { opacity: 0, x: 36 },
  visible: { opacity: 1, x: 0,  transition: { duration: 0.65, delay: d, ease: [0.16, 1, 0.3, 1] } },
});

/* ═══════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════ */
export default function Contact() {
  const ref    = useRef(null);
  const formRef = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });

  const [form,      setForm]      = useState(INIT);
  const [errors,    setErrors]    = useState({});
  const [status,    setStatus]    = useState("idle"); // idle | sending | success | error
  const [charCount, setCharCount] = useState(0);

  /* Validate */
  const validate = () => {
    const e = {};
    if (!form.name.trim())                          e.name    = "Full name is required";
    if (!/\S+@\S+\.\S+/.test(form.email))           e.email   = "Valid email required";
    if (!/^\d{10}$/.test(form.phone.replace(/\s/g,""))) e.phone = "10-digit phone number required";
    if (!form.message.trim())                       e.message = "Please enter your message";
    return e;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm(prev => ({ ...prev, [name]: value }));
    if (name === "message") setCharCount(value.length);
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: null }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      await emailjs.sendForm(
        EMAILJS_SERVICE_ID,
        EMAILJS_TEMPLATE_ID,
        formRef.current,
        EMAILJS_PUBLIC_KEY
      );
      setStatus("success");
      setTimeout(() => { setForm(INIT); setCharCount(0); setStatus("idle"); }, 5000);
    } catch {
      setStatus("error");
      setTimeout(() => setStatus("idle"), 4000);
    }
  };

  return (
    <section className="contact" id="contact" ref={ref}>
      <div className="contact__container">

        {/* ════════════════ HEADER ═════════════════════ */}
        <motion.div
          className="contact__header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          <div className="contact__tag">
            <HiOutlineEnvelope size={14} />
            <span>GET IN TOUCH</span>
          </div>
          <h2 className="contact__title">Contact Us</h2>
          <div className="contact__title-rule" />
          <p className="contact__subtitle">
            Have a question or need assistance? Reach out to us —<br />
            our team will get back to you within 24 hours.
          </p>
        </motion.div>

        {/* ════════════════ MAIN GRID ══════════════════ */}
        <div className="contact__grid">

          {/* ── LEFT — Info + Map ──────────────────── */}
          <motion.div
            className="contact__info"
            variants={fadeLeft(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="info__title">Get in Touch</h3>
            <div className="info__title-rule" />
            <p className="info__desc">
              We're here to help! You can reach us through any of the
              following channels.
            </p>

            <div className="info__details">
              {contactDetails.map(({ icon, color, label, content }) => (
                <div key={label} className="info__row">
                  <div className={`info__icon info__icon--${color}`}>{icon}</div>
                  <div className="info__text">
                    <span className="info__label">{label}</span>
                    <span className="info__value">{content}</span>
                  </div>
                </div>
              ))}
            </div>

            {/* Map embed */}
            <div className="contact__map-wrap">
              <a
                href={collegeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="map__open-btn"
              >
                <FiExternalLink size={13} />
                Open in Google Maps
              </a>
              <iframe
                src={collegeInfo.mapsEmbed}
                width="100%"
                height="220"
                style={{ border: 0 }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. SRJ Degree College Location"
              />
            </div>
          </motion.div>

          {/* ── RIGHT — Form card ──────────────────── */}
          <motion.div
            className="contact__card"
            variants={fadeRight(0.18)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="card__title">Send Us a Message</h3>
            <div className="card__title-rule" />

            {/* ── Success state ── */}
            {status === "success" ? (
              <div className="contact__success">
                <div className="success__icon">
                  <svg viewBox="0 0 52 52" fill="none">
                    <circle cx="26" cy="26" r="25" stroke="#22c55e" strokeWidth="2"/>
                    <path d="M14 27l8 8 16-16" stroke="#22c55e" strokeWidth="2.5"
                      strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you for reaching out,{" "}
                  <strong>{form.name || "there"}</strong>.<br />
                  Our admissions team will contact you within 24 hours.
                </p>
              </div>
            ) : (
              /* ── Form ── */
              <form
                ref={formRef}
                className="contact__form"
                onSubmit={handleSubmit}
                noValidate
              >
                {/* Row 1 */}
                <div className="form__row">
                  <div className={`form__group${errors.name ? " form__group--err" : ""}`}>
                    <label htmlFor="cf-name">Full Name <span>*</span></label>
                    <div className="form__input-wrap">
                      <HiOutlineUser className="field-icon" size={16} />
                      <input
                        id="cf-name"
                        type="text"
                        name="name"
                        value={form.name}
                        onChange={handleChange}
                        placeholder="Enter your full name"
                        autoComplete="name"
                      />
                    </div>
                    {errors.name && <span className="form__err">{errors.name}</span>}
                  </div>

                  <div className={`form__group${errors.email ? " form__group--err" : ""}`}>
                    <label htmlFor="cf-email">Email Address <span>*</span></label>
                    <div className="form__input-wrap">
                      <HiOutlineEnvelope className="field-icon" size={16} />
                      <input
                        id="cf-email"
                        type="email"
                        name="email"
                        value={form.email}
                        onChange={handleChange}
                        placeholder="Enter your email"
                        autoComplete="email"
                      />
                    </div>
                    {errors.email && <span className="form__err">{errors.email}</span>}
                  </div>
                </div>

                {/* Row 2 */}
                <div className="form__row">
                  <div className={`form__group${errors.phone ? " form__group--err" : ""}`}>
                    <label htmlFor="cf-phone">Phone Number <span>*</span></label>
                    <div className="form__input-wrap">
                      <HiOutlinePhone className="field-icon" size={16} />
                      <input
                        id="cf-phone"
                        type="tel"
                        name="phone"
                        value={form.phone}
                        onChange={handleChange}
                        placeholder="Enter 10-digit mobile number"
                        autoComplete="tel"
                      />
                    </div>
                    {errors.phone && <span className="form__err">{errors.phone}</span>}
                  </div>

                  <div className="form__group">
                    <label htmlFor="cf-course">Course of Interest</label>
                    <div className="form__input-wrap form__input-wrap--select">
                      <HiOutlineAcademicCap className="field-icon" size={16} />
                      <select
                        id="cf-course"
                        name="course"
                        value={form.course}
                        onChange={handleChange}
                      >
                        <option value="">Select a course</option>
                        {COURSES.map(c => <option key={c}>{c}</option>)}
                      </select>
                      <span className="select__arrow">▾</span>
                    </div>
                  </div>
                </div>

                {/* Textarea */}
                <div className={`form__group${errors.message ? " form__group--err" : ""}`}>
                  <label htmlFor="cf-message">Your Message <span>*</span></label>
                  <div className="form__textarea-wrap">
                    <HiOutlinePencil className="field-icon field-icon--textarea" size={15} />
                    <textarea
                      id="cf-message"
                      name="message"
                      rows={5}
                      value={form.message}
                      onChange={handleChange}
                      placeholder="Tell us about your query, background, or anything you'd like to know..."
                      maxLength={500}
                    />
                    <span className="char-count">{charCount}/500</span>
                  </div>
                  {errors.message && <span className="form__err">{errors.message}</span>}
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className={`contact__submit${status === "sending" ? " contact__submit--loading" : ""}${status === "error" ? " contact__submit--error" : ""}`}
                  disabled={status === "sending"}
                >
                  {status === "sending" ? (
                    <>
                      <span className="spinner" />
                      Sending…
                    </>
                  ) : status === "error" ? (
                    "Failed — Try Again"
                  ) : (
                    <>
                      <FiSend size={16} strokeWidth={2.5} />
                      SEND MESSAGE
                    </>
                  )}
                </button>

                {/* Privacy note */}
                <p className="contact__privacy">
                  <FiLock size={12} />
                  Your information is safe with us. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* ════════════════ QUICK LINKS STRIP ══════════ */}
        <motion.div
          className="contact__quick"
          variants={fadeUp(0.3)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {quickLinks.map(({ icon, color, title, sub }, i) => (
            <div key={title} className="quick__item">
              <div className={`quick__icon quick__icon--${color}`}>{icon}</div>
              <div className="quick__text">
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
              {i < quickLinks.length - 1 && <div className="quick__sep" />}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
