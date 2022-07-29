<template>
  <div class="menu-wrap">
    <ul class="menu">
      <li class="menu__item" v-for="item in num" :key="item" :id="`menu${item}`">
        <a class="menu__item-link" href="#">Mouseenter&Mouseleave</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner" aria-hidden="true">
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Lorem Ipsum</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
            </div>
          </div>
        </div>
      </li>
    </ul>
  </div>
</template>
<script>
  import { onMounted } from "vue";
  import { gsap } from "gsap";

  export default {
    name: 'AppHover',
    data() {
      return {
        num: 5,
      }
    },
    mounted() {
      this.fadeIn();
    },
    methods: {
      fadeIn(){
        for (let i = 1; i < this.num +1 ; i++) {
          const id = `#menu${i} > a`;
          const delay = 0.25 * i;
          gsap.fromTo(
            id,
            {
              opacity: 0,
              y: "100%",
            },
            {
              duration: 2,
              delay,
              opacity: 1,
              y: 0,
              ease: "power2.inOut",
            }
          );
        }
      },
    },
    setup() {
      const closestEdge = (x,y,w,h) => {
        const topEdgeDist = distMetric(x,y,w/2,0);
        const bottomEdgeDist = distMetric(x,y,w/2,h);
        const min = Math.min(topEdgeDist,bottomEdgeDist);
        return min === topEdgeDist ? 'top' : 'bottom';
      }
      const distMetric = (x,y,x2,y2) => {
        const xDiff = x - x2;
        const yDiff = y - y2;
        const a = (xDiff * xDiff) + (yDiff * yDiff);
        console.log(x,y,x2,y2,a);
        return (xDiff * xDiff) + (yDiff * yDiff);
      }
      class Menu{
        constructor(el){
          //.menu
          this.menu = {el: el};
          //ul(menu) > li(.menu__item)
          this.menu.menuItems = this.menu.el.querySelectorAll('.menu__item');
          this.menuItems = [];
          this.menu.menuItems.forEach(menuItem => this.menuItems.push(new MenuItem(menuItem)));
        }
      }
      class MenuItem{
        constructor(el){
          //.menu__item
          this.menuItem = {el: el};
          //.menu__item-link
          this.menuItem.link = this.menuItem.el.querySelector('.menu__item-link');
          //.marquee
          this.menuItem.marquee = this.menuItem.el.querySelector('.marquee');
          this.menuItem.marqueeInner = this.menuItem.el.querySelector('.marquee__inner-wrap');

          this.animationDefaults = { duration: 0.6, ease: 'expo'};

          this.inintEvents();
        }
        inintEvents(){
          this.onMouseEnterFn = event => this.mouseEnter(event);
          this.menuItem.link.addEventListener('mouseenter', this.onMouseEnterFn);
          this.onMouseLeaveFn = event => this.mouseLeave(event);
          this.menuItem.link.addEventListener('mouseleave', this.onMouseLeaveFn);
        }
        mouseEnter(event) {
          const edge = this.findClosestEdge(event);

          gsap.timeline({defaults: this.animationDefaults})
          .set(this.menuItem.marquee, {y: edge === 'top' ? '-101%' : '101%'}, 0)
          .set(this.menuItem.marqueeInner, {y: edge === 'top' ? '101%' : '-101%'}, 0)
          .to([this.menuItem.marquee, this.menuItem.marqueeInner], {y: '0%'}, 0);
        }
        mouseLeave(event){
          const edge = this.findClosestEdge(event);
            
          gsap.timeline({defaults: this.animationDefaults})
          .to(this.menuItem.marquee, {y: edge === 'top' ? '-101%' : '101%'}, 0)
          .to(this.menuItem.marqueeInner, {y: edge === 'top' ? '101%' : '-101%'}, 0);
        }
        findClosestEdge(event) {
          const x = event.pageX - this.menuItem.el.offsetLeft;
          const y = event.pageY - this.menuItem.el.offsetTop;
          return closestEdge(x,y,this.menuItem.el.clientWidth, this.menuItem.el.clientHeight);
        }
      }
      onMounted(()=>{
        new Menu(document.querySelector('.menu'));
      });
      return {
        closestEdge,
        distMetric,
        Menu, 
        MenuItem,
      }
    }
  }
</script>
<style lang="scss" scoped>
  .menu-wrap {
    --color-text: #f15c47;
    --color-bg: #1f1f4b;
    --color-link: #fff;
    --color-link-hover:  #fff;
    --color-border: ##181839;
    --marquee-bg: #f15c47;
    --marquee-text:  #fff;
    --menu-focus:  #fff;
    color: var(--color-text);
    background-color: var(--color-bg);
    font-family: $roboto;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;

    display: flex;
    flex-direction: column;
    width: 100vw; min-height: 100vh;
    position: relative;
    justify-content: center;
  }

  .menu__item {
    position: relative;
    overflow: hidden;
    text-align: center;
    overflow: hidden;
    box-shadow: 0 -1px var(--color-border);
    &:last-child {
      box-shadow: 0 1px var(--color-border), 0 -1px var(--color-border);
    }
    &-link {
      display: inline-block;
      position: relative;
      cursor: pointer;
      text-decoration: none;
      color: var(--color-text);
      position: relative; z-index: 9;
      background-color:  var(--color-bg);
      &:focus,&:focus-visible {
        color: var(--menu-focus);
      }
      &:focus:not(:focus-visible) {
        color: var(--color-link);
      }
      &:hover{
        ~ .marquee {
          z-index: 99;
        }
      }
    }
  }

  .marquee {
    position: absolute; top: 0;left: 0;
    width: 100%; height: 100%;
    overflow: hidden;
    pointer-events: none;
    background: var(--marquee-bg);
    transform: translate3d(0,101%,0);
    &__inner-wrap {
      height: 100%;
      width: 100%;
      transform: translate3d(0,-101%,0);
    }
    &__inner {
      width: fit-content; height: 100%;
      display: flex;
      align-items: center;
      position: relative;
      animation: marquee 15s linear infinite;
      will-change: transform;
    }
  }

  @keyframes marquee {
    100% {
      transform: translate3d(-50%, 0, 0);
    }
  }

  .menu__item-link,
  .marquee span {
    display: block;
    white-space: nowrap;
    font: {
      size: 6vw;
      weight: 600;
    }
    line-height: 1.2;
    text-transform: uppercase;
  }

  .marquee span {
    text-align: center;
    color: var(--marquee-text);
    font-weight: 400;
  }

  .marquee__img {
    width: 15vw; height: 70%;
    margin: 0 2vw;
    border-radius: 5vw;
    background: {
      size: cover;
      position: 50% 50%;
    };
  }
</style>