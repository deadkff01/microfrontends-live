import "./App.css";
import { useState, useEffect } from "react";

function App() {
  const [searchTerm, setSearchTem] = useState("");
  const itemList = ["some", "something", "playstation", "xbox", "computer"];

  useEffect(() => {
    window.addEventListener(
      "message",
      (event) => {
        setSearchTem(event.data);
      },
      false
    );
  }, []);

  console.log(searchTerm);

  const filtredList = itemList.filter((item) =>
    item.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase())
  );

  return (
    <div className="App">
      {filtredList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
