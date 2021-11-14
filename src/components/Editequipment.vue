<template>
  <div>
    <q-form>
      <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
        <div class="row q-pt-md">
          <div class="col">
            <q-select
              filled
              v-model="type"
              :options="optionstype"
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
            <q-input filled v-model="stores" label="ชื่อร้านค้า">
              <template v-slot:prepend> Bann </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input filled v-model="tel_stores" label="เบอร์โทรร้านค้า">
              <template v-slot:prepend> </template>
            </q-input>
          </div>
        </div>

        <div class="row active">
          <q-checkbox
            v-model="active"
            style="font-size: 16px"
            label="กิจกรรม"
          />
        </div>
        <div class="activerubber" v-if="active">
          <strong>
            <div class="row" v-for="(input, index) in activity" :key="index">
              <div class="col font" style="font-size: 26px">1</div>
              <div class="col-9 q-px-md font">
                <q-input filled v-model="dateact" mask="date" :rules="['date']">
                  <template v-slot:append>
                    <q-icon name="event" class="cursor-pointer">
                      <q-popup-proxy
                        ref="qDateProxy"
                        transition-show="scale"
                        transition-hide="scale"
                      >
                        <q-date v-model="dateact">
                          <div class="row items-center justify-end">
                            <q-btn
                              v-close-popup
                              label="Close"
                              color="primary"
                              flat
                            />
                          </div>
                        </q-date>
                      </q-popup-proxy>
                    </q-icon>
                  </template>
                </q-input>
              </div>
            </div>
            <div class="text-center">
              <q-btn
                unelevated
                rounded
                style="
                  background: #5db075;
                  color: white;
                  width: 50px;
                  height: 40px;
                "
                icon="add"
                @click="addactivity"
              />
            </div>
          </strong>
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
          <q-input filled v-model="note" label="บันทึก" />
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
      totalprice: "",
      note: "",
      type: null,
      optionstype: [
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
      stores: null,
      tel_stores: "",
      optionsemployee: ["-", "กนกวรรณ", "ชนิกานต์", "อรไท"],
      active: false,
      activity: [
        {
          addactivity: "",
        },
      ],
      expens:{},
      types:{},
    };
  },
    mounted() {
    this.getExpen();
    this.getType();
    // this.getfarm();
  },
  methods: {
      addactivity(){
      this.activity.push({
      addactivity: "",
      })
    },
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getExpen() {
      const { data } = await axios.get(
        `http://localhost:3000/expenditure/${this.$route.query.id}`
      );
      this.expens = data.data;
      this.expens.date_expenditure = this.formatDate(this.incomes.date_income);
    },
    async getType() {
      const { data } = await axios.get(
        `http://localhost:3000/type_expenditure/get/${this.$route.query.id}`
      );
      this.types = data.data;
      
    },
    
    async onSubmit() {

      const { data } = await axios.put(
        "http://localhost:3000/expenditure/update/" + this.$route.query.id,
        {
          date_income: this.incomes.date_income,
          amount: this.incomes.amount,
          weight: this.incomes.weight,
          percen_rubber: this.incomes.percen_rubber,
          dry_rubber: this.incomes.dry_rubber,
          percen_split: this.incomes.percen_split,
          rubber_price: this.incomes.rubber_price,
          note: this.incomes.note,
          farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
          user_id: "4da0b5f4-3ce8-4951-891d-d7c9ee233671",
        }
      );
      this.incomes = data.data;
      // console.log(data.data);
      this.$router.push({
        path: "/account_calendar",
        query: {
          id: this.incomes.in_id,
        },
      });
    },
  },
};
</script>
<style  scoped src="../css/home.css">
</style>