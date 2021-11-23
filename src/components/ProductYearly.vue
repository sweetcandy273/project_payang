<template>
  <div v-if="item">
    <div class="font text-center" style="font-size: 30px">{{ year }}</div>
    <div class="row font q-px-md seft-center text-center">
      <div class="col-2 seft-center">
        <div v-if="this.year >= this.year_now - 10">
          <q-icon name="arrow_back_ios" size="30px" @click="clickback()" />
        </div>
      </div>
      <div class="col">
        <div style="font-size: 20px">น้ำยางสด</div>
        <q-img src="../assets/rubber-cup.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            {{ this.product }}
          </div>
        </q-img>

        <div>กิโลกรัม</div>
      </div>
      <div class="col">
        <div style="font-size: 20px">รายรับ</div>
        <q-img src="../assets/money.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            {{ this.income }}
          </div>
        </q-img>
        <div>บาท</div>
      </div>
      <div class="col-2 seft-center">
        <div v-if="this.year < this.year_now">
          <q-icon name="arrow_forward_ios" size="30px" @click="clicknext()" />
        </div>
      </div>
    </div>
    <div class="q-pa-md font">
      <div class="account-all q-pa-md shadow-2">
        <div class="row">
          <div class="col-10 text-center">
            <div style="font-size: 25px">สรุปบัญชีรวมทั้งหมด</div>
            <div style="font-size: 22px">ประจำปี {{ year }}</div>
          </div>
          <div class="col">
            <div>
              <img
                class=""
                alt="back-right"
                src="../assets/click.png"
                style="width: 35px"
                @click="
                  $router.push({
                    name: 'all_account_calendar'
                  })
                "
              />
            </div>
            <div>บัญชี</div>
          </div>
        </div>

        <div v-if="this.profit != 0">
          <Doughnut-chart
            :chart-data="datacollection"
            class="q-pa-md chart"
          ></Doughnut-chart>
        </div>
        <div v-else>
          <div class="q-ma-lg text-red" style="font-size: 25px">
            กำไรสุทธิของปีนี้เป็น {{ this.profit }} บาท
          </div>
        </div>

        <div class="row items-end">
          <div class="col text-left" style="font-size: 20px; color: #06be3b">
            <div>รายรับ</div>
          </div>
          <div class="col text-right" style="font-size: 20px">
            <div>{{ this.income }}</div>
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
            <div>{{ this.expen }}</div>
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
            <div>{{ this.profit }}</div>
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

const date_now = date.formatDate(timeStamp, "YYYY-MM-DD");
const year_now = date_now.slice(0, 4);

import DoughnutChart from "../components/Chart.js";

export default {
  props: { item: { type: Object || Array } },

  components: { DoughnutChart },
  data() {
    return {
      owner: "",

      year: year_now,
      year_now: year_now,

      incomeyearly: {},
      expenyearly: {},
      productyearly: {},

      income: 0.0,
      expen: 0.0,
      profit: 0.0,
      product: 0.0,

      datacollection: null
      // loaded: false,
    };
  },
  async mounted() {
    this.owner = this.item.id;
    await this.getincome();
    await this.getexpen();
    await this.getproductyearly();
    await this.fillData(this.income, this.expen);
  },
  methods: {
    async getincome() {
      const { data } = await this.$axios.get(
        "/income/amountyearly/" + this.year + "/" + this.owner
      );
      this.incomeyearly = data.data;

      if (this.incomeyearly === "NaN") {
        this.income = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.income = new Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB"
        }).format(Number(this.incomeyearly));

        this.income = parseFloat(Number(this.incomeyearly)).toFixed(2);
      }
      this.calprofit();
      this.fillData(this.income, this.expen);
    },
    async getexpen() {
      const { data } = await this.$axios.get(
        "/expenditure/amountyearly/" + this.year + "/" + this.owner
      );
      this.expenyearly = data.data;

      if (this.expenyearly === "NaN") {
        this.expen = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.expen = parseFloat(Number(this.expenyearly)).toFixed(2);
      }
      this.calprofit();
      this.fillData(this.income, this.expen);
    },

    async getproductyearly() {
      const { data } = await this.$axios.get(
        "/income/productyearly/" + this.year + "/" + this.owner
      );
      this.productyearly = data.data;

      if (this.productyearly === "NaN") {
        this.product = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.product = parseFloat(Number(this.productyearly)).toFixed(2);
      }
    },
    calprofit() {
      this.profit = 0.0;
      this.profit = parseFloat(Number(this.income - this.expen)).toFixed(2);
    },

    clickback() {
      this.year = this.year - 1;
      this.getincome();
      this.getexpen();
      this.getproductyearly();
    },
    clicknext() {
      if (this.year < this.year_now) {
        this.year = this.year + 1;
        this.getincome();
        this.getexpen();
        this.getproductyearly();
      }
    },

    fillData(income, expen) {
      this.datacollection = {
        labels: ["รายรับ", "รายจ่าย"],
        // centerlabel: 2021,
        datasets: [
          {
            label: ["รายรับ", "รายจ่าย"],
            backgroundColor: ["#06BE3B", "#B01717"],
            data: [income, expen]
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
