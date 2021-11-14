<template>
  <div>
    <q-header>
      <!-- <q-toolbar>
        <q-space></q-space>
      </q-toolbar>  -->
      <q-toolbar class="text-center row">
        <div class="col flexed text-left">
          <q-icon
            @click="
              $router.push({
                path: 'account_calendar',
                query: {
                  id: incomes.in_id,
                },
              })
            "
            name="arrow_back_ios"
            size="30px"
          ></q-icon>
        </div>
        <div class="col-6 font header-title">รายละเอียด</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div class="q-pa-md font">
      <div class="detail-income q-pa-md shadow-2">
        <div class="row">
          <div class="col">
            <div class="row" style="font-size: 18px">เจ้าของสวน :</div>

            <div class="row q-pb-md" style="font-size: 18px">
              สวน : {{ farms.farm_name }}
            </div>
          </div>

          <div class="col-4 text-right">
            <q-btn
              unelevated
              rounded
              style="background: #2d9cdb; color: white"
              label="รายรับ"
            />
          </div>
        </div>

        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-py-md">
          <div class="col" style="font-size: 30px">ขายน้ำยาง</div>
          <div class="col text-right q-pt-md" style="font-size: 18px">
            {{ formatDate(incomes.date_income) }}
          </div>
        </div>
        <div class="row" style="font-size: 18px">
          น้ำหนัก {{ incomes.weight }} กก. {{ incomes.percen_rubber }}% แห้ง
          {{ incomes.dry_rubber }} ราคายาง {{ incomes.rubber_price }} บ./กก.
        </div>
        <div class="text-right" style="font-size: 30px">
          {{ incomes.amount }}
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-pt-md" style="font-size: 18px">
          ร้าน : ดาว น้ำยางสด,แผ่น
        </div>
        <div class="row" style="font-size: 18px">
          ผู้ได้รับส่วนแบ่ง : กนกวรรณ
        </div>
        <div class="row" style="font-size: 18px">%ส่วนแบ่ง : 60-40</div>
        <div class="row">
          <div class="col q-pt-md" style="font-size: 18px">รวมรายรับสุทธิ</div>
          <div class="text-right" style="font-size: 30px">
            {{ incomes.amount_net }}
          </div>
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="q-pt-md" style="font-size: 18px">
          บันทึก : ส่วนแบ่งตามที่ตกลงกันไว้
        </div>
        <div class="col q-pa-md self-center">
          <div class="row">
            <div class="col text-right">
              <q-btn
                unelevated
                round
                style="width: 50px; height: 50px"
                color="orange-4"
                icon="edit"
                @click="
                  $router.push({
                    path: 'edit_income',
                    query: {
                      id: incomes.in_id,
                    },
                  })
                "
              />

              <q-btn
                unelevated
                round
                style="width: 50px; height: 50px"
                color="deep-orange-13"
                icon="delete"
                @click="Notidelete()"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template> 
<script>
import axios from "axios";
import { date } from "quasar";
export default {
  name: "incomes",
  name: "farms",
  data() {
    return {
      incomes: {},
      farms: {},
    };
  },
  mounted() {
    this.getIncome();
    // this.getfarm();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getIncome() {
      const { data } = await axios.get(
        `http://localhost:3000/income/findincome/${this.$route.query.id}`
      );
      this.incomes = data.data;

      console.log(data);
    },
   

    // async getfarm() {
    //   const { data} = await axios.get(
    //     `http://localhost:3000/farm/${this.$route.query.id}`
    //   );
    //   this.farms = data.data;
    // },
    Notidelete() {
     axios.delete(
        `http://localhost:3000/income/delete/${this.$route.query.id}`
      );
      this.$router.push({
        path: "/account_calendar",
      });
      
    },
  },
  watch: {
    date(value) {
      this.incomes = this.listAllincome.filter((data) => {
        // console.log(data.date_income,"==",date.formatDate(value,"YYYY/MM/DD"));
        return date.formatDate(value, "YYYY-MM-DD") == data.date_income;
      });
    },
  },
};
</script>
<style scoped src="../css/home.css"></style>
<style scoped>
.detail-income {
  background-color: #50ace27a;
  border-radius: 20px;
}
</style>
