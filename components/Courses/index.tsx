import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import {
  ComputerDesktopIcon,
  AcademicCapIcon,
  ClipboardDocumentIcon,
} from "@heroicons/react/24/solid";
import CourseCard from "./CourseCard";

interface Props {
  isDark: boolean;
  heading: string;
  subHeading: string;
}

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 4,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 4,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 2,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};
function Courses({ isDark, heading, subHeading }: Props) {
  const data = ["course-1", "course-2", "course-3", "course-4", "course-5"];
  return (
    <section
      className={`w-full flex flex-col justify-center gap-16 min-h-[100vh] px-10 py-16 ${
        isDark ? "text-white" : "bg-white"
      }`}
    >
      <div className="flex flex-col gap-5">
        <h1 className="text-7xl sm:ml-7 ml-4">{heading}</h1>
        <h2 className="text-2xl sm:ml-7 ml-4 text-[#CFE255]">{subHeading}</h2>
        <div className="flex sm:flex-row flex-col gap-3 sm:gap-10 sm:ml-7 ml-4">
          <div className="flex  items-center gap-2 text-lg sm:text-sm">
            <ComputerDesktopIcon className="sm:w-5 sm:h-5 w-8 h-8" />
            <h3>
              <b>Practically Summarise Learning</b>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-sm">
            <ClipboardDocumentIcon className="sm:w-5 sm:h-5 w-8 h-8" />
            <h3>
              <b>Industry Connected Scenarios</b>
            </h3>
          </div>
          <div className="flex items-center gap-2 text-lg sm:text-sm">
            <AcademicCapIcon className="sm:w-5 sm:h-5 w-8 h-8" />
            <h3>
              <b>Start Now, Finish in NO Time</b>
            </h3>
          </div>
        </div>
      </div>
      <Carousel responsive={responsive}>
        {data.map((data, index) => (
          <CourseCard img={data} key={index} />
        ))}
      </Carousel>
    </section>
  );
}

export default Courses;
