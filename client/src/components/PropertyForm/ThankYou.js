import ThankYouIcon from './assets/icon-thank-you.svg';
import React, { useContext } from "react";
import { FormContext } from "./PropertyMultiStepForm";

export const ThankYou = () => {
  const { formData } = useContext(FormContext);

  console.log("Form data: ");
  console.log(formData);
  return (
    <section className="flex flex-col justify-center items-center w-full gap-4 py-[36px]">
      <figure className="w-[60px] h-[60px]">
        <img src={ThankYouIcon} alt="Form compleated, thank you!" />
      </figure>
      <h2 className="text-center">
        Thank you for submitting your property information!
      </h2>
      <span className="text-center">
        <p>
          Our team will review your submission and get back to you as soon as
          possible. In the meantime, please feel free to contact us with any
          questions or additional details you'd like to share. We look forward
          to helping you sell or rent your property.
        </p>
      </span>
    </section>
  );
};
