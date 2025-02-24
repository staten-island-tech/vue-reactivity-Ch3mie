// main.js
import './assets/main.css'

import { createApp, reactive } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)
app.use(router)
app.mount('#app')

// Reactive character selection
export const selectedCharacter = reactive({
  name: '',
  health: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  magic: 0,
  equippedWeapon: null,
  image: '',
  equippedWeaponImage: '',
})

// Function to select a character
export const selection = (character) => {
  Object.assign(selectedCharacter, character) // More concise way to update
  selectedCharacter.equippedWeaponImage = '' // Reset weapon image on character change
  console.log(selectedCharacter)
}

// Function to select a weapon
export const wselection = (weapon) => {
  if (!selectedCharacter.name) return

  selectedCharacter.equippedWeapon = weapon.name
  selectedCharacter.equippedWeaponImage = weapon.image

  // Reset stats before applying buffs
  selectedCharacter.health -= weapon.buffs.health || 0
  selectedCharacter.attack -= weapon.buffs.attack || 0
  selectedCharacter.defense -= weapon.buffs.defense || 0
  selectedCharacter.speed -= weapon.buffs.speed || 0
  selectedCharacter.magic -= weapon.buffs.magic || 0

  selectedCharacter.health += weapon.buffs.health || 0
  selectedCharacter.attack += weapon.buffs.attack || 0
  selectedCharacter.defense += weapon.buffs.defense || 0
  selectedCharacter.speed += weapon.buffs.speed || 0
  selectedCharacter.magic += weapon.buffs.magic || 0

  console.log('Character with weapon:', selectedCharacter)
}

// Characters List
export const characters = reactive([
  {
    name: 'Warrior',
    health: 120,
    attack: 90,
    defense: 100,
    speed: 80,
    magic: 10,
    image: 'steve.webp',
  },
  { name: 'Mage', health: 80, attack: 60, defense: 50, speed: 50, magic: 160, image: 'friren.png' },
  {
    name: 'Assassin',
    health: 80,
    attack: 110,
    defense: 30,
    speed: 150,
    magic: 30,
    image: 'hit.webp',
  },
  { name: 'Tank', health: 160, attack: 50, defense: 130, speed: 20, magic: 40, image: 'tank.png' },
  {
    name: 'Archer',
    health: 80,
    attack: 110,
    defense: 50,
    speed: 120,
    magic: 40,
    image: 'archer.png',
  },
  {
    name: 'Conjurer',
    health: 85,
    attack: 90,
    defense: 50,
    speed: 85,
    magic: 90,
    image: 'yone.webp',
  },
  {
    name: 'Alchemist',
    health: 80,
    attack: 70,
    defense: 60,
    speed: 75,
    magic: 115,
    image: 'monkey.jfif',
  },
  {
    name: 'Goku',
    health: 99999999999,
    attack: 999999999999999,
    defense: 99999999999,
    speed: 999,
    magic: 0,
    image: 'goku.jpg',
  },
  {
    name: 'Dylan Jiang The Hobo',
    health: 50,
    attack: 20,
    defense: 40,
    speed: 50,
    magic: 0,
    image: 'Dylan.jpeg',
  },
])

// Weapons List
export const weapons = [
  {
    name: 'Small Sword',
    buffs: { attack: 15, speed: 10, defense: 0, magic: 0, health: 0 },
    image: 'doomslayer.webp',
  },
  {
    name: 'Arcane Staff of Darkness',
    buffs: { attack: 0, speed: 0, defense: 0, magic: 20, health: 5 },
    image: 'staff.webp',
  },
  {
    name: 'Frostborn Dagger of the Arctic Warriors',
    buffs: { attack: 10, speed: 20, defense: 0, magic: 0, health: 0 },
    image: 'knife.png',
  },
  {
    name: 'Colony of the United Kingdom Shield',
    buffs: { attack: 0, speed: 0, defense: 25, magic: 0, health: 10 },
    image: 'Shield.webp',
  },
  {
    name: 'Gun',
    buffs: { attack: 12, speed: 0, defense: 0, magic: 18, health: 0 },
    image: 'gun.png',
  },
  {
    name: 'The Lost Fabled Legendary Warhammer of Home Depot',
    buffs: { attack: 20, speed: 0, defense: 15, magic: 0, health: 0 },
    image: 'hammer.png',
  },
]
