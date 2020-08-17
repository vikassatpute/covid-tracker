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
  const [mapCenter, setMapCenter] = useState({ lat: 34.80746, lng: -40.4796 });
  const [mapZoom, setMapZoom] = useState(3);
  const [mapCountries, setMapCountries] = useState([]);
  const [caseType, setCaseType] = useState("cases");

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
      setMapCountries(res.data);
    };

    const fetchWorldwideInfo = async () => {
      const res = await axios.get("all");
      console.log(res.data);
      setWorldwideInfo(res.data);
    };

    fetchCountires();
    fetchWorldwideInfo();
  }, []);

  const fnSetCountryInfo = useCallback((data) => {
    setCountryInfo(data);
    setMapCenter({ lat: data.countryInfo.lat, lng: data.countryInfo.long });
    setMapZoom(4);
  }, []);
  const fnSetCasesType = useCallback((type) => {
    setCaseType(type);
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
          {Object.keys(countryInfo).length > 0 ? (
            <Overview country={countryInfo} fnSetCasesType={fnSetCasesType} />
          ) : (
            ""
          )}
          <Map
            countries={mapCountries}
            caseType={caseType}
            center={mapCenter}
            zoom={mapZoom}
          />
        </div>
      </div>
    </div>
  );
}

export default App;
