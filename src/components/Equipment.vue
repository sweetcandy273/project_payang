<template>
  <div>
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
          <q-input filled v-model="totalprice" label="รวมจำนวนเงิน">
            <template v-slot:prepend> ฿ </template>
          </q-input>
        </div>
      </div>
      <div class="stores">
        <q-select filled v-model="store" :options="options" label="ร้านค้า">
          <template v-slot:prepend>
            <q-icon name="store" />
          </template>
        </q-select>
      </div>

      <div class="row active">
        <q-checkbox v-model="active" style="font-size: 16px" label="กิจกรรม" />
      </div>
      <div class="activerubber" v-if="active">
        <strong>
          <div class="row" v-for="(input, index) in activity" :key="index">
            <div class="col font" style="font-size: 26px">1</div>
            <div class="col-9 q-px-md font">
              <q-input filled v-model="dateact" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="dateact">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>
          <div class="text-center">
            <q-btn
              unelevated
              rounded
              style="
                background: #5db075;
                color: white;
                width: 50px;
                height: 40px;
              "
              icon="add"
              @click="addactivity"
            />
          </div>
        </strong>
      </div>

      <div class="share text-left">
        <q-select
          filled
          v-model="employee"
          :options="optionsemployee"
          label="ผู้รับผิดชอบ"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-select>
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
          @click="$router.push({ name: 'check_expenditure' })"
        />
      </div>
    </div>
  </div>
</template>

<script>
export default {
 
  data() {
    return {
      totalprice: "",
      store: null,
      options: ["ดาวน้ำยางสด", "ไก่น้ำยางสด"],
      note: "",
      type: null,
      optionstype: [
        "ต้นยางพารา",
        "น้ำกรด",
        "มีดกรีดยาง",
        "ถ้วยรองน้ำยาง",
        "ถังน้ำ",
        "แกลลอนใส่น้ำยาง",
      ],
      dateact: "",
      selectshare: false,
      employee: "",
      optionsemployee: ["-", "กนกวรรณ", "ชนิกานต์", "อรไท"],
      active: false,
      activity: [
      {
        addactivity: "",
      },
    ],
    };
  },
  methods:{
    addactivity(){
      this.activity.push({
      addactivity: "",
      })
    }
  }
};
</script>
<style  scoped src="../css/home.css">
</style>