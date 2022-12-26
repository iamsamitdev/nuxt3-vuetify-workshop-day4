—
<script lang="ts" setup>

    const data = ref({
        name: "",
        email: "",
    })

    useHead({
        title: 'ติดต่อเรา',
        meta: [
            { 
            name: 'keywords', 
            content: 'ติดต่อเรา, Nuxt 3, Backend'
            },
            {
            name: 'Description',
            content: 'ติดต่อเรา Nuxt 3,  IT Genius Engineering'
            }
        ]
    })
</script>

<template>
    <div class="mb-5">

        <div class="wrapper">
            <v-row justify="center">
                <v-col cols="12" sm="10" md="9" lg="7">
                    <div class="text-center">
                    <h2 class="ui-title font-weight-bold text-white mb-4">ติดต่อเรา</h2>
                    <p class="text-white">
                        Here you can check Demos we created you can easily use it. Its
                        quite easy to Create your own dream website & dashboard in
                        No-time.
                    </p>
                    </div>
                </v-col>
            </v-row>
        </div>

        <v-container>
        <v-row justify="center">
          <v-col cols="12" sm="12" md="12" lg="8">
            <div>
              <h2 class="font-weight-medium mb-5">
                ฝากข้อความถึงเรา
              </h2>
              <form>
                <v-row class="mt-15">
                  <v-col cols="12" md="6" class="py-0 pl-0">
                    <v-text-field
                      label="Name"
                      outlined
                      v-model="data.name"
                      placeholder="Name"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" md="6" class="py-0 pl-0">
                    <v-text-field
                      label="Email"
                      outlined
                      type="email"
                      v-model="data.email"
                      placeholder="Email"
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="py-0 pl-0">
                    <v-textarea
                      name="message"
                      outlined
                      label="Message"
                      rows="3"
                    ></v-textarea>
                  </v-col>
                </v-row>
                <v-btn
                  nuxt
                  to="/contact"
                  class="btn-custom-md btn-danger-gradient"
                  outlined
                  color="error"
                  elevation="0"
                >
                  ส่งข้อมูล
                </v-btn>
              </form>
            </div>
          </v-col>
          <v-col cols="12" sm="12" md="12" lg="4">
            <div class="primary">
              <h2 class="detail-title font-weight-medium">
                สถาบันไอทีจีเนียส
              </h2>
              <p class="mt-5">เลขที่ 3/449 Ladprao 68</p>
              <p class="mb-5">info@itgenius.com</p>
              <p class="mt-5">เลขที่ 5 Ladprao Ave.</p>
              <p>Ladprao Road, BKK 10230</p>
            </div>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<style scoped>
    .wrapper {
        background: #2196F3;
        padding: 40px 0 20px;
        min-height: 400px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }
    .ui-title {
        font-size: 32px;
    }

    .font-18 {
        font-size: 18px;
    }

    .contact-detail-card .detail-title {
        line-height: 36px;
        font-size: 30px;
        margin-bottom: 10px;
    }

    .contact-title {
        margin: 20px 0 15px;
        line-height: 26px;
        font-size: 21px;
    }

    .btn-custom-md {
        padding: 15px 35px !important;
        height: auto;
    }

</style>