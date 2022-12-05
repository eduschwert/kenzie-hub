import React from "react"

import { SInput } from "./style.js"

const Input = ({ id, label, type, placeholder, register, disabled }) => {
  return (
    <SInput>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        disabled={disabled}
        type={type}
        placeholder={placeholder}
        {...register}
      />
    </SInput>
  )
}

export default Input
