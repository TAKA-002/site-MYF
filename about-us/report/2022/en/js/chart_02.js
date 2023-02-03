Highcharts.chart("chart_02", {
  chart: {
    type: "pie",
  },
  title: {
    text: "Group Operating Expense Donation Ratio Graph 2021",
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
      name: "Donation",
      colorByPoint: true,
      data: [
        {
          name: "Fund Raising",
          y: 100,
        },
      ],
    },
  ],
});
