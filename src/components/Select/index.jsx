import React from "react";

import { SSelect } from "./style.js";

export const Select = ({ id, label, register, disabled, options }) => {
  return (
    <SSelect>
      <label htmlFor={id}>{label}</label>
      <select id={id} disabled={disabled} {...register}>
        {options}
      </select>
    </SSelect>
  );
};
