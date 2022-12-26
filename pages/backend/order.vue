Then add code
—
<script setup lang="ts">

  definePageMeta({
    layout: "backend",
  })

  useHead({
    title: 'Order',
    meta: [
      { 
        name: 'keywords', 
        content: 'Order, Nuxt 3, Backend'
      },
      {
        name: 'Description',
        content: 'Order Nuxt 3,  IT Genius Engineering'
      }
    ]
  })
</script>

<template>
  <div>
    <h1>Order</h1>
    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Qui rem praesentium a? Iusto dolore officiis aspernatur, exercitationem, debitis quam excepturi et odit voluptatum quos, aliquid fuga quo cumque itaque nisi.</p>
  </div>
</template>

<style scoped></style>
