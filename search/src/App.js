import "./App.css";
import { useState } from "react";

const targetWindow = window.parent;

function App() {
  const [search, setSeach] = useState("");

  const sendSearch = () => {
    targetWindow.postMessage(search, "*");
  };

  return (
    <div className="App">
      <input
        type="text"
        name="search"
        id="search"
        onChange={({ target }) => setSeach(target.value)}
      />
      <button onClick={sendSearch}>SEARCH</button>
    </div>
  );
}

export default App;
