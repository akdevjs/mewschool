import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import InfoCard from "./InfoCard";

const responsive = {
  superLargeDesktop: {
    breakpoint: { max: 4000, min: 3000 },
    items: 1,
  },
  desktop: {
    breakpoint: { max: 3000, min: 1024 },
    items: 1,
  },
  tablet: {
    breakpoint: { max: 1024, min: 464 },
    items: 1,
  },
  mobile: {
    breakpoint: { max: 464, min: 0 },
    items: 1,
  },
};

function InforSection() {
  const data = [
    {
      img: "info-1",
      heading: "A Business Shool For those made to do",
      content:
        "Business is about getting things done, not just theory. We bring together creative, open-minded people from all over the world to do business, not just study it. So that they graduate ready to thrive in an ever-changing world",
    },
    {
      img: "info-2",
      heading: "A Concept Base Leadership School",
      content:
        "MEW School of Leadership is inspired by the Magnificent Eagle Wings and draws lessons from it to instill leadership in our students. The Magnificent Eagle Wings relates beautifully to Power, Passion, and People as the basis for understanding and instilling leadership.",
    },
    {
      img: "info-3",
      heading: "We believe in the Leader in you",
      content:
        "Our Courses are designed to invoke the inner leader in you to take on the challenges of the day and turn opportunities into tangible success for you and the people around you. Study with Passion, Gain the power of knowledge, and inspire the people around you.",
    },
  ];
  return (
    <section className="h-[100vh] w-full">
      <Carousel responsive={responsive}>
        {data.map((data, key) => (
          <InfoCard
            key={key}
            img={data.img}
            heading={data.heading}
            content={data.content}
          />
        ))}
      </Carousel>
    </section>
  );
}

export default InforSection;
