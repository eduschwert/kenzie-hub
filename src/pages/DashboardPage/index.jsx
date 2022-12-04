import React from "react"
import { useNavigate } from "react-router-dom"

import { ContainerDashboard } from "../../styles/Container"

import { SHeader } from "../../styles/Header"
import { SDivUserInformationsBox } from "./style"

import { SText, STitle } from "../../styles/typography"
import { SButton } from "../../styles/Buttons"

const DashboardPage = ({ user, setUser }) => {
  const navigate = useNavigate()

  const logout = () => {
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    setUser(null)
    navigate("/")
  }
  return (
    <>
      <ContainerDashboard>
        <SHeader marginTop="2rem" marginBottom="2rem">
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
        <STitle
          tag="h3"
          fontSize="1.8rem"
          fontWeigth="700"
          color="var(--color-grey-0)"
          marginTop="3.7rem"
          marginBottom="2.3rem"
        >
          Que pena! Estamos em desenvolvimento :(
        </STitle>
        <SText
          tag="p"
          fontSize="1.6rem"
          fontWeigth="400"
          color="var(--color-white)"
        >
          Nossa aplicação está em desenvolvimento, em breve teremos novidades
        </SText>
      </ContainerDashboard>
    </>
  )
}

export default DashboardPage
