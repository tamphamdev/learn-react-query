import { useState } from "react";
import Navbar from "./components/Navbar";

function App() {
  const [page, setPage] = useState("planets");
  return (
    <div className="App">
      <h1>Star wars Info</h1>
      <Navbar />
      <div className="content"></div>
    </div>
  );
}

export default App;
