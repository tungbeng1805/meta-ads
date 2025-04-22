import ROUTERS_PATHS from "@/constants/router-paths";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { getParamsId, STATUS } from "@/util";
import { Switch } from "@mui/material";
import { Box, styled } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import moment from "moment";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";

interface AdsTableProps {
  handleClickOpenChart: (id: number, type: string) => void;
}

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  "& .MuiSwitch-switchBase": {
    padding: 0,
    margin: 2,
    transitionDuration: "300ms",
    "&.Mui-checked": {
      transform: "translateX(16px)",
      color: "#fff",
      "& + .MuiSwitch-track": {
        backgroundColor: "#0a78be",
        opacity: 1,
        border: 0,
        ...theme.applyStyles("dark", {
          backgroundColor: "#0a78be",
        }),
      },
      "&.Mui-disabled + .MuiSwitch-track": {
        opacity: 0.5,
      },
    },
    "&.Mui-focusVisible .MuiSwitch-thumb": {
      color: "#0a78be",
      border: "6px solid #fff",
    },
    "&.Mui-disabled + .MuiSwitch-track": {
      opacity: 0.7,
      ...theme.applyStyles("dark", {
        opacity: 0.3,
      }),
    },
  },
  "& .MuiSwitch-thumb": {
    boxSizing: "border-box",
    width: 22,
    height: 22,
  },
  "& .MuiSwitch-track": {
    borderRadius: 26 / 2,
    backgroundColor: "#E9E9EA",
    opacity: 1,
    transition: theme?.transitions?.create(["background-color"], {
      duration: 500,
    }),
    ...theme.applyStyles("dark", {
      backgroundColor: "#39393D",
    }),
  },
}));

const AdsTable = (props: AdsTableProps) => {
  const { handleClickOpenChart } = props;
  const [rows, setRows] = useState<Array<any>>([]);
  const [displayRows, setDisplayRows] = useState<Array<any>>([]);
  const [openOption, setOpenOption] = useState<any>();
  const objParam = getParamsId();
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "onoff",
      headerName: "Off/On",
      width: 100,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <IOSSwitch
              checked={
                !!params.row &&
                !!params.row.deliveryStatus &&
                params.row.deliveryStatus === STATUS.ACTIVE
              }
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
          );
        }
      },
    },
    {
      field: "ad",
      headerName: "Ad",
      width: 250,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div
              style={{
                display: "flex",
                alignItems: "center",
                columnGap: "10px",
              }}
            >
              <div>
                <img
                  src={`http://103.159.50.75:3000/${params.row.image}`}
                  style={{ width: "46px", height: "46px" }}
                />
              </div>
              <div
                onMouseEnter={() => {
                  setOpenOption(params.row.id);
                }}
                onMouseLeave={() => setOpenOption(null)}
              >
                <div>{params.row.ad}</div>

                {openOption === params.row.id && (
                  <div
                    style={{
                      display: "flex",
                      columnGap: "10px",
                      fontSize: "12px",
                      cursor: "pointer",
                    }}
                  >
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      onClick={() =>
                        handleClickOpenChart(params.row.id, "view")
                      }
                    >
                      <BarChartIcon sx={{ fontSize: "12px" }} />
                      <span>View Charts</span>
                    </div>
                    <div
                      style={{ display: "flex", alignItems: "center" }}
                      onClick={() =>
                        handleClickOpenChart(params.row.id, "view")
                      }
                    >
                      <EditIcon sx={{ fontSize: "12px" }} />
                      <span>Edit</span>
                    </div>
                    <div style={{ display: "flex", alignItems: "center" }}>
                      <FileCopyIcon sx={{ fontSize: "12px" }} />
                      <span>Duplicate</span>
                    </div>
                  </div>
                )}
              </div>
            </div>
          );
        } else {
          return (
            <div>
              <p>Results from {rows.length} ads</p>
              <p className="title-footer-table">Excludes deleted items</p>
            </div>
          );
        }
      },
    },
    {
      field: "deliveryStatus",
      headerName: "Delivery",
      width: 172,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{params.row.deliveryStatus}</div>
              <div>{params.row.deliveryDescription}</div>
            </div>
          );
        }
      },
    },
    { field: "adSetName", headerName: "Ad set name", width: 130 },
    {
      field: "bidStrategycost",
      headerName: "Bid strategy",
      width: 188,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{params.row.bidStrategycost}</div>
              <div>{params.row.bidStrategyDescription}</div>
            </div>
          );
        }
        return <div></div>;
      },
    },
    {
      field: "budgetDescription",
      headerName: "Budget",
      width: 188,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{`đ ${params.row.budgetCost}`}</div>
              <div>{params.row.budgetDescription}</div>
            </div>
          );
        }
        return <div></div>;
      },
    },
    {
      field: "lastSignificantEdit",
      headerName: "Last significant edit",
      width: 188,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              {moment(params.row.lastSignificantEdit).format("D MMM YYYY")}
            </div>
          );
        }
        return <div></div>;
      },
    },
    {
      field: "attributionSetting",
      headerName: "Attribution setting",
      width: 180,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div>
              <div>Multiple attribution settings</div>
            </div>
          );
        }
      },
    },
    {
      field: "resultsCost",
      headerName: "Results",
      width: 200,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{params.row.resultsCost}</div>
              <div>{params.row.resultsDescription}</div>
            </div>
          );
        }
        return (
          <div>
            <p>{params.row.resultsCost}</p>
            <p className="title-footer-table">Multiple conversions</p>
          </div>
        );
      },
    },
    {
      field: "reach",
      headerName: "Reach",
      width: 158,
      renderCell: (params) => {
        if (params.id == "summary") {
          return (
            <div>
              <div>{params.row.reach}</div>
              <div className="title-footer-table">Accounts Centre accounts</div>
            </div>
          );
        }
      },
    },
    {
      field: "impressions",
      headerName: "Impressions",
      width: 196,
      renderCell: (params) => {
        if (params.id == "summary") {
          return (
            <div>
              <div>{params.row.impressions}</div>
              <div className="title-footer-table">Total</div>
            </div>
          );
        }
      },
    },
    {
      field: "costPerResultCost",
      headerName: "Cost per result",
      width: 196,
      renderCell: (params) => {
        if (params.id == "summary") {
          return (
            <div>
              <div>{`đ ${params.row.costPerResultCost}`}</div>
              <div className="title-footer-table">Multiple conversions</div>
            </div>
          );
        } else {
          return (
            <div>
              <div>{`đ ${params.row.costPerResultCost}`}</div>
              <div>{params.row.costPerResultDescription}</div>
            </div>
          );
        }
      },
    },
    {
      field: "qualityRankingTitle",
      headerName: "Quality ranking",
      width: 200,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{params.row.qualityRankingTitle}</div>
              <div>{params.row.qualityRankingDescription}</div>
            </div>
          );
        }
        return <div></div>;
      },
    },
    {
      field: "engagementRateRankingTitle",
      headerName: "Engagement rate ranking",
      width: 200,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{params.row.engagementRateRankingTitle}</div>
              <div>{params.row.engagementRateRankingDescription}</div>
            </div>
          );
        }
        return <div></div>;
      },
    },
    {
      field: "conversionRateRankingTitle",
      headerName: "Conversion rate ranking",
      width: 200,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <div>
              <div>{params.row.conversionRateRankingTitle}</div>
              <div>{params.row.conversionRateRankingDescription}</div>
            </div>
          );
        }
        return <div></div>;
      },
    },
    {
      field: "amountSpent",
      headerName: "Amount spent",
      width: 196,
      renderCell: (params) => {
        if (params.id == "summary") {
          return (
            <div>
              <div>{`đ ${params.row.amountSpent}`}</div>
              <div className="title-footer-table">Total Spent</div>
            </div>
          );
        } else {
          return <div>{`đ ${params.row.amountSpent}`}</div>;
        }
      },
    },
    {
      field: "endsOngoing",
      headerName: "Ends",
      width: 196,
    },
  ];

  const handleClickName = () => {
    navigate(ROUTERS_PATHS.CAMPAIGN);
  };

  const getData = async () => {
    const business_id = objParam?.business_id;
    const selected_campaign_ids = objParam?.selected_campaign_ids;
    const selected_adset_id = objParam?.selected_adset_ids;

    console.log("selected_adset_id", selected_adset_id);

    try {
      const params = {
        business_id:
          business_id && !selected_campaign_ids && !selected_adset_id
            ? business_id
            : "",
        campaign_id:
          !!selected_campaign_ids && !selected_adset_id
            ? selected_campaign_ids.replaceAll("and", ",")
            : [],
        ad_set_id: !!selected_adset_id
          ? selected_adset_id.replaceAll("and", ",")
          : [],
      };
      const response = await axiosInstance.get(URL_PATHS.GET_AD, { params });
      if (response && response.data) {
        const data = response.data;
        const totalReach = data.reduce(
          (sum: any, row: any) => sum + Number(row.reach),
          0
        );
        const totalResultsCost = data.reduce(
          (sum: any, row: any) => sum + Number(row.resultsCost),
          0
        );
        const totalCostPerResultCost = data.reduce(
          (sum: any, row: any) => sum + row.costPerResultCost,
          0
        );
        const totalImpressions = data.reduce(
          (sum: any, row: any) => sum + Number(row.impressions),
          0
        );
        const totalAmountSpent = data.reduce(
          (sum: any, row: any) => sum + Number(row.amountSpent),
          0
        );

        const summaryRow = {
          id: "summary",
          reach: totalReach,
          impressions: totalImpressions,
          resultsCost: totalResultsCost,
          costPerResultCost: totalCostPerResultCost,
          amountSpent: totalAmountSpent,
        };
        const displayRows = [...data, summaryRow];
        setRows(data);
        setDisplayRows(displayRows);
      }
    } catch (error) {}
  };

  useEffect(() => {
    getData();
  }, [JSON.stringify(objParam)]);

  return (
    <DataGrid
      rows={displayRows}
      columns={columns}
      checkboxSelection={true}
      sx={{
        border: 0,
        "& .MuiDataGrid-row[data-id='summary']": {
          backgroundColor: "#fff",
          fontWeight: 500,
          borderTop: "1px solid #ccc",
          position: "fixed",
          bottom: "-52px",
          "& .MuiDataGrid-cell": {
            paddingTop: "8px",
            paddingBottom: "8px",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            lineHeight: "1.2",
          },
        },
      }}
      slots={{
        columnMenuIcon: () => (
          <Box
            sx={{
              width: " 12px",
              height: "12px",
              maskImage:
                "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
              maskPosition: "-181px -971px",
              background: "#1c2b33",
            }}
          />
        ),
        footer: () => null,
      }}
      className="table-custom"
    />
  );
};

export default AdsTable;
