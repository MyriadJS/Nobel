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
  <Icon
    v-if="toggle"
    class="focus"
    :icon="onIcon" 
    :tabindex="tabIndex"
    @click="() => toggleSwitch(false)"
    @keyup.enter="() => toggleSwitch(false)"
  />

  <Icon
    v-else
    class="focus"
    :icon="offIcon"
    :tabindex="tabIndex"
    @click="() => toggleSwitch(true)"
    @keyup.enter="() => toggleSwitch(true)"
  />
</template>