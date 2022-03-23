import React from "react";

const SanctionTypes = () => {
  return (
    <div>
      <h1>Types of sanctions</h1>
      <p>
        Sanctions lists are lists of persons and entities subject to
        comprehensive or targeted restrictive measures under international and
        domestic sanctions regimes.
        <br />
        <br />
        Government agencies or bodies issue such lists, including regulators or
        police. Examples of the effects of sanctions lists include the freezing
        of funds and economic resources, admission restrictions on certain
        persons, arms embargoes, trade/export restrictions and a ban on the
        provision of certain services to certain countries.
        <br />
        <br />
        <strong>Examples of sanctions lists include the following:</strong>
        <br />
      </p>
      <ul>
        <a href="https://sanctionssearch.ofac.treas.gov">
          <li>US Office of Foreign Assets Control (OFAC)</li>
        </a>
        <a href="https://home.treasury.gov/policy-issues/financial-sanctions/specially-designated-nationals-and-blocked-persons-list-sdn-human-readable-lists">
          <li>US Treasury Department Specially Designated Nationals (SDN)</li>
        </a>
        <a href="https://www.gov.uk/government/publications/the-uk-sanctions-list">
          <li>UK Sanctions List, under the Sanctions Act</li>
        </a>
        <a href="https://www.mas.gov.sg/regulation/anti-money-laundering/targeted-financial-sanctions/lists-of-designated-individuals-and-entities">
          <li>Singapore MAS Targeted Financial Sanctions</li>
        </a>
      </ul>
    </div>
  );
};

export default SanctionTypes;
