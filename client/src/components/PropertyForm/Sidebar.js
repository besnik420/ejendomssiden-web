import React from 'react'
import clsx from "clsx";

const steps = [
  {
    step: 1,
    title: "Address",
  },
  {
    step: 2,
    title: "Details",
  },
  {
    step: 3,
    title: "Description",
  },
  {
    step: 4,
    title: "Media",
  },
];
const Sidebar = ({ currentStep, handleNextStep }) => {
  console.log("Current step: " + currentStep)
  return (
    <div>
      <aside className="bg-sidebar-image-mobile h-[13rem] lg:h-[32rem] bg-cover bg-no-repeat lg:rounded-lg lg:bg-sidebar-image-desktop">
        <nav>
          <ol className="flex justify-center pt-8 gap-4 lg:flex-col lg:w-60 lg:mx-autor">
            {steps.map((step) => (
              <li
                className="flex gap-4 lg:ml-8 items-center bg-semi-transparent-grayish-color pl-4 rounded-md"
                key={step.step}
              >
                <button
                  className={clsx(
                    "px-3 py-2 border border-white inline-flex rounded-full leading-none font-medium w-min h-min transition-colors duration-[400ms]",
                    currentStep === step.step
                      ? "bg-primary-light-blue text-primary-marine-blue border-primary-light-blue"
                      : "text-white"
                  )}
                  onClick={() => handleNextStep(step.step)}
                >
                  {step.step}
                </button>
                <span className="hidden lg:inline text-white uppercase">
                  <p
                    className={clsx(
                      "font-normal",
                      currentStep === step.step
                        ? "text-primary-marine-blue"
                        : "text-white"
                    )}
                  >
                    Step {step.step}
                  </p>
                  <span
                    className={clsx(
                      "font-bold",
                      currentStep === step.step
                        ? "text-primary-marine-blue"
                        : "text-white"
                    )}
                  >
                    {step.title}
                  </span>
                </span>
              </li>
            ))}
          </ol>
        </nav>
      </aside>
    </div>
  );
}

export default Sidebar