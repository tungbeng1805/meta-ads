import { Box } from "@mui/material";
import React from "react";
import { useNavigate } from "react-router-dom";

interface RightSideBarProps {}

const RightSideBar = (props: RightSideBarProps) => {
  const navigate = useNavigate();

  return (
    <div className="right-side-bar">
      <div className="right-sidebar-wrapper">
        <div className="menu-right-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yl/r/_tluDGOtAlV.png?_nc_eui2=AeFWQe1bHi04-awbDGavvrLYjXcSO7ekFu2NdxI7t6QW7RbiaBOA0xM5n7Af6QrZZmVqRWlC35ipB2hgp3IC3Tyb)",
              maskPosition: "0px -416px",
              maskSize: "25px 1271px",
              background: "white",
            }}
          />
        </div>
        <div className="menu-right-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yl/r/_tluDGOtAlV.png?_nc_eui2=AeFWQe1bHi04-awbDGavvrLYjXcSO7ekFu2NdxI7t6QW7RbiaBOA0xM5n7Af6QrZZmVqRWlC35ipB2hgp3IC3Tyb)",
              maskPosition: "0px -841px",
              maskSize: "25px 1271px",
              background: "#ffffff99",
            }}
          />
        </div>
        <div className="menu-right-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yA/r/2M_0CXhP5Bo.png?_nc_eui2=AeHiDmTsbWD5rqhVcmGmb5aEkO_Mln0pzxiQ78yWfSnPGJmTcChrNjR9FK35n4aNK5wSDmoY8GN8WZyVpMp95-Vp)",
              maskPosition: "-21px -194px",
              maskSize: "41px 489px",
              background: "#ffffff99",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default RightSideBar;
