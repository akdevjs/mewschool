import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import TestimonyCard from "./TestimonyCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 3,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 3,
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
function Testimonies() {
  const data = [
    "std-1",
    "std-2",
    "std-3",
    "std-4",
    "std-1",
    "std-2",
    "std-3",
    "std-4",
  ];
  return (
    <section className="w-full flex flex-col gap-16 h-[100vh] px-10 py-16 bg-white">
      <h1 className="text-7xl ml-7">What our students say</h1>
      <Carousel responsive={responsive}>
        {data.map((data, index) => (
          <TestimonyCard key={index} img={data} />
        ))}
      </Carousel>
    </section>
  );
}

export default Testimonies;
