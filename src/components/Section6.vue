<template>
  <h1>ОТЗЫВЫ КЛИЕНТОВ</h1>
  <div class="section">
  <div  class="wrapper">
  <img src="./img/feed_1.png" height="169" width="169" />
  <div class="comment">

    <span class="name">Ирина Иванченко</span>
    <span>2 полумарафона</span><br>
    <span>Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.
Новые цели - новый гаджет!
Спасибо, RunSmart!</span><br>
  </div>
  </div>

  <div class="wrapper">
    <img src="./img/feed_2.png" height="169" width="169" />
    <div class="comment">

      <span class="name">Иван Сумочкин</span>
      <span>2 полумарафона</span>
      <span>Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.
Новые цели - новый гаджет!
Спасибо, RunSmart!</span><br>
    </div>
  </div>

  <div class="wrapper">
    <img src="./img/feed_3.png" height="169" width="169" />
    <div class="comment">

      <span class="name">Сергей Бурунов</span>
      <span>2 полумарафона</span>
      <span>Не знала, что себе купить - обратилась к ребятам из RunSmart - подобрали пульсометр, который подошёл именно под мои цели и финансовые возможности. Через некоторое время решила обновить гаджет - не раздумывая обратилась туда же.
Новые цели - новый гаджет!
Спасибо, RunSmart!</span><br>
    </div>
  </div>
  </div>
</template>

<script>
export default {

}
</script>

<style lang="css" scoped>
.comment{
  display: flex;
flex-direction: column;
  width: 300px;
}
.wrapper{
  display: flex;
  justify-content: center;
  gap: 40px;


  border: #999999 solid 1px;
}
h1{
  text-align: center;
  padding: 50px;
  font-weight: bold;
}
.name{
  margin-top: 60px;

  font-weight: bold;
  padding-bottom: 20px;
}
img{
  margin-top: 170px;

  width: 90px;
  height: 90px;
}
html {
  scroll-behavior: smooth;
}
.section{
  display: flex;
  flex-direction: column;
}
</style>
