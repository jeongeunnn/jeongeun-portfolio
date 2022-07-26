<template>
  <!-- 유저가 폰트 크기/종류 바꾸기
  let f = new FontFace('작명', 'url(경로를 여기다 쓰기)');
  f.load().then(function(){}) 
  
  fill/stroke중 선택

  연필로 그리면 내부 채우기 stroke -> fill(when user's mouseup)
  -->

  <canvas id="board"></canvas>
  <input id="line-width" type="range" min="1" max="10" value="5" step="0.5"/>
  <div>
    <input id="color" type="color">
    <div class="color-option" style="background-color:#1abc9c;" data-color="#1abc9c"></div>
    <div class="color-option" style="background-color:#e67e22;" data-color="#e67e22"></div>
    <div class="color-option" style="background-color:#3498db;" data-color="#3498db"></div>
    <div class="color-option" style="background-color:#e74c3c;" data-color="#e74c3c"></div>
    <div class="color-option" style="background-color:#9b59b6;" data-color="#9b59b6"></div>
  </div>
  <button id="mode-btn">Fill</button>
  <button id="destroy-btn">Destroy</button>
  <button id="eraser-btn">Erase</button>
  <input type="file" accept="image/*" id="file"><br>
  <input id="text" type="text" placeholder="Write and then double click">
  <button id="save">Save Imae</button>
</template>
<script>
  import { onMounted } from "vue";
  export default {
    name: 'AppDrawingBoard',
    setup() {
      onMounted(()=>{
        const modeBtn = document.querySelector('#mode-btn');
        const destroyBtn = document.querySelector('#destroy-btn');
        const eraserBtn = document.querySelector('#eraser-btn');
        const fileInput = document.querySelector('#file');
        const textInput = document.querySelector('#text');
        const saveBtn = document.querySelector('#save');

        const colorOption = Array.from(document.getElementsByClassName('color-option'));
        console.log(colorOption);
        const lineWidth = document.querySelector('#line-width');
        const color = document.querySelector('#color');
        const canvas = document.querySelector('#board');
        const ctx = canvas.getContext('2d');

        const CANVAS_WIDTH = 800;
        const CANVAS_HEIGHT = 800;

        //const ratio = (window.devicePixelRatio > 1) ? 2 : 1;
        //const width = (document.body.clientWidth / 2) * ratio;
        //const height = document.body.clientHeight * ratio;

        //ctx.scale(ratio, ratio);
        canvas.width = CANVAS_WIDTH;
        canvas.height = CANVAS_HEIGHT;

        ctx.lineWidth = lineWidth.value;
        ctx.lineCap = "round";
        /* const colors = [
          '#1abc9c',
          '#e67e22',
          '#3498db',
          '#e74c3c',
          '#9b59b6'
        ]

        function onClick(event){
          ctx.beginPath();
          ctx.moveTo(0,0);
          const color = colors[Math.floor(Math.random() * colors.length)];
          ctx.strokeStyle = color;
          ctx.lineTo(event.offsetX, event.offsetY);
          ctx.stroke();
        }

        canvas.addEventListener('mousemove', onClick) */

        let isPainting = false;
        let isFilling = false;

        function onMove(event){
          if(isPainting){
            ctx.lineTo(event.offsetX,event.offsetY)
            ctx.stroke();
            return;
          }
          ctx.moveTo(event.offsetX, event.offsetY);
        }
        function startPainting(){
          isPainting = true;
        }
        function cancelPainting(){
          isPainting = false;
          ctx.beginPath();
        }

        function onlineWidthChange(event){
          console.log(event.target.value);
          ctx.lineWidth = event.target.value;
        }

        /* function onColorChange(event){
          console.log(event.target.value);
          ctx.strokeStyle = event.target.value;
          ctx.fillStyle = event.target.value;
        } */
        function onColorClick(event){
          const colorValue = event.target.dataset.color;
          console.dir(event.target.dataset.color);
          ctx.strokeStyle = colorValue;
          ctx.fillStyle = colorValue;
          color.value = colorValue;
        }

        function onModeClick(){
          if(isFilling){
            isFilling = false
            modeBtn.innerText = 'Fill'
          }else{
            isFilling = true
            modeBtn.innerText = 'Draw'
          }
        }
        function onCanvasClick(){
          if(isFilling){
            ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
          }
        }

        function onDestroyClick(){
          ctx.fillStyle = 'white'
          ctx.fillRect(0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
        }

        function OnEraserClick(){
          ctx.strokeStyle = 'white'
          isFilling = false
          modeBtn.innerText = 'Fill'
        }

        function onFileChange(event){
          
          const file = event.target.files[0];
          const url = URL.createObjectURL(file)
          console.dir(url);
          const image = new Image();
          image.src = url;
          image.onload = function(){
            ctx.drawImage(image, 0, 0, CANVAS_WIDTH, CANVAS_HEIGHT);
            fileInput.value = null;
          }
        }

        function onDoubleClick(event){
          const text = textInput.value;
          if(text !== ''){
            ctx.save();//ctx의 현재 상태, 색상, 스타일등 모든 것 저장
            ctx.lineWidth = 1;
            ctx.font = '68px serif'//size,family - property
            //ctx.strokeText(text, event.offsetX, event.offsetY);
            ctx.fillText(text, event.offsetX, event.offsetY);
            console.log(textInput,event.offsetX, event.offsetY);
            ctx.restore();//save와 restore사이에서는 어떤 수정을 하던 저장x
          }
        }

        function onSaveClick(){
          console.log(canvas.toDataURL());
          const url = canvas.toDataURL();
          const a = document.createElement('a');
          a.href = url;
          a.download = 'myDrawing.png'
          a.click();
        }

        canvas.addEventListener('dblclick', onDoubleClick);

        canvas.addEventListener('mousemove', onMove);
        canvas.addEventListener('mousedown', startPainting);

        canvas.addEventListener('click', onCanvasClick)

        canvas.addEventListener('mouseup', cancelPainting);
        canvas.addEventListener('mouseleave', cancelPainting);

        lineWidth.addEventListener('change', onlineWidthChange);
        //color.addEventListener('change', onColorChange);
        colorOption.forEach(color => color.addEventListener('click',onColorClick));
        modeBtn.addEventListener('click', onModeClick);
        destroyBtn.addEventListener('click', onDestroyClick);
        eraserBtn.addEventListener('click', OnEraserClick);
        fileInput.addEventListener('change', onFileChange);
        saveBtn.addEventListener('click', onSaveClick);
      });
    }
  }
</script>
<style lang="scss" scoped>
  #board{
    position: fixed; top: 50%; left: 50%;
    transform: translate(-50%, -50%);
  }
  .color-option{
    width: 50px; height:50px;
    cursor: pointer;
  }
    
</style>