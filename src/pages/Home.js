import React from "react";
import { useState } from "react";
import Graphic from "../components/Graphic";
import Search from "../components/Search";
import Results from "../components/Results";

const Home = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div class="container">
      <div class="row">
        <div class="col-sm-6">
          <br />
          <img
            src="https://i.imgur.com/1fS85JM.png"
            alt="SC Logo"
            width="238"
            height="238"
          ></img>

          <h3>Sanctions Checker</h3>
          <p>
            Ensure that the parties you work with are compliant with sanctions
            laws
          </p>
          {hasSearched ? (
            <Results
              userInputQuery={query}
              setHasSearchedKey={setHasSearched}
            />
          ) : (
            <Search setQueryA={setQuery} setHasSearchedKey={setHasSearched} />
            //this is where I linked my props
          )}
        </div>
        <div class="col-sm-6">
          <Graphic />
        </div>
      </div>
    </div>
  );
};

export default Home;
