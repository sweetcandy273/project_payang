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
    <div class = "q-px-md">
      <q-input 
        v-model="Event"
        filled
        type="date"
        style="font-family: 'Kanit', sans-serif max-width: 50%;"
      />
    </div>
    <div class="row text-center">
      <div class="col"></div>
      <div class="col"></div>
    </div>
    <div class="q-gutter-y-md q-px-md" style="max-width: 100%">
      <div class="row q-pt-md">
        <div class="col">
         <q-select
          filled
          v-model="type"
          :options="optionstype"
          style="font-family: 'Kanit', sans-serif"
          label="ตัวเลือก"
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
       <div class="stores">
        <q-select
          filled
          v-model="store"
          :options="options"
          style="font-family: 'Kanit', sans-serif"
          label="ร้านค้า"
        />
      </div>
        <div class="share">
          <q-checkbox
            v-model="selectshare"
            val="teal"
            style="font-family: 'Kanit', sans-serif"
            label="กนกวรรณ เป็นผู้ได้รับส่วนแบ่ง"
          />
        </div>
        <div>
          <strong>{{ selectshare }}</strong>
        </div>
      
        <div class="col">
          <q-input
            filled
            v-model="note"
            style="font-family: 'Kanit', sans-serif"
            label="บันทึก"
          />
        </div>
      
      <div class="submit row q-gutter-sm flex-center">
        <q-btn label="บันทึก" type="submit" style= "background: #4E7971;
          color: white; font-family: 'Kanit', sans-serif; width: 1000px; unelevated
        rounded "/>
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
      selectshare: ["teal"],
      note: "",
      type: null,
      optionstype: ["ปุ๋ย", "ตัดหญ้า" ,"ตัดกาฝาก"],
    };
  },
};
</script>
<style scoped src="../css/home.css">
</style>