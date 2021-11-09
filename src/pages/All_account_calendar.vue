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
            @click="$router.push({ name: 'home' })"
          />
        </div>

        <div class="col-6 font header-title">บัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="">
      <q-splitter v-model="splitterModel" horizontal>
        <template v-slot:before>
          <div class="row justify-center">
            <div>
              <q-date
                color="green"
                v-model="date"
                :events="events"
                event-color="red"
                today-btn
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
            <q-tab-panel name="2021/10/18" class="detail-account">
              <div class="row font">
                <div class="col" style="font-size: 22px">สวนภูเก็ต</div>
              </div>

              <div :key="index" v-for="(listIncome, index) in listIncomes">
                {{ listIncome.farm_id }}

                <div class="row font">
                  <div class="greencircle"></div>
                  <div class="col q-ml-xs" style="font-size: 18px">รายรับ</div>
                  <div class="col text-right" style="font-size: 18px">
                    {{ listIncome.amount_net }}
                  </div>
                </div>
                <div class="calendar-income q-pa-md">
                  <div class="row font">
                    <div class="col" style="font-size: 16px">
                      ร้านดาว น้ำยางสด, แผ่น
                    </div>
                    <div class="col-3 text-right" style="font-size: 16px">
                      {{ listIncome.amount }}
                    </div>
                  </div>
                  <div class="row font" style="font-size: 16px">
                    น้ำยางสด {{ listIncome.weight }} กก.
                    {{ listIncome.percen_rubber }}% แห้ง
                    {{ listIncome.dry_rubber }}
                  </div>
                  <div class="row font" style="font-size: 16px">
                    ราคายาง {{listIncome.rubber_price}} บ./กก.
                  </div>
                  <div class="row font">
                    <div class="col" style="font-size: 16px">
                      กนกวรรณ ส่วนแบ่ง {{listIncome.percen_split}}
                    </div>
                    <div class="col-3 text-right" style="font-size: 16px">
                    {{ listIncome.amount_net }}
                    </div>
                  </div>
                </div>
              </div>
            </q-tab-panel>

            <!-- <div class="row font q-pt-md">
                <div class="redcircle"></div>
                <div class="col q-ml-xs" style="font-size: 18px">รายจ่าย</div>
                <div class="col text-right" style="font-size: 18px">
                  2,000.00
                </div>
              </div>
              <div class="calendar-expenditure q-pa-md">
                <div class="row font">
                  <div class="col" style="font-size: 16px">
                    ร้านขายอุปกรณ์การช่าง
                  </div>
                  <div class="col-3 text-right" style="font-size: 16px">
                    2,000.00
                  </div>
                </div>
                <div class="row font" style="font-size: 16px">
                  ซื้ออุปกรณ์ มีดกรีดยาง
                </div>
                <div class="row font" style="font-size: 16px">กนกวรรณ</div>
              </div> -->
          </q-tab-panels>
        </template>
      </q-splitter>
    </div>
  </div>
</template>
  </div>
</template>
<script>
import { date } from "quasar";
// const timeStamp = Date.now();
// const date_now = date.formatDate(timeStamp, "YYYY/MM/DD");

export default {
  data() {
    return {
      list_income:[],

      // model: { from: "", to: "" },
   
      listIncomes: [],
      listAllIncome:[],

      splitterModel: 50,
      date: "",
      events: [],
    };
  },
  mounted() {
    this.getListIncome();
  },
  methods: {
    async getListIncome() {
      const { data } = await this.$axios.get(
        "/income/listbyowner/a6260f89-5443-4df1-94d7-6e3e431f76b6"
      );
      this.listAllIncome = data.data;
      this.date = this.formatDate(new Date());
      this.events = data.data.map((data) => {
        return this.formatDate(data.date);
      });
     
    },
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
  },
  watch:{
    date(value){
      this.incomes =this.listAllIncome.filter((data)=>{
        return new Date(value).getTime()==new Date(data.date).getTime()
      })
    }
  }
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

.detail-account {
  background: #dae5de;
}

.q-date {
  width: 100%;
  font-family: "Kanit", sans-serif;
}
</style>