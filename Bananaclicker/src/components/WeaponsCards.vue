<template>
  <div class="text-center">
    <img :src="`${weapon.image}`" alt="Weapon Image" class="w-24 h-24 mb-4" />
    <h2 class="text-xl font-semibold">{{ weapon.name }}</h2>
    <p class="text-gray-400">
      Attack: <span class="text-white">{{ weapon.buffs.attack }}</span>
    </p>
    <p class="text-gray-400">
      Defense: <span class="text-white">{{ weapon.buffs.defense }}</span>
    </p>
    <p class="text-gray-400">
      Speed: <span class="text-white">{{ weapon.buffs.speed }}</span>
    </p>
    <p class="text-gray-400">
      Magic: <span class="text-white">{{ weapon.buffs.magic }}</span>
    </p>
    <p class="text-gray-400">
      Health: <span class="text-white">{{ weapon.buffs.health }}</span>
    </p>
  </div>
</template>

<script setup>
defineProps({ weapon: Object }) // Accepts weapon as a prop
</script>
