<template>
    <vue3-chart-js v-bind='{ ...barChart }' />
</template>
<script>
  //chart.js
  import Vue3ChartJs from '@j-t-mcc/vue3-chartjs';
  import Chart from 'chart.js/auto';
  import ChartDataLabels from 'chartjs-plugin-datalabels';

  Chart.register(ChartDataLabels);

  export default {
    name: 'AppCodingSkillChart',
    components: {
      Vue3ChartJs,
    },
    setup() {
      const barChart = {
        type: 'bar',
        options: {
          indexAxis: 'y',
          min: 0,
          max: 100,
          responsive: true,
          maintainAspectRatio: false,
          showTooltips: true,
          barThickness: 10,
          plugins: {
            legend: {
              position: 'none',
            },
            datalabels: {
              display: true,
              align: 'right',
              anchor: 'end',
              formatter: function(value) {
                return `${value}%`
              }
            },
          },
          barPercentage: 0.9,
          categoryPercentage: 0.5,
          layout: {
            padding: {
              right: 60,
            }
          },
          scales: {
            x: {
              beginAtZero: true,
              max: 100
            }
          }
        },
        
        data: {
          labels: ['Javascript', 'vue.js', 'jQuery', 'Html5', 'Css3', 'Scss', 'Bootstrap'],
          datasets: [
            {
              data: [75, 55, 80, 90, 90, 70, 60],
              backgroundColor: [
                '#F4BFBF',
                '#FFD9C0',
                '#FAF0D7',
                '#B7E5DD',
                '#8CC0DE',
                '#B1BCE6',
                '#F1C6E7'
              ],
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