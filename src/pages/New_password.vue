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

        <div class="col-6 font header-title text-center">เปลี่ยนรหัสผ่าน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="font q-pa-md">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="margin-box"></div>

        <div>
          <div class="text-center">
            <div>กรอกรหัสผ่านเดิม</div>
          </div>
          <q-input
            color="teal"
            filled
            v-model="old_password"
            label="รหัสผ่านเดิม"
            :rules="[
              (val) =>
                (val && val.length >= 6 && val.length <= 18) ||
                'กรุณากรอกรหัสผ่าน 6-18 ตัวอักษร',
            ]"
            :type="isPwdo ? 'password' : 'text'"
          >
            <template v-slot:append>
              <q-icon
                :name="isPwdo ? 'visibility_off' : 'visibility'"
                class="cursor-pointer"
                @click="isPwdo = !isPwdo"
              />
            </template>
          </q-input>

          <div class="text-center">
            <div>กรอกรหัสผ่านใหม่</div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="password"
            label="รหัสผ่านใหม่"
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
      old_password: ref(""),
      password: ref(""),
      con_password: ref(""),
      isPwdo: ref(true),
      isPwd: ref(true),
      isPwd2: ref(true),

      onSubmit() {
        this.$router.push({
          path: "/",
        });
      },
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>