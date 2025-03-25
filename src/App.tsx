import "./assets/styles/App.css";
// import MyForm from "./components/MyForm";
// import Counter from "./components/Counter";
// import { useEffect, useState } from "react";
// import Home from "./routes/Home";
import { AuthProvider } from "./contexts/auth";
import { RouterProvider } from "react-router-dom";
import router from "./routes";
import { Button } from "@/components/ui/button";

interface User {
  id: number;
  name: string;
  username: string;
}

function App() {
  // const [users, setUsers] = useState<User[]>([]);
  // useEffect(() => {
  //   fetch("https://jsonplaceholder.typicode.com/users")
  //     .then((response) => response.json())
  //     .then((data) => setUsers(data));
  // }, []);

  // return (
  //   <>
  //     <ul>
  //       {users.map((user) => (
  //         <li key={user.id}>{user.username}</li>
  //       ))}
  //     </ul>
  //   </>
  // );
  return (
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  );
}

export default App;
