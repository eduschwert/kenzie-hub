import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { techSchemaCreate, techSchemaEdit } from "./techSchema";

import { STitle } from "../../styles/typography";
import { SDivInputGroup } from "../../styles/form";
import { SDiv, SButtonX } from "./style";

import { CreateTechnology } from "./CreateTechnology";
import { EditDeleteTechnology } from "./EditDeleteTechnology";

export const Modal = () => {
  const { createTechnology, editTechnology, setModalOpen, modalChildren } =
    useContext(TechContext);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(
      modalChildren === "createTechnology" ? techSchemaCreate : techSchemaEdit
    ),
  });

  return (
    <SDiv id="modal-close">
      <form
        id="modal-form"
        onSubmit={handleSubmit(
          modalChildren === "createTechnology"
            ? createTechnology
            : editTechnology
        )}
      >
        <div>
          <STitle
            tag="h5"
            fontSize="1.4rem"
            fontWeigth="700"
            color="var(--color-grey-0)"
          >
            Nenhuma tecnologia cadastrada
          </STitle>
          <SButtonX type="button" onClick={() => setModalOpen(false)}>
            X
          </SButtonX>
        </div>
        <div>
          <SDivInputGroup marginBottom="2rem">
            {modalChildren === "createTechnology" ? (
              <CreateTechnology register={register} errors={errors} />
            ) : (
              <EditDeleteTechnology register={register} errors={errors} />
            )}
          </SDivInputGroup>
        </div>
      </form>
    </SDiv>
  );
};
