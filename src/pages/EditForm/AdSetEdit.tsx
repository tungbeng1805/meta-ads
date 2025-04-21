import CheckboxCustom from "@/components/CheckboxCustom";
import CustomRadio from "@/components/RadioCustom";
import TooltipCustom from "@/components/TooltipCustom";
import { Box, Divider, InputAdornment, TextField } from "@mui/material";
import React from "react";
import PlacementAccordion from "./PlacementAccordion";

interface AdSetProps {}

const AdSetEdit = (props: AdSetProps) => {
  return (
    <Box display="flex" gap="16px">
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
          <div className="audience-control">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/gUZYer0ynAt.png?_nc_eui2=AeH9p-fD6VJmdOzhES9f6unmZM_K53s0Wo9kz8rnezRaj-4R1LNIMqs6-wYy9zohQYS9OuB8nIiu_7jlo2U6wQrM)",
                maskPosition: "0px -470px",
                maskSize: "71px 551px",
                background: "#0a78be",
              }}
            />
            <Box display="flex" flexDirection="column" gap="8px">
              <p className="conversion-des">
                You can set audience controls for this ad account to apply to
                all campaigns.
              </p>
              <p className="des-link">
                See audience controls in Advertising settings
              </p>
            </Box>
          </div>
          <div className="lower-cost">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
                maskPosition: "-34px -1101px",
                maskSize: "325px 1135px",
                background: "#4dbba6",
              }}
            />
            <Box display="flex" flexDirection="column" gap="8px" flex={1}>
              <Box display="flex" alignItems="center" gap="4px">
                <p className="conversion-title">
                  You could get 9.7% lower cost per result with Advantage+
                  audience
                </p>
                <TooltipCustom
                  placement="top-start"
                  title="This result is based on a meta-analysis run between 1 January 2023 and 1 August 2024. It looked at 150 AB studies that included advertisers across industries and regions who used mid-funnel performance goals, but excluded advertisers who used a broad audience. The analysis showed that campaigns that used Advantage+ audience saw a 9.7% lower median cost per result compared to those that did not. This is provided to give you an idea of possible performance, but performance isn't guaranteed. "
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
                Let our advanced ad technology automatically find the audience
                for this campaign to help improve performance. You can still set
                limits to control who can and can't see your ads.{" "}
                <span className="des-link">About Advantage+ audience</span>
              </p>
            </Box>
          </div>
          <Box display="flex" mt="8px">
            <div className="header-button icon-btn">
              Use Advantage+ audience
            </div>
          </Box>
          <div className="create-audience">
            <Box display="flex" alignItems="center" gap="16px">
              <div className="create-audience-tab">Create new audience</div>
              <div className="use-audience-tab">
                Use saved audience
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                    maskPosition: "-221px -1118px",
                    background: "#1c2b33",
                  }}
                />
              </div>
            </Box>
          </div>
          <Box mt="32px">
            <Box
              display="flex"
              alignItems="center"
              gap="16px"
              justifyContent="space-between"
              mb="4px"
            >
              <Box display="flex" alignItems="center" gap="8px">
                <p className="conversion-title">Custom Audiences</p>
                <TooltipCustom
                  placement="right-end"
                  title="Include a custom audience to reach people who've already interacted with your business or lookalike audiences to reach new people similar to your existing customers."
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
              <Box display="flex" alignItems="center" gap="8px">
                <p className="conversion-des">Create new</p>
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
                    maskPosition: "-221px -1118px",
                    maskSize: "325px 1135px",
                    background: "#1c2b33",
                  }}
                />
              </Box>
            </Box>
            <TextField
              label=""
              variant="outlined"
              size="small"
              placeholder="Search existing audience"
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
          </Box>
          <Box display="flex" mt="8px">
            <div className="header-button icon-btn">Add exclusions</div>
          </Box>
          <Box mt="16px">
            <div className="conversion-location">
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <p className="conversion-title">* Locations</p>
                  <TooltipCustom
                    placement="right-end"
                    title="Enter one or more global regions, countries, counties/regions/states, cities, postal codes, addresses or Designated Market Areas® to show or exclude your ad to people in those locations as closely as possible, based on a range of signals across Meta. Location targeting is not available in all countries."
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
                <p className="des-little">
                  Included location:
                  <br />
                  Vietnam: Phan Đình Phùng, Thái Nguyên (+5 km)
                </p>
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
            <div className="conversion-location">
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <p className="conversion-title">Age</p>
                  <TooltipCustom
                    placement="right-end"
                    title="Select the minimum and maximum age of the people who will find your ad relevant."
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
                <p className="conversion-des">18-40</p>
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
            <div className="conversion-location">
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <p className="conversion-title">Gender</p>
                  <TooltipCustom
                    placement="right-end"
                    title="Show your ads to either men or women, or select All for both."
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
                <p className="conversion-des">All genders</p>
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
            <Box display="flex" alignItems="center" gap="8px">
              <p className="conversion-title">Advantage detailed targeting</p>
              <TooltipCustom
                placement="right-end"
                title="Advantage detailed targeting
                Advantage detailed targeting expands your audience beyond your selections to reach more people. It's automatically enabled because it's proven to improve performance for this campaign objective. About Advantage detailed targeting
                Because your audience is expanded through automation, the estimated audience size will not reflect the total number of Account Centre accounts that meet the targeting criteria."
              >
                <Box
                  sx={{
                    width: "12px",
                    height: "12px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/yg/r/OMw3xxaiRPW.png?_nc_eui2=AeGw62GQyT4wCcz3Q1Mhg_TGys3BWngcHKvKzcFaeBwcqwYLGcG3mNoChGts8wY2oeRbZhJxVcbwVh_lFh_U9XO8)",
                    maskPosition: "0px -186px",
                    maskSize: "21px 212px",
                    background: "#1c2b33",
                  }}
                />
              </TooltipCustom>
            </Box>
            <Box display="flex" alignItems="center" gap="8px" mt="8px" mb="8px">
              <p className="des-title-small">Include people who match</p>
              <TooltipCustom
                placement="right-end"
                title="We may deliver ads beyond your audience for eligible ad objectives if it's likely to improve performance."
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
            <TextField
              label=""
              variant="outlined"
              size="small"
              placeholder="Add demographics, interests or behaviours"
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
                  endAdornment: (
                    <InputAdornment position="end">
                      <span className="conversion-des">Browse</span>
                    </InputAdornment>
                  ),
                },
              }}
            />
          </Box>
          <Box mt="16px">
            <Box display="flex" alignItems="center" gap="8px">
              <p className="conversion-title">Languages</p>
              <TooltipCustom
                placement="right-end"
                title="We'll deliver your ads to people that we determine can understand the languages that you select."
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
            <p className="conversion-des">All languages</p>
          </Box>
          <Box mt="20px">
            <Box display="flex" alignItems="center" gap="8px">
              <CheckboxCustom defaultChecked={false} />
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/gUZYer0ynAt.png?_nc_eui2=AeH9p-fD6VJmdOzhES9f6unmZM_K53s0Wo9kz8rnezRaj-4R1LNIMqs6-wYy9zohQYS9OuB8nIiu_7jlo2U6wQrM)",
                  maskPosition: "-34px -402px",
                  maskSize: "71px 551px",
                  background: "#1c2b33",
                }}
              />
              <p className="conversion-des">
                Run an A/B test to see the results of using Advantage+ audience
              </p>
            </Box>
          </Box>
          <Divider
            sx={{
              margin: "16px 0px",
            }}
          />
          <Box display="flex">
            <div className="header-button icon-btn">Save audience</div>
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
            <p className="adset-title">Placement</p>
          </Box>
          <Box padding="8px 0px">
            <p className="conversion-des">
              Choose where your ad appears across Meta technologies.{" "}
              <span className="des-link">Learn more</span>
            </p>
          </Box>
          <Box mt="16px">
            <Box display="flex" gap="8px" alignItems="flex-start">
              <CustomRadio checked={false} />
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <p className="conversion-des">
                    Advantage+ placements (recommended)
                  </p>
                  <Box
                    sx={{
                      width: "12px",
                      height: "12px",
                      maskImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v4/yn/r/UbraVqMmRLl.png?_nc_eui2=AeHv6EIsLVLB6zJ_nnVmZDncLEO5pzaNyNAsQ7mnNo3I0Pde_yXxEm8E7Fnvg28KuWdLKPBXkEHDbVjNdf9H3Ytd)",
                      maskPosition: "-26px -216px",
                      maskSize: "269px 229px",
                      background: "#1c2b33",
                    }}
                  />
                </Box>
                <p className="des-little">
                  Use Advantage+ placements to maximise your budget and help
                  show your ads to more people. Facebook's delivery system will
                  allocate your ad set's budget across multiple placements based
                  on where they're likely to perform best.
                </p>
              </div>
            </Box>
            <Box display="flex" gap="8px" alignItems="flex-start" mt="16px">
              <CustomRadio checked={true} />
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <p className="conversion-des">Manual placements</p>
                </Box>
                <p className="des-little">
                  Manually choose the places to show your ad. The more
                  placements you select, the more opportunities you'll have to
                  reach your target audience and achieve your business goals.
                </p>
              </div>
            </Box>
          </Box>
          <div className="lower-cost">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
                maskPosition: "-34px -1101px",
                maskSize: "325px 1135px",
                background: "#4dbba6",
              }}
            />
            <Box display="flex" flexDirection="column" gap="8px" flex={1}>
              <p className="conversion-title">
                You could get better results with Advantage+ placements
              </p>
              <p className="conversion-des">
                Including more placements often helps you find a wider audience.
                The more places your ad is displayed, the more chances your
                target audience has to see it.{" "}
                <span className="des-link">About Advantage+ placements</span>
              </p>
              <Box display="flex">
                <div className="header-button icon-btn">Apply now</div>
              </Box>
            </Box>
          </div>
          <Box mt="16px" mb="8px">
            <Box display="flex" alignItems="center" gap="8px">
              <CheckboxCustom defaultChecked={false} />
              <Box
                sx={{
                  width: "16px",
                  height: "16px",
                  maskImage:
                    "url(https://static.xx.fbcdn.net/rsrc.php/v4/yI/r/gUZYer0ynAt.png?_nc_eui2=AeH9p-fD6VJmdOzhES9f6unmZM_K53s0Wo9kz8rnezRaj-4R1LNIMqs6-wYy9zohQYS9OuB8nIiu_7jlo2U6wQrM)",
                  maskPosition: "-34px -402px",
                  maskSize: "71px 551px",
                  background: "#1c2b33",
                }}
              />
              <p className="conversion-des">
                Run an A/B test to see the results of using Advantage+
                placements
              </p>
            </Box>
          </Box>
          <div className="conversion-location">
            <div>
              <p className="conversion-title">Devices</p>
              <p className="conversion-des">All devices</p>
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
          <Box mt="16px">
            <p className="conversion-title">Platforms</p>
            <Box display="flex" alignItems="center" gap="16px">
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <CheckboxCustom defaultChecked={true} />
                  <p className="conversion-des">Facebook</p>
                </Box>
                <Box display="flex" alignItems="center" gap="8px" mt="4px">
                  <CheckboxCustom defaultChecked={false} disabled />
                  <p className="conversion-des">Audience Network</p>
                </Box>
              </div>
              <div>
                <Box display="flex" alignItems="center" gap="8px">
                  <CheckboxCustom defaultChecked={true} />
                  <p className="conversion-des">Instagram</p>
                </Box>
                <Box display="flex" alignItems="center" gap="8px" mt="4px">
                  <CheckboxCustom defaultChecked={false} disabled />
                  <p className="conversion-des">Messenger</p>
                </Box>
              </div>
            </Box>
          </Box>
          <Box mt="16px">
            <Box display="flex" alignItems="center" gap="8px">
              <p className="conversion-title">Asset customisation</p>
              <TooltipCustom
                placement="right-end"
                title="Asset customisation allows you to select different images or videos for each placement within a single ad."
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
            <p className="des-little">
              17/16 placements that support asset customisation
            </p>
          </Box>
          <Box mt="16px">
            <Box display="flex" alignItems="center" gap="8px">
              <p className="conversion-title">Placements</p>
            </Box>
            <PlacementAccordion />
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
      </Box>
      <Box width="350px" position="relative">
        <Box position="sticky" top={0} paddingTop="12px">
          <Box padding="16px" borderRadius="4px" bgcolor="white">
            <Box display="flex" alignItems="center" gap="8px">
              <p className="adset-title">Audience definition</p>
              <TooltipCustom
                placement="bottom-start"
                title="Audience definition The audience definition scale is based on the audience targeting selections that you are using for this ad set. When an audience is too narrow, ad delivery may be affected."
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
            <p className="audience-small" style={{ marginTop: "16px" }}>
              Your audience is broad.
            </p>
            <p className="audience-small" style={{ marginTop: "16px" }}>
              Broad audiences can improve performance and reach more people
              likely to respond.
            </p>
            <Box mt="16px">
              <Box display="flex" alignItems="center" gap="4px">
                <Box
                  flex={1}
                  height="8px"
                  borderRadius="8px"
                  bgcolor="#ffecec"
                />
                <Box
                  flex={1}
                  height="8px"
                  borderRadius="8px"
                  bgcolor="#fff6dd"
                />
                <Box
                  flex={1}
                  height="8px"
                  borderRadius="8px"
                  bgcolor="#007f58"
                />
              </Box>
              <Box
                display="flex"
                alignItems="center"
                justifyContent="space-between"
                mt="8px"
              >
                <p className="audience-small">Narrow</p>
                <p className="audience-small">Broad</p>
              </Box>
              <Divider sx={{ mt: "32px", mb: "8px" }} />
              <Box display="flex" alignItems="center" gap="8px">
                <p className="audience-small">
                  Estimated audience size: 397,100 - 467,200
                </p>
                <TooltipCustom
                  placement="bottom-end"
                  title="Estimated audience size is an estimate of how many Accounts Centre accounts may meet your targeting criteria. It is based on factors such as targeting selections, ad placements and how many Accounts Centre accounts were shown ads on Meta apps and services in the past 30 days.
This is not an estimate of how many people will see your ad and is not designed to match population or census data. This metric is in in development."
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
              <Box display="flex" gap="8px" mt="16px">
                <Box
                  sx={{
                    width: "20px",
                    height: "20px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/y_/r/NOWSRrvP809.png?_nc_eui2=AeHMrtcHJMZ_fFU5jLaakrnojRO0FoGwrX-NE7QWgbCtf8U7A7IaUAMB8svsCeYfiyqpzOwq6tr3_pn_YsFVQJXc)",
                    maskPosition: "0px -349px",
                    background: "#1c2b33",
                  }}
                />
                <p className="audience-small" style={{ flex: 1 }}>
                  Estimates do not include Advantage audience options and may
                  vary significantly over time based on your targeting
                  selections and available data.
                </p>
              </Box>
            </Box>
          </Box>
          <Box padding="16px" borderRadius="4px" bgcolor="white" mt="16px">
            <p className="adset-title">Estimated daily results</p>
            <p className="conversion-des" style={{ marginTop: "16px" }}>
              Estimated daily results aren't available for this campaign because
              it has a budget that is optimised across ad sets.
            </p>
          </Box>
        </Box>
      </Box>
    </Box>
  );
};

export default AdSetEdit;
