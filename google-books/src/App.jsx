import { useState } from "react";

import "./App.scss";
import Header from "./Containers/Header/Header";
import CardList from "./Containers/CardList/CardList";
import TopSelling from "./Components/TopSelling/TopSelling";
import {
  bestSellingBooks,
  topFantasyBooks,
  topChildrensBooks,
  topGraphicNovels,
} from "./Data/js/data";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar/Navbar";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [linkClicked, setLinkClicked] = useState(false);
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Header setSearchTerm={setSearchTerm} />
        <Routes>
          <Route path="/" element={<CardList searchTerm={searchTerm} />} />
          <Route
            path="best-selling"
            element={
              <TopSelling
                setLinkClicked={setLinkClicked}
                linkClicked={linkClicked}
                data={bestSellingBooks}
              />
            }
          />
          <Route
            path="top-fantasy"
            element={
              <TopSelling
                setLinkClicked={setLinkClicked}
                linkClicked={linkClicked}
                data={topFantasyBooks}
              />
            }
          />
          <Route
            path="top-children"
            element={
              <TopSelling linkClicked={linkClicked} data={topChildrensBooks} />
            }
          />
          <Route
            path="top-graphic-novels"
            element={
              <TopSelling
                setLinkClicked={setLinkClicked}
                linkClicked={linkClicked}
                data={topGraphicNovels}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
