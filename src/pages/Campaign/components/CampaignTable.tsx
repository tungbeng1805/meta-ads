import ROUTERS_PATHS from "@/constants/router-paths";
import { Switch } from "@mui/material";
import { Box, styled } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

interface CampaignTableProps {
  data: any
}

const paginationModel = { page: 0, pageSize: 5 };

const IOSSwitch = styled((props) => (
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
    // '&.Mui-disabled .MuiSwitch-thumb': {
    //   color: theme.palette?.grey[100],
    //   ...theme.applyStyles('dark', {
    //     color: theme.palette?.grey[600],
    //   }),
    // },
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

const CampaignTable = (props: CampaignTableProps) => {
  const { data } = props
  const [rows, setRows] = useState<Array<any>>([])
  const [displayRows, setDisplayRows] = useState<Array<any>>([])

  console.log('data', data);
  
  const navigate = useNavigate();
  const columns: GridColDef[] = [
    {
      field: "onoff",
      headerName: "Off/On",
      width: 100,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <IOSSwitch sx={{ m: 1 }} />
          );
        }
      },
    },
    {
      field: "campaign",
      headerName: "Campaign",
      width: 153,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div>
              <p >{`Results from ${rows?.length}/${rows?.length} campaigns`}</p>
              <p >Excludes deleted items</p>
            </div>
          );
        }
        return <div onClick={() => handleClickName()}>{params.value}</div>;
      },
    },
    { field: "deliveryDescription", headerName: "Delivery", width: 172
     },
    { field: "bidStrategy", headerName: "Bid strategy", width: 130 },
    {
      field: "budgetDescription",
      headerName: "Budget",
      width: 188,
    },
    {
      field: "attributionSetting",
      headerName: "Attribution setting",
      width: 120,
    },
    {
      field: "resultsDescription",
      headerName: "Results",
      width: 200,
    },
    {
      field: "reach",
      headerName: "Reach",
      width: 158,
    },
    {
      field: "impressions",
      headerName: "Impressions",
      width: 196,
    },
    {
      field: "costPerResultCost",
      headerName: "Cost per result",
      width: 196,
    },
    {
      field: "amountSpent",
      headerName: "Amount spent",
      width: 196,
    },
    {
      field: "endsOngoing",
      headerName: "Ends",
      width: 196,
    }
  ];

  const handleClickName = () => {
    navigate(ROUTERS_PATHS.CAMPAIGN);
  };

  useEffect(() => {
    if(!!data) {
      setRows(data)
      const totalReach = data.reduce((sum: any, row: any) => sum + Number(row.reach), 0);
  const totalImpressions = data.reduce((sum: any, row: any) => sum + Number(row.impressions), 0);
  const totalFrequency =
    data.reduce((sum: any, row: any) => sum + row.frequency, 0) / data.length;
  const totalAmountSpent = data.reduce(
    (sum: any, row: any) => sum + parseFloat(String(row.amountSpent)),
    0
  );
  const totalCostPerResultCost= data.reduce(
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
  };
  const displayRows = [...data, summaryRow];
  setDisplayRows(displayRows)
    }
  }, [JSON.stringify(data)])

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

export default CampaignTable;
