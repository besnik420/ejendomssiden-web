import React, { useContext } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";

const Details = ({ onNextStep, activeStepIndex, handlePreviousStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const formik = useFormik({
    initialValues: {
      livingArea: "",
      groundArea: "",
      rooms: "",
      bedrooms: "",
      bathrooms: "",
      garage: "",
      ownerExpense: "",
      buildRebuilt: "",
    },
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      onNextStep();
    },
  });
  return (
    <section className="flex flex-col gap-4 w-full">
      <form onSubmit={formik.handleSubmit} id="form-step-2">
        <div className="min-h-[26.5rem]">
          <h2>Advertisement details</h2>
          <div className="flex justify-between gap-x-3">
            <div className="w-full">
              <label
                htmlFor="living-area"
                className="text-primary-marine-blue font-medium"
              >
                Living area m<sup>2</sup>
              </label>
              <Input
                placeholder="e.g. 100"
                name="livingArea"
                id="livingArea"
                onChange={formik.handleChange}
                value={formik.values.livingArea}
              />
            </div>
            <div className="w-full">
              <label
                htmlFor="ground-area"
                className="text-primary-marine-blue font-medium"
              >
                Ground area m<sup>2</sup>
              </label>
              <Input
                placeholder="e.g. 150"
                name="groundArea"
                id="groundArea"
                onChange={formik.handleChange}
                value={formik.values.groundArea}
              />
            </div>
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Rooms"
              placeholder="e.g. 4"
              name="rooms"
              id="rooms"
              onChange={formik.handleChange}
              value={formik.values.rooms}
            />
            <Input
              label="Bedrooms (*numbers only)"
              type="number"
              placeholder="e.g. 3"
              name="bedrooms"
              id="bedrooms"
              onChange={formik.handleChange}
              value={formik.values.bedrooms}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Bathrooms (* numbers only)"
              type="number"
              placeholder="e.g. 2"
              name="bathrooms"
              id="bathrooms"
              onChange={formik.handleChange}
              value={formik.values.bathrooms}
            />
            <Input
              label="Garage(s) (*text)"
              placeholder="e.g. ..."
              name="garage"
              id="garage"
              onChange={formik.handleChange}
              value={formik.values.garage}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Built/Rebuilt (*text)"
              placeholder="e.g. ..."
              name="buildRebuilt"
              id="buildRebuilt"
              onChange={formik.handleChange}
              value={formik.values.buildRebuilt}
            />
            <Input
              label="Owner's expense per month (*text)"
              placeholder="e.g. ..."
              name="ownerExpense"
              id="ownerExpense"
              onChange={formik.handleChange}
              value={formik.values.ownerExpense}
            />
          </div>
        </div>
        <menu className="flex justify-between">
          <li>
            <Button className="bg-slate-100" onClick={handlePreviousStep}>
              Go Back
            </Button>
          </li>
          <li>
            <Button type={"secondary"}>Next Step</Button>
          </li>
        </menu>
      </form>
    </section>
  );
};

export default Details;
