import React from "react";
import { Circle, Popup } from "react-leaflet";

const casesTypeColors = {
  cases: {
    hex: "rgb(244, 195, 99)",
    multiplier: 800,
  },
  recovered: {
    hex: "rgb(96, 187, 105)",
    multiplier: 1200,
  },
  deaths: {
    hex: "rgb(118, 118, 118)",
    multiplier: 2000,
  },
};

export const sortData = (data, sortBy = "alphaASC") => {
  const sortedData = [...data];
  switch (sortBy) {
    case "alphaASC":
      sortedData.sort((a, b) => (a.name < b.name ? -1 : 1));
      break;

    case "alphaDESC":
      sortedData.sort((a, b) => (a.name > b.name ? -1 : 1));
      break;

    case "casesASC":
      sortedData.sort((a, b) => (a.cases < b.cases ? -1 : 1));
      break;

    case "casesDESC":
      sortedData.sort((a, b) => (a.cases > b.cases ? -1 : 1));
      break;

    default:
      sortedData.sort((a, b) => (a.cases < b.cases ? -1 : 1));
      break;
  }

  return sortedData;
};

export const showDataOnMap = (data, caseType = "cases") => {
  return data.map((country) => (
    <Circle
      center={[country?.countryInfo.lat, country?.countryInfo.long]}
      fillOpacity={0.4}
      color={casesTypeColors[caseType].hex}
      fillColor={casesTypeColors[caseType].hex}
      radius={
        Math.sqrt(country[caseType]) * casesTypeColors[caseType].multiplier
      }
    >
      <Popup>
        <div className="popupDetails">
          <div className="popupDetails__flag">
            <img src={country.countryInfo.flag} alt="" />
          </div>
          <strong>{country.country}</strong>
          <div className="popupDetails__info">
            <p>
              Total: <strong>{country.cases}</strong>
            </p>
            <p>
              Active: <span>{country.active}</span>
            </p>
            <p>
              Recovered: <span>{country.recovered}</span>
            </p>
            <p>
              Deaths: <span>{country.deaths}</span>
            </p>
          </div>
        </div>
      </Popup>
    </Circle>
  ));
};

export const calculateWidth = (casesList, caseType = "active") => {
  //   console.log("arr>>", casesList, caseType);
  const total = casesList.active + casesList.recovered + casesList.deaths;
  //   console.log(total);
  let width = `${(casesList[caseType] / total) * 100}%`;
  //   console.log(width);
  return width;
};
