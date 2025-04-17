import ROUTERS_PATHS from "@/constants/router-paths";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { getParamsId } from "@/util";
import { Switch } from "@mui/material";
import { Box, styled } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface AdsetTableProps { }

const IOSSwitch = styled((props: any) => (
  <Switch focusVisibleClassName=".Mui-focusVisible" disableRipple {...props} />
))(({ theme }) => ({
  width: 42,
  height: 26,
  padding: 0,
  '& .MuiSwitch-switchBase': {
    padding: 0,
    margin: 2,
    transitionDuration: '300ms',
    '&.Mui-checked': {
      transform: 'translateX(16px)',
      color: '#fff',
      '& + .MuiSwitch-track': {
        backgroundColor: '#0a78be',
        opacity: 1,
        border: 0,
        ...theme.applyStyles('dark', {
          backgroundColor: '#0a78be',
        }),
      },
      '&.Mui-disabled + .MuiSwitch-track': {
        opacity: 0.5,
      },
    },
    '&.Mui-focusVisible .MuiSwitch-thumb': {
      color: '#0a78be',
      border: '6px solid #fff',
    },
    '&.Mui-disabled + .MuiSwitch-track': {
      opacity: 0.7,
      ...theme.applyStyles('dark', {
        opacity: 0.3,
      }),
    },
  },
  '& .MuiSwitch-thumb': {
    boxSizing: 'border-box',
    width: 22,
    height: 22,
  },
  '& .MuiSwitch-track': {
    borderRadius: 26 / 2,
    backgroundColor: '#E9E9EA',
    opacity: 1,
    transition: theme?.transitions?.create(['background-color'], {
      duration: 500,
    }),
    ...theme.applyStyles('dark', {
      backgroundColor: '#39393D',
    }),
  },
}));

const AdsetTable = (props: AdsetTableProps) => {
  const [rows, setRows] = useState<Array<any>>([])
  const [displayRows, setDisplayRows] = useState<Array<any>>([])
  const navigate = useNavigate();

  const hanldeSelectRow = (id: any) => {

  }

  const columns: GridColDef[] = [
    {
      field: "onoff",
      headerName: "Off/On",
      width: 100,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <IOSSwitch sx={{ m: 1 }} onClick={() => hanldeSelectRow(String(params.id))} />
          );
        }
      },
    },
    {
      field: "adSet",
      headerName: "Ad set",
      width: 153,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div>
              <p >{`Results from ${rows?.length}/${rows?.length} campaigns`}</p>
            </div>
          );
        }
        return <div onClick={() => handleClickName()}>{params.value}</div>;
      },
    },
    {
      field: "deliveryStatus", headerName: "Delivery", width: 172
    },
    { field: "bidStrategyCost", headerName: "Bid strategy", width: 130 },
    {
      field: "budgetDescription",
      headerName: "Budget",
      width: 188,
      renderCell: (params) => {
        if (params.id !== 'summary') {
          return (
            <div>
              <div>{`đ ${params.row.budgetCost}`}</div>
              <div>{params.row.budgetDescription}</div>
            </div>
          );
        }
        return <div></div>
      }
    },
    {
      field: 'lastSignificantEdit',
      headerName: 'Last significant edit',
      width: 188,
    },
    {
      field: "attributionSetting",
      headerName: "Attribution setting",
      width: 120,
      renderCell: (params) => {
        if (params.id === 'summary') {
          return (
            <div>
              <div>Multiple attribution settings</div>
            </div>
          );
        }
      }
    },
    {
      field: "resultsCost",
      headerName: "Results",
      width: 200,
      renderCell: (params) => {
        if (params.id !== 'summary') {
          return (
            <div>
              <div>{`đ ${params.row.resultsCost}`}</div>
              <div>{params.row.resultsDescription}</div>
            </div>
          );
        }
        return (
          <div>
            <p>{`đ ${params.row.resultsCost}`}</p>
            <p>Multiple conversions</p>
          </div>
        )
      }
    },
    {
      field: "reach",
      headerName: "Reach",
      width: 158,
      renderCell: (params) => {
        if (params.id == 'summary') {
          return (
            <div>
              <div>{params.row.reach}</div>
              <div>Accounts Centre accounts</div>
            </div>
          );
        }
      }
    },
    {
      field: "impressions",
      headerName: "Impressions",
      width: 196,
      renderCell: (params) => {
        if (params.id == 'summary') {
          return (
            <div>
              <div>{params.row.impressions}</div>
              <div>Total</div>
            </div>
          );
        }
      }
    },
    {
      field: "costPerResultCost",
      headerName: "Cost per result",
      width: 196,
      renderCell: (params) => {
        if (params.id == 'summary') {
          return (
            <div>
              <div>{params.row.costPerResultCost}</div>
              <div>Multiple conversions</div>
            </div>
          );
        }
      }
    },
    {
      field: "amountSpent",
      headerName: "Amount spent",
      width: 196,
      renderCell: (params) => {
        if (params.id == 'summary') {
          return (
            <div>
              <div>{`đ ${params.row.amountSpent}`}</div>
              <div>Total Spent</div>
            </div>
          );
        }
      }
    },
    {
      field: "endsOngoing",
      headerName: "Ends",
      width: 196,
    }
  ];

  const handleClickName = () => {
    // navigate(ROUTERS_PATHS.CAMPAIGN);
  };



  const objParam = getParamsId()

  const getData = async () => {
    const business_id = objParam?.business_id
    const selected_campaign_ids = objParam?.selected_campaign_ids

    try {
      const params = {
        business_id: business_id && !selected_campaign_ids ? business_id : '',
        campaign_id: !!selected_campaign_ids ? selected_campaign_ids.replaceAll('and', ',') : []
      }
      const response = await axiosInstance.get(URL_PATHS.GET_AD_SET, { params })
      if (response && response.data) {
        const data = response.data
        const totalReach = data.reduce((sum: any, row: any) => sum + row.reach, 0);
        const totalResultsCost = data.reduce((sum: any, row: any) => sum + row.resultsCost, 0);
        const totalCostPerResultCost = data.reduce((sum: any, row: any) => sum + row.costPerResultCost, 0);
        const totalImpressions = data.reduce((sum: any, row: any) => sum + row.impressions, 0);
        const totalAmountSpent = data.reduce(
          (sum: any, row: any) => sum + parseFloat(String(row.amountSpent)),
          0
        );

        const summaryRow = {
          id: "summary",
          accountName: "Total results",
          reach: totalReach,
          impressions: totalImpressions,
          resultsCost: totalResultsCost,
          costPerResultCost: totalCostPerResultCost,
          amountSpent: totalAmountSpent.toFixed(2),
          attributionSetting: "Multiple attribution settinng",
        };
        const displayRows = [...data, summaryRow];
        setDisplayRows(displayRows)
      }
      console.log("🚀 ~ getData ~ response:", response)
    } catch (error) {

    }
  }

  useEffect(() => {
    getData()
  }, [JSON.stringify(objParam)])
  return (
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
  );
};

export default AdsetTable;
