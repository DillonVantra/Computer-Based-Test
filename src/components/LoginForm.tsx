import React, { useState } from "react"

interface LoginFormProps {
  onSubmit: (data: { nis: string; sandi: string }) => void
}

const LoginForm: React.FC<LoginFormProps> = ({ onSubmit }) => {
  const [nis, setNis] = useState("")
  const [sandi, setSandi] = useState("")

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    onSubmit({ nis, sandi })
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4"
    >
      <div className="mb-4">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="nis"
        >
          NIS
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="nis"
          type="text"
          placeholder="Masukkan NIS"
          value={nis}
          onChange={(e) => setNis(e.target.value)}
          required
        />
      </div>
      <div className="mb-6">
        <label
          className="block text-gray-700 text-sm font-bold mb-2"
          htmlFor="sandi"
        >
          Sandi
        </label>
        <input
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          id="sandi"
          type="password"
          placeholder="Masukkan sandi"
          value={sandi}
          onChange={(e) => setSandi(e.target.value)}
          required
        />
      </div>
      <div className="flex items-center justify-between">
        <button
          className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
          type="submit"
        >
          Masuk
        </button>
      </div>
    </form>
  )
}

export default LoginForm
