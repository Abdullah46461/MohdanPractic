import {createStore} from 'vuex'
import img1 from './public/images/slide_1.jpg'
import img2 from './public/images/slide_2.jpg'
import img3 from './public/images/slide_3.jpg'
import axios from 'axios'
export default createStore({
  state() {
    return {
      slide: [
        { id: 1, img: img1 },
        { id: 2, img: img2 },
        { id: 3, img: img3 }
      ],
      modal: false,
      fitnessWatch: [
        {id: 1, name: 'Пульсометр Polar FT1+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'running'},
        {id: 2, name: 'Пульсометр Polar FT2+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'running'},
        {id: 3, name: 'Пульсометр Polar FT3+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'running'},
        {id: 4, name: 'Пульсометр Polar AADAT1+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'fitness'},
        {id: 5, name: 'Пульсометр Polar AADAT2+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'fitness'},
        {id: 6, name: 'Пульсометр Polar AADAT3+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'fitness'},
        {id: 7, name: 'Пульсометр Polar FADT1+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'triatlone'},
        {id: 8, name: 'Пульсометр Polar FADT2+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'triatlone'},
        {id: 9, name: 'Пульсометр Polar FADT3+', text: 'Для первых шагов в тренировках, основанных на сердечном ритме', price: 4500, sale: 4750, for: 'triatlone'},

      ],
    }
  },
  mutations:{
    createModal(state: any){
      state.modal = true
      console.log(state.modal)
    },
    closeModal(state: any){
      state.modal = false
      console.log(state.modal)
    }

  }
  // actions: {
  //   async etchFitnes(store: any){
  //     try {
  //       await
  //     }
  //   }
  // }
})
