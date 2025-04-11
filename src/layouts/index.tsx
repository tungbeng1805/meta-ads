import React from "react";
// import Header from "../Header";
import { Box, Paper } from "@mui/material";

import LoadingScreen from "@/components/Loading";
import useStoreLoading from "@/stores/loadingStore";
import { makeStyles } from "@mui/styles";
import SideBar from "./SideBar";

const useStyles = makeStyles({
  mainContainer: {
    marginTop: 0,
    marginLeft: 64,
    left: 0,
    position: "relative",
    transition: "all 0.3s ease-in-out",
    padding: 16,
  },
  paperContainer: {
    height: "100%",
    borderRadius: "unset !important",
    boxShadow: "unset !important",
    background: "white",
  },
});

interface MainLayoutProps {
  children: React.ReactNode;
}

const MainLayout = ({ children }: MainLayoutProps) => {
  const classes = useStyles();
  const isLoading = useStoreLoading((state) => state.loading);
  const [windowHeight, setWindowHeight] = React.useState(
    window.innerHeight - 32
  );

  const updateHeight = () => {
    setWindowHeight(window.innerHeight - 32);
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
        <Box className={classes.paperContainer} component={Paper}>
          {children}
        </Box>
      </div>

      {isLoading && <LoadingScreen />}
    </>
  );
};

export default MainLayout;
