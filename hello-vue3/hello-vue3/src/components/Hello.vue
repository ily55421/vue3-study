<template>
    <div>
        <P>{{msg}}</P>
    </div>
</template>

<script lang="ts">

import { defineComponent,ref } from 'vue'

export default defineComponent({
    setup() {
        //   const msg = 'Hello World!'
        // 定义一个字符串变量
        const msg = ref<string>('Hi!');

        // 1s后修改它的值
        setTimeout(() => {
            msg.value = 'Hello!'+ Math.random() * 400
        }, 1000);
        return {
            msg,
        }
    }
})
</script>

<style scoped>
</style>