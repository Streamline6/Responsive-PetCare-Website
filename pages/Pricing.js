import React from "react";

function Pricing() {
  return (
    <div className="min-w-7xl mx-20 my-24">
      <div className="text-center mb-10 flex-col flex ">
        <p className="font-semibold text-lg text-orange-500 mb-2 block">
          Pricing Table
        </p>
        <h2 className="font-bold md:text-5xl text-4xl text-gray-800  mb-4">
          Our Pricing Plan
        </h2>
      </div>

      <div className="grid md:grid-cols-3 grid-cols-1 gap-y-5">
        {/* first */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="bg-white border border-gray-200 rounded-md p-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                Lite
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $45
                <span className="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>

              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  20 Online Booking
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  1 Staff Calender
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Customer recalls
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24/7 ready
                </p>
              </div>
              <button className="text-white bg-orange-500 font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>

        {/* second */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="bg-white border border-gray-200 rounded-md p-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                Regular
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $60
                <span className="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>

              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  120 Online Booking
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  10 Staff Calender
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Customer recalls
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24/7 ready
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Google Calendar sync
                </p>
              </div>
              <button className="text-white bg-orange-500 font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
        {/* Third */}
        <div className="flex flex-wrap justify-center">
          <div className="w-full px-4">
            <div className="bg-white border border-gray-200 rounded-md p-10">
              <span className="text-primary font-semibold text-lg block mb-4">
                Permium
              </span>
              <h2 className="font-bold text-dark mb-5 text-[42px]">
                $90
                <span className="text-base text-body-color font-medium">
                  / year
                </span>
              </h2>

              <div className="mb-7">
                <p className="text-base text-body-color leading-loose mb-1">
                  Unlimited Online Booking
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  upto 50 Staff Calender
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Automatic recalls
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  24/7 ready
                </p>
                <p className="text-base text-body-color leading-loose mb-1">
                  Google Calendar sync
                </p>
              </div>
              <button className="text-white bg-orange-500 font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
                Subscribe Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
