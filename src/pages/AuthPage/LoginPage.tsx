import { useEffect, useState } from "react";
import { useAuth } from "../../hooks/useAuth";
import { Link, useNavigate } from "react-router";
import { useSelector } from "react-redux";
import { RootState } from "../../states/store";
const LoginPage = () => {
  const { login, isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    (async () => {
      if ((await isAuthenticated()) == true) {
        navigate("/dashboard", { replace: true });
      }
    })();
  }, []);

  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const token = useSelector((state: RootState) => state.auth.token);
  const handleLogin = async (event: React.SyntheticEvent<HTMLFormElement>) => {
    event.preventDefault();

    await login({ username, password });

    return;
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
        <button
          onClick={() => console.info(token)}
          type="button"
          className="bg-slate-700 text-md text-white p-2 rounded-md"
        >
          Token
        </button>
        <Link to="/dashboard">Dashboard</Link>
      </form>
    </div>
  );
};

export default LoginPage;
