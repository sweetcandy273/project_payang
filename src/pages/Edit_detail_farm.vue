<template>
  <div class="font">
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
          v-model="farm.rubber_variety.varieties"
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
        <q-input
          color="teal"
          filled
          v-model="farm.area"
          type="number"
          float-label="Number"
          label="เนื้อที่ปลูก"
        />
      </div>

      <div class="q-pa-md font" v-if="employee.length > 0">
        <div>ผู้ดูแล :</div>

        <div class="box_editeAdmin q-pa-md font">
          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="nameEmployee.fname"
                label="ชื่อ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="nameEmployee.lname"
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
            type="number"
            float-label="Number"
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
            type="number"
            float-label="Number"
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
          <div class="q-pa-md text-center">
            <q-btn
              round
              style="
                background: #4e7971;
                color: white;
                width: 50px;
                height: 50px;
              "
              color="deep-orange-13"
              icon="delete"
              @click="DeleteEven()"
            />
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
    await this.getfarm();
    await this.getemployee();
    // await this.getnameEmployee();
    await this.getrubber_var();
    // await this.DeleteEven();

    // this.updateEmp();
    await this.updateFarm();
  },

  data() {
    return {
      farm: {
        rubber_variety: {},
      },
      payang_user: [],
      nameEmployee: [],
      user_has_farm: [],
      planing_date: " ",
      employee: [],
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
    },
    async getemployee() {
      const { data } = await axios.get(
        "http://localhost:3000/farm_has_employee/list/" + this.$route.query.id
      );
      this.employee = data.data;
      if (this.employee.length > 0) {
        await this.getnameEmployee();
      }
    },
    async getnameEmployee() {
      const { data } = await axios.get(
        "http://localhost:3000/payang_user/" + this.employee[0].employee
      );
      this.nameEmployee = data.data;
    },

    async updateEmp() {
      const { data } = await axios.put(
        "http://localhost:3000/payang_user/update/" + this.employee[0].employee,
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
    async deletefunc() {
      axios.delete(
        "http://localhost:3000/farm_has_employee/delete/" + this.$route.query.id
      );
    },
    async DeleteEmp_payang() {
      axios.delete(
        "http://localhost:3000/payang_user/delete/" +
          this.$route.query.employee[0].employee
      );
    },

    DeleteEven() {
      this.$q
        .dialog({
          title: "ยืนยันการลบผู้ดูแล",
          message:
            'ระบบจะทำการลบข้อมูลผู้ดูแล <span class="text-red font"><strong>หากยืนยันการลบข้อมูลผู้ดูแล ข้อมูลทั้งหมดจะไม่สามารถกู้คืนมาได้อีก</strong></span><br>',
          cancel: true,
          persistent: true,
          html: true,
        })
        .onOk(() => {
          this.deletefunc();
          this.DeleteEmp_payang();
          this.$router.push({
            name: "detail_farm",
            query: { id: this.$route.query.id },
          });
        })
        .onCancel(() => {})
        .onDismiss(() => {});
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

<style scoped src="../css/home.css">
</style>
<style scoped>
.box_editeAdmin {
  background-color: #e9e9e9;
  border-radius: 15px;
  padding-top: 15px;
  padding-right: 15px;
  padding-bottom: 5px;
  padding-left: 15px;
}
</style>
<style scoped>
.box_detail {
  background-color: #acd6c1;
  border-radius: 15px;
}
</style>
