import React from "react";
import InfoBox from "./InfoBox";

function WorldInfo({ worldwideInfo }) {
  return (
    <div className="infoTile">
      <div className="infoTileHeader">
        <div>
          <h2 className="title" title="Total confirmed cases">
            Total confirmed cases
          </h2>
          {/* <div className="lastUpdate">Updated 787 min ago</div> */}
        </div>
      </div>
      <div className="infoTileConfirmed">
        <div className="confirmed">{worldwideInfo.cases}</div>
        <div
          className="deltaConfirmed"
          title="new cases over the last 24 hours"
        >
          +{worldwideInfo.todayCases}
        </div>
      </div>
      <div className="infoTileData">
        <InfoBox
          title="Active Cases"
          cases={worldwideInfo.active}
          color="rgb(244, 195, 99)"
        />
        <InfoBox
          title="Recovered Cases"
          cases={worldwideInfo.recovered}
          color="rgb(96, 187, 105)"
          newCases={worldwideInfo.todayRecovered}
        />
        <InfoBox
          title="Deaths"
          cases={worldwideInfo.deaths}
          color="rgb(118, 118, 118)"
          newCases={worldwideInfo.todayDeaths}
        />
      </div>
    </div>
  );
}

export default WorldInfo;
