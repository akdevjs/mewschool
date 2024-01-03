import Image from "next/image";
import { motion } from "framer-motion";
import { useState } from "react";

interface Props {
  img: string;
  heading: string;
  content: string;
}

function InfoCard({ img, heading, content }: Props) {
  const [inView, setInView] = useState(false);
  const setFunction = () => {
    setInView(true);
  };
  return (
    <article className="text-5xl flex sm:flex-row flex-col w-full h-[100vh]">
      {/* Left Image */}
      <div className="relative w-full h-[50%] sm:w-[50%] sm:h-full">
        <Image
          className="object-cover w-full h-full"
          src={`/${img}.jpg`}
          alt=""
          fill
        />
      </div>
      {/* Info  */}
      <div className="relative sm:w-[50%] sm:p-32 h-[50%] p-14 sm:h-auto flex flex-col gap-5 text-white items-center justify-center text-center">
        <motion.div
          whileInView={setFunction}
          className="absolute top-0 sm:-top-2 w-full flex justify-center z-0 overflow-y-hidden"
        >
          <svg
            width="283"
            height="982"
            viewBox="0 0 283 982"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="w-auto h-[50vh] sm:h-[105vh]"
          >
            <motion.path
              d="M172 3C110.167 49.6667 -9.39997 174.7 7.00003 301.5C27.5 460 290.5 503 276.5 654.5C265.3 775.7 122.5 922.667 52.5 981"
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
        </motion.div>
        <h1
          style={{ boxShadow: "0 0 15px 15px #131b32" }}
          className="relative z-10 text-center text-7xl bg-[#131B32] p-5 shadow-ll"
        >
          {heading}
        </h1>
        <p
          style={{ boxShadow: "0 0 15px 15px #131b32" }}
          className="relative  bg-[#131B32]  z-10 text-lg"
        >
          {content}
        </p>
      </div>
    </article>
  );
}

export default InfoCard;
