<template>
  <div>
    <q-header>
      <q-toolbar class="row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({
                name: 'account_calendar',
                query: { id: $route.query.id, owner: $route.query.owner }
              })
            "
          />
        </div>

        <div class="col-6 font header-title text-center">เพิ่มบัญชี</div>
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
        @click="
          $router.push({
            name: 'add_income',
            query: { id: $route.query.id, owner: $route.query.owner }
          })
        "
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white; opacity: 0.5"
        label="รายจ่าย"
        @click="
          $router.push({
            name: 'add_expenditure',
            query: { id: $route.query.id, owner: $route.query.owner }
          })
        "
      />
    </div>
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <div class="font q-px-md">
        <q-input
          filled
          v-model="date_income"
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
                <q-date v-model="date_income" color="green">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

      <div class="text-center">
        <div class="font" style="font-size: 25px">
          ระบุข้อมูลน้ำยางสด
        </div>
      </div>

      <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="weight_rubber"
              label="น้ำหนักยาง"
              :rules="[val => (val && val.length > 0) || 'กรุณากรอกน้ำหนักยาง']"
              fill-mask="0"
              reverse-fill-mask
              mask="#.##"
            >
              <template v-slot:prepend> กก. </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="percent"
              color="teal"
              label="เปอร์เซ็น"
              :rules="[val => (val && val.length > 0) || 'กรุณากรอกเปอร์เซ็น']"
              fill-mask="0"
              reverse-fill-mask
              mask="#.##"
            >
              <template v-slot:prepend> % </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="row">
            <div class="col">
              <q-input
                filled
                v-model="dry_rubber"
                label="เนื้อยางแห้ง"
                :rules="[
                  val => (val && val.length > 0) || 'กรุณากรอกเนื้อยางแห้ง'
                ]"
                fill-mask="0"
                reverse-fill-mask
                mask="#.##"
              >
                <template v-slot:prepend> ก. </template>
              </q-input>
            </div>
            <div class="col q-ml-md">
              <q-input
                filled
                v-model="rubber_price"
                label="ราคาน้ำยาง"
                :rules="[
                  val => (val && val.length > 0) || 'กรุณากรอกราคาน้ำยาง'
                ]"
                fill-mask="0"
                reverse-fill-mask
                mask="#.##"
              >
                <template v-slot:prepend> บ./กก. </template>
              </q-input>
            </div>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="amount"
              color="teal"
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
              v-model="store_in"
              label="ชื่อร้านค้า"
              :rules="[
                val => (val && val.length > 0) || 'กรุณากรอกชื่อร้านค้า'
              ]"
            >
              <template v-slot:prepend></template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="telstore_in"
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

        <div class="sharemoney">
          <div class="row">
            <div class="col text-center" style="font-size: 20px">
              % การแบ่ง
            </div>
            <div class="col">
              <q-select
                filled
                v-model="percen_split"
                :options="optionspercent"
                label="% ที่เจ้าของได้"
                :rules="[
                  val => (val && val.length > 0) || 'กรุณาเลือกส่วนแบ่ง'
                ]"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <q-input
            filled
            v-model="note"
            color="teal"
            label="บันทึก"
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกข้อมูล']"
          />
        </div>

        <div class="submit row q-gutter-sm flex-center">
          <q-btn
            unelevated
            rounded
            type="submit"
            label="บันทึก"
            class="shadow-2 text-white"
            style="width: 100%; background-color: #4e7971"
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
      //ถ้าจะเอาไปใส่ Database ต้อง this.ตัวแปร
      date_income: "",
      weight_rubber: "",
      percent: "",
      dry_rubber: "",
      rubber_price: "",
      amount: "",
      store_in: "",
      telstore_in: "",
      note: "",
      selectshare: false,
      share: "",
      percen_split: "",
      optionspercent: ["60", "55", "50", "-"]
    };
  },

  mounted() {
    // this.getemployee();

    console.log(this.$route.query.owner);
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },

    sharemoney: function(amount, percen_split) {
      var amount_net = 0;
      if (percen_split == 60) {
        amount_net = (amount / 100) * 60;
      } else if (percen_split == 55) {
        amount_net = (amount / 100) * 55;
      } else if (percen_split == 50) {
        amount_net = (amount / 100) * 50;
      } else {
        amount_net = amount * 1;
      }

      return amount_net;
    },

    async onSubmit() {
      this.amount_net = this.sharemoney(this.amount, this.percen_split);
      await this.$axios.post(
        `/income/create/${this.$route.query.id}/${this.$route.query.owner}`,
        {
          date_income: this.date_income,
          amount: this.amount,
          amount_net: this.amount_net,
          weight: this.weight_rubber,
          percen_rubber: this.percent,
          dry_rubber: this.dry_rubber,
          percen_split: this.percen_split,
          rubber_price: this.rubber_price,
          note: this.note,
          store_in: this.store_in,
          telstore_in: this.telstore_in
        }
      );

      await this.$router.push({
        path: "/account_calendar",
        query: { id: this.$route.query.id, owner: this.$route.query.owner }
      });
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>
