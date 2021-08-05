<template>
  <div>
    <div class="font" style="font-size: 30px">กรกฎาคม</div>
    <div class="row font q-px-md seft-center text-center">
      <div class="col-2 seft-center">
        <img
          class=""
          alt="back-left"
          src="../assets/back-left.png"
          style="width: 50px"
        />
      </div>
      <div class="col">
        <div style="font-size: 20px">น้ำยางสด</div>
        <q-img src="../assets/rubber-cup.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            0.00
          </div>
        </q-img>

        <div>กิโลกรัม</div>
      </div>
      <div class="col">
        <div style="font-size: 20px">รายรับ</div>
        <q-img src="../assets/money.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            0.00
          </div>
        </q-img>
        <div>บาท</div>
      </div>
      <div class="col-2 seft-center">
        <img
          class=""
          alt="back-right"
          src="../assets/back-right.png"
          style="width: 50px"
        />
      </div>
    </div>
    <div class="q-pa-md font">
      <div class="account-all q-pa-md shadow-2">
        <div class="row">
          <div class="col-10">
            <div style="font-size: 25px">สรุปบัญชีรวมทั้งหมด</div>
            <div style="font-size: 22px">ประจำเดือน กรกฎาคม</div>
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

        <Doughnut-chart
          :chart-data="datacollection"
          class="q-pa-md chart"
        ></Doughnut-chart>

        <div class="row items-end">
          <div class="col text-left" style="font-size: 20px; color: #06be3b">
            <div>รายรับ</div>
          </div>
          <div class="col text-right" style="font-size: 20px">
            <div>0.00</div>
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
            <div>0.00</div>
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
            <div>0.00</div>
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
import DoughnutChart from "../components/Chart.js";

export default {
  components: { DoughnutChart },
  data() {
    return {
      datacollection: null,
      // loaded: false,
    };
  },
  mounted() {
    this.fillData();
  },
  methods: {
    fillData() {
      this.datacollection = {
        labels: ["รายรับ", "รายจ่าย"],
        // centerlabel: 2021,
        datasets: [
          {
            label: ["รายรับ", "รายจ่าย"],
            backgroundColor: ["#06BE3B", "#B01717"],
            data: [20, 5],
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