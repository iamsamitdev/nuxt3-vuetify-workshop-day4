import { createVuetify } from "vuetify";
import { aliases, mdi } from 'vuetify/iconsets/mdi'
import "@mdi/font/css/materialdesignicons.css"
import * as components from "vuetify/components"
import * as directives from "vuetify/directives"

export default defineNuxtPlugin(nuxtApp => {
    const vuetify = createVuetify({
      components,
      directives,
      icons: {
        defaultSet: 'mdi',
        aliases,
        sets: {
            mdi,
        }
      },
      theme: {
          defaultTheme: 'light',
          themes: {
            light: {
              colors: {
                primary: "#1e88e5",
                info: "#03c9d7",
                success: "#05b187",
                accent: "#fc4b6c",
                warning: "#fec90f",
                error: "#fc4b6c",
                secondary: "#0cb9c5",
              },
            },
            dark: {
              colors: {
                primary: "#1e88e5",
                info: "#03c9d7",
                success: "#05b187",
                accent: "#fc4b6c",
                warning: "#fec90f",
                error: "#fc4b6c",
                secondary: "#0cb9c5",
              },
            },
          },
      },
    })
  
    nuxtApp.vueApp.use(vuetify)
})
