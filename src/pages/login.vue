<template>
  <div>
    <div class="text-center font">
      <div class="row q-pa-md">
        <div class="col text-left">
          <q-img class="logo" src="../assets/payang_icon.png" />
        </div>
        <div class="col-8">
          <div class="payang text-uppercase">payang</div>
          <div>แอปพลิเคชั่นป่ายาง</div>
          <div style="line-height: 18px">
            วางแผนการเพาะปลูกสวนยาง วางแผนและสรุปบัญชีทางการเงิน
          </div>
        </div>
      </div>

      <div class="q-pa-md" style="font-size: 30px">เข้าสู่ระบบ</div>
      <div class="q-pa-md">
        <q-form @submit="onSubmit" class="q-gutter-md">
          <div>
            <q-input color="teal" filled v-model="id" label="เบอร์โทร/อีเมล" />
            <div class="q-pt-md"></div>
            <q-input
              color="teal"
              filled
              type="password"
              v-model="password"
              label="รหัสผ่าน"
            />
          </div>

          <div class="q-pt-md">
            <div class="text-grey">ยังไม่มีบัญชี? 
              <router-link to="/register" class="text-grey">สมัครสมาชิก</router-link>
             
              
              </div>
            <q-btn
              unelevated
              rounded
              label="เข้าสู่ระบบ"
              type="submit"
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
      id: ref(""),
      password: ref(""),
    };
  },
  methods: {
    onSubmit() {
      //บันทึกข้อมูลลง database ใช้ this.ตัวแปร น้าาา
      console.log(this.id, this.password);
    },
  },
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Kanit:wght@500&display=swap");

.logo {
  width: 100px;
  height: 100px;
  border-radius: 30%;
}

.font {
  font-family: "Kanit", sans-serif;
}
.q-btn {
  width: 100%;
  background-color: #4e7971;
}
.payang {
  letter-spacing: 25px;
  font-size: 20px;
}
</style>