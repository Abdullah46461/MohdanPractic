<template>
  <div class="container">
    <div class="wrapper">
      <h1 id="section4"> КАТАЛОГ ПУЛЬСОМЕТРОВ</h1>
      <div class="button">
         <button class="btn" @click="findeWatch(  'fit')">ДЛЯ ФИТНЕСА</button>
         <button class="btn" @click="findeWatch(  'run')">ДЛЯ БЕГА</button>
         <button class="btn" @click="findeWatch(  'triat')">ДЛЯ ТРИАТЛОНА</button>
      </div>
    </div>
    <Card
      v-for="watch in watchInfo"
      :key="watch.id"
      :name="watch.name"
      :text="watch.text"
      :price="watch.price"
      :sale="watch.sale"
      />
  </div>
</template>

<script>
import Card from '@/components/Card.vue'
import { mapState } from 'vuex'
export default {
  data(){
    return{
      flag: 'fit',
      watchInfo: '',
    }
  },
  components: { Card },
  computed: {...mapState(['fitnessWatch'])},

  mounted() {
    this.findeWatch()
  },
  methods:{

    findeWatch(value){
      this.flag = value || 'fit'
      if(this.flag === 'run'){
        this.watchInfo = this.fitnessWatch.filter(item=>item.for === 'running')
        console.log(this.watchInfo)}

      if(this.flag === 'fit'){
        this.watchInfo = this.fitnessWatch.filter(item=>item.for === 'fitness')
        console.log(this.watchInfo)}

      if(this.flag === 'triat')
        this.watchInfo = this.fitnessWatch.filter(item=>item.for === 'triatlone')
      console.log(this.watchInfo)
    },

fit(){
    this.fitFlag = true
  this.triatFlag = false
  this.runFlag = false

},
run(){
  this.fitFlag = false
  this.triatFlag = false
  this.runFlag = true

},
    triat(){
      this.fitFlag = false
      this.triatFlag = true
      this.runFlag = false

    }
  }
}
</script>

<style lang="css" scoped>
.wrapper{
padding: 70px;
  width: 100%;

}
h1{
  display: flex;
  justify-content: center;
  font-weight: bold;
}
.button{
  width: 100%;
  padding: 100px;
  display: flex;
  justify-content: center;
  gap: 15px;
}
.btn {
  padding: 10px 20px;
  font-size: 16px;
  border: 2px solid #ccc; /* Серая рамка */
  background-color: white;
  color: #666;
  font-weight: bold;
  cursor: pointer;
  transition: background-color 0.3s, color 0.3s;
  text-transform: uppercase;
}

.btn:hover {
  border-color: #999; /* Изменение цвета рамки при наведении */

}

.btn.active {
  background-color: #c00; /* Красная кнопка для активного состояния */
  color: white;
  border-color: #c00;
}

.btn:active {
  transform: scale(0.98); /* Эффект нажатия */
}

.container{
  width: 100%;
}
</style>
