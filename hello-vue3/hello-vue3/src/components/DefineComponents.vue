<template>
    <div>

    </div>
</template>

<script lang="ts">
/**
 * defineComponent 默认组件推导
 * onBeforeMount  组件挂载到节点上之前执行
 * onMounted  组件挂载完成后执行
 */
import { defineComponent,onBeforeMount, onMounted } from 'vue'
export default defineComponent({
  setup(props, context) {
    // ... 简化setup声明
    console.log(props)
    console.log(context)   
    console.log(1)

    onBeforeMount(() => {
      console.log(2)
    })

    onMounted(() => {
      console.log(3)
    })

    console.log(4)
  },
})
</script>

<style scoped>

</style>