import { createContext, useEffect, useState } from "react"

import { useNavigate } from "react-router-dom"

import { toast } from "react-toastify"

import { api } from "../services"

export const UserContext = createContext({})

export const UserProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  const [loadingLoginRegister, setLoadingLoginRegister] = useState(false)

  const navigate = useNavigate()

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if (!token) {
      setLoading(false)
      return
    }
    const loadUser = async () => {
      try {
        const { data } = await api.get("profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        setUser(data)
      } catch (error) {
        console.error(error)
        localStorage.removeItem("@TOKEN")

        const userID = localStorage.getItem("@USERID")
        if (userID) {
          localStorage.removeItem("@USERID")
        }
      } finally {
        setLoading(false)
      }
    }
    loadUser()
  }, [])

  const login = async (formData) => {
    try {
      setLoadingLoginRegister(true)
      const response = await api.post("sessions", formData)

      setUser(response.data.user)
      localStorage.setItem("@TOKEN", response.data.token)
      localStorage.setItem("@USERID", response.data.user.id)

      toast.success("Login efetuado com sucesso!")
    } catch (error) {
      toast.error("Email ou senha incorretos")
    } finally {
      setLoadingLoginRegister(false)
    }
  }

  const register = async (formData) => {
    try {
      setLoadingLoginRegister(true)
      await api.post("users", formData)
      toast.success("Conta criada com sucesso!")
      navigate("/")
    } catch (error) {
      toast.error("Email já está em uso")
    } finally {
      setLoadingLoginRegister(false)
    }
  }

  const logout = () => {
    localStorage.removeItem("@TOKEN")
    localStorage.removeItem("@USERID")
    setUser(null)
    navigate("/")
  }

  return (
    <UserContext.Provider
      value={{
        user,
        setUser,
        loading,
        setLoading,
        login,
        register,
        logout,
        loadingLoginRegister,
      }}
    >
      {children}
    </UserContext.Provider>
  )
}
