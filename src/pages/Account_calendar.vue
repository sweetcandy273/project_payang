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
              <q-date v-model="date" color="green" :events="events" event-color="red" />
            </div>
          </div>
        </template>

        <template v-slot:after>
          <q-tab-panels
            v-model="date"
            animated
            transition-prev="jump-up"
            transition-next="jump-up"
          >
            <q-tab-panel name="2021/07/10">
              <div class="row font">
                <div class="col" style="font-size: 22px">2021/07/10</div>
                <div class="col text-right" style="font-size: 22px">
                  สวนภูเก็ต
                </div>
              </div>
              <div class="row font">
                <div class="greencircle"></div>
                <div class="col q-ml-xs" style="font-size: 18px">รายรับ</div>
                <div class="col text-right" style="font-size: 18px">
                  5,026.00
                </div>
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
                    8,376.75
                  </div>
                </div>
                <div class="row font" style="font-size: 16px">
                  น้ำยางสด 135.0 กก. 33% แห้ง 102.0
                </div>
                <div class="row font" style="font-size: 16px">
                  ราคายาง 62.05 บ./กก.
                </div>
                <div class="row font">
                  <div class="col" style="font-size: 16px">
                    กนกวรรณ ส่วนแบ่ง 60-40
                  </div>
                  <div class="col-3 text-right" style="font-size: 16px">
                    5,026.00
                  </div>
                </div>
              </div>

              <div class="row font q-pt-md">
                <div class="redcircle"></div>
                <div class="col q-ml-xs" style="font-size: 18px">รายจ่าย</div>
                <div class="col text-right" style="font-size: 18px">
                  2,000.00
                </div>
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
                    2,000.00
                  </div>
                </div>
                <div class="row font" style="font-size: 16px">
                  ซื้ออุปกรณ์ มีดกรีดยาง
                </div>
                <div class="row font" style="font-size: 16px">กนกวรรณ</div>
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
import {date} from "quasar";
import axios from "axios";
export default {
  name:"calendar",
  data() {
    return {
      calendar:[],
      splitterModel: 50,
      date: "",
      events: [""],
    };
  },
  async mounted(){
    const { data } = await axios.get(
      ""
    )
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
</style>