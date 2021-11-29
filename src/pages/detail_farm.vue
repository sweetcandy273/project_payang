<template>
  <div class="font" v-if="farm">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'myfarm', query: { id: farm.owner } })"
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md self-center">
      <div class="box_detail q-pa-md self-center">
        <div class="row justify-end">
          <div class="column">
            <q-btn
              @click="
                $router.push({
                  name: 'edit_detail_farm',
                  query: { id: farm.farm_id }
                })
              "
              round
              color="orange-4"
              icon="edit"
            />
          </div>
          <div class="column">
            <q-btn
              round
              color="deep-orange-13"
              icon="delete"
              @click="DeleteEven()"
            />
          </div>
        </div>

        <div>เจ้าของสวน : {{ farm.fname }} {{ farm.lname }}</div>
        <div>สวน : {{ farm.farm_name }}</div>
        <div>
          ที่อยู่ : {{ farm.address }} อ.{{ farm.address_district }} จ.{{
            farm.address_province
          }}
        </div>
        <div>วันที่ปลูกยาง : {{ formatDate(farm.planing_date) }}</div>
        <div>พันธุ์ยาง : {{ farm.rubber_variety.varieties }}</div>
        <div>เนื้อที่ปลูก : {{ farm.area }} ไร่</div>
        <div v-if="employee.length > 0">
          ผู้ดูแล : {{ nameEmployee.fname }} {{ nameEmployee.lname }}
        </div>
      </div>
    </div>

    <div></div>

    <div v-if="secondModel == 'graph_farm'" class="text-center" id="graph_farm">
      <graph_farm :item="id" />
    </div>

    <div class="q-pa-md q-gutter-sm self-center">
      <div>
        <q-btn
          @click="
            $router.push({
              name: 'account_calendar',
              query: { id: farm.farm_id, owner: farm.owner }
            })
          "
          unelevated
          rounded
          label="รายละเอียดบัญชี"
          type="submit"
          class="shadow-2 text-white"
          color="green-4"
        />
      </div>
      <div>
        <q-btn
          @click="
            $router.push({ name: 'calender_farm', query: { id: farm.farm_id } })
          "
          unelevated
          rounded
          label="เรียกดูตารางการทำงาน"
          type="submit"
          class="shadow-2 text-white"
          color="light-blue-6"
        />
      </div>
    </div>
  </div>
</template>

<script>
import graph_farm from "../components/graph_farm.vue";

import { date } from "quasar";

export default {
  async mounted() {
    try {
      this.$q.loading.show();

      await this.getfarm();
      await this.getemployee();
      await this.getnameEmployee();
    } catch (error) {
      console.log(error);
    } finally {
      this.$q.loading.hide();
    }
  },
  components: {
    graph_farm
  },
  data() {
    const id = { id: this.$route.query.id };
    return {
      leftDrawerOpen: false,
      model: null,
      secondModel: "graph_farm",
      farm: {
        rubber_variety: {}
      },
      nameEmployee: [],
      employee: [],
      payang_user: [],
      user_has_farm: [],
      id,
      allrubber: {},
      date: " "
    };
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },
    async getfarm() {
      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get("/farm/" + this.$route.query.id);
        this.farm = data.data;
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    },
    async getemployee() {
      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get(
          "/farm_has_employee/list/" + this.$route.query.id
        );
        this.employee = data.data;
        if (this.employee.length > 0) {
          await this.getnameEmployee();
        }
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    },
    async getnameEmployee() {
      const { data } = await this.$axios.get(
        "/payang_user/" + this.employee[0].employee
      );
      this.nameEmployee = data.data;
    },

    async DeleteEmp_payangUser() {
      this.$axios.delete("/payang_user/delete/" + this.nameEmployee.user_id);
    },
    async DeleteEmp() {
      this.$axios.delete("/farm_has_employee/delete/" + this.$route.query.id);
    },
    async DeleteFarm() {
      this.$axios.delete("/farm/delete/" + this.$route.query.id);
      await this.DeleteEmp();
      await this.DeleteEmp_payangUser();
    },
    DeleteEven() {
      this.$q
        .dialog({
          title: "ยืนยันการลบข้อมูลฟาร์ม",
          message:
            'ระบบจะทำการลบข้อมูลฟาร์ม <span class="text-red font"><strong>หากยืนยันการลบข้อมูลฟาร์ม ข้อมูลทั้งหมดจะไม่สามารถกู้คืนมาได้อีก</strong></span><br>',
          cancel: true,
          persistent: true,
          html: true
        })
        .onOk(() => {
          this.DeleteFarm();
          this.$router.push({
            name: "myfarm",
            query: { id: this.farm.owner }
          });
        })
        .onCancel(() => {})
        .onDismiss(() => {});
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>

<style scoped>
.box_detail {
  background-color: white;
  border-radius: 20px;
}
</style>
