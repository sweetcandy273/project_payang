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
      <q-form @submit="onSubmit()" >
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
          v-model="planing_date"
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
                <q-date v-model="planing_date" color="green">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>

        <div>พันธุ์ยาง :</div>
        <q-select
          filled
          v-model="rubber_varieties_id"
          :options="rubberOption"
          @filter="filterRubber"
          map-options
          emit-value
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
        </q-select>

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

          <q-input
            color="teal"
            filled
            v-model="address_emp"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

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
    this.getday();
    this.cratefarm();
    this.createEmp();
    this.getrubber_var();
    
  },
  data() {
    return {
      splitterModel: 50,
      date: "",
      data: [],
      rubberList: [],
      rubberOption: [],
      add_employee: false,

      farm_name: "",
      fname: "",
      lname: "",
      area: "",
      address: "",
      address_district: "",
      address_province: "",

      rubber_varieties_id: [],
      planing_date: "",
      create_farm: [],

      fname_emp: "",
      lname_emp: "",
      phone_number_emp: "",
      e_number_emp: "",
      address_emp: "",
      address_district_emp: "",
      address_province_emp: "",
      employee: {},
    };
  },
  methods: {
    filterRubber(val, update) {
      if (val === "") {
        update(() => {
          this.rubberOption = this.rubberList;
        });
        return;
      }
      update(() => {
        const rubber_varieties_id = val.toLowerCase();
        this.rubberOption = this.rubberList.filter(
          (v) => v.label.toLowerCase().indexOf(rubber_varieties_id) > -1
        );
      });
    },

    async getday() {
      this.planing_date = this.formatDate(new Date());
    },

    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },

    async cratefarm() {
      const { data } = await axios.post(
        "http://localhost:3000/farm/create/" + this.$route.query.id,
        {
          farm_name: this.farm_name,
          fname: this.fname,
          lname: this.lname,
          area: this.area,
          rubber_varieties_id: this.rubber_varieties_id,
          planing_date: this.planing_date,
          address: this.address,
          address_district: this.address_district,
          address_province: this.address_province,
        }
      );
      this.create_farm = data.data;
    },
    async createEmp() {
      const { data } = await axios.post(
        "http://localhost:3000/payang_user/create_emp/",
        {
          fname: this.fname_emp,
          lname: this.lname_emp,
          phone_number: this.phone_number_emp,
          e_number: this.e_number_emp,
          address: this.address_emp,
          address_district: this.address_district_emp,
          address_province: this.address_province_emp,
        }
      );
      this.employee = data.data;
      // console.log(data.data);
    },
    async createfarm_emp() {
      const { data } = await axios.post(
        "http://localhost:3000/farm_has_employee/create/" +
          this.create_farm.farm_id +
          "/" +
          this.employee.user_id,
        {
          farm_id: this.create_farm.farm_id,
          employee: this.employee.user_id,
        }
      );
      console.log(data.data);
    },

    async getrubber_var() {
      const { data } = await axios.get(
        "http://localhost:3000/rubber_varieties"
      );
      // console.log(data);
      this.rubberList = data.data.map((rubber) => ({
        label: rubber.varieties,
        value: rubber.rubber_varieties_id,
      }));
    },

    async onSubmit() {
      await this.createEmp();
      await this.cratefarm();
      await this.createfarm_emp();

    this.$router.push({
        path: "/myfarm",
        query: {
          id: this.$route.query.id,
        },
      });
    },
  },
};
</script>

<style scoped src="../css/home.css">
</style>