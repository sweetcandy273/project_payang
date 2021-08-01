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

        <div class="col-6 font header-title text-center">กรอกรหัส OTP</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="font q-pa-md">
      <div class="text-center margin-box">
        <div>รหัส OTP จะส่งข้อความเบอร์โทรศัพท์</div>
        <div>และอีเมลของผู้ใช้งาน</div>
      </div>

      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>
          <q-input
            color="teal"
            filled
            v-model="otp"
            label="OTP"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกรหัส OTP']"
          >
            <template v-slot:append>
              <q-btn
                unelevated
                rounded
                label="ส่งอีกครั้ง"
                class="shadow-2 text-white"
                color="yellow-8"
              />
            </template>
          </q-input>
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
      otp: ref(""),

      onSubmit() {
        //check ว่าใช้ email หรือ เบอร์โทรใครไหมใน py_user
        console.log(this.otp);

         this.$router.push({
          path: "/change_password",
        });
      },
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>