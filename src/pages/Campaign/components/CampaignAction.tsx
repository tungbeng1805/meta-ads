import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";
import React from "react";

const CampaignAction = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="0 8px"
    >
      <Box display="flex" alignItems="center" gap="8px">
        <div className="header-button btn-icon btn-hight-light">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background7.png)",
              maskPosition: "0px -46px",
              background: "#0a78be",
            }}
          />
        </div>
        <div className="divider-campaign" />
        <div className="btn-action btn-hight-light">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background.png)",
              maskPosition: "0px -2045px",
              background: "#0a78be",
            }}
          />
          All Ads
        </div>
        <div className="btn-action">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background.png)",
              maskPosition: "0px -2232px",
              background: "#1c2b33",
            }}
          />
          Active ads
        </div>
        <div className="btn-action">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background.png)",
              maskPosition: "0px -2011px",
              background: "#1c2b33",
            }}
          />
          Had delivery
        </div>
        <div className="btn-action btn-ghost">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background8.png)",
              maskPosition: "-265px -527px",
              background: "#1c2b33",
            }}
          />
          See more
        </div>
      </Box>
      <Box display="flex" alignItems="center" gap="8px">
        <div className="header-button">Create a view</div>
        <TooltipCustom title="Settings" placement="top">
          <div className="header-button btn-icon">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background9.png)",
                maskPosition: "-17px -682px",
                background: "#1c2b33",
              }}
            />
          </div>
        </TooltipCustom>
      </Box>
    </Box>
  );
};

export default CampaignAction;
