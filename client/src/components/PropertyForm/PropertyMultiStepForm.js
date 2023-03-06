import React, { useState, createContext } from "react";
import StepForm from "./StepForm";
export const FormContext = createContext();

const PropertyMultiStepForm = () => {
  const [formData, setFormData] = useState({});
  return (
    <>    
      <main
        className="h-screen flex flex-col text-neutral-cool-gray w-full lg:mx-auto lg:max-w-[58.75rem] lg:mt-20 
    lg:flex-row grow lg:p-4 lg:rounded-lg lg:bg-white lg:h-[35rem] lg:shadow"
      >
        <FormContext.Provider value={{ formData, setFormData }}>
          <StepForm />
        </FormContext.Provider>
      </main>
    </>
  );
};

export default PropertyMultiStepForm;
