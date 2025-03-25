import { useContext, useEffect, useState } from "react";
// import { User } from "../types/user";
import { AuthContext } from "../contexts/auth";

function UserData() {
  const { user, setUser } = useContext(AuthContext);
  return (
    <main>
      <section>
        <h2 className="text-2xl">Logged in user</h2>
        <p>Username: {user.username}</p>
        <p>Phone: {user.phone}</p>
        <p>Email: {user.email}</p>
      </section>
    </main>
  );
}

export default UserData;
