let colorArr = [
  "#218de0",
  "#01cbb3",
  "#85e647",
  "#5d5cda",
  "#05c5b0",
  "#c29927",
];
let colorAlpha = [
  "rgba(60,170,211,0.05)",
  "rgba(1,203,179,0.05)",
  "rgba(133,230,71,0.05)",
  "rgba(93,92,218,0.05)",
  "rgba(5,197,176,0.05)",
  "rgba(194,153,39,0.05)",
];
const valueArr = [
  {
    value: 23,
    name: "生活区",
  },
  {
    value: 27,
    name: "娱乐区",
  },
  {
    value: 17,
    name: "游戏区",

  },{
    value: 13,
    name: "科技区",
  },{
    value: 20,
    name: "音乐区",
  }
];
const data = valueArr.map((item,index) => {
  return {
    value: item.value,
    name: item.name,
    itemStyle: {
      borderColor: colorArr[index],
      borderWidth: 2,
      shadowBlur: 20,
      shadowColor: colorArr[index],
      shadowOffsetx: 25,
      shadowOffsety: 20,
      color: colorAlpha[index],
    },
  };
});
export default {
  title: {
    text: "B站UP主区域分布",
    left: "center",
    textStyle: {
      color: "#fff",
      fontSize: 14,
      fontWeight: "normal",
      textAlign: "center",
    },
  },
  backgroundColor: "#040D21",
  tooltip: {
    trigger: "item",
    formatter: "{b} : {c} ({d}%)",
  },
  legend: {
    show: false,
  },
  polar: {},
  angleAxis: {
    interval: 1,
    type: "category",
    data: [],
    z: 10,
    axisLine: {
      show: false,
      lineStyle: {
        color: "#0B4A6B",
        width: 1,
        type: "solid",
      },
    },
    axisLabel: {
      interval: 0,
      show: true,
      color: "#0B4A6B",
      margin: 4,
      fontSize: 12,
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
        type: "solid",
      },
    },
    axisLabel: {
      formatter: "{value} %",
      show: false,
      padding: [0, 0, 20, 0],
      color: "#0B3E5E",
      fontSize: 12,
    },
    splitLine: {
      lineStyle: {
        color: "#07385e",
        width: 2,
        type: "dashed",
      },
    },
  },
  calculable: true,
  series: [
    {
      stack: "a",
      type: "pie",
      radius: "80%",
      roseType: "radius",
      zlevel: 10,
      startAngle: 100,
      label: {
        normal: {
          formatter: ["{b|{b}}", "{d|{d}%}"].join("\n"),
          rich: {
            b: {
              color: "#3bd2fe",
              fontSize: 12,
              lineHeight: 20,
            },
            d: {
              color: "#d0fffc",
              fontSize: 12,
              height: 20,
            },
          },
        },
      },
      labelLine: {
        normal: {
          show: true,
          length: 10,
          length2: 45,
          lineStyle: {
            color: "#0096b1",
          },
        },
        emphasis: {
          show: false,
        },
      },
      data
    },
  ],
};
