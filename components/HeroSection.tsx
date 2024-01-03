function HeroSection() {
  return (
    <section>
      {/* Head of Hero Section */}
      <div className="w-full text-white flex flex-col gap-5 items-center justify-center h-[50vh]">
        <h1 className="text-7xl ">
          We Believe in the <em>Leader</em> in you!
        </h1>
        <button className="text-xl border border-[#CFE255] p-5 hover:border-white transition-all duration-300">
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
