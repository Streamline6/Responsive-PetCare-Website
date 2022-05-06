import React from "react";
import Image from "next/image";
import First from "../public/images/First.jpg";
import Second from "../public/images/second.jpg";

function Testimonial() {
  return (
    <div>
      <div className="text-center mb-10 flex-col flex ">
        <p className="font-semibold text-lg text-orange-500 mb-2 block">
          Testimonial
        </p>
        <h2 className="font-bold text-5xl text-gray-800 mb-4">Testimonial</h2>
      </div>
      <div className="flex md:flex-row flex-col lg:justify-center gap-10 max-w-7xl mx-20">
        <div className="max-w-xl p-4 text-gray-800 bg-orange-500 rounded-lg shadow-md">
          <div className="mb-2">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-full ">
                <Image
                  src={First}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h5 className="font-bold text-orange-100">
                Alex{" "}
                <span className="text-sm text-orange-100">CEO / Founder</span>
              </h5>
            </div>
            <p className="mb-2 text-center text-gray-100">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
          </div>
        </div>
        <div className="max-w-xl p-4 text-gray-800 bg-orange-500 rounded-lg shadow-md">
          <div className="mb-2">
            <div className="flex items-center justify-center gap-4 mb-5">
              <div className="w-12 h-12 overflow-hidden bg-gray-100 border-2 border-gray-100 rounded-full ">
                <Image
                  src={Second}
                  width={100}
                  height={100}
                  objectFit="cover"
                  alt="img"
                  className="object-cover object-center w-full h-full"
                />
              </div>
              <h5 className="font-bold text-orange-100">
                John Doe{" "}
                <span className="text-sm text-orange-100">CEO / Founder</span>
              </h5>
            </div>
            <p className="mb-2 text-center text-gray-100">
              " Lorem ipsum dolor, sit amet consectetur adipisicing elit.
              Similique sapiente iusto esse. "
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Testimonial;
