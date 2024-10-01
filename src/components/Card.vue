<template>
  <div class="container">
  <div class="card" >
    <img src="./img/pulsometr.png" height="200" width="140" />
    <div class="textConteiner">
       <span class="spanTitle" >{{name}}</span>
        <span>{{text}}</span>
        <span class="clickText">ПОДРОБНЕНЕ</span>
    </div>
    <div class="priceBuy">
      <div class="price">
        <span class="sale">{{sale}}</span>
        <span class="priceP">{{price}}</span>
      </div>
      <button @click="createModal">КУПИТЬ</button>
    </div>
  </div>
  </div>
</template>

<script>
import { mapMutations, mapState } from 'vuex'

export default {
  methods:{
    ...mapMutations(['createModal']),
  },
  props: ['name', 'text', 'sale', 'price'],
  data(){
    return{
      watchInfo: '',
    }
  },
  computed:{
    ...mapState(['fitnessWatch'])
  },
}
</script>

<style lang="css" scoped>
.card{
  align-items: center;
  display: flex;
  flex-direction: column;
  border-radius: 5px;
  border: 2px solid #ccc;
  width: 300px;
  background-color: white;
  margin: 15px;

}
.container{
  display: flex;
  align-items: center;
  flex-direction: column;
}
.textConteiner{
  display: flex;
  flex-direction: column;
  text-align: center;
}
.spanTitle{
  font-weight: bold;
  padding: 10px;
}
.clickText{
  color: red;
  font-weight: bold;
  padding: 10px;
  cursor: pointer;

}
.price{
  display: flex;
  flex-direction: column;

}
.priceBuy{
  display: flex;
  gap: 90px;
}
button{
  background-color: red;
  border-radius: 5px;
  border: none;
  width: 150px;
  height: 40px;
  color: white;
  cursor: pointer;

}
.sale{
  font-size: 15px;
  text-decoration: line-through;
}
.priceP{
  font-size: 20px;
}

</style>
