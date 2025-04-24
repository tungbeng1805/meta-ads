import CustomSwitch from "@/components/Switch";
import TextFieldCustom from "@/components/TextFieldCustom";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import ArrowDropDownIcon from "@mui/icons-material/ArrowDropDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import ReplyIcon from '@mui/icons-material/Reply';
import StarBorderIcon from '@mui/icons-material/StarBorder';
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import FacebookIcon from "@mui/icons-material/Facebook";
import InfoIcon from "@mui/icons-material/Info";
import InfoOutlineIcon from "@mui/icons-material/InfoOutline";
import {
  Box,
  MenuItem,
  Paper,
  Select,
  SelectChangeEvent,
  Tooltip,
  tooltipClasses,
  TooltipProps,
} from "@mui/material";
import Checkbox from "@mui/material/Checkbox";
import { styled } from "@mui/material/styles";
import moment from "moment";
import { useState } from "react";
import styles from "./styles.module.scss";

const LightTooltip = styled(({ className, ...props }: TooltipProps) => (
  <Tooltip {...props} classes={{ popper: className }} />
))(({ theme }) => ({
  [`& .${tooltipClasses.tooltip}`]: {
    backgroundColor: theme.palette.common.white,
    color: "rgba(0, 0, 0, 0.87)",
    boxShadow: theme.shadows[1],
    fontSize: 11,
  },
}));

const AdsEdit = ({ data }: any) => {
  console.log("🚀 ~ AdsEdit ~ data:", data)
  const [isOpen, setIsOpen] = useState<boolean>(true);
  const [person, setPerson] = useState<any>(2);

  const handleChangeValue = (event: SelectChangeEvent) => {
    setPerson(event.target.value);
  };

  return (
    <div
      style={{
        display: "grid",
        gridTemplateColumns: "1fr 1fr",
        columnGap: "10px",
        width: "100%",
      }}
    >
      <div>
        <Paper
          sx={{
            p: "15px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <p className={styles.titlePaper}>Partnership ad for 3 ads</p>
            <CustomSwitch />
          </div>
          <p className={styles.text}>
            Run ads with creators, brands and other businesses. These ads will
            feature both identities in the header.
            <span className={styles.learnMore}>Learn more</span>
          </p>
        </Paper>

        <Paper
          sx={{
            p: "15px",
            marginTop: "10px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
          >
            <LightTooltip
              title={
                <div style={{ padding: "10px 10px" }}>
                  <div className={styles.titlePaper}>1 error</div>
                  <ul>
                    <li className={styles.text}>
                      To place ads on Instagram, please select an Instagram
                      account to represent your business. If you don't have an
                      Instagram account, you can select your Facebook Page.
                    </li>
                  </ul>
                </div>
              }
              placement="top-start"
            >
              <ErrorOutlineIcon sx={{ color: "red" }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Identity for 3 ads</p>
          </div>
          <p style={{ margin: "10px 0px" }} className={styles.text}>
            Choose the Facebook Page and Instagram account that this ad will be
            associated with.
          </p>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
          >
            <p>*</p>
            <p className={styles.titlePaper}>Facebook Page</p>
            <LightTooltip
              title="Your Facebook Page or Instagram account represents your business in ads."
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: "14px" }} />
            </LightTooltip>
          </div>

          <Box display="flex" alignItems="center" gap="8px">
            <LightTooltip
              title={
                <div>
                  <p className={styles.text}>
                    The account that you selected for your ad's messaging
                    destination must be used as one of the identities.
                    <span className={styles.learnMore}>Edit selection</span>
                  </p>
                </div>
              }
              placement="right-start"
            >
              <div
                className="table-action"
                style={{
                  width: "100%",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  background: "#f7f7f7",
                }}
              >
                <div style={{ display: "flex", gap: "8px" }}>
                  <img
                    // src={`http://103.159.50.75:3000/${data.image}`}
                    src={`${import.meta.env.VITE_BASE_FOLDER + data.image}`}
                    style={{
                      width: "20px",
                      height: "20px",
                      borderRadius: "50%",
                    }}
                  />
                  {data.namePage}
                </div>
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
            <ErrorOutlineIcon sx={{ color: "red" }} />
            <div>
              <p className={styles.text}>
                You need access to advertise for S Body Studio.
              </p>
              <p className={styles.learnMore}>See details</p>
            </div>
          </div>

          <div className={styles.box} style={{ borderLeftColor: "#385898" }}>
            <InfoOutlineIcon sx={{ color: "#385898" }} />
            <p className={styles.text}>
              Any messages started from your ad will go to S Body Studio.
            </p>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              marginTop: "10px",
            }}
          >
            <p className={styles.titlePaper}>Instagram account</p>
            <LightTooltip
              title="Connecting an Instagram account can help you get better results on Instagram. If you dont connect asn account,
                    your Instagram ad will use the name, profile pictureand other details from your Facebook Page. The Page admin can manage connections in Page settings."
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: "14px" }} />
            </LightTooltip>
          </div>

          <Box display="flex" alignItems="center" gap="8px" mt="10px">
            <div
              className="table-action"
              style={{
                width: "250px",
                justifyContent: "space-between",
              }}
            >
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
            p: "15px",
            marginTop: "10px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
          >
            <LightTooltip
              title={
                <div style={{ padding: "10px 10px" }}>
                  <div className={styles.titlePaper}>Complete</div>
                  <span className={styles.text}>
                    All required fields have been completed.
                  </span>
                </div>
              }
              placement="top-start"
            >
              <CheckCircleOutlineIcon sx={{ color: "#63be09" }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Ad setup</p>
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
              marginTop: "10px",
            }}
            fullWidth
          >
            <MenuItem value={1}>Create Ad</MenuItem>
            <MenuItem value={2}>Use existing content</MenuItem>
            <MenuItem value={3}>Use Creative Hub mockup</MenuItem>
          </Select>

          <div style={{ display: "flex", marginTop: "15px" }}>
            <Checkbox sx={{ height: "16px" }} />
            <div>
              <p style={{ fontSize: "14px", fontWeight: "700" }}>
                Multi-advertiser ads
              </p>
              <p style={{ fontSize: "12px" }}>
                Your ads can appear alongside other ads in the same ad unit to
                help people discover products and services from businesses that
                are personalised to them. Your ad creative may be resized or
                cropped to fit the ad unit.{" "}
                <span className={styles.learnMore}>
                  Learn about multi-advertiser ads
                </span>
              </p>
            </div>
          </div>
          <div
            className="table-action"
            style={{ 
              width: "150px",
              justifyContent: "center",
              marginTop: "5px", 
            }}
          >
            Edit each ad
          </div>
        </Paper>

        <Paper
          sx={{
            p: "15px",
            marginTop: "10px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
          >
            <LightTooltip
              title={
                <div style={{ padding: "10px 10px" }}>
                  <div className={styles.titlePaper}>Complete</div>
                  <span className={styles.text}>
                    All required fields have been completed.
                  </span>
                </div>
              }
              placement="top-start"
            >
              <CheckCircleOutlineIcon sx={{ color: "#63be09" }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Ad creative</p>
          </div>
          <p className={styles.text} style={{ marginTop: "10px" }}>
            View content insights or choose existing content to create an ad.
            You can also customise media and text for each placement.
            <span className={styles.learnMore}>Learn more</span>
          </p>
          <div className={styles.box} style={{ borderLeftColor: "#385898" }}>
            <InfoOutlineIcon sx={{ color: "#385898" }} />
            <p className={styles.text}>
              Your Instagram ad will render Facebook mentions as regular text.
            </p>
          </div>

          <div style={{ display: "flex", margin: "15px 0px", gap: "10px" }}>
            <img
              src={`${import.meta.env.VITE_BASE_FOLDER + data?.image}`}
              style={{ width: "95px", height: "60px" }}
            />
            <div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <FacebookIcon />
                <span>Facebook Post</span>
              </div>
              <div
                style={{
                  textOverflow: "ellipsis",
                  overflow: "hidden",
                  whiteSpace: "nowrap",
                  width: "200px",
                  fontWeight: "bold",
                }}
              >
                {data.Description}
              </div>
              <div style={{ color: "#1c2b33a6" }}>
                <span>{data.idPost}</span> -{" "}
                <span>{moment(data.datePost).format("D MMM YYYY")}</span>
              </div>
            </div>
          </div>

          <div
            className="table-action"
            style={{
              width: "150px",
              marginTop: "10px",
              justifyContent: "center",
            }}
          >
            Change content
          </div>
          <div
            style={{ columnGap: "15px", display: "flex", margin: "10px 0px" }}
          >
            <span className={styles.learnMore}>Enter post ID</span>
            <span className={styles.learnMore}>Create a new post</span>
          </div>
          <strong>Primary text</strong>
          <div
            style={{
              border: "1px solid #1c2b33a6",
              borderRadius: "5px",
              padding: "5px 10px",
              color: "#1c2b33a6",
              whiteSpace: 'pre-line'
            }}
                dangerouslySetInnerHTML={{ __html: data.Description }}

          >
            {/* {data.Description} */}
          </div>
          <Box display="flex" alignItems="center" gap="8px">
            <LightTooltip
              title={
                <div>
                  <p className={styles.text}>
                    The account that you selected for your ad's messaging
                    destination must be used as one of the identities.
                    <span className={styles.learnMore}>Edit selection</span>
                  </p>
                </div>
              }
              placement="right-start"
            >
              <div
                className="table-action"
                style={{
                  width: "200px",
                  justifyContent: "space-between",
                  marginTop: "10px",
                  background: "#f7f7f7",
                }}
              >
                <AddCircleOutlineIcon />
                Add text option
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
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              marginTop: "10px",
            }}
          >
            <p className={styles.titlePaper}>Call to action</p>
            <LightTooltip
              title={
                <div>
                  <p className={styles.text}>
                    Choose the action that you want people to take when they see
                    your ad. Adding a button to your ad will also update your
                    original post.
                    <span className={styles.learnMore}>Learn more</span>
                  </p>
                </div>
              }
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: "14px" }} />
            </LightTooltip>
          </div>
          <Box display="flex" alignItems="center" gap="8px">
            <div
              className="table-action"
              style={{
                width: "200px",
                justifyContent: "space-between",
                marginTop: "10px",
                background: "#f7f7f7",
              }}
            >
              Send message
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
          </Box>
          <Box display="flex" alignItems="center" gap="8px" mt="16px" mb="8px">
            <p className="adset-title">Message destinations</p>
          </Box>
          <p className="conversion-des">
            Choose where you want to receive messages. Selecting multiple apps
            will send people to the app where they're most likely to engage.
          </p>
          <Box display="flex" alignItems="center" gap="8px" mt="16px" mb="8px">
            <p className="adset-title">Message destinations</p>
          </Box>
          <Box
            display="flex"
            alignItems="center"
            gap="8px"
            justifyContent="space-between"
            mb="12px"
          >
            <Box display="flex" flexDirection="column" gap="16px">
              <Box display="flex" alignItems="center" gap="8px">
                <Box
                  width="48px"
                  height="48px"
                  borderRadius="48px"
                  overflow="hidden"
                >
                  <img
                    src={`${import.meta.env.VITE_BASE_FOLDER + data?.image}`}
                    style={{
                      width: "40px",
                      height: "40px",
                      borderRadius: "50%",
                    }}
                  />
                </Box>
                <div>
                  <p className="conversion-title">Messenger</p>
                </div>
              </Box>
              <Box display="flex" alignItems="center" gap="8px">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="48px"
                  height="48px"
                  borderRadius="48px"
                  bgcolor="#f1f4f7"
                >
                  <img
                    width={20}
                    height={20}
                    src="https://static.xx.fbcdn.net/rsrc.php/yM/r/gXv36GX8I6t.svg?_nc_eui2=AeERl6DKbADZH_G8Rbj9RXI3lAqehfJLq16UCp6F8kurXk_565Pmf1jAPCfZffCmJ45yr2ElrvevJazPWXY0xeg9"
                  />
                </Box>
                <p className="conversion-title">Instagram</p>
              </Box>
              <Box display="flex" alignItems="center" gap="8px">
                <Box
                  display="flex"
                  justifyContent="center"
                  alignItems="center"
                  width="48px"
                  height="48px"
                  borderRadius="48px"
                  bgcolor="#f1f4f7"
                >
                  <img
                    width={20}
                    height={20}
                    src="https://static.xx.fbcdn.net/rsrc.php/yd/r/RIwqg3B0HgO.svg?_nc_eui2=AeETvJKOu27hf7JDvihLCmDCDEThPlbFLnoMROE-VsUuelOGJ17Puny-z6XkyaZLE9Vk6ClUfeJGQvEBQMA7_hhQ"
                  />
                </Box>
                <p className="conversion-title">WhatsApp</p>
              </Box>
            </Box>
            <div className="header-button icon-btn">Connect account</div>
          </Box>
          <p className="conversion-des">
            This Facebook Page isn't connected to a WhatsApp Business account.
            You must be an admin of this Facebook Page to connect to an account.{" "}
            <span className={styles.learnMore}>Learn more</span>L
          </p>
        </Paper>

        <Paper
          sx={{
            p: "15px",
            marginTop: "10px",
          }}
        >
          <p className={styles.titlePaper}>Advantage+ creative</p>
          <p style={{ margin: "15px 0px" }}>
            Tailor your ad for the{" "}
            <span className={styles.learnMore}>person</span> viewing it by
            letting us automatically optimise your creative. This can help
            improve performance.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              marginTop: "10px",
            }}
          >
            <p className={styles.titlePaper}>Enhancements (1/3)</p>
            <InfoIcon sx={{ fontSize: "14px" }} />
          </div>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <div>
              <div>
                <span style={{ fontWeight: "bold" }}>Turned off: </span>
                <span style={{ fontSize: "14px" }}>
                  Text improvements, Relevant comments
                </span>
              </div>
              <div>
                <span style={{ fontWeight: "bold" }}>Turned on: </span>
                <span style={{ fontSize: "14px" }}>
                  Adapt multi-image format
                </span>
              </div>
            </div>
            <div
              className="table-action"
              style={{
                width: "80px",
                marginTop: "10px",
                justifyContent: "center",
              }}
            >
              Edit
            </div>
          </div>
        </Paper>

        <Paper
          sx={{
            p: "15px",
            marginTop: "10px",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
          >
            <LightTooltip
              title={
                <div style={{ padding: "10px 10px" }}>
                  <div className={styles.titlePaper}>Complete</div>
                  <span className={styles.text}>
                    All required fields have been completed.
                  </span>
                </div>
              }
              placement="top-start"
            >
              <CheckCircleOutlineIcon sx={{ color: "#63be09" }} />
            </LightTooltip>
            <p className={styles.titlePaper}>Tracking for 3 ads</p>
          </div>

          <p className={styles.text}>
            Track event data sets that contain the conversions your ad might
            motivate. The dataset that contains the conversion selected for the
            ad account will be tracked by default.
          </p>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              marginTop: "10px",
            }}
          >
            <p className={styles.titlePaper}>Website events</p>
            <LightTooltip
              title={
                <div style={{ padding: "10px" }}>
                  <p style={{ fontWeight: 500, fontSize: "14px" }}>
                    Add pixel code to your website and Instant Experience to
                    report conversions, see activity and build audiences for ad
                    targeting.
                  </p>
                  <p style={{ fontSize: "14px" }} className={styles.learnMore}>
                    Learn more
                  </p>
                </div>
              }
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: "14px" }} />
            </LightTooltip>
          </div>
          <div style={{ display: "flex", justifyContent: "space-between" }}>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "5px",
              }}
            >
              <div></div>
              <p className={styles.titlePaper}>App events</p>
              <LightTooltip
                title={
                  <div style={{ padding: "10px" }}>
                    <p style={{ fontWeight: 500, fontSize: "14px" }}>
                      Add events to your app to view analytics, measure ad
                      performance and build audiences for ad targeting.
                    </p>
                    <p
                      style={{ fontSize: "14px" }}
                      className={styles.learnMore}
                    >
                      Get help for app install ads
                    </p>
                  </div>
                }
                placement="top-start"
              >
                <InfoIcon sx={{ fontSize: "14px" }} />
              </LightTooltip>
            </div>
            <div
              className="table-action"
              style={{ width: "80px", justifyContent: "center" }}
            >
              Set up
            </div>
          </div>
          <div
            style={{ display: "flex", alignItems: "center", columnGap: "5px" }}
          >
            <p className={styles.titlePaper}>Offline events</p>
            <LightTooltip
              title={
                <div style={{ padding: "10px" }}>
                  <p style={{ fontWeight: 500, fontSize: "14px" }}>
                    Upload offline sales and interaction data to measure ad
                    conversions. Then build audiences for ad targeting based on
                    these transactions.
                  </p>
                  <p style={{ fontSize: "14px" }} className={styles.learnMore}>
                    Learn more
                  </p>
                </div>
              }
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: "14px" }} />
            </LightTooltip>
          </div>
          <div className={styles.box} style={{ borderLeftColor: "#385898" }}>
            <InfoOutlineIcon sx={{ color: "#385898" }} />
            <div>
              <p className={styles.text}>
                You no longer need to select a domain for your web events.
                There's nothing that you need to do for this change.
              </p>
              <p className={styles.learnMore}>Learn more</p>
            </div>
          </div>

          <div
            style={{
              display: "flex",
              alignItems: "center",
              columnGap: "5px",
              margin: "15px 0px",
            }}
          >
            <p className={styles.titlePaper}>URL parameters</p>
            <p>Optional</p>
            <LightTooltip
              title={
                <div style={{ padding: "10px" }}>
                  <p style={{ fontWeight: 500, fontSize: "14px" }}>
                    Add parameters to the end of your website URL to track where
                    your visitors are coming from.
                  </p>
                  <p style={{ fontSize: "14px" }} className={styles.learnMore}>
                    Learn more
                  </p>
                </div>
              }
              placement="top-start"
            >
              <InfoIcon sx={{ fontSize: "14px" }} />
            </LightTooltip>
          </div>
          <TextFieldCustom />
          <div
            className="table-action"
            style={{
              width: "150px",
              justifyContent: "center",
              marginTop: "5px",
            }}
          >
            Edit each ad
          </div>
          <p className={styles.learnMore} style={{ marginTop: "5px" }}>
            Build a URL parameter
          </p>
        </Paper>
      </div>

      <div>
        <Paper
          sx={{
            p: "15px",
          }}
        >
          <div style={{ display: "flex", justifyContent: "space-between", alignItems: 'center' }}>
            <div>
              <CustomSwitch />
              <span>Ad preview</span>
            </div>
            <Box display="flex" alignItems="center" gap="8px" mt="10px">
              <div className="table-action">Connect account</div>

              <div
                className="table-action"
                style={{
                  width: "80px",
                  justifyContent: "space-between",
                }}
              >
                <ReplyIcon style={{fontSize: '18px'}} />
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
            </Box>
          </div>
          <div>
            <div className={styles.box} style={{ flexDirection: "column" }}>
              <div
                style={{
                  display: "flex",
                  justifyContent: "space-between",
                  width: "100%",
                  borderLeftColor: 'purple'
                }}
              >
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    columnGap: "5px",
                  }}
                >
                  <StarBorderIcon sx={{ color: "purple" }} />
                  <p className={styles.titlePaper}>You can now see more variotions of your ad in previews</p>
                </div>
                <ArrowDropDownIcon />
              </div>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '50%', marginTop: '15px'}}>
            <div style={{ display: "flex", alignItems: "center", }}>
              <FacebookIcon />
              <span>Facebook Feed</span>
            </div>
            <MoreHorizIcon />
          </div>
          <div style={{display: 'grid', gridTemplateColumns: '1fr 1fr', marginTop: '20px'}}>
            {data?.image_urls.length > 0 && data?.image_urls.map((item: any, index: number) => {
              return (
                <div key={index} style={{width: '100%'}}>
                  <img src={`${import.meta.env.VITE_BASE_FOLDER + item}`} style={{ width: '100%'}} />
                </div>
              )
            })}
          </div>
        </Paper>
      </div>
    </div>
  );
};

export default AdsEdit;
