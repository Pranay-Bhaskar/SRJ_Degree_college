import { HelmetProvider, Helmet } from "react-helmet-async";
import Hero from "../components/Hero";
import About from "../components/About";
//import WhyChooseUs from "../components/WhyChooseUs";
//import Courses from "../components/Courses";
//import Facilities from "../components/Facilities";
//import Management from "../components/Management";
//import Admissions from "../components/Admissions";
import News from "../components/News";
import Gallery from "../components/Gallery";
import Placements from "../components/Placements";
import Contact from "../components/Contact";

export default function Home() {
  return (
    <>
      <Helmet>
        <title>Dr. SRJ Degree College, Atmakur | Admissions Open 2026–27</title>
        <meta
          name="description"
          content="Dr. SRJ Degree College, Atmakur, Nellore — Affiliated to Vikrama Simhapuri University. Government-aided UG degree programs including BA, B.Sc, BCA, B.Com. Admissions open for 2026–27."
        />
        <meta name="keywords" content="SRJ Degree College, Atmakur, Nellore, VSU Affiliated, BA Telugu, BCA, B.Com, Dairy Science, Admissions 2026" />
        <meta property="og:title" content="Dr. SRJ Degree College, Atmakur" />
        <meta property="og:description" content="Quality rural education at Dr. SRJ Degree College, Atmakur, Nellore. Affiliated to Vikrama Simhapuri University." />
        <link rel="canonical" href="https://srjdegreecollege.ac.in/" />
      </Helmet>

      <main>
        <Hero />
        <About />
        {/* <WhyChooseUs /> */}
        {/* <Courses /> 
        <Facilities />
        <Management />
        <Admissions />
        <News />*/}
        <Gallery />
        <Placements />
        <Contact />
      </main>
    </>
  );
}
