import React from "react";
import Image from "next/image";
import AboutImage from "../public/images/About.jpg";

function About() {
  return (
    <div className="flex justify-between min-w-7xl my-24 md:flex-row flex-col gap-y-10">
      <div className="mx-20">
        <Image
          src={AboutImage}
          width={800}
          height={800}
          objectfit="cover"
          className="rounded-2xl shadow-lg"
        />
      </div>
      <div className="md:mr-20 mx-10">
        <h2 className="text-base text-orange-500 font-semibold">About Us</h2>
        <p className="mt-2 mb-5 text-5xl font-bold text-gray-900 sm:text-4xl">
          Let's Know each other More closly
        </p>
        <p className="md:text-base text-sm  text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
          perspiciatis minus. Qui ducimus quae expedita quod aliquam laborum
          placeat, blanditiis possimus facere asperiores ut quas hic eos nihil
          repudiandae.
        </p>
        <p className="md:text-base text-sm text-gray-400">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum ab
          perspiciatis minus. Qui ducimus quae expedita quod aliquam laborum
          placeat, blanditiis possimus facere asperiores ut quas hic eos nihil
          repudiandae.
        </p>
        <button className="my-10 text-white bg-orange-500 font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
          Learn More
        </button>
      </div>
    </div>
  );
}

export default About;
