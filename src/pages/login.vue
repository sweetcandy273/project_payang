<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <div class="row q-gutter-xs">
        <img
          alt="Payang logo"
          src="~assets/payang_icon.png"
          style="width: 200px; height: 200px"
        />
        <h5>Payang App</h5>

        <div class="row">
          <q-input
            color="teal"
            filled
            v-model="id"
            label="เบอร์โทรศัพท์ / อีเมลล์"
          >
          </q-input>
          <q-input color="teal" filled v-model="password" label="รหัสผ่าน">
          </q-input>
        </div>
        <div class="row">
            <router-link to="/register">สมัครสมาชิก</router-link>
          <q-btn
            to="/login"
            unelevated
            rounded
            color="green-6"
            label="เข้าสู่ระบบ"
          />
        </div>
      </div>
    </q-page-container>
  </q-layout>
</template>

<script>
export default {
    data(){
       return {
      id: "",
      password: "",
    };
    }
};
</script>

<style>
</style>