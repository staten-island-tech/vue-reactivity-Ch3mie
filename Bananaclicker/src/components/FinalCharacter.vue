<template>
  <h2 class="text-2xl font-bold">{{ selectedCharacter.name }}</h2>
  <img :src="selectedCharacter.image" class="w-32 h-32 object-cover mx-auto my-4" />
  <p class="text-lg">
    Equipped Weapon: <span class="text-yellow-400">{{ selectedCharacter.equippedWeapon }}</span>
  </p>

  <div class="mt-4">
    <p>
      Health: <span class="text-green-400">{{ selectedCharacter.buffedStats.health }}</span>
    </p>
    <p>
      Attack: <span class="text-red-400">{{ selectedCharacter.buffedStats.attack }}</span>
    </p>
    <p>
      Defense: <span class="text-blue-400">{{ selectedCharacter.buffedStats.defense }}</span>
    </p>
    <p>
      Speed: <span class="text-yellow-400">{{ selectedCharacter.buffedStats.speed }}</span>
    </p>
    <p>
      Magic: <span class="text-purple-400">{{ selectedCharacter.buffedStats.magic }}</span>
    </p>
  </div>
</template>

<script setup>
import { selectedCharacter } from '@/main'
</script>

<style scoped></style>
