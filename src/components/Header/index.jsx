import React from "react"
import { SHeader } from "../../styles/Header"

const Header = () => {
  return (
    <SHeader marginBottom="3.8rem" marginTop="2rem">
      <STitle
        tag="h1"
        fontSize="2rem"
        fontWeigth="700"
        color="var(--color-primary)"
      >
        Kenzie Hub
      </STitle>
      <SLink to="/" buttontype="secondary" buttoncolor="grey-3">
        Voltar
      </SLink>
    </SHeader>
  )
}

export default Header
