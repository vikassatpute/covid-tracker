import React from "react";

function InfoBox({ title, cases, newCases, color }) {
  return (
    <h2 className="legend">
      <div className="color" style={{ backgroundColor: color }}></div>
      <div className="description">{title}</div>
      <div className="total">
        {cases}
        {newCases ? (
          <div className="delta" title="new cases over the last 24 hours">
            +{newCases}
          </div>
        ) : (
          ""
        )}
      </div>
    </h2>
  );
}

export default InfoBox;
