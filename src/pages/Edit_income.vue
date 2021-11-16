<template>
  <div>
    <q-header>
      <!-- <q-toolbar>
        <q-space></q-space>
      </q-toolbar>  -->
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({
                path: 'detail_income',
                query: {
                  id: incomes.in_id,
                },
              })
            "
          />
        </div>
        <div class="col-6 font header-title">แก้ไข</div>
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
        @click="$router.push({ name: 'edit_expenditure' })"
      />
    </div>
    <div class="font q-px-md">
      <q-input
        filled
        v-model="incomes.date_income"
        color="teal"
       
      >
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="incomes.date_income" color="green">
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
          <q-input
            filled
            v-model="incomes.weight"
            label="น้ำหนักยาง"
            
          >
            <template v-slot:prepend> กก. </template>
          </q-input>
        </div>
        <div class="col q-ml-md">
          <q-input
            filled
            v-model="incomes.percen_rubber"
            color="teal"
            label="เปอร์เซ็น"
            
          >
            <template v-slot:prepend> % </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="incomes.dry_rubber"
              label="เนื้อยางแห้ง"
              
            >
              <template v-slot:prepend> ก. </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="incomes.rubber_price"
              label="ราคาน้ำยาง"
              
            >
              <template v-slot:prepend> บ./กก. </template>
            </q-input>
          </div>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input
            filled
            v-model="incomes.amount"
            color="teal"
            label="รวมจำนวนเงิน"
            
          >
            <template v-slot:prepend> ฿ </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input filled v-model="incomes.store_in" label="ชื่อร้านค้า"
          
          >
            <template v-slot:prepend> กก. </template>
          </q-input>
        </div>
        <div class="col q-ml-md">
          <q-input
            filled
            v-model="incomes.telstore_in"
            label="เบอร์โทรร้านค้า"
            mask= "###-###-####"
         
          >
          
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
            v-model="incomes.employee"
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
                v-model="incomes.percen_split"
                :options="optionspercent"
                label="% ที่เจ้าของได้"
              />
            </div>
          </div>
        </strong>
      </div>
      <div class="col">
        <q-input
          filled
          v-model="incomes.note"
          color="teal"
          label="บันทึก"
        />
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
import { date } from "quasar";
export default {
  data() {
    return {
      //ถ้าจะเอาไปใส่ Database ต้อง this.ตัวแปร
      selectshare: false,
      optionspercent: ["60", "55", "50"],
      optionsemployee: ["กนกวรรณ", "ชนิกานต์", "อรไท"],
      edit_income: {},
      incomes:{},
      stores:{},
    };
  },
  mounted() {
    this.getIncome();
    // this.getStore();
  },

  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getIncome() {
      const { data } = await axios.get(
        `http://localhost:3000/income/findincome/${this.$route.query.id}`
      );
      this.incomes = data.data;
      this.incomes.date_income = this.formatDate(this.incomes.date_income)
    },
    // async getStore() {
    //   const { data } = await axios.get(
    //     `http://localhost:3000/store_income/list/${this.$route.query.id}`
    //   );
    //   this.stores = data.data;
    // },
    async onSubmit() {
      console.log(this.incomes.date_income);
      const { data } = await axios.put(
        "http://localhost:3000/income/update/" + this.$route.query.id,
        {
          date_income: this.incomes.date_income,
          amount: this.incomes.amount,
          amount_net: this.incomes.amount * 0.6,
          weight: this.incomes.weight,
          percen_rubber: this.incomes.percen_rubber,
          dry_rubber: this.incomes.dry_rubber,
          percen_split: this.incomes.percen_split,
          rubber_price: this.incomes.rubber_price,
          note: this.incomes.note,
          farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
          user_id: "4da0b5f4-3ce8-4951-891d-d7c9ee233671",
          store_in: this.incomes.store_in,
          telstore_in: this.incomes.telstore_in
        }
      );
      this.incomes = data.data;
      // console.log(data.data);
      this.$router.push({
        path: '/account_calendar',
        query:{
          id: this.incomes.in_id,
        },
      });
    },
  },
};
</script>
<style scoped src="../css/home.css">
</style>