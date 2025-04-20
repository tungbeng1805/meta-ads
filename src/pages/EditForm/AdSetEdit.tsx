import CheckboxCustom from "@/components/CheckboxCustom";
import TooltipCustom from "@/components/TooltipCustom";
import { Box, Divider, TextField, Checkbox } from "@mui/material";
import React from "react";

interface AdSetProps {}

const AdSetEdit = (props: AdSetProps) => {
  return (
    <Box display="flex" gap="8px">
      <Box display="flex" flexDirection="column" gap="16px">
        <div className="edit-adset-section">
          <Box display="flex" alignItems="center" gap="8px">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png?_nc_eui2=AeHOWrpHBG1OX8GpkcI4NkNcUKGpy66a4QBQoanLrprhAMRX99tVfDOSt9c2tNkBC1-_JfCWxZ0LhNZDgIkPJmq5)",
                maskPosition: "-21px -177px",
                background: "#1c2b33",
              }}
            />
            <p className="adset-title">Ad set Name</p>
          </Box>
          <Box display="flex" alignItems="center" gap="8px" mt="16px">
            <Box flex={1}>
              <TextField
                label=""
                variant="outlined"
                size="small"
                defaultValue={"Nhóm quảng cáo Lượt tương tác mới"}
                sx={{
                  width: "100%",
                  "& .MuiOutlinedInput-input": {
                    padding: "8px 10px 8px 8px",
                    fontSize: "14px",
                    "&::placeholder": {
                      color: "rgba(28, 43, 51, 0.6)",
                      opacity: 1,
                    },
                  },
                }}
              />
            </Box>
            <div className="header-button icon-btn">Create Template</div>
          </Box>
        </div>
        <div className="edit-adset-section">
          <Box display="flex" alignItems="center" gap="8px">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png?_nc_eui2=AeHOWrpHBG1OX8GpkcI4NkNcUKGpy66a4QBQoanLrprhAMRX99tVfDOSt9c2tNkBC1-_JfCWxZ0LhNZDgIkPJmq5)",
                maskPosition: "-21px -177px",
                background: "#1c2b33",
              }}
            />
            <p className="adset-title">Conversion</p>
          </Box>
          <Box marginTop="16px">
            <TooltipCustom
              placement="top-start"
              title="The conversion location cannot be changed once an ad set has been published. Create a new ad set to choose another conversion location."
            >
              <div className="conversion-location">
                <div>
                  <p className="conversion-title">Conversion location</p>
                  <p className="conversion-des">Message destinations</p>
                </div>
                <div className="conversion-edit-btn">
                  <Box
                    sx={{
                      width: "16px",
                      height: "16px",
                      maskImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v4/yH/r/4uSWT7f8xsz.png?_nc_eui2=AeELvwE_1Snrp73cViBoS83cZgSDTUs6p0pmBINNSzqnSv1j1jdZzkvYLXi_Ea3MoGImH_NFt_jw3pkEBK6PBg9j)",
                      maskPosition: "0px -807px",
                      background: "#0a78be",
                    }}
                  />
                </div>
              </div>
            </TooltipCustom>
          </Box>
          <Divider
            sx={{
              margin: "16px 0px",
            }}
          />
          <Box display="flex" alignItems="center" gap="8px">
            <p className="adset-title">Facebook Page</p>
            <TooltipCustom
              placement="top-start"
              title="Messaging apps linked to this Page can be selected as destinations to chat with people that respond to this ad. You can use any linked Pages managed by this ad account.
You can receive both Messenger and Instagram messages to your Page's inbox, but WhatsApp messages will only go to your WhatsApp Business account."
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png?_nc_eui2=AeFHnyDq0yr0XS8y8mLvsJBRNZAYEsuXd7w1kBgSy5d3vInP_1xnxsZv9ZGt_mpA0yiVxIwPJ_L3zd1K1bX_szXx)",
                  maskPosition: "-56px -521px",
                  background: "#1c2b33",
                }}
              />
            </TooltipCustom>
          </Box>
          <Box padding="8px 0px">
            <p className="conversion-des">
              This page will represent your business in your ad and
              conversation.
            </p>
          </Box>
          <div className="conversion-location">
            <Box display="flex" alignItems="center" gap="8px">
              <Box
                width="48px"
                height="48px"
                borderRadius="48px"
                overflow="hidden"
              >
                <img src="" />
              </Box>
              <div>
                <p className="conversion-title">Facebook Page</p>
                <p className="conversion-des">S body Studio</p>
              </div>
            </Box>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yH/r/4uSWT7f8xsz.png?_nc_eui2=AeELvwE_1Snrp73cViBoS83cZgSDTUs6p0pmBINNSzqnSv1j1jdZzkvYLXi_Ea3MoGImH_NFt_jw3pkEBK6PBg9j)",
                maskPosition: "0px -807px",
                background: "#606770",
              }}
            />
          </div>
          <Box display="flex" alignItems="center" gap="8px" mt="16px" mb="8px">
            <p className="adset-title">Message destinations</p>
            <TooltipCustom
              placement="top-start"
              title="These apps are where you'll chat with people that respond to your ad. Your budget will be shared across these apps."
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png?_nc_eui2=AeFHnyDq0yr0XS8y8mLvsJBRNZAYEsuXd7w1kBgSy5d3vInP_1xnxsZv9ZGt_mpA0yiVxIwPJ_L3zd1K1bX_szXx)",
                  maskPosition: "-56px -521px",
                  background: "#1c2b33",
                }}
              />
            </TooltipCustom>
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
                  <img src="" />
                </Box>
                <div>
                  <p className="conversion-title">Facebook Page</p>
                  <p className="conversion-des">S body Studio</p>
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
            Choose where you want to receive messages. Selecting multiple apps
            will send people to the app where they're most likely to engage.
          </p>
          <Divider
            sx={{
              margin: "16px 0px",
            }}
          />
          <Box display="flex" alignItems="center" gap="8px">
            <p className="adset-title">Performance goal</p>
            <TooltipCustom
              placement="top-start"
              title="For example: You can tell Meta to maximise purchase volume while keeping your average cost per action (CPA) at about $5."
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png?_nc_eui2=AeFHnyDq0yr0XS8y8mLvsJBRNZAYEsuXd7w1kBgSy5d3vInP_1xnxsZv9ZGt_mpA0yiVxIwPJ_L3zd1K1bX_szXx)",
                  maskPosition: "-56px -521px",
                  background: "#1c2b33",
                }}
              />
            </TooltipCustom>
          </Box>
          <Box mb="8px">
            <p className="des-little">How you measure success for your ads.</p>
          </Box>
          <div className="disable-input">
            Maximise number of conversations
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                maskPosition: "-221px -1118px",
                background: "#28394399",
              }}
            />
          </div>
          <Box display="flex" alignItems="center" gap="8px" mt="32px" mb="8px">
            <p className="adset-title">Cost per result goal</p>
            <TooltipCustom
              placement="top-start"
              title="Optimise your campaign for certain performance goals. Don't set a cost per result goal if you want Meta to focus on spending your entire budget for the most results."
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png?_nc_eui2=AeFHnyDq0yr0XS8y8mLvsJBRNZAYEsuXd7w1kBgSy5d3vInP_1xnxsZv9ZGt_mpA0yiVxIwPJ_L3zd1K1bX_szXx)",
                  maskPosition: "-56px -521px",
                  background: "#1c2b33",
                }}
              />
            </TooltipCustom>
          </Box>
          <div className="disable-input">X.XXX</div>
          <Box mt="4px">
            <p className="conversion-des">
              Meta will aim to spend your entire budget and get the most results
              using the highest-volume bid strategy.
            </p>
          </Box>
          <Divider
            sx={{
              margin: "16px 0px",
            }}
          />
          <Box display="flex" alignItems="center" mb="8px">
            <p className="des-link">Show more options</p>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                maskPosition: "-221px -1118px",
                background: "#0a78be",
              }}
            />
          </Box>
        </div>
        <div className="edit-adset-section">
          <Box display="flex" alignItems="center" gap="8px">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png?_nc_eui2=AeHOWrpHBG1OX8GpkcI4NkNcUKGpy66a4QBQoanLrprhAMRX99tVfDOSt9c2tNkBC1-_JfCWxZ0LhNZDgIkPJmq5)",
                maskPosition: "-21px -177px",
                background: "#1c2b33",
              }}
            />
            <p className="adset-title">Budget & schedule</p>
          </Box>
          <Box display="flex" alignItems="center" gap="8px" mt="16px">
            <p className="conversion-title">Budget</p>
            <TooltipCustom
              placement="top-start"
              title="If you need to use different bid strategies or budget schedules for your ad sets, switch to an ad set budget for your campaign."
            >
              <Box
                sx={{
                  width: "12px",
                  height: "12px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png?_nc_eui2=AeFHnyDq0yr0XS8y8mLvsJBRNZAYEsuXd7w1kBgSy5d3vInP_1xnxsZv9ZGt_mpA0yiVxIwPJ_L3zd1K1bX_szXx)",
                  maskPosition: "-56px -521px",
                  background: "#1c2b33",
                }}
              />
            </TooltipCustom>
          </Box>
          <Box padding="8px 0px">
            <p className="conversion-des">
              You set a daily Advantage campaign budget of ₫150,000.
            </p>
          </Box>
          <Box mt="16px" mb="16px">
            <p className="conversion-title">Schedule</p>
          </Box>
          <Box display="flex" alignItems="center" gap="8px" mb="8px">
            <p className="conversion-title">Start date</p>
          </Box>
          <Box display="flex" alignItems="center" mb="8px" width="100%">
            <div className="disable-input start-date">
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                  maskPosition: "-305px -965px",
                  background: "#28394399",
                }}
              />
              19 April 2025
            </div>
            <div className="disable-input start-date-left">
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png?_nc_eui2=AeHOWrpHBG1OX8GpkcI4NkNcUKGpy66a4QBQoanLrprhAMRX99tVfDOSt9c2tNkBC1-_JfCWxZ0LhNZDgIkPJmq5)",
                  maskPosition: "-21px -194px",
                  background: "#28394399",
                }}
              />
              19 : 47 +07
            </div>
          </Box>
          <Box display="flex" alignItems="center" gap="8px" mt="16px" mb="8px">
            <p className="conversion-title">End date</p>
          </Box>
          <Box display="flex" alignItems="center" gap="8px">
            <CheckboxCustom defaultChecked={false} />
            <p className="conversion-des">Set an end date</p>
          </Box>
          <Divider
            sx={{
              margin: "16px 0px",
            }}
          />
          <Box display="flex" alignItems="center" mb="8px">
            <p className="des-link">Show more options</p>
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                maskPosition: "-221px -1118px",
                background: "#0a78be",
              }}
            />
          </Box>
        </div>
        <div className="edit-adset-section">
          <Box display="flex" alignItems="center" gap="8px">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png?_nc_eui2=AeHOWrpHBG1OX8GpkcI4NkNcUKGpy66a4QBQoanLrprhAMRX99tVfDOSt9c2tNkBC1-_JfCWxZ0LhNZDgIkPJmq5)",
                maskPosition: "-21px -177px",
                background: "#1c2b33",
              }}
            />
            <p className="adset-title">Audience</p>
          </Box>
          <Box padding="8px 0px">
            <p className="conversion-des">
              Define who you want to see your ads.{" "}
              <span className="des-link">Learn more</span>
            </p>
          </Box>
        </div>
      </Box>
      <Box bgcolor="white" width="350px">
        aa
      </Box>
    </Box>
  );
};

export default AdSetEdit;
