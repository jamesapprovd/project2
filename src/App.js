import React from "react";
import { Route, Routes } from "react-router-dom";
import NavBar from "./components/NavBar";
import Home from "./pages/Home";
import Introduction from "./pages/Introduction";
import SanctionTypes from "./pages/SanctionTypes";
import Disclaimer from "./pages/Disclaimer";

function App() {
  //   const [query, setQuery] = useState("");
  //   const [hasSearched, setHasSearched] = useState(false);

  return (
    <>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/introduction" element={<Introduction />} />
        <Route path="/sanctiontypes" element={<SanctionTypes />} />
        <Route path="/disclaimer" element={<Disclaimer />} />
      </Routes>

      {/* /* <h2>Sanctions Search</h2>
          {hasSearched ? (
            <Results
              userInputQuery={query}
              setHasSearchedKey={setHasSearched}
            />
          ) : (
            <Search setQueryA={setQuery} setHasSearchedKey={setHasSearched} />
            //this is where I linked my props
          )} * */}
    </>
  );
}

export default App;
