import "./App.css";
import { useState } from "react";
import { Button, Input } from "@chakra-ui/react";
import { tw } from "twind";

const targetWindow = window.parent;

function App() {
  const [search, setSeach] = useState("");

  const sendSearch = () => {
    targetWindow.postMessage(search, "*");
  };

  return (
    <div className={tw`flex p-2`}>
      <div className={tw`mr-2`}>
        <Input
          type="text"
          name="search"
          id="search"
          onChange={({ target }) => setSeach(target.value)}
        />
      </div>
      <Button colorScheme="blue" onClick={sendSearch}>
        SEARCH
      </Button>
    </div>
  );
}

export default App;
