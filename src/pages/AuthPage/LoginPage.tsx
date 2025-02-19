import { useState } from "react";

const LoginPage = () => {
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");

  const handleLogin = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.info({ username, password });
  };
  return (
    <div className="w-full flex justify-center items-center h-screen bg-slate-600">
      <form
        onSubmit={handleLogin}
        className="flex flex-col gap-7 w-sm bg-white shadow-xl p-5 rounded-lg"
      >
        <input
          type="text"
          placeholder="Username"
          value={username}
          className="text-lg p-2 rounded-md"
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          type="password"
          placeholder="Password"
          className="text-lg p-2 rounded-md"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button
          type="submit"
          className="bg-slate-700 text-md text-white p-2 rounded-md"
        >
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
