import React, {useState} from "react";
import { Button } from "./Button";
import { Address } from "./Address";
import Sidebar from "./Sidebar";
import { ThankYou } from "./ThankYou";
import Details from "./Details";

const PropertyMultiStepForm = () => {
  const [step, setStep] = useState(1);
	const [showRequired, setShowRequiredFields] = useState(false);

  const nextStep = (onGoingStep) => {
   	if (step === 5) return;
    if (step === 1 || (onGoingStep && onGoingStep !== 1 && step === 1)) {
      if (
        !userServiceConfiguration.userInfo.name ||
        !userServiceConfiguration.userInfo.email ||
        !userServiceConfiguration.userInfo.email.includes("@") ||
        !userServiceConfiguration.userInfo.phone
      ) {
        setShowRequiredFields(true);
        return;
      }
    }
    setStep((step) => {
      if (onGoingStep) return onGoingStep;
      return step + 1;
    });
  };
	const [userServiceConfiguration, setUserServiceConfiguration] =useState(    {
      userInfo: {
        name: "",
        email: "",
        phone: "",
      },
    })

const goBack = () => {
  if (step === 1) return;
  setStep((step) => step - 1);
};

const updateUserInfo = (userInfo) => {
  setUserServiceConfiguration({ ...userServiceConfiguration, userInfo });
};

  return (
    <main className="h-screen flex flex-col text-neutral-cool-gray w-full lg:mx-auto lg:max-w-[58.75rem] lg:mt-20 lg:flex-row grow lg:p-4 lg:rounded-lg lg:bg-white lg:h-[33.75rem] lg:shadow">
      <Sidebar currentStep={step} handleNextStep={nextStep} />
      <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
        <form className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] flex w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
          {step === 1 && (
            <Address
              userInfo={userServiceConfiguration.userInfo}
              updateUserInfo={updateUserInfo}
              showRequired={showRequired}
            />
          )}
          {step === 2 && (
            <Details
              userInfo={userServiceConfiguration.userInfo}
              updateUserInfo={updateUserInfo}
              showRequired={showRequired}
            />
          )}
          {step === 3 && <p>Step 3</p>}
          {step === 4 && <p>Step 4</p>}
          {step === 5 && <ThankYou />}
        </form>
        {step < 5 && (
          <menu className="flex justify-between p-4 mt-auto">
            <li>
              <Button className="bg-slate-100 text-slate-500" onClick={goBack}>
                Go Back
              </Button>
            </li>
            <li>
              <Button
                onClick={() => nextStep()}
                type={step !== 4 ? "secondary" : "primary"}
              >
                {step !== 4 ? "Next Step" : "Confirm"}
              </Button>
            </li>
          </menu>
        )}
      </div>
    </main>
  );
};

export default PropertyMultiStepForm;
