import React from "react";

function Notify() {
  return (
    <div className="min-w-7xl mx-20 my-24 bg-orange-500 flex rounded-lg shadow-lg p-10">
      <div className="text-center mb-10 flex-col flex justify-center items-center gap-2 ">
        <h2 className="font-semibold md:text-5xl text-4xl text-white mb-4">
          Get Started Today
        </h2>
        <p className="font-semibold md:text-base text-sm text-white my-2 ">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quasi, ullam
          voluptas? Aut dolores illo consequuntur eveniet reiciendis, obcaecati
          placeat cum.
        </p>
        <button className="mt-5 text-orange-500 bg-white w-auto font-semibold rounded-full px-5 md:py-4 py-2 hover:bg-black hover:shadow-lg">
          Request a Demo
        </button>
      </div>
    </div>
  );
}

export default Notify;
