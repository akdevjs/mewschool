import Image from "next/image";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";

function Statistics() {
  const data = [
    {
      name: "learners",
      number: "1,000+",
    },
    {
      name: "courses",
      number: "500+",
    },
    {
      name: "Nationalities",
      number: "150+",
    },
    {
      name: "organizations",
      number: "10+",
    },
  ];
  const [ref, inView] = useInView({
    triggerOnce: true,
  });

  return (
    <section className="relative flex flex-col gap-10 items-center justify-center text-center sm:py-28 py-10 sm:px-72 px-10 text-white h-full ">
      <div ref={ref} className="absolute top-5 w-full flex  z-0 ">
        <svg
          width="1576"
          height="366"
          viewBox="0 0 1576 366"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-auto w-[100vw]"
        >
          <motion.path
            d="M0.5 235.5C302.5 249.833 919.3 261 970.5 191C1021.7 121 906.5 49.8333 842.5 23C764.667 -2.49999 618.2 -18.5 655 121.5C691.8 261.5 880.667 299.5 970.5 301L1575 360.5"
            stroke="#CFE155"
            stroke-width="10"
            initial={{
              opacity: 0,
              pathLength: 0,
            }}
            animate={
              inView && {
                opacity: 1,
                pathLength: 1,
              }
            }
            transition={{
              duration: 2,
              ease: "easeInOut",
            }}
          />
        </svg>
      </div>
      <div className="relative z-10 sm:w-28 sm:h-28 hidden sm:block">
        <Image className="object-contain" src="/mew-logo.jpeg" fill alt="mew" />
      </div>
      <Image
        className="object-contain sm:hidden block relative z-10"
        src="/mew-logo.jpeg"
        alt="mew"
        width={100}
        height={100}
      />
      <h1
        style={{ boxShadow: "0 0 15px 15px #131b32" }}
        className="relative z-10 text-center sm:text-7xl text-5xl bg-[#131B32] p-5 shadow-ll"
      >
        In our virtual university, we go beyond the mere creation of degrees
      </h1>
      <p className="sm:px-40 ">
        We are dedicated to life transformation. Operating in 99 countries
        globally, we proudly maintain a 98% student satisfaction rate,
        underscoring our steadfast dedication to delivering high-quality
        education that equips individuals to excel in their professional
        endeavors and beyond.
      </p>
      <div className="sm:flex grid grid-cols-2 gap-10 flex-wrap justify-between w-full">
        {data.map((data, key) => (
          <div className="flex flex-col gap-2" key={key}>
            <p className="text-2xl">{data.name}</p>
            <h3 className="text-5xl">
              <b>{data.number}</b>
            </h3>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Statistics;
