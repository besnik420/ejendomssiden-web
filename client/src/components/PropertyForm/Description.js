import React, { useContext } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";

const Description = ({ onNextStep, handlePreviousStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const formik = useFormik({
    initialValues: {
      title: "",
      priceDKK: "",
      priceLabel: "",
      labelBeforePrice: "",
      anualPropertyTax: "",
      shownIn: "",
      category: "",
      garage: "",
    },
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      onNextStep();
    },
  });
  return (
    <section className="flex flex-col gap-4 w-full">
      <form onSubmit={formik.handleSubmit}>
        <div className="min-h-[26.5rem]">
          <h2>Description of property</h2>
          <div className="flex justify-between gap-x-3">
            <Input
              label="* Title (required)"
              placeholder="e.g. 4"
              name="title"
              id="title"
              onChange={formik.handleChange}
              value={formik.values.title}
            />
            <Input
              label="Price in: DKK (only numbers)"
              placeholder=""
              type="number"
              name="priceDKK"
              id="priceDKK"
              onChange={formik.handleChange}
              value={formik.values.priceDKK}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Label by price (eg 'per month')"
              placeholder="e.g. 2"
              name="priceLabel"
              id="priceLabel"
              onChange={formik.handleChange}
              value={formik.values.priceLabel}
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
              label="Label before price (eg 'from')"
              placeholder="e.g. ..."
              name="labelBeforePrice"
              id="labelBeforePrice"
              onChange={formik.handleChange}
              value={formik.values.labelBeforePrice}
            />
            <Input
              label="Annual property tax"
              placeholder="e.g. ..."
              name="anualPropertyTax"
              id="anualPropertyTax"
              onChange={formik.handleChange}
              value={formik.values.anualPropertyTax}
            />
          </div>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Category"
              placeholder="e.g. ..."
              name="category"
              id="category"
              onChange={formik.handleChange}
              value={formik.values.category}
            />
            <Input
              label="Shown in"
              placeholder="e.g. ..."
              name="shownIn"
              id="shownIn"
              onChange={formik.handleChange}
              value={formik.values.shownIn}
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

export default Description;
