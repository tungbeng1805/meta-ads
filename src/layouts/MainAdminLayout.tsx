import React from "react";

import LoadingScreen from "@/components/Loading";
import useStoreLoading from "@/stores/loadingStore";
import { makeStyles } from "@mui/styles";
import ROUTERS_PATHS from "@/constants/router-paths";
import { useNavigate } from "react-router-dom";
import clsx from "clsx";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 0,
    marginLeft: 140,
    left: 0,
    position: "relative",
    transition: "all 0.3s ease-in-out",
    // padding: "8px 24px 16px 24px",
    background: "transparent",
  },
  paperContainer: {
    height: "100%",
    borderRadius: "unset !important",
    boxShadow: "unset !important",
    background: "transparent",
  },
});

interface MainAdminLayoutProps {
  children: React.ReactNode;
}

const MainAdminLayout = ({ children }: MainAdminLayoutProps) => {
  const classes = useStyles();
  const navigate = useNavigate();
  const isLoading = useStoreLoading((state) => state.loading);
  const [windowHeight, setWindowHeight] = React.useState(window.innerHeight - 0);

  const updateHeight = () => {
    setWindowHeight(window.innerHeight - 0);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  return (
    <>
      <div className="side-bar" style={{ width: "120px" }}>
        <div className="menu-wrapper">
          <div>
            <img
              style={{ display: "block", margin: "auto" }}
              alt="logo"
              className="logo-image"
              src="https://static.xx.fbcdn.net/rsrc.php/yb/r/CnOoIyhtLSO.svg"
              onClick={() => {
                navigate(ROUTERS_PATHS.HOME);
              }}
            />
            <div
              className={clsx("menu-btn-admin", {
                "btn-admin-active": window.location.pathname === ROUTERS_PATHS.ADMIN_BUSINESS,
              })}
              onClick={() => {
                navigate(ROUTERS_PATHS.ADMIN_BUSINESS);
              }}
            >
              <div>Business</div>
            </div>
            <div
              className={clsx("menu-btn-admin", {
                "btn-admin-active": window.location.pathname === ROUTERS_PATHS.ADMIN_CAMPAIGNS,
              })}
              onClick={() => {
                navigate(ROUTERS_PATHS.ADMIN_CAMPAIGNS);
              }}
            >
              <div>Campaigns</div>
            </div>
            <div
              className={clsx("menu-btn-admin", {
                "btn-admin-active": window.location.pathname === ROUTERS_PATHS.ADMIN_AD_SET,
              })}
              onClick={() => {
                navigate(ROUTERS_PATHS.ADMIN_AD_SET);
              }}
            >
              <div>Ad sets</div>
            </div>
            <div
              className={clsx("menu-btn-admin", {
                "btn-admin-active": window.location.pathname === ROUTERS_PATHS.ADMIN_AD,
              })}
              onClick={() => {
                navigate(ROUTERS_PATHS.ADMIN_AD);
              }}
            >
              <div>Ads</div>
            </div>
            <div
              className={clsx("menu-btn-admin", {
                "btn-admin-active": window.location.pathname === ROUTERS_PATHS.ADMIN_FORM_FACE,
              })}
              onClick={() => {
                navigate(ROUTERS_PATHS.ADMIN_FORM_FACE);
              }}
            >
              <div>Form face</div>
            </div>
            <div
              className={clsx("menu-btn-admin", {
                "btn-admin-active": window.location.pathname === ROUTERS_PATHS.ADMIN_CHART,
              })}
              onClick={() => {
                navigate(ROUTERS_PATHS.ADMIN_CHART);
              }}
            >
              <div>Chart</div>
            </div>
          </div>
        </div>
      </div>
      <div className={classes.mainContainer} style={{ minHeight: windowHeight }}>
        <div className={classes.paperContainer}>{children}</div>
      </div>
      {isLoading && <LoadingScreen />}
    </>
  );
};

export default MainAdminLayout;
