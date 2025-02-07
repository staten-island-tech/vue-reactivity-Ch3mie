<template></template>

<script setup>
import { reactive } from 'vue'

const selectedCharacter = reactive({
  name: '',
  health: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  magic: 0,
  equippedWeapon: null,
  image: '',
})

const selection = (character) => {
  selectedCharacter.name = character.name
  selectedCharacter.health = character.health
  selectedCharacter.attack = character.attack
  selectedCharacter.defense = character.defense
  selectedCharacter.speed = character.speed
  selectedCharacter.magic = character.magic
  selectedCharacter.equippedWeapon = character.equippedWeapon
  selectedCharacter.image = character.image

  console.log(selectedCharacter)
}

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
    image: 'yone.webp',
  },
  {
    name: 'Alchemist',
    health: 80,
    attack: 70,
    defense: 60,
    speed: 75,
    magic: 115,
    equippedWeapon: null,
    image: 'monkey.jfif',
  },
  {
    name: 'Goku',
    health: 99999999999,
    attack: 999999999999999,
    defense: 99999999999,
    speed: 999,
    magic: 0,
    equippedWeapon: null,
    image: 'goku.jpg',
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
