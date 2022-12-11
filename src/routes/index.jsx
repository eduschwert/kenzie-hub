import React from "react"

import { Routes, Route, Navigate } from "react-router-dom"

import { ProtectedRoutes } from "../components/ProtectedRoutes"

import { TechProvider } from "../contexts/TechContext"

import { DashboardPage } from "../pages/DashboardPage"
import { LoginPage } from "../pages/LoginPage"
import { RegisterPage } from "../pages/RegisterPage"

const RoutesMain = () => {
  return (
    <Routes>
      <Route path="/register" element={<RegisterPage />} />
      <Route path="/" element={<LoginPage />} />

      <Route element={<ProtectedRoutes />}>
        <Route
          path="/dashboard"
          element={
            <TechProvider>
              <DashboardPage />
            </TechProvider>
          }
        />
      </Route>

      <Route path="*" element={<Navigate to="/" />} />
    </Routes>
  )
}

export default RoutesMain
