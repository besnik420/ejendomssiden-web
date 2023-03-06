import React, { useContext } from "react";
import Input from "./Input";
import { useState } from "react";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";
import SelectList from "./SelectList";
const Details2 = ({ onNextStep, handlePreviousStep }) => {
     const energyClassTypes = [
       { name: "Select energy type" },
       { name: "A" },
       { name: "A+" },
       { name: "B" },
       { name: "C" },
       { name: "D" },
       { name: "E" },
       { name: "F" },
       { name: "G" },
       { name: "H" },
     ];
     const structureType = [
       { name: "Select structure class" },
       { name: "Brick" },
       { name: "Tree" },
       { name: "Cement" },
     ];
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
      onNextStep();
       //alert(JSON.stringify(data, null, 2));
    },
  });
  const handleStructureTypeChange = (selectedOption) => {
    formik.setFieldValue("structureType", selectedOption.name);
  };
    const handleEnergyClassChange = (selectedOption) => {
      formik.setFieldValue("energyClass", selectedOption.name);
    };
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
            <SelectList
              options={structureType}
              label={"Structure type"}
              name="structureType"
              id="structureType"
              onChange={handleStructureTypeChange}
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
            <SelectList
              options={energyClassTypes}
              label={"Energy Class"}
              name="energyClass"
              id="energyClass"
              onChange={handleEnergyClassChange}
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
            className="w-full border border-neutral-light-gray rounded px-4 py-2 text-sm
          focus:outline-none focus:ring-1 focus:ring-bg-blue-100 font-medium"
            name="ownerNotes"
            id="ownerNotes"
            onChange={formik.handleChange}
            value={formik.values.ownerNotes}
          ></textarea>
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

export default Details2;
