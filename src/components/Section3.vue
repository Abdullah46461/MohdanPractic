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
<Modal
></Modal>
    </div>
    <div class="input">
      <input type="text" placeholder="Ваше имя" v-model="inp1" @keydown.enter="name"/>
        <h2 v-if="nameFlag">Введите имя</h2>
      <input type="text" placeholder="Ваш телефон" v-model="inp2" @keydown.enter="phone"/>
      <h2 v-if="nameFlag2">Номер введен не корректно</h2>
      <input type="text" placeholder="Ваш E-mail" v-model="inp3" @keydown.enter="email"/>
      <h2 v-if="nameFlag3">Email введен не корректно</h2>

    </div>
    <Button class="btn" @click="createModal"><vslot >КОНСУЛЬТАЦИЮ</vslot></Button>
  </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapMutations } from 'vuex'
// import Modal from '@/components/Modal.vue'
export default {
  components: { Button },
  data(){
    return{
      inp1: '',
      inp2: '',
      inp3: '',
      nameFlag: false,
      nameFlag2: false,
      nameFlag3: false,
    }
  },
  methods:{
    ...mapMutations(['createModal']),
    name(){
      if(this.inp1 === '' ){
        this.nameFlag = true
      }else{
        this.nameFlag = false
      }
    },
    phone(){
      const phoneRegex = /^\+?[78][-(]?\d{3}\)?[- ]?\d{3}[- ]?\d{2}[- ]?\d{2}$/;
      if(this.inp2 === '' || !phoneRegex.test(this.inp2)){
        this.nameFlag2 = true
        console.log(this.nameFlag2)
        console.log( typeof this.inp2)
      }else {
        this.nameFlag2 = false
      }
    },
  email(){
      if(this.inp3 === '' || this.inp3.slice(-8) !== '@mail.ru') {
        this.nameFlag3 = true
      } else {
        this.nameFlag3 = false
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
