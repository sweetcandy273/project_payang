<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({ name: 'home', query: { id: payang_user.user_id } })
            "
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลผู้ใช้</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md font">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>

          
          <div class="row">
            <div class="col q-pr-md">
              <q-input
                v-model="fname"
                label="ชื่อ"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col q-pr-md">
              <q-input
                v-model="lname"
                label="นามสกุล"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
              />
            </div>
          </div>

          <q-input
            v-model="phone_number"
            label="เบอร์โทรศัพท์"
            :rules="[
              val =>
                (val && val.length > 0 && val.length == 10) ||
                'กรุณากรอกเบอร์โทรศัพท์'
            ]"
          />
          <q-input
            v-model="email"
            label="อีเมล"
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกอีเมล']"
          >
            <template v-slot:append> @ </template>
          </q-input>
          <q-input
            v-model="address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          <div class="row">
            <div class="col q-pr-md">
              <q-input
                v-model="address_district"
                label="เขต/อำเภอ"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col q-pr-md">
              <q-input
                v-model="address_province"
                label="จังหวัด"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
              />
            </div>
          </div>

          <q-input
            v-model="zip_code"
            label="รหัสไปรษณีย์ "
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกรหัสไปรษณีย์']"
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
      payang_user: []
    };
  },
  methods: {
    async onSubmit() {
      const { data } = await axios.put(
        "http://localhost:3000/payang_user/update/" + this.$route.query.id,
        {
          fname: this.payang_user.fname,
          lname: this.payang_user.lname,
          phone_number: this.payang_user.phone_number,
          email: this.payang_user.email,
          address: this.payang_user.address,
          address_district: this.payang_user.address_district,
          address_province: this.payang_user.address_province,
          zip_code: this.payang_user.zip_code
        }
      );
      this.payang_user = data.data;
      // console.log(data.data);

      this.$router.push({
        path: "/home",
        query: { id: this.payang_user.user_id }
      });
    }
  }
};
</script>

<style scoped src="../css/home.css"></style>
