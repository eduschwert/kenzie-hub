import React from "react"

import { STitle } from "../../styles/typography"

import { ButtonX, SDiv } from "./style"

const Modal = () => {
  return (
    <SDiv>
      <div>
        <div>
          <STitle
            tag="h5"
            fontSize="1.4rem"
            fontWeigth="700"
            color="var(--color-grey-0)"
          >
            Nenhuma tecnologia cadastrada
          </STitle>
          <ButtonX>X</ButtonX>
        </div>
        <div></div>
      </div>
    </SDiv>
  )
}

export default Modal
