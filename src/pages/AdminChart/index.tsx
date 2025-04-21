import IconsMoreAction from "@/assets/moreAction.svg";
import IF from "@/components/IF";
import MenuListActions from "@/components/MenuListActions";
import MESSAGE_API from "@/constants/message";
import axiosInstance from "@/services/api-services";
import URL_PATHS from "@/services/url-path";
import {
  Button,
  IconButton,
  Paper,
  Popover,
  styled,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";
import { useEffect, useState } from "react";
import { Bounce, toast } from "react-toastify";
import ModalAdminChart from "./modal";
import { useLoading } from "@/stores/loadingStore";

const columns: any = [
  { id: "name", label: "Name", minWidth: 300 },
  {
    id: "men",
    label: "Men",
    minWidth: 50,
    align: "start",
  },
  {
    id: "women",
    label: "Women",
    minWidth: 150,
    align: "start",
  },
  {
    id: "costPerResultMen",
    label: "Cost Per Result Men",
    minWidth: 150,
    align: "start",
  },
  {
    id: "costPerResultWomen",
    label: "Cost Per Result Women",
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

const AdminChart = () => {
  const { showLoading, hideLoading } = useLoading();
  const [dataList, setDataList] = useState([]);
  const [isOpen, setIsOpen] = useState(false);
  const [dataSelected, setDataSelected] = useState(null);
  const [dataDetail, setDataDetail] = useState(null);
  const [isView, setIsView] = useState(false);
  const [anchorEl, setAnchorEl] = useState(null);
  const open = Boolean(anchorEl);
  const id = open ? "simple-popover" : undefined;

  useEffect(() => {
    getList();
  }, []);

  const getList = async () => {
    try {
      showLoading();
      const data: any = await axiosInstance.get(URL_PATHS.GET_CHART);
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
    } finally {
      hideLoading();
    }
  };

  const handleClickAction = (event: React.SyntheticEvent<Event> | any, item: any) => {
    setAnchorEl(event.currentTarget);
    setDataSelected(item);
  };

  const handleCloseActionMenu = () => {
    setAnchorEl(null);
  };

  const getDetail = async (item: any) => {
    try {
      showLoading();
      const data: any = await axiosInstance.get(URL_PATHS.GET_CHART_BY_ID.replace(":id", item?.id));
      if (data?.status === 200) {
        setDataDetail(data?.data);
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
    } finally {
      hideLoading();
    }
  };

  const handleView = async () => {
    await getDetail(dataSelected);
    setIsOpen(true);
    setAnchorEl(null);
    setIsView(true);
  };

  const handleEdit = async () => {
    await getDetail(dataSelected);
    setIsOpen(true);
    setAnchorEl(null);
  };

  const handleDelete = async (item: any) => {
    setAnchorEl(null);
    if (confirm("Are you sure you want to delete this record?")) {
      try {
        showLoading();
        const data = await axiosInstance.delete(URL_PATHS.DELETE_CHART.replace(":id", item?.id));
        if (data?.status === 200) {
          await getList();
          toast.error(MESSAGE_API.deleteSuccessChart, {
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
      } finally {
        hideLoading();
      }
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
                <TableCell style={{ minWidth: 50 }}></TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {dataList.map((row: any) => {
                return (
                  <StyledTableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((col: any, index: number) => (
                      <TableCell key={`${col?.id}${index}`} align={col.align}>
                        {row[col?.id]}
                      </TableCell>
                    ))}
                    <TableCell align="left">
                      <IconButton aria-label="more" onClick={(e) => handleClickAction(e, row)}>
                        <img
                          style={{ width: "20px", height: "20px", cursor: "pointer" }}
                          src={IconsMoreAction}
                          alt=""
                        />
                      </IconButton>
                    </TableCell>
                  </StyledTableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
      <IF condition={open}>
        <Popover
          id={id}
          open={open}
          anchorEl={anchorEl}
          onClose={handleCloseActionMenu}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "left",
          }}
        >
          <MenuListActions
            actionEdit={() => {
              handleEdit();
            }}
            actionView={() => {
              handleView();
            }}
            actionDelete={() => {
              handleDelete(dataSelected);
            }}
          />
        </Popover>
      </IF>
      {isOpen && (
        <ModalAdminChart
          open={isOpen}
          handleClose={() => {
            setIsOpen(false);
            setIsView(false);
            setDataDetail(null);
          }}
          defaultValues={dataDetail}
          getList={getList}
          isView={isView}
        />
      )}
    </div>
  );
};

export default AdminChart;
