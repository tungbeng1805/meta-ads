import CheckboxCustom from "@/components/CheckboxCustom";
import { BRAEK_DOWN_MENU } from "@/constants/breakDownMenu";
import { METRICS_MENU } from "@/constants/metricsMenu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  InputAdornment,
  TextField,
  Typography,
} from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box, Grid } from "@mui/system";
import { GridExpandMoreIcon } from "@mui/x-data-grid";
import React from "react";

interface RightContentProps {
  setRightContentType: (val: string | null) => void;
}

const RightContent = (props: RightContentProps) => {
  const [activeButton, setActiveButton] = React.useState<string>("metrics");
  const listAccordion =
    activeButton === "metrics" ? METRICS_MENU : BRAEK_DOWN_MENU;

  return (
    <Paper
      className="pivot-table"
      sx={{ height: "100%", width: "270px", boxShadow: "none" }}
    >
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="16px"
        gap="8px"
      >
        <Box color="#1c2b33" fontSize="16px" fontWeight="bold">
          Customise pivot table
        </Box>
        <Button
          sx={{
            padding: "10px 12px",
            minWidth: "unset",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, .05)",
            },
          }}
          onClick={() => props.setRightContentType(null)}
        >
          <Box
            sx={{
              width: " 16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yh/r/-mpd5-YMO3O.png)",
              maskPosition: "0px -135px",
              background: "#1c2b33",
            }}
          />
        </Button>
      </Box>
      <Box
        display="flex"
        justifyContent="space-between"
        alignItems="center"
        padding="0px 16px"
        gap="8px"
      >
        <TextField
          label=""
          variant="outlined"
          size="small"
          placeholder="Search"
          sx={{
            width: "100%",
            "& .MuiOutlinedInput-input": {
              padding: "8px 10px 8px 0px",
              fontSize: "14px",
              "&::placeholder": {
                color: "rgba(28, 43, 51, 0.6)",
                opacity: 1,
              },
            },
          }}
          slotProps={{
            input: {
              startAdornment: (
                <InputAdornment position="start">
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      maskImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v4/yG/r/sG3ZUjuDhT5.png)",
                      maskPosition: "-195px -251px",
                      background: "#1c2b33",
                    }}
                  />
                </InputAdornment>
              ),
            },
          }}
        />
        <div className="header-button btn-icon">
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yh/r/-mpd5-YMO3O.png)",
              maskPosition: "0px -169px",
              background: "#1c2b33",
            }}
          />
        </div>
      </Box>
      <Box
        display="flex"
        alignItems="center"
        padding="0px 16px"
        gap="8px"
        marginTop={1}
      >
        <Grid container flex={1} spacing={1}>
          <Grid size={6}>
            <Button
              sx={{
                width: "100%",
                padding: "6px",

                minWidth: "unset",
                textTransform: "none",
                color: activeButton === "break" ? "#0a78be" : "#1c2b33",
                background: activeButton === "break" ? "#e1edf7" : undefined,
                fontWeight: activeButton === "break" ? "bold" : "400",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, .05)",
                },
              }}
              onClick={() => setActiveButton("break")}
            >
              <span
                style={{
                  display: "block",
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "100%",
                  textAlign: "center",
                }}
              >
                Breakedowns
              </span>
            </Button>
          </Grid>
          <Grid size={6}>
            <Button
              sx={{
                width: "100%",
                padding: "6px",
                minWidth: "unset",
                textTransform: "none",
                color: activeButton === "metrics" ? "#0a78be" : "#1c2b33",
                background: activeButton === "metrics" ? "#e1edf7" : undefined,
                fontWeight: activeButton === "metrics" ? "bold" : "400",
                "&:hover": {
                  backgroundColor: "rgba(0, 0, 0, .05)",
                },
              }}
              onClick={() => setActiveButton("metrics")}
            >
              Metrics
            </Button>
          </Grid>
        </Grid>
        <Button
          sx={{
            padding: "10px 12px",
            minWidth: "unset",
            "&:hover": {
              backgroundColor: "rgba(0, 0, 0, .05)",
            },
            border: "unset",
          }}
        >
          <Box
            sx={{
              width: "16px",
              height: "16px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
              maskPosition: "-204px -937px",
              background: "#1c2b33",
            }}
          />
        </Button>
      </Box>
      <Box marginTop={3} maxHeight="73vh" sx={{ overflowY: "auto" }}>
        {listAccordion?.map((ac, index) => (
          <Accordion
            key={String(index)}
            defaultExpanded
            slotProps={{
              root: {
                sx: {
                  boxShadow: "none",
                  "&.Mui-expanded": { margin: "0px !important" },
                },
              },
              heading: {
                sx: {
                  ".MuiButtonBase-root": {
                    minHeight: "unset !important",
                  },
                },
              },
            }}
          >
            <AccordionSummary
              expandIcon={<GridExpandMoreIcon />}
              aria-controls={`panel${index}-content`}
              id={`panel${index}-header`}
              sx={{
                ".MuiAccordionSummary-content": {
                  margin: "0px !important",
                },
              }}
            >
              <Typography component="span">{ac.key}</Typography>
            </AccordionSummary>
            <AccordionDetails
              sx={{
                padding: "0px 16px",
              }}
            >
              {!ac?.listChild
                ? null
                : ac?.listChild?.map((c, index) => (
                    <Box
                      key={String(index)}
                      display="flex"
                      alignItems="center"
                      gap={1}
                    >
                      <CheckboxCustom checked={c?.isShow} />
                      <span>{c.label}</span>
                    </Box>
                  ))}
            </AccordionDetails>
          </Accordion>
        ))}
      </Box>
    </Paper>
  );
};

export default RightContent;
