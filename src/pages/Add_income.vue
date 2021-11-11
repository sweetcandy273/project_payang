<template>
  <div>
    <q-header>
      <!-- <q-toolbar>
        <q-space></q-space>
      </q-toolbar>  -->
      <q-toolbar class="row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'account_calendar' })"
          />
        </div>

        <div class="col-6 font header-title text-center">เพิ่มบัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="row q-pa-md q-gutter-sm flex-center font">
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #2d9cdb; color: white"
        label="รายรับ"
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white; opacity: 0.5"
        label="รายจ่าย"
        @click="$router.push({ name: 'add_expenditure' })"
      />
    </div>
    <div class="font q-px-md">
      <q-input
        filled
        v-model="date_income"
        color="teal"
        mask="date"
        :rules="['date']"
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date_income" color="green">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="white" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <div class="text-center">
      <div class="font q-pa-md" style="font-size: 25px">ระบุข้อมูลน้ำยางสด</div>
    </div>
    <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
      <div class="row">
        <div class="col">
          <q-input filled v-model="weight_rubber" label="น้ำหนักยาง">
            <template v-slot:prepend> กก. </template>
          </q-input>
        </div>
        <div class="col q-ml-md">
          <q-input filled v-model="percent" color="teal" label="เปอร์เซ็น">
            <template v-slot:prepend> % </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <div class="col">
            <q-input filled v-model="dry_rubber" label="เนื้อยางแห้ง">
              <template v-slot:prepend> ก. </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input filled v-model="rubber_price" label="ราคาน้ำยาง">
              <template v-slot:prepend> บ./กก. </template>
            </q-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input
            filled
            v-model="totalprice"
            color="teal"
            label="รวมจำนวนเงิน"
          >
            <template v-slot:prepend> ฿ </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input filled v-model="stores" label="ชื่อร้านค้า">
            <template v-slot:prepend> กก. </template>
          </q-input>
        </div>
        <div class="col q-ml-md">
          <q-input filled v-model="tel_stores" label="เบอร์โทรร้านค้า">
            <template v-slot:prepend> </template>
          </q-input>
        </div>
      </div>

      <div class="share">
        <q-checkbox
          v-model="selectshare"
          style="font-size: 16px"
          label="ผู้รับผิดชอบ"
        />
      </div>

      <div class="sharemoney" v-if="selectshare">
        <strong>
          <q-select
            filled
            v-model="employee"
            :options="optionsemployee"
            label="ผู้รับผิดชอบ"
          >
            <template v-slot:prepend>
              <q-icon name="person" />
            </template>
          </q-select>

          <div class="row">
            <div class="col text-center q-my-md">% การแบ่ง</div>
            <div class="col q-my-md">
              <q-select
                filled
                v-model="share"
                :options="optionspercent"
                label="% ที่เจ้าของได้"
              />
            </div>
          </div>
        </strong>
      </div>
      <div class="col">
        <q-input filled v-model="note" color="teal" label="บันทึก" />
      </div>

      <div class="submit row q-gutter-sm flex-center">
        <q-btn
          unelevated
          rounded
          @click="onSubmit()"
          label="บันทึก"
          class="shadow-2 text-white"
          style="width: 100%; background-color: #4e7971"
        />
      </div>
    </div>
  </div>
</template>
<script>
import axios from "axios";
export default {
  data() {
    return {
      //ถ้าจะเอาไปใส่ Database ต้อง this.ตัวแปร
      date_income: "",
      weight_rubber: "",
      percent: "",
      dry_rubber: "",
      rubber_price: "",
      totalprice: "",
      stores: null,
      tel_stores: "",
      // options: ["ดาวน้ำยางสด", "ไก่น้ำยางสด", "อื่นๆ"],
      note: "",
      selectshare: false,
      share: "",
      optionspercent: ["60", "55", "50"],
      employee: "",
      optionsemployee: [],
      employees: [],
      getlistemployee: [],
      name: "",
      listemployeename: {},
    };
  },

  mounted() {
    this.getemployee();
  },
  methods: {
    async getemployee() {
      const { data } = await axios.get(
        "http://localhost:3000/farm_has_employee/list/" + this.$route.query.id
      );
      this.employees = data.data;

      const listemployee = this.employees.map((data) => {
        const obj = {};
        obj["user_id"] = data.user_id;

        this.name = this.getempname(data.user_id);


        Promise.all(this.name);

        
        // console.log(this.name);
        obj["fname"] = this.name;
        return obj;
      });

      console.log(listemployee);
    },
    async getempname(user_id) {
      const { data } = await axios.get(
        "http://localhost:3000/payang_user/" + user_id
      );
      this.listemployeename = data.data;
      console.log(this.listemployeename.fname);
      return this.listemployeename.fname;
    },
    onSubmit() {
      axios.post(
        `http://localhost:3000/income/create/a07f9bfa-e8b2-4125-8036-acf3d7048e09/4da0b5f4-3ce8-4951-891d-d7c9ee233671`,
        {
          date_income: this.date_income,
          amount: this.totalprice,
          amount_net: this.totalprice * 0.6,
          weight: this.weight_rubber,
          percen_rubber: this.percent,
          dry_rubber: this.dry_rubber,
          percen_split: "60",
          rubber_price: this.rubber_price,
          note: this.note,
          farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
          user_id: "4da0b5f4-3ce8-4951-891d-d7c9ee233671",
        }
      );
      axios
        .post(
          `http://localhost:3000/store_income/create/a07f9bfa-e8b2-4125-8036-acf3d7048e09`,
          {
            store: this.stores,
            tel: this.tel_stores,
            farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
          }
        )
        .then((response) => {
          console.log(response);
        });
      this.$router.push({
        path: "/account_calendar",
      });
    },
  },
};
</script>
<style scoped src="../css/home.css">
</style>