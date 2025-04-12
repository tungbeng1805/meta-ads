import React from "react";

import LoadingScreen from "@/components/Loading";
import useStoreLoading from "@/stores/loadingStore";
import { makeStyles } from "@mui/styles";
import SideBar from "./SideBar";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 0,
    marginLeft: 56,
    left: 0,
    position: "relative",
    transition: "all 0.3s ease-in-out",
    padding: "8px 24px 16px 24px",
    background: "transparent",
  },
  paperContainer: {
    height: "100%",
    borderRadius: "unset !important",
    boxShadow: "unset !important",
    background: "transparent",
  },
});

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const classes = useStyles();
  const isLoading = useStoreLoading((state) => state.loading);
  const [windowHeight, setWindowHeight] = React.useState(
    window.innerHeight - 24
  );

  const updateHeight = () => {
    setWindowHeight(window.innerHeight - 24);
  };

  React.useEffect(() => {
    window.addEventListener("resize", updateHeight);
    return () => window.removeEventListener("resize", updateHeight);
  });

  return (
    <>
      <SideBar />
      <div
        className={classes.mainContainer}
        style={{ minHeight: windowHeight }}
      >
        <div className={classes.paperContainer}>{children}</div>
      </div>
      {isLoading && <LoadingScreen />}
    </>
  );
};

export default MainLayout;
