import React from "react";

function WhyMew() {
  const data = [
    {
      heading: "Your Success Drives Our Passion",
      content:
        "We believe learning cannot be achieved without passion. Here are MEW, the only thing that drives our strategies and decisions is to make sure you succeed in every aspect we can contribute. We not only focus on what you will learn with us but how it shapes your future.",
    },
    {
      heading: "We are ridiculously Helpful",
      content:
        "Most of our learning is not successful because of small disturbances. At MEW, we have trained staff for just one job - to not let you feel a thing apart from learning. Your focus on the study is so important to us, that our learning technology is tuned to only the time you set for study.",
    },
    {
      heading:
        "MEWBook Learning Experience feels so intuitive - learning becomes friends’ chat.",
      content:
        "The best way to know is to talk to your friends. MEWBook, our intuitive learning portal, has been designed in that way. Everything is right there, working to enhance your learning experience with minimal effort, just the way you would like it to be.",
    },
    {
      heading: "Take our courses anywhere and to anyone, they will say WOW.",
      content:
        "Our courses are deeply researched and industry-connected with the highest accreditation from globally recognized academic partners. Your degree will be everywhere and forever. From learning content to the way it appears to the time when you are ready, we have meticulously planned everything for you.",
    },
  ];
  return (
    <section className="bg-white p-10 flex flex-col gap-4 items-center text-center">
      <h1 className="text-5xl">
        Why study with <em>MEWSchool</em>
      </h1>
      <p className="sm:w-[60%]">
        We believe in the power of you, and we will not relent until you succeed
        in achieving what you have set out to do. MEW School is for those MADE
        TO DO. Explore the true meaning of yourself and set out to change the
        world. We know you haven{"'"}t been ready. That is why our seamless
        learning technology and eager-to-help staff are there for you.
      </p>

      <div className="grid sm:grid-cols-2 gap-10 sm:w-[70%]">
        {data.map((data, key) => (
          <div
            key={key}
            className="flex flex-col gap-2 p-5 border border-[#CFE255]"
          >
            <h2 className="font-bold text-xl">{data.heading}</h2>
            <p className="text-sm">{data.content}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default WhyMew;
