<script lang="ts" setup>
    useHead({
        title: 'เกี่ยวกับเรา',
        meta: [
            { 
            name: 'keywords', 
            content: 'เกี่ยวกับเรา, Nuxt 3, Backend'
            },
            {
            name: 'Description',
            content: 'เกี่ยวกับเรา Nuxt 3,  IT Genius Engineering'
            }
        ]
    })
</script>

<template>
  <div class="wrapper">
        <v-row justify="center">
        <v-col cols="12" sm="10" md="9" lg="7">
            <div class="text-center">
            <h2 class="ui-title font-weight-bold text-white mb-4">เกี่ยวกับเรา</h2>
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
        <v-col cols="12" md="6">
          <v-card elevation="0">
            <v-card-text>
              <div class="icon-round bg-light-info">
                <i class="mdi mdi-star"></i>
              </div>
              <h5 class="font-weight-medium font-18">โซลูชั่นสำเร็จรูป</h5>
              <p class="mt-10 mb-8">
                  Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, praesentium esse tenetur corrupti ducimus porro enim laudantium iste fugiat deleniti.
              </p>
              <a
                href="#"
                class="
                  text-themecolor
                  linking
                  text-decoration-none
                  d-flex
                  align-center
                "
              >
                ดูรายละเอียด <i class="mdi mdi-arrow-right"></i>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
        <v-col cols="12" md="6">
          <v-card elevation="0">
            <v-card-text>
              <div class="icon-round bg-light-info">
                <i class="mdi mdi-check-circle"></i>
              </div>
              <h5 class="font-weight-medium font-18">เทคนิคทรงพลัง</h5>
              <p class="mt-10 mb-8">
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Velit, praesentium esse tenetur corrupti ducimus porro enim laudantium iste fugiat deleniti.
              </p>
              <a
                href="#"
                class="
                  text-themecolor
                  linking
                  text-decoration-none
                  d-flex
                  align-center
                "
              >
              ดูรายละเอียด<i class="mdi mdi-arrow-right"></i>
              </a>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>

    <v-row justify="center" class="bg-primary">
      <v-col cols="12" sm="10" md="9" lg="7">
        <div class="text-center my-10">
          <h2 class="ui-title font-weight-bold">บริการจากเรา</h2>
          <p>
            Here you can check Demos we created you can easily use it. Its
            quite easy to Create your own dream website & dashboard in
            No-time.
          </p>
        </div>
      </v-col>
    </v-row>

    <div class="formbanner1-component">
      <v-container>
        <v-row justify="center">
          <v-col cols="12" md="7" lg="5" class="d-flex align-center">
            <div class="text-center text-md-left">
              <h2 class="formbanner1-title font-weight-bold">
                Give your Business Real boost Now!
              </h2>
              <p class="mt-16 pt-4">
                To accomplish great things, we must not only act, but also
                dream; not only plan, but also believe.
              </p>
              <div class="mt-16 pt-2">
                <form>
                  <div class="stylish-input-group">
                    <v-text-field
                      placeholder="Enter Email Address"
                      solo
                    ></v-text-field>
                    <v-btn
                      rounded
                      color="primary"
                      elevation="0"
                      class="text-uppercase font-weight-medium"
                      dark
                    >
                      Get Started
                    </v-btn>
                  </div>
                </form>
              </div>
            </div>
          </v-col>
          <v-col cols="12" md="5" lg="6" class="ml-auto">
            <v-img src="/images/form-banner/form-banner1.png" alt="banner"/>
          </v-col>
        </v-row>
      </v-container>
    </div>
</template>

<style scoped>
    .ui-title {
        font-size: 32px;
    }

    .font-18 {
        font-size: 18px;
    }
    
    .icon-round{
        background-color: blueviolet;
        color: #fff;
        display: inline-block;
        padding:30px 20px;
        width: 80px;
        height: 80px;
        border-radius: 50%;
        margin: 20px 0px;
    }

    .bg-light-info{
        font-size: 40px;
    }

    .wrapper {
        background: #2196F3;
        padding: 40px 0 20px;
        min-height: 400px;
        display: flex;
        align-items: center;
        margin-bottom: 20px;
    }

    .formbanner1-component {
      background-color: #e9f3f8;
    }

    .formbanner1-title {
      font-size: 48px;
      line-height: 1;
      letter-spacing: -1px;
      margin: 20px 0 15px;
    }

</style>