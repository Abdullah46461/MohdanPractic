<template>
  <div class="section">
    <button @click="imgSlidePrev">-</button>
  <div class="wrapper" >

  <Slider v-for="item in this.slide"
  :key="item.id"
  :img="item"
  class="item"
          :slideItem="slideItem"
  />
  </div>
    <button @click="imgSlideNext">+</button>
  </div>
</template>

<script>
import Slider from '@/components/Slider.vue'
import { mapState } from 'vuex'
export default {
components:
  { Slider },
 computed:{
   ...mapState(['slide'])

 },
  data(){
  return{
    slideItem: 1,
  }
  },

  methods:{
  imgSlideNext(){

      this.slideItem += 1
    if(this.slideItem > 3) {
      this.slideItem = 1

    }
  },
    imgSlidePrev(){

      this.slideItem -= 1

    if(this.slideItem < 1){
      this.slideItem = 3;
    }
    }
  }
}
</script>

<style lang="css" scoped>
.wrapper{
  display: flex;
  justify-content: center;
  height: 400px;
  width: 750px;
  overflow: hidden;
  border-radius: 5px;
}
.section{
  padding-top: 50px;
  display: flex;
  justify-content: center;
  background-color: white;

}
button{

  width: 50px;
  height: 300px;
  border: none;
  cursor: pointer;
}

</style>
