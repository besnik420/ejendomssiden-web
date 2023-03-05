import React from 'react'
import clsx from "clsx";

export const Input = ({
  label,
  value,
  name,
  type = "text",
  placeholder = "Enter a value",
  showRequired = false,
  required = true,
  onChange,
  onBlur
}) => {
  return (
    <div className="flex flex-col font-medium w-full">
      <span className="inline-flex justify-between">
        <label htmlFor={label} className="text-sm text-primary-marine-blue mt-2">
          {label}
        </label>
        {required && showRequired && (
          <p className="text-primary-starberry-red leading-3">
            This field is required
          </p>
        )}
      </span>
      <input
        type={type}
        className={clsx(
          "border border-neutral-light-gray rounded px-4 py-2 text-sm transition-all focus:outline-none focus:ring-1 focus:ring-bg-blue-100",
          showRequired && required && "ring-1 ring-primary-starberry-red"
        )}
        placeholder={placeholder}
        onChange={onChange}
        value={value}
        name={name}
        onBlur={onBlur}
      />
    </div>
  );
};


export default Input