<template>
  <div>
    <h2 class="text-xl font-semibold">{{ character.name }}</h2>
    <p class="text-gray-400">
      Health: <span class="text-white">{{ character.health }}</span>
    </p>
    <p class="text-gray-400">
      Attack: <span class="text-white">{{ character.attack }}</span>
    </p>
    <p class="text-gray-400">
      Defense: <span class="text-white">{{ character.defense }}</span>
    </p>
    <p class="text-gray-400">
      Speed: <span class="text-white">{{ character.speed }}</span>
    </p>
    <p class="text-gray-400">
      Magic: <span class="text-white">{{ character.magic }}</span>
    </p>
    <p class="text-gray-400">
      Equipped Weapon: <span class="text-white">{{ character.equippedWeapon || 'None' }}</span>
    </p>
  </div>
</template>

<script setup>
import { defineProps } from 'vue'

const prop = defineProps({
  character: {
    type: Object,
    required: true,
  },
})
</script>

<style scoped></style>
