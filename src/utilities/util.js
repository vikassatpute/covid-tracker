import React from "react";
// import numeral from "numeral";
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
        <h1>Im Popup</h1>
      </Popup>
    </Circle>
  ));
};

export const calculateWidth = (casesList, caseType = "active") => {
  console.log("arr>>", casesList, caseType);
  const total = casesList.active + casesList.recovered + casesList.deaths;
  console.log(total);
  let width = `${(casesList[caseType] / total) * 100}%`;
  console.log(width);
  return width;
};
