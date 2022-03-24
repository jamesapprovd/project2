import React from "react";
import { useState } from "react";
import Graphic from "../components/Graphic";
import Search from "../components/Search";
import Results from "../components/Results";

const Home = () => {
  const [query, setQuery] = useState("");
  const [hasSearched, setHasSearched] = useState(false);

  return (
    <div className="container">
      <div className="row">
        <div className="col-sm-6">
          <br />
          <div>
            <img
              src="https://i.imgur.com/1fS85JM.png"
              alt="SC Logo"
              width="238"
              height="238"
            ></img>
          </div>
          <br />
          {hasSearched ? (
            <Results
              userInputQuery={query}
              setHasSearchedKey={setHasSearched}
            />
          ) : (
            <Search setQueryA={setQuery} setHasSearchedKey={setHasSearched} />
            //this is where I linked my props
          )}
          <p>
            &copy; <b>Sanctions Checker: </b>
            Know who you're dealing with
          </p>
        </div>
        <div className="col-sm-6">
          <Graphic />
        </div>
      </div>
    </div>
  );
};

export default Home;
