<template>
  <div
    class="flex flex-col items-center bg-gray-900 text-white p-8 rounded-2xl shadow-lg text-center max-w-md mx-auto"
  >
    <h2 class="text-3xl font-bold mb-4">{{ selectedCharacter.name }}</h2>

    <img
      v-if="selectedCharacter.image"
      :src="selectedCharacter.image"
      :alt="selectedCharacter.name"
      class="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md mb-4"
    />

    <div class="text-lg">
      <p>
        Health: <span class="font-semibold">{{ selectedCharacter.health }}</span>
      </p>
      <p>
        Attack: <span class="font-semibold">{{ selectedCharacter.attack }}</span>
      </p>
      <p>
        Defense: <span class="font-semibold">{{ selectedCharacter.defense }}</span>
      </p>
      <p>
        Speed: <span class="font-semibold">{{ selectedCharacter.speed }}</span>
      </p>
      <p>
        Magic: <span class="font-semibold">{{ selectedCharacter.magic }}</span>
      </p>
    </div>

    <div v-if="selectedCharacter.equippedWeapon" class="mt-6">
      <h3 class="text-xl font-semibold mb-2">Equipped Weapon</h3>
      <p class="text-lg">{{ selectedCharacter.equippedWeapon }}</p>

      <img
        v-if="selectedCharacter.equippedWeaponImage"
        :src="selectedCharacter.equippedWeaponImage"
        :alt="selectedCharacter.equippedWeapon"
        class="w-24 h-24 object-cover rounded-lg border-2 border-white shadow-md mt-2"
      />
    </div>

    <p v-else class="mt-6 text-gray-400">No weapon equipped</p>
  </div>
</template>

<script setup>
import { selectedCharacter } from '@/main'
import { ref, watch } from 'vue'

const characterImage = ref(null)
const weaponImage = ref(null)

watch(
  () => selectedCharacter.image,
  (newImage) => {
    if (newImage) {
      import(`../assets/images/${newImage}`)
        .then((module) => {
          characterImage.value = module.default
        })
        .catch((error) => {
          console.error('Error loading character image:', error)
          // Optionally set a placeholder image here
          characterImage.value = null // Or a default image path
        })
    } else {
      characterImage.value = null
    }
  },
)

watch(
  () => selectedCharacter.equippedWeaponImage,
  (newImage) => {
    if (newImage) {
      import(`../assets/images/${newImage}`)
        .then((module) => {
          weaponImage.value = module.default
        })
        .catch((error) => {
          console.error('Error loading weapon image:', error)
          weaponImage.value = null
        })
    } else {
      weaponImage.value = null
    }
  },
)
</script>
