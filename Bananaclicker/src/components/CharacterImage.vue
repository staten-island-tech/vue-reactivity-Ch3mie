<template>
  <div>
    <img
      :src="character.image || 'https://via.placeholder.com/150'"
      alt="Character Image"
      class="w-32 h-32 rounded-full border-4 border-gray-600 mb-4"
    />
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const props = defineProps({
  character: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
