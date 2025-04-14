import { BRAEK_DOWN_MENU } from "@/constants/breakDownMenu";
import { METRICS_MENU } from "@/constants/metricsMenu";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Button,
  Checkbox,
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
    <Paper className="pivot-table" sx={{ height: "100vh", width: "270px", boxShadow: "none" }}>
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
      <Box marginTop={3}>
        {listAccordion?.map((ac, index) => (
          <Accordion
            sx={{
              boxShadow: "none",
            }}
            slotProps={{
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
                : ac?.listChild?.map((c) => (
                    <Box display="flex" alignItems="center" gap={1}>
                      <Checkbox defaultChecked={c.isShow} sx={{ padding: 0 }} icon={<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_16789638">
                            <g fill="rgb(0,0,0)">
                              <path d="M18 20.5H6c-.663 0-1.299-.263-1.768-.732A2.495 2.495 0 0 1 3.5 18V6c0-.663.263-1.299.732-1.768A2.495 2.495 0 0 1 6 3.5h12c.663 0 1.299.263 1.768.732.469.469.732 1.105.732 1.768v12c0 .663-.263 1.299-.732 1.768A2.495 2.495 0 0 1 18 20.5ZM6 4.5c-.398 0-.779.158-1.061.439A1.5 1.5 0 0 0 4.5 6v12c0 .398.158.779.439 1.061.282.281.663.439 1.061.439h12c.398 0 .779-.158 1.061-.439.281-.282.439-.663.439-1.061V6c0-.398-.158-.779-.439-1.061A1.5 1.5 0 0 0 18 4.5H6Z"/>
                            </g>
                          </svg>
                          }
                        checkedIcon={<svg fill="none" height="24" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg" id="fi_16789638">
                          <g>
                            <path fill="rgb(0,0,0)" d="m18 20.5h-12c-.66304 0-1.29898-.2634-1.76782-.7322-.46884-.4689-.73218-1.1048-.73218-1.7678v-12c0-.66304.26334-1.29892.73218-1.76776s1.10478-.73224 1.76782-.73224h12c.663 0 1.299.2634 1.7678.73224.4689.46884.7322 1.10472.7322 1.76776v12c0 .663-.2633 1.2989-.7322 1.7678-.4688.4688-1.1048.7322-1.7678.7322zm-12-16c-.39782 0-.77936.15803-1.06067.43933-.2813.28131-.43933.66285-.43933 1.06067v12c0 .3978.15803.7794.43933 1.0607.28131.2813.66285.4393 1.06067.4393h12c.3978 0 .7794-.158 1.0607-.4393s.4393-.6629.4393-1.0607v-12c0-.39782-.158-.77936-.4393-1.06067-.2813-.2813-.6629-.43933-1.0607-.43933z"/>
                            <path fill="#0a78be" d="m10.5861 15.328c-.0657.0001-.1309-.0127-.1917-.0378-.0607-.025-.1158-.0618-.1623-.1082l-2.82805-2.828c-.09388-.0937-.14675-.2209-.14685-.3536-.00009-.1327.05249-.26.14624-.3539.09376-.0939.22108-.1467.35376-.1468s.25988.0526.35376.1463l2.47514 2.475 5.2999-5.3c.0943-.09108.2206-.14146.3517-.14032s.2565.05372.3492.14643c.0927.0927.1452.21808.1464.34918.0011.1311-.0492.25744-.1403.35174l-5.657 5.65697c-.0934.0917-.2191.143-.3499.143z"/>
                          </g>
                        </svg>
                        }
                      />
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
