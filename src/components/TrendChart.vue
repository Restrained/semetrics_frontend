<template>
  <div ref="chartRef" class="chart"></div>
</template>

<script setup>
import * as echarts from 'echarts'
import { onMounted, ref, watch } from 'vue'

const chartRef = ref(null)

const props = defineProps({
  // 示例格式：
  // [
  //   { year: 2020, clients: 50, partners: 10, revenue: 100 },
  //   { year: 2021, clients: 80, partners: 20, revenue: 180 },
  //   ...
  // ]
  data: Array
})

let chartInstance = null

onMounted(() => {
  chartInstance = echarts.init(chartRef.value)
  renderChart()
})

watch(() => props.data, renderChart)

function renderChart() {
  if (!chartInstance || !props.data?.length) return

  const years = props.data.map(item => item.year)
  const clientCounts = props.data.map(item => item.clients || 0)
  const partnerCounts = props.data.map(item => item.partners || 0)
  const revenue = props.data.map(item => item.revenue || 0)

  const option = {
    title: {
      text: '公司业务发展趋势'
    },
    tooltip: {
      trigger: 'axis'
    },
    legend: {
      data: ['新增客户数', '新增合作伙伴数', '年度营收（万元）']
    },
    xAxis: {
      type: 'category',
      data: years
    },
    yAxis: {
      type: 'value'
    },
    series: [
      {
        name: '新增客户数',
        type: 'line',
        data: clientCounts,
        smooth: true
      },
      {
        name: '新增合作伙伴数',
        type: 'line',
        data: partnerCounts,
        smooth: true
      },
      {
        name: '年度营收（万元）',
        type: 'line',
        data: revenue,
        smooth: true
      }
    ]
  }

  chartInstance.setOption(option)
}
</script>

<style scoped>
.chart {
  width: 100%;
  height: 400px;
  margin-top: 2rem;
}
</style>
