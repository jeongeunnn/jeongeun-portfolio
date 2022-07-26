<template>
  <!-- 
  기능
  - 유저가 마우스다운해서 마우스업할때 선을 그을 수 있음
  - 유저가 선의 색상/굵기를 지정할 수 있음
  - 전체 캔버스에 색상 채우기
  - 선을 그은다음 채워지도록 하기

  - 유저가 이미지 업로드를 할 수 있음
    => 업로드 이후 이미지 업로드시 이미 업로드된 이미지 위에 이미지가 올라감
    => 이미지 사이즈의 비율이 다를때 어떻게 처리..?

  - 텍스트를 입력하고 더블클릭하여 캔버스에 도장?을 찍을 수 있음
    =>유저가 폰트 크기/종류 선택할 수 있도록 하기
    =>fill/stroke 선택할 수 있도록 하기

  - 리셋
    => 흰색으로 채우기

  - 다운로드

  - 지우기 
    => 흰색칠하기

  UI 
  - canvas
  - color선택가능한 요소 / 선택된 컬러 표시하는 요소
  - 선의 굵기를 나타내는 range input
  - 텍스트를 쓸 수 있는 text input
  - 파일업로드를 할 수 있는 file input
  - fill/reset/erase/save 버튼
  -->
  <section class="painting-board">
    <canvas ref="myBoard"></canvas>
    <div class="option-collection">
      <div class="line-width-box">
        <button 
          type="button" 
          class="btn btn-lg bi bi-brush"
          @click="showLineOption"
        >선크기</button>
        <div class="line-width-option" :class="{ 'hide-option': lineOptionShow == false }">
          <input
            type="range"
            min="1" max="10" step="0.5" value="5"
            ref="lineWidth" 
            class="form-range"
          >
        </div>
      </div>
      <div class="color-option-box">
        <button 
          type="button" 
          class="btn btn-lg bi bi-palette"
          ref="lineColorBtn" 
          @click="showColorOption"
        >색선택</button>
        <ul class="color-option" :class="{ 'hide-option': colorOptionShow == false }">
          <li 
            class="color-option__items" 
            :class="{ 'active': isActive === index }"
            v-for="(item, index) in colorArr" :key="index"
            :style="`background-color:${item}`"
            :data-color="`${item}`"
            @click="onColorClick(item, index)"
          ></li>
        </ul>
      </div>
      <button 
        type="button" 
        ref="modeBtn" 
        class="mode-btn btn btn-lg bi bi-paint-bucket"
      >채우기</button>
      <button 
        type="button" 
        ref="eraserBtn" 
        class="eraser-btn btn btn-lg bi bi-eraser"
      >지우기</button>

      <input 
        ref="file" 
        class="file form-control" 
        type="file" accept="image/*"
      >
      <input 
        ref="text" 
        class="text form-control" 
        type="text" 
        placeholder="Write and then double click"
      >
      
      <button 
        type="button" 
        ref="save" 
        class="save btn btn-lg bi bi-download"
      >&nbsp;Save</button>
      <button 
        type="button" 
        ref="reset" 
        class="reset btn btn-lg bi bi-download"
      >&nbsp;Reset</button>
    </div>
    
  </section>
</template>
<script>
  export default {
    name: 'AppDrawingBoard',
    data() {
      return {
        canvasWidth: null,
        canvasHeight: null,
        colorArr: [
          '#212529',//Black
          '#ff6b6b',//Red
          '#845ef7',//Violet
          '#339af0',//Blue
          '#20c997',//Teal
          '#ff922b'//Orange
        ],

        lineOptionShow: false,
        colorOptionShow: false,
        isPainting: false,
        isFilling: false,
        colorSelect: false,
      }
    },
    mounted() {
      window.addEventListener('resize', this.handleCanvasSize.bind(this), {
        once: false,
        passive: false,
        capture: false,
      });
      this.handleCanvasSize();
      this.ctxlineWidth = this.lineWidth.value;
      this.ctx.lineCap = "round";
      this.canvas.addEventListener('mousemove', this.onMove);
      this.canvas.addEventListener('mousedown', this.startPainting);
      this.canvas.addEventListener('mouseup', this.cancelPainting);
      this.canvas.addEventListener('mouseleave', this.cancelPainting);
      this.lineWidth.addEventListener('change', this.onlineWidthChange);
      this.modeBtn.addEventListener('click', this.onModeClick);
      this.canvas.addEventListener('click', this.onCanvasClick)
    },
    computed: {
      canvas() {
          return this.$refs.myBoard;
      },
      ctx() {
          return this.canvas.getContext('2d');
      },
      lineWidth(){
        return this.$refs.lineWidth;
      },
      modeBtn(){
        return this.$refs.modeBtn;
      },
      eraserBtn(){
        return this.$refs.eraserBtn;
      },
      file(){
        return this.$refs.file;
      },
      text(){
        return this.$refs.text;
      },
      save(){
        return this.$refs.save;
      },
      reset(){
        return this.$refs.reset;
      }
    },
    methods: {
      handleCanvasSize(){
        const ww = document.body.clientWidth;
        const ratio = (window.devicePixelRatio > 1) ? 2 : 1;
        let canvasSize;
        if(ww >= 1200){
          canvasSize = ww * 0.4
        }else if(ww < 1200 && ww >= 960){
          canvasSize = ww * 0.5
        }else if(ww < 960 && ww >= 720){
          canvasSize = ww * 0.7
        }else{
          canvasSize = ww * 0.8
        }
        this.canvas.style.width = `${canvasSize}px`;
        this.canvas.style.height = `${canvasSize * 1.2}px`;

        this.canvas.width = canvasSize * ratio;
        this.canvas.height = (canvasSize * 1.2) * ratio;

        this.canvasWidth = canvasSize;
        this.canvasHeight = canvasSize * 1.2;

        this.ctx.scale(ratio, ratio);
      },
      showLineOption(){
        this.lineOptionShow == false ?  this.lineOptionShow = true : this.lineOptionShow = false;
        this.colorOptionShow == true ?  this.colorOptionShow = false : null;
      },
      showColorOption(){
        this.colorOptionShow == false ?  this.colorOptionShow = true : this.colorOptionShow = false;
        this.lineOptionShow == true ?  this.lineOptionShow = false : null;
      },
      onMove(event){
        if(this.isPainting){
          this.ctx.lineTo(event.offsetX,event.offsetY)
          this.ctx.stroke();
          return;
        }
        this.ctx.moveTo(event.offsetX, event.offsetY);
      },
      startPainting(){
        this.isPainting = true;
      },
      cancelPainting(){
        this.isPainting = false;
        this.ctx.beginPath();
      },
      onlineWidthChange(event){
        this.ctx.lineWidth = event.target.value;
      },
      onColorClick(item, index){
        const colorOption = Array.from(document.getElementsByClassName('color-option__items'));
        this.ctx.strokeStyle = item;
        this.ctx.fillStyle = item;
        colorOption.forEach(color => color.classList.remove('selected'));
        colorOption[index].classList.add('selected');
      },
      onModeClick(){
        if(this.isFilling){
          this.isFilling = false
          this.modeBtn.innerText = '채우기'
        }else{
          this.isFilling = true
          this.modeBtn.innerText = '그리기'
        }
      },
      onCanvasClick(){
        if(this.isFilling){
          this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
        }
      },
      onDestroyClick(){
        this.ctx.fillStyle = 'white'
        this.ctx.fillRect(0, 0, this.canvasWidth, this.canvasHeight);
      }
    },
    unmounted() {
      window.removeEventListener('resize', this.handleCanvasSize.bind(this), {
        once: false,
        passive: false,
        capture: false,
      });
    },
  }
</script>
<style lang="scss" scoped>
  .painting-board{
    @include flex-center-center;
    flex-direction: column;
    width: 100%; min-height: 100%;
    background-color: $primary-blue-lighten400;
    canvas{
      background-color: $white;
      box-shadow: 0 0 1px 0 rgba($black,0.1), 10px 10px 30px 10px rgba($primary-blue-lighten200,0.1);
    }
  }
  .option-collection{
    display: inline-grid;
    grid-template-rows: repeat(4, auto);
    grid-template-columns: 1fr 1fr 1fr 1fr;
    align-items: center;
    justify-content: center;
    gap: 4px;
    .save{grid-column: 2;grid-row: 4;}
    .reset{grid-column: 3;grid-row: 4;}
    .line-width-box{grid-column: 1;grid-row: 1;}
    .color-option-box{grid-column: 2;grid-row: 1;}
    .mode-btn{grid-column: 3;grid-row: 1;}
    .eraser-btn{grid-column: 4;grid-row: 1;}
    .text{grid-column: 1/5;grid-row: 2;}
    .file{grid-column: 1/5;grid-row: 3;}
    button:not(.save, .reset){
      @include flex-center-center;
      flex-direction: column;
    }
  }
  .line-width-option{
    .form-range{
      width: auto;
    }
  }
  
  .line-width-box,.color-option-box{
    position: relative; top:0; left:0;
  }
  .line-width-option,.color-option{
    padding: 20px;
    background-color: white;
    border-radius: 20px;
    transform: translate(-50%, -100%) scale(1);
    position: absolute; top: 0; left: 50%;
    box-shadow: 0 0 1px 0 rgba($black,0.1), 0 0 5px 0 rgba($black,0.1);
    &.hide-option{
      display: none;
      transform: scale(0);
    }
  }
  .line-width-option{
    display: inline-block;
  }
  .color-option{
    display: inline-grid;
    grid-template-columns: repeat(6, 1fr);
    gap: 10px;
    &__items{
      width: $icon-size1;
      aspect-ratio: 1/1;
      border-radius: 50%;
      position: relative; top: 0; left: 0;
      &::after{
        content:"";
        width: 80%;
        aspect-ratio: 1/1;
        border: 1.5px solid;
        border-color: transparent;
        position: absolute; top: 50%; left: 50%;
        transform: translate(-50%, -50%);
        border-radius: 50%;
      }
      &.selected{
        &::after{
          border-color: $white;
        }
      }
    }
  }
</style>