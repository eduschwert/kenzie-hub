import React, { useState } from "react"

import { useForm } from "react-hook-form"
import { yupResolver } from "@hookform/resolvers/yup"

import { loginSchema } from "./loginSchema"

import { toast } from "react-toastify"

import { useNavigate } from "react-router-dom"

import { api } from "../../services"

import { ContainerLogin } from "../../styles/Container"
import { SText, STitle } from "../../styles/typography"
import { SButton, SLink } from "../../styles/Buttons"
import { SDivInputGroup, SFormBox } from "../../styles/form"

import Input from "../../components/Input"

import { TailSpin } from "react-loader-spinner"

const LoginPage = ({ setUser }) => {
  const [loading, setLoading] = useState(false)
  const navigate = useNavigate()
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    mode: "onBlur",
    resolver: yupResolver(loginSchema),
  })

  const submit = async (formData) => {
    try {
      setLoading(true)

      const response = await api.post("sessions", formData)

      setUser(response.data.user)
      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)

      toast.success("Login efetuado com sucesso!")

      navigate("/dashboard")
    } catch (error) {
      toast.error("Email ou senha incorretos")
    } finally {
      setLoading(false)
    }
  }

  return (
    <ContainerLogin>
      <STitle
        tag="h1"
        fontSize="2.2rem"
        fontWeigth="700"
        color="var(--color-primary)"
        textAlign="center"
        marginTop="2rem"
        marginBottom="3.5rem"
      >
        Kenzie Hub
      </STitle>
      <SFormBox onSubmit={handleSubmit(submit)} noValidate>
        <STitle
          tag="h2"
          fontSize="1.8rem"
          fontWeigth="700"
          color="var(--color-grey-0)"
          textAlign="center"
          marginBottom="2.8rem"
        >
          Login
        </STitle>
        <SDivInputGroup marginBottom="2.4rem">
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
        </SDivInputGroup>
        <SButton
          disabled={loading}
          buttontype="primary"
          buttoncolor="primary"
          marginBottom="3.4rem"
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
          {!loading && "Entrar"}
        </SButton>
        <SText
          tag="small"
          fontSize="1.2rem"
          fontWeigth="600"
          color="var(--color-grey-1)"
          textAlign="center"
          marginBottom="2.2rem"
        >
          Ainda não possui uma conta?
        </SText>
        <SLink
          to="/register"
          buttontype="primary"
          buttoncolor="grey-1"
          marginbottom="4.2rem"
          width="98.5%"
        >
          Cadastre-se
        </SLink>
      </SFormBox>
    </ContainerLogin>
  )
}

export default LoginPage
