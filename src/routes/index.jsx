import React from "react"

import { Routes, Route, Navigate } from "react-router-dom"

import DashboardPage from "../pages/DashboardPage"
import LoginPage from "../pages/LoginPage"
import RegisterPage from "../pages/RegisterPage"

const RoutesMain = ({ user, setUser }) => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage setUser={setUser} />} />
      <Route
        path="/dashboard"
        element={<DashboardPage user={user} setUser={setUser} />}
      />

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutesMain
