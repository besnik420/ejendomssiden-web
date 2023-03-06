import React, { useContext, useState } from "react";
import { LoadScript } from "@react-google-maps/api";
import Input from "./Input";
import { useFormik } from "formik";
import { FormContext } from "./PropertyMultiStepForm";
import { Button } from "./Button";
import Map from "./Map";
import Autocomplete from 'react-google-autocomplete';
export const Address = ({ onNextStep }) => {
  const { formData, setFormData } = useContext(FormContext);
  const [finalAddress, setFinalAddress] = useState('');
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
            {/* <Input
              label="Address"
              placeholder="e.g. Stephen King"
              id="address"
              name="address"
              onChange={formik.handleChange}
              value={formik.values.address}
            /> */}
            <div>
              <label className="font-medium text-sm text-primary-marine-blue block mt-2">
                Address
              </label>
              <Autocomplete
                apiKey="AIzaSyBDcPQ768Mg9crvF2aJRAhqvnSeCQClU1o"
                onPlaceSelected={(place) => {
                  formik.setFieldValue("address", place.formatted_address);
                }}
                types={["address"]}
                componentrestrictions={{ country: "US" }}
                value={formik.values.address}
                onChange={(e) =>
                  formik.setFieldValue("address", e.target.value)
                }
                onBlur={(e)=> setFinalAddress(e.target.value)}
                className="border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all 
              focus:outline-none focus:ring-1 focus:ring-bg-blue-100 font-medium"
              />
            </div>
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
              <Map address={finalAddress} />
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
