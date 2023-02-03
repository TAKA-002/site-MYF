Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "Group Operating Expense Expenditure Ratio Graph 2021",
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
      name: "Donation Utilization",
      colorByPoint: true,
      data: [
        {
          name: "Scholarship",
          y: 17.93,
        },
        {
          name: "Ghana & Japan NGO Staffs & Teaches Wages",
          y: 14.94,
        },
        {
          name: "School Bus Fuel and Parking",
          y: 11.74,
        },
        {
          name: "School Feeding Program",
          y: 10.67,
        },
        {
          name: "Constructing Toilet, Library & Computer Room",
          y: 10.03,
        },
        {
          name: "Others",
          y: 34.69,
        },
      ],
    },
  ],
});
