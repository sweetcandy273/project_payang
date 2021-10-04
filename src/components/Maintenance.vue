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
      optionstype: ["ปุ๋ย", "ตัดหญ้า", "ตัดกาฝาก"],
      selectshare: false,
      employee: "",
      optionsemployee: ["-","กนกวรรณ", "ชนิกานต์", "อรไท"],
    };
  },
};
</script>
<style  scoped src="../css/home.css">
</style>