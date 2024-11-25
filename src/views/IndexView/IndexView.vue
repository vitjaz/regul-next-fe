<script setup lang="ts">
import Header from '@/views/IndexView/components/Header/Header.vue'
import LeftAside from './components/LeftAside/LeftAside.vue'
import RightAside from './components/RightAside/RightAside.vue'
</script>

<template>
  <div>
    <Header />
    <div class="flex px-8 pt-3 border">
      <LeftAside />
      <div class="flex-1">
        <RouterView />
      </div>
      <RightAside />
    </div>
  </div>
</template>

<style scoped></style>
