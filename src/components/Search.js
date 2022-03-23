import React from "react";
import { TextField } from "@mui/material";

const Search = (props) => {
  const submitHandler = (event) => {
    event.preventDefault();
    console.log(event.target.search.value); //this is the search term that the user has input
    props.setQueryA(event.target.search.value); // this is the lift to the parent to change the state of the parent
    props.setHasSearchedKey(true);
  };

  return (
    <div>
      <form onSubmit={submitHandler}>
        <label>
          <TextField
            variant="outlined"
            label="Search"
            type="text"
            name="search"
            placeholder="Type name of individual or entity"
          />
          {/* <input
            className="search"
            type="text"
            name="search"
            placeholder="Type name of entity or individual"
          /> */}
        </label>
        {/* <input type="submit" value="Search" /> */}
      </form>
    </div>
  );
};

export default Search;
