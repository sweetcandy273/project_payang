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

        <div class="col-6 font header-title">แก้ไข</div>
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
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white; opacity: 0.5"
        label="รายจ่าย"
       
      />
    </div>
    <div class="font q-px-md">
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
    <div class="text-center">
      <div class="font q-pa-md" style="font-size: 25px">ระบุข้อมูลน้ำยางสด</div>
    </div>
    <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
      <div class="row">
        <div class="col">
          <q-input filled v-model="weight_rubber" label="น้ำหนักยาง" >
             <template v-slot:prepend> กก. </template>
          </q-input>
        </div>
        <div class="col q-ml-md">
          <q-input filled v-model="percent" label="เปอร์เซ็น">
            <template v-slot:prepend> % </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input filled v-model="dry_rubber" label="เนื้อยางแห้ง">
            <template v-slot:prepend> ก. </template>
          </q-input>
        </div>
        <div class="col q-ml-md">
          <q-input filled v-model="price_rubber" label="ราคาน้ำยาง">
             <template v-slot:prepend> บ./กก. </template>
          </q-input>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input filled v-model="totalprice" label="รวมจำนวนเงิน">
            <template v-slot:prepend> ฿ </template>
          </q-input>
        </div>
      </div>
      <div class="stores">
        <q-select filled v-model="store" :options="options" label="ร้านค้า">
           <template v-slot:prepend>
            <q-icon name="store"/>
           </template>

        </q-select>
      </div>
      <div class="share">
        <q-checkbox
          v-model="selectshare"
          style="font-size: 16px"
          label="กนกวรรณ เป็นผู้ได้รับส่วนแบ่ง"
        />
      </div>
      <div class="sharemoney" v-if="selectshare">
        <strong>
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

      <div class="submit row q-gutter-sm flex-center">
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
      //ถ้าจะเอาไปใส่ Database ต้อง this.ตัวแปร
      date: "2021/07/18",
      weight_rubber: "",
      percent: "",
      dry_rubber: "",
      price_rubber: "",
      totalprice: "",
      store: null,
      options: ["ดาวน้ำยางสด", "ไก่น้ำยางสด", "อื่นๆ"],
      note: "",
      selectshare: false,
      optionspercent: ["60:40", "55:45", "50:50"],
    };
  },
};
</script>
<style scoped src="../css/home.css">
</style>