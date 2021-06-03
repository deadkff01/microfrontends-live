import { createRef, useCallback, useEffect } from "react";
import "./App.css";

function App() {
  const itemsRef = createRef();

  const handleData = useCallback(
    (event) => {
      const child = itemsRef?.current?.contentWindow;
      child.postMessage(event.data, "http://localhost:3002");
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
