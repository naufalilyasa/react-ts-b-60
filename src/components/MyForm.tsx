import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/auth";

interface MyFormState {
  // id: number;
  username: string;
  email: string;
  phone: string;
}

function MyForm() {
  const { user, setUser } = useContext(AuthContext);
  const [formState, setFormState] = useState<MyFormState>({
    username: "username not found",
    email: "",
    phone: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.value);
    setFormState({ ...formState, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // console.log(formState);
    // alert(`Halo username saya: ${formState.username}`);
    // alert(`Saya berumur: ${formState.email}`);
    setUser(formState);
  };

  return (
    <form action="" className="p-5 bg-amber-200" onSubmit={handleSubmit}>
      <h1>My Form</h1>
      <input
        className="w-full border rounded-md p-2 border-gray-500 text-lg"
        name="email"
        onChange={handleChange}
        type="email"
        placeholder="Masukkan email..."
      />
      <input
        className="w-full border rounded-md p-2 border-gray-500 text-lg"
        name="username"
        onChange={handleChange}
        type="text"
        placeholder="Masukkan username..."
      />
      <input
        className="w-full border rounded-md p-2 border-gray-500 text-lg"
        name="phone"
        onChange={handleChange}
        type="tel"
        placeholder="Masukkan nomor telp..."
      />
      <button
        className="bg-green-500 px-10 py-2 text-white rounded-sm"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default MyForm;
