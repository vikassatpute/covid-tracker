import React, { useState, createRef, useEffect, useCallback } from "react";
import { sortData } from "../utilities/util";

function Sort({ countries, fnSetSortedCountries }) {
  const [openDropdown, setOpenDropdown] = useState(false);
  const [sortBy, setSortBy] = useState("alphaASC");
  const [selectedOption, setSelectedOption] = useState(
    "Sort <div class='sortDropDownItemIcon'></div>"
  );
  const wrapperRef = createRef();

  const toggleDropdown = useCallback((event) => {
    openDropdown === true ? setOpenDropdown(false) : setOpenDropdown(true);
  });

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (
        wrapperRef &&
        wrapperRef.current &&
        !wrapperRef.current.contains(event.target)
      ) {
        toggleDropdown();
      }
    };
    document.addEventListener("mousedown", handleClickOutside);

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [toggleDropdown, wrapperRef]);

  const setDropdownOption = (event) => {
    if (
      event &&
      event.target &&
      event.target.className === "sortDropdownItem"
    ) {
      setSelectedOption(event.target.innerHTML);
    }
  };

  const sortDataBy = (event, sortBy) => {
    setDropdownOption(event);
    console.log(event, sortBy);
    setSortBy(sortBy);
    const data = sortData(countries, sortBy);
    fnSetSortedCountries(data);
    toggleDropdown();
  };

  return (
    <div className="sortContainer">
      <div className="sortTitle">Browse</div>
      <div>
        <div
          onClick={toggleDropdown}
          className="sortActiveItem"
          aria-label="Sorting options dropdown"
        >
          <span dangerouslySetInnerHTML={{ __html: selectedOption }}></span>
          <div className="sortMenuIcon">
            <svg width="8" height="6" viewBox="0 0 8 6" fill="none">
              <g clip-path="url(#sortAffordanceMenuClip)">
                <path
                  d="M6.95969 0.5H1.04031C0.621059 0.5 0.387973 0.984966 0.649878 1.31235L3.60957 5.01196C3.80973 5.26216 4.19027 5.26216 4.39043 5.01196L7.35012 1.31235C7.61203 0.984966 7.37894 0.5 6.95969 0.5V0.5Z"
                  fill="#666666"
                ></path>
              </g>
              <defs>
                <clipPath id="sortAffordanceMenuClip">
                  <rect y="0.5" width="8" height="5" fill="white"></rect>
                </clipPath>
              </defs>
            </svg>
          </div>
        </div>
        {openDropdown ? (
          <div className="sortDropdown" ref={wrapperRef}>
            <div
              className="sortDropdownItem"
              onClick={(e) => sortDataBy(e, "casesDESC")}
            >
              Total cases
              <div className="sortDropDownItemIcon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <rect
                    width="4"
                    height="4"
                    rx="1"
                    transform="matrix(-1 0 0 1 18 10)"
                    fill="#919191"
                  ></rect>
                  <rect
                    width="4"
                    height="8"
                    rx="1"
                    transform="matrix(-1 0 0 1 12 6)"
                    fill="#919191"
                  ></rect>
                  <rect
                    width="4"
                    height="12"
                    rx="1"
                    transform="matrix(-1 0 0 1 6 2)"
                    fill="#919191"
                  ></rect>
                </svg>
              </div>
            </div>
            <div
              className="sortDropdownItem"
              onClick={(e) => sortDataBy(e, "casesASC")}
            >
              Total cases
              <div className="sortDropDownItemIcon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <rect
                    x="2"
                    y="10"
                    width="4"
                    height="4"
                    rx="1"
                    fill="#919191"
                  ></rect>
                  <rect
                    x="8"
                    y="6"
                    width="4"
                    height="8"
                    rx="1"
                    fill="#919191"
                  ></rect>
                  <rect
                    x="14"
                    y="2"
                    width="4"
                    height="12"
                    rx="1"
                    fill="#919191"
                  ></rect>
                </svg>
              </div>
            </div>
            <div
              className="sortDropdownItem"
              onClick={(e) => sortDataBy(e, "alphaASC")}
            >
              Alphabetical
              <div className="sortDropDownItemIcon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path
                    d="M5.53711 10.2422H2.45508L1.86914 12H0L3.17578 3.46875H4.80469L7.99805 12H6.12891L5.53711 10.2422ZM2.92969 8.81836H5.0625L3.99023 5.625L2.92969 8.81836Z"
                    fill="#919191"
                  ></path>
                  <path
                    d="M11.9766 9.0293H8.67773V7.66406H11.9766V9.0293Z"
                    fill="#919191"
                  ></path>
                  <path
                    d="M15.3105 10.5879H19.6113V12H13.1133V10.9688L17.332 4.89258H13.1191V3.46875H19.5176V4.47656L15.3105 10.5879Z"
                    fill="#919191"
                  ></path>
                </svg>
              </div>
            </div>
            <div
              className="sortDropdownItem"
              onClick={(e) => sortDataBy(e, "alphaDESC")}
            >
              Alphabetical
              <div className="sortDropDownItemIcon">
                <svg width="20" height="16" viewBox="0 0 20 16" fill="none">
                  <path
                    d="M2.65723 10.5879H6.95801V12H0.459961V10.9688L4.67871 4.89258H0.46582V3.46875H6.86426V4.47656L2.65723 10.5879Z"
                    fill="#767676"
                  ></path>
                  <path
                    d="M11.2529 9.0293H7.9541V7.66406H11.2529V9.0293Z"
                    fill="#767676"
                  ></path>
                  <path
                    d="M17.54 10.2422H14.458L13.8721 12H12.0029L15.1787 3.46875H16.8076L20.001 12H18.1318L17.54 10.2422ZM14.9326 8.81836H17.0654L15.9932 5.625L14.9326 8.81836Z"
                    fill="#767676"
                  ></path>
                </svg>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
      </div>
    </div>
  );
}

export default Sort;
