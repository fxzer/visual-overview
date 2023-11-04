const legendData = ['分区', '时间段'] // 图例
const indicator = [{
  text: '学习区',
  max: 620,
},
{
  text: '编程区',
  max: 650,
},
{
  text: '生活区',
  max: 400,
},
{
  text: '影视区',
  max: 560,
},
{
  text: '游戏区',
  max: 380,
},
{
  text: '音乐区',
  max: 390,
},
]
const dataArr = [{
  value: [430, 470, 360, 390, 380, 420],
  name: legendData[0],
  itemStyle: {
    normal: {
      lineStyle: {
        color: '#4A99FF',
        // shadowColor: '#4A99FF',
        // shadowBlur: 10,
      },
      shadowColor: '#4A99FF',
      shadowBlur: 10,
    },
  },
  areaStyle: {
    normal: { // 单项区域填充样式
      color: {
        type: 'linear',
        x: 0, // 右
        y: 0, // 下
        x2: 1, // 左
        y2: 1, // 上
        colorStops: [{
          offset: 0,
          color: '#4A99FF',
        }, {
          offset: 0.5,
          color: 'rgba(0,0,0,0)',
        }, {
          offset: 1,
          color: '#4A99FF',
        }],
        globalCoord: false,
      },
      opacity: 1, // 区域透明度
    },
  },
},
{
  value: [320, 300, 340, 200, 390, 200],
  name: legendData[1],
  itemStyle: {
    normal: {
      lineStyle: {
        color: '#4BFFFC',
        // shadowColor: '#4BFFFC',
        // shadowBlur: 10,
      },
      shadowColor: '#4BFFFC',
      shadowBlur: 10,
    },
  },
  areaStyle: {
    normal: { // 单项区域填充样式
      color: {
        type: 'linear',
        x: 0, // 右
        y: 0, // 下
        x2: 1, // 左
        y2: 1, // 上
        colorStops: [{
          offset: 0,
          color: '#4BFFFC',
        }, {
          offset: 0.5,
          color: 'rgba(0,0,0,0)',
        }, {
          offset: 1,
          color: '#4BFFFC',
        }],
        globalCoord: false,
      },
      opacity: 1, // 区域透明度
    },
  },
},
]
const colorArr = ['#4A99FF', '#4BFFFC'] // 颜色
export default {
  backgroundColor: '#040D21',
  title: {
    text: '去年分区访问分布',
    left: 'center',
    textStyle: {
      color: '#fff',
      fontSize: 14,
      fontWeight: 'normal',
      textAlign: 'center',
    },
  },
  color: colorArr,
  legend: {
    orient: 'vertical',
    icon: 'circle', // 图例形状
    data: legendData,
    bottom: 35,
    right: 40,
    itemWidth: 14, // 图例标记的图形宽度。[ default: 25 ]
    itemHeight: 14, // 图例标记的图形高度。[ default: 14 ]
    itemGap: 21, // 图例每项之间的间隔。[ default: 10 ]横向布局时为水平间隔，纵向布局时为纵向间隔。
    textStyle: {
      fontSize: 14,
      color: '#00E4FF',
    },
  },
  radar: {
    shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        fontSize: 14,
      },
    },
    indicator,
    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: { // 分隔区域的样式设置。
        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      },
    },
    axisLine: { // 指向外圈文本的分隔线样式
      lineStyle: {
        color: '#153269',
      },
    },
    splitLine: {
      lineStyle: {
        color: '#113865', // 分隔线颜色
        width: 1, // 分隔线线宽
      },
    },
  },
  series: [{
    type: 'radar',
    symbolSize: 8,
    // symbol: 'angle',
    data: dataArr,
  }],
}
