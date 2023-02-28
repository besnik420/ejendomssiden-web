import React from 'react'
import clsx from "clsx";
import Input from './Input';

export const Address = ({
	userInfo,
	updateUserInfo,
	showRequired,
}) => {
	const handlePersonalInfo = (
		event,
		key
	) => {
		const updatedUserInfo = { ...userInfo };
		updatedUserInfo[key] = event.currentTarget.value;
		updateUserInfo(updatedUserInfo);
	};

	return (
    <section className="flex flex-col gap-4 w-full">
      <h2>The location of the ad</h2>
      <p>Please provide your address, region and territory.</p>
      <Input
        label="Address"
        placeholder="e.g. Stephen King"
        showRequired={showRequired && !userInfo.name}
        value={userInfo.name}
        onChange={(e) => handlePersonalInfo(e, "name")}
      />

      <Input
        label="Region"
        type="email"
        placeholder="e.g. Region of Southern Denmark"
        showRequired={
          showRequired && (!userInfo.email || !userInfo.email.includes("@"))
        }
        value={userInfo.email}
        onChange={(e) => handlePersonalInfo(e, "email")}
      />

      <Input
        label="Territory"
        placeholder="e.g. ..."
        showRequired={showRequired && !userInfo.phone}
        value={userInfo.phone}
        onChange={(e) => handlePersonalInfo(e, "phone")}
      />
    </section>
  );
};
