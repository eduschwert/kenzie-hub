import React, { useContext } from "react"
import { TechContext } from "../../../contexts/TechContext"

import { TailSpin } from "react-loader-spinner"

import { SButton } from "../../../styles/Buttons"
import { SText } from "../../../styles/typography"
import { Input } from "../../Input"
import { Select } from "../../Select"

export const CreateTechnology = ({ register, errors }) => {
  const { loading } = useContext(TechContext)

  return (
    <>
      <Input
        type="text"
        label="Nome"
        placeholder="Typescript"
        id="title"
        register={register("title")}
        disabled={loading}
      />
      {errors.title && (
        <SText
          tag="p"
          fontSize="1.4rem"
          fontWeigth="400"
          color="var(--color-negative)"
          marginBottom="-1rem"
          marginTop="-2rem"
        >
          {errors.title.message}
        </SText>
      )}
      <Select
        label="Selecionar status"
        id="status"
        register={register("status")}
        disabled={loading}
        options={
          <>
            <option value="">Selecionar status</option>
            <option value="Iniciante">Iniciante</option>
            <option value="Intermediário">Intermediário</option>
            <option value="Avançado">Avançado</option>
          </>
        }
      />
      {errors.status && (
        <SText
          tag="p"
          fontSize="1.4rem"
          fontWeigth="400"
          color="var(--color-negative)"
          marginBottom="-1rem"
          marginTop="-2rem"
        >
          {errors.status.message}
        </SText>
      )}
      <SButton
        type="submit"
        disabled={loading}
        buttontype="primary"
        buttoncolor="primary"
        width="98.5%"
      >
        <TailSpin
          height="100%"
          width="100%"
          color="#F8F9FA"
          ariaLabel="tail-spin-loading"
          radius="1"
          wrapperStyle={{ width: "100%", height: "50%" }}
          wrapperClass=""
          visible={loading}
        />
        {!loading && "Cadastrar Tecnologia"}
      </SButton>
    </>
  )
}
