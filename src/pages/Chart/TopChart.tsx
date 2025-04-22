import TooltipCustom from "@/components/TooltipCustom";
import { Box, Grid, MenuItem, Select, SelectChangeEvent } from "@mui/material";
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import { useState } from "react";
import { optionChartTop, optionsTopChart } from "./optionChart";

const TopChart = ({ listMenu }: any) => {
  const [time, setTime] = useState<any>(1);
  const handleChangeValue = (event: SelectChangeEvent) => {
    setTime(event.target.value);
  };

  return (
    <div className="top-chart">
      <Grid container>
        <Grid size={9.5}>
          <div className="chart-header">
            <div className="chart-name">Performance overview</div>
            <Box display="flex" alignItems="center" gap="8px">
              <Select
                value={time}
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
                <MenuItem value={1}>Day</MenuItem>
                <MenuItem value={7}>Week</MenuItem>
                <MenuItem value={30}>Month</MenuItem>
              </Select>
              <div className="header-button">
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/yB/r/WmPEZuoD7_w.png?_nc_eui2=AeHFiWtGPUmEv2NcPaSW3mWPze37yCl6tkLN7fvIKXq2QriWP8T4yTjeEFk3CbINy37gxKs6Wu4aZ-ig98dAMfsf)",
                    maskPosition: "-221px -1118px",
                    maskSize: "325px 1135px",
                    background: "#1c2b33",
                  }}
                />
                Activity history: All
              </div>
              <div className="header-button">
                <Box
                  sx={{
                    width: "16px",
                    height: "16px",
                    maskImage:
                      "url(https://static.xx.fbcdn.net/rsrc.php/v4/yW/r/DG3IQ9pnrkn.png?_nc_eui2=AeHyg-hRTFM-2tHJ0xyJTbxZUrJBDbRMhIxSskENtEyEjPL0eTXyawvvyFfwvxzAn5x3wdMugaZqWt4ZK33tqnGw)",
                    maskPosition: "0px -410px",
                    background: "#1c2b33",
                  }}
                />
                Customise
              </div>
            </Box>
          </div>
          <Box padding="16px">
            <div className="chart-option">
              {optionChartTop.map((item, index) => {
                const value = Number(
                  listMenu?.[0]?.[item?.key] || 0
                )?.toLocaleString();
                return (
                  <div
                    key={String(index)}
                    className={`topchart-info ${
                      item?.isChoose && "info-active"
                    }`}
                  >
                    <Box display="flex" alignItems="center" gap="4px">
                      <p>{item.title}</p>
                      <TooltipCustom
                        title={item?.tooltipValue}
                        placement="top-start"
                      >
                        <Box
                          sx={{
                            width: "12px",
                            height: "12px",
                            maskImage:
                              "url(https://static.xx.fbcdn.net/rsrc.php/v4/yT/r/K7R9ikhLWMc.png?_nc_eui2=AeFHnyDq0yr0XS8y8mLvsJBRNZAYEsuXd7w1kBgSy5d3vInP_1xnxsZv9ZGt_mpA0yiVxIwPJ_L3zd1K1bX_szXx)",
                            maskPosition: "-56px -521px",
                            background: "#1c2b33",
                          }}
                        />
                      </TooltipCustom>
                    </Box>
                    <div className="info-count">{`${
                      item?.key !== "resultsCost" ? "₫" : ""
                    }${value}`}</div>
                  </div>
                );
              })}
            </div>
            <p className="chart-name" style={{marginBottom: '16px'}}>Messaging conversations started</p>
            <HighchartsReact
              highcharts={Highcharts}
              options={optionsTopChart}
            />
          </Box>
        </Grid>
        <Grid size={2.5}>
          <div className="right-chart-info">
            <div
              style={{
                fontWeight: "bold",
                fontSize: "15px",
                lineHeight: "20px",
              }}
            >
              Your cost per messaging conversation started is 12% lower than
              similar ad sets
            </div>
            <div
              style={{
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              Similar ad sets run by your peers between 12 Apr 2025 and 15 Apr
              2025 have a median cost per messaging conversation started of
              14.9K ₫.
            </div>
            <a
              href="#"
              style={{
                textDecoration: "none",
                fontWeight: "400",
                fontSize: "14px",
                lineHeight: "20px",
              }}
            >
              View detailed report
            </a>
          </div>
        </Grid>
      </Grid>
    </div>
  );
};

export default TopChart;
