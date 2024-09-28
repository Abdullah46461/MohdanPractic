import {createStore} from 'vuex'
import img1 from './public/images/slide_1.jpg'
import img2 from './public/images/slide_2.jpg'
import img3 from './public/images/slide_3.jpg'
export default createStore({
  state(){
    return{
      slide: [
        {id:1, img: img1},
        {id:2, img: img2},
        {id:3, img: img3}
      ],
    }
  }
}
)
