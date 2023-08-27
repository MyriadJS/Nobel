<script setup lang="ts">
const {
  value = false,
  onIcon = 'i-pixelarticons:sun',
  offIcon = 'i-pixelarticons:moon',
  tabIndex = 0,
  onChange = () => {}
} = defineProps<{
  value?: boolean
  onIcon?: string
  offIcon?: string
  tabIndex?: number
  onChange?: (value: boolean) => void
}>()

const toggle = ref(value)

function toggleSwitch(value = !toggle.value) {
  toggle.value = value
  onChange(value)
}
</script>

<template>
  <button
    class=""
    :tabindex="tabIndex"     
    @click="() => toggleSwitch()"
  >
    <Icon v-if="toggle" :icon="onIcon"/>
    <Icon v-else :icon="offIcon" />
  </button>
</template>