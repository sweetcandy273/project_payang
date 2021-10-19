<template>
  <div class="font">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div class="col flexed text-left">
          <q-icon
            @click="$router.push({ name: 'home' })"
            name="arrow_back_ios"
            size="30px"
          ></q-icon>
        </div>

        <div class="col-6 font header-title">สวนของฉัน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-mt-xl text-center">
      <img alt="" src="../assets/forest.png" style="width: 175px" />
      <div class="q-ma-md col-6 font" style="font-size: 30px">สวนของฉัน</div>
    </div>

    <div class="row" @click="$router.push({ name: 'detail_farm' })">
      <div class="col">
        <div class="box_forest text-center">
          <img
            alt="Payang logo"
            src="../assets/forest2.png"
            style="width: 45px"
          />
        </div>
      </div>
      <div class="col-7">
        <div style="font-size: 20px">{{ farm.farm_name }}</div>
        <div style="font-size: 12px">
          {{ farm.address }} อ.{{ farm.address_district }} จ.{{
            farm.address_province
          }}
        </div>
      </div>
      <div class="planting-area text-center col-2">
        <div class="stylearea">{{ farm.area }} ไร่</div>
      </div>
    </div>

    <div class="add_farm text-center fixed-bottom q-pa-xl">
      <!-- ส่ง params user_id -->
      <q-btn
        unelevated
        round
        style="background: #4e7971; color: white; width: 50px; height: 50px"
        icon="add"
        @click="
          $router.push({
            name: 'add_detail_farm',
            query: { id: $route.query.id }
          })
        "
      />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      farm: [],

      leftDrawerOpen: false,
      model: null,
      secondModel: "yearly"
    };
  },
  mounted() {
    getFarm();
  },

  methods: {
    async getFarm() {
      const { data } = await this.$axios.get(
        "/farm/20c676fe-dead-48bd-a445-e5178603c041"
      );
      this.farm = data.data;
      // console.log(data.data);
    },

    confirm() {
      this.$q
        .dialog({
          title: "ยืนยันการลบบัญชีผู้ใช้",
          message:
            'ระบบจะทำการลบข้อมูลเกี่ยวกับบัญชีผู้ใช้นี้ทั้งหมด <span class="text-red font"><strong>หากยืนยันการลบบัญชีผู้ใช้แล้ว ข้อมูลทั้งหมดจะไม่สามารถกู้คืนมาได้อีก</strong></span><br>',
          cancel: true,
          persistent: true,
          html: true
        })
        .onOk(() => {
          console.log(">>>> OK");
          this.$router.push({
            path: "/login"
          });
        })

        .onCancel(() => {
          console.log(">>>> Cancel");
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
    logout() {
      this.$router.push({
        path: "/login"
      });
    }
  }
};
</script>
<style scoped src="../css/home.css"></style>

<style scoped>
.planting-area {
  color: gray;
}
.box_forest {
  margin-top: 20 px;
  margin-left: 20px;
  margin-right: 20px;
  background-color: white;
  border-radius: 10px;
}
</style>
