<template>
  <button
    type="submit"
    class="px-6 py-3 mt-4 text-lg font-semibold text-white transition duration-300 bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 hover:shadow-lg active:scale-95 focus:outline-none focus:ring-4 focus:ring-blue-300"
  >
    Choose this Character
  </button>
</template>

<script setup>
import characters from './characters.vue'
const selection = (event) => {
  event.preventDefault()
  console.log(characters.name)
}
</script>
