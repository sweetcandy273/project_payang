<template>
  <div>
    <!-- <q-img src="../assets/bg-starter.png" style="" width="100%"> -->
    <div
      class="text-center font text-black"
      style="background: none; padding: 0"
    >
      <div class="row q-pa-md">
        <div class="col text-left">
          <q-img class="logo" src="../assets/payang_icon.png" />
        </div>
        <div class="col-8">
          <div class="payang text-uppercase"><strong>payang</strong></div>
          <div>แอปพลิเคชั่นป่ายาง</div>
          <div style="line-height: 18px">
            วางแผนการเพาะปลูกสวนยาง วางแผนและสรุปบัญชีทางการเงิน
          </div>
        </div>
      </div>

      <div class="q-pa-md q-mt-xl" style="font-size: 30px">เข้าสู่ระบบ</div>
      <div class="q-pa-md">
        <q-form @submit.prevent="Login" class="q-gutter-md">
          <div>
            <q-input
              color="teal"
              filled
              v-model="email"
              type="text"
              placeholder="Email"
              label="อีเมล"
            />
            <div class="q-pt-md"></div>

            <q-input
              color="teal"
              label="รหัสผ่าน"
              v-model="password"
              filled
              placeholder="password"
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
          </div>

          <div class="q-pt-md">
            <div class="text-grey-7">
              ยังไม่มีบัญชี?
              <router-link to="/register" class="text-grey-7"
                >สมัครสมาชิก</router-link
              >
            </div>
            <q-btn
              unelevated
              rounded
              label="เข้าสู่ระบบ"
              type="submit"
              value="Login"
              class="shadow-2 text-white"
            />
            <div
              class="q-pt-md text-green"
              @click="$router.push({ name: 'forgot_password' })"
            >
              ลืมรหัสผ่าน
            </div>
          </div>
        </q-form>
      </div>
    </div>
    <!-- </q-img> -->
  </div>
</template>

<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import { ref } from "@vue/composition-api";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      email: "",
      password: "",
      isPwd: ref(true),

      uid: ""
    };
  },
  methods: {
    Login() {
      firebase
        .auth()
        .signInWithEmailAndPassword(this.email, this.password)
        .then(userCredential => {
          const user = userCredential.user;
          this.uid = user.uid;

          this.$router.push({
            name: "home",
            query: { id: this.uid }
          });
        })
        .catch(error => {
          const errorCode = error.code;
          if (errorCode == "auth/invalid-email") {
            alert("Email ไม่ถูกต้องตามหลัก");
          } else if (errorCode == "auth/user-not-found") {
            alert("ไม่มีข้อมูล Email ในระบบ กรุณาสมัครสมาชิก");
          }
        });
    }
  }
};
</script>

<style scoped src="../css/home.css"></style>
