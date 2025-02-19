import API from "./services/api";

function App() {
  const handlePing = async () => {
    const response = await API.get("/ping");
    console.clear();
    console.info(response.data);
  };
  return (
    <>
      <h1 className="text-4xl font-mono">Hello And Welcome in Chat App</h1>
      <button onClick={handlePing}>Ping</button>
    </>
  );
}

export default App;
