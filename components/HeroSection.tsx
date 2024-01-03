import { motion } from "framer-motion";
function HeroSection() {
  const pathVariant = {
    hidden: {
      opacity: 0,
      pathLength: 0,
    },
    visible: {
      opacity: 1,
      pathLength: 1,
      transition: {
        duration: 2,
        ease: "easeInOut",
      },
    },
  };
  return (
    <section>
      {/* Head of Hero Section */}
      <div className="relative w-full text-white flex flex-col gap-5 items-center justify-center p-10 h-[50vh]">
        <div className="absolute h-full w-full flex justify-center z-0">
          <svg
            height="1009"
            viewBox="0 0 531 1009"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-[150%] -my-40"
          >
            <motion.path
              d="M288.5 5C75.1667 149.5 -223.5 441.9 288.5 455.5C800.5 469.1 365.833 826.833 84.5 1004"
              stroke="#CFE155"
              stroke-width="10"
              variants={pathVariant}
              initial="hidden"
              animate="visible"
            />
          </svg>
        </div>
        <h1
          style={{ boxShadow: "0 0 15px 15px #131b32" }}
          className="relative z-10 text-center text-7xl bg-[#131B32] p-5 shadow-ll"
        >
          We Believe in the <em>Leader</em> in you!
        </h1>
        <button className="relative bg-[#131B32] z-10 text-xl border border-[#CFE255] p-5 hover:border-white transition-all duration-300">
          Join For Free
        </button>
      </div>
      {/* Video */}
      <div className="relative h-[70vh] w-full">
        <video
          src="/hero.mp4"
          className="absolute h-full object-cover w-full"
          autoPlay
          muted
          loop
        />
        <div className="absolute h-full w-full z-10 bg-black opacity-[.5]" />
      </div>
    </section>
  );
}

export default HeroSection;
const headerData = [
  {
    name: "Eecutive Courses",
    Subheadings: [
      {
        heading: "Certificate Courses In",
        subHeadings: [
          "Socio-economic Rights Economic Crisis and Legal Doctrine",
          "Managing Health and Social Care Strategies",
          "Understanding Exchange Rate System",
          "Tourism Promotion and Travel Distribution System",
          "Development and Human Resource Management",
          "Human Resource Management And Organisational Strategy, Structure And Culture",
        ],
      },
      {
        heading: "Higher Certificate Courses in",
        subHeadings: [
          "International Financial Crimes",
          "Operations and Information Management for Project Managers",
          "Leading Change in Health and Social Care",
          "International Banking Regulations and Supervision",
          "Managing People in Health and Social Care",
          "Humanistic Therapy",
        ],
      },
    ],
  },
  {
    name: "Diploma Program",
    Subheadings: [
      {
        heading: "Certificate Courses In",
        subHeadings: [
          "Socio-economic Rights Economic Crisis and Legal Doctrine",
          "Managing Health and Social Care Strategies",
          "Understanding Exchange Rate System",
          "Tourism Promotion and Travel Distribution System",
          "Development and Human Resource Management",
          "Human Resource Management And Organisational Strategy, Structure And Culture",
        ],
      },
      {
        heading: "Higher Certificate Courses in",
        subHeadings: [
          "International Financial Crimes",
          "Operations and Information Management for Project Managers",
          "Leading Change in Health and Social Care",
          "International Banking Regulations and Supervision",
          "Managing People in Health and Social Care",
          "Humanistic Therapy",
        ],
      },
    ],
  },
  {
    name: "Accelerated Masters",
    Subheadings: [
      {
        heading: "Certificate Courses In",
        subHeadings: [
          "Socio-economic Rights Economic Crisis and Legal Doctrine",
          "Managing Health and Social Care Strategies",
          "Understanding Exchange Rate System",
          "Tourism Promotion and Travel Distribution System",
          "Development and Human Resource Management",
          "Human Resource Management And Organisational Strategy, Structure And Culture",
        ],
      },
      {
        heading: "Higher Certificate Courses in",
        subHeadings: [
          "International Financial Crimes",
          "Operations and Information Management for Project Managers",
          "Leading Change in Health and Social Care",
          "International Banking Regulations and Supervision",
          "Managing People in Health and Social Care",
          "Humanistic Therapy",
        ],
      },
    ],
  },
  {
    name: "Online Degrees",
    Subheadings: [
      {
        heading: "Certificate Courses In",
        subHeadings: [
          "Socio-economic Rights Economic Crisis and Legal Doctrine",
          "Managing Health and Social Care Strategies",
          "Understanding Exchange Rate System",
          "Tourism Promotion and Travel Distribution System",
          "Development and Human Resource Management",
          "Human Resource Management And Organisational Strategy, Structure And Culture",
        ],
      },
      {
        heading: "Higher Certificate Courses in",
        subHeadings: [
          "International Financial Crimes",
          "Operations and Information Management for Project Managers",
          "Leading Change in Health and Social Care",
          "International Banking Regulations and Supervision",
          "Managing People in Health and Social Care",
          "Humanistic Therapy",
        ],
      },
    ],
  },
];
