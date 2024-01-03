import Image from "next/image";
interface Props {
  img: string;
}
function TestimonyCard({ img }: Props) {
  return (
    <article className="px-10 flex flex-col gap-5">
      {/* Image */}
      <div className="relative w-full h-[350px]">
        <Image
          className="object-cover"
          src={`/${img}.jpg`}
          alt="student"
          fill
        />
      </div>
      {/* Content */}
      <h3 className="text-3xl">
        <em>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias ipsam
          quibusdam ullam cumque.
        </em>
      </h3>
      {/* Student info */}
      <div className="text-xl pl-3 border-l-4 border-red-600 flex flex-col">
        <b>Simon Horton</b>
        <p>BS Computer Science</p>
      </div>
    </article>
  );
}

export default TestimonyCard;
