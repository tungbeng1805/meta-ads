import { Box, Checkbox, CheckboxProps } from "@mui/material";
import React from "react";

const CheckboxCustom = (props: CheckboxProps) => {
  return (
    <Checkbox
      sx={{
        padding: 0,
      }}
      icon={
        <Box
          width="22px"
          height="22px"
          border="1px solid #cbd2d9"
          borderRadius="4px"
        />
      }
      checkedIcon={
        <Box
          display="flex"
          justifyContent="center"
          alignItems="center"
          width="22px"
          height="22px"
          border="1px solid #cbd2d9"
          borderRadius="4px"
        >
          <svg height="16" viewBox="0 0 16 16" width="16">
            <path d="M13.305 3.28L5.993 10.6l-3.31-3.306a1 1 0 00-1.415 1.414l4.013 4.012a.997.997 0 001.414 0l8.024-8.024a1 1 0 00-1.414-1.416z"></path>
          </svg>
        </Box>
      }
      {...props}
    />
  );
};

export default CheckboxCustom;
