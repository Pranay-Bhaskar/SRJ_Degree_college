// ============================================================
//  DR. SRJ DEGREE COLLEGE — MOCK DATA
// ============================================================

export const collegeInfo = {
  name: "Dr. SRJ Degree College",
  shortName: "SRJ Degree College",
  tagline: "Empowering Rural Youth Through Quality Education",
  established: "2005",
  affiliation: "Vikrama Simhapuri University",
  location: "Atmakur, Nellore, Andhra Pradesh — 524 322",
  phone: ["+91 95500 80152", "+91 76809 03077",],
  email: "srjdcollege@yahoo.com",
  address: "Dr. SRJ Degree College, Atmakur, Nellore Palem, Andhra Pradesh 524322",
  mapsUrl: "https://www.google.com/maps/search/?api=1&query=Dr.%20SRJ%20Degree%20College%20Dr.S.R.j.Degree%20College%2C%20Atmakur%2C%20Nellore%20Palem%2C%20Andhra%20Pradesh%20524322%2C%20India",
  mapsEmbed: "https://maps.google.com/maps?q=Dr.%20SRJ%20Degree%20College%2C%20Atmakur%2C%20Nellore%2C%20Andhra%20Pradesh&t=&z=15&ie=UTF8&iwloc=&output=embed",
  socialLinks: {
    facebook: "https://facebook.com/srjdegreecollege",
    instagram: "https://instagram.com/srjdegreecollege",
    youtube: "https://youtube.com/@srjdegreecollege",
    whatsapp: "https://wa.me/919876543210",
  },
  vision: "To be a premier institution that transforms rural youth into confident, skilled, and ethically grounded citizens who drive social and economic progress.",
  mission: "To provide high-quality, affordable education with strong academic rigour, practical skill development, and rural-centric values that foster lifelong learning.",
  //about: `Established in 2005, Dr. SRJ Degree College is a government-aided institution located at the heart of Atmakur, Nellore, committed to bridging the educational gap between urban and rural India. Affiliated to Vikrama Simhapuri University, the college provides a nurturing environment with experienced faculty, modern infrastructure, and hands-on practical training. With a legacy of empowering first-generation rural learners, SRJ stands as a beacon of hope, possibility, and excellence in the Nellore region.`,
};

export const courses = [
  {
    id: 1,
    name: "BA Telugu",
    type: "Aided",
    icon: "📚",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
    seats: 60,
    description: "A deep dive into classical and modern Telugu literature, linguistics, and cultural studies.",
    highlights: ["Aided by Government", "Experienced Telugu Faculty", "Cultural Events"],
    color: "blue",
  },
  {
    id: 2,
    name: "B.Sc Dairy Science",
    type: "Science",
    icon: "🥛",
    duration: "3 Years",
    eligibility: "10+2 with Science (Biology/Agriculture)",
    seats: 40,
    description: "Comprehensive study of dairy technology, milk processing, and agri-business management.",
    highlights: ["Practical Labs", "Industry Visits", "Government Scope"],
    color: "yellow",
  },
  {
    id: 3,
    name: "B.Sc Food Science & Technology",
    type: "Science",
    icon: "🔬",
    duration: "3 Years",
    eligibility: "10+2 with Science (Biology/Chemistry)",
    seats: 40,
    description: "Study of food processing, quality control, nutrition science, and food safety standards.",
    highlights: ["Modern Labs", "Industry Internships", "High Employment Rate"],
    color: "red",
  },
  {
    id: 4,
    name: "BCA",
    type: "Computer Science",
    icon: "💻",
    duration: "3 Years",
    eligibility: "10+2 with Mathematics",
    seats: 60,
    description: "Foundation in computer applications, programming, databases, and modern software development.",
    highlights: ["Computer Lab", "Coding Workshops", "Placement Support"],
    color: "blue",
  },
  {
    id: 5,
    name: "B.Com",
    type: "Commerce",
    icon: "📊",
    duration: "3 Years",
    eligibility: "10+2 in any stream",
    seats: 60,
    description: "Strong grounding in accounting, business management, taxation, and commerce fundamentals.",
    highlights: ["Industrial Visits", "Tally & Excel Training", "CA Foundation Path"],
    color: "yellow",
  },
];

export const facilities = [
  { id: 1, name: "Central Library",     icon: "📖", description: "Over 10,000 volumes with digital resources and reading hall.", tag: "Academic" },
  { id: 2, name: "Science Labs",        icon: "🔭", description: "Fully equipped biology, chemistry, and physics laboratories.", tag: "Science" },
  { id: 3, name: "Computer Lab",        icon: "🖥️", description: "Modern computer lab with high-speed internet & licensed software.", tag: "Tech" },
  { id: 4, name: "Girls & Boys Hostel", icon: "🏠", description: "Safe and comfortable hostel accommodation for outstation students.", tag: "Hostel" },
  { id: 5, name: "Transport",           icon: "🚌", description: "College bus service covering Atmakur and surrounding villages.", tag: "Transport" },
  { id: 6, name: "Sports Ground",       icon: "⚽", description: "Dedicated ground for cricket, volleyball, kabaddi, and athletics.", tag: "Sports" },
];

export const whyChooseUs = [
  { icon: "👨‍🏫", title: "Experienced Faculty",      desc: "Highly qualified professors with 10+ years of teaching and research experience." },
  { icon: "🏠", title: "Hostel Facility",         desc: "Safe, affordable residential facilities for boys and girls on campus." },
  { icon: "🔬", title: "Practical Labs",           desc: "Well-equipped labs that enable real-world, hands-on skill development." },
  { icon: "💰", title: "Affordable Fees",          desc: "World-class education at fees accessible to rural and economically weaker students." },
  { icon: "🌾", title: "Rural Student Support",    desc: "Scholarships, counselling, and special academic programs for rural learners." },
  { icon: "🎓", title: "University Affiliation",   desc: "Proudly affiliated to Vikrama Simhapuri University with recognized degree programs." },
];

export const management = [
  {
    id: 1,
    name: "Mr. Ponugoti Madhusudhan Reddy",
    role: "Chairman, Governing Body",
    message: "Our mission has always been simple: deliver the best education to the youth of our region regardless of their background. We believe every student from Atmakur deserves a world-class education, and we work tirelessly to make that a reality at Dr. SRJ Degree College.",
    initials: "PMR",
  },
  {
    id: 2,
    name: "Mr. Ponugoti Mahesh Reddy",
    role: "Secretary, Governing Body",
    message: "We are committed to producing graduates who are not only academically excellent but also rooted in their cultural identity and ready to contribute to society. Our infrastructure, faculty, and student-first approach reflect our vision for a better tomorrow.",
    initials: "PMR",
  },
];

export const admissionsSteps = [
  { step: 1, title: "Check Eligibility",    desc: "Verify that you meet the eligibility criteria for your chosen course (10+2 marks, stream, etc.).", icon: "✅" },
  { step: 2, title: "Fill Application",     desc: "Fill in the online application form with accurate personal and academic details.", icon: "📝" },
  { step: 3, title: "Submit Documents",     desc: "Upload required documents: marksheets, certificates, Aadhaar, caste certificate, and passport photo.", icon: "📁" },
  { step: 4, title: "Attend Counselling",   desc: "Visit the college campus for an in-person counselling and interaction session with faculty.", icon: "🗓️" },
  { step: 5, title: "Fee Payment",          desc: "Complete the fee payment process via DD or online transfer. Scholarships applicable.", icon: "💳" },
  { step: 6, title: "Receive Admission",    desc: "Collect your admission letter and orientate with the academic calendar. Welcome aboard!", icon: "🎓" },
];

export const importantDates = [
  { label: "Application Start Date",  date: "1st June 2026",    status: "upcoming" },
  { label: "Last Date to Apply",      date: "30th July 2026",   status: "upcoming" },
  { label: "Counselling Dates",       date: "5th–10th August 2026", status: "upcoming" },
  { label: "Classes Commence",        date: "1st September 2026", status: "upcoming" },
];

export const requiredDocuments = [
  "10th Class Marks Memo (Original + 2 copies)",
  "Intermediate Marks Memo (Original + 2 copies)",
  "Transfer Certificate (TC) from previous institution",
  "Study / Migration Certificate",
  "Caste Certificate (if applicable)",
  "Income Certificate (for scholarship)",
  "Aadhaar Card (Original + copy)",
  "Passport-size photographs (6 copies)",
];

export const news = [
  { id: 1, title: "Admissions Open for 2026–27 Academic Year",        date: "April 10, 2026", tag: "Admissions",   urgent: true,  body: "Applications are now being accepted for all UG programs. Apply before July 30, 2026." },
  { id: 2, title: "Annual Cultural Fest 'Kalasangamam 2026' Announced", date: "March 22, 2026", tag: "Events",       urgent: false, body: "One of the largest cultural festivals in the Nellore region returns this year on April 20–22." },
  { id: 3, title: "MoU Signed with Nellore Farm Fresh Dairy",          date: "February 14, 2026", tag: "Academic",  urgent: false, body: "SRJ Dairy Science students now have internship pathways at one of Nellore's largest dairies." },
  { id: 4, title: "Free Coaching for SC/ST Students — Government Scheme", date: "January 5, 2026", tag: "Scholarship", urgent: false, body: "Eligible students may apply for free coaching under the state scholarship scheme for 2026–27." },
];

export const gallery = [
  { id: 1, category: "Campus",  src: "/gallery/campus1.jpg",   alt: "College Main Building" },
  { id: 2, category: "Campus",  src: "/gallery/campus2.jpg",   alt: "College Front View" },
  { id: 3, category: "Events",  src: "/gallery/event1.jpg",    alt: "Annual Day Celebration" },
  { id: 4, category: "Events",  src: "/gallery/event2.jpg",    alt: "Cultural Fest 2025" },
  { id: 5, category: "Labs",    src: "/gallery/lab1.jpg",      alt: "Science Lab" },
  { id: 6, category: "Labs",    src: "/gallery/lab2.jpg",      alt: "Computer Lab" },
  { id: 7, category: "Campus",  src: "/gallery/campus3.jpg",   alt: "Library Interior" },
  { id: 8, category: "Events",  src: "/gallery/event3.jpg",    alt: "Sports Day" },
];

export const testimonials = [
  {
    id: 1,
    name: "Priya Lakshmi",
    course: "B.Sc Food Science & Technology, 2025",
    text: "SRJ College gave me not just a degree, but a purpose. The practical training and faculty support helped me secure a placement in a Hyderabad food company straight after graduation!",
    rating: 5,
  },
  {
    id: 2,
    name: "Suresh Kumar",
    course: "BCA, 2024",
    text: "Coming from a small village near Atmakur, I was worried about college life. But SRJ made it so welcoming. The hostel, the labs, and the teachers — everything felt like home.",
    rating: 5,
  },
  {
    id: 3,
    name: "Ramadevi's Parent",
    course: "Parent of BA Telugu Graduate, 2025",
    text: "As a parent, the safety and discipline of the hostel gave us complete peace of mind. The faculty is deeply invested in each student's growth. We highly recommend SRJ to all parents.",
    rating: 5,
  },
  {
    id: 4,
    name: "Kiran Babu",
    course: "B.Com, 2025",
    text: "The Tally, Excel, and banking workshops they conduct alongside the B.Com curriculum made me job-ready well before my exams. I cleared my bank PO exam while still in final year!",
    rating: 5,
  },
];

export const placements = {
  stats: [
    { label: "Placement Rate",   value: "78%",     icon: "📈" },
    { label: "Companies Visited", value: "15+",    icon: "🏢" },
    { label: "Average Package",  value: "₹2.4 LPA", icon: "💼" },
    { label: "Internship Partners", value: "20+",  icon: "🤝" },
  ],
  companies: [
    "Nellore Farm Fresh Dairy",
    "Heritage Foods",
    "Deccan Agri-Tech",
    "State Bank of India",
    "Andhra Bank",
    "TCS iON Campus",
    "HCL Foundation",
    "GVN Foods Pvt. Ltd.",
  ],
};
