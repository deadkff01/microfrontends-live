import { createRef, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const itemsRef = createRef();

  const handleData = useCallback(
    (event) => {
      const child = itemsRef?.current?.contentWindow;

      const data = typeof event.data === "string" ? event.data : "";
      child.postMessage(data, "http://localhost:3002");
    },
    [itemsRef]
  );

  useEffect(() => {
    window.addEventListener("message", handleData, false);
    return () => window.removeEventListener("message", handleData);
  }, [handleData]);

  return (
    <div className="App">
      <h1>Container</h1>
      <iframe
        title="search"
        src="http://localhost:3001"
        frameBorder="0"
      ></iframe>
      <br />
      <iframe
        ref={itemsRef}
        title="items"
        src="http://localhost:3002"
        frameBorder="0"
      ></iframe>
    </div>
  );
}

export default App;
