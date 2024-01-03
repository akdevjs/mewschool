import type { NextPage } from "next";
import Head from "next/head";
import Header from "../components/Header";
import HeroSection from "../components/HeroSection";
import WhyMew from "../components/WhyMew";
import InforSection from "../components/InfoSection";
import Testimonies from "../components/Testimonies";
import Courses from "../components/Courses";
import Statistics from "../components/Statistics";
import Footer from "../components/Footer";

const Home: NextPage = () => {
  return (
    <div className="min-h-[100vh] bg-[#131B32]">
      <Head>
        <title>MEW School of Leadership</title>
        <meta
          name="description"
          content="MEW School of Leadership is inspired by the Magnificent Eagle Wings and draws lessons from it to instill leadership in our students. The Magnificent Eagle Wings relates beautifully to Power, Passion, and People as the basis for understanding and instilling leadership."
        />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Header />
      <HeroSection />
      <WhyMew />
      <InforSection />
      <Testimonies />
      <Courses
        heading="Executive Courses"
        subHeading="Stay Ahead in Your Industry."
        isDark={true}
      />
      <Courses
        heading="Diploma Programs"
        subHeading="Fast-track Your University progression."
        isDark={false}
      />
      <Courses
        heading="Accelerated Master’s Programs"
        subHeading="Power-Packed Learning for Executives."
        isDark={true}
      />
      <Courses
        heading="Online Degrees"
        subHeading="In-depth Analysis, Worldwide Recognition, Complete it with comfort"
        isDark={false}
      />
      <Statistics />
      <Footer />
    </div>
  );
};

export default Home;
