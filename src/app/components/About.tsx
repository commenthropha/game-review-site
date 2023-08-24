import React from "react";

/*
 * Data to be mapped and displayed within the about section
 */
const data: { title: string; content: string }[] = [
  {
    title: "Retro Games",
    content:
      "Step back in time and join us on a nostalgic journey as we revisit the classic games that have shaped the gaming landscape. Our retro series of reviews brings you insights, memories, and critical perspectives on beloved vintage games that continue to hold a special place in our hearts.",
  },
  {
    title: "Modern Releases",
    content:
      "Join us as we dive headfirst into the latest releases, exploring the innovative gameplay, stunning visuals, and captivating narratives that define the present-day gaming experience. aim is to celebrate the present and future of gaming, highlighting the games that are shaping the modern gaming landscape.",
  },
  {
    title: "Community Suggestions",
    content:
      "At our gaming community, your voice matters. Every week, we'll present you with a selection of diverse and exciting game options, ranging from newly released blockbusters to indie gems and nostalgic classics. You'll have the opportunity to vote for the game you're most curious about hearing what the community has to say.",
  },
];

/*
 * Section to display information about the website
 */
const About = () => {
  return (
    <div
      className={`mt-20 border-8 border-double rounded-md border-red-900 border-solid m-2 p-8 sm:m-20 md:m-24 flex flex-col`}
    >
      <div className="m-3 flex flex-col md:flex-row justify-between md:items-center">
        <h3 className="tracking-tighter font-inconsolata text-red-800 min-w-[8rem] font-bold text-3xl">
          What Is Our Aim?
        </h3>
        <p className="tracking-tighter font-inconsolatamt-4 md:mt-0 max-w-[90rem] pl-0 md:pl-6">
          Our mission is to guide you through the vast and diverse landscape of
          video games, helping you make informed decisions about what to play
          next. Our aim is not just to share our own experiences, but to help
          you find the games that resonate with your preferences. With our team
          of dedicated gamers and critics, we provide objective insights -
          highlighting both strengths and weaknesses - so you can make the right
          choice based on your tastes. Whether you're a casual gamer looking for
          a quick escape or a hardcore enthusiast seeking your next gaming
          obsession, we're here to assist you on your journey.
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="font-extrabold text-5xl md:ml-4">Level Up Your Game</h2>
        <p className="text-red-700 mt-4 md:mt-0 tracking-tighter font-inconsolata">
          See Our Reviews
        </p>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        {data.map((item, index) => (
          <div key={index} className="m-4 md:m-8">
            <h3 className="tracking-tighter font-inconsolata text-red-800 font-bold text-3xl">
              {item.title}
            </h3>
            <hr className="mt-1 border-red-800" />
            <p className="mt-3 ">{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
