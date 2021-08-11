<template>
    <div class="font">
            <q-header>
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'calender_farm' })"
          />
        </div>

        <div class="col-6 font header-title">สวนภูเก็ต</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
<div>
    <div class="box_drop q-pa-md">
    <q-btn-dropdown label="ประเภทกิจกรรม">
      <q-list>
        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>ใส่ปุ๋ย</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>ตัดหญ้า</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup >
          <q-item-section>
            <q-item-label>ตัดกาฝาก</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup >
          <q-item-section>
            <q-item-label>ตัดไม้ยาง</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup>
          <q-item-section>
            <q-item-label>หยอดน้ำกรด</q-item-label>
          </q-item-section>
        </q-item>

        <q-item clickable v-close-popup >
          <q-item-section>
            <q-item-label>อื่นๆ</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
    </q-btn-dropdown>
  </div>

   <div class="q-pa-md">
    <q-input filled v-model="date" color="teal">
      <template v-slot:prepend >
        <q-icon name="event" class="cursor-pointer" color="teal">
          <q-popup-proxy transition-show="scale" transition-hide="scale">
            <q-date v-model="date">
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-date>
          </q-popup-proxy>
        </q-icon>
      </template>

      <template v-slot:append>
        <q-icon name="access_time" class="cursor-pointer" color="teal">
          <q-popup-proxy transition-show="scale" transition-hide="scale" >
            <q-time  v-model="date" format24h>
              <div class="row items-center justify-end">
                <q-btn v-close-popup label="Close" color="primary" flat />
              </div>
            </q-time>
          </q-popup-proxy>
        </q-icon>
      </template>
      
    </q-input>
  </div>

    <div class="q-pa-md">
            <q-checkbox
          v-model="checkbox"
          style="font-size: 16px"
          label="นางสาว กนกวรรณ น้ำสงวน"
        />
      
    </div>
    

    <div class="q-pa-md q-gutter-sm self-center">
      <q-btn
        @click="$router.push({ name: 'calender_farm' })"
        unelevated
        rounded
        label="บันทึก"
        class="shadow-2 text-white"
      />
    </div>

       
</div>





    </div>
</template>



<script>
import { date } from 'quasar'
export default {
  setup () {
    return {
      date: ref('2019-02-01 12:00')
    }
  },
  data() {
    return {
      checkbox: false,
    };
  },
}
</script>



<style scoped src="../css/home.css">
</style>

