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
  return (
    <section className="flex flex-col gap-10 items-center justify-center text-center py-28 px-72 text-white ">
      <h1 className="text-7xl">
        In our virtual university, we go beyond the mere creation of degrees
      </h1>
      <p className="px-40">
        We are dedicated to life transformation. Operating in 99 countries
        globally, we proudly maintain a 98% student satisfaction rate,
        underscoring our steadfast dedication to delivering high-quality
        education that equips individuals to excel in their professional
        endeavors and beyond.
      </p>
      <div className="flex justify-between w-full">
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
