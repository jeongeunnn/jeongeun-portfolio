<template>
  <div class="menu-wrap">
    <nav class="menu">
      <div class="menu__item">
        <a class="menu__item-link" href="#">Guayaquil</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner" aria-hidden="true">
              <span>Frank Tower</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Dom Dom</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Santa Maria</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Big Molly</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
              <span>Frank Tower</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Dom Dom</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Santa Maria</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Big Molly</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link" href="#">Cochabamba</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner" aria-hidden="true">
              <span>Dome House</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Revellion High</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Wax Palace</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Cellar Tree</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
              <span>Dome House</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Revellion High</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Wax Palace</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Cellar Tree</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link" href="#">Montevideo</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner" aria-hidden="true">
              <span>Mia Terra</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Quest Hill</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Bean Palace</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Treehouse</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
              <span>Mia Terra</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Quest Hill</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Bean Palace</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Treehouse</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
            </div>
          </div>
        </div>
      </div>
      <div class="menu__item">
        <a class="menu__item-link" href="#">Cartagena</a>
        <div class="marquee">
          <div class="marquee__inner-wrap">
            <div class="marquee__inner" aria-hidden="true">
              <span>Tia Alta</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Quadratic Bliss</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Host Mall</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Freefall Dome</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
              <span>Tia Alta</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/1.jpg')})`}"></div>
              <span>Quadratic Bliss</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/2.jpg')})`}"></div>
              <span>Host Mall</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/3.jpg')})`}"></div>
              <span>Freefall Dome</span>
              <div class="marquee__img" :style="{'background-image':`url(${require('@/assets/images/4.jpg')})`}"></div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>
<script>
  import { onMounted } from "vue";
  import { gsap } from "gsap";

  export default {
    name: 'AppHover',
    setup() {
      onMounted(()=>{
        const closestEdge = (x,y,w,h) => {
            const topEdgeDist = distMetric(x,y,w/2,0);
            const bottomEdgeDist = distMetric(x,y,w/2,h);
            const min = Math.min(topEdgeDist,bottomEdgeDist);
            return min === topEdgeDist ? 'top' : 'bottom';
        }

        // Distance Formula
        // from https://codepen.io/johnstew/pen/zxYJZP?editors=0010
        const distMetric = (x,y,x2,y2) => {
            const xDiff = x - x2;
            const yDiff = y - y2;
            return (xDiff * xDiff) + (yDiff * yDiff);
        }

        class Menu {
          constructor(el) {
              // .menu element
              this.DOM = {el: el};
              // the menu items
              this.DOM.menuItems = this.DOM.el.querySelectorAll('.menu__item');
              // array of MenuItem
              this.menuItems = [];
              this.DOM.menuItems.forEach(menuItem => this.menuItems.push(new MenuItem(menuItem)));
          }
        }
        class MenuItem {
          constructor(el) {
              // .menu__item element
              this.DOM = {el: el};
              // .menu__item-link element
              this.DOM.link = this.DOM.el.querySelector('a.menu__item-link');
              // .marquee element
              this.DOM.marquee = this.DOM.el.querySelector('.marquee');
              // .marquee__inner-wrap element
              this.DOM.marqueeInner = this.DOM.marquee.querySelector('.marquee__inner-wrap');
              // some default options for the animation's speed and easing
              this.animationDefaults = {duration: 0.6, ease: 'expo'};
              // events initialization
              this.initEvents();
          }
          initEvents() {
              this.onMouseEnterFn = ev => this.mouseEnter(ev);
              this.DOM.link.addEventListener('mouseenter', this.onMouseEnterFn);
              this.onMouseLeaveFn = ev => this.mouseLeave(ev);
              this.DOM.link.addEventListener('mouseleave', this.onMouseLeaveFn);
          }
          mouseEnter(ev) {
              // find closest side to the mouse
              const edge = this.findClosestEdge(ev);
              
              // set the initial y position for both the marquee and marqueeInner elements
              // for the reveal effect to happen, both start at opposite positions
              // the directions are different depending on the direction the cursor enters the element (bottom or top)
              gsap.timeline({defaults: this.animationDefaults})
              .set(this.DOM.marquee, {y: edge === 'top' ? '-101%' : '101%'}, 0)
              .set(this.DOM.marqueeInner, {y: edge === 'top' ? '101%' : '-101%'}, 0)
              .to([this.DOM.marquee, this.DOM.marqueeInner], {y: '0%'}, 0);
          }
          mouseLeave(ev) {
              // find closest side to the mouse
              const edge = this.findClosestEdge(ev);
              
              gsap.timeline({defaults: this.animationDefaults})
              .to(this.DOM.marquee, {y: edge === 'top' ? '-101%' : '101%'}, 0)
              .to(this.DOM.marqueeInner, {y: edge === 'top' ? '101%' : '-101%'}, 0);
          }
          // find closest side to the mouse when entering/leaving
          findClosestEdge(ev) {
              const x = ev.pageX - this.DOM.el.offsetLeft;
              const y = ev.pageY - this.DOM.el.offsetTop;
              return closestEdge(x,y,this.DOM.el.clientWidth, this.DOM.el.clientHeight);
          }
        }
        new Menu(document.querySelector('.menu'));
      });
    }
  }
</script>
<style lang="scss" scoped>
.menu-wrap {
	--color-text: #111;
	--color-bg: #f8c792;
	--color-link: #000;
	--color-link-hover: #000;
	--color-border: #a7927b;
	--marquee-bg: #000;
	--marquee-text: #fff;
	--menu-focus: #775e41;
	color: var(--color-text);
	background-color: var(--color-bg);
	font-family: reason-new, -apple-system, BlinkMacSystemFont, Segoe UI, Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;

	display: flex;
	flex-direction: column;
	width: 100vw;
	height: 100vh;
	position: relative;
	justify-content: center;
}

.menu__item {
	cursor: default;
	position: relative;
	overflow: hidden;
	text-align: center;
	box-shadow: 0 -1px var(--color-border);
}

.menu__item:last-child {
	box-shadow: 0 1px var(--color-border), 0 -1px var(--color-border);
}

.menu__item-link {
	display: block;
	position: relative;
	cursor: pointer;
	text-decoration: none;
}

.menu__item-link:focus,
.menu__item-link:focus-visible {
	color: var(--menu-focus);
}

.menu__item-link:focus:not(:focus-visible) {
	color: var(--color-link);
}

.marquee {
	position: absolute;
	top: 0;
	left: 0;
	overflow: hidden;
	width: 100%;
	height: 100%;
	pointer-events: none;
	background: var(--marquee-bg);
	transform: translate3d(0,101%,0);
}

.marquee__inner-wrap {
	height: 100%;
	width: 100%;
	transform: translate3d(0,-101%,0);
}

.marquee__inner {
	height: 100%;
	width: fit-content;
	align-items: center;
	display: flex;
	position: relative;
	animation: marquee 15s linear infinite;
	will-change: transform;
}

@keyframes marquee {
	100% {
		transform: translate3d(-50%, 0, 0);
	}
}

.menu__item-link,
.marquee span {
	white-space: nowrap;
	font-size: 6vw;
	line-height: 1.2;
	font-weight: 600;
	padding: 1vh 1vw 0;
	text-transform: uppercase;
}

.marquee span {
	text-align: center;
	color: var(--marquee-text);
	font-weight: 400;
}

.marquee__img {
	width: 15vw;
	height: 70%;
	margin: 0 2vw;
	border-radius: 5vw;
	background-size: cover;
	background-position: 50% 50%;
}
</style>