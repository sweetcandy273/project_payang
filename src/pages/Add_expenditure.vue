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
            @click="$router.push({ name: 'account_calendar' , query: { id: $route.query.id }})"
          />
        </div>
        

        <div class="col-6 font header-title">เพิ่มบัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="row q-pa-md q-gutter-sm flex-center font">
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #2d9cdb; color: white; opacity: 0.5"
        label="รายรับ"
        @click="$router.push({ name: 'add_income' , query: { id: $route.query.id } })"
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white"
        label="รายจ่าย"
        @click="$router.push({ name: 'add_expenditure' , query: { id: $route.query.id } })"
      />
    </div>
    

    <div class="q-py-md text-center">
      <q-btn-toggle
        v-model="type"
        toggle-color="green"
        toggle-text-color="black"
        rounded
        unelevated
        :options="[
          { value: 'maintenance', slot: 'maintenance' },
          { value: 'equipment', slot: 'equipment' },
        ]"
      >
        <template v-slot:maintenance>
          <div class="row items-center no-wrap">
            <q-img src="../assets/maintenance_sapling.png" width="100px">
              <h4 class="font text-center" style="font-size: 20px">
                บำรุงรักษา
              </h4>
            </q-img>
          </div>
        </template>

        <template v-slot:equipment>
          <div class="row items-center no-wrap">
            <q-img
              src="../assets/equipment_rubber-cup.png"
              style=""
              width="100px"
            >
              <h4 class="font text-center" style="font-size: 20px">
                วัสดุอุปกรณ์
              </h4>
            </q-img>
          </div>
        </template>
      </q-btn-toggle>
    </div>

    <div>
      <div
        v-if="type == 'maintenance'"
        class="text-center"
        id="maintenance"
      >
        <Maintenance :item="id" />
      </div>
      <div v-else class="text-center">
        <Equipment :item="id" />
      </div>
    </div>
  </div>
</template>
<script>
import { date } from "quasar";
import Maintenance from "../components/Maintenance.vue";
import Equipment from "../components/Equipment.vue";
export default {
  data(){
    const id = { id: this.$route.query.id };
    return{  
      date_expenditure:"",
      type:"",
      id,
    };
  },
  components: {
    Maintenance,
    Equipment,
  },
 
  methods:{
     formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
},
};
</script>

<style scoped src="../css/home.css">
</style>