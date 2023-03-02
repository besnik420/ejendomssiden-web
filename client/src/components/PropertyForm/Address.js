import React from 'react'
import Input from './Input';

export const Address = () => {

	return (
    <section className="flex flex-col gap-4 w-full">
      <h2>The location of the ad</h2>
      <p>Please provide your address, region and territory.</p>
      <div className="flex justify-between gap-x-3">
        <Input
          label="Address"
          placeholder="e.g. Stephen King"
        />

        <Input
          label="Region"
          type="email"
          placeholder="e.g. Region of Southern Denmark"
        />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input
          label="Town"
          placeholder="e.g. ..."
        />
        <Input
          label="Territory"
          placeholder="e.g. ..."
        />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input
          label="Zip Code"
          placeholder="e.g. ..."
        />
        <Input
          label="Country"
          placeholder="e.g. ..."
        />
      </div>
    </section>
  );
};
