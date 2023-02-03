Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "団体運営費 支出割合グラフ 2021",
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
          name: "給食プログラムサポート",
          y: 36.82,
        },
        {
          name: "事務所賃貸費用",
          y: 13.67,
        },
        {
          name: "寄付品の海外発送料",
          y: 13.04,
        },
        {
          name: "奨学金",
          y: 7.36,
        },
        {
          name: "トイレ・図書室・パソコン室建設",
          y: 5.29,
        },
        {
          name: "その他",
          y: 23.82,
        },
      ],
    },
  ],
});
