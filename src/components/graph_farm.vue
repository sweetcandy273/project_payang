<template>
  <div>
    <div class="font" style="font-size: 30px">{{ year }}</div>
    <div class="row font q-px-md seft-center text-center">
      <div class="col-2 seft-center">
        <div v-if="this.year >= this.year_now - 5">
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
      <div class="col-2 seft-center">
        <div v-if="this.year < this.year_now">
          <q-icon name="arrow_forward_ios" size="30px" @click="clicknext()" />
        </div>
      </div>
    </div>
    <div class="q-pa-md font">
      <div class="account-all q-pa-md shadow-2">
        <div class="text-center">
          <line-chart :chart-data="datacollection"></line-chart>
        </div>
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

import LineChart from "./LineChart.js";

export default {
  props: { item: { type: Object || Array } },

  components: { LineChart },
  data() {
    return {
      
      productyearly: {},
      product: 0,

      year: year_now,
      year_now: year_now,

      month_now: month_now,

      farm_id: "",

      productmonthly: {},
      monthget: "",
      datacollection: null,
      totalProductPerMonths: [],
    };
  },

  async mounted() {
    this.farm_id = this.item.id;
    // console.log(this.farm_id);
    await this.getproductyearly();
    await this.getproductmountly();
    this.fillData();
  },
  methods: {
    async clickback() {
      this.year = this.year - 1;
      await this.getproductyearly();
      await this.getproductmountly();
      this.fillData();
    },
    async clicknext() {
      if (this.year < this.year_now) {
        this.year = this.year + 1;
        await this.getproductyearly();
        await this.getproductmountly();
        this.fillData();
      }
    },
    async getproductmountly() {
      const { data } = await this.$axios.get(
        "/income/productmonthly/" + this.year + "/" + this.farm_id
      );

      this.totalProductPerMonths = data.data.map((m) => m.total);
    },

    async getproductyearly() {
      const { data } = await this.$axios.get(
        "/income/productyearlybyfarm/" + this.year + "/" + this.farm_id
      );
      this.productyearly = data.data;

      if (this.productyearly === "NaN") {
        this.product = parseFloat(Number(0.0)).toFixed(2);
      } else {
        this.product = parseFloat(Number(this.productyearly)).toFixed(2);
      }
    },

    fillData() {
      this.datacollection = {
        labels: [
          "ม.ค.",
          "ก.พ.",
          "มี.ค.",
          "เม.ย.",
          "พ.ค.",
          "มิ.ย.",
          "ก.ค.",
          "ส.ค.",
          "ก.ย.",
          "ต.ค.",
          "พ.ย.",
          "ธ.ค.",
        ],
        datasets: [
          {
            label: "น้ำยางสด : กิโลกรัม",
            data: this.totalProductPerMonths,
            fill: false,
            borderColor: "#4e7971",
            backgroundColor: "#2554FF",
            borderWidth: 1,
          },
        ],
      };
    },
  },
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

.chart {
  /* height: 300px; */
  width: 310px;
}

.bg-product-all {
  background: none;
  font-size: 25px;
}
</style>