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
        style="background: #2d9cdb; color: white"
        label="รายรับ"
        @click="$router.push({ name: 'add_income' })"
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white"
        label="รายจ่าย"
        @click="$router.push({ name: 'add_expenditure' })"
      />
    </div>
    <div class="q-px-md font">
      <q-input v-model="Event" filled type="date" />
    </div>
    <div class="row q-gutter-sm q-pa-md text-center">
      <div class="col" style="background: #74d751; width: 100px">
        <q-img
          class="q-pa-none"
          src="../assets/maintenance_sapling.png"
          style="width: 100px"
        >
          <div class="absolute-full text-subtitle2 flex flex-center">
            <h4 class="font">บำรุงรักษา</h4>
          </div>
        </q-img>
      </div>
      <div class="col" style="background: #edf06e; width: 100px">
        <q-img src="../assets/equipment_rubber-cup.png" style="width: 100px">
          <div class="absolute-full text-subtitle2 flex flex-center">
            <h4 class="font">วัสดุ-อุปกรณ์</h4>
          </div>
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
      <div class="sharemoney" v-if="selectshare">
        <strong style="font-size: 16px">
          <div class="row">
            <div class="col text-center q-my-md">% การแบ่ง</div>
            <div class="col">
              <q-select
                filled
                v-model="percent"
                :options="optionspercent"
                label="ส่วนแบ่ง"
              />
            </div>
          </div>
        </strong>
      </div>

      <div class="col">
        <q-input filled v-model="note" label="บันทึก" />
      </div>

      <div class="submit row q-gutter-sm flex-center font">
        <q-btn
          label="บันทึก"
          type="submit"
          style="background: #4E7971;
          color: white;   width: 1000px; unelevated
        rounded "
        />
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {
      Event: "",
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