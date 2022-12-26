<script lang="ts" setup>
    useHead({
        title: 'หน้าหลัก',
        meta: [
          { 
            name: 'keywords', 
            content: 'หน้าหลัก, Nuxt 3, Backend'
          },
          {
            name: 'Description',
            content: 'หน้าหลัก Nuxt 3,  IT Genius Engineering'
          }
        ]
    })
</script>

<template>
  <div class="banner-wrapper">
    <v-container>
      <v-row>
        <v-col cols="12" md="7" lg="6" class="d-block d-lg-flex align-center">
          <div class="text-center text-md-left">
            <h1 class="banner-title font-weight-bold text-white">
              เว็บไซต์ที่สร้างด้วย Nuxt
            </h1>
            <h4 class="banner-subtitle text-white font-weight-regular">
              สร้างด้วย Nuxt 3 กับ Vuetify 3 สำหรับเนื้อหาประเทภบล็อกและบทความ
            </h4>
            <div class="mt-8 pt-2">
              <v-btn
                color="success"
                class="btn-custom-lg"
                target="_blank"
                href="https://www.itgenius.co.th"
                elevation="0"
              >
                เริ่มต้นใช้งาน
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="6">
          <v-img
            src="/images/landingpage/banner-img.png"
            alt="banner"
            class="heroimg mt-8"
          />
        </v-col>
      </v-row>
    </v-container>
  </div>

  <v-row justify="center">
      <v-col cols="12" sm="10" md="9" lg="7">
        <div class="text-center my-10">
          <h2 class="ui-title font-weight-bold mb-4">Nuxt Press</h2>
          <p>
            Here you can check Demos we created you can easily use it. Its
            quite easy to Create your own dream website & dashboard in
            No-time.
          </p>
        </div>
      </v-col>
  </v-row>

  <div class="banner1-component">
    <v-container>
      <v-row justify="center">
        <v-col cols="12" md="7" lg="6" class="d-flex align-center">
          <div class="text-center text-md-left">
            <v-chip small class="bg-dark" text-color="white">
              Creating Brands
            </v-chip>
            <h2
              class="
                banner1-title
                font-weight-bold
                text-uppercase
                text-white
              "
            >
              ONE BILLON PEOPLE USE FACEBOOK
            </h2>
            <p class="text-white op-8 font-weight-regular">
              Pellentesque vehicula eros a dui pretium ornare. Phasellus
              congue vel quam nec luctus.In accumsan at eros in dignissim.
              Cras sodales nisi nonn accumsan.
            </p>
            <div class="mt-16 pt-2">
              <v-btn
                nuxt
                large
                rounded
                to="/"
                class="btn-custom-md"
                depressed
                elevation="0"
              >
                Do you Need Help ?
              </v-btn>
            </div>
          </div>
        </v-col>
        <v-col cols="12" md="5" lg="5">
          <v-img src="/images/banner/banner1.jpg" alt="banner"/>
        </v-col>
      </v-row>
    </v-container>
  </div>

</template>

<style scoped>

@keyframes bounce {
  0% {
    transform: translateY(0);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0);
  }
}

.banner-title {
  font-size: 42px;
  line-height: 54px;
  margin: 20px 0 15px;
}

.banner-subtitle {
  font-size: 21px;
}

.banner-wrapper {
  background: #2196F3;
  padding: 40px 0 20px;
  min-height: 600px;
  display: flex;
  align-items: center;
}

.btn-custom-lg{
  font-size: 18px;
  padding: 10px 20px;
  height: auto;
}

.heroimg {
  animation: bounce 2s infinite;
}

@media (max-width: 767px) {
  .banner-title {
    font-size: 29px;
    line-height: 40px;
  }
  .banner-wrapper {
    padding: 90px 0 20px;
  }
}

@media (min-width: 1200px) {
  .banner-subtitle {
    margin-right: 150px;
  }
}

/* Banner1 */

.banner1-component {
  padding: 60px 0;
  background-color: #fdbfa8;
}

.banner1-title {
  font-size: 48px;
  line-height: 50px;
  margin: 20px 0 15px;
}

@media (max-width: 991px) {
  .banner1-component .banner1-title {
    font-size: 35px;
  }
}

</style>
