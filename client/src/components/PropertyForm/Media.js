import React from 'react';
import Input from "./Input";

const Media = () => {
  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>The advertisement's images</h2>
      <div className="flex justify-between gap-x-3">
        <Input type="file" />
      </div>
      <div className="flex justify-between gap-x-3">
        <Input label="Video from" placeholder="e.g. 2" />
        <Input label="Add Video ID:" placeholder="e.g. ..." />
      </div>
      <label className="font-medium text-sm text-primary-marine-blue ">
        Virtual Tour:
      </label>
      <textarea className="border border-neutral-light-gray rounded px-4 py-2 text-sm 
      focus:outline-none focus:ring-1 focus:ring-primary-purplish-blue"></textarea>
    </section>
  );
}

export default Media