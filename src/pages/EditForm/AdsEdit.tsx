import CustomSwitch from "@/components/Switch";
import TextFieldCustom from "@/components/TextFieldCustom";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import ArrowDropUpIcon from '@mui/icons-material/ArrowDropUp';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import ErrorOutlineIcon from '@mui/icons-material/ErrorOutline';
import InfoIcon from '@mui/icons-material/Info';
import InfoOutlineIcon from '@mui/icons-material/InfoOutline';
import { Box, MenuItem, Paper, Select, SelectChangeEvent, Tooltip, tooltipClasses, TooltipProps } from "@mui/material";
import Checkbox from '@mui/material/Checkbox';
import { styled } from '@mui/material/styles';
import { useState } from "react";
import styles from './styles.module.scss';

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: 'rgba(0, 0, 0, 0.87)',
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const AdsEdit = () => {
  const [isOpen, setIsOpen] = useState<boolean>(true)
  const [person, setPerson] = useState<any>(2);
  const handleChangeValue = (event: SelectChangeEvent) => {
    setPerson(event.target.value);
  };
  return (
    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', columnGap: '10px', width: '100%' }}>
      <div>
        <Paper
          sx={{
            p: '15px'
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <p className={styles.titlePaper}>Partnership ad for 3 ads</p>
            <CustomSwitch />
          </div>
          <p className={styles.text}>Run ads with creators, brands and other businesses. These ads will feature both identities in the header.<span className={styles.learnMore}>Learn more</span></p>
        </Paper>

        <Paper
          sx={{
            p: '15px',
            marginTop: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <LightTooltip
              title={
                (
                  <div style={{ padding: '10px 10px' }}>
                    <div className={styles.titlePaper}>1 error</div>
                    <ul>
                      <li className={styles.text}>To place ads on Instagram, please select an Instagram account to represent your business. If you don't have an Instagram account, you can select your Facebook Page.</li>
                    </ul>
                  </div>
                )
              }
              placement="top-start"
            >
              <ErrorOutlineIcon sx={{ color: 'red' }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Identity for 3 ads</p>

          </div>
          <p style={{ margin: '10px 0px' }} className={styles.text}>Choose the Facebook Page and Instagram account that this ad will be associated with.</p>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <p>*</p>
            <p className={styles.titlePaper}>Facebook Page</p>
            <LightTooltip
              title="Your Facebook Page or Instagram account represents your business in ads."
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: '14px' }} />
            </LightTooltip>
          </div>

          <Box display="flex" alignItems="center" gap="8px">
            <LightTooltip
              title={(
                <div>
                  <p className={styles.text}>The account that you selected for your ad's messaging destination must be used as one of the identities.<span className={styles.learnMore}>Edit selection</span></p>
                </div>
              )}
              placement="right-start"
            >
              <div className="table-action" style={{ width: '100%', justifyContent: 'space-between', marginTop: '10px', background: '#f7f7f7' }}>
                S Body Studio
                <Box
                  sx={{
                    width: " 16px",
                    height: "16px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/pqHpzOoq1-k.png)",
                    maskPosition: "-170px -1094px",
                    background: "#1c2b33",
                  }}
                />
              </div>
            </LightTooltip>
          </Box>

          <div className={styles.box}>
            <ErrorOutlineIcon sx={{ color: 'red' }} />
            <div>
              <p className={styles.text}>You need access to advertise for S Body Studio.</p>
              <p className={styles.learnMore}>See details</p>
            </div>
          </div>

          <div className={styles.box} style={{ borderLeftColor: '#385898' }}>
            <InfoOutlineIcon sx={{ color: '#385898' }} />
            <p className={styles.text}>Any messages started from your ad will go to S Body Studio.</p>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px', marginTop: '10px' }}>
            <p className={styles.titlePaper}>Instagram account</p>
            <LightTooltip
              title="Connecting an Instagram account can help you get better results on Instagram. If you dont connect asn account,
                    your Instagram ad will use the name, profile pictureand other details from your Facebook Page. The Page admin can manage connections in Page settings."
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: '14px' }} />
            </LightTooltip>
          </div>

          <Box display="flex" alignItems="center" gap="8px">
            <div className="table-action" style={{ width: '220px', justifyContent: 'space-between', marginTop: '10px', }}>
              Select an Instagram account
              <Box
                sx={{
                  width: " 16px",
                  height: "16px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/y-/r/pqHpzOoq1-k.png)",
                  maskPosition: "-170px -1094px",
                  background: "#1c2b33",
                }}
              />
            </div>
            <span>or</span>
            <div className="table-action">Connect account</div>
          </Box>
        </Paper>

        <Paper
          sx={{
            p: '15px',
            marginTop: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <LightTooltip
              title={
                (
                  <div style={{ padding: '10px 10px' }}>
                    <div className={styles.titlePaper}>Complete</div>
                    <span className={styles.text}>All required fields have been completed.</span>
                  </div>
                )
              }
              placement="top-start"
            >
              <CheckCircleOutlineIcon sx={{ color: '#63be09' }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Ad setup for 3 ads</p>
          </div>

          <Select
            value={person}
            onChange={handleChangeValue}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
            sx={{
              "& div.MuiInputBase-input": {
                paddingTop: "6.5px",
                paddingBottom: "6.5px",
              },
              "& fieldset.MuiOutlinedInput-notchedOutline": {
                borderColor: "rgba(0, 0, 0, 0.4)",
              },
              marginTop: '10px'
            }}
            fullWidth
          >
            <MenuItem value={1}>Create Ad</MenuItem>
            <MenuItem value={2}>Use existing content</MenuItem>
            <MenuItem value={3}>Use Creative Hub mockup</MenuItem>
          </Select>

          <div style={{ display: 'flex', marginTop: '5px' }}>
            <Checkbox sx={{ height: '16px' }} />
            <div>
              <p style={{ fontSize: '14px', fontWeight: '700' }}>Multi-advertiser ads</p>
              <p style={{ fontSize: '12px' }}>Your ads can appear alongside other ads in the same ad unit to help people discover products and services from businesses that are personalised to them. Your ad creative may be resized or cropped to fit the ad unit. <span className={styles.learnMore}>Learn about multi-advertiser ads</span></p>
            </div>
          </div>
          <div className="table-action" style={{ width: '100px', marginTop: '10px' }}>
            Edit each ad
          </div>
        </Paper>

        <Paper
          sx={{
            p: '15px',
            marginTop: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <LightTooltip
              title={
                (
                  <div style={{ padding: '10px 10px' }}>
                    <div className={styles.titlePaper}>Complete</div>
                    <span className={styles.text}>All required fields have been completed.</span>
                  </div>
                )
              }
              placement="top-start"
            >
              <CheckCircleOutlineIcon sx={{ color: '#63be09' }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Ad creative for 3 ads</p>
          </div>
          <p className={styles.text} style={{ marginTop: '10px' }}>View content insights or choose existing content to create an ad. You can also customise media and text for each placement.<span className={styles.learnMore}>Learn more</span></p>
          <div className="table-action" style={{ width: '150px', marginTop: '10px', justifyContent: 'center' }}>
            Select content
          </div>
          <div style={{ columnGap: '15px', display: 'flex', marginTop: '10px' }}>
            <span className={styles.learnMore}>Enter post ID</span>
            <span className={styles.learnMore}>Create a new post</span>
          </div>
          <div className={styles.box} style={{ borderLeftColor: '#385898' }}>
            <InfoOutlineIcon sx={{ color: '#385898' }} />
            <p className={styles.text}>At least one of the ads that you selected uses customised creative for different placements, so some options can't be edited.</p>
          </div>
        </Paper>

        <Paper
          sx={{
            p: '15px',
            marginTop: '10px'
          }}
        >
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
            <LightTooltip
              title={
                (
                  <div style={{ padding: '10px 10px' }}>
                    <div className={styles.titlePaper}>Complete</div>
                    <span className={styles.text}>All required fields have been completed.</span>
                  </div>
                )
              }
              placement="top-start"
            >
              <CheckCircleOutlineIcon sx={{ color: '#63be09' }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Tracking for 3 ads</p>
          </div>

          <p className={styles.text}>Track event data sets that contain the conversions your ad might motivate. The dataset that contains the conversion selected for the ad account will be tracked by default.</p>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px', marginTop: '10px' }}>
            <p className={styles.titlePaper}>Website events</p>
            <LightTooltip
              title={(
                <div style={{ padding: '10px' }}>
                  <p style={{ fontWeight: 500, fontSize: '14px' }}>Add pixel code to your website and Instant Experience to report conversions, see activity and build audiences for ad targeting.</p>
                  <p style={{ fontSize: '14px' }} className={styles.learnMore}>Learn more</p>
                </div>
              )}
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: '14px' }} />
            </LightTooltip>
          </div>
          <div style={{ display: 'flex', justifyContent: 'space-between' }}>
            <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px', }}>
              <div></div>
              <p className={styles.titlePaper}>App events</p>
              <LightTooltip
                title={(
                  <div style={{ padding: '10px' }}>
                    <p style={{ fontWeight: 500, fontSize: '14px' }}>Add events to your app to view analytics, measure ad performance and build audiences for ad targeting.</p>
                    <p style={{ fontSize: '14px' }} className={styles.learnMore}>Get help for app install ads</p>
                  </div>
                )}
                placement="top-start"
              >
                <InfoIcon sx={{ fontSize: '14px' }} />
              </LightTooltip>
            </div>
            <div className="table-action" style={{ width: '80px', justifyContent: 'center' }}>
              Set up
            </div>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px', }}>
            <p className={styles.titlePaper}>Offline events</p>
            <LightTooltip
              title={(
                <div style={{ padding: '10px' }}>
                  <p style={{ fontWeight: 500, fontSize: '14px' }}>Upload offline sales and interaction data to measure ad conversions. Then build audiences for ad targeting based on these transactions.</p>
                  <p style={{ fontSize: '14px' }} className={styles.learnMore}>Learn more</p>
                </div>
              )}
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: '14px' }} />
            </LightTooltip>
          </div>
          <div className={styles.box} style={{ borderLeftColor: '#385898' }}>
            <InfoOutlineIcon sx={{ color: '#385898' }} />
            <div>
              <p className={styles.text}>You no longer need to select a domain for your web events. There's nothing that you need to do for this change.</p>
              <p className={styles.learnMore}>Learn more</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px', marginBottom: '5px' }}>
            <p className={styles.titlePaper}>URL parameters</p>
            <p>Optional</p>
            <LightTooltip
              title={(
                <div style={{ padding: '10px' }}>
                  <p style={{ fontWeight: 500, fontSize: '14px' }}>Add parameters to the end of your website URL to track where your visitors are coming from.
                  </p>
                  <p style={{ fontSize: '14px' }} className={styles.learnMore}>Learn more</p>
                </div>
              )}
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: '14px' }} />
            </LightTooltip>
          </div>
          <TextFieldCustom />
          <div className="table-action" style={{ width: '150px', justifyContent: 'center', marginTop: '5px' }}>
            Edit each ad
          </div>
          <p className={styles.learnMore} style={{ marginTop: '5px' }}>Build a URL parameter</p>
        </Paper>
      </div>

      <div>
        <Paper
          sx={{
            p: '15px'
          }}
        >
          <div>
            <div className={styles.box} style={{ flexDirection: 'column' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', width: '100%' }} onClick={() => { setIsOpen((pre) => !pre) }}>
                <div style={{ display: 'flex', alignItems: 'center', columnGap: '5px' }}>
                  <ErrorOutlineIcon sx={{ color: 'red' }} />
                  <p className={styles.titlePaper}>Verifying your changes</p>
                </div>
                {isOpen ? <ArrowDropUpIcon /> : <ArrowDropDownIcon />}
              </div>
              {isOpen && (
                <div>
                  <div style={{ padding: '5px 0px', borderTop: '1px solid #f1ecec', borderBottom: '1px solid #f1ecec', margin: '5px 0px' }}>
                    <p className={styles.text}>To place ads on Instagram, please select an Instagram account to represent your business. If you don't have an Instagram account, you can select your Facebook Page. (#1772103) <span className={styles.learnMore}>Learn more</span></p>
                    <div className="table-action" style={{ width: '200px', justifyContent: 'center', marginTop: '5px' }}>
                      Select Instagram account
                    </div>
                  </div>
                  <p className={styles.text}>Page like creative type deprecated: This creative type has been deprecated. For Page like ads, please create creatives using object story spec and specify the "Like Page" call to action. (#1885996) </p>
                </div>
              )}
            </div>
          </div>
        </Paper>
      </div>  
    </div>
  )
}

export default AdsEdit