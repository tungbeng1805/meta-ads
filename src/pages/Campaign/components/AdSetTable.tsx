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
  const [arrSelectedRow, setArrSelectedRow] = useState<Array<any>>([])

  console.log('arrSelectedRow', arrSelectedRow);

  const objParam = getParamsId()

  const columns: GridColDef[] = [
    {
      field: "onoff",
      headerName: "Off/On",
      width: 100,
      renderCell: (params) => {
        if (params.id !== "summary") {
          return (
            <IOSSwitch
              checked={!!params.row && !!params.row.deliveryStatus && params.row.deliveryStatus === STATUS.ACTIVE}
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
      field: "adSet",
      headerName: "Ad set",
      width: 170,
      renderCell: (params) => {
        if (params.id === "summary") {
          return (
            <div>
              <p >{`Results from ${rows?.length} ad sets`}</p>
              <p className="title-footer-table">Excludes deleted items</p>
            </div>
          );
        }
        return <div onClick={() => handleClickName()}>{params.value}</div>;
      },
    },
    {
      field: "deliveryStatus",
      headerName: "Delivery",
      width: 172,
      renderCell: (params) => {
        if (params.id !== 'summary') {
          return (
            <div>
              <div>{params.row.deliveryStatus}</div>
              <div>{params.row.deliveryDescription}</div>
            </div>
          );
        }
        return <div></div>
      }
    },
    {
      field: "bidStrategyCost",
      headerName: "Bid strategy",
      width: 130,
      renderCell: (params) => {
        if (params.id !== 'summary') {
          return (
            <div>
              <div>{params.row.bidStrategyCost}</div>
              <div>{params.row.bidStrategyDescription}</div>
            </div>
          );
        }
        return <div></div>
      }
    },
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
      renderCell: (params) => {
        if (params.id !== 'summary') {
          return (
            <div>
              {moment(params.row.lastSignificantEdit).format("D MMM YYYY")}
            </div>
          );
        }
        return <div></div>
      }
    },
    {
      field: "attributionSetting",
      headerName: "Attribution setting",
      width: 120,
      renderCell: (params) => {
        if (params.id === 'summary') {
          return (
            <div>
              <div className="title-footer-table">Multiple attribution settings</div>
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
              <div className="title-footer-table">Accounts Centre accounts</div>
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
              <div className="title-footer-table">Total</div>
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
          )
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
              <div className="title-footer-table">Total Spent</div>
            </div>
          );
        } else {
          return (
            <div>{`đ ${params.row.amountSpent}`}</div>
          )
        }
      }
    },
    {
      field: "endsOngoing",
      headerName: "Ends",
      width: 196,
    },
    {
      field: "scheduleFrom",
      headerName: "Schedule",
      width: 196,
      renderCell: (params) => {
        if (params.id !== 'summary') {
          return (
            <div>
              {moment(params.row.scheduleFrom).format("D MMM YYYY")}
            </div>
          );
        }
        return <div></div>
      }
    }
  ];

  const handleClickName = () => {
    // navigate(ROUTERS_PATHS.CAMPAIGN);
  };

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
        const totalReach = data.reduce((sum: any, row: any) => sum + Number(row.reach), 0);
        const totalResultsCost = data.reduce((sum: any, row: any) => sum + Number(row.resultsCost), 0);
        const totalCostPerResultCost = data.reduce((sum: any, row: any) => sum + Number(row.costPerResultCost), 0);
        const totalImpressions = data.reduce((sum: any, row: any) => sum + Number(row.impressions), 0);
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
        setRows(data)
        setDisplayRows(displayRows)
      }
    } catch (error) {

    }
  }

  useEffect(() => {
    getData()
  }, [JSON.stringify(objParam)])

  useEffect(() => {
    const objParam = getParamsId()
    const selected_adset_ids = objParam?.selected_adset_ids
    const arrId = !!selected_adset_ids ? selected_adset_ids.split('and') : []
    setArrSelectedRow(arrId.map((e: any) => Number(e)))
  }, [])

  return (
    <DataGrid
      rows={displayRows}
      columns={columns}
      checkboxSelection={true}
      rowSelectionModel={arrSelectedRow}
      onRowSelectionModelChange={(newSelection: any) => {
        const _arr = newSelection.map((i: any) => String(i))
        const stringId = _arr.reduce((acc: any, cur: any) => { return acc += String(cur) + 'and' }, '')
        const params = new URLSearchParams(window.location.search);
        if (stringId !== '') {
          params.set('selected_adset_ids', stringId);
        } else {
          params.delete('selected_adset_ids');
        }
        const newUrl = `${window.location.pathname}?${params.toString()}`;
        window.history.pushState({}, '', newUrl)
        setArrSelectedRow(_arr.map((e: any) => Number(e)))
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

export default AdsetTable;
