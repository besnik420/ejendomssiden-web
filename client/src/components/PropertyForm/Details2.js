import React, { useContext } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";

const Details2 = ({ onNextStep, handlePreviousStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const formik = useFormik({
    initialValues: {
      availableFrom: "",
      basement: "",
      structureType: "",
      noFloors: "",
      checkBroker: "",
      tag: "",
      energyClass: "",
      energyIndex: "",
      ownerNotes: "",
    },
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      alert(JSON.stringify(data, null, 2));
      onNextStep();
    },
  });
  return (
    <section className="flex flex-col gap-4 w-full">
      <form onSubmit={formik.handleSubmit} id="form-step-3">
        <div className="min-h-[26.5rem]">
          <div className="flex justify-between gap-x-3">
            <Input
              label="Available from (*date)"
              placeholder="e.g. ..."
              type="date"
              name="availableFrom"
              id="availableFrom"
              onChange={formik.handleChange}
              value={formik.values.availableFrom}
            />
            <Input
              label="Basement (*text)"
              placeholder="e.g. ..."
              name="basement"
              id="basement"
              onChange={formik.handleChange}
              value={formik.values.basement}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Structure type"
              placeholder="e.g. ..."
              name="structureType"
              id="structureType"
              onChange={formik.handleChange}
              value={formik.values.structureType}
            />
            <Input
              label="Number of floors"
              placeholder="e.g. ..."
              name="noFloors"
              id="noFloors"
              onChange={formik.handleChange}
              value={formik.values.noFloors}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Check with broker (*text)"
              placeholder="e.g. ..."
              name="checkBroker"
              id="checkBroker"
              onChange={formik.handleChange}
              value={formik.values.checkBroker}
            />
            <Input
              label="Tag (*text)"
              placeholder="e.g. ..."
              name="tag"
              id="tag"
              onChange={formik.handleChange}
              value={formik.values.tag}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Energy class"
              placeholder="e.g. ..."
              name="energyClass"
              id="energyClass"
              onChange={formik.handleChange}
              value={formik.values.energyClass}
            />
            <Input
              label="Energy index in kWh/m2a"
              placeholder="e.g. ..."
              name="energyIndex"
              id="energyIndex"
              onChange={formik.handleChange}
              value={formik.values.energyIndex}
            />
          </div>
          <label className="font-medium text-sm text-primary-marine-blue block mt-2">
            Owner/Broker notes (* not visible in front end)
          </label>
          <textarea
            cols={80}
            className="border border-neutral-light-gray rounded px-4 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-bg-blue-100 font-medium"
            name="ownerNotes"
            id="ownerNotes"
            onChange={formik.handleChange}
            value={formik.values.ownerNotes}
          ></textarea>
        </div>
        <menu className="flex justify-between">
          <li>
            <Button className="bg-slate-100 " onClick={handlePreviousStep}>
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

export default Details2;
