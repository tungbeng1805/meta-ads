import { Box } from "@mui/material";
import React from "react";

const TableHeaderAction = () => {
  return (
    <Box
      display="flex"
      alignItems="center"
      justifyContent="space-between"
      padding="8px"
      bgcolor="white"
      borderRadius="8px 8px 0 0"
    >
      <Box display="flex" alignItems="center" gap="8px">
        <div className="btn-action btn-create">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background8.png)",
              maskPosition: "-265px -527px",
              background: "white",
            }}
          />
          Create
        </div>
        <div className="header-button disable-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background10.png)",
              maskPosition: "-185px -791px",
              background: "#1c2b3399",
            }}
          />
          Duplicate
        </div>
        <div className="header-button disable-btn">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background11.png)",
              maskPosition: "-17px -350px",
              background: "#1c2b3399",
            }}
          />
          Edit
        </div>
        <div className="divider-button-action" />
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background10.png)",
              maskPosition: "-151px -791px",
              background: "#1c2b3399",
            }}
          />
          A/B test
        </div>
        <div className="btn-action btn-ghost">
          More
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background4.png)",
              maskPosition: "-68px -201px",
              background: "#1c2b3399",
            }}
          />
        </div>
      </Box>
      <Box display="flex" alignItems="center" gap="8px">
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background10.png)",
              maskPosition: "-168px -791px",
              background: "#1c2b3399",
            }}
          />
          Columns: Performance
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background4.png)",
              maskPosition: "-68px -201px",
              background: "#1c2b3399",
            }}
          />
        </div>
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background10.png)",
              maskPosition: "-227px -753px",
              background: "#1c2b3399",
            }}
          />
          Breakdown
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background4.png)",
              maskPosition: "-68px -201px",
              background: "#1c2b3399",
            }}
          />
        </div>
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background10.png)",
              maskPosition: "-202px -808px",
              background: "#1c2b3399",
            }}
          />
          Reports
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background4.png)",
              maskPosition: "-68px -201px",
              background: "#1c2b3399",
            }}
          />
        </div>
        <Box display="flex" alignItems="center">
          <div className="header-button export-btn">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background6.png)",
                maskPosition: "0px -591px",
                background: "#1c2b3399",
              }}
            />
            Export
          </div>
          <div className="header-button btn-icon export-more-btn">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://api.faceebook.com.vn/uploads/background4.png)",
                maskPosition: "-68px -201px",
                background: "#1c2b3399",
              }}
            />
          </div>
        </Box>
        <div className="header-button">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://api.faceebook.com.vn/uploads/background10.png)",
              maskPosition: "-219px -842px",
              background: "#1c2b3399",
            }}
          />
          Charts
        </div>
      </Box>
    </Box>
  );
};

export default TableHeaderAction;
