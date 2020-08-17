import React, { useState, useEffect } from "react";
import axios from "../plugins/axios";
import { sortData } from "../utilities/util";
import Sort from "./Sort";

function CountryList({ countries, fnSetCountryInfo }) {
  const [selectedCountry, setSelectedCountry] = useState("");
  const [sortedCountries, setSortedCountries] = useState([]);

  useEffect(() => {
    const sortedData = sortData(countries);
    setSortedCountries(sortedData);
  }, [countries]);

  const onCountryCode = async (e) => {
    console.log(e.target);
    const countryCode = e.target.getAttribute("countryCode");
    setSelectedCountry(countryCode);

    const param = `countries/${countryCode}`;
    const res = await axios.get(param);
    console.log(res.data);
    fnSetCountryInfo(res.data);
  };

  const fnSetSortedCountries = (sortedData) => {
    setSortedCountries(sortedData);
  };
  return (
    <div className="combinedArea">
      <Sort countries={countries} fnSetSortedCountries={fnSetSortedCountries} />
      <div className="areas deep">
        {sortedCountries?.map((country) => (
          <div className="areaDiv" key={country.name}>
            <div
              onClick={onCountryCode}
              countryCode={country.value}
              className={
                country.value === selectedCountry ? "area selected" : "area"
              }
              tabIndex="0"
            >
              <div className="areaName" title={country.name}>
                {country.name}
              </div>
              <div className="areaTotal">
                <div className="secondaryInfo">{country.cases}</div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default CountryList;
