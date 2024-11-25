<template>
  <PrimeButton v-bind="$props"></PrimeButton>
</template>

<script setup lang="ts">
import { Button as PrimeButton } from 'primevue'
import type { ButtonProps as PrimeButtonProps } from 'primevue/button'
interface IProps {
  label?: PrimeButtonProps['label']
  icon?: PrimeButtonProps['icon']
  iconPos?: PrimeButtonProps['iconPos']
  variant?: PrimeButtonProps['variant']
  as?: PrimeButtonProps['as']
  severity?: PrimeButtonProps['severity']
  disabled?: PrimeButtonProps['disabled']
  rounded?: PrimeButtonProps['rounded']
  badge?: PrimeButtonProps['badge']
  badgeSeverity?: PrimeButtonProps['badgeSeverity']
  size?: PrimeButtonProps['size']
  loading?: PrimeButtonProps['loading']
}

withDefaults(defineProps<IProps>(), {
  size: 'small',
})
</script>

<style scoped></style>
