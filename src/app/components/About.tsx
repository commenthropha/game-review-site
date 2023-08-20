import React from "react";
import { title } from "process";

const data: { title: string; content: string }[] = [
  {
    title: "Heading 1",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla vitae massa molestie malesuada. Suspendisse potenti. In fringilla dui gravida eros eleifend, a blandit nibh dapibus. Aenean dapibus fermentum gravida.",
  },
  {
    title: "Heading 2",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla vitae massa molestie malesuada. Suspendisse potenti. In fringilla dui gravida eros eleifend, a blandit nibh dapibus. Aenean dapibus fermentum gravida.",
  },
  {
    title: "Heading 3",
    content:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla vitae massa molestie malesuada. Suspendisse potenti. In fringilla dui gravida eros eleifend, a blandit nibh dapibus. Aenean dapibus fermentum gravida.",
  },
];

const About = () => {
  return (
    <div
      className={`mt-20 border-8 border-double rounded-md border-red-950 border-solid m-2 p-8 sm:m-20 md:m-24 flex flex-col`}
    >
      <div className="m-3 flex flex-col md:flex-row justify-between md:items-center">
        <h3 className="text-red-800 min-w-[8rem] font-bold text-3xl">What Is Our Aim?</h3>
        <p className="mt-4 md:mt-0 max-w-[90rem] pl-0 md:pl-6">
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed nec nulla
          vitae massa molestie malesuada. Suspendisse potenti. In fringilla dui
          gravida eros eleifend, a blandit nibh dapibus. Aenean dapibus
          fermentum gravida. Fusce feugiat ligula quis lorem consequat varius.
          Duis in ligula sed magna ultrices sollicitudin quis sit amet elit.
          Cras mollis dui luctus dui pulvinar dictum. Donec efficitur lacus vel
          ligula sagittis varius. Integer tincidunt orci in molestie
          condimentum.
        </p>
      </div>
      <div className="my-10 flex flex-col md:flex-row justify-between md:items-center">
        <h2 className="font-extrabold text-5xl md:ml-4">Level Up Your Game</h2>
        <p className="text-red-700 mt-4 md:mt-0">See Our Reviews</p>
      </div>
      <div className="flex flex-col justify-between lg:flex-row">
        {data.map((item, index) => (
          <div key={index} className="m-4 md:m-8">
            <h3 className="text-red-800 font-bold text-3xl">{item.title}</h3>
            <hr className="mt-1 border-red-800"/>
            <p className="mt-3 " >{item.content}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default About;
