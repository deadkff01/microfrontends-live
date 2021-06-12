import "./App.css";
import { useState, useEffect } from "react";
import { getItems } from "./services/itemsService";

function App() {
  const [itemsList, setItemsList] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    window.addEventListener(
      "message",
      async (event) => {
        try {
          setIsLoading(true);
          const response = await getItems(event.data);
          console.log(response);
          setItemsList(response.data);
        } catch (e) {
          console.log(e);
        } finally {
          setIsLoading(false);
        }
      },
      false
    );
  }, []);

  console.log(itemsList);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <div className="App">
      {itemsList.map((item, index) => (
        <div key={index}>{item}</div>
      ))}
    </div>
  );
}

export default App;
