import { GiLoveInjection, GiBrokenBone } from "react-icons/gi";
import { FiScissors } from "react-icons/fi";
import { FaHandHoldingMedical } from "react-icons/fa";

const OurServices = [
  {
    name: "Medical Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FaHandHoldingMedical,
  },
  {
    name: "Broken Bone Treatment",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GiBrokenBone,
  },
  {
    name: "Grooming",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: FiScissors,
  },
  {
    name: "Vaccination",
    description:
      "Lorem ipsum, dolor sit amet consectetur adipisicing elit. Maiores impedit perferendis suscipit eaque, iste dolor cupiditate blanditiis ratione.",
    icon: GiLoveInjection,
  },
];

export default function Example() {
  return (
    <div className="py-12 bg-white">
      <div className="max-w-7xl mx-20 px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-orange-500 font-semibold">
            Our Services
          </h2>
          <p className="mt-2 md:text-5xl text-4xl font-bold text-gray-900">
            A better way to treat our pets
          </p>
          <p className="mt-4 mb-10 max-w-2xl md:text-xl text-base text-gray-500 lg:mx-auto">
            Lorem ipsum dolor sit amet consect adipisicing elit. Possimus magnam
            voluptatum cupiditate veritatis in accusamus quisquam.
          </p>
        </div>

        <div className="mt-10">
          <dl className="space-y-10 md:space-y-0 md:grid md:grid-cols-2 md:gap-x-8 md:gap-y-10">
            {OurServices.map((service) => (
              <div key={service.name} className="relative cursor-pointer">
                <dt>
                  <div className="absolute flex items-center justify-center h-12 w-12 rounded-md bg-orange-500 text-white">
                    <service.icon className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <p className="ml-16 text-lg leading-6 font-medium text-gray-900">
                    {service.name}
                  </p>
                </dt>
                <dd className="mt-2 ml-16 md:text-base text-sm text-gray-500">
                  {service.description}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </div>
  );
}
