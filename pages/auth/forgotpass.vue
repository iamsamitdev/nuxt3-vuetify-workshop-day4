<script setup lang="ts">

  definePageMeta({
    layout: "auth",
  })
  
  useHead({
    title: 'ลืมรหัสผ่าน',
    meta: [
      { 
        name: 'keywords', 
        content: 'ลืมรหัสผ่าน, Nuxt 3, Backend'
      },
      {
        name: 'Description',
        content: 'ลืมรหัสผ่าน Nuxt 3,  IT Genius Engineering'
      }
    ]
  })

  const valid = ref(true)
  const email = ref("")
  
  const emailRules = ref([
    (v: string) => !!v || "ต้องป้อนอีเมล์",
    (v: string) => /.+@.+\..+/.test(v) || "รูปแบบอีเมล์ไม่ถูกต้อง",
  ])

</script>

<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col lg="6" md="8" sm="12" xl="6">
        <v-card elevation="10">
          <v-row>
            <v-col lg="12">
              <div class="pa-7 pa-sm-12">
                <p class="text-center"><img src="/images/logos/dark-logo-icon.svg" /></p>
                <h2 class="font-weight-bold text-center mt-4 text--darken-2">ลืมรหัสผ่าน</h2>
                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/dashboards/analytical"
                >
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="E-mail"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-btn
                    color="primary"
                    to="/auth/login"
                    block
                    class="py-6 mt-4"
                    size="x-large"
                    submit
                    >ส่งข้อมูล</v-btn
                  >
                  <div class="text-center mt-6"><v-btn variant="text" class="mb-4" to="/auth/login"><i class="mdi mdi-arrow-left"></i> กลับหน้าเข้าระบบ</v-btn></div>
                </v-form>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped></style>
