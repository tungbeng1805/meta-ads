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
                    "url(https://api.faceebook.com.vn/uploads/background6.png)",
                  maskPosition: "0px -353px",
                  background: "#1c2b33",
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
                "url(https://api.faceebook.com.vn/uploads/background4.png)",
              maskPosition: "-68px -201px",
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
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background3.png)",
                maskPosition: "-336px -1805px",
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
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background5.png)",
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
