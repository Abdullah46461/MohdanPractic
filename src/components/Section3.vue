<template>
  <section>
  <div class="container">
    <div>
      <h1>ПОЛУЧИТЕ БЕСПЛАТНУЮ <br> КОНСУЛЬТАЦИЮ <br>ПО ПОДБОРУ ПУЛЬСОМЕТРА</h1>
    </div>
    <div>
      <h2>
        Просто заполните форму заявки <br>и мы перезвоним вам в течении 10 минут
      </h2>

    </div>
    <div class="input">
      <input type="text" placeholder="Ваше имя" v-model="inp1" @click ="input1">
        <h2 v-if="flag1">Введите имя</h2>
      <input type="text" placeholder="Ваш телефон" v-model="inp2">
      <input type="text" placeholder="Ваш E-mail" v-model="inp3">
    </div>
    <Button class="btn"><vslot>КОНСУЛЬТАЦИЮ</vslot></Button>
  </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components: { Button },
  data(){
    return{
      inp1: '',
      inp2: '',
      inp3: '',
      flag1: '',
    }
  },
  methods:{
    input1(){
      if(!this.inp1){
        this.flag1 = false
      }
    }

  }

}
</script>

<style lang="css" scoped>
.container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
}
h1{
  text-align: start;
}
h2{
  padding-top: 50px;
  text-align: start;
}
section{
  padding: 50px;
  background-image: url("img/consultation.jpg");
}
input{
  padding-left: 20px ;
  border-radius: 5px;
  border: none;
  width: 300px;
  height: 50px;
}
.input{
  display: flex;
  flex-direction: column;
  gap: 40px;
  padding-top: 20px;
}

.btn{
  margin-top: 20px;
  width: 300px;
  height: 50px;
}
@media (max-width: 768px) {
  .container {
    align-items: center;
  }
  h1{
    text-align: center;

  }
  h2{
    text-align: center;
  }
}
</style>
