<template>
  <div>
    Count: {{count}}
    <button @click="reset">Reset</button>
    <button @click="increase">+</button>
    <button @click="decrease">-</button>
  </div>
</template>
<script lang="ts">
import { ref,watchEffect, defineComponent } from "vue"
import useCounter from './use/useCounter';
export default  defineComponent( {
    name: 'Counter',
    setup() {
        const {count, increase, decrease, reset} = useCounter()
        
        watchEffect(function log(){
            console.log('count changed!', count.value)
        })

        return {
            count,
            increase,
            decrease,
            reset
        }
    },
})
</script>
