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
                  id: expenditures.expen_id,
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
      <div class="detail-expenditure q-pa-md shadow-2">
        <div class="row">
          <div class="col">
            <div class="row" style="font-size: 18px">
              เจ้าของสวน : {{ expenditures.farm.fname }}
            </div>
            <div class="row q-pb-md" style="font-size: 18px">
              สวน : {{ expenditures.farm.farm_name }}
            </div>
          </div>
          <div class="col-4 text-right">
            <q-btn
              unelevated
              rounded
              style="background: #f2994a; color: white"
              label="รายจ่าย"
            />
          </div>
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-py-md">
          <div class="col-8" style="font-size: 28px">
            {{ expenditures.title_type }}
          </div>
          <div class="col text-right q-pt-md" style="font-size: 18px">
            {{ expenditures.date_expenditure }}
          </div>
        </div>
        <div class="row" style="font-size: 20px">
          ส่วน: {{ expenditures.type }}
        </div>

        <div class="text-right" style="font-size: 28px">
          {{ expenditures.amount }}
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-pt-md" style="font-size: 18px">
          ร้าน : {{ expenditures.store_expen }}
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="q-pt-md" style="font-size: 18px">
          บันทึก : {{ expenditures.note }}
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
                    path: 'edit_expenditure',
                    query: {
                      id: expenditures.expen_id,
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
export default {
  name: "expenditures",
  data() {
    return {
      expenditures: {
        farm:{}
      },
    };
  },
  mounted() {
    this.getExpen();
    // this.getfarm();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getExpen() {
      const { data } = await axios.get(
        `http://localhost:3000/expenditure/show/${this.$route.query.id}`
      );
      this.expenditures = data.data;
      console.log(data.data);
    },
    Notidelete() {
      axios.delete(
        `http://localhost:3000/expenditure/delete/${this.$route.query.id}`
      );
      this.$router.push({
        path: "/account_calendar",
      });
    },
  },
};
</script>
<style scoped src="../css/home.css"></style>
<style scoped>
.detail-expenditure {
  background-color: #f2984a63;
  border-radius: 20px;
}
</style>
