<template>
  <div class="wrap" ref="fullscreenRef">
    <div class="header" ref="viewWrapRef">
      可视化总览
    </div>
    <div class="graph-wrap">
      <div class="graph-top-left">
        <v-chart class="chart" :option="option1" autoresize />
      </div>
      <div class="graph-top-center">
        <v-chart class="chart" :option="mapOption" autoresize />
      </div>
      <div class="graph-top-right">
        <v-chart class="chart" :option="option2" autoresize />
      </div>

      <div class="graph-center-left">
        <v-chart class="chart" :option="option3" autoresize />

      </div>
      <div class="graph-top-center"> </div>
      <div class="graph-center-right">
        <v-chart class="chart" :option="option5" autoresize />

      </div>

      <div class="graph-bottom-left">
        <v-chart class="chart" :option="option7" autoresize />
      </div>
      <div class="graph-bottom-center">
        <v-chart class="chart" :option="option8" autoresize />
      </div>
      <div class="graph-bottom-right">
        <v-chart class="chart" :option="option6" autoresize />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
// import ItemWrap from './components/ItemWrap.vue'
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, MapChart, EffectScatterChart, LinesChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, GeoComponent } from 'echarts/components';
//引入registerMap
import * as echarts from 'echarts';
import { registerMap } from 'echarts';
import VChart, { THEME_KEY } from 'vue-echarts';
import { ref, provide } from 'vue';
import mapOption from './map.js'
import mapJson from './map.json'
import Header from './components/Header.vue'
const loading = ref(false);
const scale = ref('1');
const viewWrapRef = ref(null);
const baseWidth = 1980;
const baseHeight = 1080;
const baseProportion = parseFloat((1980 / 1080).toFixed(5));
const fullscreen = ref(false);
const isFullscreen = ref(false);
console.log('[ mapJson ]-40', mapJson)

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  MapChart, EffectScatterChart, LinesChart, GeoComponent
]);
registerMap('china', mapJson)
// provide(THEME_KEY, 'dark');

var legendData = ['车辆数', '设计车位']; //图例
var indicator = [{
  text: '小型车',
  max: 6000,
},
{
  text: '中型车',
  max: 5000
},
{
  text: '大型车',
  max: 5000
},
{
  text: '货车',
  max: 5000,
  //  axisLabel: {show: true, textStyle: {fontSize: 18, color: '#333'}}
},
{
  text: '特种车',
  max: 5000
},
{
  text: '贵宾车',
  max: 5000
}
];
var dataArr = [{
  value: [4300, 4700, 3600, 3900, 3800, 4200],
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
        x: 0, //右
        y: 0, //下
        x2: 1, //左
        y2: 1, //上
        colorStops: [{
          offset: 0,
          color: '#4A99FF'
        }, {
          offset: 0.5,
          color: 'rgba(0,0,0,0)'
        }, {
          offset: 1,
          color: '#4A99FF'
        }],
        globalCoord: false
      },
      opacity: 1 // 区域透明度
    }
  }
},
{
  value: [3200, 3000, 3400, 2000, 3900, 2000],
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
        x: 0, //右
        y: 0, //下
        x2: 1, //左
        y2: 1, //上
        colorStops: [{
          offset: 0,
          color: '#4BFFFC'
        }, {
          offset: 0.5,
          color: 'rgba(0,0,0,0)'
        }, {
          offset: 1,
          color: '#4BFFFC'
        }],
        globalCoord: false
      },
      opacity: 1 // 区域透明度
    }
  }
}
];
var colorArr = ['#4A99FF', '#4BFFFC']; //颜色
var colorArr1 = ["#218de0", "#01cbb3", "#85e647", "#5d5cda", "#05c5b0", "#c29927"];
var colorAlpha1 = ['rgba(60,170,211,0.05)', 'rgba(1,203,179,0.05)', 'rgba(133,230,71,0.05)', 'rgba(93,92,218,0.05)', 'rgba(5,197,176,0.05)', 'rgba(194,153,39,0.05)']
const option1 = ref({
  backgroundColor: "#040D21",
  grid: {
    left: -100,
    top: 50,
    bottom: 10,
    right: 10,
    containLabel: true
  },
  tooltip: {
    trigger: 'item',
    formatter: "{b} : {c} ({d}%)"
  },
  legend: {
    show: false
  },

  polar: {},
  angleAxis: {
    interval: 1,
    type: 'category',
    data: [],
    z: 10,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#0B4A6B",
        width: 1,
        type: "solid"
      },
    },
    axisLabel: {
      interval: 0,
      show: true,
      color: "#0B4A6B",
      margin: 8,
      fontSize: 16
    },
  },
  radiusAxis: {
    min: 20,
    max: 120,
    interval: 20,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#0B3E5E",
        width: 1,
        type: "solid"
      },
    },
    axisLabel: {
      formatter: '{value} %',
      show: false,
      padding: [0, 0, 20, 0],
      color: "#0B3E5E",
      fontSize: 16
    },
    splitLine: {
      lineStyle: {
        color: "#07385e",
        width: 2,
        type: "dashed"
      }
    }
  },
  calculable: true,
  series: [{
    stack: 'a',
    type: 'pie',
    radius: '80%',
    roseType: 'radius',
    zlevel: 10,
    startAngle: 100,
    label: {
      normal: {
        formatter: ['{b|{b}}', '{d|{d}%}'].join('\n'),
        rich: {
          b: {
            color: '#3bd2fe',
            fontSize: 14,
            lineHeight: 20
          },
          d: {
            color: '#d0fffc',
            fontSize: 14,
            height: 20
          },
        },
      }
    },
    labelLine: {
      normal: {
        show: true,
        length: 10,
        length2: 45,
        lineStyle: {
          color: '#0096b1'

        }
      },
      emphasis: {
        show: false
      }
    },
    data: [{
      value: 63,
      name: '容量小设备老旧',
      itemStyle: {
        borderColor: colorArr1[0],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: "#41a8f8",
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha1[0]
      }
    },
    {
      value: 27,
      name: '季节性企业用电',
      itemStyle: {
        borderColor: colorArr1[1],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr1[1],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha1[1]
      }
    },
    {
      value: 7,
      name: '企业用电高峰',
      itemStyle: {
        borderColor: colorArr1[2],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr1[2],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha1[2]
      }
    },
    {
      value: 13,
      name: '节假日',
      itemStyle: {
        borderColor: colorArr1[3],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr1[3],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha1[3]
      }
    },
    {
      value: 10,
      name: '临时用电',
      itemStyle: {
        borderColor: colorArr1[4],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr1[4],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha1[4]
      }
    },
    {
      value: 6,
      name: '三相用电不平衡',
      itemStyle: {
        borderColor: colorArr1[5],
        borderWidth: 2,
        shadowBlur: 20,
        shadowColor: colorArr1[5],
        shadowOffsetx: 25,
        shadowOffsety: 20,
        color: colorAlpha1[5]
      }
    }
    ]
  },]
});
const option2 = ref({
  backgroundColor: '#040D21',
  color: colorArr,
  legend: {
    orient: 'vertical',
    icon: 'circle', //图例形状
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
    // shape: 'circle',
    name: {
      textStyle: {
        color: '#fff',
        fontSize: 16
      },
    },
    indicator: indicator,
    splitArea: { // 坐标轴在 grid 区域中的分隔区域，默认不显示。
      show: true,
      areaStyle: { // 分隔区域的样式设置。
        color: ['rgba(255,255,255,0)', 'rgba(255,255,255,0)'], // 分隔区域颜色。分隔区域会按数组中颜色的顺序依次循环设置颜色。默认是一个深浅的间隔色。
      }
    },
    axisLine: { //指向外圈文本的分隔线样式
      lineStyle: {
        color: '#153269'
      }
    },
    splitLine: {
      lineStyle: {
        color: '#113865', // 分隔线颜色
        width: 1, // 分隔线线宽
      }
    },
  },
  series: [{
    type: 'radar',
    symbolSize: 8,
    // symbol: 'angle',
    data: dataArr
  }]
});
const myColor = ['#eb2100', '#eb3600', '#d0570e', '#d0a00e', '#34da62', '#00e9db', '#00c0e9', '#0096f3', '#33CCFF', '#33FFCC'];

var colorArray = [
  {
    top: '#ffa800', //黄
    bottom: 'rgba(11,42,84,.3)'
  }, {
    top: '#1ace4a', //绿
    bottom: 'rgba(11,42,84, 0.3)'
  },
  {
    top: '#4bf3ff', //蓝
    bottom: 'rgba(11,42,84,.3)'
  }, {
    top: '#4f9aff', //深蓝
    bottom: 'rgba(11,42,84,.3)'
  },
  {
    top: '#b250ff', //粉
    bottom: 'rgba(11,42,84,.3)'
  }
]
const option3 = ref({
  backgroundColor: '#040D21',
  tooltip: {
    show: true,
    formatter: "{b}:{c}"
  },
  grid: {
    left: '5%',
    top: '12%',
    right: '1%',
    bottom: '8%',
    containLabel: true
  },

  xAxis: {
    type: 'value',
    show: false,
    position: 'top',
    axisTick: {
      show: false
    },
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff',
      }
    },
    splitLine: {
      show: false
    },
  },
  yAxis: [{
    type: 'category',
    axisTick: {
      show: false,
      alignWithLabel: false,
      length: 5,

    },
    "splitLine": { //网格线
      "show": false
    },
    inverse: 'true', //排序
    axisLine: {
      show: false,
      lineStyle: {
        color: '#fff',
      }
    },
    data: ['first', 'two', 'three', 'four', 'five']
  }

  ],
  series: [{
    name: '能耗值',
    type: 'bar',
    label: {
      normal: {
        show: true,
        position: 'right',
        formatter: '{c}',
        textStyle: {
          color: 'white' //color of value
        }
      }
    },
    itemStyle: {
      normal: {
        show: true,
        color: function (params) {
          let num = colorArray.length;
          return {
            type: 'linear',
            colorStops: [{
              offset: 0,
              color: colorArray[params.dataIndex % num].bottom
            }, {
              offset: 1,
              color: colorArray[params.dataIndex % num].top
            }, {
              offset: 0,
              color: colorArray[params.dataIndex % num].bottom
            }, {
              offset: 1,
              color: colorArray[params.dataIndex % num].top
            }, {
              offset: 0,
              color: colorArray[params.dataIndex % num].bottom
            }, {
              offset: 1,
              color: colorArray[params.dataIndex % num].top
            }, {
              offset: 0,
              color: colorArray[params.dataIndex % num].bottom
            }, {
              offset: 1,
              color: colorArray[params.dataIndex % num].top
            }, {
              offset: 0,
              color: colorArray[params.dataIndex % num].bottom
            }, {
              offset: 1,
              color: colorArray[params.dataIndex % num].top
            }, {
              offset: 0,
              color: colorArray[params.dataIndex % num].bottom
            }, {
              offset: 1,
              color: colorArray[params.dataIndex % num].top
            }],
            //globalCoord: false
          }
        },
        barBorderRadius: 70,
        borderWidth: 0,
        borderColor: '#333',
      }
    },
    barGap: '0%',
    barCategoryGap: '50%',
    data: [60, 132, 89, 134, 60]
  }

  ]
})
let data = {
  "chart": [{
    month: "1月",
    value: 138,
    ratio: 14.89
  },

  {
    month: "2月",
    value: 114,
    ratio: 79.49
  },

  {
    month: "3月",
    value: 714,
    ratio: 75.8
  },

  {
    month: "4月",
    value: 442,
    ratio: 19.8
  },

  {
    month: "5月",
    value: 622,
    ratio: 44.5
  },


  {
    month: "6月",
    value: 528,
    ratio: 87.3
  }

  ]
}


let xAxisMonth = [],
  barData = [],
  lineData = [];
for (let i = 0; i < data.chart.length; i++) {
  xAxisMonth.push(data.chart[i].month);
  barData.push({
    "name": xAxisMonth[i],
    "value": data.chart[i].value
  });
  lineData.push({
    "name": xAxisMonth[i],
    "value": data.chart[i].ratio
  });
}
const option5 = ref({
  backgroundColor: "#040D21",
  title: '',
  grid: {
    top: '24%',
    left: '7%',
    bottom: '6%',
    containLabel: true
  },
  tooltip: {
    trigger: 'axis',
    axisPointer: {
      type: 'none'
    },
    formatter: function (params) {
      return params[0]["data"].name + "<br/>" + '训练人次: ' + params[1]["data"].value + "<br/>" + '合格率: ' + params[0]["data"].value;
    }
  },
  xAxis: [{
    type: 'category',
    show: false,
    data: ['3月', '4月', '5月', '6月', '7月', '8月'],
    axisLabel: {
      textStyle: {
        color: '#b6b5ab'
      }
    }
  },
  {
    type: 'category',
    position: "bottom",
    data: xAxisMonth,
    boundaryGap: true,
    // offset: 40,
    axisTick: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisLabel: {
      textStyle: {
        color: '#b6b5ab'
      }
    }
  }

  ],
  yAxis: [{
    show: true,
    offset: 52,
    splitLine: {
      show: false,
      lineStyle: {
        color: "rgba(255,255,255,0.2)"
      }
    },
    axisTick: {
      show: false
    },
    axisLine: {
      show: true
    },
    axisLabel: {
      show: true,
      color: '#b6b5ab'
    }
  }, {
    show: false,
    type: "value",
    name: "合格率(%)",
    nameTextStyle: {
      color: '#ccc'
    },
    axisLabel: {
      color: '#ccc'
    },
    splitLine: {
      show: false
    },
    axisLine: {
      show: false
    },
    axisTick: {
      show: false
    }
  }],
  color: ['#e54035'],
  series: [{
    name: '训练人次',
    type: 'pictorialBar',
    xAxisIndex: 1,
    barCategoryGap: '-80%',
    // barCategoryGap: '-5%',
    symbol: 'path://d="M150 50 L130 130 L170 130  Z"',
    itemStyle: {
      normal: {
        color: function (params) {
          let colorList = [
            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)',
            'rgba(13,177,205,0.8)', 'rgba(29,103,182,0.6)'
          ];
          return colorList[params.dataIndex];
        }
      },
      emphasis: {
        opacity: 1
      }
    },
    data: barData,
  },
  {
    symbol: 'image://data:image/png;base64,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',
    symbolSize: 42,
    name: "完成率",
    type: "line",
    yAxisIndex: 1,
    data: lineData,
    itemStyle: {
      normal: {
        borderWidth: 5,
        color: {
          colorStops: [{
            offset: 0,
            color: '#821eff'
          },

          {
            offset: 1,
            color: '#204fff'
          }
          ],
        }
      }
    }
  }
  ]
})
const option6 = ref({
  backgroundColor: '#040D21',
  xAxis: {
    data: ['涉恐人员', '涉稳人员', '涉毒人员', '在逃人员', '刑事犯罪\n前科、劣迹人员', '肇事肇祸\n精神病人', '重点上访\n人员'],
    axisLine: {
      lineStyle: {
        color: '#0177d4'
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 14
    }
  },
  yAxis: {
    name: "（人）",
    nameTextStyle: {
      color: '#fff',
      fontSize: 16
    },
    axisLine: {
      lineStyle: {
        color: '#0177d4'
      }
    },
    axisLabel: {
      color: '#fff',
      fontSize: 16
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
    data: [254, 3254, 1654, 2454, 4757, 2011, 1211]
  }]
})
const option7 = ref({
  backgroundColor: '#040D21',
  grid: {
    left: '12%',
    top: '5%',
    bottom: '12%',
    right: '8%'
  },
  xAxis: {
    data: ['驯鹿', '火箭', '飞机', '高铁', '轮船', '汽车', '跑步', '步行',],
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
    data: [123, 60, 25, 18, 12, 9, 2, 1]
  }]
})
var value8 = [0.40,0.50,0.60,0.72,0.88];
const option8 = ref({
            backgroundColor:"#040D21",
            grid: {
                top: '15%',
                left: '5%',
                right: '15%',
                bottom: '13%'
            },
            tooltip: {
                show: false
            },
            xAxis: {
                type: 'value',
                min: 0,
                max:1,
                axisLine: {
                    show: false,
                    lineStyle: {
                        color: '#ffffff',
                        width: 1
                    },
                },
                splitLine: {
                    show: false,
                    lineStyle: {
                        color: 'rgba(96,118,173,0.3)'
                    }
                },
                axisLabel: {
                    show: false,
                },
                axisTick: {
                    show: false,
                }
            },
            yAxis: {
                //show: false,
                type: 'category',
                splitLine: {
                    show: false,
                },
                axisLine: {
                    show: false
                },
                axisLabel: {
                    show: true,
                    interval: 0,
                    margin: 0,
                    align: 'left',
                    padding: [-50, 0, 0, 0],
                    textStyle: {
                        color: '#ffffff',
                        fontSize: 16
                    }
                },
                axisTick: {
                    show: false
                },
                data : ['王丹丹', '翟凯乐', '王佳', '刘丽','王晓娜']
            },
            series: [{
                //真实数值条形图
                name: "真实值",
                type: 'bar', //pictorialBar
                barWidth: '30%',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: {
                            x: 0,
                            y: 0,
                            x2: 1,
                            y2: 0,
                            colorStops: [{
                                offset: 0,
                                color: '#052a32'
                            }, {
                                offset: 1,
                                color: '#00ffe9'
                            }]
                        }
                    },
                    barBorderRadius: 10
                },
                label: {
                    show: false,
                },
                data : value8,
                z: 1
            }, {
                //辅助方格图形
                name: "辅助值",
                type: 'pictorialBar',
                barWidth: '32%',
                symbol: 'rect',
                symbolRepeat: 'true',
                symbolMargin: '80%',
                symbolSize: ['20%', '100%'],
                symbolOffset: ['150%', '0%'],
                symbolRepeat: true,
                itemStyle: {
                    normal: {
                        color: 'rgba(10,16,30,1)'
                    },
                    barBorderRadius: 10
                },
                label: {
                    normal: {
                        color: '#fff',
                        show: false,
                        position: ['100%', '10%'],
                        fontSize: 18,
                        formatter: function(params) {
                            console.info(params);
                            return ' ' + (value[params.dataIndex]*100).toFixed(2) + '%';
                        }
                    }
                },
                data : [1,1,1,1,1],
                z: 2
            },{
                //辅助背景图形
                name: "背景条",
                type: 'bar', //pictorialBar
                barWidth: '30%',
                barGap : '-100%',
                itemStyle: {
                    normal: {
                        borderWidth: 0,
                        color: '#052a32'
                    },
                    barBorderRadius: 10
                },
                data : [1,1,1,1,1],
                z: 0
            },]
        })
const handleFullScreen = () => {
  let element = viewWrapRef.value;
  // 判断是否已经是全屏
  // 如果是全屏，退出
  if (fullscreen.value) {
    isFullscreen.value = false;
    if (document.exitFullscreen) {
      document.exitFullscreen();
    } else if (document.webkitCancelFullScreen) {
      document.webkitCancelFullScreen();
    } else if (document.mozCancelFullScreen) {
      document.mozCancelFullScreen();
    } else if (document.msExitFullscreen) {
      document.msExitFullscreen();
    }
  } else {
    // 否则，进入全屏
    isFullscreen.value = true;
    if (element.requestFullscreen) {
      element.requestFullscreen();
    } else if (element.webkitRequestFullScreen) {
      element.webkitRequestFullScreen();
    } else if (element.mozRequestFullScreen) {
      element.mozRequestFullScreen();
    } else if (element.msRequestFullscreen) {
      // IE11
      element.msRequestFullscreen();
    }
  }
  // 改变当前全屏状态
  fullscreen.value = !fullscreen.value;
}
const getScale = () => {
  let ww, wh, wiw = window.innerWidth - 60, wih = window.innerHeight;
  const currentRate = parseFloat((wiw / wih).toFixed(5));

  if (currentRate > baseProportion) {
    // 表示更宽
    ww = ((wih * baseProportion) / baseWidth).toFixed(5);
    wh = (wih / baseHeight).toFixed(5);
  } else {
    // 表示更高
    wh = (wiw / baseProportion / baseHeight).toFixed(5);
    ww = (wiw / baseWidth).toFixed(5);
  }
  return `${ww},${wh}`;
}
const setScale = () => {
  scale.value = getScale();
  if (viewWrapRef.value) {
    viewWrapRef.value.style.setProperty("--scale", scale.value);
  }
}
onMounted(() => {
  setScale()
})


</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background-color:#141731;
  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 26px;
    color:#fff;
    background: url(./assets/header/top.png) ;
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;
  }

  .graph-wrap {
    width: 100%;
    padding: 10px;
    height: calc(100% - 60px);
    display: grid;
    grid-template-columns: 3fr 4fr 3fr;
    grid-template-rows: repeat(3, 1fr);
    grid-gap: 10px;
    //grid 布局合并单元格
    grid-template-areas: "a b c"
      "d b e"
      "f g h";

    // div {
    //   border: 1px solid #ccc;
    // }

    .graph-top-center {
      grid-area: b;
    }
  }
}
</style>
