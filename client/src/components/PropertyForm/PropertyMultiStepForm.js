import React, { useState, createContext } from "react";
import Sidebar from "./Sidebar";
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
        <FormContext.Provider value={{  formData, setFormData }}>
          <Sidebar />
          <div className="px-4 relative bg-neutral-magnolia  lg:bg-transparent lg:flex lg:flex-col lg:w-full ">
            <div className="bg-neutral-alabaster px-6 py-9 rounded-[0.625rem] -translate-y-[4.5rem] flex w-full grow [&_h2]:text-2xl [&_h2]:font-bold [&_h2]:text-primary-marine-blue [&_h3]:font-medium [&_h3]:text-primary-marine-blue lg:bg-transparent lg:translate-y-0 ">
              <StepForm/>
            </div>
          </div>
        </FormContext.Provider>
      </main>
    </>
  );
};

export default PropertyMultiStepForm;
