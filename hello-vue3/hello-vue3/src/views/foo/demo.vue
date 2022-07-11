<template>
    <div>

    </div>
</template>

<script lang="ts">
// ref VUE3声明类型的新api
import { defineComponent, ref } from 'vue'

export default defineComponent({

    setup() {
        // 声明对象的格式
        interface Member {
            id: number,
            name: string
        };

        // 定义一个成员对象
        const userInfo = ref<Member>({
            id: 1,
            name: 'Tom'
        });
        // 数字数组
        const uids = ref<number[]>([1, 2, 3]);

        // 字符串数组
        const names = ref<string[]>(['Tom', 'Petter', 'Andy']);
        return { userInfo,uids,names }
    }
})
</script>

<style scoped>
</style>