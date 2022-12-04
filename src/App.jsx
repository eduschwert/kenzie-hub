import Routes from "./routes"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import GlobalStyle from "./styles/GlobalStyles"

import { useState } from "react"

function App() {
  const [user, setUser] = useState(null)
  return (
    <>
      <ToastContainer
        position="top-right"
        autoClose={2000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
        style={{ fontSize: "1.4rem", fontWeight: "700" }}
      />
      <GlobalStyle />
      <Routes user={user} setUser={setUser} />
    </>
  )
}

export default App
