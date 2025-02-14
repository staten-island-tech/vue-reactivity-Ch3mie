<template>
  <div class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">
      {{ showStats ? 'Character Stats' : showWeapons ? 'Weapons' : 'Characters' }}
    </h1>

    <!-- Character selection -->
    <div
      v-if="!showWeapons && !showStats"
      class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
    >
      <div
        v-for="character in characters"
        :key="character.name"
        class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <CharacterImage :character="character" />
        <CharacterStats :character="character" />
        <ChooseCharacter @click="selectCharacter(character)" />
      </div>
    </div>

    <!-- Weapon selection -->
    <div v-if="showWeapons" class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="weapon in weapons"
        :key="weapon.name"
        class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <WeaponsCards :weapon="weapon" />
        <TheWeapons @click="selectWeapon(weapon)" />
      </div>
    </div>

    <!-- Final Character Stats -->
    <div
      v-if="showStats"
      class="bg-gray-900 text-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto"
    >
      <FinalCharacter />
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import CharacterImage from './CharacterImage.vue'
import CharacterStats from './CharacterStats.vue'
import ChooseCharacter from './ChooseCharacter.vue'
import WeaponsCards from './WeaponsCards.vue'
import TheWeapons from './TheWeapons.vue'
import { weapons, characters, selection, wselection } from '@/main'
import FinalCharacter from './FinalCharacter.vue'

const showWeapons = ref(false)
const showStats = ref(false)

const selectCharacter = (character) => {
  selection(character)
  showWeapons.value = true
}

const selectWeapon = (weapon) => {
  wselection(weapon)
  showWeapons.value = false
  showStats.value = true
}
</script>
