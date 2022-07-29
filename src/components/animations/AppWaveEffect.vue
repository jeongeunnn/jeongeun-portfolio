<template>
  <canvas id="wave"></canvas>
</template>
<script>
  import { onMounted } from "vue";
  export default {
    name: 'AppWaveEffect',
    setup() {
      onMounted(()=>{
        class WaveGroup{
          constructor() {
            this.totalWaves = 3;
            this.numberOfPoints = 6;

            this.color = ['rgba(37, 104, 236, 0.8)', 'rgba(81, 177, 254, 0.8)','rgba(100, 219, 255, 0.8)'];

            this.wave = [];

            for (let i = 0; i < this.totalWaves; i++) {
              const wave = new Wave(
                i,
                this.numberOfPoints,
                this.color[i],
              );
              this.wave[i] = wave;
            }
          }

          resize(stageWidth, stageHeight){
            for (let i = 0; i < this.totalWaves; i++) {
              const wave = this.wave[i];
              wave.resize(stageWidth, stageHeight);
            }
          }

          draw(ctx){
            for (let i = 0; i < this.totalWaves; i++) {
              const wave = this.wave[i];
              wave.draw(ctx);
            }
          }
        }
        class Wave{
          constructor(index, numberOfPoints, color) {
            this.index = index;
            this.numberOfPoints = numberOfPoints;
            this.color = color;
            this.points = [];
            
          }

          resize(stageWidth, stageHeight){
            this.stageWidth = stageWidth;
            this.stageHeight = stageHeight;

            this.centerX = stageWidth / 2;
            this.centerY = stageHeight / 2;

            this.pointGap = this.stageWidth / (this.numberOfPoints - 1);

            this.init();
          }

          init(){
            this.points = [];
            for (let i = 0; i < this.numberOfPoints; i++) {
              const point = new Point(
                this.index + i, 
                this.pointGap * i, 
                this.centerY
              );
              this.points[i] = point;
            }
          }

          draw(ctx){
            ctx.beginPath();
            ctx.fillStyle = this.color;

            let prevX = this.points[0].x;
            let prevY = this.points[0].y;

            ctx.moveTo(prevX, prevY);

            for (let i = 0; i < this.numberOfPoints; i++) {
              const cx = (prevX + this.points[i].x) / 2;
              const cy = (prevY + this.points[i].y) / 2;

              ctx.quadraticCurveTo(prevX, prevY, cx, cy);

              prevX = this.points[i].x;
              prevY = this.points[i].y;

              if(i != 0 && i != this.numberOfPoints - 1){
                this.points[i].update();
              }
            }
            ctx.lineTo(prevX, prevY);
            ctx.lineTo(this.stageWidth, this.stageHeight);
            ctx.lineTo(0, this.stageHeight);
            ctx.lineTo(this.points[0].x, this.points[0].y);

            ctx.fill();
            ctx.closePath();
          }
        }
        class Point{
          constructor(index, x, y){
            this.x = x;
            this.y = y;
            this.fixedY = y;
            this.speed = 0.05;
            this.cur = index;
            this.max = Math.random() * 100 + 150;
          }

          update() {
            this.cur += this.speed;
            this.y = this.fixedY + Math.sin(this.cur) * this.max;
          }
        }
        class App{
          constructor(){
            this.canvas = document.querySelector('#wave');
            this.ctx = this.canvas.getContext('2d');

            window.addEventListener('resize', this.resize.bind(this), {
              once: false,
              passive: false,
              capture: false,
            });

            this.waveGroup = new WaveGroup();

            this.resize();

            window.requestAnimationFrame(this.animate.bind(this));
          }
          resize(){
            this.stageWidth = document.body.clientWidth;
            this.stageHeight = document.body.clientHeight;
            this.ratio = (window.devicePixelRatio > 1) ? 2 : 1;

            this.canvas.style.width = `${this.stageWidth}px`;
            this.canvas.style.height = `${this.stageHeight}px`;

            this.canvas.width = this.stageWidth * this.ratio;
            this.canvas.height = this. stageHeight * this.ratio;
            
            this.ctx.scale(this.ratio, this.ratio);

            this.waveGroup.resize(this.stageWidth, this.stageHeight);
          }
          animate(){
            this.ctx.clearRect(0, 0, this.stageWidth, this.stageHeight);

            this.waveGroup.draw(this.ctx);

            window.requestAnimationFrame(this.animate.bind(this));
          }
        }

        new App();
      });
    }
  }
</script>
<style lang="scss" scoped>
  #wave{
    position:fixed; top:0; left:0;
    background-color: rgb(19 14 104);
  }
</style>