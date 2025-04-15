import React from "react";

interface AdSetIconProps {}

const AdSetIcon = (props: AdSetIconProps) => {
  return (
    <svg viewBox="0 0 48 48" width="20px" height="20px" fill="currentColor">
      <g>
        <g>
          <rect x="27.5" y="3.5" width="17" height="17" rx="3" ry="3"></rect>
          <rect x="3.5" y="27.5" width="17" height="17" rx="3" ry="3"></rect>
          <rect
            x="3.5"
            y="3.5"
            width="17"
            height="17"
            rx="3"
            ry="3"
            transform="rotate(90 12 12)"
          ></rect>
          <rect
            x="9.5"
            y="9.5"
            width="5"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(90 12 12)"
          ></rect>
          <rect
            x="33.5"
            y="33.5"
            width="5"
            height="5"
            rx="2.5"
            ry="2.5"
            transform="rotate(90 36 36)"
          ></rect>
          <rect
            x="27.5"
            y="27.5"
            width="17"
            height="17"
            rx="3"
            ry="3"
            transform="rotate(90 36 36)"
          ></rect>
        </g>
      </g>
    </svg>
  );
};

export default AdSetIcon;
