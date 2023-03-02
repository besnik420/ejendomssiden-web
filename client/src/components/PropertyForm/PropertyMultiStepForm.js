import React, {useState} from "react";
import { Button } from "./Button";
import { Address } from "./Address";
import Sidebar from "./Sidebar";
import { ThankYou } from "./ThankYou";
import Details from "./Details";
import Details2 from "./Details2";
import Description from "./Description";
import Navbar from "../HomePage/Navbar";
import Media from "./Media";

const PropertyMultiStepForm = () => {
  const [step, setStep] = useState(1);

  const nextStep = (onGoingStep) => {
   	if (step === 6) return;
    if (step === 1 || (onGoingStep && onGoingStep !== 1 && step === 1)) {
   
    }
    setStep((step) => {
      if (onGoingStep) return onGoingStep;
      return step + 1;
    });
  };

const goBack = () => {
  if (step === 1) return;
  setStep((step) => step - 1);
};

  return (
    <>
    <main className="h-screen flex flex-col text-neutral-cool-gray w-full lg:mx-auto lg:max-w-[58.75rem] lg:mt-20 
    lg:flex-row grow lg:p-4 lg:rounded-lg lg:bg-white lg:h-[35rem] lg:shadow">
      <Sidebar currentStep={step} handleNextStep={nextStep} />
      <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
        <form className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] flex w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
          {step === 1 && <Address />}
          {step === 2 && <Details />}
          {step === 3 && <Details2 />}
          {step === 4 && <Description/>}
          {step === 5 && <Media/>}
          {step === 6 && <ThankYou />}
        </form>
        {step < 6 && (
          <menu className="flex justify-between p-4 mt-auto">
            <li>
              <Button className="bg-slate-100 " onClick={goBack}>
                Go Back
              </Button>
            </li>
            <li>
              <Button onClick={() => nextStep()} type={"secondary"}>
                {step !== 5 ? "Next Step" : "Confirm"}
              </Button>
            </li>
          </menu>
        )}
      </div>
    </main>
    </>
  );
};

export default PropertyMultiStepForm;
