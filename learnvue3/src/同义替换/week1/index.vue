<template lang="">
  <div>
  <div class="word-replace">
    同义替换
    <div>
      <!-- <el-icon class="line1-1"><SemiSelect /></el-icon> -->
      <!-- <el-icon class="line2"><SemiSelect /></el-icon>
      <el-icon class="line3-3"><SemiSelect /></el-icon>
      <el-icon class="line4"><SemiSelect /></el-icon>
      <el-icon class="line5"><SemiSelect /></el-icon>
      <el-icon class="line6"><SemiSelect /></el-icon>
      <el-icon class="line7-7"><SemiSelect /></el-icon>
      <el-icon class="line8"><SemiSelect /></el-icon> -->

      <!-- <el-icon class="line9"><SemiSelect /></el-icon> -->

      <!-- <el-icon class="line1-1"><SemiSelect /></el-icon>
      <div class="line1-2"></div>
      <div class="line1-3"></div>


      <div class="line1-4"></div>
      <div class="line1-5"></div>
      <div class="line1-6"></div>
      <div class="line1-7"></div>
      <div class="line1-8"></div>

      <div class="line2-1"></div>
      <div class="line2-2"></div>
      <div class="line2-3"></div>
      <div class="line2-4"></div>
      <div class="line2-5"></div>
      <div class="line2-6"></div>
      <div class="line2-7"></div>
      <div class="line2-8"></div>

      <div class="line3-1"></div>
      <div class="line3-2"></div>
      <div class="line3-3"></div>
      <div class="line3-4"></div>
      <div class="line3-5"></div>
      <div class="line3-6"></div>
      <div class="line3-7"></div>
      <div class="line3-8"></div>

      <div class="line4-1"></div>
      <div class="line4-2"></div>
      <div class="line4-3"></div>
      <div class="line4-4"></div>
      <div class="line4-5"></div>
      <div class="line4-6"></div>
      <div class="line4-7"></div>
      <div class="line4-8"></div>

      <div class="line5-1"></div>
      <div class="line5-2"></div>
      <div class="line5-3"></div>
      <div class="line5-4"></div>
      <div class="line5-5"></div>
      <div class="line5-6"></div>
      <div class="line5-7"></div>
      <div class="line5-8"></div> -->

      <!-- <div class="line6-1"></div>
      <div class="line6-2"></div>
      <div class="line6-3"></div>
      <div class="line6-4"></div>
      <div class="line6-5"></div>
      <div class="line6-6"></div>
      <div class="line6-7"></div>
      <div class="line6-8"></div> -->

      <!-- <div class="line7-1"></div>
      <div class="line7-2"></div>
      <div class="line7-3"></div>
      <div class="line7-4"></div>
      <div class="line7-5"></div>
      <div class="line7-6"></div>
      <div class="line7-7"></div>
      <div class="line7-8"></div> -->

      <!-- <div class="line8-1"></div>
      <div class="line8-2"></div>
      <div class="line8-3"></div>
      <div class="line8-4"></div>
      <div class="line8-5"></div>
      <div class="line8-6"></div>
      <div class="line8-7"></div>
      <div class="line8-8"></div> -->


      <!-- <div class="line16"></div>
      <div class="line17"></div>
      <div class="line18"></div>
      <div class="line19"></div>
      <div class="line20"></div>
      <div class="line21"></div>
      <div class="line22"></div>
      <div class="line23"></div> -->


      <div 
        v-for="(item,index) in numberArray" 
        :key="index" 
        :class="getClasses(item)"
        v-show="showLine.includes(item)"
      >
        
      </div>



      <el-button 
        class="word-border-start" 
        :class="{active:currentIndexStart == index,green:checkStartCorrectIndex.length > 0 ? checkStartCorrectIndex.includes(index) :false,red:checkStartCorrectIndex.length > 0 ? !checkStartCorrectIndex.includes(index) :false}"
        v-for="(item,index) in wordStartShuffle" 
        :key="index"
        @click="wordClickStart(item,index)"
      >
        {{item.start.word}}
        {{showAnswer == true ? item.start.transform : ''}}
      </el-button>
    </div>
    
    <div>
      <el-button 
        class="word-border-end" 
        :class="{active:currentIndexEnd == index,green:checkEndCorrectIndex.length > 0 ? checkEndCorrectIndex.includes(index) :false,red:checkEndCorrectIndex.length > 0 ? !checkEndCorrectIndex.includes(index) :false}"
        v-for="(item,index) in wordShuffle" 
        :key="index"
        @click="wordClickEnd(item,index)"
      >
        {{item.end.word}}
        {{showAnswer == true ? item.end.transform : ''}}
        
      </el-button>
    </div>

    
    
    
  </div>

  <div style="position:relative;top:250px;">
    <el-button style="margin-right:10px;zoom:1.5;" type="info" @click="back">撤销</el-button>
    <el-button style="margin-right:10px;zoom:1.5;" type="primary" @click="check">提交</el-button>
    <el-button style="margin-right:10px;zoom:1.5;" type="primary" @click="replay">重做</el-button>
    <el-button style="margin-right:10px;zoom:1.5;" type="primary" @click="last()">上一组词汇</el-button>
    <!-- <el-button>目前第1组</el-button> -->
    <!-- <el-select
      v-model="value"
      placeholder="Select"
      size="large"
      style="width: 240px"
    >
      <el-option
        v-for="item in options"
        :key="item.value"
        :label="item.label"
        :value="item.value"
      />
    </el-select> -->
    <el-button>第{{groupIndex + 1}}组</el-button>
    <el-button style="margin-right:10px;zoom:1.5;" type="primary" @click="next()">下一组词汇</el-button>
  </div>
  

</div>
</template>
<script>
import {ref,computed,onMounted,watch} from "vue"
import word from './word.json';

export default {
  components:{

  },
  methods:{
    getClasses(item){
      let firstDigit = Math.floor(item / 10)
      let secondDight = item % 10
      return 'line' + firstDigit + '-' + secondDight
    }
  },
  setup(){

    let currentIndexStart = ref(100)
    let currentIndexEnd = ref(100)

    let endIndex = ref('')
    let showAnswer = ref(false)

    // let words = ref([
    //   {'start':{word:'babyish',transform:'稚气'},'end':{word:'easy',transform:'简单'}},
    //   // {'start':'waterways','end':'great rivers'},
    //   {'start':{word:'stop',transform:'停止'},'end':{word:'pull out',transform:'拉住'}},
    //   {'start':{word:'confidentially',transform:'机密'},'end':{word:'no names would be traceable',transform:'没有名字可以被追踪到'}},
    //   {'start':{word:'sufficiently challenged',transform:'有足够的挑战性'},'end':{word:'stretches us enough',transform:'超越极限'}},
    //   {'start':{word:'officials',transform:'官员'},'end':{word:'mayor and other dignitaries of town',transform:'市长要员'}},
    //   {'start':{word:'increase',transform:'增加'},'end':{word:'gain',transform:'增长'}},
    //   {'start':{word:'at first',transform:'最初'},'end':{word:'initially',transform:'最初'}},
    //   {'start':{word:'number',transform:'数量'},'end':{word:'amount',transform:'数量'}},
    //   // {'start':{word:'benefit',transform:'益处'},'end':{word:'mayor and other dignitaries of town',transform:'市长要员'}},
    //   // {'start':{word:'go to',transform:'去······'},'end':{word:'spend time in',transform:'度过'}},
    // ])

    let words = ref(word) //使用json里的数据，词汇放进json打理
    let wordsGroup = ref([[]])
    let groupIndex = ref(0)

    let numberArray = ref([
      11,12,13,14,15,16,17,18,
      21,22,23,24,25,26,27,28,
      31,32,33,34,35,36,37,38,
      41,42,43,44,45,46,47,48,
      51,52,53,54,55,56,57,58,
      61,62,63,64,65,66,67,68,
      71,72,73,74,75,76,77,78,
      81,82,83,84,85,86,87,88
    ])

    let showLine = ref([]) //显示哪些线条

    function back(){//往回撤销
      showLine.value.pop()
    }



    
    let wordStartShuffle = ref([])
    let wordShuffle = ref([])
    onMounted(() => {
      console.log('229',word)
      // console.log('230',words.value)

      let i = 0
      let j= 0
      words.value.forEach((item,index) => { //把单词放进单词组里面管理
        if(!wordsGroup.value[i]) { //初始化为数组
          wordsGroup.value[i] = [];
        }
        if(wordsGroup.value[i].length < 8) {
          wordsGroup.value[i][j] = item
          j++
        } 
        else {
          ++i
          wordsGroup.value[i] = []
          j = 0
          wordsGroup.value[i][j] = item
          j++
        }
      })
      console.log('244',wordsGroup.value.length)

      options.value = []
      wordsGroup.value.forEach((item,index) => {
        options.value.push({
          'value': index,
          'label': index,
        })
      })

      wordShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])
      wordStartShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])

      // wordShuffle.value = shuffleArray(words.value)
      // wordStartShuffle.value = shuffleArray(words.value)
    })

    

    function wordClickStart(item,index){

      if(currentIndexStart.value == index){ //如果重复选择相同的选项，则取消选择
        currentIndexStart.value = 100
        return 
      }

      currentIndexStart.value = index
      console.log(item,index,currentIndexStart.value)
    }

    function wordClickEnd(item,index){

      if(currentIndexEnd.value == index){ //如果重复选择相同的选项，则取消选择
        currentIndexEnd.value = 100
        return 
      }

      currentIndexEnd.value = index
      console.log(item,index)
    }

    watch(currentIndexStart, (newValue, oldValue) => {
      console.log(`currentIndexStart发生变化，新值为: ${newValue}, 旧值为: ${oldValue}`);
      if(newValue+1 < 9 && currentIndexEnd.value + 1 < 9) {//如果start和end都选中，显示划线
        

        //如果showLine对应的start已经有线条，把那个线条取消掉
        let array = []
        showLine.value.forEach((item) => {
          if((item - (newValue+1)*10) > 0 && (item - (newValue+1)*10) < 10) {

          } else {
            // return item
            array.push(item)
          }
        })

        

        showLine.value = array

        console.log('247',showLine.value)

        showLine.value.push((newValue+1)*10 + currentIndexEnd.value + 1)//添加对应线条

        console.log('showLine:',showLine.value)

        currentIndexStart.value = 100 //重置first和end的值
        currentIndexEnd.value = 100
      }
    });

    watch(currentIndexEnd, (newValue, oldValue) => {
      console.log(`currentIndexEnd发生变化，新值为: ${newValue}, 旧值为: ${oldValue}`);
      if(newValue+1 < 9 && currentIndexStart.value + 1 < 9) {//如果start和end都选中，显示划线
        
        //如果showLine对应的start已经有线条，把那个线条取消掉
        let array = []
        showLine.value.map((item) => {
          if((item - (currentIndexStart.value + 1)*10) > 0 && (item - (currentIndexStart.value + 1)*10) < 10) {

          } else {
            // return item
            array.push(item)
          }
        })

        if(showLine.value.includes((currentIndexStart.value + 1)*10 + newValue + 1)){ //重复选择线条视为取消选择
          console.log('315true',showLine.value)
          console.log('316true',(newValue+1)*10 + currentIndexEnd.value + 1)
          console.log(345,showLine.value.indexOf((currentIndexStart.value + 1)*10 + newValue + 1))
          let index = showLine.value.indexOf((currentIndexStart.value + 1)*10 + newValue + 1)
          
          showLine.value.splice(index,1)

          currentIndexStart.value = 100 //重置first和end的值
          currentIndexEnd.value = 100
          return
        } else {
          console.log('315',showLine.value)
          console.log('316',(newValue+1)*10 + currentIndexEnd.value + 1)
        }


        showLine.value = array

        console.log('271',showLine.value)
        
        showLine.value.push((currentIndexStart.value + 1)*10 + newValue+1)//添加对应线条
        console.log('showLine:',showLine.value)

        currentIndexStart.value = 100 //重置first和end的值
        currentIndexEnd.value = 100
      }
    });

    // 随机打乱数组顺序的函数
    const shuffleArray = (array) => {
      let shuffledArray = array.slice(); // 复制原数组，避免直接修改原数组

      for (let i = shuffledArray.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [shuffledArray[i], shuffledArray[j]] = [shuffledArray[j], shuffledArray[i]];
      }

      return shuffledArray
    }

    let checkStartCorrectIndex = ref([])
    let checkEndCorrectIndex = ref([])
    function check(){ //检查
      //先排序出正确答案，再和现在有的答案进行比对
      let correctLine = [] //正确的线条
      wordStartShuffle.value.forEach((item,index) => {
        // item.start.word
        wordShuffle.value.forEach((val,key) => {
          if(item.start.word == val.start.word){ //代表遇到正确选项
            correctLine.push((index + 1)*10 + key + 1) //把正确的划线添加进去
          } 
        })
      })

      console.log('314',correctLine)
      console.log('317',showLine.value)

      correctLine = showLine.value.filter(item => {
        if(correctLine.includes(item)){
          return item
        }
      })
      console.log('324',correctLine)
      
      correctLine.forEach(item => {
        checkStartCorrectIndex.value.push(parseInt(item.toString()[0]) - 1)//把正确的线条的第一个数给出来
        checkEndCorrectIndex.value.push(parseInt(item.toString()[1]) - 1)//把正确的线条的第二个数取出来
      })

      showAnswer.value = true //展示答案
    }

    function replay(){
     checkStartCorrectIndex.value = []
     checkEndCorrectIndex.value = []
     showLine.value = []
     showAnswer.value = false

     //打乱词的顺序
     wordShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])
     wordStartShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])

    }

    const value = ref(1)
    const options = ref([
      {
        value: 'Option1',
        label: 'Option1',
      },
      {
        value: 'Option2',
        label: 'Option2',
      },
      {
        value: 'Option3',
        label: 'Option3',
      },
      {
        value: 'Option4',
        label: 'Option4',
      },
      {
        value: 'Option5',
        label: 'Option5',
      },
    ])

    function next(){
      if(wordsGroup.value.length - 1 > groupIndex.value) {
        ++groupIndex.value
      }
      
      wordShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])
      wordStartShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])
    }

    function last(){
      if(groupIndex.value > 0) {
        --groupIndex.value
      }
      
      wordShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])
      wordStartShuffle.value = shuffleArray(wordsGroup.value[groupIndex.value])
    }

    return {
      words,
      wordShuffle,
      wordStartShuffle,
      currentIndexStart,
      currentIndexEnd,


      endIndex,
      wordClickStart,
      wordClickEnd,

      numberArray,
      showLine,
      back,
      check,

      checkStartCorrectIndex,
      checkEndCorrectIndex,

      replay, //重做
      showAnswer,


      options,
      value,

      wordsGroup,
      next,
      last,

      groupIndex
    
    }
  }
}
</script>
<style>
.word-replace{
  display:flex;
  height:200px;
  width:75%;
}

.word-border-start{
  width:400px;
  height:30px;
  border:1px solid black;
  margin:10px;
  margin-right:100px;
  text-align:center;

  line-height:30px;
  z-index:10;
}

.word-border-end{
  width:400px;
  height:30px;
  border:1px solid black;
  margin:10px;
  text-align:center;

  line-height:30px;

  /* position:relative;
  left:300px;
  bottom:120px; */
  z-index:10;
}

.active{
  border:1px solid red;
}

/* .line1-1{
  width:10px;
  display:inline-block;
  transform: scaleX(8);
  position:absolute;
  left:29em;
  top: 1.5em;
} */

.line1-1 {
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 29px;
}

.line2-2 {
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 79px;
}


.line3-3{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 129px;
}

.line4-4{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 179px;
}

.line5-5{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 229px;
}

.line6-6{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 279px;
}

/* .line6-6{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 329px;
} */

.line7-7{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 329px;
}

.line8-8{
  width: 117px;
  height: 2.5px;
  background-color: black;
  display: inline-block;
  transform: rotate(360deg);
  position: absolute;
  left: 435px;
  top: 379px;
}

.line4{
  width:10px;
  display:inline-block;
  transform: scaleX(8);
  position:absolute;
  left:29em;
  top: 11em;
}

.line5{
  width:10px;
  display:inline-block;
  transform: scaleX(8);
  position:absolute;
  left:29em;
  top: 14em;
}

.line6{
  width:10px;
  display:inline-block;
  transform: scaleX(8);
  position:absolute;
  left:29em;
  top: 17em;
}

/* .line7-7{
  width:10px;
  display:inline-block;
  transform: scaleX(8);
  position:absolute;
  left:29em;
  top: 20em;
} */

.line8{
  width:10px;
  display:inline-block;
  transform: scaleX(8);
  position:absolute;
  left:29em;
  top: 23em;
}

.line1-2{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 55px;
}

.line1-3{
  width: 146px;
  height: 2px;
  background-color: black;
  display: inline-block;
  transform: rotate(41deg);
  position: absolute;
  left: 420px;
  top: 81px;
}

.line1-4 {
    width: 192px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(51deg);
    position: absolute;
    left: 402px;
    top: 108px;
}

.line1-5 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 133px;
}

.line1-6 {
    width: 280px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(65deg);
    position: absolute;
    left: 353px;
    top: 156px;
}

.line2-7 {
    width: 280px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(65deg);
    position: absolute;
    left: 353px;
    top: 206px;
}

.line3-8 {
    width: 280px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(65deg);
    position: absolute;
    left: 353px;
    top: 256px;
}

.line1-7 {
    width: 320px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(69deg);
    position: absolute;
    left: 333px;
    top: 180px;
}

.line2-8 {
    width: 320px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(69deg);
    position: absolute;
    left: 333px;
    top: 230px;
}

.line1-8 {
    width: 360px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(72deg);
    position: absolute;
    left: 312px;
    top: 204px;
}

.line2-1 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 55px;
}

.line3-2 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 105px;
}

.line4-3 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 155px;
}

.line5-4 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 205px;
}

.line6-5 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 255px;
}

.line7-6 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 305px;
}

.line8-7 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 355px;
}

/* .line4-3 {
    width: 127px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(337deg);
    position: absolute;
    left: 428px;
    top: 355px;
} */

.line1-2{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 55px;
}

.line2-3{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 105px;
}

.line3-4{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 155px;
}

.line4-5{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 205px;
}

.line5-6{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 255px;
}

.line6-7{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 305px;
}

.line7-8{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 355px;
}

/* .line3-2{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 105px;
} */

/* .line4-3{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 155px;
} */

/* .line5-4{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 205px;
} */

/* .line6-5{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 255px;
}

.line7-6{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 305px;
}

.line8-7{
  width:120px;
  height:2px;
  background-color: black;
  display:inline-block;
  transform:  rotate(23deg);
  position:absolute;
  left:27em;
  top: 355px;
} */

.line2-4{
  width: 146px;
  height: 2px;
  background-color: black;
  display: inline-block;
  transform: rotate(41deg);
  position: absolute;
  left: 420px;
  top: 131px;
}

.line3-5{
  width: 146px;
  height: 2px;
  background-color: black;
  display: inline-block;
  transform: rotate(41deg);
  position: absolute;
  left: 420px;
  top: 181px;
}

.line4-6{
  width: 146px;
  height: 2px;
  background-color: black;
  display: inline-block;
  transform: rotate(41deg);
  position: absolute;
  left: 420px;
  top: 231px;
}

.line5-7{
  width: 146px;
  height: 2px;
  background-color: black;
  display: inline-block;
  transform: rotate(41deg);
  position: absolute;
  left: 420px;
  top: 281px;
}

.line6-8{
  width: 146px;
  height: 2px;
  background-color: black;
  display: inline-block;
  transform: rotate(41deg);
  position: absolute;
  left: 420px;
  top: 331px;
}

.line2-5 {
    width: 192px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(51deg);
    position: absolute;
    left: 402px;
    top: 158px;
}

.line3-6 {
    width: 192px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(51deg);
    position: absolute;
    left: 402px;
    top: 208px;
}

.line4-7 {
    width: 192px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(51deg);
    position: absolute;
    left: 402px;
    top: 258px;
}

.line5-8 {
    width: 192px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(51deg);
    position: absolute;
    left: 402px;
    top: 308px;
}

.line2-6 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 183px;
}

.line3-7 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 233px;
}

.line4-8 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 283px;
}

.line2-6 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 183px;
}

.line3-7 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 233px;
}

.line4-8 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(60deg);
    position: absolute;
    left: 376px;
    top: 283px;
}

.line3-1 {
    width: 158px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(319deg);
    position: absolute;
    left: 413px;
    top: 83px;
}

.line4-2 {
    width: 158px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(319deg);
    position: absolute;
    left: 413px;
    top: 133px;
}

.line4-1 {
    width: 208px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(311deg);
    position: absolute;
    left: 397px;
    top: 109px;
}

.line5-1 {
    width: 234px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(300deg);
    position: absolute;
    left: 374px;
    top: 132px;
}

.line6-1 {
    width: 276px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(294deg);
    position: absolute;
    left: 353px;
    top: 156px;
}

.line7-1 {
    width: 310px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(291deg);
    position: absolute;
    left: 337px;
    top: 178px;
}

.line8-2 {
    width: 310px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(291deg);
    position: absolute;
    left: 337px;
    top: 228px;
}

.line8-1 {
    width: 360px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(287deg);
    position: absolute;
    left: 313px;
    top: 206px;
}

.line6-2 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(298deg);
    position: absolute;
    left: 375px;
    top: 181px;
}

.line7-3 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(298deg);
    position: absolute;
    left: 375px;
    top: 231px;
}

.line8-4 {
    width: 235px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(298deg);
    position: absolute;
    left: 375px;
    top: 281px;
}

.line7-2 {
    width: 276px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(294deg);
    position: absolute;
    left: 353px;
    top: 206px;
}

.line8-3 {
    width: 276px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(294deg);
    position: absolute;
    left: 353px;
    top: 256px;
}

.line5-2 {
    width: 208px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(311deg);
    position: absolute;
    left: 397px;
    top: 159px;
}

.line6-3 {
    width: 208px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(311deg);
    position: absolute;
    left: 397px;
    top: 209px;
}

.line7-4 {
    width: 208px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(311deg);
    position: absolute;
    left: 397px;
    top: 259px;
}

.line8-5 {
    width: 208px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(311deg);
    position: absolute;
    left: 397px;
    top: 309px;
}

.line5-3 {
    width: 158px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(319deg);
    position: absolute;
    left: 413px;
    top: 183px;
}

.line6-4 {
    width: 158px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(319deg);
    position: absolute;
    left: 413px;
    top: 233px;
}

.line7-5 {
    width: 158px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(319deg);
    position: absolute;
    left: 413px;
    top: 283px;
}

.line8-6 {
    width: 158px;
    height: 2px;
    background-color: black;
    display: inline-block;
    transform: rotate(319deg);
    position: absolute;
    left: 413px;
    top: 333px;
}

.green{
  border:1px solid green;
  background-color: greenyellow;
}

.red{
  border:1px solid red;
  background-color: rgba(255, 0, 0, 0.502);
}


</style>