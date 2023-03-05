import React, { useContext } from "react";
import { LoadScript } from "@react-google-maps/api";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";
import Map from "./Map";

export const Address = ({ onNextStep }) => {
  const { formData, setFormData } = useContext(FormContext);

  const formik = useFormik({
    initialValues: {
      address: "",
      region: "",
      town: "",
      zipCode: "",
      territory: "",
      country: "",
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
          <h2>The location of the ad</h2>
          <p>Please provide your address, region and territory.</p>
          <div className="flex justify-between gap-x-3">
            <Input
              label="Address"
              placeholder="e.g. Stephen King"
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            />

            <Input
              label="Region"
              id="region"
              name="region"
              placeholder="e.g. Region of Southern Denmark"
              onChange={formik.handleChange}
              value={formik.values.region}
            />
          </div>
          <div className="flex justify-between gap-x-3 mb-2">
            <Input
              label="Town"
              placeholder="e.g. ..."
              id="town"
              name="town"
              onChange={formik.handleChange}
              value={formik.values.town}
            />
            <Input
              label="Territory"
              placeholder="e.g. ..."
              id="territory"
              name="territory"
              onChange={formik.handleChange}
              value={formik.values.territory}
            />
          </div>
          {/* <div className="flex justify-between gap-x-3">
            <Input
              label="Zip Code"
              placeholder="e.g. ..."
              id="zipCode"
              name="zipCode"
              onChange={formik.handleChange}
              value={formik.values.zipCode}
            />
            <Input
              label="Country"
              placeholder="e.g. ..."
              name="country"
              id="country"
              onChange={formik.handleChange}
              value={formik.values.country}
            />
          </div> */}
          <div>
            <LoadScript
              googleMapsApiKey="AIzaSyBDcPQ768Mg9crvF2aJRAhqvnSeCQClU1o"
              libraries={["places"]}
            >
              <Map/>
            </LoadScript>
          </div>
        </div>
        <menu className="flex justify-end">
          <li>
            <Button type={"secondary"}>Next Step</Button>
          </li>
        </menu>
      </form>
    </section>
  );
};
