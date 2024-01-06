import { useState } from "react";
import "./App.css";
import ContactList from "./components/ContactList";
import Details from "./components/Details";

function App() {
  const [count, setCount] = useState(null);
  console.log(count, "app count");
  return (
    <>
      {count ? (
        <Details count={count} setCount={setCount} />
      ) : (
        <ContactList setCount={setCount} />
      )}
    </>
  );
}

export default App;
