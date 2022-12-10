import React from "react"
import { useContext } from "react"

import { AiOutlinePlus } from "react-icons/ai"

import { UserContext } from "../../contexts/UserContext"

import Modal from "../../components/Modal"

import { ContainerDashboard } from "../../styles/Container"
import { SHeader } from "../../styles/Header"
import { SDiv, SDivUserInformationsBox } from "./style"
import { SText, STitle } from "../../styles/typography"
import { SButton } from "../../styles/Buttons"
import { useState } from "react"

const DashboardPage = () => {
  const { logout, loading, user } = useContext(UserContext)

  const [modal, setModal] = useState(true)

  console.log(user)
  return (
    <>
      {modal && <Modal>oi</Modal>}
      <ContainerDashboard
        position="fixed"
        top="0"
        width="100%"
        height="7.2rem"
        backgroundColor="var(--color-grey-4)"
      >
        <SHeader margin="0 auto" width="80rem" maxWidth="100%" height="100%">
          <STitle
            tag="h1"
            fontSize="2rem"
            fontWeigth="700"
            color="var(--color-primary)"
          >
            Kenzie Hub
          </STitle>
          <SButton onClick={logout} buttontype="secondary" buttoncolor="grey-3">
            Sair
          </SButton>
        </SHeader>
      </ContainerDashboard>
      <SDivUserInformationsBox>
        <ContainerDashboard
          display="flex"
          justifyContent="space-between"
          alignItems="center"
        >
          <STitle
            tag="h2"
            fontSize="1.8rem"
            fontWeigth="700"
            color="var(--color-grey-0)"
          >
            {`Olá, ${user.name}`}
          </STitle>
          <SText
            tag="small"
            fontSize="1.2rem"
            fontWeigth="400"
            color="var(--color-grey-1)"
          >
            {user.course_module}
          </SText>
        </ContainerDashboard>
      </SDivUserInformationsBox>
      <ContainerDashboard>
        <SDiv>
          <STitle
            tag="h3"
            fontSize="1.6rem"
            fontWeigth="600"
            color="var(--color-grey-0)"
          >
            Tecnologias
          </STitle>
          <SButton buttontype="plus">
            <AiOutlinePlus />
          </SButton>
        </SDiv>
        {user.techs.length === 0 ? (
          <>
            <STitle
              tag="h4"
              fontSize="1.8rem"
              fontWeigth="700"
              color="var(--color-grey-0)"
              marginTop="3.7rem"
              marginBottom="2.3rem"
            >
              Nenhuma tecnologia cadastrada
            </STitle>
          </>
        ) : (
          <>
            <h1>Techs</h1>
          </>
        )}
      </ContainerDashboard>
    </>
  )
}

export default DashboardPage
