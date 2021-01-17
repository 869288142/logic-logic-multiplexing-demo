import { reactive, ref } from "vue"

export default function useCounter() {
    const count = ref(0)
    const increase = () => count.value++
    const decrease  = () => count.value--
    const reset = () => count.value = 0
    return {
        count,
        increase,
        decrease,
        reset
    }
}

