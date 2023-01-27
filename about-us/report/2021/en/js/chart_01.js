Highcharts.chart('chart_01', {
  chart: {
    type: 'pie'
  },
  title: {
    text: '団体運営費 支出割合グラフ 2021'
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
      name: "ご寄付活用項目",
      colorByPoint: true,
      data: [
        {
          name: "日本募金活動費",
          y: 20.46,
        },
        {
          name: "事務所賃貸費用",
          y: 15.02,
        },
        {
          name: "事務所賃貸費用",
          y: 15.02,
        },
        {
          name: "募金活動使用機材購入費",
          y: 13.49,
        },
        {
          name: "現地学校トイレ施設建設費",
          y: 12.98,
        },
        {
          name: "学生奨学金",
          y: 11.20,
        },
        {
          name: "現地学校スタッフ給与",
          y: 10.87,
        },
        {
          name: "保険関連費",
          y: 4.83,
        },
        {
          name: "インターネットサーバー・通信関連費",
          y: 3.86,
        },
        {
          name: "その他",
          y: 6.94,
        }
      ]
    }
  ],
});
