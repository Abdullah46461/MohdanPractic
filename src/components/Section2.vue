<template>
  <section class="section">
    <h1>НАШИ ПРИЕМУЩЕСТВА</h1>
    <div class="container">
        <div class="wrapper">

          <div class="icons">
            <img src="./icons/cup.png" height="70" width="70" />
            <span class="spanTitle">Делимся опытом</span>
            <span>
              Наши сотрудники всегда готовы <br> своим опытом, так как <br> сами бегают полумарафоны, <br> переплыли Босфор, готовятся к <br> сщревнованиям по триатлону!
            </span>
          </div>

          <div class="icons">
            <img src="./icons/heart.png" height="70" width="70" />
            <span class="spanTitle">Заботимся о здоровье</span>

            <span>Мы работаем для того,<br>
                         чтобы Ваши занятия спортом шли на<br>
                         пользу Вашему здоровью и были в<br>
                         радость Вам и Вашим близким!</span>
          </div>

          <div class="icons">
            <img src="./icons/shoe.png" height="70" width="70" />
            <span class="spanTitle">Учим бегать</span>

            <span>Помогаем с обучением<br>
                        правильной технике бега!<br>
                        Дружим с крупнейшей школой бега в России - </span>
          </div>

        </div>
      </div>
  </section>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
section {
  padding: 20px;
}

h1{
  text-align: center;
  font-weight: bold;
}

.icons{

  text-align: center;
  padding-top: 50px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.wrapper {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 100px;
}
.spanTitle{
  font-weight: bold;
}
</style>
