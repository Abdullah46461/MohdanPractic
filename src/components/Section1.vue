<template>
  <section>
    <div class="container">
      <header>
        <img src="./icons/logo.png" height="45" width="251" alt="aj"/>
         <div class="headerButton">
           <h2>+7(499) 922-89-09</h2>
           <Button/>
         </div>
      </header>

      <div class="wrraper">
        <div class="text">
          <h1>ПОДБОР ПУЛЬСОМЕТРА</h1>
          <h2>УЧЕТОМ ВАШЕГО УРОВНЯ ПОДГОТОВКИ</h2>
        </div>
        <div class="icons">
          <img src="./icons/timer.png" height="46" width="42" />
          <img src="./icons/hand-cart.png" height="45" width="44" />
          <img src="./icons/messages.png" height="42" width="45" />
        </div>
        <div class="iconsText">
          <span>Время подбора:<br>10 минут</span>
          <span>Бесплатная <br>доставка</span>
          <span>Ответим на все <br> вопросы</span>
        </div>
          <div class="btn"><Button class="consult"><template v-slot>КОНСУЛЬТАЦИЮ</template></Button></div>
        <div class="scrol">
          <a href="#section1">или ПЕРЕЙТИ В КАТАЛОГ</a>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import Button from '@/components/Button.vue'
export default {
  components: { Button }

}
</script>

<style lang="css" scoped>
header{
  display: flex;
  justify-content: space-between;
}
h2{
  color: #fbfbfb;
}
.text{
  padding-top: 100px;
  text-align: end;
  color: white;

}
img:hover{
  cursor: pointer;
}
.headerButton{
  text-align: center;
}
.icons{
  padding-top: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 100px
}
.iconsText{
  color: white;
   padding-top: 0;
   display: flex;
   justify-content: center;
   align-items: center;
   gap: 50px;
  text-align: center;
 }
.btn{
  display: flex;
  justify-content: center;
  padding-top: 20px;
}
.scrol{
  display: flex;
  justify-content: center;
  color: white;
}
section {
  padding: 15px;
  background-image: url('img/main.jpg');
}
.consult{
  padding: 10px;
  font-size: 15px;
}
.wrraper{
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}
</style>
