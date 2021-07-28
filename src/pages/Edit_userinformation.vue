<template>
  <div>
    <q-header class="shadow-2">
      <!-- <q-toolbar>
        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar> -->
      <q-toolbar class="row">
        <!-- <div
          class="col self-center font"
          @click="$router.push({ name: 'setting' })"
        >
          ตั้งค่า
        </div> -->
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'home' })"
          />
        </div>

        <div class="col-6 font header-title text-center">ข้อมูลผู้ใช้</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md font">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>
          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="fname"
                label="ชื่อ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="lname"
                label="นามสกุล"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล',
                ]"
              />
            </div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="phone_number"
            label="เบอร์โทรศัพท์"
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length == 10) ||
                'กรุณากรอกเบอร์โทรศัพท์',
            ]"
          >
            <template v-slot:append>
              <q-icon name="call" />
            </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="email"
            label="อีเมล"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอีเมล']"
          >
            <template v-slot:append> @ </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          <div class="row">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="address_district"
                label="เขต/อำเภอ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="address_province"
                label="จังหวัด"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด',
                ]"
              />
            </div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="zip_code"
            label="รหัสไปรษณีย์ "
            :rules="[
              (val) => (val && val.length > 0) || 'กรุณากรอกรหัสไปรษณีย์',
            ]"
          />
        </div>

        <div>
          <q-btn
            unelevated
            rounded
            label="ยืนยัน"
            type="submit"
            class="shadow-2 text-white"
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
      phone_number: ref("0812222222"),
      email: ref("payang01@gmail.com"),
      address: ref("112/1 ซอยหล่อโรง ถนนระนอง ตำบลตลาดเหนือ "),
      address_district: ref("เมืองภูเก็ต"),
      address_province: ref("ภูเก็ต"),
      zip_code: ref("83000"),
    };
  },
  methods: {
    onSubmit() {
      //บันทึกข้อมูลลง database ใช้ this.ตัวแปร น้าาา
      console.log(this.fname);
    },
  },
};
</script>

<style scoped src="../css/home.css">
</style>