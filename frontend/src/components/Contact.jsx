import { useRef, useState } from "react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { FiSend, FiMapPin, FiPhone, FiMail, FiExternalLink } from "react-icons/fi";
import { collegeInfo } from "../data/mockData";
import "./Contact.css";

const initialForm = { name: "", email: "", phone: "", course: "", message: "" };

export default function Contact() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const [form, setForm] = useState(initialForm);
  const [submitted, setSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim() || !/\S+@\S+\.\S+/.test(form.email)) errs.email = "Valid email required";
    if (!form.phone.trim() || !/^\d{10}$/.test(form.phone)) errs.phone = "10-digit phone number required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    if (errors[e.target.name]) setErrors({ ...errors, [e.target.name]: null });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length > 0) { setErrors(errs); return; }
    setSubmitted(true);
    setTimeout(() => { setForm(initialForm); setSubmitted(false); }, 4000);
  };

  return (
    <section className="contact section section--light" id="contact" ref={ref}>
      <div className="container">
        <motion.div
          className="section-header"
          initial={{ opacity: 0, y: 20 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.5 }}
        >
          <span className="section-tag">Get in Touch</span>
          <h2 className="section-title">Contact <span>Us</span></h2>
          <p className="section-subtitle">
            Questions about admissions? We're here to help. Reach out and our team will get back to you within 24 hours.
          </p>
          <div className="section-divider" />
        </motion.div>

        <div className="contact__grid">
          {/* Left: Info + Map */}
          <motion.div
            className="contact__info"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <h3 className="contact__info-title">Find Us</h3>

            <div className="contact__detail">
              <div className="icon-box icon-box-blue"><FiMapPin /></div>
              <div>
                <span className="contact__detail-label">Address</span>
                <span className="contact__detail-val">{collegeInfo.address}</span>
              </div>
            </div>
            <div className="contact__detail">
              <div className="icon-box icon-box-blue"><FiPhone /></div>
              <div>
                <span className="contact__detail-label">Phone</span>
                {collegeInfo.phone.map((p) => (
                  <a key={p} href={`tel:${p}`} className="contact__detail-val contact__detail-link">{p}</a>
                ))}
              </div>
            </div>
            <div className="contact__detail">
              <div className="icon-box icon-box-blue"><FiMail /></div>
              <div>
                <span className="contact__detail-label">Email</span>
                <a href={`mailto:${collegeInfo.email}`} className="contact__detail-val contact__detail-link">{collegeInfo.email}</a>
              </div>
            </div>

            {/* Map Embed */}
            <div className="contact__map">
              <iframe
                src={collegeInfo.mapsEmbed}
                width="100%"
                height="260"
                style={{ border: 0, borderRadius: "var(--radius-lg)" }}
                allowFullScreen=""
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. SRJ Degree College Map"
              />
              <a
                href={collegeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="contact__map-link"
              >
                <FiExternalLink size={13} /> Open in Google Maps
              </a>
            </div>
          </motion.div>

          {/* Right: Contact Form */}
          <motion.div
            className="contact__form-wrap"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.15 }}
          >
            <h3 className="contact__form-title">Send Us a Message</h3>

            {submitted ? (
              <div className="contact__success">
                <span style={{ fontSize: "3rem" }}>✅</span>
                <h4>Message Sent!</h4>
                <p>Thank you for reaching out. Our admissions team will contact you shortly.</p>
              </div>
            ) : (
              <form className="contact__form" onSubmit={handleSubmit} noValidate>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="name">Full Name *</label>
                    <input
                      id="name"
                      type="text"
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      placeholder="Your full name"
                      className={errors.name ? "error" : ""}
                    />
                    {errors.name && <span className="form-error">{errors.name}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="email">Email Address *</label>
                    <input
                      id="email"
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      placeholder="you@email.com"
                      className={errors.email ? "error" : ""}
                    />
                    {errors.email && <span className="form-error">{errors.email}</span>}
                  </div>
                </div>
                <div className="form-row">
                  <div className="form-group">
                    <label htmlFor="phone">Phone Number *</label>
                    <input
                      id="phone"
                      type="tel"
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      placeholder="10-digit mobile number"
                      className={errors.phone ? "error" : ""}
                    />
                    {errors.phone && <span className="form-error">{errors.phone}</span>}
                  </div>
                  <div className="form-group">
                    <label htmlFor="course">Course of Interest</label>
                    <select id="course" name="course" value={form.course} onChange={handleChange}>
                      <option value="">Select a course</option>
                      <option>BA Telugu (Aided)</option>
                      <option>B.Sc Dairy Science</option>
                      <option>B.Sc Food Science & Technology</option>
                      <option>BCA</option>
                      <option>B.Com</option>
                    </select>
                  </div>
                </div>
                <div className="form-group">
                  <label htmlFor="message">Your Message *</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={4}
                    value={form.message}
                    onChange={handleChange}
                    placeholder="Tell us about your query, background, or anything you'd like to know..."
                    className={errors.message ? "error" : ""}
                  />
                  {errors.message && <span className="form-error">{errors.message}</span>}
                </div>
                <button type="submit" className="btn btn-primary contact__submit">
                  <FiSend /> Send Message
                </button>
              </form>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
