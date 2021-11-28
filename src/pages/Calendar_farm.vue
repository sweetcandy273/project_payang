<template>
  <div class="font">
    <q-header>
      <q-toolbar class="text-center row font">
        <div class="col flexed text-left">
          <q-icon
            @click="
              $router.push({
                name: 'detail_farm',
                query: { id: farm.farm_id }
              })
            "
            name="arrow_back_ios"
            size="30px"
          ></q-icon>
        </div>

        <div class="col-6 font header-title">ตารางกิจกรรม</div>
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
              name: 'edit_activity',
              query: {
                ida: data.act_farm_id,
                idf: data.farm_id
              }
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
            query: { id: farm.farm_id }
          })
        "
      />
    </div>
  </div>
</template>

<script>
import { date } from "quasar";

export default {
  data() {
    return {
      splitterModel: 50,
      date: "",
      events: [],
      activity_in_farms: [],
      listAllactivity: [],
      farm: {}
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
      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get(
          "/activity_in_farm/list/" + this.$route.query.id
        );

        this.listAllactivity = data.data;
        this.date = this.formatDate(new Date());
        this.events = data.data.map(data => {
          return this.formatDate(data.date);
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    },

    async getfarm() {
      try {
        this.$q.loading.show();

        const { data } = await this.$axios.get("/farm/" + this.$route.query.id);
        this.farm = data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    }
  },
  watch: {
    date(value) {
      this.activity_in_farms = this.listAllactivity.filter(data => {
        return (
          date.formatDate(value, "YYYY/MM/DD") == this.formatDate(data.date)
        );
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
