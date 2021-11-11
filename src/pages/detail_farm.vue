<template>
  <div class="font">
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

        <div>เจ้าของสวน : </div>
        <div>สวน :</div>
        <div>ที่อยู่ :</div>
        <div>เนื้อที่ปลูก : ไร่</div>
        <div>ผู้ดูแล :</div>
      </div>
    </div>

    <div></div>

    <div v-if="secondModel == 'yearly'" class="text-center" id="yearly">
      <graph_farm />
    </div>

    <div class="q-pa-md q-gutter-sm self-center">
      <div>
        <q-btn
          @click="$router.push({ name: 'account_calendar',query:{id:farm.farm_id}})"
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
          @click="$router.push({ name: 'calender_farm' })"
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
  data() {
    return {
      user_has_farm: [],
      farm: [],
    };
  },
  async mounted() {
    this.getfarm();
  },
  components: {
    graph_farm,
  },
  data() {
    return {
      idp: "20c676fe-dead-48bd-a445-e5178603c041",
      leftDrawerOpen: false,
      model: null,
      secondModel: "yearly",
    };
  },
  methods: {
    async getfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/a07f9bfa-e8b2-4125-8036-acf3d7048e09"
      );
      this.farm = data.data;
      console.log(data.data);
    },

    showNotif() {
      this.$q.dialog({
        title: "Confirm",
        message: "Would you delete the data? ",
        cancel: true,
        persistent: true,
      });
      return { confirm };
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