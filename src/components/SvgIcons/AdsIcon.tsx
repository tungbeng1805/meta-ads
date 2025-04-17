import React from "react";

interface AdsIconProps {}

const AdsIcon = (props: AdsIconProps) => {
  return (
    <svg viewBox="0 0 16 16" width="20px" height="20px" fill="currentColor">
      <g data-name="Layer 2">
        <g data-name="16">
          <rect
            x="1.5"
            y="1.5"
            width="13"
            height="13"
            rx="1.25"
            stroke="currentColor"
            fill="none"
          ></rect>
          <circle cx="4.5" cy="4.5" r="1"></circle>
          <path
            strokeLinecap="round"
            stroke="currentColor"
            fill="none"
            d="M7.5 4.5 12.5 4.5"
          ></path>
        </g>
      </g>
    </svg>
  );
};

export default AdsIcon;
