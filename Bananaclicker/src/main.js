import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

const app = createApp(App)

app.use(router)

app.mount('#app')

import { reactive } from 'vue'

export const selectedCharacter = reactive({
  name: '',
  health: 0,
  attack: 0,
  defense: 0,
  speed: 0,
  magic: 0,
  equippedWeapon: null,
  image: '',
})

export const selection = (character) => {
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

export const characters = reactive([
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
    name: 'Frostborn Dagger of the Arctic',
    buffs: { attack: 10, speed: 20, defense: 0, magic: 0, health: 0 },
    image: 'knife.webp',
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
    name: 'Legendary Warhammer of Runeterra',
    buffs: { attack: 20, speed: 0, defense: 15, magic: 0, health: 0 },
    image: 'hammer.png',
  },
]
