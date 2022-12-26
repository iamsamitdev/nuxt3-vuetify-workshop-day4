<script setup lang="ts">

  import Header from "~/components/landing/Header.vue"
  import Footer from "~/components/landing/Footer.vue"

</script>

<template>
  <div>
    <v-app>
      <Header />
        <slot />
      <Footer />
    </v-app>
  </div>
</template>

<style>
  .v-row {
    margin: 0px !important
  }
</style>