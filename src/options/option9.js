export default {
  title: {
    text: "B站用户终端分布排行",
    left: "center",
    textStyle: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "normal",
      textAlign: "center",
    },
  },
  backgroundColor: '#040D21',
  grid: {
    left: '10%',
    top: '5%',
    bottom: '12%',
    right: '8%'
  },
  xAxis: {
    data: ['安卓', 'IOS', 'Windows', 'MacOS', 'Linux'],
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 129, 109,.1)',
        width: 1 //这里是为了突出显示加上的
      }
    },
    axisLabel: {
      textStyle: {
        color: '#999',
        fontSize: 12
      }
    }
  },
  yAxis: [{
    axisTick: {
      show: false
    },
    axisLine: {
      lineStyle: {
        color: 'rgba(255, 129, 109, 0.1)',
        width: 1 //这里是为了突出显示加上的
      }
    },
    axisLabel: {
      textStyle: {
        color: '#999'
      }
    },
    splitArea: {
      areaStyle: {
        color: 'rgba(255,255,255,.5)'
      }
    },
    splitLine: {
      show: true,
      lineStyle: {
        color: 'rgba(255, 129, 109, 0.1)',
        width: 0.5,
        type: 'dashed'
      }
    }
  }
  ],
  series: [{
    type: 'pictorialBar',
    barCategoryGap: '0%',
    symbol: 'path://M0,10 L10,10 C5.5,10 5.5,5 5,0 C4.5,5 4.5,10 0,10 z',
    label: {
      show: true,
      position: 'top',
      distance: 15,
      color: '#08DFFE',
      fontWeight: 'bolder',
      fontSize: 15,
    },
    itemStyle: {
      normal: {
        color: {
          type: 'linear',
          x: 0,
          y: 0,
          x2: 0,
          y2: 1,
          colorStops: [{
            offset: 0,
            color: '#9A11FF'
          },
          {
            offset: 1,
            color: '#08DFFE'
          }
          ],
          global: false //  缺省为  false
        }
      },
      emphasis: {
        opacity: 1
      }
    },
    data: [91230, 60563, 12465, 89862, 9867]
  }]
}