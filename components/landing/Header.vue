<script setup lang="ts">

  import headerItems from './headerItems'
  import { useDisplay } from "vuetify"

  const drawer = ref(false)
  const { mdAndUp } = useDisplay()
  const headerMenu = ref(headerItems)

</script>

<template>

    <div>
      <v-app-bar app color="blue accent-4" dark elevation="0">
        <v-app-bar-nav-icon @click="drawer = !drawer" class="d-block d-sm-none"></v-app-bar-nav-icon>
        <NuxtLink to="/" class="d-block d-lg-none brand ml-8">NuxtPress</NuxtLink>
        <v-container>
          <v-row>

            <v-col class="d-none d-lg-block" sm="12" md="12" lg="4">
              <v-toolbar-title>
                <NuxtLink to="/" class="d-flex brand mt-2">NuxtPress</NuxtLink>
              </v-toolbar-title>
            </v-col>

            <v-col class="d-none d-sm-block text-end" sm="12" md="12" lg="8">
                <v-btn class="menu" v-for="(item, i) in headerMenu" :to="item.to" :key="i">{{ item.title }}</v-btn>
                <v-btn class="menu" icon><v-icon>mdi-magnify</v-icon></v-btn>
            </v-col>

          </v-row>
        </v-container>
      </v-app-bar>
      
      <!-- Mobile Menu -->
      <v-navigation-drawer
        left
        elevation="10"
        app
        :temporary="mdAndUp"
        v-model="drawer"
        expand-on-hover
      >
        <v-list>
          <v-list-item v-for="(item, i) in headerMenu" :to="item.to" class="mb-1" :key="i">
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item>
        </v-list>
      </v-navigation-drawer>
      
    </div>

</template>

<style scoped>
  .brand {
    font-size: 20px;
    color: #fff;
    text-decoration: none;
    font-weight: bold;
  }

  .menu{
    font-size: 16px;
  }
</style>