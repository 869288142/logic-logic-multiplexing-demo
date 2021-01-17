
import { defineComponent } from 'vue'
import Counter from './Counter.vue';
export default defineComponent({
  name: 'App',
  components: {
    Counter,
  },
  render(){
    return (
      <Counter/>
    )
  }
})