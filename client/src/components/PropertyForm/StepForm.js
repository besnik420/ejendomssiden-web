import React, { useState } from "react";
import { Address } from "./Address";
import Description from "./Description";
import Details from "./Details";
import Details2 from "./Details2";
import Media from "./Media";
import Sidebar from "./Sidebar";
import { ThankYou } from "./ThankYou";

function StepForm() {
 const [activeStepIndex, setActiveStepIndex] = useState(0);
 const handleNextStep = () => {
   setActiveStepIndex(activeStepIndex + 1);
 };
  const handlePreviousStep = () => {
    setActiveStepIndex(activeStepIndex - 1);
  };
  let stepContent;
  switch (activeStepIndex) {
    case 0:
      stepContent = (
        <Address
          onNextStep={handleNextStep}
          activeStepIndex={activeStepIndex}
        />
      );
      break;
    case 1:
      stepContent = (
        <Details
          onNextStep={handleNextStep}
          activeStepIndex={activeStepIndex}
          handlePreviousStep={handlePreviousStep}
        />
      );
      break;
    case 2:
      stepContent = (
        <Details2
          onNextStep={handleNextStep}
          activeStepIndex={activeStepIndex}
          handlePreviousStep={handlePreviousStep}
        />
      );
      break;
    case 3:
      stepContent = (
        <Description
          onNextStep={handleNextStep}
          activeStepIndex={activeStepIndex}
          handlePreviousStep={handlePreviousStep}
        />
      );
      break;
    case 4:
      stepContent = (
        <Media
          onNextStep={handleNextStep}
          activeStepIndex={activeStepIndex}
          handlePreviousStep={handlePreviousStep}
        />
      );
      break;
    case 5:
      stepContent = <ThankYou />;
      break;
    default:
      break;
  }

  return (
    <>
      <Sidebar onNextStep={handleNextStep} activeStepIndex={activeStepIndex} />
      <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
        <div className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] flex w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
          {stepContent}
        </div>
      </div>
    </>
  );
}

export default StepForm;
