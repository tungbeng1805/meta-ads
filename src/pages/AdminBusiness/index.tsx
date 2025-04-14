import MESSAGE_API from "@/constants/message";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import { Button, Paper, styled, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import ModalAdminBusiness from "./modal";

const columns: any = [
  { id: "accountName", label: "Account Name", minWidth: 300 },
  {
    id: "reach",
    label: "Reach",
    minWidth: 50,
    align: "start",
  },
  {
    id: "impressions",
    label: "Impressions",
    minWidth: 150,
    align: "start",
  },
  {
    id: "frequency",
    label: "Frequency",
    minWidth: 150,
    align: "start",
  },
  {
    id: "amountSpent",
    label: "Amount Spent",
    minWidth: 150,
    align: "start",
  },
  {
    id: "attributionSetting",
    label: "Attribution Setting",
    minWidth: 150,
    align: "start",
  },
  {
    id: "messaginConversationStarted",
    label: "Messagin Conversation Started",
    minWidth: 150,
    align: "start",
  },
  {
    id: "costPerMessagingConversationStarted",
    label: "Cost Per Messaging Conversation Started",
    minWidth: 150,
    align: "start",
  },
];

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const AdminBusiness = () => {
  const [dataList, setDataList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      const data: any = await axiosInstance.get(URL_PATHS.GET_BUSINESS);
      if (data?.status === 200) {
        setDataList(data?.data);
      } else {
        toast.error(MESSAGE_API.errorApi, {
          position: "top-right",
          autoClose: 1000,
          hideProgressBar: false,
          closeOnClick: false,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
          theme: "light",
          transition: Bounce,
        });
      }
    } catch (error) {
      toast.error(MESSAGE_API.errorApi, {
        position: "top-right",
        autoClose: 1000,
        hideProgressBar: false,
        closeOnClick: false,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "light",
        transition: Bounce,
      });
    }
  };

  return (
    <div>
      <Button
        variant="contained"
        color="success"
        style={{ marginBottom: "20px", marginTop: "30px" }}
        onClick={() => {
          setIsOpen(true);
        }}
      >
        Add new
      </Button>
      <Paper sx={{ width: "100%" }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column: any) => (
                  <TableCell key={column.id} align={column?.align || ""} style={{ minWidth: column.minWidth }}>
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((row: any, index: number) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((col: any, index: number) => (
                      <TableCell key={`${col?.id}${index}`} align={col.align}>
                        {row[col?.id]}
                      </TableCell>
                    ))}
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      {isOpen && (
        <ModalAdminBusiness
          open={isOpen}
          handleClose={() => {
            setIsOpen(false);
          }}
          getList={getList}
        />
      )}
    </div>
  );
};

export default AdminBusiness;
