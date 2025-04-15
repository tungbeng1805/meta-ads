import ROUTERS_PATHS from "@/constants/router-paths";
import React from "react";
import { useNavigate } from "react-router-dom";

interface SideBarProps {}

const SideBar = (props: SideBarProps) => {
  const navigate = useNavigate();

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
          <div className="menu-btn">
            <div className="campaign" />
          </div>
          <div className="menu-btn btn-active">
            <div className="ads" />
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
