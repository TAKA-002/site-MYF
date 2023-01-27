Highcharts.chart('chart_01', {
  chart: {
    type: 'pie'
  },
  title: {
    text: 'Group Operating Expense Expenditure Ratio Graph 2021'
  },
  subtitle: {
    text: ''
  },

  accessibility: {
    announceNewData: {
      enabled: true
    },
    point: {
      valueSuffix: '%'
    }
  },

  plotOptions: {
    series: {
      dataLabels: {
        enabled: true,
        format: '{point.name}: {point.y:.1f}%'
      }
    }
  },

  tooltip: {
    headerFormat: '<span style="font-size:11px">{series.name}</span><br>',
    pointFormat: '<span style="color:{point.color}">{point.name}</span>: <b>{point.y:.2f}%</b> of total<br/>'
  },

  series: [
    {
      name: "Donation Utilization",
      colorByPoint: true,
      data: [
        {
          name: "Fundraiser",
          y: 20.46,
        },
        {
          name: "Office Rental Cost",
          y: 15.02,
        },
        {
          name: "Activity Materials",
          y: 13.49,
        },
        {
          name: "Toilet Construction Cost",
          y: 12.98,
        },
        {
          name: "Scholarship",
          y: 11.20,
        },
        {
          name: "School Staff Salary",
          y: 10.87,
        },
        {
          name: "Insurance Cost",
          y: 4.83,
        },
        {
          name: "Server・Communication Cost",
          y: 3.86,
        },
        {
          name: "Others",
          y: 6.94,
        }
      ]
    }
  ],
});
