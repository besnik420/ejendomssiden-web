import React from "react";
import Input from "./Input";

const Details = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>Advertisement details</h2>
      <div className="flex justify-between gap-x-3">
        <div className="w-full">
          <label
            htmlFor="living-area"
            className="text-primary-marine-blue font-medium"
          >
            Living area m<sup>2</sup>
          </label>
          <Input placeholder="e.g. 100" />
        </div>
        <div className="w-full">
          <label
            htmlFor="ground-area"
            className="text-primary-marine-blue font-medium"
          >
            Ground area m<sup>2</sup>
          </label>
          <Input placeholder="e.g. 150" />
        </div>
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Rooms" placeholder="e.g. 4" />
        <Input label="Bedrooms (*numbers only)" placeholder="e.g. 3" />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Bathrooms (* numbers only)" placeholder="e.g. 2" />
        <Input label="Garage(s) (*text)" placeholder="e.g. ..." />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Built/Rebuilt (*text)" placeholder="e.g. ..." />
        <Input
          label="Owner's expense per month (*text)"
          placeholder="e.g. ..."
        />
      </div>
    </section>
  );
};

export default Details;
