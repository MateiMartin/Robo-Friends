import React from "react";
import "./addCard.css";

const newCard = () => {
  return (
    <div className="bg-light-green dib br3 pa3 ma2 grow bw2 shadow-5 new-card"></div>
    //...and so on
  );
};

const PlusSign = () => {
  return (
    <svg
      width="188"
      height="185"
      viewBox="0 0 188 185"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      onClick={newCard}
    >
      <rect width="188" height="185" fill="#455044" />
      <g id="plus" filter="url(#filter0_d_1_2)">
        <path
          id="Line 1"
          d="M87 145V152.5H102V145H87ZM87 40V145H102V40H87Z"
          fill="#D7D7D7"
          fillOpacity="0.99"
        />
        <path
          id="Line 2"
          d="M150 105.5H157.5V90.5H150V105.5ZM38 105.5H94V90.5H38V105.5ZM94 105.5H122V90.5H94V105.5ZM122 105.5H150V90.5H122V105.5Z"
          fill="#D6D6D6"
        />
      </g>
      <defs>
        <filter
          id="filter0_d_1_2"
          x="34"
          y="40"
          width="127.5"
          height="120.5"
          filterUnits="userSpaceOnUse"
          colorInterpolationFilters="sRGB"
        >
          <feFlood floodOpacity="0" result="BackgroundImageFix" />
          <feColorMatrix
            in="SourceAlpha"
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
            result="hardAlpha"
          />
          <feOffset dy="4" />
          <feGaussianBlur stdDeviation="2" />
          <feComposite in2="hardAlpha" operator="out" />
          <feColorMatrix
            type="matrix"
            values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.25 0"
          />
          <feBlend
            mode="normal"
            in2="BackgroundImageFix"
            result="effect1_dropShadow_1_2"
          />
          <feBlend
            mode="normal"
            in="SourceGraphic"
            in2="effect1_dropShadow_1_2"
            result="shape"
          />
        </filter>
      </defs>
    </svg>
  );
};

export { PlusSign };
