<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">
      {{ showWeapons ? 'Weapons' : 'Characters' }}
    </h1>

    <div v-if="!showWeapons" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="character in characters"
        :key="character.name"
        class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <CharacterImage :character="character" />
        <CharacterStats :character="character" />
        <ChooseCharacter @click="selectCharacter(character)" :character="character" />
      </div>
    </div>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="weapon in weapons"
        :key="weapon.name"
        class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <WeaponsCards :weapon=""/>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CharacterImage from './CharacterImage.vue'
import CharacterStats from './CharacterStats.vue'
import ChooseCharacter from './ChooseCharacter.vue'
import WeaponsCards from './WeaponsCards.vue'
import { weapons } from '@/main'
import { characters, selection } from '@/main'

const showWeapons = ref(false) // Track whether to show weapons

const selectCharacter = (character) => {
  selection(character) // Call selection function
  showWeapons.value = true // Hide characters and show weapons
}
</script>
