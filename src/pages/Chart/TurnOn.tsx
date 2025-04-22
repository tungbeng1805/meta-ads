import { Box } from "@mui/material";
import React from "react";

const TurnOn = () => {
  return (
    <Box
      bgcolor="white"
      borderRadius="4px"
      marginTop="8px"
      display="flex"
      gap="16px"
      alignItems="flex-end"
      fontFamily="Optimistic Display, system-ui, sans-serif"
    >
      <Box
        display="flex"
        flexDirection="column"
        gap="8px"
        padding="16px"
        flex={1}
      >
        <p style={{ fontSize: "15px", fontWeight: "700", lineHeight: "20px" }}>
          Turn on automatic adjustments to optimise campaign performance across
          your account
        </p>
        <p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px" }}>
          Automatically applying performance recommendations can help to
          optimise your campaign performance. You can choose which adjustments
          are automated and turn them off at any time.
        </p>
        <p style={{ fontSize: "14px", fontWeight: "400", lineHeight: "20px" }}>
          Potential outcome:
          <span
            style={{
              fontSize: "14px",
              fontWeight: "400",
              lineHeight: "20px",
              color: "#007e59",
            }}
          >
            {" "}
            Increased results for affected campaigns
          </span>
        </p>
        <div className="turn-on-btn">Turn on</div>
      </Box>
      <Box
        sx={{
          width: "408px",
          height: "176px",
          backgroundImage:
            "url(https://static.xx.fbcdn.net/rsrc.php/v4/ym/r/3kig_tKz8BP.png?_nc_eui2=AeHjUteM6EPi8HT7BvuhjmmLAI04RX8lExoAjThFfyUTGnN12rlFn7rozxXemIeYLKI0lVVGZVz_h6cpcF47XcFP)",
          backgroundPosition: "0px 0px",
          backgroundRepeat: "no-repeat",
          display: "inline-block",
        }}
      />
    </Box>
  );
};

export default TurnOn;
