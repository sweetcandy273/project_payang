<template>
  <div v-if="item">
    <div class="font" style="font-size: 30px">{{ month_th }}</div>
    <div class="row font q-px-md seft-center text-center">
      <div class="col-2 seft-center">
        <div v-if="this.month > 1">
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
        <div v-if="this.month < this.month_now">
          <q-icon name="arrow_forward_ios" size="30px" @click="clicknext()" />
        </div>
      </div>
    </div>
    <div class="q-pa-md font ">
      <div class="account-all q-pa-md shadow-2">
        <div class="row">
          <div class="col-10 text-center">
            <div style="font-size: 25px">สรุปบัญชีรวมทั้งหมด</div>
            <div style="font-size: 22px">ประจำเดือน {{ month_th }}</div>
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
        <div v-if="this.profit != 0">
          <Doughnut-chart
            :chart-data="datacollection"
            class="q-pa-md chart"
          ></Doughnut-chart>
        </div>
        <div v-else>
          <div class="q-ma-lg text-red" style="font-size: 25px">
            กำไรสุทธิของเดือนนี้เป็น {{ this.profit }} บาท
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
const month_now = date_now.slice(5, 7);

const months_th = [
  { month: "01", name: "มกราคม" },
  { month: "02", name: "กุมภาพันธ์" },
  { month: "03", name: "มีนาคม" },
  { month: "04", name: "เมษายน" },
  { month: "05", name: "พฤษภาคม" },
  { month: "06", name: "มิถุนายน" },
  { month: "07", name: "กรกฎาคม" },
  { month: "08", name: "สิงหาคม" },
  { month: "09", name: "กันยายน" },
  { month: "10", name: "ตุลาคม" },
  { month: "11", name: "พฤศจิกายน" },
  { month: "12", name: "ธันวาคม" }
];

const month_th = months_th.find(m => m.month == month_now).name;

import DoughnutChart from "../components/Chart.js";

export default {
  props: { item: { type: Object || Array } },
  components: { DoughnutChart },
  data() {
    return {
      owner: "",
      date_now,
      month_now: month_now,
      month: month_now,
      monthget: "",
      month_th: month_th,
      year_now: year_now,

      incomemonthly: {},
      expenmonthly: {},
      productmonthly: {},

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
    await this.getproductmonthly();
    await this.fillData(this.income, this.expen);
  },
  methods: {
    async getincome() {
      if (this.month < 10) {
        this.monthget = "0" + this.month.toString();
      } else {
        this.monthget = this.month;
      }

      const { data } = await this.$axios.get(
        "/income/amountmonthly/" + this.monthget + "/" + this.owner
      );
      this.incomemonthly = data.data;

      if (this.incomemonthly === "NaN") {
        this.income = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.income = new Intl.NumberFormat("th-TH", {
          style: "currency",
          currency: "THB"
        }).format(Number(this.incomemonthly));

        this.income = parseFloat(Number(this.incomemonthly)).toFixed(2);
      }
      this.calprofit();
      this.fillData(this.income, this.expen);
    },

    async getexpen() {
      if (this.month < 10) {
        this.monthget = "0" + this.month.toString();
      } else {
        this.monthget = this.month;
      }
      const { data } = await this.$axios.get(
        "/expenditure/amountmonthly/" + this.monthget + "/" + this.owner
      );
      this.expenmonthly = data.data;

      if (this.expenmonthly === "NaN") {
        this.expen = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.expen = parseFloat(Number(this.expenmonthly)).toFixed(2);
      }
      this.calprofit();
      this.fillData(this.income, this.expen);
    },
    async getproductmonthly() {
      if (this.month < 10) {
        this.monthget = "0" + this.month.toString();
      } else {
        this.monthget = this.month;
      }
      const { data } = await this.$axios.get(
        "/income/productmonthlybyowner/" +
          this.year_now +
          "/" +
          this.monthget +
          "/" +
          this.owner
      );
      this.productmonthly = data.data;

      if (this.productmonthly === "NaN") {
        this.product = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.product = parseFloat(Number(this.productmonthly)).toFixed(2);
      }
    },

    calprofit() {
      this.profit = 0.0;
      this.profit = parseFloat(Number(this.income - this.expen)).toFixed(2);
    },

    setmonth() {
      this.month_th = months_th.find(m => m.month == this.month).name;
    },

    clickback() {
      this.month = this.month - 1;
      this.setmonth();

      this.getincome();
      this.getexpen();
      this.getproductmonthly();
    },
    clicknext() {
      if (this.month < this.month_now) {
        this.month = this.month + 1;
        this.setmonth();
        this.getincome();
        this.getexpen();
        this.getproductmonthly();
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
