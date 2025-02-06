<template>
  <form @submit="selection">
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
const selection = (event) => {
  event.preventDefault()
}
</script>
