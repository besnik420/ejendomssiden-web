import React from 'react';
import Input from "./Input";

const Description = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>Description of property</h2>
      <div className="flex justify-between gap-x-3">
        <Input label="* Title (required)" placeholder="e.g. 4" />
        <Input label="Price in: DKK (only numbers)" placeholder="" />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Label by price (eg 'per month')" placeholder="e.g. 2" />
        <Input label="Garage(s) (*text)" placeholder="e.g. ..." />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Label before price (eg 'from')" placeholder="e.g. ..." />
        <Input label="Annual property tax" placeholder="e.g. ..." />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Category" placeholder="e.g. ..." />
        <Input label="Shown in" placeholder="e.g. ..." />
      </div>
      
    </section>
  );
}

export default Description