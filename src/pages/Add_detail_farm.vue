<template>
  <div class="font">
    <q-header>
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({ name: 'myfarm', query: { id: $route.query.id } })
            "
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md font">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div class="row justify-between">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              v-model="fname"
              label="ชื่อ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              v-model="lname"
              label="นามสกุล"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
            />
          </div>
        </div>
        <q-input
          color="teal"
          filled
          v-model="farm_name"
          label="ชื่อสวน"
          :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อสวน']"
        >
        </q-input>

        <q-input
          color="teal"
          filled
          v-model="address"
          label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
          :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
        />

        <div class="row">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              v-model="address_district"
              label="เขต/อำเภอ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              v-model="address_province"
              label="จังหวัด"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
            />
          </div>
        </div>

        <div>วันที่ปลูกยาง :</div>
        <q-input
          color="teal"
          filled
          v-model="date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="teal">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" color="green">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <!-- <div>พันธุ์ยาง :</div>
        <q-select
          filled
          v-model="rubber_varieties_id"
          use-input
          hide-selected
          fill-input
          input-debounce="0"
        >
          <template v-slot:no-option>
            <q-item>
              <q-item-section class="text-grey"> ไม่มีผลลัพธ์ </q-item-section>
            </q-item>
          </template>
        </q-select> -->

        <div>เนื้อที่ปลูก(ไร่) :</div>

        <q-input
          color="teal"
          v-model="area"
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
                v-model="fname_emp"
                filled
                label="ชื่อ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                v-model="lname_emp"
                filled
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
            v-model="phone_number_emp"
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
            v-model="e_number_emp"
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
                v-model="address_district_emp"
                filled
                label="เขต/อำเภอ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                v-model="address_province_emp"
                filled
                label="จังหวัด"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด',
                ]"
              />
            </div>
          </div>
        </div>

        <div>
          <q-btn
            unelevated
            rounded
            label="บันทึก"
            type="submit"
            class="shadow-2 text-white"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>
<script>
import axios from "axios";
import { date } from "quasar";

export default {
  async mounted() {
    // this.setup();
    // this.filterFn();
    this.getday();
  },
  data() {
    return {
      splitterModel: 50,
      date: "",
      events: [],
      farm: [],
      data:[],

      add_employee: false,

      farm_name: null,
      fname: null,
      lname: null,
      area: null,
      address: null,
      address_district: null,
      address_province: null,
      rubber_varieties_id: [],
      planing_date: null,

      fname_emp: null,
      lname_emp: null,
      phone_number_emp: null,
      e_number_emp: null,
      address_district_emp: null,
      address_province_emp: null,
    };
  },
  methods: {
    // async setup(){
    //   const rubber_varieties_id = {stringOptions}
    // },

    // async filterFn (val, update, abort) {
    //   update(() => {
    //       const needle = val.toLowerCase()
    //       options.value = stringOptions.filter(v => v.toLowerCase().indexOf(needle) > -1)
    //     })
    // },

    async getday(){this.date = this.formatDate(new Date());},
    


    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },

    async getfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/list" + this.$route.query.id
      );
      this.farm = data.data;
    },

    async getrubber_var_id() {
      const { data } = await axios.get(
        "http://localhost:3000/rubber_variaties/" + this.$route.query.id
      );
      this.getrubber = data.data;
    },

    async createemployee() {
      const { data } = await axios.post(
        "http://localhost:3000/create_emp/create/" + this.$route.query.id,
        {
          fname: this.create_emp.fname,
          lname: this.create_emp.lname,
          email: this.create_emp.email,
          phone_number: this.create_emp.phone_number,
          e_number: this.create_emp.email,
          address: this.create_emp.address,
          address_district: this.create_emp.address_district,
          address_province: this.create_emp.address_province,
          zip_code: this.create_emp.zip_code,
        }
      );
      this.create_emp = data.data;
    },

    async createfarm() {
      const { data } = await axios.post(
        "http://localhost:3000/farm/create/" + this.$route.query.id,
        {
          farm_name: this.create_farm.farm_name,
          fname: this.create_farm.fname,
          lname: this.create_farm.lname,
          area: this.create_farm.area,
          rubber_varieties_id: this.create_farm.rubber_varieties_id,
          planing_date: this.create_farm.planing_date,
          address: this.create_farm.address,
          address_district: this.create_farm.address_district,
          address_province: this.create_farm.address_province,
        }
      );
      this.create_farm = data.data;
    },

    async onSubmit() {
      this.$router.push({
        path: "/myfarm",
      });
    },
  },


};
</script>

<style scoped src="../css/home.css">
</style>