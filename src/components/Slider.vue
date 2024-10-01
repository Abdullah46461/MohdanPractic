<template>
  <div>
<img :src='showImg'  />
  </div>
</template>

<script>
import { mapState } from 'vuex'
export default {
  data(){
    return {

    }
  },
  props: ['img', 'slideItem'],
  computed:{

    ...mapState(['slide']),

    showImg() {
      const otv = this.slide.find((item) => item.id === this.slideItem);
      return otv.img;
    }
  },
}
</script>

<style lang="css" scoped>
div{
  display: flex;
  justify-content: center;
  object-fit: cover
}
img{
}
</style>
