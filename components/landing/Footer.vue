<template>
  <v-footer>
      <v-container>
          <v-row class="py-0">
              <v-col cols="12" sm="6" md="6" lg="3" class="px-0">
                  <h4 class="font-weight-bold font-18 mt-5">Address</h4>
                  <p class="mt-2 mb-0">3/499 Ladprao Wanghin 68 Bangkok 10230</p>
              </v-col>
              <v-col cols="12" sm="6" md="6" lg="3" class="px-0">
                  <h4 class="font-weight-bold font-18 mt-5">Phone</h4>
                  <p class="mt-2 mb-0">Reception : +66 02 570-8449</p>
                  <p>Office : +66 02 570-8449</p>
              </v-col>
              <v-col cols="12" sm="6" md="6" lg="3" class="px-0">
                  <h4 class="font-weight-bold font-18 mt-5">Email</h4>
                  <p class="mt-2 mb-0">
                  Office : <a class="dark-link" href="/">contact@itgenius.co.th</a>
                  </p>
                  <p>
                  Site :
                  <a class="dark-link" href="https://www.itgenius.co.th/"
                      >itgenius.co.th</a
                  >
                  </p>
              </v-col>
              <v-col cols="12" sm="6" md="6" lg="3" class="px-0">
                  <h4 class="font-weight-bold font-18 mt-5">Social</h4>
                  <div class="social-icons mt-2">
                      <a href="#" class="ml-0">
                          <v-icon icon="mdi mdi-facebook" size="24"></v-icon>
                      </a>
                      <a href="#">
                          <v-icon icon="mdi mdi-twitter" size="24"></v-icon>
                      </a>
                      <a href="#">
                          <v-icon icon="mdi mdi-youtube" size="24"></v-icon>
                      </a>
                      <a href="#">
                          <v-icon icon="mdi mdi-instagram" size="24"></v-icon>
                      </a>
                  </div>
              </v-col>
          </v-row>
          
          <div class="footer-bottom-bar font-14 mt-10 mb-5">
              <v-row>
                  <v-col sm="12" md="6" lg="6" class="px-0 py-0">
                      <p>All Rights Reserved by<a href="https://www.itgenius.co.th/" class="link">itgenius.co.th</a></p>
                  </v-col>
                  <v-col sm="12" md="6" lg="6" class="px-0 py-0 text-md-right">
                      <a href="#" class="link px-0">Terms</a>
                      <a href="#" class="link px-4">Legal</a>
                      <a href="#" class="link px-4">Privacy</a> 
                  </v-col>
              </v-row>
          </div>

      </v-container>
  </v-footer>
</template>

<style scoped>
.v-footer {
  background: lightslategrey;
  color: #fff;
}

a:link, a:visited {
  color: #fff;
  text-decoration: none;
}

.social-icons a {
  width: 34px;
  height: 34px;
  line-height: 34px;
  text-align: center;
  display: inline-block;
  border-radius: 100%;
  margin: 0 5px;
  transition: 0.2s ease-in;
  color: #fff;
  text-decoration: none;
}

.social-icons a:hover {
  transform: translate3d(0px, -5px, 0px);
  background: #1e88e5;
  color: #fff;
}

.footer-bottom-bar {
  padding-top: 10px;
  margin-top: 20px;
}
</style>