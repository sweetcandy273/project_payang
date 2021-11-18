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

import LineChart from "./LineChart.js";

export default {
  props: { item: { type: Object || Array } },

  components: { LineChart },
  data() {
    return {
      owner: "",
      productyearly: {},
      product: 0.0,

      year: year_now,
      year_now: year_now,

      farm_id: "",

      productmonthly: {},
      monthget: "",
      datacollection: null,

      Jan: 0.0,
      Feb: 0.0,
      Mar: 0.0,
      Apr: 0.0,
      May: 0.0,
      June: 0.0,
      Jul: 0.0,
      Aug: 0.0,
      Sep: 0.0,
      Oct: 0.0,
      Nov: 0.0,
      Dec: 0.0,

    };
  },
  async mounted() {
    this.farm_id = this.item.id;
    // console.log(this.farm_id);
    // await this.getproductyearly();
    await this.fillData
    (this.Jan,
    this.Feb,
    this.Mar,
    this.Apr,
    this.May,
    this.June,
    this.Jul,
    this.Aug,
    this.Sep,
    this.Oct,
    this.Nov,
    this.Dec);
  },
  methods: {
    clickback() {
      this.year = this.year - 1;
      this.getproductyearly();
    },
    clicknext() {
      if (this.year < this.year_now) {
        this.year = this.year + 1;
        this.getproductyearly();
      }
    },

    // async getproductyearly() {
    //   const { data } = await this.$axios.get(
    //     "/income/productyearlybyfarm/" + this.year + "/" + this.farm_id
    //   );
    //   this.productyearly = data.data;
    //   console.log(data.data);
    //   if (this.productyearly === "NaN") {
    //     this.product = parseFloat(Number(0.0)).toFixed(2);
    //   } else {
    //     this.product = parseFloat(Number(this.productyearly)).toFixed(2);
    //   }
    // },
 
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
            data: [
              
            ],
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