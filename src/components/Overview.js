import React from "react";
import InfoBox from "./InfoBox";

function Overview({ country }) {
  return (
    <div className="overview">
      <div className="overviewContent">
        <h3 className="pageName">Overview</h3>
        <div className="infoTile">
          <div className="infoTileConfirmed">
            <div className="confirmed">{country.cases}</div>
            <div
              className="deltaConfirmed"
              title="new cases over the last 24 hours"
            >
              +{country.todayCases}
            </div>
          </div>

          <div className="infoTileData">
            <InfoBox
              title="Active Cases"
              cases={country.active}
              color="rgb(244, 195, 99)"
            />
            <InfoBox
              title="Recovered Cases"
              cases={country.recovered}
              color="rgb(96, 187, 105)"
              newCases={country.todayRecovered}
            />
            <InfoBox
              title="Deaths"
              cases={country.deaths}
              color="rgb(118, 118, 118)"
              newCases={country.todayDeaths}
            />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Overview;
