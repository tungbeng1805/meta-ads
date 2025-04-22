import ROUTERS_PATHS from "@/constants/router-paths";
import { Switch } from "@mui/material";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import BarChartIcon from "@mui/icons-material/BarChart";
import EditIcon from "@mui/icons-material/Edit";
import FileCopyIcon from "@mui/icons-material/FileCopy";

interface CampaignTableProps {
  data: any;
  selectedItems: any;
  onSelectedItems: (ids: string[], code: string) => void;
  handleClickOpenChart: (id: number, type: string) => void;
}

const CampaignTable = (props: CampaignTableProps) => {
  const { data, selectedItems, onSelectedItems, handleClickOpenChart } = props;
  const [rows, setRows] = useState<Array<any>>([]);
  const [displayRows, setDisplayRows] = useState<Array<any>>([]);
  const [openOption, setOpenOption] = useState<any>();

  const navigate = useNavigate();

  const columns: GridColDef[] = [
    {
      field: "status",
      headerName: "Off/On",
      width: 100,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <Switch
              defaultChecked={params?.value}
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
      field: "campaign",
      headerName: "Campaign",
      width: 300,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div>
              <p>{`Results from ${rows?.length}/${rows?.length} campaigns`}</p>
              <p className="title-footer-table">Excludes deleted items</p>
            </div>
          );
        }
        return (
          <div
            onMouseEnter={() => {
              setOpenOption(params.row.id);
            }}
            onMouseLeave={() => setOpenOption(null)}
          >
            <div>{params.value}</div>
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
                  onClick={() => handleClickOpenChart(params.row.id, "view")}
                >
                  <BarChartIcon sx={{ fontSize: "12px" }} />
                  <span>View Charts</span>
                </div>
                <div
                  style={{ display: "flex", alignItems: "center" }}
                  onClick={() => handleClickOpenChart(params.row.id, "view")}
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
        );
      },
    },
    {
      field: "deliveryDescription",
      headerName: "Delivery",
      width: 172,
    },
    { field: "bidStrategy", headerName: "Bid strategy", width: 130 },
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
      field: "attributionSetting",
      headerName: "Attribution setting",
      width: 170,
      renderCell: (params) => {
        if (params.id == "summary") {
          return (
            <div className="title-footer-table">
              Multiple attribution settings
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
              <div>{`đ ${params.row.resultsCost}`}</div>
              <div>{params.row.resultsDescription}</div>
            </div>
          );
        }
        return (
          <div className="title-footer-table">{`đ ${params.row.resultsCost}`}</div>
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
              <div>{params.row.costPerResultCost}</div>
              <div className="title-footer-table">Multiple conversions</div>
            </div>
          );
        }
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

  useEffect(() => {
    if (!!data) {
      setRows(data);
      const totalReach = data.reduce(
        (sum: any, row: any) => sum + Number(row.reach),
        0
      );
      const totalImpressions = data.reduce(
        (sum: any, row: any) => sum + Number(row.impressions),
        0
      );
      const totalresultsCost = data.reduce(
        (sum: any, row: any) => sum + Number(row.resultsCost),
        0
      );
      const totalAmountSpent = data.reduce(
        (sum: any, row: any) => sum + parseFloat(String(row.amountSpent)),
        0
      );
      const totalCostPerResultCost = data.reduce(
        (sum: any, row: any) => sum + Number(row.costPerResultCost),
        0
      );

      const summaryRow = {
        id: "summary",
        accountName: "Total results",
        reach: totalReach,
        impressions: totalImpressions,
        costPerResultCost: totalCostPerResultCost,
        amountSpent: totalAmountSpent.toFixed(2),
        attributionSetting: "Multiple attribution settinng",
        resultsCost: totalresultsCost,
      };
      const displayRows = [...data, summaryRow];
      setDisplayRows(displayRows);
    }
  }, [JSON.stringify(data)]);

  return (
    <DataGrid
      rows={displayRows}
      columns={columns}
      checkboxSelection={true}
      rowSelectionModel={selectedItems}
      keepNonExistentRowsSelected
      onRowSelectionModelChange={(newSelection: any) => {
        const _arr = newSelection
          .map((i: any) => String(i))
          ?.filter((e: any) => e !== "summary");
        const stringId = _arr.reduce((acc: any, cur: any) => {
          return (acc += String(cur) + "and");
        }, "");
        const params = new URLSearchParams(window.location.search);
        if (stringId !== "") {
          params.set("selected_campaign_ids", stringId);
        } else {
          params.delete("selected_campaign_ids");
        }
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, "", newUrl);
        onSelectedItems(_arr, "campaign");
      }}
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
        "& .MuiDataGrid-cell[data-field='resultsCost']": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          lineHeight: "1.2",
        },
        "& .MuiDataGrid-cell[data-field='budgetDescription']": {
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          lineHeight: "1.2",
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

export default CampaignTable;
