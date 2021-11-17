<template>
  <div>
    <q-form>
      <div class="font q-px-md">
        <q-input
          filled
          v-model="expens.date_expenditure"
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
                <q-date v-model="expens.date_expenditure" color="green">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
        <div class="row q-pt-md">
          <div class="col">
            <q-select
              filled
              v-model="expens.title"
              :options="titleoption"
              label="ตัวเลือก"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input filled v-model="expens.amount" label="รวมจำนวนเงิน">
              <template v-slot:prepend> ฿ </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input filled v-model="expens.store_expen" label="ชื่อร้านค้า">
              <template v-slot:prepend> Bann </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="expens.telstore_expen"
              label="เบอร์โทรร้านค้า"
            >
              <template v-slot:prepend> </template>
            </q-input>
          </div>
        </div>

        <div class="share text-left">
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
        </div>

        <div class="col">
          <q-input filled v-model="expens.note" label="บันทึก" />
        </div>

        <div class="submit row q-gutter-sm flex-center font">
          <q-btn
            unelevated
            rounded
            label="บันทึก"
            class="shadow-2 text-white"
            style="width: 100%; background-color: #4e7971"
            @click="onSubmit()"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
     
      title: "",
      titleoption: [
        "ต้นยางพารา",
        "น้ำกรด",
        "มีดกรีดยาง",
        "ถ้วยรองน้ำยาง",
        "ถังน้ำ",
        "แกลลอนใส่น้ำยาง",
      ],
      dateact: "",
      selectshare: false,
      employee: "",
     
      optionsemployee: ["-", "กนกวรรณ", "ชนิกานต์", "อรไท"],

      expens: {},
     
    };
  },
  mounted() {
    this.getExpen();
    this.getType();
    // this.getfarm();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getExpen() {
      const { data } = await axios.get(
        `http://localhost:3000/expenditure/${this.$route.query.id}`
      );
      this.expens = data.data;
      
    },

    async onSubmit() {
      const { data } = await axios.put(
        "http://localhost:3000/expenditure/update/" + this.$route.query.id,
        {
          date_expenditure: this.expens.date_expenditure,
          amount: this.expens.totalprice,
          note: this.expens.note,
          type: "Equipment",
          title_type: this.expens.title,
          farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
          user_id: "4da0b5f4-3ce8-4951-891d-d7c9ee233671",
          employee: "",
          store_expen: this.expens.store_expen,
          telstore_expen: this.expens.telstore_expen,
        }
      );
      this.expens = data.data;
      // console.log(data.data);
      this.$router.push({
        path: "/account_calendar",
        query: {
          id: this.expens.expen_id,
        },
      });
    },
  },
};
</script>
<style  scoped src="../css/home.css">
</style>