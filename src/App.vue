<template>
  <div class="wrap">
    <div class="header">

    </div>
    <div class="graph-wrap">
      <div v-for="(item, index) in optionsMap" :key="index" :class="item.class">
        <v-chart :option="item.option" v-if="item.option" autoresize />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { use } from 'echarts/core';
import { CanvasRenderer } from 'echarts/renderers';
import { PieChart, MapChart, EffectScatterChart, LinesChart } from 'echarts/charts';
import { TitleComponent, TooltipComponent, LegendComponent, GeoComponent } from 'echarts/components';
//引入registerMap
import { registerMap } from 'echarts';
import VChart from 'vue-echarts';

import mapJson from './options/map.json'
import option1 from './options/option1'
import option2 from './options/option2'
import option3 from './options/option3'
import option4 from './options/option4'
import option6 from './options/option6'
import option7 from './options/option7'
import option8 from './options/option8'
import option9 from './options/option9'


use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
  MapChart, EffectScatterChart, LinesChart, GeoComponent
]);
registerMap('china', mapJson)

const optionsMap = ref(
  [
    {
      class: 'graph-top-left',
      option: option1
    },
    {
      class: 'graph-top-center',
      option: option2
    },
    {
      class: 'graph-top-right',
      option: option3
    },
    {
      class: 'graph-center-left',
      option: option4
    },
    {
      class: 'graph-top-center',
      option: null
    },
    {
      class: 'graph-center-right',
      option: option6
    },
    {
      class: 'graph-bottom-left',
      option: option7
    },
    {
      class: 'graph-bottom-center',
      option: option8
    },
    {
      class: 'graph-bottom-right',
      option: option9
    }
  ]);

</script>

<style lang="scss" scoped>
.wrap {
  width: 100%;
  height: 100%;
  background-color: #141731;

  .header {
    width: 100%;
    height: 60px;
    line-height: 60px;
    text-align: center;
    font-size: 26px;
    font-weight: bold;
    //彩色渐变文字
    color: transparent;
    position: relative;
    background: url(./assets/header/top.png);
    background-size: 100%;
    background-position: center;
    background-repeat: no-repeat;

    &::after {
      content: '可视化总览';
      position: absolute;
      top: 0;
      left: 50%;
      transform: translateX(-50%);
      width: 200px;
      height: 100%;
      background: -webkit-linear-gradient(120deg, #bd34fe, #41d1ff);
      -webkit-background-clip: text;
      background-clip: text;
      -webkit-text-fill-color: transparent;

    }
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

    div {
      box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.2);
    }

    .graph-top-center {
      grid-area: b;
    }
  }
}
</style>
