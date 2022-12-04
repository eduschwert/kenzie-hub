import React from "react"

import { SSelect } from "./style.js"

const SelectStyled = ({ id, label, register, login, error }) => {
  return (
    <SSelect error={error}>
      <label htmlFor={id}>{label}</label>
      <select id={id} {...register} {...login}>
        <option value="Primeiro módulo (Introdução ao Frontend)">
          Primeiro módulo
        </option>
        <option value="Segundo módulo (Frontend avançado)">
          Segundo módulo
        </option>
        <option value="Terceiro módulo (Introdução ao Backend)">
          Terceiro módulo
        </option>
        <option value="Quarto módulo (Backend avançado)">Quarto módulo</option>
      </select>
    </SSelect>
  )
}

export default SelectStyled
