<template>
  <div class="font">
    <q-header>
      <q-toolbar class="text-center row font">
        <div class="col flexed text-left">
          <q-icon
            @click="
              $router.push({
                name: 'detail_farm',
                query: { id: farm.farm_id },
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

    <q-splitter v-model="splitterModel" horizontal>
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
    </q-splitter>

    <div class="q-pa-md self-center">
    <div class="boxactivity">
      <div class="row">
        <div class="col q-mx-md q-mt-md" style="font-size: 22px">
          {{ date }}
        </div>
      </div>

      <div
        class="q-mx-md q-mt-md"
        :key="index"
        v-for="(data, index) in activity_in_farms"
        style="font-size: 15px"
        @click="
          $router.push({
            name: 'Edit_activity',
            query: {
              ida: data.act_farm_id,
              idf: data.farm_id
            },
          })
        "
      >
        {{ data.activity }}
      </div>
    </div>
    </div>

 

    <div class=" text-center fixed-bottom q-pa-xl">
      <q-btn
        unelevated
        round
        style="background: #4e7971; color: white; width: 50px; height: 50px"
        icon="add"
        @click="
          $router.push({
            name: 'add_calender_farm',
            query: { id: farm.farm_id },
          })
        "
      />
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
      activity_in_farms: [],
      listAllactivity: [],
      farm: {},
    };
  },
  mounted() {
    this.getactivity();
    this.getfarm();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },

    async getactivity() {
      const { data } = await axios.get(
        "http://localhost:3000/activity_in_farm/list/" + this.$route.query.id
      );
      // console.log(data.data);
      this.listAllactivity = data.data;
      this.date = this.formatDate(new Date());
      this.events = data.data.map((data) => {
        return this.formatDate(data.date);
      });
    },

    async getfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/" + this.$route.query.id
      );
      this.farm = data.data;
    },
  },
  watch: {
    date(value) {
      this.activity_in_farms = this.listAllactivity.filter((data) => {
        // console.log(
        //   date.formatDate(value, "YYYY/MM/DD"),
        //   this.formatDate(data.date)
        // );
        return (
          date.formatDate(value, "YYYY/MM/DD") == this.formatDate(data.date)
        );
      });
    },
  },
};
</script>
<style scoped src="../css/home.css">
</style>
<style scoped>

.boxactivity {
  border-radius: 20px;
  background: white;
  padding: 2px 4px 15px 4px;
  margin: 2px 2px 2px 2px;
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