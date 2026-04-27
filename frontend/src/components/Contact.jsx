/**
 * ╔══════════════════════════════════════════════════════════╗
 * ║        HOW TO SEND EMAILS FROM PURE REACT (No Backend)  ║
 * ║                  Using EmailJS + Gmail                   ║
 * ╠══════════════════════════════════════════════════════════╣
 * ║                                                          ║
 * ║  STEP 1 — Install                                        ║
 * ║    npm install @emailjs/browser                          ║
 * ║                                                          ║
 * ║  STEP 2 — Create free account at emailjs.com             ║
 * ║                                                          ║
 * ║  STEP 3 — Connect your Gmail                             ║
 * ║    Dashboard → Email Services → Add New Service          ║
 * ║    → Choose Gmail → Connect Account → Copy SERVICE_ID    ║
 * ║                                                          ║
 * ║  STEP 4 — Create Email Template                          ║
 * ║    Dashboard → Email Templates → Create New              ║
 * ║    Use variables: {{from_name}} {{from_email}}           ║
 * ║                   {{phone}} {{course}} {{message}}       ║
 * ║    Copy TEMPLATE_ID                                      ║
 * ║                                                          ║
 * ║  STEP 5 — Get Public Key                                 ║
 * ║    Dashboard → Account → General → Public Key            ║
 * ║                                                          ║
 * ║  STEP 6 — Create .env file in project root               ║
 * ║    VITE_EMAILJS_SERVICE_ID=service_xxxxxxx               ║
 * ║    VITE_EMAILJS_TEMPLATE_ID=template_xxxxxxx             ║
 * ║    VITE_EMAILJS_PUBLIC_KEY=xxxxxxxxxxxxxxxxxxxx          ║
 * ║                                                          ║
 * ║  That's it. EmailJS sends via Gmail SMTP — no backend!   ║
 * ╚══════════════════════════════════════════════════════════╝
 */

import { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
// import emailjs from "@emailjs/browser";
import {
  FiMapPin, FiPhone, FiMail, FiClock,
  FiExternalLink, FiSend, FiLock,
} from "react-icons/fi";
import {
  HiOutlineEnvelope, HiOutlineUser, HiOutlinePhone,
  HiOutlinePencil, HiOutlineAcademicCap,
  HiOutlineQuestionMarkCircle, HiOutlineDocumentText,
  HiOutlineMapPin, HiOutlineCheckCircle, HiOutlineXCircle,
} from "react-icons/hi2";
import { collegeInfo } from "../data/mockData";
import "./Contact.css";

/* ── EmailJS credentials from .env ──────────────────────
   If you don't use Vite, replace import.meta.env.VITE_*
   with process.env.REACT_APP_* for CRA                  */
const SERVICE_ID  = import.meta.env.VITE_EMAILJS_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_EMAILJS_TEMPLATE_ID;
const PUBLIC_KEY  = import.meta.env.VITE_EMAILJS_PUBLIC_KEY;

/* ── Static content ──────────────────────────────────── */
const INFO_ROWS = [
  {
    icon:  <FiMapPin size={17} />, variant: "navy", label: "Address",
    value: <>Dr. SRJ Degree College, Atmakur,<br/>Nellore Palem, Andhra Pradesh 524322</>,
  },
  {
    icon:  <FiPhone size={17} />, variant: "gold", label: "Phone",
    value: <><a href="tel:+919876543210">+91 98765 43210</a><br/><a href="tel:+918765432109">+91 87654 32109</a></>,
  },
  {
    icon:  <FiMail size={17} />, variant: "navy", label: "Email",
    value: <a href={`mailto:${collegeInfo.email}`}>{collegeInfo.email}</a>,
  },
  {
    icon:  <FiClock size={17} />, variant: "gold", label: "Working Hours",
    value: <>Mon – Sat : 9:00 AM – 5:00 PM<br/>(Except Public Holidays)</>,
  },
];

const QUICK = [
  { icon: <HiOutlineQuestionMarkCircle size={22}/>, variant:"navy", title:"General Inquiries",  sub:"For any general questions about the college." },
  { icon: <HiOutlineDocumentText size={22}/>,       variant:"gold", title:"Admissions Help",    sub:"Get guidance on courses, eligibility & admissions." },
  { icon: <HiOutlineMapPin size={22}/>,             variant:"navy", title:"Visit Campus",       sub:"We welcome you to visit and experience our campus." },
  { icon: <HiOutlinePhone size={22}/>,              variant:"gold", title:"Need Support?",      sub:"For any support, feel free to reach out anytime." },
];

const COURSES = [
  "BA Telugu (Aided)",
  "B.Sc Dairy Science",
  "B.Sc Food Science & Technology",
  "BCA",
  "B.Com",
];

const EMPTY = { name:"", email:"", phone:"", course:"", message:"" };

/* ── Framer helpers ──────────────────────────────────── */
const fadeUp    = (d=0) => ({ hidden:{opacity:0,y:24},    visible:{opacity:1,y:0,  transition:{duration:0.6,delay:d,ease:[0.16,1,0.3,1]}} });
const fadeLeft  = (d=0) => ({ hidden:{opacity:0,x:-36},   visible:{opacity:1,x:0,  transition:{duration:0.65,delay:d,ease:[0.16,1,0.3,1]}} });
const fadeRight = (d=0) => ({ hidden:{opacity:0,x:36},    visible:{opacity:1,x:0,  transition:{duration:0.65,delay:d,ease:[0.16,1,0.3,1]}} });

/* ═══════════════════════════════════════════════════════
   COMPONENT
═══════════════════════════════════════════════════════ */
export default function Contact() {
  const sectionRef = useRef(null);
  const formRef    = useRef(null);
  const inView     = useInView(sectionRef, { once:true, margin:"-80px" });

  const [form,    setForm]    = useState(EMPTY);
  const [errors,  setErrors]  = useState({});
  const [status,  setStatus]  = useState("idle"); // idle | sending | success | error
  const [chars,   setChars]   = useState(0);

  /* Initialise EmailJS once */
  useEffect(() => {
    if (PUBLIC_KEY) emailjs.init(PUBLIC_KEY);
  }, []);

  /* ── Validation ── */
  const validate = () => {
    const e = {};
    if (!form.name.trim())                                  e.name    = "Full name is required";
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email))   e.email   = "Valid email address required";
    if (!/^\d{10}$/.test(form.phone.replace(/[\s\-]/g,""))) e.phone  = "Enter a valid 10-digit number";
    if (!form.message.trim())                               e.message = "Please write your message";
    return e;
  };

  /* ── Field change ── */
  const onChange = (e) => {
    const { name, value } = e.target;
    setForm(p => ({ ...p, [name]: value }));
    if (name === "message") setChars(value.length);
    if (errors[name]) setErrors(p => ({ ...p, [name]: undefined }));
  };

  /* ── Submit ── */
  const onSubmit = async (e) => {
    e.preventDefault();
    const errs = validate();
    if (Object.keys(errs).length) { setErrors(errs); return; }

    setStatus("sending");
    try {
      /* emailjs.sendForm reads <input name="..."> directly from the DOM form */
      await emailjs.sendForm(SERVICE_ID, TEMPLATE_ID, formRef.current, PUBLIC_KEY);
      setStatus("success");
      /* Auto-reset after 6 s */
      setTimeout(() => { setForm(EMPTY); setChars(0); setStatus("idle"); }, 6000);
    } catch (err) {
      console.error("EmailJS error:", err);
      setStatus("error");
      setTimeout(() => setStatus("idle"), 5000);
    }
  };

  /* ── Derived ── */
  const isSending = status === "sending";
  const isSuccess = status === "success";
  const isError   = status === "error";

  return (
    <section className="contact" id="contact" ref={sectionRef}>
      <div className="contact__container">

        {/* ════ HEADER ════════════════════════════════ */}
        <motion.header
          className="contact__header"
          variants={fadeUp(0)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
        {/*   <div className="contact__pill">
            <HiOutlineEnvelope size={13}/>
           <span>GET IN TOUCH</span>   
          </div>   */}
          <h2 className="contact__h2">Contact Us</h2>
          <div className="contact__h2-rule"/>
          <p className="contact__subhead">
            Have a question or need assistance? Reach out to us —<br/>
            our team will get back to you within 24 hours.
          </p>
        </motion.header>

        {/* ════ TWO-COLUMN GRID ═══════════════════════ */}
        <div className="contact__grid">

          {/* ── LEFT — Info + Map ────────────────── */}
          <motion.div
            className="contact__info"
            variants={fadeLeft(0.1)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="info__h3">Get in Touch</h3>
            <div className="info__rule"/>
            <p className="info__desc">
              We're here to help! You can reach us through any of the following channels.
            </p>

            <ul className="info__list">
              {INFO_ROWS.map(({ icon, variant, label, value }) => (
                <li key={label} className="info__item">
                  <div className={`info__dot info__dot--${variant}`}>{icon}</div>
                  <div className="info__body">
                    <strong>{label}</strong>
                    <span>{value}</span>
                  </div>
                </li>
              ))}
            </ul>

            {/* Map */}
            <div className="contact__map">
              <a
                href={collegeInfo.mapsUrl}
                target="_blank"
                rel="noreferrer"
                className="map__chip"
              >
                <FiExternalLink size={12}/> Open in Google Maps
              </a>
              <iframe
                src={collegeInfo.mapsEmbed}
                width="100%"
                height="220"
                style={{ border:0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                title="Dr. SRJ Degree College Location"
              />
            </div>
          </motion.div>

          {/* ── RIGHT — Form card ─────────────────── */}
          <motion.div
            className="contact__card"
            variants={fadeRight(0.18)}
            initial="hidden"
            animate={inView ? "visible" : "hidden"}
          >
            <h3 className="card__h3">Send Us a Message</h3>
            <div className="card__rule"/>

            {/* SUCCESS */}
            {isSuccess ? (
              <motion.div
                className="form__success"
                initial={{opacity:0, scale:0.92}}
                animate={{opacity:1, scale:1}}
                transition={{duration:0.45, ease:[0.16,1,0.3,1]}}
              >
                <div className="success__ring">
                  <HiOutlineCheckCircle size={52} strokeWidth={1.2}/>
                </div>
                <h4>Message Sent Successfully!</h4>
                <p>
                  Thank you, <strong>{form.name || "there"}</strong>!<br/>
                  Our admissions team will contact you within 24 hours.
                </p>
              </motion.div>
            ) : (

              /* FORM */
              <form ref={formRef} className="contact__form" onSubmit={onSubmit} noValidate>

                {/* Row 1 — Name + Email */}
                <div className="form__row">
                  <Field label="Full Name" required error={errors.name}>
                    <div className="field__wrap">
                      <HiOutlineUser className="field__ico" size={15}/>
                      <input
                        type="text"
                        name="from_name"      /* EmailJS template var */
                        value={form.name}
                        onChange={e => onChange({target:{name:"name",value:e.target.value}})}
                        placeholder="Enter your full name"
                        autoComplete="name"
                        className={errors.name ? "field__input--err" : ""}
                      />
                    </div>
                  </Field>

                  <Field label="Email Address" required error={errors.email}>
                    <div className="field__wrap">
                      <HiOutlineEnvelope className="field__ico" size={15}/>
                      <input
                        type="email"
                        name="from_email"     /* EmailJS template var */
                        value={form.email}
                        onChange={e => onChange({target:{name:"email",value:e.target.value}})}
                        placeholder="Enter your email"
                        autoComplete="email"
                        className={errors.email ? "field__input--err" : ""}
                      />
                    </div>
                  </Field>
                </div>

                {/* Row 2 — Phone + Course */}
                <div className="form__row">
                  <Field label="Phone Number" required error={errors.phone}>
                    <div className="field__wrap">
                      <HiOutlinePhone className="field__ico" size={15}/>
                      <input
                        type="tel"
                        name="phone"          /* EmailJS template var */
                        value={form.phone}
                        onChange={e => onChange({target:{name:"phone",value:e.target.value}})}
                        placeholder="Enter 10-digit mobile number"
                        autoComplete="tel"
                        className={errors.phone ? "field__input--err" : ""}
                      />
                    </div>
                  </Field>

                  <Field label="Course of Interest">
                    <div className="field__wrap field__wrap--select">
                      <HiOutlineAcademicCap className="field__ico" size={15}/>
                      <select
                        name="course"         /* EmailJS template var */
                        value={form.course}
                        onChange={e => onChange({target:{name:"course",value:e.target.value}})}
                      >
                        <option value="">Select a course</option>
                        {COURSES.map(c => <option key={c} value={c}>{c}</option>)}
                      </select>
                      <span className="select__chevron">▾</span>
                    </div>
                  </Field>
                </div>

                {/* Textarea */}
                <Field label="Your Message" required error={errors.message}>
                  <div className="field__wrap field__wrap--ta">
                    <HiOutlinePencil className="field__ico field__ico--ta" size={14}/>
                    <textarea
                      name="message"          /* EmailJS template var */
                      rows={5}
                      value={form.message}
                      onChange={e => onChange({target:{name:"message",value:e.target.value}})}
                      placeholder="Tell us about your query, background, or anything you'd like to know..."
                      maxLength={500}
                      className={errors.message ? "field__input--err" : ""}
                    />
                    <span className="ta__count">{chars}/500</span>
                  </div>
                </Field>

                {/* Error alert */}
                {isError && (
                  <motion.div
                    className="form__alert"
                    initial={{opacity:0, y:-8}}
                    animate={{opacity:1, y:0}}
                  >
                    <HiOutlineXCircle size={16}/>
                    Failed to send. Please try again or email us directly.
                  </motion.div>
                )}

                {/* Submit */}
                <button
                  type="submit"
                  className={`contact__submit ${isError ? "contact__submit--err" : ""}`}
                  disabled={isSending}
                >
                  {isSending ? (
                    <><span className="btn__spinner"/>&nbsp;Sending your message…</>
                  ) : (
                    <><FiSend size={15} strokeWidth={2.5}/>&nbsp;SEND MESSAGE</>
                  )}
                </button>

                <p className="form__privacy">
                  <FiLock size={11}/>
                  Your information is safe with us. We respect your privacy.
                </p>
              </form>
            )}
          </motion.div>
        </div>

        {/* ════ QUICK LINKS STRIP ══════════════════════ */}
        <motion.div
          className="contact__quick"
          variants={fadeUp(0.32)}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
        >
          {QUICK.map(({ icon, variant, title, sub }, i) => (
            <div key={title} className="quick__item">
              <div className={`quick__ico quick__ico--${variant}`}>{icon}</div>
              <div className="quick__txt">
                <strong>{title}</strong>
                <span>{sub}</span>
              </div>
              {i < QUICK.length - 1 && <div className="quick__sep"/>}
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}

/* ── Small reusable Field wrapper ───────────────────── */
function Field({ label, required, error, children }) {
  return (
    <div className={`form__field${error ? " form__field--err" : ""}`}>
      <label>
        {label}{required && <span className="lbl__req"> *</span>}
      </label>
      {children}
      {error && (
        <span className="field__errtxt">
          <HiOutlineXCircle size={12}/> {error}
        </span>
      )}
    </div>
  );
}
