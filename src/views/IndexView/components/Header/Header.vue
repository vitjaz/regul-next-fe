<template>
  <header class="sticky z-[1100] top-0 border-b flex items-center justify-between p-4 bg-slate-400">
    <span>РЕГУЛ</span>
    <Button label="Темная тема" @click="toggleDarkMode" />
    <div class="flex gap-3">
      <span>Профиль</span>
      <span>Выход</span>
    </div>
  </header>
</template>

<script setup lang="ts">
import Button from '@/components/ui/Button/Button.vue'

function toggleDarkMode() {
  document.documentElement.classList.toggle('regul-dark')
}
</script>

<style scoped></style>
