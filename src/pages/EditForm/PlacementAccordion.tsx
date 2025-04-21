import CheckboxCustom from "@/components/CheckboxCustom";
import { LIST_PLACEMENT } from "@/constants/placement";
import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  Divider,
} from "@mui/material";

const PlacementAccordion = () => {
  return (
    <div className="list-placement">
      {LIST_PLACEMENT?.map((ac, index) => (
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
                  padding: "0px",
                },
              },
            },
          }}
        >
          <AccordionSummary
            expandIcon={null}
            aria-controls={`panel${index}-content`}
            id={`panel${index}-header`}
            sx={{
              ".MuiAccordionSummary-content": {
                margin: "0px !important",
              },
            }}
          >
            <Box width="100%" padding="8px">
              <Box display="flex" justifyContent="space-between">
                <Box display="flex" alignItems="center" gap={1} padding={1}>
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      maskImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/AfMkzmaKNXJ.png?_nc_eui2=AeESB5V7MOyK28ynRRXicFujzA6fH4SBgFbMDp8fhIGAVjQC-8ygwqbMmxLFw93WrnNAdPPDUBCrbOxUV2XZ7H_I)",
                      maskPosition: "0px -102px",
                      background: "#91959d",
                    }}
                  />
                  <Divider
                    orientation="vertical"
                    sx={{
                      height: "12px",
                    }}
                  />
                  <p className="placement-name">{ac.label}</p>
                </Box>
                <CheckboxCustom
                  defaultChecked={ac.checked}
                  disabled={!ac.checked}
                />
              </Box>
              <p className="placement-des">{ac?.description}</p>
            </Box>
          </AccordionSummary>
          <AccordionDetails
            sx={{
              padding: "0px 8px",
            }}
          >
            {!ac?.child
              ? null
              : ac?.child?.map((c, index) => (
                  <Box
                    key={String(index)}
                    display="flex"
                    alignItems="center"
                    justifyContent="space-between"
                    padding="8px 0"
                  >
                    <span className="placement-child-name">{c.label}</span>
                    <CheckboxCustom
                      defaultChecked={c?.checked}
                      disabled={!c.checked}
                    />
                  </Box>
                ))}
          </AccordionDetails>
        </Accordion>
      ))}
    </div>
  );
};

export default PlacementAccordion;
