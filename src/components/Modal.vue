<template>
  <div v-if="modal" class="modal">
    <div class="modClose">
    <div class="content">
      <span class="title">Просто заполните форму заявки</span>
      <span>и мы перезвоним вам в течении 10 минут</span>
      <div class="input">
        <input placeholder="Ваше имя">
        <input placeholder="Ваш телефон">
        <input placeholder="Ваш E-mail">
      </div>
      <Button class="btn" ><template v-slot>КОНСУЛЬТАЦИЮ</template></Button>
    </div>
    <div class="close">
    <button class="wert" @click="closeModal" >Закрыть</button>
  </div>
    </div>
  </div>
</template>

<script>
import Button from '@/components/Button.vue'
import { mapMutations, mapState } from 'vuex'

export default {
// props: {
//   modelValue:{
//     type: Boolean,
//     default: false
//   }
// },
//   methods:{
//   closeModal(){
//     this.$emit('update:modelValue', false)
//   }
//   },
  computed: {
    ...mapState(['modal']),
    ...mapMutations(['closeModal']),
  },
  components: { Button },

  mounted() {
    console.log(this.modal)
  }
}
</script>

<style lang="css" scoped>
.modal {
  align-items: center;
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.5);
}
.title{
  font-weight: bold;
  padding-top: 40px;
  font-size: 20px;

}
.content{
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 5px;
  width: 400px;
  height: 550px;
  background-color: #cccccc;
}
.input{
  padding-top: 40px;
  gap: 20px;
  align-items: center;
  display: flex;
  flex-direction: column;
}
input{
  background-color: white;
  width: 350px;
  height: 55px;
  border-radius: 5px;
  border: none;
}
.btn{
  width: 350px;
  height: 55px;
  margin-top: 15px;
}
.close{
  border-radius: 5px;
}
.modClose{
  gap: 10px;
  display: flex;
  justify-content: center;
}
.wert{
  background-color: rgba(0, 0, 0, 0.3);
  color: white;
  border: none;
}
</style>
