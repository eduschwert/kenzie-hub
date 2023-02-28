import React, { createContext, useContext, useState } from "react";
import { UserContext } from "./UserContext";

import { useNavigate } from "react-router-dom";

import { toast } from "react-toastify";

import { api } from "../services";

export const TechContext = createContext();

export const TechProvider = ({ children }) => {
  const { setUser } = useContext(UserContext);

  const [loading, setLoading] = useState(false);

  const [modalOpen, setModalOpen] = useState(false);
  const [modalChildren, setModalChildren] = useState(null);

  const [currentTechID, setCurrentTechID] = useState(null);

  const navigate = useNavigate();

  const createTechnology = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      toast.error("Usuário não está logado");
      navigate("/");
    }
    try {
      setLoading(true);

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.post("users/techs", formData);

      const { data } = await api.get("profile");
      setUser(data);
      setModalOpen(false);
    } catch (error) {
      console.error(error.response.data.message);
      toast.error("Você já tem uma tecnologia com este nome");
    } finally {
      setLoading(false);
    }
  };
  const editTechnology = async (formData) => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      toast.error("Usuário não está logado");
      navigate("/");
    }
    try {
      setLoading(true);

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.put(`users/techs/${currentTechID}`, formData);

      const { data } = await api.get("profile");
      setUser(data);

      setModalOpen(false);
    } catch (error) {
      console.error(error.response.data.message);
      toast.error("Ops, algo deu errado!");
    } finally {
      setLoading(false);
    }
  };

  const deleteTechnology = async (setLocalLoading) => {
    const token = localStorage.getItem("@TOKEN");
    if (!token) {
      toast.error("Usuário não está logado");
      navigate("/");
    }
    try {
      setLocalLoading(true);

      api.defaults.headers.common.authorization = `Bearer ${token}`;
      await api.delete(`users/techs/${currentTechID}`);

      const { data } = await api.get("profile");
      setUser(data);
      toast.success("Tecnologia excluída com sucesso!");
      setModalOpen(false);
    } catch (error) {
      console.error(error.response.data.message);
      toast.error("Ops, algo deu errado!");
    } finally {
      setLocalLoading(false);
    }
  };
  return (
    <TechContext.Provider
      value={{
        createTechnology,
        editTechnology,
        loading,
        modalOpen,
        setModalOpen,
        modalChildren,
        setModalChildren,
        setCurrentTechID,
        deleteTechnology,
      }}
    >
      {children}
    </TechContext.Provider>
  );
};
