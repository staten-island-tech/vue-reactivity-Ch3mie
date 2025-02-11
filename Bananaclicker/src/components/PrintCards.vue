<template>
  <div ref="container" class="container mx-auto p-6">
    <h1 class="text-3xl font-bold mb-6 text-center">Characters</h1>
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="character in characters"
        :key="character.name"
        class="bg-gray-800 text-white p-6 rounded-2xl shadow-lg flex flex-col items-center transform transition duration-300 hover:scale-105 hover:shadow-2xl"
      >
        <div>
          <CharacterImage :character="character" />
        </div>
        <CharacterStats :character="character" />
        <ChooseCharacter
          @click="
            () => {
              selection(character)
              clearHtml()
            }
          "
          :character="character"
        />
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
import { characters, selection } from '@/main'

const container = ref(null) // Define container reference

const clearHtml = () => {
  if (container.value) {
    container.value.innerHTML = '' // Clears the container div content
  }
}
</script>
