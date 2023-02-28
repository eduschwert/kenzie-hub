import React, { useContext, useState } from "react";
import { TechContext } from "../../../contexts/TechContext";

import { TailSpin } from "react-loader-spinner";

import { SButton } from "../../../styles/Buttons";
import { SText } from "../../../styles/typography";
import { Input } from "../../Input";
import { Select } from "../../Select";
import { SDiv } from "./style";

export const EditDeleteTechnology = ({ register, errors }) => {
  const {
    loading,
    modalChildren: tech,
    setCurrentTechID,
    deleteTechnology,
  } = useContext(TechContext);

  const [localLoading, setLocalLoading] = useState(false);

  return (
    <>
      <Input
        type="text"
        label="Nome da tecnologia"
        placeholder={tech.title}
        disabled={true}
      />
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
      <SDiv>
        <SButton
          type="submit"
          disabled={loading}
          buttontype="primary"
          buttoncolor="primary"
          width="62%"
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
          {!loading && "Salvar Alterações"}
        </SButton>
        <SButton
          onClick={() => {
            setCurrentTechID(tech.id);
            deleteTechnology(setLocalLoading);
          }}
          type="button"
          disabled={localLoading}
          buttontype="primary"
          buttoncolor="grey-1"
          width="30%"
        >
          <TailSpin
            height="100%"
            width="100%"
            color="#F8F9FA"
            ariaLabel="tail-spin-loading"
            radius="1"
            wrapperStyle={{ width: "100%", height: "50%" }}
            wrapperClass=""
            visible={localLoading}
          />
          {!localLoading && "Excluir"}
        </SButton>
      </SDiv>
    </>
  );
};
