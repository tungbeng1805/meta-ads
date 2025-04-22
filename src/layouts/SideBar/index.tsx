import ROUTERS_PATHS from "@/constants/router-paths";
import { Box } from "@mui/material";
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";

interface SideBarProps {}

const SideBar = (props: SideBarProps) => {
  const navigate = useNavigate();
  const location = useLocation();
  const pathName = location?.pathname;

  return (
    <div className="side-bar">
      <div className="menu-wrapper">
        <div>
          <img
            alt="logo"
            className="logo-image"
            src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
            onClick={() => {
              navigate(ROUTERS_PATHS.HOME);
            }}
          />
          <div className="menu-btn media-btn">
            <img
              className="media-img"
              src="https://scontent.fhan3-5.fna.fbcdn.net/v/t39.30808-1/433773926_122095156838255660_844091820876077575_n.jpg?stp=cp0_dst-jpg_s32x32_tt6&_nc_cat=108&ccb=1-7&_nc_sid=473152&_nc_ohc=rXIqLFFtD3MQ7kNvwEIUCaA&_nc_oc=Adkd2xt9wGNPQqm2HuOr5n5yDN2FSkVkJ7voyhah1BvC8iH5g59cyRBFRa4cgFlE8T6_UNbLj18zlVKlKdtS_5PC&_nc_zt=24&_nc_ht=scontent.fhan3-5.fna&_nc_gid=xLHUoh92ktEl4K3MrCmGGg&oh=00_AfHJBv6a-v7cBRoJI-BKdWFIcZTfyxfUaVCKO5DwouINoA&oe=68002377"
            />
          </div>
          <div className="menu-btn">
            <div className="overview" />
          </div>
          <div
            className={`menu-btn ${
              pathName === ROUTERS_PATHS.CAMPAIGN && "btn-active"
            } `}
          >
            {pathName === ROUTERS_PATHS.CAMPAIGN ? (
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yX/r/g5YqKLnlk1k.png?_nc_eui2=AeEwdYSi3g4KRA4ui8bBmD07hTGvHeFfVfyFMa8d4V9V_P6AOHlufRpsSsd_y-uRX7KJP33NUCFXlHSS61xHi-uc)",
                  maskPosition: "-150px -254px",
                  maskSize: "441px 397px",

                  background: "#0a78be",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/tbCWzjtOK65.png)",
                  maskPosition: "-50px -279px",
                  maskSize: "441px 397px",
                  background: "#1c2b33",
                }}
              />
            )}
          </div>
          <div
            className={`menu-btn ${
              pathName === ROUTERS_PATHS.HOME && "btn-active"
            } `}
          >
            {pathName === ROUTERS_PATHS.HOME ? (
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/tbCWzjtOK65.png)",
                  maskPosition: "-25px -279px",
                  background: "#0a78be",
                }}
              />
            ) : (
              <Box
                sx={{
                  width: "24px",
                  height: "24px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yZ/r/tbCWzjtOK65.png)",
                  maskPosition: "-50px -279px",
                  maskSize: "441px 397px",
                  background: "#1c2b33",
                }}
              />
            )}
          </div>
          <div className="menu-btn">
            <div className="audiences" />
          </div>
          <div className="menu-btn">
            <div className="advertising" />
          </div>
          <div className="menu-btn">
            <div className="billing" />
          </div>
          <div className="menu-btn">
            <div className="event" />
          </div>
          <div className="menu-btn">
            <div className="tools" />
          </div>
        </div>
        <div className="menu-bottom">
          <div className="divider" />
          <div className="menu-btn bottom btn-help">
            <div className="help-circle">
              <div className="help" />
            </div>
          </div>
          <div className="menu-btn bottom">
            <div className="account-update" />
          </div>
          <div className="menu-btn bottom">
            <div className="setting" />
          </div>
          <div className="menu-btn bottom">
            <div className="noti" />
          </div>
          <div className="menu-btn bottom">
            <div className="search" />
          </div>
          <div className="menu-btn bottom">
            <div className="problem" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideBar;
