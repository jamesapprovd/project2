import React, { useState, useEffect } from "react";
import NoResultsPage from "../pages/NoResultsPage";

const Results = (props) => {
  // console.log(props.userInputQuery);
  const [returnResults, setReturnResults] = useState([]);
  const allResults = returnResults.map((results, index) => {
    if (index === 0) {
      console.log(results);
    }
    return (
      <>
        <h4>
          <strong>{results.properties.name}</strong>
        </h4>
        <br />
        <h5>{results.schema}</h5>
        <h5>Sanction type: {results.datasets}</h5>
        <h5>Birthdate: {results.properties.birthDate}</h5>
        <h5>Position: {results.properties.position}</h5>
        <a href="{results.properties.sourceUrl}">Further Information</a>
      </>
    );
  });

  const url = `https://api.opensanctions.org/search/all?q=${props.userInputQuery}&limit=10&offset=0&fuzzy=false&nested=false`;

  useEffect(() => {
    fetchResults();
  }, [props.userInputQuery]);

  //Program sequence on how you fetch APIs

  const fetchResults = async function () {
    try {
      const response = await fetch(url); //fetch the data via API
      const returnedData = await response.json(); //convert to readable data (JSON - find data make it into standard objects)
      console.log(returnedData);
      // console.log(returnedData.results[0].properties.name); // person's name

      // EXACT NAME MATCH CODE DRAFT HERE
      // const returnedData = {
      //   results: [
      //     { first_seen: "", properties: { name: ["Carrie Lam"] } },
      //     { first_seen: "", properties: { name: ["Carrie Lam"] } },
      //   ],
      // };

      // for (let i = 0; i < returnedData.results.length; i++) {
      //   pass;
      // } // i: represents index
      // const nameArray = [];
      // for (const result of returnedData) {
      //   //result represents our elements as we loop through the array
      //   const stringifiedName = JSON.stringify(
      //     //converting results to readable string
      //     result.properties.name.toLowerCase().split(/[, ]+/).sort()
      //   );
      //   const query = JSON.stringify(
      //     //converting query to readable string
      //     props.userInputQuery.toLowerCase().split(/[, ]+/).sort()
      //   );
      //   if (stringifiedName === query) {
      //     nameArray.push(result);
      //   }
      // }

      setReturnResults(returnedData.results); //setting it into a state
    } catch (err) {
      console.log(err);
    }

    //   const noResults = () => {
    //     if (returnResults.results.length === 0) {
    //     console.log(returnedData.results);
    //     return <NoResultsPage />;
    // };
  };

  //make the entire return a state

  return (
    <>
      <button
        onClick={() => {
          props.setHasSearchedKey(false);
        }}
      >
        Back to Search
      </button>
      <br />
      {returnResults.length === 0 ? <NoResultsPage /> : { allResults }}
    </>
  );
};

export default Results;
