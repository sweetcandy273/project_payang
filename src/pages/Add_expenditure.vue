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
            @click="$router.push({ name: 'account_calendar' })"
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
        @click="$router.push({ name: 'add_income' })"
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white"
        label="รายจ่าย"
      />
    </div>
    <div class="q-px-md font">
      <q-input filled v-model="date" mask="date" :rules="['date']">
        <template v-slot:append>
          <q-icon name="event" class="cursor-pointer">
            <q-popup-proxy
              ref="qDateProxy"
              transition-show="scale"
              transition-hide="scale"
            >
              <q-date v-model="date">
                <div class="row items-center justify-end">
                  <q-btn v-close-popup label="Close" color="primary" flat />
                </div>
              </q-date>
            </q-popup-proxy>
          </q-icon>
        </template>
      </q-input>
    </div>

    <div class="q-py-md text-center">
      <q-btn-toggle
        v-model="type_expenditure"
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
        v-if="type_expenditure == 'maintenance'"
        class="text-center"
        id="maintenance"
      >
        <Maintenance />
      </div>
      <div v-else class="text-center">
        <Equipment />
      </div>
    </div>
  </div>
</template>
<script>
import Maintenance from "../components/Maintenance.vue";
import Equipment from "../components/Equipment.vue";
import axios from "axios";
export default {
  components: {
    Maintenance,
    Equipment,
  },
  methods:{
    // typeExpen(){ 
    //   axios.post(`http://localhost:3000/type_expenditure/create/a07f9bfa-e8b2-4125-8036-acf3d7048e09/`,
    //     {
    //       type: this.type_expenditure,
    //     }
    //   )
    // },
    
  },

  data() {
    return {
      type_expenditure: "maintenance",
      date: "2021/07/18",
      totalprice: "",
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>