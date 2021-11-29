<template>
  <div>
    <q-header>
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({
                name: 'detail_income',
                query: {
                  id: incomes.in_id
                }
              })
            "
          />
        </div>
        <div class="col-6 font header-title text-center">แก้ไขบัญชี</div>
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
    <q-form @submit.prevent="onSubmit" class="q-gutter-md">
      <div class="font q-px-md">
        <q-input filled readonly v-model="incomes.date_income" color="teal">
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="incomes.date_income" color="green">
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
              fill-mask="0"
              reverse-fill-mask
              v-model="incomes.weight"
              label="น้ำหนักยาง"
              required
            >
              <template v-slot:prepend> กก. </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              fill-mask="0"
              reverse-fill-mask
              v-model="incomes.percen_rubber"
              color="teal"
              label="เปอร์เซ็น"
              required
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
                fill-mask="0"
                reverse-fill-mask
                v-model="incomes.dry_rubber"
                label="เนื้อยางแห้ง"
                required
              >
                <template v-slot:prepend> ก. </template>
              </q-input>
            </div>
            <div class="col q-ml-md">
              <q-input
                filled
                fill-mask="0"
                reverse-fill-mask
                v-model="incomes.rubber_price"
                label="ราคาน้ำยาง"
                required
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
              fill-mask="0"
              reverse-fill-mask
              v-model="incomes.amount"
              color="teal"
              label="รวมจำนวนเงิน"
              required
            >
              <template v-slot:prepend> ฿ </template>
            </q-input>
          </div>
        </div>
        <div class="row">
          <div class="col">
            <q-input
              filled
              v-model="incomes.store_in"
              label="ชื่อร้านค้า"
              required
            >
              <template v-slot:prepend></template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input
              filled
              v-model="incomes.telstore_in"
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
                required
                v-model="incomes.percen_split"
                :options="optionspercent"
                label="% ที่เจ้าของได้"
              />
            </div>
          </div>
        </div>
        <div class="col">
          <q-input
            filled
            v-model="incomes.note"
            color="teal"
            label="บันทึก"
            required
          />
        </div>

        <div class="submit row q-gutter-sm flex-center">
          <q-btn
            unelevated
            rounded
            value="onSubmit"
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
      selectshare: false,
      optionspercent: ["60", "55", "50", "-"],
      edit_income: {},
      incomes: {}
    };
  },
  mounted() {
    this.getIncome();
  },

  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getIncome() {
      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get(
          `/income/findincome/${this.$route.query.id}`
        );
        this.incomes = data.data;
        this.incomes.date_income = this.formatDate(this.incomes.date_income);
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
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
      this.incomes.amount_net = this.sharemoney(
        this.incomes.amount,
        this.incomes.percen_split
      );

      await this.$axios.put("/income/update/" + this.$route.query.id, {
        date_income: this.incomes.date_income,
        amount: this.incomes.amount,
        amount_net: this.incomes.amount_net,
        weight: this.incomes.weight,
        percen_rubber: this.incomes.percen_rubber,
        dry_rubber: this.incomes.dry_rubber,
        percen_split: this.incomes.percen_split,
        rubber_price: this.incomes.rubber_price,
        note: this.incomes.note,
        store_in: this.incomes.store_in,
        telstore_in: this.incomes.telstore_in
      });

      await this.$router.push({
        path: "/account_calendar",
        query: {
          id: this.incomes.farm_id,
          owner: this.incomes.owner
        }
      });
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>
