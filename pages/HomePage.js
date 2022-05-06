import React from "react";
import Image from "next/image";
import { BsFillPlayCircleFill } from "react-icons/bs";
import HeroImage from "../public/images/HeroImage.png";

function HomePage() {
  return (
    <div className="flex md:flex-row flex-col justify-around items-center min-w-7xl">
      {/* textual area */}
      <div className="flex flex-col items-start justify-start md:ml-20 mx-10 mt-10 md:mt-0">
        <p className="text-orange-500 font-semibold text-base">Veterinary</p>
        <h2 className="font-bold md:text-6xl text-5xl text-gray-800">
          Treating Your Pet By Our Professionals.
        </h2>
        <p className="md:text-base text-sm font-semibold text-gray-400 mt-5">
          {" "}
          When Tristan arrived, he was incredibly shut down and presented as
          almost feral—he could not be touched, wouldn’t leave his kennel, and
          spent the majority of his days hiding under his Kuranda bed or pressed
          against the far back wall of his kennel.
        </p>
        <div className="mt-10 flex justify-center items-center gap-5">
          <button className="text-white bg-orange-500 font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
            Create Schedule
          </button>
          <button className="bg-gray-50 rounded-full shadow-lg p-2">
            <BsFillPlayCircleFill className="text-orange-500 md:text-5xl text-4xl hover:text-black hover:shadow-lg" />
          </button>
        </div>
      </div>
      {/* image area */}
      <div className="mr-20 md:block hidden">
        <Image src={HeroImage} width={1500} height={1500} objectFit="cover" />
      </div>
    </div>
  );
}

export default HomePage;
