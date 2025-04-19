import { Box, MenuItem, Select, SelectChangeEvent } from "@mui/material";
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
    <div>
      <Box style={{ marginTop: "16px" }} bgcolor="white" borderRadius="4px">
        <Box display="flex" alignItems="center" gap="8px" padding="16px">
          <div className="tab-btn tab-btn-active">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                maskPosition: "-187px -1084px",
                background: "#0a78be",
              }}
            />
            Demographics
          </div>
          <div className="tab-btn">
            <Box
              sx={{
                width: "16px",
                height: "16px",
                maskImage:
                  "url(https://static.xx.fbcdn.net/rsrc.php/v4/yi/r/yce2C66SV51.png?_nc_eui2=AeGOxUl--o73PWGWkHaXGL6TH-ezJjFgtKwf57MmMWC0rM1xS38nmDACVd5QTRFHRFMdFg9YY8CLRdcfYhgp1O5e)",
                maskPosition: "-221px -1101px",
                background: "#1c2b33",
              }}
            />
            Platform
          </div>
        </Box>
        <Box
          display="flex"
          alignItems="center"
          gap="8px"
          padding="0px 16px"
          justifyContent="space-between"
        >
          <p className="chart-name">Age and gender distribution</p>
          <Box display="flex" alignItems="center" gap="8px">
            <Select
              value={person}
              onChange={handleChangeValue}
              displayEmpty
              inputProps={{ "aria-label": "Without label" }}
              sx={{
                "& div.MuiInputBase-input": {
                  paddingTop: "6.5px",
                  paddingBottom: "6.5px",
                },
                "& fieldset.MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 0, 0, 0.4)",
                },
              }}
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
              sx={{
                "& div.MuiInputBase-input": {
                  paddingTop: "6.5px",
                  paddingBottom: "6.5px",
                },
                "& fieldset.MuiOutlinedInput-notchedOutline": {
                  borderColor: "rgba(0, 0, 0, 0.4)",
                },
              }}
            >
              <MenuItem value={"Results"}>Results</MenuItem>
              <MenuItem value={"Amount spent"}>Amount spent</MenuItem>
              <MenuItem value={"Reach"}>Reach</MenuItem>
              <MenuItem value={"Impressions"}>Impressions</MenuItem>
            </Select>
          </Box>
        </Box>
        <Box marginTop="32px" paddingLeft="16px">
          <HighchartsReact highcharts={Highcharts} options={optionBotChart} />
        </Box>
      </Box>
    </div>
  );
};

export default BotChart;
