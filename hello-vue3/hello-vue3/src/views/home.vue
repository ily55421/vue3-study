<template>
  <div class="home">
    <img alt="Vue logo" :src="logo" />
    <HelloWorld msg="Hello Vue 3 + TypeScript + Vite" />
    <DefineComponents>生命周期测试</DefineComponents>
    <Hello> 简单的声明变量</Hello>
    <!-- <h1>{{}}</h1> -->
  </div>
</template>

<script setup lang="ts">
import HelloWorld from '@cp/HelloWorld.vue'
import logo from '@img/logo.png'
import DefineComponents from '@cp/DefineComponents.vue'
import Hello from '@cp/Hello.vue'
// import {msg} from '@cp/Hello.vue'
</script>

<style lang="less" scoped>
.home {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: @color-black;
  padding: (@margin * 3) 0;
  margin: 0 auto;
}
</style>
