import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Introduction from "./pages/Introduction";
import SanctionTypes from "./pages/SanctionTypes";
import Disclaimer from "./pages/Disclaimer";
import Search from "./components/Search";
import Results from "./components/Results";

function App() {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Introduction />} />
        <Route path="/sanctiontypes" element={<SanctionTypes />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      <div>
        <>
          <h2>Sanctions Search</h2>
          {hasSearched ? (
            <Results
              userInputQuery={query}
              setHasSearchedKey={setHasSearched}
            />
          ) : (
            <Search setQueryA={setQuery} setHasSearchedKey={setHasSearched} />
            //this is where I linked my props
          )}
        </>
      </div>
    </>
  );
}

export default App;
