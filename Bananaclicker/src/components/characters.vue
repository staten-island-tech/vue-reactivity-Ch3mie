<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Characters</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="character in characters"
        :key="character.name"
        class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center"
      >
        <img
          :src="character.image || 'https://via.placeholder.com/150'"
          alt="Character Image"
          class="w-32 h-32 rounded-full border-4 border-gray-600 mb-4"
        />
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
    </div>
  </div>
</template>

<script setup>
import { reactive } from 'vue'

const characters = reactive([
  {
    name: 'Warrior',
    health: 120,
    attack: 90,
    defense: 100,
    speed: 80,
    magic: 10,
    equippedWeapon: null,
    image: 'steve.webp',
  },
  {
    name: 'Mage',
    health: 80,
    attack: 60,
    defense: 50,
    speed: 50,
    magic: 160,
    equippedWeapon: null,
    image: 'friren.png',
  },
  {
    name: 'Assassin',
    health: 80,
    attack: 110,
    defense: 30,
    speed: 150,
    magic: 30,
    equippedWeapon: null,
    image: 'hit.webp',
  },
  {
    name: 'Tank',
    health: 160,
    attack: 50,
    defense: 130,
    speed: 20,
    magic: 40,
    equippedWeapon: null,
    image: 'tank.png',
  },
  {
    name: 'Archer',
    health: 80,
    attack: 110,
    defense: 50,
    speed: 120,
    magic: 40,
    equippedWeapon: null,
    image: 'archer.png',
  },
  {
    name: 'Conjurer',
    health: 85,
    attack: 90,
    defense: 50,
    speed: 85,
    magic: 90,
    equippedWeapon: null,
    image: 'archer.png',
  },
  {
    name: 'Alchemist',
    health: 80,
    attack: 70,
    defense: 60,
    speed: 75,
    magic: 115,
    equippedWeapon: null,
    image: 'archer.png',
  },
  {
    name: 'Goku',
    health: 99999999999,
    attack: 999999999999999,
    defense: 99999999999,
    speed: 999999999999999,
    magic: 0,
    equippedWeapon: null,
    image: 'archer.png',
  },
  {
    name: 'Dylan Jiang The Hobo',
    health: 50,
    attack: 20,
    defense: 40,
    speed: 50,
    magic: 0,
    equippedWeapon: null,
    image: 'Dylan.jpeg',
  },
])
</script>
