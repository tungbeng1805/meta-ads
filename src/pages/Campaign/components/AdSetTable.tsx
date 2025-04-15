import ROUTERS_PATHS from "@/constants/router-paths";
import { Box } from "@mui/system";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useNavigate } from "react-router-dom";

interface AdsetTableProps {}

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

const AdsetTable = (props: AdsetTableProps) => {
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
        return <div onClick={() => handleClickName()}>{params.value}</div>;
      },
    },
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

  const handleClickName = () => {
    navigate(ROUTERS_PATHS.CAMPAIGN);
  };

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
