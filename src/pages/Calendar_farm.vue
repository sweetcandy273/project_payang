
<template>
  <div>
    <q-header>
      <q-toolbar class="text-center row">
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
          <div class="box_type">
            <q-tab-panels
              v-model="date"
              animated
              transition-prev="jump-up"
              transition-next="jump-up"
            >
              <q-tab-panel name="2021/07/10">
                <div class="row font">
                  <div class="col" style="font-size: 22px">2021/07/10</div>
                  <div>
                    <q-icon
                      name="create"
                      class="text-teal"
                      style="font-size: 2rem"
                    />
                  </div>
                </div>

                <div class="row font q-pt-md">
                  <div class="col text-right" style="font-size: 18px">
                    ตัดหญ้า
                  </div>
                </div>
              </q-tab-panel>
            </q-tab-panels>
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
              @click="$router.push({ name: 'add_calender_farm' })"
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
      events:[],
    };
  },
  mounted() {},
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
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