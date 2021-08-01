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
            @click="$router.push({ name: 'login' })"
          />
        </div>
        <div class="col-6 font header-title text-center">สมัครสมาชิก</div>
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
                isNaN(val) == false || 'เบอร์โทรศัพท์จะต้องเป็นตัวเลขเท่านั้น',
              (val) =>
                val.charAt(0) == '0' || 'เบอร์โทรศัพท์จะต้องเริ่มต้นด้วย 0',
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
            v-model="password"
            label="รหัสผ่าน"
            :rules="[
              (val) =>
                (val && val.length >= 6 && val.length <= 18) ||
                'กรุณากรอกรหัสผ่าน 6-18 ตัวอักษร',
            ]"
            :type="isPwd ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd = !isPwd"
              />
            </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="con_password"
            label="ยืนยันรหัสผ่าน"
            :rules="[
              (val) =>
                (val && val.length > 0 && val == password) ||
                'รหัสผ่านไม่ตรงกัน',
            ]"
            :type="isPwd2 ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwd2 ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwd2 = !isPwd2"
              />
            </template>
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

        <q-toggle
          color="green"
          v-model="accept"
          label="ยินยอมให้แอปพลิเคชั่นเข้าถึงข้อมูลส่วนตัว"
        />

        <div>
          <q-btn
            unelevated
            rounded
            label="ลงทะเบียน"
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
      fname: ref(""),
      lname: ref(""),
      phone_number: ref(""),
      email: ref(""),
      password: ref(""),
      con_password: ref(""),
      address: ref(""),
      address_district: ref(""),
      address_province: ref(""),
      zip_code: ref(""),

      isPwd: ref(true),
      isPwd2: ref(true),
      accept: ref(false),

      onSubmit() {
        //บันทึกข้อมูลลง database ใช้ this.ตัวแปร น้าาา
        console.log(this.accept);

        if (this.accept != true) {
          this.$q.notify({
            position: "top",
            color: "red-5",
            textColor: "white",
            icon: "warning",
            message:
              "คุณต้องยินยอมการเปิดเผยข้อมูลกับทางแอปพลิเคชั่นจึงจะลงทะเบียนได้",
          });
        }

        this.$router.push({
          path: "/login",
        });
      },
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>