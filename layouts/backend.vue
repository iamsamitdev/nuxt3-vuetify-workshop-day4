<script setup lang="ts">

import { useDisplay } from "vuetify"
import Sidebar from "~/components/backendComponents/sidebar/Sidebar.vue"
import Header from "~/components/backendComponents/header/Header.vue"

const drawer = ref(undefined || true)
// const innerW = window.innerWidth
const { mdAndUp, mdAndDown } = useDisplay()

// onMounted(() => {
//   if (innerW < 950) {
//     drawer.value = !drawer.value
//   }
// })

</script>
<template>
  <div>
    <v-app>
      <!-- ---------------------------------------------- -->
      <!---Header -->
      <!-- ---------------------------------------------- -->
      <v-app-bar elevation="0" color="primary">
        <div class="pe-5">
          <NuxtLink to="/backend/dashboard" class="d-flex brand">
            NuxtPress
          </NuxtLink>
        </div>
        <v-app-bar-nav-icon class="" @click="drawer = !drawer" />
        <v-spacer />
        <!-- ---------------------------------------------- -->
        <!-- User Profile -->
        <!-- ---------------------------------------------- -->
        <Header />
      </v-app-bar>
      <v-main>
        <!-- ---------------------------------------------- -->
        <!---Sidebar -->
        <!-- ---------------------------------------------- -->
        <v-navigation-drawer
          left
          :permanent="mdAndUp"
          elevation="10"
          app
          :temporary="mdAndDown"
          v-model="drawer"
          expand-on-hover
        >
          <Sidebar />
        </v-navigation-drawer>
        <v-container fluid class="page-wrapper">
          <slot />
        </v-container>
      </v-main>
    </v-app>
  </div>
</template>

<style scoped>
  .brand {
    font-size: 20px;
    color: #fff;
    padding-left: 20px;
    text-decoration: none;
    font-weight: bold;
  }
</style>