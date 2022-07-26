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
    name: 'AppDesignSkillChart',
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
          labels: ['Photoshop', 'illustrator', 'Adobe XD', 'Zeplin'],
          datasets: [
            {
              data: [90, 70, 80, 90],
              backgroundColor: [
                '#F4BFBF',
                '#FFD9C0',
                '#FAF0D7',
                '#B7E5DD',
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