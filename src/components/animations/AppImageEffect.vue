<template>
  <div class="quote-wrap">
    <svg class="distort" width="350" height="450" viewBox="0 0 350 450">
      <filter id="distortionFilter">
        <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feTurbulence -->
        <feTurbulence 
          type="fractalNoise" 
          baseFrequency="0.1" 
          numOctaves="5" 
          seed="2" 
          stitchTiles="noStitch" 
          x="0%" y="0%" 
          width="100%" height="100%" 
          result="noise"
        />
        <!-- https://developer.mozilla.org/en-US/docs/Web/SVG/Element/feDisplacementMap -->
        <feDisplacementMap 
          in="SourceGraphic" 
          in2="noise" 
          scale="0" 
          xChannelSelector="R" 
          yChannelSelector="B" 
          x="0%" y="0%" 
          width="100%" height="100%" 
          filterUnits="userSpaceOnUse"
        />
      </filter>
      <g filter="url(#distortionFilter)">
        <image class="distort__img" x="50" y="50" :xlink:href="`${require('@/assets/images/1.jpg')}`" height="350" width="250"/>
        <image class="distort__img" x="50" y="50" :xlink:href="`${require('@/assets/images/2.jpg')}`" height="350" width="250"/>
        <image class="distort__img" x="50" y="50" :xlink:href="`${require('@/assets/images/3.jpg')}`" height="350" width="250"/>
        <image class="distort__img" x="50" y="50" :xlink:href="`${require('@/assets/images/4.jpg')}`" height="350" width="250"/>
      </g>
    </svg>  
    <blockquote class="quote">
      Lorem Ipsum
      <a href="#" class="quote__link">Here</a> 
      Lorem
      <a href="#" class="quote__link">Here</a> 
      Ipsum Lorem
      <a href="#" class="quote__link">Here</a> 
      Lorem
      <a href="#" class="quote__link">Here</a> 
      Ipsum
    </blockquote>
  </div>
</template>
<script>
  import { gsap } from "gsap";
  import charming from "charming";
  import { onMounted } from "vue";

  export default {
    name: 'AppImageEffect',
    setup() {
      const lineEq = (y2, y1, x2, x1, currentVal) => {
          // y = mx + b 
          var m = (y2 - y1) / (x2 - x1), b = y1 - m * x1;
          return m * currentVal + b;
      };

      const lerp = (a,b,n) => (1 - n) * a + n * b;

      const distance = (x1,x2,y1,y2) => {
          var a = x1 - x2;
          var b = y1 - y2;
          return Math.hypot(a,b);
      };

      const getMousePos = (event) => {
        let posx = 0;
        let posy = 0;
        if(!event){
          event = window.event;
        }
        if(event.pageX || event.pageY) {
          posx = event.pageX;
          posy = event.pageY;
        }else if(event.clientX || event.clientY){
          posx = event.clientX + document.body.scrollLeft + document.documentElement.scrollLeft;
          posy = event.clientY + document.body.scrollTop + document.documentElement.scrollTop;
        }
        console.log(event);
        return { x : posx, y : posy }
      }
      let windowSize;
      const calcWindowSize = () => windowSize = {
        width: document.body.clientWidth, height: document.body.clientHeight
      }
      calcWindowSize();
      

      class Menu{
        constructor() {
          this.elem = {
            svg: document.querySelector('svg.distort'),
            text: document.querySelector('blockquote.quote'),
            feDisplacementMapEl: document.querySelector('feDisplacementMap')
          };
          //nodeList에 속한 값만 가져오기
          this.elem.imgs = [...this.elem.svg.querySelectorAll('.distort__img')];
          this.elem.quoteLinks = [...this.elem.text.querySelectorAll('.quote__link')];
        
          this.mousePos = {
            x: windowSize.width / 2,
            y: windowSize.height / 2,
          };
          this.lastMousePos = {
            translation: {
              x: windowSize.width / 2,
              y: windowSize.height / 2,
            },
            displacement: {x: 0, y: 0}
          };

          this.dmScale = 0;

          this.current = -1;

          this.initEvents();
          //다음 렌더링에서 호출할 콜백함수를 인자로 받음
          requestAnimationFrame(() => this.render());
        }
        initEvents() {
          window.addEventListener('mousemove', event => this.mousePos = getMousePos(event));
          //text효과
          this.elem.quoteLinks.forEach((item, index) => {
            charming(item);
            const letters = [...item.querySelectorAll('span')];
            letters.forEach(el => el.style.display = 'inline-block');

            const mouseenterFn = () => {
              this.current = index;
              gsap.to(
                this.elem.imgs[index],
                {
                  duration: 0.5,
                  ease: "power4.out",
                  opacity: 1
                }
              );
              gsap.fromTo(
                letters, 
                {
                  opacity: 1, 
                  y: 0
                },
                {
                  duration: 0.2,
                  ease: "sine.inOut",
                  y: this.lastMousePos.translation.x < this.mousePos.x ? 30 : -30,
                  opacity: 0,
                  yoyo: true,
                  yoyoEase: "expo.out",
                  repeat: 1,
                  stagger: {
                    grid: [1,letters.length-1],
                    from: this.lastMousePos.translation.x < this.mousePos.x ? 'start' : 'end',
                    amount: 0.12
                  }
                }
              );
            }

            const mouseleaveFn = () => {
              gsap.to(
                this.elem.imgs[index],
                {
                  duration: 0.5,
                  ease: 'power4.easeOut', 
                  opacity: 0
                }
              )
            }

            item.addEventListener('mouseenter', mouseenterFn);
            item.addEventListener('mouseleave', mouseleaveFn);
          });
        }
        render(){
          this.lastMousePos.translation.x = lerp(this.lastMousePos.translation.x, this.mousePos.x, 0.15);
          this.lastMousePos.translation.y = lerp(this.lastMousePos.translation.y, this.mousePos.y, 0.15);
          this.elem.svg.style.transform = `translateX(${(this.lastMousePos.translation.x-windowSize.width/2)}px) translateY(${this.lastMousePos.translation.y-windowSize.height/2}px)`;

          this.lastMousePos.displacement.x = lerp(this.lastMousePos.displacement.x, this.mousePos.x, 0.07);
          this.lastMousePos.displacement.y = lerp(this.lastMousePos.displacement.y, this.mousePos.y, 0.07);
          const mouseDistance = distance(this.lastMousePos.displacement.x, this.mousePos.x, this.lastMousePos.displacement.y, this.mousePos.y);
          this.dmScale = Math.min(lineEq(50, 0, 100, 0, mouseDistance), 50);   
          this.elem.feDisplacementMapEl.scale.baseVal = this.dmScale;

          requestAnimationFrame(() => this.render());
        }
      }
      
      
      onMounted(()=>{
        window.addEventListener('resize', calcWindowSize);
        new Menu();
      });
      return {
        lineEq,
        lerp,
        distance,
        getMousePos,
        windowSize,
        calcWindowSize,
      }
    }
  }
</script>
<style lang="scss" scoped>
  .quote-wrap{
    --color-text: #f4f4f1;
    --color-bg: #151515;
    width: 100%; min-height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    font-family: $prata;
    color: var(--color-text);
    //background-color: var(--color-bg);
    position: fixed; top: 0; left: 0;
    background: url(../../assets/images/dark-noise-background.jpg) left top/100% 100% no-repeat;
    &::after{
      content: '';
      position: absolute; top: -40%; left: -40%;
      width: 180%; height: 180%;
      pointer-events: none;
      will-change: transform;
      -webkit-transition: opacity 0.6s ease-out;
      transition: opacity 0.6s ease-out;
      -webkit-animation: noiseAnimation 1s steps(4) infinite;
      animation: noiseAnimation 1s steps(4) infinite;
      background-image: url(../../assets/images/noise.png);
    }
  }
  @keyframes noiseAnimation {
    0% {
      transform:translate(0,0);
    }
    10% {
      transform:translate(-5%,-5%);
    }
    20% {
      transform:translate(-10%,5%);
    }
    30% {
      transform:translate(5%,-10%);
    }
    40% {
      transform:translate(-5%,15%);
    }
    50% {
      transform:translate(-10%,5%);
    }
    60% {
      transform:translate(15%,0);
    }
    70% {
      transform:translate(0,10%);
    }
    80% {
      transform:translate(-15%,0);
    }
    90% {
      transform:translate(10%,5%);
    }
    100% {
      transform: translate(5%,0);
    }
  }
  .quote{
    display: block;
    width: 80%;
    font-size: 6vw;
    text-align: center;
    line-height: 1.4;
    &__link {
      position: relative;
      color: var(--color-text);
      display: inline-block;
      &::after {
        content: '';
        position: absolute; top: calc(100% - 0.25rem);left: 0;
        width: 100%; height: 5px; 
        border: {
          width: 1px 0;
          style: solid;
        } 
      }
    }
  }
  .distort {
    position: absolute;
    pointer-events: none;
    will-change: transform;
    &__img {
      opacity: 0;
    }
  }
</style>