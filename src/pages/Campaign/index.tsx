import ReactDateRangePickerCustom from "@/components/DateRangePicker";
import AdSetIcon from "@/components/SvgIcons/AdSetIcon";
import AdsIcon from "@/components/SvgIcons/AdsIcon";
import CampaignIcon from "@/components/SvgIcons/CampainIcon";
import RightSideBar from "@/layouts/RightSidBar";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { getParamsId } from "@/util";
import { Box, TextField } from "@mui/material";
import React, { useEffect, useState } from "react";
import AdsetTable from "./components/AdSetTable";
import AdsTable from "./components/AdsTable";
import CampaignAction from "./components/CampaignAction";
import CampaignHeader from "./components/CampaignHeader";
import CampaignTable from "./components/CampaignTable";
import TableHeaderAction from "./components/TableHeaderAction";
import ViewChart from "./components/ViewChart";

interface CampaignProps {}

const Campaign = (props: CampaignProps) => {
  const [tabActive, setTabActive] = React.useState<string>("campaign");
  const [data, setData] = useState<Array<any>>([]);
  const [isOpenChart, setIsOpenChart] = useState<boolean>(false);

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
        return <CampaignTable data={data} />;
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

  const paramObj = getParamsId()

  const getData = async () => {
    try {
      const params = {
        business_id: paramObj.business_id
      }
      const response = await axiosInstance.get(URL_PATHS.GET_CAMPAIGS, {params})
      console.log('GET_CAMPAIGS', response);
      
      if(!!response) {
        const data = response.data
        setData(data)
      }
      
    } catch (error) {
      
    }
  }
  useEffect(() => {
    getData()
  }, [JSON.stringify(paramObj)])

  const handleToggleChart = (show: boolean) => {
    setIsOpenChart(show);
  };

  return (
    <Box position="relative">
      <div className="campaign-page">
        <CampaignHeader />
        <div className="content-wrapper">
          <CampaignAction />
          <Box
            height="38px"
            bgcolor="white"
            padding="0px 8px 0px 16px"
            margin="0 8px"
            borderRadius={1}
            display="flex"
            alignItems="center"
          >
            <TextField
              label=""
              variant="outlined"
              size="small"
              placeholder="Search by name, ID or metrics"
              sx={{
                "& .MuiOutlinedInput-root": {
                  "& fieldset": {
                    borderColor: "transparent",
                  },
                  "&:hover fieldset": {
                    borderColor: "transparent",
                  },
                  "&.Mui-focused fieldset": {
                    borderWidth: "1px",
                    borderColor: "#002aa5",
                    borderRadius: 4,
                  },
                },
              }}
              slotProps={{
                input: {
                  sx: {
                    input: {
                      padding: "4.5px 10px",
                      fontSize: "14px",
                      width: "258px",
                      "&::placeholder": {
                        color: "rgba(28, 43, 51, 0.6)",
                        opacity: 1,
                      },
                    },
                  },
                },
              }}
            />
          </Box>
          <Box>
            <Box
              display="flex"
              alignItems="flex-start"
              justifyContent="space-between"
              padding="0px 8px"
            >
              <Box display="flex" alignItems="flex-end" gap="8px">
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
              <ReactDateRangePickerCustom
                onChange={(dateRange) => {}}
                initialDateRange={{
                  startDate: new Date(),
                  endDate: new Date(),
                }}
              />
            </Box>
            <TableHeaderAction />
            {renderTable(tabActive)}
          </Box>
        </div>
      </div>
      <RightSideBar side="right" />
      {isOpenChart && (
        <ViewChart open={isOpenChart} onToggleChart={handleToggleChart} />
      )}
    </Box>
  );
};

export default Campaign;
