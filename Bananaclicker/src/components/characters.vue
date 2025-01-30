<template>
  <div></div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const characters = reactive([
  {
    name: 'Warrior',
    health: 100,
    attack: 80,
    defense: 90,
    speed: 60,
    magic: 0,
    equippedWeapon: null,
    image: '',
  },
  {
    name: 'Mage',
    health: 70,
    attack: 50,
    defense: 40,
    speed: 60,
    magic: 100,
    equippedWeapon: null,
    image: '',
  },
  {
    name: 'Assassin',
    health: 80,
    attack: 70,
    defense: 50,
    speed: 90,
    magic: 40,
    equippedWeapon: null,
    image: '',
  },
  {
    name: 'Tank',
    health: 90,
    attack: 70,
    defense: 80,
    speed: 50,
    magic: 60,
    equippedWeapon: null,
    image: '',
  },
  {
    name: 'Archer',
    health: 80,
    attack: 85,
    defense: 40,
    speed: 95,
    magic: 30,
    equippedWeapon: null,
    image: '',
  },
])
</script>

<style scoped></style>
