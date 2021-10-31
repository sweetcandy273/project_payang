<template>
  <div v-if="item">
    <div class="font" style="font-size: 30px">{{ item.id }}</div>
    <div class="row font q-px-md seft-center text-center">
      <div class="col-2 seft-center">
        <q-icon name="arrow_back_ios" size="30px" />
      </div>
      <div class="col">
        <div style="font-size: 20px">น้ำยางสด</div>
        <q-img src="../assets/rubber-cup.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            {{ yearly_rubber }}
          </div>
        </q-img>

        <div>กิโลกรัม</div>
      </div>
      <div class="col">
        <div style="font-size: 20px">รายรับ</div>
        <q-img src="../assets/money.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            {{ yearly_income }}
          </div>
        </q-img>
        <div>บาท</div>
      </div>
      <div class="col-2 seft-center">
        <q-icon name="arrow_forward_ios" size="30px" />
      </div>
    </div>
    <div class="q-pa-md font">
      <div class="account-all q-pa-md shadow-2">
        <div class="row">
          <div class="col-10">
            <div style="font-size: 25px">สรุปบัญชีรวมทั้งหมด</div>
            <div style="font-size: 22px">ประจำปี {{ year_now }}</div>
          </div>
          <div class="col">
            <div>
              <img
                class=""
                alt="back-right"
                src="../assets/click.png"
                style="width: 35px"
                @click="$router.push({ name: 'all_account_calendar' })"
              />
            </div>
            <div>บัญชี</div>
          </div>
        </div>
        <div class="text-center">
          <Doughnut-chart
            :chart-data="datacollection"
            class="q-pa-md chart"
          ></Doughnut-chart>
        </div>

        <div class="row items-end">
          <div class="col text-left" style="font-size: 20px; color: #06be3b">
            <div>รายรับ</div>
          </div>
          <div class="col text-right" style="font-size: 20px">
            <div>{{ incomeyearly }}</div>
          </div>
          <div class="col-1 text-right" style="font-size: 19px">
            <div>บ.</div>
          </div>
        </div>
        <div class="row items-end">
          <div class="col text-left" style="font-size: 20px; color: #b01717">
            <div>รายจ่าย</div>
          </div>
          <div class="col text-right" style="font-size: 20px">
            <div>{{ expenyearly }}</div>
          </div>
          <div class="col-1 text-right" style="font-size: 19px">
            <div>บ.</div>
          </div>
        </div>
        <div class="row items-end">
          <div class="col text-left" style="font-size: 25px">
            <div>กำไรสุทธิ</div>
          </div>
          <div class="col text-right" style="font-size: 25px">
            <div>{{ profit }}</div>
          </div>
          <div class="col-1 text-right" style="font-size: 19px">
            <div>บ.</div>
          </div>
        </div>
        <q-separator
          color="#4e7971"
          style="
            height: 2px;
            border-width: 0;
            color: #4e7971;
            background-color: #4e7971;
          "
          inset
        />
      </div>
    </div>
  </div>
</template>

<script>
import { date } from "quasar";
const timeStamp = Date.now();

const date_now = date.formatDate(timeStamp, "YYYY/MM/DD");
const year_now = date_now.slice(0, 4);

import DoughnutChart from "../components/Chart.js";

export default {
  props: { item: { type: Object || Array } },

  components: { DoughnutChart },
  data() {
    return {
      owner: "",
      incomeyearly: {},
      expenyearly: {},
      income: 0,
      expen: 0,
      profit: 0,
      year_now: year_now,
      yearly_rubber: "10.00",
      yearly_income: "2.00",
      yearly_expenses: "1.00",
      yearly_profit: "1.00",

      datacollection: null
      // loaded: false,
    };
  },
  async mounted() {
    this.owner = this.item.id;
    await this.getincome();
    await this.getexpen();
    await this.calprofit();
    await this.fillData();
  },
  methods: {
    async getincome() {
      const { data } = await this.$axios.get(
        "/income/listyearly/" + this.owner
      );
      this.incomeyearly = data.data;
      this.income = Number(this.incomeyearly);
      console.log(this.income);
    },
    async getexpen() {
      const { data } = await this.$axios.get(
        "/expenditure/listyearly/" + this.owner
      );
      this.expenyearly = data.data;
      this.expen = Number(this.expenyearly);
      console.log(this.expen);
    },

    calprofit() {
      // console.log(this.income, this.expen);
      this.profit = this.income - this.expen;
      console.log(this.profit);
    },

    fillData() {
      this.datacollection = {
        labels: ["รายรับ", "รายจ่าย"],
        // centerlabel: 2021,
        datasets: [
          {
            label: ["รายรับ", "รายจ่าย"],
            backgroundColor: ["#06BE3B", "#B01717"],
            data: [20, 5]
          }
        ]
      };
    }
  }
};
</script>

<style scoped>
.font {
  font-family: "Kanit", sans-serif;
}

.product-all {
  font-size: 25px;
  overflow: hidden;
  position: relative;
}

.account-all {
  background-color: #c5dba8;
  border-radius: 20px;
}

.chart {
  /* height: 300px; */
  width: 310px;
}

.bg-product-all {
  background: none;
  font-size: 25px;
}
</style>
