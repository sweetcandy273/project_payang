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
            @click="$router.push({ name: 'home' })"
          />
        </div>

        <div class="col-6 font header-title text-center">ข้อมูลผู้ใช้</div>
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
                v-model="payang_user.fname"
                label="ชื่อ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="payang_user.lname"
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
            v-model="payang_user.phone_number"
            label="เบอร์โทรศัพท์"
            :rules="[
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
            v-model="payang_user.email"
            label="อีเมล"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอีเมล']"
          >
            <template v-slot:append> @ </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="payang_user.address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          <div class="row">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="payang_user.address_district"
                label="เขต/อำเภอ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="payang_user.address_province"
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
            v-model="payang_user.zip_code"
            label="รหัสไปรษณีย์ "
            :rules="[
              (val) => (val && val.length > 0) || 'กรุณากรอกรหัสไปรษณีย์',
            ]"
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
// import Vue from "vue";
// import VueCompositionAPI from "@vue/composition-api";
import axios from "axios";
// Vue.use(VueCompositionAPI);

export default {
  data() {
    return {
      payang_user: [],
    };
  },
  async mounted() {
    const { data } = await axios.get(
      "http://localhost:3000/payang_user/" + this.$route.query.id
    );
    this.payang_user = data.data;
    // console.log(data.data);

    
  },

  methods: {
    async onSubmit() {
      console.log(this.payang_user.fname);

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
          zip_code: this.payang_user.zip_code,
        }
      );
      this.payang_user = data.data;
      // console.log(data.data);

      this.$router.push({
        path: "/home",
      });
    },
  },
};
</script>

<style scoped src="../css/home.css">
</style>