import TooltipCustom from "@/components/TooltipCustom";
import { Box } from "@mui/material";
import React from "react";
import LogoCampaign from "@/assets/images/logo.jpg";

const HomeHeader = () => {
  return (
    <div className="layout-header">
      <div className="header-left">
        <div className="header-button">
          <Box
            sx={{
              width: " 16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/jg3IY981y5G.png)",
              maskPosition: "0px -135px",
              background: "#1c2b33",
            }}
          />
          <span>All reports</span>
        </div>
        <div className="title">Untitled report</div>
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
              <img className="media-img" src={LogoCampaign} />
            </Box>
            HT media 72908 - 250 8470
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
        <div className="header-button">
          <Box
            sx={{
              width: " 16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yP/r/uXbrsLQkS8_.png)",
              maskPosition: "-206px -251px",
              background: "#1c2b33",
            }}
          />
          1 Ad Account
        </div>
      </div>
      <div className="header-right">
        <Box>
          <p className="last-update">You have unsaved changes</p>
          <p className="data-refresh">Data refreshed less than 1 minute ago</p>
        </Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
          }}
        >
          <div className="btn-save">Save</div>
          <div className="save-icon btn-icon">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/pqHpzOoq1-k.png)",
                maskPosition: "-170px -1094px",
                background: "white",
              }}
            />
          </div>
        </Box>
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
        <TooltipCustom
          placement="bottom"
          title="Share a link to your report with people in or outside of your ad account."
        >
          <div className="header-button">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
                maskPosition: "-238px -954px",
                background: "#1c2b33",
              }}
            />
            Share
          </div>
        </TooltipCustom>
        <TooltipCustom title="Export">
          <div className="header-button">
            <Box
              sx={{
                width: " 16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yP/r/uXbrsLQkS8_.png)",
                maskPosition: "-102px -272px",
                background: "#1c2b33",
              }}
            />
            Export
          </div>
        </TooltipCustom>
        <div className="header-button btn-icon">
          <Box
            sx={{
              width: "16px",
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

export default HomeHeader;
