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
                path: 'detail_expenditure',
                query: {
                  id: expens.expen_id
                }
              })
            "
          />
        </div>

        <div class="col-6 font header-title">แก้ไขบัญชี</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="row q-pa-md q-gutter-sm flex-center font">
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #2d9cdb; color: white; opacity: 0.5"
        label="รายรับ"
      />
      <q-btn
        class="col"
        unelevated
        rounded
        style="background: #f2994a; color: white"
        label="รายจ่าย"
      />
    </div>

    <div class="q-py-md text-center">
      <q-btn-toggle
        v-model="type"
        toggle-color="green"
        toggle-text-color="black"
        rounded
        readonly
        unelevated
        :options="[
          { value: 'Maintenance', slot: 'Maintenance' },
          { value: 'Equipment', slot: 'Equipment' }
        ]"
      >
        <template v-slot:Maintenance>
          <div class="row items-center no-wrap">
            <q-img src="../assets/maintenance_sapling.png" width="100px">
              <h4 class="font text-center" style="font-size: 20px">
                บำรุงรักษา
              </h4>
            </q-img>
          </div>
        </template>

        <template v-slot:Equipment>
          <div class="row items-center no-wrap">
            <q-img
              src="../assets/equipment_rubber-cup.png"
              style=""
              width="100px"
            >
              <h4 class="font text-center" style="font-size: 20px">
                วัสดุอุปกรณ์
              </h4>
            </q-img>
          </div>
        </template>
      </q-btn-toggle>
    </div>

    <div>
      <div
        v-if="type == 'Maintenance'"
        class="text-center"
        id="Editmaintenance"
      >
        <Editmaintenance />
      </div>
      <div v-else class="text-center">
        <Editequipment />
      </div>
    </div>
  </div>
</template>
<script>
import { date } from "quasar";
import Editmaintenance from "../components/Editmaintenance.vue";
import Editequipment from "../components/Editequipment.vue";
export default {
  data() {
    return {
      date_expenditure: "",
      type: "",
      expens: {}
    };
  },
  components: {
    Editequipment,
    Editmaintenance
  },

  mounted() {
    this.getExpen();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getExpen() {
      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get(
          `/expenditure/show/${this.$route.query.id}`
        );
        this.expens = data.data;
        this.type = this.expens.type;
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    }
  }
};
</script>

<style scoped src="../css/home.css"></style>
