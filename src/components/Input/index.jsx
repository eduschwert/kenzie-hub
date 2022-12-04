import React from "react"

import { SInput } from "./style.js"

const Input = ({ id, label, type, placeholder, register, error }) => {
  return (
    <SInput error={error}>
      <label htmlFor={id}>{label}</label>
      <input id={id} type={type} placeholder={placeholder} {...register} />
    </SInput>
  )
}

export default Input
