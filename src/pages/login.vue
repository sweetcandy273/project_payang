<template>
  <q-page>
    <div class="text-center">
      <div>
        <img
        class="logo"
          alt="Payang logo"
          src="../assets/payang_icon.png"
          style="width: 200px; height: 200px"
        />
      </div>
      <div>
        <h5>เข้าสู่ระบบ</h5>
      </div>
      <div>
        <div class="q-mx-xl">
          <q-input
            color="teal"
            filled
            v-model="id"
            label="เบอร์โทรศัพท์ / อีเมลล์"
          />
        </div>
        <div class="q-mt-md"></div>
        <div class="q-mx-xl">
          <q-input color="teal" filled v-model="password" label="รหัสผ่าน" />
        </div>
      </div>
      <div>
        <router-link to="/register">สมัครสมาชิก</router-link>
        <!-- เช็ค id password ก่อนเข้าหน้า home นะจ๊ะ -->
      </div>
      <div>
        <q-btn
          to="/home"
          unelevated
          rounded
          color="green-6"
          label="เข้าสู่ระบบ"
        />
      </div>
      <div>
        <router-link to="/forgot_password">ลืมรหัสผ่าน</router-link>
      </div>
    </div>
  </q-page>
</template>

<script>
export default {
  data() {
    return {
      id: "",
      password: "",
    };
  },
};
</script>

<style>
</style>