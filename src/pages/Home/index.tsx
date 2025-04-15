import ReactDateRangePickerCustom from "@/components/DateRangePicker";
import TooltipCustom from "@/components/TooltipCustom";
import { TextField } from "@mui/material";
import Paper from "@mui/material/Paper";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import React from "react";
import HomeHeader from "./components/HomeHeader";
import RightContent from "./components/RightContent";

interface HomePageProps {}

const columns: GridColDef[] = [
  {
    field: "accountName",
    headerName: "Account Name",
    width: 125,
    renderCell: (params) => {
      if (params.id === "summary") {
        return (
          <div className="last-row">
            <p>Total results</p>
            <span>1/1 row displayed</span>
          </div>
        );
      }
      return <div>{params.value}</div>;
    },
  },
  { field: "reach", headerName: "Reach", width: 172,
    renderCell: (params) => {
      if (params.id === "summary") {
        return (
          <div className="last-row row-number">
            <p className="number">35,334</p>
            <span>Accounts Centre accounts</span>
          </div>
        );
      }
      return <div>{params.value}</div>;
    },
   },
  { field: "impressions", headerName: "Impressions", width: 130,
    renderCell: (params) => {
      if (params.id === "summary") {
        return (
          <div className="last-row row-number">
            <p className="number">46,165</p>
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
          <div className="last-row row-number">
            <p className="number">1.31</p>
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
          <div className="last-row row-number">
            <p className="number">₫1,553,981</p>
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
          <div className="last-row">
            <p >Multiple attribution settings</p>
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
          <div className="last-row row-number">
            <p className="number">95</p>
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
          <div className="last-row row-number">
            <p className="number">₫16,358</p>
            <span>Per Action</span>
          </div>
        );
      }
      return <div>{params.value}</div>;
    }
  },
];

const rows = [
  {
    id: 1,
    accountName: "Trần Nhật Minh",
    reach: 12345,
    impressions: 23456,
    frequency: 1.9,
    amountSpent: "120.50",
    attributionSetting: "7-day click",
    messagingConversationsStarted: 56,
    costPerMessagingConversationStarted: "2.15",
  },
  {
    id: 2,
    accountName: "Nguyễn Thị Hoa",
    reach: 56789,
    impressions: 67890,
    frequency: 2.3,
    amountSpent: "300.00",
    attributionSetting: "1-day view",
    messagingConversationsStarted: 34,
    costPerMessagingConversationStarted: "3.45",
  },
  {
    id: 3,
    accountName: "Lê Văn An",
    reach: 23456,
    impressions: 34567,
    frequency: 1.5,
    amountSpent: 80.75,
    attributionSetting: "Default",
    messagingConversationsStarted: 23,
    costPerMessagingConversationStarted: "3.51",
  },
  {
    id: 4,
    accountName: "Phạm Hồng Phúc",
    reach: 9876,
    impressions: 10500,
    frequency: 1.06,
    amountSpent: "45.00",
    attributionSetting: "7-day click",
    messagingConversationsStarted: 12,
    costPerMessagingConversationStarted: "3.75",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const HomePage = (props: HomePageProps) => {
  const [rightContentType, setRightContentType] = React.useState<string | null>(
    "customise"
  );
  const columns: GridColDef[] = [
    {
      field: "accountName",
      headerName: "Account Name",
      width: 153,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div className="row-number">
              <p className="total">Total results</p>
              <p className="row-display">{`${rows?.length}/${rows?.length} rows displayed`}</p>
            </div>
          );
        }
        return <div>{params.value}</div>;
      },
    },
    { field: "reach", headerName: "Reach", width: 172,
      renderCell: (params) => {
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

  const totalReach = rows.reduce((sum, row) => sum + row.reach, 0);
  const totalImpressions = rows.reduce((sum, row) => sum + row.impressions, 0);
  const totalFrequency =
    rows.reduce((sum, row) => sum + row.frequency, 0) / rows.length;
  const totalAmountSpent = rows.reduce(
    (sum, row) => sum + parseFloat(String(row.amountSpent)),
    0
  );
  const totalMessages = rows.reduce(
    (sum, row) => sum + row.messagingConversationsStarted,
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

  const displayRows = [...rows, summaryRow];

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
