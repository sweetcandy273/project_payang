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
      <div class="col" >
        <div style="font-size: 20px;">น้ำยางสด</div>
        <q-img src="../assets/rubber-cup.png" style="" width="100px">
          <div class="absolute-full flex flex-center text-black bg-product-all">
            0.00
          </div>
        </q-img>

        <div>กิโลกรัม</div>
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


        <div class="text-center">
            <line-chart :chart-data="datacollection"></line-chart>
        </div>
 

      </div>
    </div>
  </div>
</template>

<script>
  import LineChart from './LineChart.js'

  export default {
    components: {
      LineChart
    },
    data () {
      return {
        datacollection: null
      }
    },
    mounted () {
      this.fillData()
    },
    methods: {
      fillData () {
        this.datacollection = {
          labels: ["Jan",	"Feb",	"Mar",	"Apr",	" May",	" Jun",	"Jul", "Aug", " Sep", "Oct","Nov","Dec"],
          datasets: [
            {
            label: 'น้ำยงสด : กิโลกรัม',
              data: [600,	1150,	342,	6050,	2522,	3241,	1259,	157,	1545, 9841, 155, 17],
              fill: false,
              borderColor: '#4e7971',
              backgroundColor: '#2554FF',
              borderWidth: 1
            }
          ]
        }
      },
    }
  }
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