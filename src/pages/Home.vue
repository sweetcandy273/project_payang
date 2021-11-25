<template>
  <div>
    <q-header class="shadow-2">
      <!-- <q-toolbar>
        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar> -->
      <q-toolbar class="text-center row">
        <!-- <div
          class="col self-center font"
          @click="$router.push({ name: 'setting' })"
        >
          ตั้งค่า
        </div> -->
        <div
          class="col self-center font"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          ตั้งค่า
        </div>

        <div class="col-6 font header-title">หน้าหลัก</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="shadow-2"
    >
      <q-toolbar class="text-center row text-white">
        <div class="col font">
          <img
            class=""
            alt=""
            src="../assets/delete-user.png"
            style="width: 30px"
          />
        </div>

        <div class="col-6 font header-title">คุณชนิกานต์</div>
        <div class="col self-center">
          <img
            class=""
            alt=""
            src="../assets/pen.png"
            style="width: 30px"
            @click="$router.push({ name: 'edit_userinformation' })"
          />
        </div>
      </q-toolbar>
      <div class="q-pa-md font">
        <div class="row">
          <div class="col text-left"><strong>ชื่อ</strong></div>
          <div class="col text-right">ชนิกานต์</div>
        </div>
        <div class="row">
          <div class="col text-left"><strong>นามสกุล</strong></div>
          <div class="col text-right">ปิยะพงษ์</div>
        </div>
        <div class="row">
          <div class="col text-left"><strong>เบอร์โทรศัพท์</strong></div>
          <div class="col text-right">081-222-2222</div>
        </div>

        <div>
          <strong> อีเมล </strong>
        </div>
        <div>payang01@gmail.com</div>
        <div><strong>ที่อยู่</strong></div>
        <div>112/1 ซอยหล่อโรง ถนนระนอง ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต 83000</div>
      </div>

      <div class="q-pa-md font text-center">
        <img
            class="logo"
            alt="Payang logo"
            src="../assets/forest.png"
            style="width: 80px"
          />
       <div class="text-grey">version 0.1</div>
          ออกจากระบบ
       
      </div>
    </q-drawer>

    <div class="q-px-md">
      <div class="q-pa-md">
        <div class="row text-center">
          <div class="col font" style="font-size: 25px">
            Payang App
            <q-icon name="info" style="color: #5db075">
              <q-popup-proxy :offset="[10, 10]">
                <q-banner class="bg-while font">
                  <div>แอปพลิเคชั่นวางแผนการเพาะปลูกสวนยาง</div>
                  <div>วางแผนบัญชีการเงิน</div>
                  <div class="text-right">
                    <img
                      class="logo"
                      alt=""
                      src="../assets/accounting.png"
                      style="width: 80px"
                    />
                  </div>
                </q-banner>
              </q-popup-proxy>
            </q-icon>

            <!-- <q-icon name="info" style="color: #5db075" /> -->
          </div>
        </div>
        <div class="row text-center">
          <div class="col font" style="font-size: 24px">คุณชนิกานต์</div>
        </div>
      </div>

      <div
        class="row myfarm font shadow-2"
        @click="$router.push({ name: 'myfarm' })"
      >
        <div class="col-6 q-pa-md self-center">
          <div style="font-size: 20px">สวนของฉัน</div>
        </div>
        <div class="col q-px-md text-right self-center">
          <img
            class="logo"
            alt="Payang logo"
            src="../assets/forest.png"
            style="width: 80px"
          />
        </div>
      </div>
      <div class="q-pt-md text-center font" style="font-size: 20px">ผลผลิต</div>
      <div class="q-py-md">
        <q-btn-toggle
          class="shadow-2"
          v-model="secondModel"
          spread
          @click="toggle(secondModel)"
          no-caps
          rounded
          unelevated
          toggle-color="grey-8"
          color="grey-5"
          text-color="white"
          :options="[
            { label: 'ปี', value: 'yearly' },
            { label: 'เดือน', value: 'monthly' },
          ]"
        />
      </div>
    </div>

    <div>
      <div v-if="secondModel == 'yearly'" class="text-center" id="yearly">
        <ProductYearly />
      </div>
      <div v-else class="text-center">
        <ProductMonthly />
      </div>
    </div>
  </div>
</template>


<script>
// import useQuasar from "quasar";
// import ref from "vue";

import ProductYearly from "../components/ProductYearly.vue";
import ProductMonthly from "../components/ProductMonthly.vue";

export default {
  // name: "yearly",
  components: {
    ProductYearly,
    ProductMonthly,
  },

  data() {
    return {
      leftDrawerOpen: false,
      model: null,
      secondModel: "yearly",
    };
  },
  methods: {
    toggle(data) {
      // console.log(data);
    },
  },
};
</script>


<style scoped src="../css/home.css">
</style>
