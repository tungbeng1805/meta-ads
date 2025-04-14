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
  { field: "accountName", headerName: "Account Name", width: 125 },
  { field: "reach", headerName: "Reach", width: 172 },
  { field: "impressions", headerName: "Impressions", width: 130 },
  {
    field: "frequency",
    headerName: "Frequency",
    width: 188,
  },
  {
    field: "amountSpent",
    headerName: "Amount spent",
    width: 120,
  },
  {
    field: "attributionSetting",
    headerName: "Attribution setting",
    width: 200,
  },
  {
    field: "messagingConversationsStarted",
    headerName: "Messaging conversations started",
    width: 158,
  },
  {
    field: "costPerMessagingConversationStarted",
    headerName: "Cost per messaging conversation started",
    width: 196,
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
  {
    id: 5,
    accountName: "Hoàng Thị Lan",
    reach: 15000,
    impressions: 20000,
    frequency: 1.33,
    amountSpent: "150.00",
    attributionSetting: "1-day click",
    messagingConversationsStarted: 40,
    costPerMessagingConversationStarted: "3.75",
  },
];

const paginationModel = { page: 0, pageSize: 5 };

const HomePage = (props: HomePageProps) => {
  const [rightContentType, setRightContentType] = React.useState<string | null>(
    "customise"
  );

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
                        width: " 16px",
                        height: "16px",
                        maskImage:
                          "url(https://static.xx.fbcdn.net/rsrc.php/v4/yc/r/eIvrDJ3tjTX.png)",
                        maskPosition: "-357px -954px",
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
                        width: " 16px",
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
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
              slots={{}}
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
