import bg from "/assets/images/bg-sidebar-desktop.svg";
import bgMobile from "/assets/images/bg-sidebar-mobile.svg";

import { steps } from "../../utils/constants";
import { useFormStore } from "../../utils/store";

const Sidebar = () => {
  const { currentStep } = useFormStore();
  return (
    <div className="relative mr-10 flex-shrink-0">
      <img src={bgMobile} alt="Background" className="w-full h-full md:hidden" />
      <img src={bg} alt="Background" className="hidden md:block w-full h-full" />
      <div className="absolute top-0 left-0 w-full h-full flex md:flex-col justify-center md:justify-start items-start p-10">
        {steps.map((step, index) => (
          <div key={index} className="flex items-center mb-4">
            <div
              className={`w-8 h-8 rounded-full border border-white text-white flex justify-center items-center text-sm mb-[20px] ${
                currentStep === index + 1 ? "bg-[#BEE2FD] border-none" : "bg-inherit"
              }`}
            >
              {index + 1}
            </div>
            <ul className="list-none p-0 ml-5 gap-[2px] flex flex-col items-start justify-center mb-4">
              <li className="text-[#ABBCFF] uppercase text-xs md:flex hidden md:flex-col">
                {step.step}
              </li>
              <li className="text-white font-bold uppercase text-sm hidden md:block">
                {step.title}
              </li>
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
