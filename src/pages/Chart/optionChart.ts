export const optionChartTop = [
  {
    key: "resultsCost",
    title: "Messaging conversations started",
    isChoose: true,
    tooltipValue:
      "The number of times that a messaging conversation was started with your business after at least seven days of inactivity, attributed to your ads. This doesnt include messaging conversations started from ads delivered to or from Europe or Japan.",
  },
  {
    key: "costPerResultCost",
    title: "Per messaging conversation started",
    isChoose: false,
    tooltipValue:
      "The average cost for each messaging conversation started. This doesnt include messaging conversations started from ads delivered to or from Europe or Japan.",
  },
  {
    key: "amountSpent",
    title: "Amount spent",
    isChoose: false,
    tooltipValue:
      "The approximate total amount of money that youve spent on your campaign, ad st ad during its schedule.",
  },
];

export const optionsTopChart = {
  title: {
    text: "",
  },
  xAxis: {
    categories: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
  },
  yAxis: {
    title: {
      text: "",
    },
  },
  series: [
    {
      name: "Messaging conversations started",
      data: [150, 200, 170, 240, 300],
    },
    {
      name: "Historical edits",
      data: [180, 220, 160, 280, 260],
    },
  ],
};

export const optionBotChart = {
  chart: {
    type: "column",
  },
  title: {
    text: "",
  },
  xAxis: {
    categories: ["Tháng 1", "Tháng 2", "Tháng 3", "Tháng 4", "Tháng 5"],
    crosshair: true,
  },
  yAxis: {
    min: 0,
    title: {
      text: "",
    },
  },
  tooltip: {
    headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
    pointFormat:
      '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
      '<td style="padding:0"><b>{point.y:.1f} triệu</b></td></tr>',
    footerFormat: "</table>",
    shared: true,
    useHTML: true,
  },
  plotOptions: {
    column: {
      pointPadding: 0.2,
      borderWidth: 0,
    },
  },
  series: [
    {
      name: "Men",
      data: [49.9, 71.5, 106.4, 129.2, 144.0],
    },
    {
      name: "Women",
      data: [83.6, 78.8, 98.5, 93.4, 106.0],
    },
  ],
};
