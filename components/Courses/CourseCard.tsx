import Image from "next/image";
interface Props {
  img: string;
}
function CourseCard({ img }: Props) {
  return (
    <article className="sm:px-10 px-5 flex flex-col gap-5">
      {/* Image */}
      <div className="relative w-full h-[200px]">
        <Image
          className="object-cover"
          src={`/${img}.jpg`}
          alt="student"
          fill
        />
      </div>
      {/* Content */}
      <div className="flex items-center text-sm text-[#CFE255] text-start">
        <span className="w-full">Online</span>
        <span className="sm:border-l sm:border-r border-[#CFE255] w-full sm:text-center">
          12 Months
        </span>
        <span className="w-full text-end">Assignment Base</span>
      </div>
      <h3 className="text-3xl">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias
      </h3>
      {/* Student info */}
      <div className="flex gap-3">
        <b>$144</b>
        <p className=" text-[#CFE255] line-through">$200</p>
      </div>
      <button className="text-sm border sm:w-[200px] border-[#CFE255] p-2 hover:border-white transition-all duration-300">
        Enroll Now
      </button>
    </article>
  );
}

export default CourseCard;
