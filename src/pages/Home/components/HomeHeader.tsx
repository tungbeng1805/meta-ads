import { Box } from "@mui/material";
import React from "react";

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
                " url(https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/jg3IY981y5G.png)",
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
              <img
                className="media-img"
                src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/433773926_122095156838255660_844091820876077575_n.jpg?stp=cp0_dst-jpg_s32x32_tt6&_nc_cat=108&ccb=1-7&_nc_sid=473152&_nc_ohc=rXIqLFFtD3MQ7kNvwEIUCaA&_nc_oc=Adkd2xt9wGNPQqm2HuOr5n5yDN2FSkVkJ7voyhah1BvC8iH5g59cyRBFRa4cgFlE8T6_UNbLj18zlVKlKdtS_5PC&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&_nc_gid=xLHUoh92ktEl4K3MrCmGGg&oh=00_AfHJBv6a-v7cBRoJI-BKdWFIcZTfyxfUaVCKO5DwouINoA&oe=68002377"
              />
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
          <p className="last-update">Last edit was made 30 minutes ago</p>
          <p className="data-refresh">Data refreshed 30 minutes ago</p>
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

export default HomeHeader;
