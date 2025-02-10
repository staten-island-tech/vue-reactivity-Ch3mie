<template>
  <div>
    <h2 class="text-xl font-semibold">{{ weapons.name }}</h2>
    <p class="text-gray-400">
      Attack: <span class="text-white">{{ weapons.attack }}</span>
    </p>
    <p class="text-gray-400">
      Defense: <span class="text-white">{{ weapons.defense }}</span>
    </p>
    <p class="text-gray-400">
      Speed: <span class="text-white">{{ weapons.speed }}</span>
    </p>
    <p class="text-gray-400">
      Magic: <span class="text-white">{{ weapons.magic }}</span>
    </p>
  </div>
</template>

<script setup>
import { weapons } from '@/main'
</script>

<style scoped></style>
