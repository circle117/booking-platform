import { Link } from "react-router-dom";
import { useState } from "react";
import axios from "axios";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  async function resgiterUser(ev) {
    ev.preventDefault();
    try {
      await axios.post("/register", {
        name,
        email,
        password,
      });
      alert("Registration successful. Now you can log in.");
    } catch (e) {
      alert("Registration failed. Please try again later.");
    }
  }

  return (
    <div class="mt-4 grow flex items-center justify-around">
      <div class="mb-32">
        <h1 class="text-4xl text-center mb-4">Register</h1>
        <form class="max-w-md mx-auto" onSubmit={resgiterUser}>
          <input
            type="text"
            placeholder="name"
            value={name}
            onChange={(ev) => setName(ev.target.value)}
          />
          <input
            type="email"
            placeholder={"your@email.com"}
            value={email}
            onChange={(ev) => setEmail(ev.target.value)}
          />
          <input
            type="password"
            placeholder="password"
            value={password}
            onChange={(ev) => setPassword(ev.target.value)}
          />
          <button class="primary">Register</button>
          <div class="text-center py-2 text-gray-500">
            Already a memver?{"  "}
            <Link to={"/login"} className="underline text-black">
              Login now
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
