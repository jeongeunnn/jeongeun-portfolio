<template>
  <vue3-chart-js v-bind="{ ...barChart }" />
</template>

<script>
  //chart.js
  import Vue3ChartJs from "@j-t-mcc/vue3-chartjs";
  import Chart from 'chart.js/auto';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  Chart.register(ChartDataLabels);

  export default {
    name: 'AppMbtiChart',
    components: {
      Vue3ChartJs,
    },
    setup() {
      const barChart = {
        type: "radar",
        options: {
          min: 0,
          max: 100,
          responsive: true,
          maintainAspectRatio: false,
          plugins: {
            legend: {
              position: "bottom",
              align: 'end',
            },
            datalabels: {
              formatter: function(value) {
                return `${value}%`
              }
            },
          },
          scale: {
            ticks: {
              display: false,
              maxTicksLimit: 3,
              font: {
                size: 0
              }
            },
          },
        },
        data: {
          labels: [
            '외향형',
            '직관형',
            '사고형',
            '계획형',
            '확신형',

            '내향형',
            '현실주의형',
            '감정형',
            '탐색형',
            '민감형',
          ],
          datasets: [
            {
              label: 'ISTJ',
              data: [38, 48, 61, 54, 57, 62, 52, 39, 46, 43],
              backgroundColor: [
                'rgba(255, 222, 250, 0.5)',
              ],
              borderColor: [
                'rgb(255, 222, 250)',
              ],
              borderWidth: 1
            },
          ],
        },
      };

      return {
        barChart,
      };
    },
  };
</script>

<style lang="scss" scoped>

</style>