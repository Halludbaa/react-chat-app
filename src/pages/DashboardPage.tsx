import { Link } from "react-router";

const DashboardPage = () => {
  return (
    <>
      <Link to={"/hello-world"}>Hello World</Link>
      <h1 className="text-4xl font-mono">Hello And Welcome in Chat App</h1>
    </>
  );
};

export default DashboardPage;
