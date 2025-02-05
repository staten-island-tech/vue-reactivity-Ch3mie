<template>
  <form @submit="handleSubmit">
    <button type="submit">Submit</button>
  </form>
</template>

<script setup>
const handleSubmit = (event) => {
  event.preventDefault()
  alert('Form submitted without refreshing!')
}
</script>
