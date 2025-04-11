import React from "react";

interface HomeHeaderProps {}

const HomeHeader = (props: HomeHeaderProps) => {
  return (
    <div className="layout-header">
      <div className="header-left">
        <div className="header-button">Refresh</div>
        <div>Untitled rep</div>
        <div className="header-button">Share</div>
        <div className="header-button">Export</div>
        <div className="header-button">1 Ad Account</div>
      </div>
      <div className="header-right">
        <div className="header-button">Refresh</div>
        <div className="header-button">All reports</div>
        <div className="header-button">Share</div>
        <div className="header-button">Export</div>
        <div className="header-button">...</div>
      </div>
    </div>
  );
};

export default HomeHeader;
