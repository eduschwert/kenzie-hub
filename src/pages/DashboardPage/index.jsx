import React, { useContext } from "react";
import { TechContext } from "../../contexts/TechContext";
import { UserContext } from "../../contexts/UserContext";

import { motion } from "framer-motion";

import { AiOutlinePlus } from "react-icons/ai";

import { Modal } from "../../components/Modal";
import { ContainerDashboard } from "../../styles/Container";
import { SHeader } from "../../styles/Header";
import { SDiv, SDivUserInformationsBox, SUl } from "./style";
import { SText, STitle } from "../../styles/typography";
import { SButton } from "../../styles/Buttons";

export const DashboardPage = () => {
  const { logout, user } = useContext(UserContext);

  const { modalOpen, setModalOpen, setModalChildren, setCurrentTechID } =
    useContext(TechContext);

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      {modalOpen && <Modal />}

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
        <ContainerDashboard>
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
          <SButton
            onClick={() => {
              setModalOpen(true);
              setModalChildren("createTechnology");
            }}
            buttontype="plus"
          >
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
          <SUl>
            {user.techs.map((tech) => (
              <li key={tech.id}>
                <button
                  onClick={() => {
                    setModalOpen(true);
                    setModalChildren(tech);
                    setCurrentTechID(tech.id);
                  }}
                >
                  <STitle
                    tag="h5"
                    fontSize="1.4rem"
                    fontWeigth="700"
                    color="var(--color-grey-0)"
                  >
                    {tech.title}
                  </STitle>
                  <SText
                    tag="small"
                    fontSize="1.2rem"
                    fontWeigth="400"
                    color="var(--color-grey-1)"
                  >
                    {tech.status}
                  </SText>
                </button>
              </li>
            ))}
          </SUl>
        )}
      </ContainerDashboard>
    </motion.div>
  );
};
