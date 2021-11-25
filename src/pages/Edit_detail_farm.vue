<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div
          class="col self-center font"
          @click="$router.push({ name: 'Detail_farm' })"
        >
          <q-icon name="close" />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md font">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>
          <div class="row">
            <div class="col q-pr-md">
              <q-input
                v-model="fname"
                label="ชื่อ"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'กรุณากรอกชื่อจริงของผู้ใช้งาน',
                ]"
              />
            </div>
            <div class="col q-pr-md">
              <q-input
                v-model="lname"
                label="นามสกุล"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล',
                ]"
              />
            </div>
          </div>

          <q-input
            v-model="farm_name"
            label="ชื่อสวน"
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length == 10) ||
                'กรุณากรอกชื่อสวน',
            ]"
          />

          <q-input
            v-model="address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          
          <q-input
            v-model="arae"
            label="เนื้อที่ปลูก(ไร่):"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกพื้นที่']"
          />
        </div>


        
      

        

          


       

      </q-form>
    </div>
  </div>
</template>




<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import { ref } from "@vue/composition-api";

export default {
  setup() {
    return {
      fname: ref("ชนิกานต์"),
      lname: ref("ปิยะพงษ์"),
      farm_name: ref("สวนภูเก็ต"),
      arae: ref("20"),
      address: ref("112/1 ซอยหล่อโรง ถนนระนอง ตำบลตลาดเหนือ "),
      address_district: ref("เมืองภูเก็ต"),
      address_province: ref("ภูเก็ต"),
      fname_admin: ref(""),
      lname_admin: ref(""),
      number_admin: ref(""),
      number_am_admin: ref(""),
      address_province_admin: ref(""),
      selectshare: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.fname);
    },
  },
};
</script>


<style>
.bg {
  background: #dae5de;
}

.q-toolbar {
  background-color: #4e7971;
}

.header-title {
  font-size: 25px;
}

.font {
  font-family: "Kanit", sans-serif;
}

.q-btn {
  width: 100%;
  background-color: #4e7971;
}
</style>
