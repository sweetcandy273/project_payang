<template>
  <div>
    <q-form>
      <div class="font q-px-md">
        <q-input
          filled
          v-model="expens.date_expenditure"
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
                <q-date v-model="expens.date_expenditure" color="green">
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
              v-model="expens.title_type"
              :options="titleoption"
              label="ตัวเลือก"
            />
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="expens.amount"
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
              v-model="expens.store_expen"
              label="ชื่อร้านค้า"
              :rules="[
                val => (val && val.length > 0) || 'กรุณากรอกชื่อร้านค้า'
              ]"
            >
              <template v-slot:prepend icon="home"></template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="expens.telstore_expen"
              label="เบอร์โทรร้านค้า"
              mask="###-###-####"
              :rules="[
                val => (val && val.length > 0) || 'กรุณากรอกเบอร์โทรร้านค้า'
              ]"
            >
              <template v-slot:prepend> </template>
            </q-input>
          </div>
        </div>

        <div class="col">
          <q-input filled v-model="expens.note" label="บันทึก" />
        </div>

        <div class="submit row q-gutter-sm flex-center font">
          <q-btn
            unelevated
            rounded
            label="บันทึก"
            class="shadow-2 text-white"
            style="width: 100%; background-color: #4e7971"
            @click="onSubmit()"
          />
        </div>
      </div>
    </q-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: "",
      titleoption: ["ปุ๋ย", "ตัดหญ้า", "ตัดกาฝาก"],
      selectshare: false,
      expens: {}
    };
  },
  mounted() {
    this.getExpen();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getExpen() {
      const { data } = await this.$axios.get(
        `/expenditure/${this.$route.query.id}`
      );
      this.expens = data.data;
    },

    async onSubmit() {
      const { data } = await this.$axios.put(
        "/expenditure/update/" + this.$route.query.id,
        {
          date_expenditure: this.expens.date_expenditure,
          amount: this.expens.totalprice,
          note: this.expens.note,
          type: "Maintenance",
          title_type: this.expens.title_type,
          farm_id: this.$route.query.id,
          owner: this.$route.query.owner,
          store_expen: this.expens.store_expen,
          telstore_expen: this.expens.telstore_expen
        }
      );
      this.expens = data.data;

      this.$router.push({
        path: "/account_calendar",
        query: {
          id: this.expens.expen_id,
          owner: this.$route.query.owner
        }
      });
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>
