import React, { useState } from "react";
import { Address } from "./Address";
import Description from "./Description";
import Details from "./Details";
import Details2 from "./Details2";
import Media from "./Media";
import { ThankYou } from "./ThankYou";
import { FormContext } from "./PropertyMultiStepForm";

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

  return stepContent;
}

export default StepForm;
