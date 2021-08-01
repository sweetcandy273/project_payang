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

        <div class="col-6 font header-title text-center">ตั้งรหัสผ่านใหม่</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="font q-pa-md margin-box">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>
          <q-input
            color="teal"
            filled
            v-model="input_c"
            label="เบอร์โทรศัพท์หรืออีเมล"
            :rules="[
              (val) =>
                (val && val.length > 0) || 'กรุณากรอกเบอร์โทรศัพท์หรืออีเมล',
            ]"
          >
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
      input_c: ref(""),

      onSubmit() {
        //check ว่าใช้ email หรือ เบอร์โทรใครไหมใน py_user
        console.log(this.input_c);

        this.$router.push({
          path: "/otp",
        });
      },
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>