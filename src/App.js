import React, { useState, useEffect, useCallback } from "react";
import "./App.css";
import axios from "./plugins/axios";
import Map from "./components/Map";
import Overview from "./components/Overview";
import WorldInfo from "./components/WorldInfo";
import CountryList from "./components/CountryList";

function App() {
  const [countries, setCountries] = useState([]);
  const [countryInfo, setCountryInfo] = useState({});
  const [worldwideInfo, setWorldwideInfo] = useState({});
  useEffect(() => {
    const fetchCountires = async () => {
      const res = await axios.get("countries");
      console.log(res.data);
      const countries = res.data.map((country) => ({
        name: country.country,
        value: country.countryInfo.iso2,
        cases: country.cases,
      }));
      setCountries(countries);
    };

    const fetchWorldwideInfo = async () => {
      const res = await axios.get("all");
      console.log(res.data);
      setWorldwideInfo(res.data);
    };

    fetchCountires();
    fetchWorldwideInfo();
  }, []);

  const fnSetCountryInfo = useCallback((val) => {
    setCountryInfo(val);
  }, []);

  return (
    <div className="app desktop">
      <div className="content">
        <div className="country tab">
          <WorldInfo worldwideInfo={worldwideInfo} />
          <CountryList
            countries={countries}
            fnSetCountryInfo={fnSetCountryInfo}
          />
        </div>
        <div className="app__right">
          <Overview country={countryInfo} />
          <Map />
        </div>
      </div>
    </div>
  );
}

export default App;
