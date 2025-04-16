import ReactDateRangePickerCustom from "@/components/DateRangePicker";
import TooltipCustom from "@/components/TooltipCustom";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React, { useEffect } from "react";
import HomeHeader from "./components/HomeHeader";
import RightContent from "./components/RightContent";
import { useNavigate } from "react-router-dom";
import ROUTERS_PATHS from "@/constants/router-paths";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";

interface HomePageProps {}

const HomePage = (props: HomePageProps) => {
  const [rightContentType, setRightContentType] = React.useState<string | null>(
    "customise"
  );
  const [rows, setRows] = React.useState<Array<any>>([])
  const [displayRows, setDisplayRows] = React.useState<Array<any>>([])
  console.log("🚀 ~ HomePage ~ displayRows:", displayRows)
  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "accountName",
      headerName: "Account Name",
      width: 153,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div>
              <p className="total">Total results</p>
              <p className="row-display">{`${rows?.length}/${rows?.length} rows displayed`}</p>
            </div>
          );
        }
        return <div onClick={() => handleClickName(params.id)}>{params.value}</div>;
      },
    },
    { field: "reach", headerName: "Reach", width: 172,
      renderCell: (params) => {
        console.log("🚀 ~ HomePage ~ params:", params)
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p>{params.value}</p>
              <span>Accounts Centre accounts</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
     },
    { field: "impressions", headerName: "Impressions", width: 130,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p>{params.value}</p>
              <span>Total</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
     },
    {
      field: "frequency",
      headerName: "Frequency",
      width: 188,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p>{params.value}</p>
              <span>Per Accounts Centre account</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
    },
    {
      field: "amountSpent",
      headerName: "Amount spent",
      width: 120,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p>₫{params.value}</p>
              <span>Total Spent</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
    },
    {
      field: "attributionSetting",
      headerName: "Attribution setting",
      width: 200,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <span style={{ fontWeight: 700, color: '#000'}}>Multiple attribution settings</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
    },
    {
      field: "messagingConversationsStarted",
      headerName: "Messaging conversations started",
      width: 158,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p>{params.value}</p>
              <span>Total</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
    },
    {
      field: "costPerMessagingConversationStarted",
      headerName: "Cost per messaging conversation started",
      width: 196,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p>₫{params.value}</p>
              <span>Per Action</span>
            </div>
          );
        }
        return <div>{params.value}</div>;
      }
    },
  ];

  const handleClickName = (id: any) => {
    navigate({pathname: ROUTERS_PATHS.CAMPAIGN, search: `?id=${id}`,});
  };

  useEffect( () => {
    const fetchData = async () => {
      try {
        const response = await axiosInstance.get(URL_PATHS.GET_BUSINESS);
        if(response) {
          const data: any = response.data
          const totalReach = data.reduce((sum: any, row: any) => sum + Number(row.reach), 0);
          const totalImpressions = data.reduce((sum: any, row: any) => sum + Number(row.impressions), 0);
          const totalFrequency =
            data.reduce((sum: any, row: any) => sum + row.frequency, 0) / data.length;
          const totalAmountSpent = data.reduce(
            (sum: any, row: any) => sum + parseFloat(String(row.amountSpent)),
            0
          );
          const totalMessages = rows.reduce(
            (sum, row) => sum + Number(row.messaginConversationStarted),
            0
          );
          const avgCostPerMessage = totalAmountSpent / totalMessages || 0;
          const summaryRow = {
            id: "summary",
            accountName: "Total results",
            reach: totalReach,
            impressions: totalImpressions,
            frequency: Number(totalFrequency.toFixed(2)),
            amountSpent: totalAmountSpent.toFixed(2),
            attributionSetting: "Multiple attribution settinng",
            messagingConversationsStarted: totalMessages,
            costPerMessagingConversationStarted: avgCostPerMessage.toFixed(2),
          };
          const _data = [...data, summaryRow];
          setRows(data)
          setDisplayRows(_data)
        }
        console.log(response.data);
      } catch (error) {
        console.error('Lỗi khi gọi API:', error);
      }
    };

  fetchData();
  }, [])

  return (
    <div className="home-page">
      <HomeHeader />
      <Box gap={2} marginTop={2} display="flex">
        <div className="left-content">
          <Paper
            sx={{
              boxShadow: "none",
              height: 44,
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              padding: "0px 12px 0px 6px",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <TooltipCustom title="This filter is applied by default and is not removable to improve loading time.">
                <Box
                  sx={{
                    bgcolor: "rgba(0, 0, 0, 0.05)",
                    padding: "3px 12px 3px 8px",
                    border: "1px solid #DADDE1",
                    fontSize: "14px",
                    fontWeight: "400",
                    color: "#1c2b33",
                    lineHeight: "20px",
                    borderRadius: "0px 4px 4px 0px",
                    "&:hover": {
                      bgcolor: "rgba(0, 0, 0, 0.1)",
                    },
                  }}
                >
                  Had delivery
                </Box>
              </TooltipCustom>
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
            <ReactDateRangePickerCustom
              onChange={(dateRange) => {}}
              initialDateRange={{
                startDate: new Date(),
                endDate: new Date(),
              }}
            />
          </Paper>
          <Paper sx={{ boxShadow: "none", marginTop: 1 }}>
            <Paper
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                boxShadow: "none",
                padding: "8px 12px",
                borderBottom: "1px solid rgb(201, 204, 209)",
                borderBottomRightRadius: 0,
                borderBottomLeftRadius: 0,
              }}
            >
              <Box display="flex" alignItems="center" gap="8px">
                <div className="table-action">
                  <Box
                    sx={{
                      width: " 16px",
                      height: "16px",
                      maskImage:
                        "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
                      maskPosition: "-374px -937px",
                      background: "#1c2b33",
                      paddingRight: "3px",
                    }}
                  />
                  Pivot Table
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
                <TooltipCustom
                  title="Select at least two breakdowns to group."
                  placement="top-start"
                >
                  <div className="header-button disable-btn ">
                    Group Breakdowns
                  </div>
                </TooltipCustom>
              </Box>
              <Box
                sx={{
                  display: "flex",
                  alignItems: "center",
                  gap: "8px",
                }}
              >
                <TooltipCustom
                  title="All column widths have been reset to the default size."
                  placement="top-start"
                >
                  <div className="header-button disable-btn">
                    <Box
                      sx={{
                        width: " 16px",
                        height: "16px",
                        maskImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
                        maskPosition: "0px -937px",
                        background: "#1c2b33",
                      }}
                    />
                    Reset Column Width
                  </div>
                </TooltipCustom>
                <Box sx={{ display: "flex", alignItems: "center" }}>
                  <div
                    className="header-button format-btn"
                    style={{
                      background:
                        rightContentType === "format"
                          ? "rgba(167, 179, 191, 0.4)"
                          : undefined,
                    }}
                    onClick={() => setRightContentType("format")}
                  >
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        maskImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v4/yP/r/VCr_oK4U3bG.png)",
                        maskPosition: "-17px -954px",
                        maskSize: "401px 988px",
                        background: "#1c2b33",
                      }}
                    />
                    Format
                  </div>
                  <div
                    className="header-button customise-btn"
                    style={{
                      background:
                        rightContentType === "customise"
                          ? "rgba(167, 179, 191, 0.4)"
                          : undefined,
                    }}
                    onClick={() => setRightContentType("customise")}
                  >
                    <Box
                      sx={{
                        width: "16px",
                        height: "16px",
                        maskImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
                        maskPosition: "-357px -954px",
                        background: "#1c2b33",
                      }}
                    />
                    Customise
                  </div>
                </Box>
              </Box>
            </Paper>
            <DataGrid
              rows={displayRows}
              columns={columns}
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
              rowSelection={false}
              className="table-custom"
            />
          </Paper>
        </div>
        {rightContentType && (
          <RightContent setRightContentType={setRightContentType} />
        )}
      </Box>
    </div>
  );
};

export default HomePage;
