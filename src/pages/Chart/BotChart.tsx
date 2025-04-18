import { MenuItem, Paper, Select, SelectChangeEvent } from "@mui/material";
import styles from "./styles.module.scss";
import { useState } from "react";
import HighchartsReact from "highcharts-react-official";
import Highcharts from "highcharts";
import { optionBotChart } from "./optionChart";

const BotChart = () => {
  const [person, setPerson] = useState("All");
  const [result, SetResult] = useState("Results");
  const handleChangeValue = (event: SelectChangeEvent) => {
    setPerson(event.target.value);
  };
  return (
    <div style={{ marginTop: "20px" }}>
      <Paper
        sx={{
          boxShadow: "none",
        }}
      >
        <div className={styles.chartHeader}>
          <div className={styles.chartName}>Age and gender distribution</div>
          <div className={styles.actionChart}>
            <Select
              value={person}
              onChange={handleChangeValue}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"All"}>All</MenuItem>
              <MenuItem value={"Men"}>Men</MenuItem>
              <MenuItem value={"Women"}>Women</MenuItem>
            </Select>

            <Select
              value={result}
              onChange={(e) => {
                SetResult(e.target.value);
              }}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
            >
              <MenuItem value={"Results"}>Results</MenuItem>
              <MenuItem value={"Amount spent"}>Amount spent</MenuItem>
              <MenuItem value={"Reach"}>Reach</MenuItem>
              <MenuItem value={"Impressions"}>Impressions</MenuItem>
            </Select>
          </div>
        </div>
        <HighchartsReact highcharts={Highcharts} options={optionBotChart} />
      </Paper>
    </div>
  );
};

export default BotChart;
