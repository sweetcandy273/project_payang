<template>
  <div class="font" v-if="farm">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({ name: 'detail_farm', query: { id: farm.user_id } })
            "
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md font">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>
          เจ้าของสวน :
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
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล',
                ]"
              />
            </div>
          </div>

          ชื่อสวน :
          <q-input
            color="teal"
            filled
            v-model="farm.farm_name"
            label="ชื่อสวน"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อสวน']"
          >
          </q-input>

          ที่อยู่ :
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
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด',
                ]"
              />
            </div>
          </div>

          เนื้อที่ปลูก :
          <q-input
            color="teal"
            filled
            v-model="farm.area"
            label="เนื้อที่ปลูก"
           
          />
        </div>

      <div>ผู้ดูแล :</div>

            <div class="box_editeAdmin" v-if="name_employee">
        <div class="row justify-between">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              v-model="name_employee.fname"
              label="ชื่อ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              v-model="name_employee.lname"
              label="นามสกุล"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
            />
          </div>
        </div>
        <q-input
          color="teal"
          filled
          v-model="name_employee.phone_number"
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
          v-model="name_employee.e_number"
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
          v-model="name_employee.address"
          label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
          :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
        />

        <div class="row">
          <div class="col q-pr-md">
            <q-input
              color="teal"
              filled
              v-model="name_employee.address_district"
              label="เขต/อำเภอ"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
            />
          </div>
          <div class="col">
            <q-input
              color="teal"
              filled
              v-model="name_employee.address_province"
              label="จังหวัด"
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
            />
          </div>
        </div>

        <div class="row justify-center">
          <div class="q-pa-md self-center">
            <q-btn
              round
              color="deep-orange-13"
              icon="delete"
              @click="showNotif"
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
export default {
  async mounted() {
    this.getfarm();
    this.getemployee();
    this.getname_employee();
  },

  data() {
    return {
      farm: null,
      payang_user: [],
      name_employee : null,
      employee : [],
      user_has_farm: [],
    };
  },
  methods: {
    async getfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/" + this.$route.query.id
      );
      this.farm = data.data;
      console.log(data.data);
    },
      async getemployee() {
      const { data } = await axios.get( 
        "http://localhost:3000/farm_has_employee/list/" + this.$route.query.id
      );
      this.employee = data.data;
      // console.log(data.data);
    },
      async getname_employee() {
       console.log(this.employee.user_id);
      const { data } = await axios.get(
        "http://localhost:3000/payang_user/" + this.$route.query.id
      );
      this.name_employee = data.data;
      console.log(data.data);
    },
  

    showNotif() {
      this.$q.dialog({
        title: "Confirm",
        message: "Would you delete the data? ",
        cancel: true,
        persistent: true,
      });
      return { confirm };
    },

    async onSubmit() {
      const { data } = await axios.put(
        "http://localhost:3000/farm/update/" + this.$route.query.id,
        {
          fname: this.farm.fname,
          lname: this.farm.lname,
          phone_number: this.farm.phone_number,
          // farm_name: this.farm.farm_name,
          // email: this.farm.email,
          address: this.farm.address,
          address_district: this.farm.address_district,
          address_province: this.farm.address_province,
          // area: this.farm.area,
          // zip_code: this.farm.zip_code,
        }
      );
      this.farm = data.data;
      this.$router.push({
        path: "/home",
      });
    },

    // onSubmit() {
    //   this.$router.push({
    //     path: "/home",
    //   });
    // },
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
