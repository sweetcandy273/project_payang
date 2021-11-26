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
    <div hidden>{{ user_id }}</div>
    <div :key="index" v-for="(farm, index) in farms">
      <div
        class="row q-pt-md"
        @click="
          $router.push({
            name: 'detail_farm',
            query: { id: farm.farm_id }
          })
        "
      >
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
      <div class="q-mt-md">
        <hr width="90%" />
      </div>
    </div>

    <div class="add_farm text-center fixed-bottom q-pa-xl">
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
import firebase from "firebase/compat/app";
import "firebase/compat/auth";

export default {
  computed: {
    user_id() {
      firebase.auth().onAuthStateChanged(user => {
        if (user) {
          this.currentId = user.uid;
          this.id = { id: user.uid };
        }
      });

      this.currentId = this.$route.query.id;
      this.id = { id: this.$route.query.id };

      return this.$route.query.id;
    }
  },

  watch: {
    currentId(val) {
      if (val) {
        this.getlistfarm();
      }
    }
  },

  data() {
    return {
      currentId: "",
      user_has_farm: [],
      farms: []
    };
  },
  async mounted() {
    this.getlistfarm();
  },

  methods: {
    async getlistfarm() {
      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get("/farm/list/" + this.currentId);
        this.farms = data.data;
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
