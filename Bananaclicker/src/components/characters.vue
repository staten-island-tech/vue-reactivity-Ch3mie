<template>
  <div></div>
</template>

<script setup>
import { reactive, computed } from 'vue'

const characters = reactive([
  {
    name: 'Warrior',
    health: -100,
    attack: 80,
    defense: 90,
    speed: 60,
    magic: 0,
    equippedWeapon: null,
  },
  {
    name: 'Mage',
    health: 70,
    attack: 50,
    defense: 40,
    speed: 60,
    magic: 100,
    equippedWeapon: null,
  },
  {
    name: 'Rogue',
    health: 80,
    attack: 70,
    defense: 50,
    speed: 90,
    magic: 40,
    equippedWeapon: null,
  },
  {
    name: 'Paladin',
    health: 90,
    attack: 70,
    defense: 80,
    speed: 50,
    magic: 60,
    equippedWeapon: null,
  },
  {
    name: 'Archer',
    health: 80,
    attack: 85,
    defense: 40,
    speed: 95,
    magic: 30,
    equippedWeapon: null,
  },
  {
    name: 'Necromancer',
    health: 60,
    attack: 65,
    defense: 40,
    speed: 50,
    magic: 95,
    equippedWeapon: null,
  },
])

const weapons = reactive([
  {
    name: 'Sword of Might',
    buffs: { attack: 20 },
  },
  {
    name: 'Shield of Valor',
    buffs: { defense: 30 },
  },
  {
    name: 'Staff of Wisdom',
    buffs: { magic: 25 },
  },
  {
    name: 'Boots of Swiftness',
    buffs: { speed: 15 },
  },
  {
    name: 'Bow of Precision',
    buffs: { attack: 15, speed: 10 },
  },
  {
    name: 'Orb of Vitality',
    buffs: { health: 25 },
  },
])

const enemies = reactive([
  {
    name: 'Goblin',
    health: 50,
    attack: 30,
    defense: 20,
    speed: 80,
    magic: 10,
  },
  {
    name: 'Orc',
    health: 120,
    attack: 90,
    defense: 70,
    speed: 40,
    magic: 20,
  },
  {
    name: 'Dark Mage',
    health: 60,
    attack: 50,
    defense: 30,
    speed: 50,
    magic: 100,
  },
  {
    name: 'Dragon',
    health: 200,
    attack: 120,
    defense: 100,
    speed: 70,
    magic: 80,
  },
  {
    name: 'Shadow Assassin',
    health: 70,
    attack: 80,
    defense: 40,
    speed: 120,
    magic: 50,
  },
])
</script>

<style scoped></style>
