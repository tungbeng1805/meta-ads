import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";
import React from "react";
import LogoCampaign from "@/assets/images/logo.jpg";

const CampaignHeader = () => {
  return (
    <div className="layout-header header-campaign">
      <div className="header-left">
        <p className="campaign-title">Campaigns</p>
        <div className="media-btn">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              gap: 1,
            }}
          >
            <Box
              sx={{
                width: "24px",
                height: "24px",
                borderRadius: 1,
                border: "1px solid lightgray;",
                opacity: 0.5,
                overflow: "hidden",
              }}
            >
              <img className="media-img" src={LogoCampaign} />
            </Box>
            <div className="divider-campaign" />
            <div className="tv-wrapper">
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yl/r/_tluDGOtAlV.png?_nc_eui2=AeFWQe1bHi04-awbDGavvrLYjXcSO7ekFu2NdxI7t6QW7RbiaBOA0xM5n7Af6QrZZmVqRWlC35ipB2hgp3IC3Tyb)",
                  maskPosition: "0 -365px",
                  background: "#1c2b33",
                  maskSize: "25px 1271px",
                }}
              />
            </div>
            <p className="campaign-code">1109426426526335(170119342521371)</p>
          </Box>
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/pqHpzOoq1-k.png)",
              maskPosition: "-170px -1094px",
              background: "#1c2b33",
            }}
          />
        </div>
      </div>
      <div className="header-right">
        <p className="update-ago">Updated just now</p>
        <TooltipCustom title="Refresh">
          <div className="header-button">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yP/r/uXbrsLQkS8_.png)",
                maskPosition: "-34px -272px",
                background: "#1c2b33",
              }}
            />
            Refresh
          </div>
        </TooltipCustom>
        <div className="header-button disable-btn">Review and publish</div>
        <div className="header-button btn-icon">
          <Box
            sx={{
              width: " 16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yh/r/-mpd5-YMO3O.png)",
              maskPosition: "0px -169px",
              background: "#1c2b33",
            }}
          />
        </div>
      </div>
    </div>
  );
};

export default CampaignHeader;
