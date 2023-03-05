import React, { useContext } from "react";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";
import SelectList from "./SelectList";

const Description = ({ onNextStep, handlePreviousStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const categoryTypes = [
    { name: "Select category" },
    { name: "Open house" },
    { name: "Home & Business" },
    { name: "Residential rental" },
    { name: "Café" },
    { name: "Retail & Shop" },
    { name: "Domicile" },
    { name: "Condominium" },
    { name: "Profession" },
    { name: "Regular seat" },
    { name: "Flex space" },
    { name: "Hotel & Restaurant" },
    { name: "Industrial" },
    { name: "Clinic" },
    { name: "Office" },
    { name: "Warehouse & Production" },
    { name: "Apartment" },
    { name: "Closed office" },
    { name: "Terraced house" },
    { name: "Retail" },
    { name: "Sold by owner" },
    { name: "Sold" },
    { name: "Cottage" },
    { name: "Supply" },
    { name: "Rented" },
    { name: "Workshop" },
    { name: "Villa" },
  ];
  const shownInTypes = [
    { name: "Select an option" },
    { name: "Profession" },
    { name: "Purchase" },
    { name: "Rent" },
    { name: "Investment" },
    { name: "Office hotel" },
  ];
  const propertyStatusTypes = [
    { name: "Select an option" },
    { name: "Open house" },
    { name: "Purchase agreement signed" },
    { name: "New price" },
    { name: "Sold by owner" },
    { name: "Sold" },
    { name: "Rented" },
  ];
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
      propertyStatus: "",
    },
    onSubmit: (values) => {
      const data = { ...formData, ...values };
      setFormData(data);
      onNextStep();
    },
  });
  const handleCategoryTypeChange = (selectedOption) => {
    formik.setFieldValue("category", selectedOption.name);
  };
  const handleShownInTypeChange = (selectedOption) => {
    formik.setFieldValue("shownIn", selectedOption.name);
  };
  const handlePropertyStatusChange = (selectedOption) => {
    formik.setFieldValue("propertyStatus", selectedOption.name);
  };
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
            <SelectList
              options={categoryTypes}
              label={"Category"}
              onChange={handleCategoryTypeChange}
              name={"category"}
              id={"category"}
            />
            <SelectList
              options={shownInTypes}
              label={"Shown in"}
              onChange={handleShownInTypeChange}
              name={"shownIn"}
              id={"shownIn"}
            />
          </div>
          <div className="flex justify-between gap-x-3 w-1/2">
            <SelectList
              options={propertyStatusTypes}
              label={"Property Status"}
              onChange={handlePropertyStatusChange}
              name={"propertyStatus"}
              id={"propertyStatus"}
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
