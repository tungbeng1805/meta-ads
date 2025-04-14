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
  { field: "firstName", headerName: "First name", width: 130 },
  { field: "lastName", headerName: "Last name", width: 130 },
  {
    field: "age",
    headerName: "Age",
    type: "number",
    width: 90,
  },
  {
    field: "fullName",
    headerName: "Full name",
    description: "This column has a value getter and is not sortable.",
    sortable: false,
    width: 160,
    valueGetter: (value, row) => `${row.firstName || ""} ${row.lastName || ""}`,
  },
];

const rows = [
  {
    id: 1,
    accountName: "Trần Nhật Minh",
    lastName: "Snow",
    firstName: "Jon",
    age: 35,
  },
  {
    id: 2,
    accountName: "Trần Nhật Minh",
    lastName: "Lannister",
    firstName: "Cersei",
    age: 42,
  },
  {
    id: 3,
    accountName: "Trần Nhật Minh",
    lastName: "Lannister",
    firstName: "Jaime",
    age: 45,
  },
  {
    id: 4,
    accountName: "Trần Nhật Minh",
    lastName: "Stark",
    firstName: "Arya",
    age: 16,
  },
  {
    id: 5,
    accountName: "Trần Nhật Minh",
    lastName: "Targaryen",
    firstName: "Daenerys",
    age: null,
  },
  {
    id: 6,
    accountName: "Trần Nhật Minh",
    lastName: "Melisandre",
    firstName: null,
    age: 150,
  },
  {
    id: 7,
    accountName: "Trần Nhật Minh",
    lastName: "Clifford",
    firstName: "Ferrara",
    age: 44,
  },
  {
    id: 8,
    accountName: "Trần Nhật Minh",
    lastName: "Frances",
    firstName: "Rossini",
    age: 36,
  },
  {
    id: 9,
    accountName: "Trần Nhật Minh",
    lastName: "Roxie",
    firstName: "Harvey",
    age: 65,
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
