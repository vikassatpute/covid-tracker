import React, { useState, useCallback } from "react";
import { calculateWidth } from "../utilities/util";

function CasesBar({ barCases, fnSetCasesTypeinover }) {
  const [barActive, setBarActive] = useState("cases");
  const fnSetCasesType = useCallback(
    (type) => {
      fnSetCasesTypeinover(type);
      setBarActive(type);
    },
    [fnSetCasesTypeinover]
  );
  return (
    <div className="bar">
      <div
        onClick={(e) => fnSetCasesType("cases")}
        className={`slice ${barActive === "cases" ? "active" : ""}`}
        style={{
          backgroundColor: "rgb(244, 195, 99)",
          width: calculateWidth(barCases, "active"),
          marginRight: "4px",
        }}
      ></div>
      <div
        onClick={(e) => fnSetCasesType("recovered")}
        className={`slice ${barActive === "recovered" ? "active" : ""}`}
        style={{
          backgroundColor: "rgb(96, 187, 105)",
          width: calculateWidth(barCases, "recovered"),
          marginRight: "4px",
        }}
      ></div>
      <div
        onClick={(e) => fnSetCasesType("deaths")}
        className={`slice ${barActive === "deaths" ? "active" : ""}`}
        style={{
          backgroundColor: "rgb(118, 118, 118)",
          width: calculateWidth(barCases, "deaths"),
          marginRight: "4px",
        }}
      ></div>
    </div>
  );
}

export default CasesBar;
