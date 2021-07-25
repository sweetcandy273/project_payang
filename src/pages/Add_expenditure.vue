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
    
    <div class="row q-pa-md q-gutter-md text-center">
      <div class="col">
        <q-img src="../assets/maintenance_sapling.png" style="opacity: 0.5" width="100px">
          <h4 class="font text-center" style="font-size: 20px;">บำรุงรักษา</h4>
        </q-img>
      </div>
      <div class="col">
        <q-img src="../assets/equipment_rubber-cup.png" style="" width="100px">
           <h4 class="font text-center" style="font-size: 20px;">วัสดุ-อุปกรณ์</h4>
        </q-img>
      </div>
    </div>
    <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
      <div class="row q-pt-md">
        <div class="col">
          <q-select
            filled
            v-model="type"
            :options="optionstype"
            label="ตัวเลือก"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input filled v-model="totalprice" label="รวมจำนวนเงิน" />
        </div>
      </div>
      <div class="stores">
        <q-select filled v-model="store" :options="options" label="ร้านค้า" />
      </div>
      <div class="share">
        <q-checkbox
          v-model="selectshare"
          val="teal"
          style="font-size: 16px"
          label="กนกวรรณ เป็นผู้ได้รับส่วนแบ่ง"
        />
      </div>

      <div class="col">
        <q-input filled v-model="note" label="บันทึก" />
      </div>

      <div class="submit row q-gutter-sm flex-center font">
        <q-btn
          unelevated
          rounded
          label="บันทึก"
          type="submit"
          class="shadow-2 text-white"
          style="width: 100%; background-color: #4e7971"
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      date: "2021/07/18",
      weight_rubber: "",
      percent: "",
      text: "",
      price_rubber: "",
      totalprice: "",
      store: null,
      options: ["ดาวน้ำยางสด", "ไก่น้ำยางสด"],
      note: "",
      type: null,
      optionstype: ["ปุ๋ย", "ตัดหญ้า", "ตัดกาฝาก"],
      selectshare: false,
      optionspercent: ["60:40", "55:45", "50:50"],
    };
  },
};
</script>
<style scoped src="../css/home.css">

</style>