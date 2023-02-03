Highcharts.chart("chart_02", {
  chart: {
    type: "pie",
  },
  title: {
    text: "団体運営費 募金割合グラフ 2022",
  },
  subtitle: {
    text: "",
  },

  accessibility: {
    announceNewData: {
      enabled: true,
    },
    point: {
      valueSuffix: "%",
    },
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: "{point.name}: {point.y:.1f}%",
      },
    },
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat:
      '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>',
  },

  series: [
    {
      name: "ご寄付活用項目",
      colorByPoint: true,
      data: [
        {
          name: "募金",
          y: 100,
        },
      ],
    },
  ],
});
