import React from "react"
import LoginForm from "../components/LoginForm"
import { useNavigate } from "react-router-dom"

const Login: React.FC = () => {
  const navigate = useNavigate()

  const handleSubmit = async (data: { nis: string; sandi: string }) => {
    const users = [{ nis: "12345", sandi: "wowowo" }]
    const user = users.find((u) => u.nis === data.nis && u.sandi === data.sandi)

    if (user) {
      navigate("/dashboard")
    } else {
      alert("NIS atau password salah")
    }
  }

  return (
    <div className="flex items-center justify-center h-screen">
      <LoginForm onSubmit={handleSubmit} />
    </div>
  )
}

export default Login
