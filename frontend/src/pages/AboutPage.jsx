import "./AboutPage.css";
import { collegeInfo } from "../data/mockData";

export default function AboutPage() {
  return (
    <main className="about-page">
      {/*
      <section className="about-hero">
        <div className="about-container">
          <p className="about-hero__kicker">About Us</p>
          <h1 className="about-hero__title">About Dr. SRJ Degree College</h1>
          <p className="about-hero__text">
            Dr. SRJ Degree College stands as a center of academic learning,
            discipline, and value-based education for students in and around
            Atmakur, Nellore.
          </p>
        </div>
      </section>
      */}

      <section className="about-section" id="about-college">
        <div className="about-container about-section__split">
          <div className="about-section__content">
            <h2>About the College</h2>
            <p>{collegeInfo.about}</p>
            <p>
              Dr. Samala Ramaiah and Janakamma (Dr. S.R.J.) Degree College, Atmakur, established in
              1983, is a Private Aided Degree College. The institution is a distinguished institution of
              higher education in SPSR Nellore District, Andhra Pradesh. Established with the objective of
              providing accessible and quality education to rural and semi-urban students, the college has
              built a strong reputation for academic excellence and social commitment. It is affiliated with
              Vikrama Simhapuri University, SPSR Nellore District, ensuring that its academic programs
              align with recognized standards of higher education.
            </p>
            <p>
              The institution offers a wide range of undergraduate programs including B.A., B.Sc.,
              B.Com., BCA, BBA, and BMS, catering to diverse academic interests and career
              aspirations. The B.A. program focuses on social sciences and humanities, while B.Sc. courses
              provide strong foundations in scientific disciplines with practical laboratory exposure. The
              B.Com program develops knowledge in commerce, accounting, and finance. Professional
              courses like BCA, BBA, and BMS equip students with skills in computer applications,
              business management, and organizational practices, aligning education with modern industry
              requirements. The curriculum is regularly updated as per university guidelines to meet
              current academic and industry requirements.
            </p>
            <p>
              The institution is supported by a team of qualified and dedicated faculty members who play a
              crucial role in mentoring students and guiding them toward academic success. In addition to
              classroom teaching, the college encourages interactive learning through seminars,
              assignments, internal assessments, and practical sessions. Faculty members are committed to
              fostering a student-centered learning environment.
            </p>
            <p>
              The campus is equipped with essential infrastructure, including a library with a good
              collection of books and journals, computer laboratories with internet access, and adequate
              classroom facilities. The college also provides opportunities for sports and extracurricular
              activities, contributing to the overall development of students. Hostel facilities and
              government scholarships and Fee reimbursement schemes are available to support students
              from economically weaker sections.
            </p>
            <p>
              Dr. S.R.J. Degree College places strong emphasis on holistic development. Through activities
              such as NSS programs, cultural events, awareness campaigns, and community service,
              students are encouraged to develop leadership skills, social responsibility, and ethical values.
              The college aims not only to educate but also to shape responsible citizens.
            </p>
            <p>
              With a focus on continuous improvement, the institution is working towards introducing
              skill-based courses, enhancing digital infrastructure, and strengthening career guidance
              initiatives. Overall, Dr. S.R.J. Degree College continues to serve as an important center for
              higher education in the region, empowering students to achieve their academic and
              professional goals.
            </p>
            <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>
              “Education empowers, enlightens, and transforms lives.”
            </p>
          </div>

          <div className="about-section__media">
            <img
              src="/images/college-building.jpg"
              alt="Dr. SRJ Degree College campus"
            />
          </div>
        </div>
      </section>

      <section className="about-section about-section--alt" id="principal-message">
        <div className="about-container">
          <div className="message-block">
            <div className="message-block__image">
              <img
                src="/images/principal.jpg"
                alt="Principal of Dr. SRJ Degree College"
              />
            </div>

            <div className="message-block__content">
              <h2>Message From Principal</h2>
              <h3>Smt. G. Varakumari</h3>
              <p className="message-block__role">Principal</p>
              <p>
                Education is a powerful tool that shapes the future of individuals and society.
                At Dr. S.R.J. Degree College, we are committed to nurturing young minds by providing
                a balanced environment of academic learning, skill development, and value-based education.
              </p>

              <p>
                Our focus is on empowering students with knowledge, confidence, and the ability to
                think critically and act responsibly. We encourage students to actively participate
                in academic, co-curricular, and extension activities that help in building leadership
                qualities and overall personality development.
              </p>

              <p>
                With the support of dedicated faculty and a student-friendly atmosphere, we strive
                to create opportunities for every learner to achieve success. We also ensure that
                deserving students benefit from government scholarships and fee reimbursement schemes,
                making higher education accessible to all.
              </p>

              <p>
                We aim to prepare our students not only for careers but also for life, instilling
                in them a sense of discipline, responsibility, and social commitment.
              </p>

              <p>
                I invite all aspiring students to be part of this journey of learning and growth
                and to build a bright and successful future.
              </p>

              <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>
                “Strive for Excellence, Serve with Integrity.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section" id="director-message">
        <div className="about-container">
          <div className="message-block message-block--reverse">
            <div className="message-block__image">
              <img
                src="/images/director.jpg"
                alt="Director of Dr. SRJ Degree College"
              />
            </div>

            <div className="message-block__content">
              <h2>Message From Director</h2>
              <h3>Mr. P. Madhusudhan Reddy | Mr. P. Mahesh Reddy</h3>
              <p className="message-block__role">Directors</p>
              <p>
                It gives us immense pride and responsibility to be part of the leadership of Dr. S.R.J. Degree
                College, Atmakur, an institution that has been shaping the future of students since 1983. Our
                vision is to transform the college into a dynamic center of learning that blends academic
                excellence with industry-oriented education.
              </p>

              <p>
                In today’s rapidly changing world, education must go beyond traditional teaching and focus
                on skill development, innovation, and employability. With our academic and industry
                experience, we are committed to introducing modern, career-oriented programs and practical
                learning approaches that prepare students to meet global standards.
              </p>

              <p>
                We strongly believe that students from rural backgrounds possess immense potential. With
                the right guidance, exposure, and opportunities, they can achieve remarkable success. Our
                goal is to bridge the gap between education and industry by promoting hands-on learning,
                internships, and skill-based training.
              </p>

              <p>
                The college provides a supportive environment with dedicated faculty, essential
                infrastructure, and student-friendly policies, including government scholarships and fee
                reimbursement schemes. We are continuously working towards strengthening digital learning
                resources, industry collaborations, and placement opportunities.
              </p>

              <p>
                We encourage students to develop not only academically but also personally by participating
                in co-curricular and community-based activities. Leadership, discipline, and ethical values
                are key pillars of our educational philosophy.
              </p>

              <p>
                As directors, we are committed to taking Dr. S.R.J. Degree College to greater heights and
                ensuring that every student who walks into this institution leaves with knowledge,
                confidence, and a clear path toward success.
              </p>

              <p>
                We invite students and parents to join us in this journey of growth, innovation, and
                excellence.
              </p>

              <p style={{ textAlign: "center", fontWeight: "bold", marginTop: "20px" }}>
                “Transforming Education into Opportunity and Success.”
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="about-section about-section--alt" id="vision-mission">
        <div className="about-container">
          <div className="about-vision">
            <div className="about-vision__block">
              <h2>Vision</h2>
              <p>{collegeInfo.vision}</p>
            </div>

            <div className="about-vision__block">
              <h2>Mission</h2>
              <p>{collegeInfo.mission}</p>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}