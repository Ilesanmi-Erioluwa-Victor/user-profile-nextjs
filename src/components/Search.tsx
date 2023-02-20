import React from "react";
import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import PropTypes, { InferProps } from "prop-types";

const SearchProps = {
  placeholder: PropTypes.string.isRequired,
  inputClass: PropTypes.string,
  fieldClass: PropTypes.string,
};
export default function Search({
  placeholder,
  inputClass,
  fieldClass,
}: InferProps<typeof SearchProps>): JSX.Element {
  return (
    <div className={`w-full`}>
      <fieldset
        className={`w-full flex items-center border bg-white rounded-lg ${fieldClass}`}>
        <MagnifyingGlassIcon className="w-5 h-5" />
        <input
          type="text"
          placeholder={placeholder}
          className={`focus:outline-none w-full pr-8 ${inputClass}`}
        />
      </fieldset>
    </div>
  );
}
