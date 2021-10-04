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
      <div class="box-droptype q-pa-md">
        <q-select
          filled
          :options="optionsactivity"
          color="teal"
          label="ประเภทกิจกรรม"
        >
        </q-select>
      </div>

      <div class="q-px-md font">
        <q-input
          color="teal"
          filled
          v-model="date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="teal">
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
export default {
  data() {
    return {
      date: "2021/07/18",
      checkbox: false,
      optionsactivity: [
        "ใส่ปุ๋ย",
        "ตัดหญ้า",
        "ตัดกากฝาก",
        "ตัดไม้ยาง",
        "หยอดน้ำกรด",
        "อื่นๆ",
      ],
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>


