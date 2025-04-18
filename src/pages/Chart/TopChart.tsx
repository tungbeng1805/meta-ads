import {
  Box,
  Button,
  MenuItem,
  Select,
  SelectChangeEvent,
  Tooltip,
} from "@mui/material";
import TuneIcon from "@mui/icons-material/Tune";
import InfoIcon from "@mui/icons-material/Info";
import styles from "./styles.module.scss";
import { useState } from "react";
import { optionChartTop, optionsTopChart } from "./optionChart";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";

const TopChart = () => {
  const [time, setTime] = useState<any>(1);
  const handleChangeValue = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };
  return (
    <div className="top-chart">
      <div className="chart-header">
        <div className="chart-name">Performance overview</div>
        <div className={styles.actionChart}>
          <Select
            value={time}
            onChange={handleChangeValue}
            displayEmpty
            inputProps={{ "aria-label": "Without label" }}
          >
            <MenuItem value={1}>Day</MenuItem>
            <MenuItem value={7}>Week</MenuItem>
            <MenuItem value={30}>Month</MenuItem>
          </Select>

          <Select value={"Activity history: All"}>
            <MenuItem value={"Activity history: All"}>
              Activity history: All
            </MenuItem>
          </Select>

          <Button variant="outlined" startIcon={<TuneIcon />}>
            Customise
          </Button>
        </div>
      </div>
      <div className="chart-info">
        <div>
          <div className="chart-option">
            {optionChartTop.map((item, index) => {
              return (
                <div key={index} style={{ border: "1px solid #000" }}>
                  {item.title}{" "}
                  <Tooltip title={item.tooltipValue}>
                    <span>
                      <InfoIcon />
                    </span>
                  </Tooltip>
                  <div>{item.value}</div>
                </div>
              );
            })}
          </div>

          <HighchartsReact highcharts={Highcharts} options={optionsTopChart} />
        </div>
        <div>
          <div style={{ fontWeight: "bold" }}>
            Your cost per messaging conversation started is 12% lower than
            similar ad sets
          </div>
          <div>
            Similar ad sets run by your peers between 12 Apr 2025 and 15 Apr
            2025 have a median cost per messaging conversation started of 14.9K
            ₫.
          </div>
          <a href="#" style={{ textDecoration: "none" }}>
            View detailed report
          </a>
        </div>
      </div>
    </div>
  );
};

export default TopChart;
