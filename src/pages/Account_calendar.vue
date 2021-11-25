<template>
  <q-page>
    <q-header>
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({
                name: 'detail_farm',
                query: { id: $route.query.id }
              })
            "
          />
        </div>

        <div class="col-6 font header-title">บัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <q-splitter v-model="splitterModel" horizontal>
      <div class="row justify-center">
        <q-date
          v-model="date"
          color="green"
          :events="events"
          :event-color="date => (date[9] % 2 === 0 ? 'red' : 'red')"
          today-btn
        />
      </div>
    </q-splitter>

    <div class="col font q-mx-md q-mt-md" style="font-size: 22px">
      {{ date }}
    </div>
    
    <div :key="index" v-for="(data, index) in incomes">
      <div class="row font q-pt-md">
        <div class="greencircle"></div>
        <div class="col q-ml-xs" style="font-size: 18px">รายรับ</div>
        <div class="col text-right" style="font-size: 18px">
          {{ data.amount }}
        </div>
      </div>
      <div
        class="calendar-income q-pa-md"
        @click="
          $router.push({
            path: 'detail_income',
            query: {
              id: data.in_id,
            },
          })
        "
      >
        <div class="row font">
          <div class="col" style="font-size: 16px">ร้านดาว น้ำยางสด, แผ่น</div>
          <div class="col-3 text-right" style="font-size: 16px">
            {{ data.amount }}
          </div>
        </div>
        <div
          class="calendar-income q-pa-md"
          @click="
            $router.push({
              path: 'detail_income',
              query: {
                id: data.in_id
              }
            })
          "
        >
          <div class="row font">
            <div class="col" style="font-size: 16px">
              ร้าน: {{ data.store_in }}
            </div>
          </div>
          <div class="row font" style="font-size: 16px">
            น้ำยางสด: {{ data.weight }} กก. เปอร์เซ็น: {{ data.percen_rubber }}%
            แห้ง: {{ data.dry_rubber }}
          </div>
          <div class="row font" style="font-size: 16px">
            ราคายาง: {{ data.rubber_price }} บ./กก.
          </div>
          <div class="row font">
            <div class="col" style="font-size: 16px">
              ส่วนแบ่ง: {{ data.percen_split }}
            </div>
          </div>
          <div class="row font" style="font-size: 16px">
            จำนวนเงินทั้งหมด: {{ data.amount }}
          </div>
        </div>
      </div>
    </div>
    <div :key="index + 1000" v-for="(data, index) in expenditures">
      <div class="q-ma-md">
        <div class="row font q-pt-md">
          <div class="redcircle"></div>
          <div class="col q-ml-xs" style="font-size: 18px">รายจ่าย</div>
          <div class="col text-right" style="font-size: 18px">
            {{ data.amount }}
          </div>
        </div>
        <div
          class="calendar-expenditure q-pa-md"
          @click="
            $router.push({
              path: 'detail_expenditure',
              query: {
                id: data.expen_id
              }
            })
          "
        >
          <div class="row font">
            <div class="col" style="font-size: 16px">
              ร้าน: {{ data.store_expen }}
            </div>
            <div class="col-3 text-right" style="font-size: 16px">
              {{ data.amount }}
            </div>
          </div>
          <div class="row font" style="font-size: 16px">
            ส่วน: {{ data.type }}
          </div>
          <div class="row font" style="font-size: 16px">
            กิจกรรม: {{ data.title_type }}
          </div>
        </div>
      </div>
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
  </q-page>
</template>

<script>
import axios from "axios";
import { date } from "quasar";

export default {
  data() {
    return {
      incomes: [],
      expenditures: [],
      splitterModel: 50,
      date: "",
      events: [],
      listAllincome: [],
      listAllexpenditure: []
    };
  },
  mounted() {
    this.getIncome();
    this.getExpenditure();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getIncome() {
      try {
        this.$q.loading.show();
        const { data } = await axios.get(
          `http://localhost:3000/income/` + this.$route.query.id
        );

        this.listAllincome = data.data;
        this.date = this.formatDate(new Date());
        const listEvent = data.data.map(data => {
          return this.formatDate(data.date_income);
        });
        this.events.push(...listEvent);
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    },
    async getExpenditure() {
      const { data } = await axios.get(
        "http://localhost:3000/income/listbyfarm/"+ this.$route.query.id
      );
      this.listAllexpenditure = data.data;
      this.date = this.formatDate(new Date());
      const listEvent = data.data.map((data) => {
        return this.formatDate(data.date_expenditure);
      });
      this.events.push(...listEvent);
    },
  },
  watch: {
    date(value) {
      this.incomes = this.listAllincome.filter(data => {
        // console.log(data.date_income,"==",date.formatDate(value,"YYYY/MM/DD"));
        return date.formatDate(value, "YYYY-MM-DD") == data.date_income;
      });
      this.expenditures = this.listAllexpenditure.filter(data => {
        return date.formatDate(value, "YYYY-MM-DD") == data.date_expenditure;
      });
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>
<style scoped>
.q-date {
  width: 90%;
  font-family: "Kanit", sans-serif;
}

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
