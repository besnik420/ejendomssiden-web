import React from "react";
import Input from "./Input";

const Details2 = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <div className="flex justify-between gap-x-3">
        <Input
          label="Available from (*date)"
          placeholder="e.g. ..."
          type="date"
        />
        <Input label="Basement (*text)" placeholder="e.g. ..." />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Structure type" placeholder="e.g. ..." />
        <Input label="Number of floors" placeholder="e.g. ..." />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Check with broker (*text)" placeholder="e.g. ..." />
        <Input
          label="Owner's expense per month (*text)"
          placeholder="e.g. ..."
        />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Energy class" placeholder="e.g. ..." />
        <Input label="Energy index in kWh/m2a" placeholder="e.g. ..." />
      </div>

      <label className="font-medium text-sm text-primary-marine-blue ">
        Owner/Broker notes (* not visible in front end)
      </label>
      <textarea
        className="border border-neutral-light-gray rounded px-4 py-2 text-sm
      focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue"
      ></textarea>
    </section>
  );
};

export default Details2;
