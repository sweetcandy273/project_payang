<template>
  <div class="font">
    <q-header>
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'myfarm', query: { id: farm.user_id } })"
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md font">
      <div class="row justify-between">
        <div class="col q-pr-md">
          <q-input
            color="teal"
            filled
            label="ชื่อ"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
          />
        </div>
        <div class="col">
          <q-input
            color="teal"
            filled
            label="นามสกุล"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
          />
        </div>
      </div>
      <q-input
        color="teal"
        filled
        label="ชื่อสวน"
        :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อสวน']"
      >
      </q-input>

      <q-input
        color="teal"
        filled
        label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
        :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
      />

      <div class="row">
        <div class="col q-pr-md">
          <q-input
            color="teal"
            filled
            label="เขต/อำเภอ"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
          />
        </div>
        <div class="col">
          <q-input
            color="teal"
            filled
            label="จังหวัด"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
          />
        </div>
      </div>
      เนื้อที่ปลูก(ไร่) :

      <q-input
        color="teal"
        filled
        label="เนื้อที่ปลูก"
        :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกเนื้อที่ปลูก']"
      />

      <div class="add_employee">
        <q-checkbox
          v-model="add_employee"
          style="font-size: 16px"
          label="ผู้ดูแล"
        />
      </div>

      <div class="box_admin" v-if="add_employee">
        <div class="row justify-between">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              label="ชื่อ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              label="นามสกุล"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
            />
          </div>
        </div>
        <q-input
          color="teal"
          filled
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
          label="เบอร์โทรศัพท์ฉุกเฉิน"
          :rules="[
            (val) =>
              (val && val.length > 0 && val.length == 10) ||
              'กรุณากรอกเบอร์โทรศัพท์ฉุกเฉิน',
          ]"
        >
          <template v-slot:append>
            <q-icon name="call" />
          </template>
        </q-input>

        <div class="row">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              label="เขต/อำเภอ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              label="จังหวัด"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
            />
          </div>
        </div>
      </div>

      <div class="q-pa-md q-gutter-sm self-center">
        <q-btn
          @click="onSubmit()"
          unelevated
          rounded
          label="บันทึก"
          type="submit"
          class="shadow-2 text-white"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  async mounted() {
  },
  data() {
    return {
      farm: null,
      add_employee: false,
        name_employee : null,
      employee : [],
      user_has_farm: [],
    };
  },
  methods: {
    async onSubmit() {
      const { data } = await axios.put(
        "http://localhost:3000/farm/update/" + this.$route.query.id,
        {
          fname: this.farm.fname,
          lname: this.farm.lname,
          phone_number: this.farm.phone_number,
          address: this.farm.address,
          address_district: this.farm.address_district,
          address_province: this.farm.address_province,
         
        }
      );
      this.farm = data.data;
      this.$router.push({
        path: "/myfarm",
      });
    },
  },
};
</script>

<style scoped src="../css/home.css">
</style>