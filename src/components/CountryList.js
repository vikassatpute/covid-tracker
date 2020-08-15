import React, { useState } from "react";
import axios from "../plugins/axios";

function CountryList({ countries, fnSetCountryInfo }) {
  const [selectedCountry, setSelectedCountry] = useState("");

  const onCountryCode = async (e) => {
    console.log(e.target);
    const countryCode = e.target.getAttribute("countryCode");
    setSelectedCountry(countryCode);

    const param = `countries/${countryCode}`;
    const res = await axios.get(param);
    console.log(res.data);
    fnSetCountryInfo(res.data);
  };
  return (
    <div className="combinedArea">
      <div className="areas deep">
        {countries.map((country) => (
          <div className="areaDiv" key={country.name}>
            <div
              onClick={onCountryCode}
              countryCode={country.value}
              className={
                country.value === selectedCountry ? "area selected" : "area"
              }
              tabindex="0"
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
