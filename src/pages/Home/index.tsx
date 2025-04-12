import React from "react";
import HomeHeader from "./components/HomeHeader";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import Paper from "@mui/material/Paper";
import { Grid } from "@mui/system";

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
  return (
    <div className="home-page">
      <HomeHeader />
      <Grid container spacing={2} sx={{ marginTop: 2 }}>
        <Grid size={10}>
          <Paper sx={{ boxShadow: "none", height: 44 }}></Paper>
          <Paper sx={{ boxShadow: "none", marginTop: 1 }}>
            <DataGrid
              rows={rows}
              columns={columns}
              initialState={{ pagination: { paginationModel } }}
              pageSizeOptions={[5, 10]}
              sx={{ border: 0 }}
            />
          </Paper>
        </Grid>
        <Grid size={2}>
          <Paper
            sx={{ height: "100%", width: "100%", boxShadow: "none" }}
          ></Paper>
        </Grid>
      </Grid>
    </div>
  );
};

export default HomePage;
