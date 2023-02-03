Highcharts.chart("chart_01", {
  chart: {
    type: "pie",
  },
  title: {
    text: "団体運営費 支出割合グラフ 2022",
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
          name: "奨学金",
          y: 17.93,
        },
        {
          name: "スタッフ・学校教師賃金",
          y: 14.94,
        },
        {
          name: "スクールバスの燃料と駐車場",
          y: 11.74,
        },
        {
          name: "学校給食プログラム",
          y: 10.67,
        },
        {
          name: "トイレ・図書室・パソコン室建設",
          y: 10.03,
        },
        {
          name: "その他合計",
          y: 34.69,
        },
      ],
    },
  ],
});
