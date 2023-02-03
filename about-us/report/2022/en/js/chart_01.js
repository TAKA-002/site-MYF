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
          name: "School Feeding Program Support",
          y: 36.82,
        },
        {
          name: "Office Rent & Bills",
          y: 13.67,
        },
        {
          name: "Donated Items Shipment",
          y: 13.04,
        },
        {
          name: "Scholarship",
          y: 7.36,
        },
        {
          name: "Constructing Toilet & Library & Computer Room",
          y: 5.29,
        },
        {
          name: "Others",
          y: 23.82,
        },
      ],
    },
  ],
});
