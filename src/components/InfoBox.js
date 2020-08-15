import React from "react";

function InfoBox({ title, cases, newCases, color }) {
  return (
    <h2 class="legend">
      <div class="color" style={{ backgroundColor: color }}></div>
      <div class="description">{title}</div>
      <div class="total">
        {cases}
        {newCases ? (
          <div class="delta" title="new cases over the last 24 hours">
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
