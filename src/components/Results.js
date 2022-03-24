import React, { useState, useEffect } from "react";
import NoResults from "../pages/NoResults";
import Stack from "@mui/material/Stack";
import Button from "@mui/material/Button";

const Results = (props) => {
  // console.log(props.userInputQuery);
  const [returnResults, setReturnResults] = useState([]);
  console.log(returnResults);
  const allResults = returnResults.map((results, index) => {
    console.log(results);
    return (
      <>
        <p>
          <b>{results.properties.name[0]}</b>
        </p>
        <p>{results.schema}</p>
        <p>
          <u>Category:</u> {results.datasets[0]}
        </p>

        {results.properties.birthDate === undefined ? (
          ""
        ) : (
          <p>
            <u>Birthdate:</u> {results.properties.birthDate[0]}
          </p>
        )}

        {results.properties.position === undefined ? (
          ""
        ) : (
          <p>
            <u>Position:</u> {results.properties.position[0]}
          </p>
        )}

        {results.properties.country === undefined ? (
          ""
        ) : (
          <p>
            <u>Country:</u> {results.properties.country[0]}
          </p>
        )}

        {results.properties.registrationNumber === undefined ? (
          ""
        ) : (
          <p>
            <u>Registration Number:</u>{" "}
            {results.properties.registrationNumber[0]}
          </p>
        )}

        {results.properties.notes === undefined ? (
          ""
        ) : (
          <p>
            <u>Notes:</u> {results.properties.notes[0]}
          </p>
        )}

        {results.properties.sourceUrl === undefined ? (
          ""
        ) : (
          <p>
            <u>Further Information:</u>{" "}
            <a href={results.properties.sourceUrl[0].caption}>
              {results.properties.sourceUrl[0].caption}
            </a>
            <a href={results.properties.sourceUrl[0]}>
              {results.properties.sourceUrl[0]}
            </a>
          </p>
        )}
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

      setReturnResults(returnedData.results); //setting it into a state
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <>
      <Stack spacing={2} direction="row">
        <Button
          onClick={() => {
            props.setHasSearchedKey(false);
          }}
          variant="outlined"
        >
          Back to Search
        </Button>
      </Stack>
      <br />
      <p>
        <u>
          Results returned for: <b>"{props.userInputQuery}"</b>
        </u>
      </p>
      <br />
      {returnResults.length > 0 ? allResults : <NoResults />}
    </>
  );
};

export default Results;
