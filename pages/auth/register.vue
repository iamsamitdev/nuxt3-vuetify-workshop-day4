<script setup lang="ts">

  definePageMeta({
    layout: "auth",
  })

  useHead({
    title: 'ลงทะเบียน',
    meta: [
      { 
        name: 'keywords', 
        content: 'ลงทะเบียน, Nuxt 3, Backend'
      },
      {
        name: 'Description',
        content: 'ลงทะเบียน Nuxt 3,  IT Genius Engineering'
      }
    ]
  })

  const checkbox = ref(false)
  const valid = ref(true)
  const show1 = ref(false)

  const password = ref("")
  const email = ref("")

  const passwordRules = ref([
    (v: string) => !!v || "ต้องป้อนรหัสผ่าน",
    (v: string) =>
    (v && v.length >= 8) || "รหัสผ่านต้องไม่น้อยกว่า 8 หลัก",
  ])

  const emailRules = ref([
    (v: string) => !!v || "ต้องป้อนอีเมล์",
    (v: string) => /.+@.+\..+/.test(v) || "รูปแบบอีเมล์ไม่ถูกต้อง",
  ])
  
  const fname = ref("");
  const fnameRules = ref([
    (v: string) => !!v || "ต้องป้อนชื่อสกุล",
    (v: string) =>
      (v && v.length >= 3) || "ชื่อต้องไม่น้อยกว่า 8 ตัวอักษร",
  ])

</script>

<template>
  <v-container id="login" class="fill-height justify-center" tag="section">
    <v-row justify="center" class="h-100vh" align="center">
      <v-col sm="12" md="12" lg="12" xl="7">
        <v-card elevation="10">
          <v-row>
            <v-col lg="5" class="pr-0">
              <div class="pa-7 pa-sm-12">
                <p class="text-center"><img src="/images/logos/dark-logo-icon.svg" /></p>
                <h2
                  class="font-weight-bold text-center mt-4 blue-grey--text text--darken-2"
                >
                  ลงทะเบียน
                </h2>
                <h6
                  class="text-subtitle-1 text-center text-grey-darken-1"
                >
                  เป็นสมาชิกอยู่แล้วใช่มั้ย ?
                  <v-btn to="/auth/login" variant="plain"
                    >เข้าสู่ระบบ</v-btn
                  >
                </h6>

                <v-form
                  ref="form"
                  v-model="valid"
                  lazy-validation
                  action="/pages/boxedlogin"
                >
                  <v-text-field
                    v-model="fname"
                    :rules="fnameRules"
                    label="ชื่อ-สกุล"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="email"
                    :rules="emailRules"
                    label="อีเมล์"
                    class="mt-4"
                    required
                    variant="outlined"
                  ></v-text-field>
                  <v-text-field
                    v-model="password"
                    :counter="8"
                    :rules="passwordRules"
                    label="รหัสผ่าน"
                    class="mt-4"
                    required
                    variant="outlined"
                    type="password"
                  ></v-text-field>

                  <div class="d-block d-sm-flex align-center mb-4 mb-sm-0">
                    <v-checkbox
                      v-model="checkbox"
                      :rules="[(v) => !!v || 'You must agree to continue!']"
                      label="ฉันยอมรับเงื่อนไขการใช้งาน"
                      required
                      hide-details
                    ></v-checkbox>
                  </div>
                  <v-btn color="primary" block class="mr-4 py-6" size="x-large" submit
                    >ลงทะเบียน</v-btn
                  >
                </v-form>

                <div class="text-center mt-6">
                  <div class="d-flex align-center justify-center gap-2">
                    <v-btn icon color="secondary">
                      <v-icon>mdi-twitter</v-icon>
                    </v-btn>
                    <v-btn icon color="primary">
                      <v-icon>mdi-github</v-icon>
                    </v-btn>
                  </div>
                </div>
              </div>
            </v-col>
            <v-col
              lg="7"
              class="bg-primary d-none d-md-flex align-center justify-center"
            >
              <div class="d-none d-sm-block">
                <div class="d-flex align-center pa-10">
                  <div>
                    <h2 class="text-h4 text-white font-weight-medium">
                      การออกแบบที่ไม่มีสิ้นสุด เราสร้างมันด้วยรักและใส่ใจ
                    </h2>
                    <h6
                      class="text-subtitle-1 mt-4 text-white font-weight-regular"
                    >
                      ไอทีจีเนียสช่วยให้นักพัฒนาได้เรียนรู้เพิ่มเติม ผ่านหลักสูตรการอบรมที่หลากหลาย
                      ครอบคลุมทุกด้าน ทั้งออกแบบ โปรแกรมมิ่ง ฐานข้อมูล โมบายแอพ ตลอดจน devops และอื่นๆ
                    </h6>
                    <v-btn
                      class="mt-6 text-capitalize"
                      size="x-large"
                      variant="outlined"
                      color="white"
                      >เรียนรู้เพิ่มเติม</v-btn
                    >
                  </div>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<style scoped>

</style>