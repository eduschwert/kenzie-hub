import { useState } from "react"

import Routes from "./routes"

import { ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"

import GlobalStyle from "./styles/GlobalStyles"
import { useEffect } from "react"
import { api } from "./services"

function App() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const token = localStorage.getItem("@TOKEN")
    if (!token) {
      setLoading(false)
      return
    }
    const login = async () => {
      try {
        const { data } = await api.get("profile", {
          headers: {
            authorization: `Bearer ${token}`,
          },
        })
        setUser(data)
      } catch (error) {
        console.error(error)
      } finally {
        setLoading(false)
      }
    }
    login()
  }, [])

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
      <Routes loading={loading} user={user} setUser={setUser} />
    </>
  )
}

export default App
