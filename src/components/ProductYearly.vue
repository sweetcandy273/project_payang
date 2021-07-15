<template>
  <div>
    <div class="font" style="font-size: 30px">2021</div>
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
        <div>น้ำยางสด</div>
        <div class="product-all">0.00</div>

        <div>กิโลกรัม</div>
      </div>
      <div class="col">
        <div>รายรับ</div>
        <div class="product-all">0.00</div>
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
      <div class="account-all-yearly q-pa-md shadow-2">
        <div class="row">
          <div class="col-10">
            <div style="font-size: 25px">สรุปบัญชีรวมทั้งหมด</div>
            <div style="font-size: 22px">ประจำปี 2021</div>
          </div>
          <div class="col">
            <div>
              <img
                class=""
                alt="back-right"
                src="../assets/click.png"
                style="width: 35px"
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
        <div>
          <hr
            style="
              height: 2px;
              border-width: 0;
              color: #4e7971;
              background-color: #4e7971;
            "
          />
        </div>
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

  /* width: 114px;
  height: 90px; */
  background-size: 100%;

  background-repeat: none;
  /* background-image: url("../img/rubber-cup.png"); */
}

.account-all-yearly {
  background-color: #c5dba8;
  border-radius: 20px;
}

.chart {
  /* height: 300px; */
  width: 310px;
}
</style>