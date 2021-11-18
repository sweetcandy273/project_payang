<template>
  <div>
    <q-header>
      <q-toolbar class="text-center row font">
        <div class="col flexed text-left">
          <q-icon
            @click="
              $router.push({
                name: 'detail_farm',
                query: { id: $route.query.id },
              })
            "
            name="arrow_back_ios"
            size="30px"
          ></q-icon>
        </div>

        <div class="col-6 font header-title">สวนภูเก็ต</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md q-mx-md">
      <q-splitter v-model="splitterModel" horizontal>
        <template v-slot:before>
          <div class="row justify-center q-pa-md">
            <div class="">
              <q-date
                v-model="date"
                color="green"
                :events="events"
                :event-color="(date) => (date[9] % 2 === 0 ? 'teal' : 'green')"
              />
            </div>
          </div>
        </template>

        <template v-slot:after>
          <div class="col font q-mx-md q-mt-md" style="font-size: 22px">
            {{ date }}
          </div>
    <div :key="index" v-for="(data, index) in activity_in_farm">
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
          <div class="add-account text-center fixed-bottom q-pa-xl">
            <q-btn
              unelevated
              round
              style="
                background: #4e7971;
                color: white;
                width: 50px;
                height: 50px;
              "
              icon="add"
              @click="
                $router.push({
                  name: 'Add_calender_farm',
                  query: {
                    id: data.farm_id,
                  },
                })
              "
            />
          </div>
        </template>
      </q-splitter>
    </div>
  </div>
</template>
 
<script>
import axios from "axios";
import { date } from "quasar";

export default {
  data() {
    return {
      splitterModel: 50,
      date: "",
      events: [],
    };
  },
  mounted() {
    // this.getactivity();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
  },

  // async getactivity() {
  //   const { data } = await axios.get(
  //     `http://localhost:3000/activity_in_farm/list/` + this.$route.query.id
  //   );
  //   this.listAllactivity = data.data;
  //   this.date = this.formatDate(new Date());
  //   const listEvent = data.data.map((data) => {
  //     return this.formatDate(data.date);
  //   });
  //   this.events.push(...listEvent);
  // },
  async getEmployee() {
    const { data } = await axios.get(
      "http://localhost:3000/farm_has_employee/list/" + this.$route.query.id
    );
    this.listAllemployee = data.data;
    this.date = this.formatDate(new Date());
    const listEvent = data.data.map((data) => {
      return this.formatDate(data.date_expenditure);
    });
    this.events.push(...listEvent);
  },
    watch: {
    date(value) {
      this.incomes = this.listAllincome.filter((data) => {
        // console.log(data.date_income,"==",date.formatDate(value,"YYYY/MM/DD"));
        return date.formatDate(value, "YYYY-MM-DD") == data.date;
      });
      this.expenditures = this.listAllexpenditure.filter((data) => {
        return date.formatDate(value, "YYYY-MM-DD") == data.date_expenditure;
      });
    },
  },
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