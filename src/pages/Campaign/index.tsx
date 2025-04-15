import React from "react";
import CampaignHeader from "./components/CampaignHeader";
import { Box } from "@mui/material";
import CampaignTable from "./components/CampaignTable";
import AdsetTable from "./components/AdSetTable";
import AdsTable from "./components/AdsTable";
import ReactDateRangePickerCustom from "@/components/DateRangePicker";
import CampaignIcon from "@/components/SvgIcons/CampainIcon";
import AdSetIcon from "@/components/SvgIcons/AdSetIcon";
import AdsIcon from "@/components/SvgIcons/AdsIcon";
import CampaignAction from "./components/CampaignAction";

interface CampaignProps {}

const Campaign = (props: CampaignProps) => {
  const [tabActive, setTabActive] = React.useState<string>("campaign");
  const tabList = [
    {
      code: "campaign",
      label: "Campaigns",
      icon: <CampaignIcon />,
    },
    {
      code: "adSet",
      label: "Ad sets",
      icon: <AdSetIcon />,
    },
    {
      code: "ads",
      label: "Ads",
      icon: <AdsIcon />,
    },
  ];

  const renderTable = (type: string) => {
    switch (type) {
      case "campaign":
        return <CampaignTable />;
      case "adSet":
        return <AdsetTable />;
      case "ads":
        return <AdsTable />;
      default:
        return;
    }
  };

  const handleClickTab = (tab: string) => {
    setTabActive(tab);
  };

  return (
    <div className="campain-page">
      <CampaignHeader />
      <div className="content-wrapper">
        <CampaignAction />
        <Box height="38px" bgcolor="white" padding="0px 8px"></Box>
        <Box marginTop="8px">
          <Box
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            height="38px"
            padding="0px 8px"
          >
            <Box display="flex" alignItems="center" gap="8px">
              {tabList?.map((tab) => {
                const active = tab?.code === tabActive;

                return (
                  <div
                    key={tab?.code}
                    className={`tab ${active ? "tabActive" : ""}`}
                    onClick={() => handleClickTab(tab?.code)}
                  >
                    {tab?.icon}
                    {tab?.label}
                  </div>
                );
              })}
            </Box>
            <Box marginBottom="12px">
              <ReactDateRangePickerCustom
                onChange={(dateRange) => {}}
                initialDateRange={{
                  startDate: new Date(),
                  endDate: new Date(),
                }}
              />
            </Box>
          </Box>
          {renderTable(tabActive)}
        </Box>
      </div>
    </div>
  );
};

export default Campaign;
