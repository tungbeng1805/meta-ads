import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";
import React from "react";

const CampaignHeader = () => {
  return (
    <div className="layout-header">
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
              }}
            >
              <img
                className="media-img"
                src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/433773926_122095156838255660_844091820876077575_n.jpg?stp=cp0_dst-jpg_s32x32_tt6&_nc_cat=108&ccb=1-7&_nc_sid=473152&_nc_ohc=rXIqLFFtD3MQ7kNvwEIUCaA&_nc_oc=Adkd2xt9wGNPQqm2HuOr5n5yDN2FSkVkJ7voyhah1BvC8iH5g59cyRBFRa4cgFlE8T6_UNbLj18zlVKlKdtS_5PC&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&_nc_gid=xLHUoh92ktEl4K3MrCmGGg&oh=00_AfHJBv6a-v7cBRoJI-BKdWFIcZTfyxfUaVCKO5DwouINoA&oe=68002377"
              />
            </Box>
            1109426426526335(170119342521371)
          </Box>
          <Box
            sx={{
              width: " 16px",
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
        <p className="update-ago">Updated 30 minutes ago</p>
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
