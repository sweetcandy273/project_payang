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
            @click="$router.push({ name: 'detail_farm' })"
          />
        </div>

        <div class="col-6 font header-title">บัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md q-mx-md">
      <q-splitter v-model="splitterModel" horizontal>
        <template v-slot:before>
          <div class="row justify-center q-pa-md">
            <div class="">
              <q-date
                v-model="date"
                color="green"
                :events="events"
                event-color="(date) => (date[9] % 2 === 0 ? 'teal': 'red')"
              />
            </div>
          </div>
        </template>

        <template v-slot:after>
            <div class="col font q-mx-md q-mt-md" style="font-size: 22px">
            {{ date }}
          </div>
          <q-tab-panels
            v-model="date"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="2021/07/10">
              <div class="row font">
                <div class="col text-right" style="font-size: 22px">
                  สวนภูเก็ต
                </div>
              </div>
              <div :key="index" v-for="(calendar, index) in incomes">
                <div class="row font">
                  <div class="greencircle"></div>
                  <div class="col q-ml-xs" style="font-size: 18px">รายรับ</div>
                  <div class="col text-right" style="font-size: 18px">
                    {{ calendar.amount_net }}
                  </div>
                  <div
                    class="calendar-income q-pa-md"
                    @click="$router.push({ name: 'detail_income' })"
                  >
                    <div class="row font">
                      <div class="col" style="font-size: 16px">
                        ร้านดาว น้ำยางสด, แผ่น
                      </div>
                      <div class="col-3 text-right" style="font-size: 16px">
                        {{ calendar.amount }}
                      </div>
                    </div>
                    <div class="row font" style="font-size: 16px">
                      น้ำยางสด {{ calendar.weight }} กก.
                      {{ calendar.percen_rubber }} % แห้ง {{ calendar.dry_rubber }}
                    </div>
                    <div class="row font" style="font-size: 16px">
                      ราคายาง {{ calendar.rubber_price }} บ./กก.
                    </div>
                    <div class="row font">
                      <div class="col" style="font-size: 16px">
                        {{ calendar.employee }} ส่วนแบ่ง {{ calendar.percen_split }}
                      </div>
                      <div class="col-3 text-right" style="font-size: 16px">
                        {{ calendar.amount_net }}
                      </div>
                    </div>
                  </div>
                </div>
              </div>

              <div :key="index" v-for="(calendar, index) in expenditures">
                <div class="row font q-pt-md">
                  <div class="redcircle"></div>
                  <div class="col q-ml-xs" style="font-size: 18px">รายจ่าย</div>
                  <div class="col text-right" style="font-size: 18px">
                    {{ calendar.amount }}
                  </div>
                  <div
                    class="calendar-expenditure q-pa-md"
                    @click="$router.push({ name: 'detail_expenditure' })"
                  >
                    <div class="row font">
                      <div class="col" style="font-size: 16px">
                        ร้านขายอุปกรณ์การช่าง
                      </div>
                      <div class="col-3 text-right" style="font-size: 16px">
                        {{ calendar.amount }}
                      </div>
                    </div>
                    <div class="row font" style="font-size: 16px">
                      {{ calendar.note }}
                    </div>
                    <div class="row font" style="font-size: 16px">กนกวรรณ</div>
                  </div>
                </div>
              </div>
            </q-tab-panel>
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
    <div class="add-account text-right fixed-bottom q-pa-md">
      <q-btn
        unelevated
        round
        style="background: #4e7971; color: white; width: 50px; height: 50px"
        icon="add"
        @click="$router.push({ name: 'add_income' })"
      />
    </div>
  </div>
</template>

<script>
import { date } from "quasar";
import axios from "axios";
export default {
  name: "income",
  name: "expenditure",
  data() {
    return {
      incomes: [],
      expenditures: [],
      splitterModel: 50,
      date: "",
      events: [],
      listAllevent: [],
    };
  },
  mounted() {
    this.getCalendar();
    // this.getExpenditure();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getCalendar() {
      const { data } = await axios.get(
        "http://localhost:3000/income/listbyfarm/a07f9bfa-e8b2-4125-8036-acf3d7048e09"
      );
       const { dataex } = await axios.get(
        "http://localhost:3000/expenditure/listbyfarm/a07f9bfa-e8b2-4125-8036-acf3d7048e09"
      );
      // this.listAllevent = data.income;
      // this.listAllevent = dataex.expenditure;
      this.listAllevent = data.calendar;
      this.date = this.formatDate(new Date());
      this.events = data.data.map((data) => {
        return this.formatDate(data.date);
      });
    },
    // async getExpenditure() {
    //   const { data } = await axios.get(
    //     "http://localhost:3000/expenditure/listbyfarm/a07f9bfa-e8b2-4125-8036-acf3d7048e09"
    //   );
    //   this.listAllevent = data.expenditure;
    //   this.date = this.formatDate(new Date());
    //   this.events = data.data.map((data) => {
    //     return this.formatDate(data.date);
    //   });
    // },
  },
  watch: {
    date(value) {
      this.incomes = this.listAllevent.filter((data) => {
        return new Date(value).getTime() == new Date(data.date).getTime();
      });
      this.expenditures = this.listAllevent.filter((data) => {
        return new Date(value).getTime() == new Date(data.date).getTime();
      });
    },
  },
};
</script>
<style scoped src="../css/home.css">
</style>
<style scoped>
.greencircle {
  width: 21px;
  height: 21px;
  background: #5db075;
  border-radius: 100%;
}

.calendar-income {
  background-color: #5db07469;
  border-radius: 20px;
}

.redcircle {
  width: 21px;
  height: 21px;
  background: #ff0000;
  border-radius: 100%;
}
.calendar-expenditure {
  background-color: #ff000059;
  border-radius: 20px;
}
</style>