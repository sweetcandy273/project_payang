<template>
  <div class="font" v-if="farm">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="
              $router.push({ name: 'myfarm', query: { id: farm.user_id } })
            "
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
                  query: { id: farm.farm_id },
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
              @click="showNotif"
            />
          </div>
        </div>

        <div>เจ้าของสวน : {{farm.fname}} {{farm.lname}} </div>
        <div>สวน : {{farm.farm_name}} </div>
        <div>ที่อยู่ : {{ farm.address }} อ.{{ farm.address_district }} จ.{{
              farm.address_province
            }} </div>
        <div>เนื้อที่ปลูก : {{ farm.area }} ไร่</div>
        <div v-if="nameEmployee">ผู้ดูแล : {{nameEmployee.fname}} {{nameEmployee.lname}} </div>
      </div>
    </div>

    <div></div>

    <div v-if="secondModel == 'graph_farm'" class="text-center" id="graph_farm">
      <graph_farm :item="id" />
    </div>

    <div class="q-pa-md q-gutter-sm self-center">
      <div>
        <q-btn
          @click="$router.push({ name: 'account_calendar'})"
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
          @click="$router.push({ name: 'calender_farm' ,  })"
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
import axios from "axios";

export default {

  async mounted() {
    this.getfarm();
    this.getemployee();
    this.getnameEmployee();
  },
  components: {
    graph_farm,
  },
  data() {
    const id = { id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09" };
    return {
      leftDrawerOpen: false,
      model: null,
      secondModel: "graph_farm",
      farm : {},
      nameEmployee : [],
      employee : [],
      payang_user: [] ,
      user_has_farm: [],
      id,
    };
  },
  methods: {
    async getfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/" + this.$route.query.id
      );
      this.farm = data.data;
      // console.log(data.data);
    },
     async getemployee() {
      const { data } = await axios.get( 
        "http://localhost:3000/farm_has_employee/list/" + this.$route.query.id
      );
      this.employee = data.data;
      // console.log(data.data);
    },
     async getnameEmployee() {
      const { data } = await axios.get(
        "http://localhost:3000/payang_user/4da0b5f4-3ce8-4951-891d-d7c9ee233671"
      );
      this.nameEmployee = data.data;
      // console.log(data.data);
    },
  


    showNotif() {
      this.$q
        .dialog({
          title: "Confirm",
          message: "Would you delete the data? ",
          cancel: true,
          persistent: true,
          html: true,
        })
        .onOk(() => {
          // console.log(">>>> OK");
          this.$router.push({
            path: "/Myfarm",
          });
        });
    },
  },
};
</script>
<style scoped src="../css/home.css">
</style>

<style scoped>
.box_detail {
  background-color: white;
  border-radius: 10px;
}
</style>