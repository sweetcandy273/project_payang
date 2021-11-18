<template>
  <q-page>
    <q-header>
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

    <q-splitter v-model="splitterModel" horizontal>
      <div class="row justify-center">
        <q-date
          v-model="date"
          color="green"
          :events="events"
          :event-color="date => (date[9] % 2 === 0 ? 'teal' : 'green')"
          today-btn
        />
      </div>
    </q-splitter>

    <div class="col font q-mx-md q-mt-md" style="font-size: 22px">
      {{ date }}
    </div>
    <div :key="index" v-for="(data, index) in incomes">
      <div v-if="data.farm_id != null">
        {{ getFarmName(data.farm_id) }}
      </div>

      <div class="row font q-pt-md">
        <div class="greencircle"></div>
        <div class="col q-ml-xs" style="font-size: 18px">รายรับ</div>
        <div class="col text-right" style="font-size: 18px">
          {{ data.amount }}
        </div>
      </div>
      <div class="calendar-income q-pa-md">
        <div class="row font">
          <div class="col" style="font-size: 16px">ร้านดาว น้ำยางสด, แผ่น</div>
          <div class="col-3 text-right" style="font-size: 16px">
            {{ data.amount }}
          </div>
        </div>
        <div class="row font" style="font-size: 16px">
          น้ำยางสด {{ data.weight }} กก. {{ data.percen_rubber }} % แห้ง
          {{ data.dry_rubber }}
        </div>
        <div class="row font" style="font-size: 16px">
          ราคายาง {{ data.rubber_price }} บ./กก.
        </div>
        <div class="row font">
          <div class="col" style="font-size: 16px">
            {{ data.employee }} ส่วนแบ่ง {{ data.percen_split }}
          </div>
          <div class="col-3 text-right" style="font-size: 16px">
            {{ data.amount_net }}
          </div>
        </div>
      </div>
    </div>

    <div :key="index" v-for="(data, index) in expenditures">
      <div class="row font q-pt-md">
        <div class="redcircle"></div>
        <div class="col q-ml-xs" style="font-size: 18px">รายจ่าย</div>
        <div class="col text-right" style="font-size: 18px">
          {{ data.amount }}
        </div>
      </div>
      <div class="calendar-expenditure q-pa-md">
        <div class="row font">
          <div class="col" style="font-size: 16px">ร้านขายอุปกรณ์การช่าง</div>
          <div class="col-3 text-right" style="font-size: 16px">
            {{ data.amount }}
          </div>
        </div>
        <div class="row font" style="font-size: 16px">
          {{ data.note }}
        </div>
        <div class="row font" style="font-size: 16px">กนกวรรณ</div>
      </div>
    </div>
  </q-page>
</template>

<script>
import { date } from "quasar";

import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  name: "income",
  name: "expenditure",
  data() {
    return {
      owner: "",
      incomes: [],
      expenditures: [],
      splitterModel: 50,
      date: " ",
      events: [],
      listAllincome: [],
      listAllexpenditure: [],
      farm: {}
    };
  },
  mounted() {
    this.checkauth();
  },
  methods: {
    checkauth() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.owner = user.uid;
          this.getIncome();
          this.getExpenditure();
        } else {
          this.$router.push({
            name: "starter"
          });
        }
      });
    },
    async getFarmName(farm_id) {
      console.log(farm_id);
      const { data } = await this.$axios.get("/farm/" + farm_id);

      this.farm = data.data;
      console.log(this.farm.farm_name);
      return farm_id;
    },

    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getIncome() {
      const { data } = await this.$axios.get(
        "/income/listbyowner/" + this.owner
      );

      this.listAllincome = data.data;
      this.date = this.formatDate(new Date());
      const listEvent = data.data.map(data => {
        return this.formatDate(data.date_income);
      });
      this.events.push(...listEvent);
      // console.log(data.farm_id);
      // getFarmName(data.farm_id);
    },

    async getExpenditure() {
      const { data } = await this.$axios.get(
        "/expenditure/listbyowner/" + this.owner
      );
      this.listAllexpenditure = data.data;
      this.date = this.formatDate(new Date());
      const listEvent = data.data.map(data => {
        return this.formatDate(data.date_expenditure);
      });
      this.events.push(...listEvent);
    }
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
