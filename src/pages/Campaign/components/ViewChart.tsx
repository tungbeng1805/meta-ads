import Folder from "@/assets/folder.svg";
import FolderActive from "@/assets/folder_active.svg";
import MenuCategoryActive from "@/assets/menu-category-active.svg";
import MenuCategory from "@/assets/menu-category.svg";
import MenuTabletActive from "@/assets/menu-tablet-active.svg";
import MenuTablet from "@/assets/menu-tablet.svg";
import ReactDateRangePickerCustom from "@/components/DateRangePicker";
import RightSideBar from "@/layouts/RightSidBar";
import BotChart from "@/pages/Chart/BotChart";
import TopChart from "@/pages/Chart/TopChart";
import TurnOn from "@/pages/Chart/TurnOn";
import AdsEdit from "@/pages/EditForm/AdsEdit";
import AdSetEdit from "@/pages/EditForm/AdSetEdit";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { getIdsAtLevel } from "@/util";
import {
  Box,
  Divider,
  Drawer,
  InputAdornment,
  Switch,
  TextField,
} from "@mui/material";
import React from "react";

interface ViewChartProps {
  openChartType: string | null;
  onToggleChart: (type: string | null) => void;
  campaignId: number | null;
}

export interface IMenuItem {
  id: number;
  name: string;
  amountSpent?: string;
  costPerResultCost?: string;
  resultsCost?: string;
  groups?: IMenuItem[];
}

const ViewChart = (props: ViewChartProps) => {
  const { openChartType, onToggleChart, campaignId } = props;
  const [activeMenu, setActiveMenu] = React.useState<number[]>([]);
  const [data, setData] = React.useState<any>({});
  const [isLoading, setIsLoading] = React.useState(false);
  const [listMenu, setListMenu] = React.useState<IMenuItem[]>([]);
  const [dataBotChart, setDataBotChart] = React.useState<any>()

  const idsLevel2 = getIdsAtLevel(listMenu, 2);
  const idsLevel3 = getIdsAtLevel(listMenu, 3);
  const adSetName = listMenu[0]?.groups?.[0]?.name || "";

  const renderIconByDeep = (deep: number, active: boolean) => {
    switch (deep) {
      case 1:
        return <img src={active ? FolderActive : Folder} />;
      case 2:
        return (
          <img
            style={{ paddingLeft: 16 }}
            src={active ? MenuCategoryActive : MenuCategory}
          />
        );
      case 3:
        return (
          <img
            style={{ paddingLeft: 32 }}
            src={active ? MenuTabletActive : MenuTablet}
          />
        );
      default:
        return;
    }
  };

  const handleClickMenu = (ids: number[]) => {
    setActiveMenu(ids);
  };

  const renderMenu = (menu: IMenuItem, index: number, depth: number = 1) => {
    const active = activeMenu?.includes(menu?.id);

    return (
      <div key={menu?.id}>
        <div
          className={`menu-btn ${active && "active-menu"}`}
          onClick={() => {
            // handleClickMenu(menu);
          }}
        >
          <div className={`menu-label`}>
            {renderIconByDeep(depth, active)}
            <p className={`menu-name`}>{menu?.name}</p>
          </div>
        </div>
        {menu?.groups?.map((group, i) => renderMenu(group, i, depth + 1))}
      </div>
    );
  };

  const renderBreadCrumbs = () => {
    const activeCampaign = activeMenu?.includes(listMenu[0]?.id);
    const activeAdset = idsLevel2.some((id: number) =>
      activeMenu?.includes(id)
    );
    const activeAds = idsLevel3.some((id: number) => activeMenu?.includes(id));

    return (
      <Box display="flex" alignItems="center" gap="4px">
        <div
          className={`bread-btn ${activeCampaign && "bread-btn-active"}`}
          onClick={() => {
            handleClickMenu([listMenu[0]?.id]);
            onToggleChart("edit-adset");
          }}
        >
          <Box display="flex" alignItems="center" gap="4px">
            <img src={activeCampaign ? FolderActive : Folder} />
            <p className={`menu-name`}>{listMenu[0]?.name}</p>
          </Box>
        </div>
        {idsLevel2?.length > 0 && (
          <>
            <Box
              sx={{
                margin: "0 4px",
                width: "12px",
                height: "12px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/yhbs0ZmhF8d.png?_nc_eui2=AeFvSSPJuFeRuvhHep8a5Dr6-wKYAYLcV3D7ApgBgtxXcO7Ikv8vGJqjeoBuY7uRC7DnauhJpj_2d6fPbLnSZoB6)",
                maskPosition: "-107px -216px",
                background: "#1c2b33",
              }}
            />
            <div
              className={`bread-btn ${activeAdset && "bread-btn-active"}`}
              onClick={() => {
                const ids = getIdsAtLevel(listMenu, 2);
                handleClickMenu(ids);
                onToggleChart("edit-adset");
              }}
            >
              <Box display="flex" alignItems="center" gap="4px">
                <img src={activeAdset ? MenuCategoryActive : MenuCategory} />
                <p className={`menu-name`}>{idsLevel2?.length} Ad set</p>
              </Box>
            </div>
          </>
        )}
        {idsLevel3?.length > 0 && (
          <>
            <Box
              sx={{
                margin: "0 4px",
                width: "12px",
                height: "12px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yv/r/yhbs0ZmhF8d.png?_nc_eui2=AeFvSSPJuFeRuvhHep8a5Dr6-wKYAYLcV3D7ApgBgtxXcO7Ikv8vGJqjeoBuY7uRC7DnauhJpj_2d6fPbLnSZoB6)",
                maskPosition: "-107px -216px",
                background: "#1c2b33",
              }}
            />
            <div
              className={`bread-btn ${activeAds && "bread-btn-active"}`}
              onClick={() => {
                const ids = getIdsAtLevel(listMenu, 3);
                handleClickMenu(ids);
                onToggleChart("edit-ads");
              }}
            >
              <Box display="flex" alignItems="center" gap="4px">
                <img src={activeAds ? MenuTabletActive : MenuTablet} />
                <p className={`menu-name`}>{idsLevel3?.length} Ad</p>
              </Box>
            </div>
          </>
        )}
      </Box>
    );
  };

  const getData = async () => {
    try {
      setIsLoading(true);
      if (campaignId) {
        const chartMenu = await axiosInstance.get(
          `${URL_PATHS.GET_MENU_CHART}?campaign_id=${campaignId}`
        );
        setListMenu(chartMenu?.data);
        setActiveMenu(getIdsAtLevel(chartMenu?.data, 1));
      }

      const response = await axiosInstance.get(URL_PATHS.GET_DETAIL_FACE);

      if (response && response.data) {
        setData(response.data);
      }
    } catch (error) {
      console.log(error);
    } finally {
      setIsLoading(false);
    }
  };

  const getDataBotChart = async () => {
    try {
      // const response = await axiosInstance.get(URL_PATHS.GET_CHART_BY_ID.replace(':id', idCampaign as string))
      const response = await axiosInstance.get(URL_PATHS.GET_CHART)
      if(response && response.data) {
        setDataBotChart(response.data)
      }
      console.log("🚀 ~ getDataBotChart ~ response:", response)
    } catch (error) {
      
    }
  }

  React.useEffect(() => {
    getData();
  }, []);

  React.useEffect(() => {
    getDataBotChart()
  }, [])

  return (
    <Drawer
      open={!!openChartType}
      onClose={() => onToggleChart(null)}
      anchor="right"
      hideBackdrop
    >
      <div
        className={
          openChartType === "view"
            ? "view-chart-container"
            : "edit-chart-container"
        }
      >
        <RightSideBar
          onCloseChart={() => onToggleChart(null)}
          type={openChartType}
        />
        <div className="view-chart-wrapper">
          <div className="view-chart-menu">
            <Box padding="6px 12px">
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
            </Box>
            <Divider />
            <div className="list-menu">
              {listMenu?.map((menu, index) => renderMenu(menu, index))}
            </div>
          </div>
          <div className="right-chart-content">
            <div>
              <Box
                display="flex"
                justifyContent="space-between"
                alignItems="center"
                padding="4px 12px"
                gap="8px"
                bgcolor="white"
              >
                <Box display="flex" alignItems="center" gap="12px">
                  <div className="header-button btn-icon">
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        maskImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v4/y3/r/sSn6YGAKfY9.png?_nc_eui2=AeF-nZaQoc39DmEylLIoygFHwD6TyfjzQdbAPpPJ-PNB1smru_GMwca-C5O_819q563Ms67FmQwu9wDw5-C2I7Uf)",
                        maskPosition: "-119px -232px",
                        maskSize: "151px 249px",
                        background: "#1c2b33",
                      }}
                    />
                  </div>
                  {renderBreadCrumbs()}
                </Box>
                <Box display="flex" alignItems="center" gap="8px">
                  <Box
                    display="flex"
                    alignItems="center"
                    gap="8px"
                    fontSize="14px"
                  >
                    <div className="status" />
                    Active
                  </Box>
                  <Divider
                    orientation="vertical"
                    sx={{
                      height: "24px",
                    }}
                  />
                  <Switch
                    defaultChecked={true}
                    sx={{
                      padding: "8px",
                      ".MuiSwitch-root": {
                        display: "none",
                      },
                      "& span.MuiSwitch-track": {
                        borderRadius: "20px",
                        background: "white",
                        border: "1px solid #cbd2d9",
                      },
                      "& span.MuiSwitch-thumb": {
                        height: "22px",
                        width: "22px",
                      },
                      "& span.MuiSwitch-switchBase": {
                        color: "#283943",
                        "&.Mui-checked": {
                          color: "#0a78be",
                        },
                        "&.Mui-checked+.MuiSwitch-track": {
                          background: "#e1edf7",
                        },
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
              </Box>
              {openChartType === "view" && (
                <>
                  <Divider />
                  <Box
                    display="flex"
                    alignItems="center"
                    justifyContent="flex-end"
                    padding="8px"
                    bgcolor="white"
                  >
                    <ReactDateRangePickerCustom
                      onChange={(dateRange) => {}}
                      initialDateRange={{
                        startDate: new Date(),
                        endDate: new Date(),
                      }}
                      bgColor="rgba(0, 0, 0, 0.05)"
                    />
                  </Box>
                </>
              )}
              {openChartType !== "view" && (
                <Box
                  display="flex"
                  alignItems="center"
                  justifyContent="center"
                  padding="8px"
                  bgcolor="white"
                  gap="8px"
                >
                  <div className="tab-btn tab-btn-active">
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
                    Edit
                  </div>
                  <div className="tab-btn">
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        maskImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v4/ys/r/ljZf5LpWM8u.png?_nc_eui2=AeHOWrpHBG1OX8GpkcI4NkNcUKGpy66a4QBQoanLrprhAMRX99tVfDOSt9c2tNkBC1-_JfCWxZ0LhNZDgIkPJmq5)",
                        maskPosition: "-21px -262px",
                        background: "#1c2b33",
                      }}
                    />
                    Review
                  </div>
                </Box>
              )}
            </div>
            <div
              className={
                openChartType === "view"
                  ? "chart-container"
                  : "chart-edit-container"
              }
            >
              {openChartType === "view" && (
                <div className="chart-wrapper">
                  <TopChart listMenu={listMenu} />
                  <TurnOn />
                  <BotChart data={dataBotChart} />
                </div>
              )}
              {openChartType === "edit-ads" && <AdsEdit data={data} />}
              {openChartType === "edit-adset" && (
                <AdSetEdit data={data} adSetName={adSetName} />
              )}
            </div>
          </div>
        </div>
      </div>
    </Drawer>
  );
};

export default ViewChart;
