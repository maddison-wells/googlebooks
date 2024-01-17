import { useState } from "react";

import "./App.scss";
import Header from "./Containers/Header/Header";
import CardList from "./Containers/CardList/CardList";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  return (
    <>
      <Header setSearchTerm={setSearchTerm} />
      <CardList searchTerm={searchTerm} />
    </>
  );
}

export default App;
