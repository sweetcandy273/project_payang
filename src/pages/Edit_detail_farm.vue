<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({ name: 'detail_farm', query: { id: farm.farm_id } })
            "
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <q-form @submit="onSubmit" class="q-gutter-md">
      <div class="q-pa-md font" v-if="farm">
        <div>เจ้าของสวน :</div>
        <div class="row justify-between">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              v-model="farm.fname"
              label="ชื่อ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              v-model="farm.lname"
              label="นามสกุล"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
            />
          </div>
        </div>

        <div>ชื่อสวน :</div>
        <q-input
          color="teal"
          filled
          v-model="farm.farm_name"
          label="ชื่อสวน"
          :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อสวน']"
        >
        </q-input>

        <div>ที่อยู่ :</div>
        <q-input
          color="teal"
          filled
          v-model="farm.address"
          label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
          :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
        />
        <div class="row">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              v-model="farm.address_district"
              label="เขต/อำเภอ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              v-model="farm.address_province"
              label="จังหวัด"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
            />
          </div>
        </div>

        <div>วันที่ปลูกยาง :</div>
        <q-input
          color="teal"
          filled
          v-model="farm.planing_date"
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
          v-model="farm.rubber_varieties_id"
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

        <div>เนื้อที่ปลูก :</div>
        <q-input color="teal" filled v-model="farm.area" label="เนื้อที่ปลูก" />
      </div>

      <div class="q-pa-md font" v-if="nameEmployee">
        <div>ผู้ดูแล :</div>

        <div class="box_editeAdmin q-pa-md font">
          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                v-model="nameEmployee.fname"
                filled
                label="ชื่อ"
                :rules="[
                  (val) =>
                    (val && val.length > 0) || 'กรุณากรอกชื่อจริงของผู้ใช้งาน',
                ]"
              />
            </div>
            <div class="col q-pr-md">
              <q-input
                color="teal"
                v-model="nameEmployee.lname"
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
            v-model="nameEmployee.phone_number"
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
            v-model="nameEmployee.e_number"
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
            v-model="nameEmployee.address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          <div class="row">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="nameEmployee.address_district"
                label="เขต/อำเภอ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="nameEmployee.address_province"
                label="จังหวัด"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด',
                ]"
              />
            </div>
          </div>
        </div>
      </div>

      <div class="q-pa-md font">
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
</template>




<script>
import axios from "axios";
import { date } from "quasar";

export default {
  async mounted() {
    this.getfarm();
    this.getnameEmployee();
    this.getemployee();
    this.getrubber_var();
    this.updateEmp();
    this.updateFarm();
  },

  data() {
    return {
      farm: [],
      payang_user: [],
      nameEmployee: [],
      employee: [],
      user_has_farm: [],
      planing_date: " ",
      
      rubberList: [],
      rubberOption: [],
      rubber_varieties_id: [],
    };
  },

  methods: {
    filterRubber(val, update) {
      if (val === "") {
        update(() => {
          this.rubberOption = this.rubberList;
          // here you have access to "ref" which
          // is the Vue reference of the QSelect
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

    async getfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/" + this.$route.query.id
      );
      this.farm = data.data;
      // console.log(data.data);
    },
    async getemployee() {
      const { data } = await axios.get(
        "http://localhost:3000/farm_has_employee/list/" + this.$route.query.id
      );
      this.employee = data.data;
      // console.log(data.data);
    },

    async getnameEmployee() {
      const { data } = await axios.get(
        "http://localhost:3000/payang_user/" + this.$route.query.idu
      );
      this.nameEmployee = data.data;
      // console.log(data.data);
    },
    async updateEmp() {
      const { data } = await axios.put(
        "http://localhost:3000/payang_user/update/" + this.$route.query.idu,
        {
          fname: this.nameEmployee.fname,
          lname: this.nameEmployee.lname,
          phone_number: this.nameEmployee.phone_number,
          e_number: this.nameEmployee.e_number,
          address: this.nameEmployee.address,
          address_district: this.nameEmployee.address_district,
          address_province: this.nameEmployee.address_province,
        }
      );
    },

    async updateFarm() {
      const { data } = await axios.put(
        "http://localhost:3000/farm/update/" + this.$route.query.id,
        {
          farm_name: this.farm.farm_name,
          fname: this.farm.fname,
          lname: this.farm.lname,
          area: this.farm.area,
          rubber_varieties_id: this.farm.rubber_varieties_id,
          planing_date: this.farm.planing_date,
          address: this.farm.address,
          address_district: this.farm.address_district,
          address_province: this.farm.address_province,
        }
      );
    },

    async onSubmit() {
      await this.updateEmp();
      await this.updateFarm();

      this.$router.push({
        path: "/detail_farm",
        query: { id: this.farm.farm_id },
      });
    },
  },
};
</script>


<style>
.bg {
  background: #dae5de;
}

.q-toolbar {
  background-color: #4e7971;
}

.header-title {
  font-size: 25px;
}

.font {
  font-family: "Kanit", sans-serif;
}

.q-btn {
  width: 100%;
  background-color: #4e7971;
}
</style>
