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
      <input type="text" placeholder="Ваше имя" v-model="inp1">
        <h2 v-if="inp1">Введите имя</h2>
      <input type="text" placeholder="Ваш телефон" v-model="inp2">
      <input type="text" placeholder="Ваш E-mail" v-model="inp3">
    </div>
  </div>
  </section>
</template>

<script>
export default {
  data(){
    return{
      inp1: '',
      inp2: '',
      inp3: '',
    }
  }

}
</script>

<style lang="css" scoped>
.container {
  color: white;
  display: flex;
  flex-direction: column;
  align-items: center;
}
h1{
  text-align: center;
}
h2{
  padding-top: 50px;
  text-align: center;
}
section{
  padding: 50px;
  background-image: url("img/consultation.jpg");
}
</style>
