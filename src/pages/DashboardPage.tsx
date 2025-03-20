import { useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../states/store";

const DashboardPage = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  const user = useSelector((state: RootState) => state.auth.user);
  return (
    <>
      <h1 className="text-4xl font-mono">Hello And Welcome in Chat App</h1>

      <Link
        to={"/hello-world"}
        className="p-2 rounded-lg bg-slate-700 text-white"
      >
        Hello World
      </Link>

      <Link to={"/chat"} className="p-2 rounded-lg bg-slate-700 text-white">
        Chat
      </Link>

      <button
        className="p-2 rounded-lg bg-slate-700 text-white"
        onClick={() => console.info(token)}
      >
        Check Token
      </button>

      <button
        className="p-2 rounded-lg bg-slate-700 text-white"
        onClick={() => console.info(user)}
      >
        Check User
      </button>
    </>
  );
};

export default DashboardPage;
