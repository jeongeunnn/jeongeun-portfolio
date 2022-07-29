<template>
    <canvas id="stars"></canvas>
    <div id="text">
      <p class="word mouse">
        <span>M</span>
        <span>o</span>
        <span>u</span>
        <span>s</span>
        <span>e</span>
      </p>
      <p class="word overhere">
        <span>h</span>
        <span>o</span>
        <span>v</span>
        <span>e</span>
        <span>r</span>
      </p>
    </div>
</template>
<script>
    import { onMounted } from "vue";

    export default {
      name: 'AppParticleEffect',
      setup() {
        onMounted(()=>{
          const canvas = document.querySelector('#stars');
          const ctx = canvas.getContext('2d');

          let screen, dotsElements, dotsParams = { speed: 5, number: 300, extinction: 4 };
          
          const PI2 = Math.PI * 2;

          class Dot{
            constructor() {
              this.x = Math.random() * canvas.width;
              this.y = Math.random() * canvas.height;
              this.z = Math.random() * canvas.width;

              this.move = function() {
                this.z -= dotsParams.speed;
                if (this.z <= 0) {
                    this.z = canvas.width;
                }
              }

              this.show = function() {
                let x, y, rad, opacity;
                x = (this.x - screen.c[0]) * (canvas.width / this.z);
                x = x + screen.c[0];
                y = (this.y - screen.c[1]) * (canvas.width / this.z);
                y = y + screen.c[1];
                rad = canvas.width / this.z;
                opacity = (rad > dotsParams.extinction) ? 1.5 * (2 - rad / dotsParams.extinction) : 1;
                
                ctx.beginPath();
                ctx.fillStyle = "rgba(255, 255, 255, " + opacity + ")";
                ctx.arc(x, y, rad, 0, PI2);
                ctx.fill();
              }
            }

            

          }
          class App {
            constructor() {
              

              this.ratio = (window.devicePixelRatio > 1) ? 2 : 1;

              dotsElements = [];

              window.addEventListener('resize', this.resize.bind(this), {
                once: false,
                passive: false,
                capture: false,
              });
              this.resize();

              window.requestAnimationFrame(this.animate.bind(this));
            }

            resize() {
              screen = {
                  w: document.body.clientWidth,
                  h: document.body.clientHeight,
                  c: [ document.body.clientWidth * 0.5,document.body.clientHeight * 0.5 ]
              };
              window.cancelAnimationFrame(this.animate.bind(this));
              this.stageWidth = screen.w;
              this.stageHeight = screen.h;

              canvas.style.width = `${this.stageWidth}px`;
              canvas.style.height = `${this.stageHeight}px`;

              canvas.width = this.stageWidth * this.ratio;
              canvas.height = this.stageHeight * this.ratio;

              ctx.scale(this.ratio, this.ratio);

              this.createDots();
            }

            createDots() {
              dotsElements = [];
              for (let i = 0; i < dotsParams.number; i++) {
                const item = new Dot();
                dotsElements[i] = item;
              }
            }

            animate() {
              ctx.fillStyle = "rgb(255, 140, 140)";
              ctx.fillRect(0, 0, canvas.width, canvas.height);

              dotsElements.forEach(function (s) {
                s.show();
                s.move();
              });

              window.requestAnimationFrame(this.animate.bind(this));
            }
          }

          new App();
        });
      }
    }
</script>
<style lang="scss" scoped>
  #stars{
    position:fixed; top:0; left:0;
  }  
  #text{
    position:fixed; top:50%; left:50%;
    transform: translate(-50%, -50%);
    &:hover {
      p span {
        cursor: pointer;
        animation: smoke 1.75s ease-in forwards;
      }
    }
  }
  .word{
    opacity: 0;
    margin: 0;
    font-style: italic;
    color: $white;
    filter: blur( 0.02vmin );
    animation: fade-in 1s ease-in-out forwards;
    text-shadow: 0 0 1vw rgb(255, 93, 93), 0 0 2vw rgb(255, 93, 93);
    text-align: center;
    span {
      display: inline-block;
    }
    &.mouse{
      font: {
        size: 8vw;
        family: $prata;
        weight: 700;
      }
      margin: -10% 0 -5%;
      animation-delay: 1s;
      span {
        margin-left: -0.5vw;

        &:nth-child( 1 ) {
          animation-delay: 0.6s;
        }

        &:nth-child( 2 ) {
          animation-delay: 1s;
        }

        &:nth-child( 3 ) {
          animation-delay: 0.8s;
        }

        &:nth-child( 4 ) {
          animation-delay: 1.4s;
        }

        &:nth-child( 5 ) {
          animation-delay: 1.2s;
        }
      }
    }
    &.overhere{
      font: {
        size: 4vw;
        family: $roboto;
        weight: 100;
      }
      text-transform: uppercase;
      animation-delay: 1.5s;
      span {
        margin-left: -0.2vw;

        &:nth-child( 1 ) {
          animation-delay: 1.4s;
        }

        &:nth-child( 2 ) {
          animation-delay: 1.2s;
        }

        &:nth-child( 3 ) {
          animation-delay: 1.6s;
        }

        &:nth-child( 4 ) {
          animation-delay: 1.8s;
        }

        &:nth-child( 5 ) {
          animation-delay: 2s;
        }

        &:nth-child( 6 ) {
          animation-delay: 2.4s;
        }

        &:nth-child( 7 ) {
          animation-delay: 2.2s;
        }

        &:nth-child( 8 ) {
          animation-delay: 2.6s;
        }

        &:nth-child( 9 ) {
          animation-delay: 2.8s;
        }
      }
    }
  }
  

  @keyframes smoke {
    0% {
      transform: rotate( 0deg ) translate3d( 0% ) skew( 0deg ) scale( 1 );
      opacity: 1;
      filter: blur( 0.02vmin );
    }
    100% {
      transform: rotate( 15deg ) translate3d( 85%, -75%, 0 ) skew( -30deg ) scale( 2 );
      opacity: 0;
      filter: blur( 2.5vmin );
    }
  }

  @keyframes fade-in {
    0% {
      opacity: 0;
      transform: translate3d( -2vmin, 2vmin, 0 );
      filter: blur( 1vmin );
    }
    100% {
      opacity: 1;
      transform: translate3d( 0 );
      filter: blur( 0.02vmin );
    }
  }
</style>