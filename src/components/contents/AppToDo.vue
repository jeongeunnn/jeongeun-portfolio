<template>
  <section class="to-do-list">
    <div class="to-do-list__in d-flex flex-column">
      <header class="to-do-list__header d-flex justify-content-between align-items-center">
        <div class="to-do-list__date d-flex align-items-center">
          <span class="to-do-list__date-big">{{ setDay() }}</span>
          <span class="to-do-list__date-small d-flex flex-column">
            <b>{{ setMonth() }}</b><small>{{ setYear() }}</small>
          </span>
        </div>
        <span class="to-do-list__day">{{ setDayOfWeek() }}</span>
      </header>
      <div class="to-do-list__item">
        <ul v-if="listNum > 0">
          <li 
            class="d-flex justify-content-between align-items-start"
            v-for="(item, index) in listNum" :key="index"
          >
            <input :id="`chk${index}`" type="checkbox"/>
            <label :for="`chk${index}`" class="d-flex align-items-start">
              <span>{{ confirmedInput[index] }}</span>
            </label>
            <button 
              type="button" 
              class="btn bi bi-trash3-fill"
              @click="deleteArr(index)"
            >
            </button>
          </li>
        </ul>
      </div>
      <footer class="to-do-list__footer d-flex justify-content-between">
        <input 
          type="text"
          placeholder="할 일을 입력하세요"
          ref="userInput"
          v-model="userInput"
          @keyup.enter="confirmInput"
        >
        <button 
          type="button" 
          class="btn btn--primary bi bi-plus-lg"
          @click="confirmInput"
        >
        </button>
      </footer>
    </div>
  </section>
</template>
<script>
  
  export default {
    name: 'AppToDo',
    data(){
      return{
        userInput: '',
        confirmedInput: [],
        listNum: 0,
        today: new Date(),
        days: [
          'Sunday', 
          'Monday', 
          'Tuesday', 
          'Wednesday', 
          'Thursday', 
          'Friday', 
          'Saturday'
        ],
        monthNames: [
          'JAN', 
          'FEB', 
          'MAR', 
          'APR', 
          'MAY', 
          'JUN',
          'JUL', 
          'AUG', 
          'SEP', 
          'OCT', 
          'NOV', 
          'DEC'
        ]
      }
    },
    mounted() {
      this.focusInput();
    },
    methods: {
      focusInput() {
        this.$refs.userInput.focus();
      },
      confirmInput(){
        if(this.userInput == ''){
          alert('내용을 입력하세요')
        }else{
          this.confirmedInput.push(this.userInput);
          this.userInput = '';
          this.listNum += 1;
        }
        this.focusInput();
      },
      deleteArr(index){
        this.confirmedInput.splice(index, 1);
        this.listNum -= 1;
      },
      setDayOfWeek(){
        const dayOfWeek = this.days[this.today.getDay()];
        return dayOfWeek;
      },
      setDay(){
        const day = ('0' + this.today.getDate()).slice(-2);
        return day;
      },
      setMonth(){
        const month = this.monthNames[this.today.getMonth()];
        return month;
      },
      setYear(){
        const year = this.today.getFullYear();
        return year;
      }
    },
  }
</script>
<style lang="scss" scoped>
  .to-do-list{
    @include flex-center-center;
    width: 100%; min-height: 100%;
    background-color: $primary-blue-lighten400;
    &__in{
      width: 80vw;
      max-width: 400px;
      aspect-ratio: 1/1.5;
      background-color: $white;
      padding: 4vmin;
      position: relative; top: 0; left: 0;
      box-shadow: 0 0 1px 0 rgba($black,0.1), 10px 10px 30px 10px rgba($primary-blue-lighten200,0.1);
    }
    &__header{
      font: {
        size: 0.9rem;
      }
      color: $grey500;
      padding-bottom: 2vmin;
    }
    &__date{
      gap: 2px;
      &-big{
        font: {
          size: 2.5rem;
          weight:bold;
        }
        letter-spacing: -1px;
      }
      &-small{
        b{
          font: {weight:bold;}
        }
        small{
          font: {weight:lighter;}
          color: $grey400;
        }
      }
    }
    &__item{
      flex: 1 1 0;
      overflow-y: auto;
      padding: 2vmin 0;
      li{
        gap:4px;
        padding: 2vmin 0;
        border-bottom: 1px solid rgba($black,0.1);
        input[type="checkbox"]{
          display: none;
          &:checked{
            ~ label{
              &::before{
                background-image: url(../../assets/images/chk.png);
              }
              span{
                text-decoration: line-through;
              }
            }
          }
          ~ label{
            max-width: calc(100% - ($icon-size1 + 4px));
            cursor: pointer;
            &::before{
              content:"";
              display: block;
              width: $icon-size1; height: $icon-size1;
              background: {
                image: url(../../assets/images/unchk.png);
                size: cover;
                repeat: no-repeat;
                position: center;
              };
            }
            span{
              flex: 1 1 0;
              line-height: $icon-size1;
              word-break: keep-all;
            }
          }
        }
        button{
          width: $icon-size1; height: $icon-size1;
          padding: 0;
          color: $grey400;
          border: 0;
          &:hover{
            color: $red;
          }
        }
      }
    }
    &__footer{
      gap: 4px;
      input[type="text"]{
        flex: 1 1 0;
        width: 100%;
        border: none;
        border-radius: 5px;
        padding: 15px 10px;
        outline: none;
        background-color: saturate($primary-blue-lighten400, 30%);
      }
      button{
            width: $icon-size3; height: $icon-size3;
            border-radius: 50%;
            font-size: 1.25rem;
      }
    }
  }

    
</style>