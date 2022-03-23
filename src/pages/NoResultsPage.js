import React from "react";
import { Link } from "react-router-dom";

const NoResultsPage = () => {
  return (
    <div>
      <h3>No matching personnel or entities were found</h3>
      <p>Try searching a partial name, or use a different spelling</p>
      <br />
      <h5>
        Proposed transaction or business may proceed, unless the counter-party
        is owned or controlled by a sanctioned party. Conducting business with a
        non sanctioned party owned or controlled by a sanctioned party is
        prohibited
      </h5>
      <Link to="/">Back to Sanction Search</Link>
    </div>
  );
};

export default NoResultsPage;
