<template>
  <div>
    <q-form @submit.prevent="submitExpen" class="q-gutter-md">
      <div class="font q-px-md">
        <q-input
          filled
          v-model="date_expenditure"
          color="teal"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date_expenditure" color="green">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
        <div class="row q-pt-md">
          <div class="col">
            <q-select
              filled
              v-model="title"
              :options="titleoption"
              label="ตัวเลือก"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="totalprice"
              label="รวมจำนวนเงิน"
              :rules="[
                val => (val && val.length > 0) || 'กรุณากรอกรวมจำนวนเงิน'
              ]"
              fill-mask="0"
              reverse-fill-mask
              mask="#.##"
            >
              <template v-slot:prepend> ฿ </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="store_expen"
              label="ชื่อร้านค้า"
              :rules="[
                val => (val && val.length > 0) || 'กรุณากรอกชื่อร้านค้า'
              ]"
            >
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="telstore_expen"
              label="เบอร์โทรร้านค้า"
              mask="###-###-####"
              :rules="[
                val =>
                  val.charAt(0) == '0' || 'เบอร์โทรศัพท์จะต้องเริ่มต้นด้วย 0',
                val =>
                  (val && val.length > 0 && val.length == 12) ||
                  'กรุณากรอกเบอร์โทรศัพท์'
              ]"
            >
              <template v-slot:prepend> </template>
            </q-input>
          </div>
        </div>

        <div class="col">
          <q-input filled v-model="note" label="บันทึก" />
        </div>

        <div class="submit row q-gutter-sm flex-center font">
          <q-btn
            unelevated
            rounded
            label="บันทึก"
            class="shadow-2 text-white"
            style="width: 100%; background-color: #4e7971"
            type="submit"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
import { date } from "quasar";
export default {
  data() {
    return {
      date_expenditure: "",
      totalprice: "",
      note: "",
      title: "",
      titleoption: [
        "ต้นยางพารา",
        "น้ำกรด",
        "มีดกรีดยาง",
        "ถ้วยรองน้ำยาง",
        "ถังน้ำ",
        "แกลลอนใส่น้ำยาง"
      ],
      selectshare: false,

      store_expen: "",
      telstore_expen: ""
    };
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async submitExpen() {
      await this.$axios
        .post(
          `/expenditure/create/${this.$route.query.id}/${this.$route.query.owner}`,
          {
            date_expenditure: this.date_expenditure,
            amount: this.totalprice,
            note: this.note,
            type: "Equipment",
            title_type: this.title,
            store_expen: this.store_expen,
            telstore_expen: this.telstore_expen
          }
        )
        .then(response => {});
      await this.$router.push({
        path: "/account_calendar",
        query: { id: this.$route.query.id, owner: this.$route.query.owner }
      });
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>
