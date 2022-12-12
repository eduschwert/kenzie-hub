import React, { useContext } from "react"
import { UserContext } from "../../contexts/UserContext"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"
import { registerSchema } from "./registerSchema"

import { TailSpin } from "react-loader-spinner"

import { motion } from "framer-motion"

import { ContainerRegister } from "../../styles/Container"
import { SText, STitle } from "../../styles/typography"
import { SButton, SLink } from "../../styles/Buttons"
import { SDivInputGroup, SFormBox } from "../../styles/form"
import { SHeader } from "../../styles/Header"
import { Select } from "../../components/Select"
import { Input } from "../../components/Input"

export const RegisterPage = () => {
  const { loading, register: registerSubmit } = useContext(UserContext)

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(registerSchema),
  })

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
    >
      <ContainerRegister>
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
        <SFormBox
          onSubmit={handleSubmit(registerSubmit)}
          noValidate
          marginBottom="2rem"
        >
          <STitle
            tag="h2"
            fontSize="1.8rem"
            fontWeigth="700"
            color="var(--color-grey-0)"
            textAlign="center"
            marginBottom="2rem"
          >
            Crie sua conta
          </STitle>
          <SText
            tag="small"
            fontSize="1.2rem"
            fontWeigth="400"
            color="var(--color-grey-1)"
            textAlign="center"
            marginBottom="2.8rem"
          >
            Rapido e grátis, vamos nessa
          </SText>
          <SDivInputGroup marginBottom="2rem">
            <Input
              type="text"
              label="Nome"
              placeholder="Digite aqui seu nome"
              id="name"
              register={register("name")}
              disabled={loading}
            />
            {errors.name && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.name.message}
              </SText>
            )}
            <Input
              type="email"
              label="Email"
              placeholder="Digite aqui seu email"
              id="email"
              register={register("email")}
              disabled={loading}
            />
            {errors.email && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.email.message}
              </SText>
            )}
            <Input
              type="password"
              label="Senha"
              placeholder="Digite aqui sua senha"
              id="password"
              register={register("password")}
              disabled={loading}
            />
            {errors.password && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.password.message}
              </SText>
            )}
            <Input
              type="password"
              label="Confirmar Senha"
              placeholder="Digite novamente sua senha"
              id="passwordConfirm"
              register={register("passwordConfirm")}
              disabled={loading}
            />
            {errors.passwordConfirm && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.passwordConfirm.message}
              </SText>
            )}
            <Input
              type="text"
              label="Bio"
              placeholder="Fale sobre você"
              id="bio"
              register={register("bio")}
              disabled={loading}
            />
            {errors.bio && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.bio.message}
              </SText>
            )}
            <Input
              type="tel"
              label="Contato"
              placeholder="Opção de contato"
              id="contact"
              register={register("contact")}
              disabled={loading}
            />
            {errors.contact && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.contact.message}
              </SText>
            )}
            <Select
              label="Selecionar módulo"
              id="course_module"
              register={register("course_module")}
              disabled={loading}
              options={
                <>
                  <option value="">Selecionar módulo</option>
                  <option value="Primeiro módulo (Introdução ao Frontend)">
                    Primeiro módulo
                  </option>
                  <option value="Segundo módulo (Frontend avançado)">
                    Segundo módulo
                  </option>
                  <option value="Terceiro módulo (Introdução ao Backend)">
                    Terceiro módulo
                  </option>
                  <option value="Quarto módulo (Backend avançado)">
                    Quarto módulo
                  </option>
                </>
              }
            />
            {errors.course_module && (
              <SText
                tag="p"
                fontSize="1.4rem"
                fontWeigth="400"
                color="var(--color-negative)"
                marginBottom="-1rem"
                marginTop="-2rem"
              >
                {errors.course_module.message}
              </SText>
            )}
          </SDivInputGroup>
          <SButton
            disabled={loading}
            buttontype="primary"
            buttoncolor="primary"
            marginBottom="2.8rem"
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
            {!loading && "Cadastrar"}
          </SButton>
        </SFormBox>
      </ContainerRegister>
    </motion.div>
  )
}
