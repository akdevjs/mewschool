import Image from "next/image";

interface Props {
  img: string;
  heading: string;
  content: string;
}

function InfoCard({ img, heading, content }: Props) {
  return (
    <article className="text-5xl flex w-full h-[100vh]">
      {/* Left Image */}
      <div className="relative w-[50%] h-full">
        <Image
          className="object-cover w-full h-full"
          src={`/${img}.jpg`}
          alt=""
          fill
        />
      </div>
      {/* Info  */}
      <div className="w-[50%] p-32 flex flex-col gap-5 text-white items-center justify-center text-center">
        <h1 className="text-7xl">{heading}</h1>
        <p className="text-lg">{content}</p>
      </div>
    </article>
  );
}

export default InfoCard;
