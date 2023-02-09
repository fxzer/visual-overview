import * as echarts from 'echarts'
export default {
   title: {
    text: "B站昨日各区域在线人数",
    left: "center",
    textStyle: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "normal",
      textAlign: "center",
    },
  },
  grid: {
    left: '12%',
    top: '10%',
    bottom: '10%',
    right: '10%'
  },
  backgroundColor: '#040D21',
  xAxis: {
    data: ['生活区', '娱乐区', '游戏区', '科技区', '知识区', '音乐区'],
    axisLine: {
      lineStyle: {
        color: '#0177d4'
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 12
    }
  },
  yAxis: {
    name: "（人）",
    nameTextStyle: {
      color: '#fff',
      fontSize: 12
    },
    axisLine: {
      lineStyle: {
        color: '#0177d4'
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 12
    },
    splitLine: {
      show: false,
      lineStyle: {
        color: '#0177d4'
      }
    },
    interval: 500,
    max: 5000

  },
  series: [{
    type: 'bar',
    barWidth: 18,
    itemStyle: {
      normal: {
        color: new echarts.graphic.LinearGradient(0, 0, 0, 1, [{
          offset: 0,
          color: '#00b0ff'
        }, {
          offset: 0.8,
          color: '#7052f4'
        }], false)
      }
    },
    data: [3549, 3254, 5654, 2454, 4757, 2011, 1211]
  }]
}