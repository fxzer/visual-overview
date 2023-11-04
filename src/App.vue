<script setup lang="ts">
// 引入registerMap
import { registerMap } from 'echarts'
import VChart from 'vue-echarts'

import mapJson from './options/map.json'
import optionList from './options'

registerMap('china', mapJson as any)
</script>

<template>
  <div class="wrap">
    <div class="header" />

    <div class="graph-wrap">
      <template v-for="item, index in optionList" :key="index">
        <div v-if="item">
          <VChart v-if="item" :option="item" autoresize />
        </div>
      </template>
    </div>
  </div>
</template>

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
    grid-template-areas:
      "a b c"
      "d b e"
      "f g h";

    div {
      box-shadow: 0 0 1px 0 rgba(255, 255, 255, 0.2);

      &:nth-of-type(2) {
        grid-area: b;
      }
    }

  }
}

@media (max-width:640px) {
  .header{
    background-size: 100% 60px !important;
  }
  .graph-wrap {
    height: auto !important;
    display: flex !important;
    flex-direction: column;
    div {
      height:280px;
      width: 100%;

      &:nth-of-type(5) {
        display: none;
      }
    }

  }
}
</style>
