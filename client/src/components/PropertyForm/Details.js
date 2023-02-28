import React from 'react'
import clsx from "clsx";
import Input from "./Input";


const Details = ({ userInfo, updateUserInfo, showRequired }) => {
  const handlePersonalInfo = (event, key) => {
    const updatedUserInfo = { ...userInfo };
    updatedUserInfo[key] = event.currentTarget.value;
    updateUserInfo(updatedUserInfo);
  };

  return (
    <section className="flex flex-col gap-4 w-full">
      <h2>Advertisement details</h2>
      <p>Please provide your living area, ground area and number of rooms.</p>
      <label
        htmlFor="living-area"
        className="text-primary-marine-blue font-medium"
      >
        Living area m<sup>2</sup>
      </label>
      <Input
        placeholder="e.g. 100"
        showRequired={showRequired && !userInfo.name}
        value={userInfo.name}
        onChange={(e) => handlePersonalInfo(e, "name")}
      />
      <label
        htmlFor="ground-area"
        className="text-primary-marine-blue font-medium"
      >
        Ground area m<sup>2</sup>
      </label>
      <Input
        type="email"
        placeholder="e.g. 150"
        showRequired={
          showRequired && (!userInfo.email || !userInfo.email.includes("@"))
        }
        value={userInfo.email}
        onChange={(e) => handlePersonalInfo(e, "email")}
      />

      <Input
        label="Rooms"
        placeholder="e.g. ..."
        showRequired={showRequired && !userInfo.phone}
        value={userInfo.phone}
        onChange={(e) => handlePersonalInfo(e, "phone")}
      />
    </section>
  );
};

export default Details