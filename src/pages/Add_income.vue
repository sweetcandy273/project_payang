<template>
  <div>
    <q-header>
      <!-- <q-toolbar>
        <q-space></q-space>
      </q-toolbar>  -->
      <q-toolbar class="text-center row">
        <div class="col self-center">
          <img class="close" src="../assets/close.png" style="width: 50px" />
        </div>

        <div class="col-6 font header-title">เพิ่มบัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="row q-pa-md q-gutter-sm flex-center">
      <q-btn
        class="col"
        unelevated
        rounded
        style="
          background: #2d9cdb;
          color: white;
          font-family: 'Kanit', sans-serif;
        "
        label="รายรับ"
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="
          background: #f2994a;
          color: white;
          font-family: 'Kanit', sans-serif;
        "
        label="รายจ่าย"
      />
    </div>
    <div>
      <q-input
        v-model="Event"
        filled
        type="date"
        style="font-family: 'Kanit', sans-serif max-width: 100%;"
      />
    </div>
    <div class="text-center">
      <h4 class="font">ระบุข้อมูลน้ำยางสด</h4>
    </div>
    <div class="q-gutter-y-md q-px-md" style="max-width: 100%">
      <div class="row">
        <div class="col">
          <q-input
            filled
            v-model="weight_rubber"
            style="font-family: 'Kanit', sans-serif"
            label="น้ำหนักยาง(กิโลกรัม)"
          />
        </div>
        <div class="col q-ml-md">
          <q-input
            filled
            v-model="percent"
            style="font-family: 'Kanit', sans-serif"
            label="เปอร์เซ็น(%)"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input
            filled
            v-model="text"
            style="font-family: 'Kanit', sans-serif"
            label="แห้ง"
          />
        </div>
        <div class="col q-ml-md">
          <q-input
            filled
            v-model="price_rubber"
            style="font-family: 'Kanit', sans-serif"
            label="ราคาน้ำยาง"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input
            filled
            v-model="totalprice"
            style="font-family: 'Kanit', sans-serif"
            label="รวมจำนวนเงิน"
          />
        </div>
      </div>
      <div class="row">
          <!-- <q-select filled v-model="store" :options="options" label="Filled" /> -->
          
      </div>
    </div>
  </div>
</template>
<script>
import { ref } from "vue";

export default {
  data() {
    return {
      Event: "",
      weight_rubber: "",
      percent: "",
      text: "",
      price_rubber: "",
      totalprice:"",
    //   store:"",
    };
  },
};
</script>
<style scoped src="../css/home.css">
</style>