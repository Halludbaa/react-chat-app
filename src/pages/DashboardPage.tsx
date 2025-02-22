import { useSelector } from "react-redux";
import { Link } from "react-router";
import { RootState } from "../states/store";

const DashboardPage = () => {
  const token = useSelector((state: RootState) => state.auth.token);
  return (
    <>
      <Link to={"/hello-world"}>Hello World</Link>
      <h1 className="text-4xl font-mono">Hello And Welcome in Chat App</h1>
      <button
        className="p-2 rounded-lg bg-slate-700 text-white"
        onClick={() => console.info(token)}
      >
        Check Token
      </button>
    </>
  );
};

export default DashboardPage;
