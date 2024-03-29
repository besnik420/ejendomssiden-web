import React, { useState } from "react";
import { CheckIcon, ChevronUpDownIcon } from "@heroicons/react/20/solid";
import { Listbox, Transition } from "@headlessui/react";

const SelectList = ({ options, label, onChange, name, id }) => {
  const [selected, setSelected] = useState(options[0]);
const handleOptionSelect = (selectedOption) => {
  setSelected(selectedOption);
  onChange(selectedOption);
};
  return (
    <div className="w-full mt-1">
      <label
        htmlFor="living-area"
        className="text-primary-marine-blue font-medium text-sm"
      >
        {label}
      </label>
      <Listbox
        value={selected}
        name={name}
        //onChange={setSelected}
        onChange={handleOptionSelect}
        id={id}
      >
        <div className="relative">
          <Listbox.Button
            className="relative w-full cursor-default rounded bg-white py-2 pl-3 pr-10 text-left border border-neutral-light-gray 
          focus:outline-none focus-visible:border-indigo-500 focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75 ]
          focus-visible:ring-offset-2 focus-visible:ring-offset-orange-300 sm:text-sm font-medium "
          >
            <span className="block truncate">{selected.name}</span>
            <span className="pointer-events-none absolute inset-y-0 right-0 flex items-center pr-2">
              <ChevronUpDownIcon
                className="h-5 w-5 text-gray-400"
                aria-hidden="true"
              />
            </span>
          </Listbox.Button>
          <Transition
            as={React.Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options
              className="absolute mt-1 max-h-60 w-full overflow-auto rounded bg-white py-1 text-base shadow-lg ring-1 ring-black 
            ring-opacity-5 focus:outline-none sm:text-sm z-10"
            >
              {options.map((option, optionIdx) => (
                <Listbox.Option
                  key={optionIdx}
                  className={({ active }) =>
                    `relative cursor-default select-none py-2 pl-10 pr-4 ${
                      active ? "bg-sky-100 text-sky-900" : "text-gray-900"
                    }`
                  }
                  value={option}
                >
                  {({ selected }) => (
                    <>
                      <span
                        className={`block truncate ${
                          selected ? "font-medium" : "font-normal"
                        }`}
                      >
                        {option.name}
                      </span>
                      {selected ? (
                        <span className="absolute inset-y-0 left-0 flex items-center pl-3 text-sky-600">
                          <CheckIcon className="h-5 w-5" aria-hidden="true" />
                        </span>
                      ) : null}
                    </>
                  )}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </div>
      </Listbox>
    </div>
  );
};

export default SelectList;
