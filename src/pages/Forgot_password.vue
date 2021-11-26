<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="row">
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
            v-model="email"
            label="อีเมล"
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกหรืออีเมล']"
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
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  data() {
    return {
      email: ""
    };
  },
  methods: {
    onSubmit() {
      firebase
        .auth()
        .sendPasswordResetEmail(this.email)
        .then(() => {
          alert("Email สำหรับการเปลี่ยนรหัสผ่านได้ถูกส่งไปแล้ว");
          this.$router.push({
            name: "login"
          });
        })
        .catch(error => {
          const errorCode = error.code;
          if (errorCode == "auth/invalid-email") {
            alert("Email ไม่ถูกต้องตามหลัก");
          } else if (errorCode == "auth/user-not-found") {
            alert("ไม่มีข้อมูล Email ในระบบ");
          }
        });
    }
  }
};
</script>

<style scoped src="../css/home.css"></style>
