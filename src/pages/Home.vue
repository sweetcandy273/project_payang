<template>
  <div>
    <q-header>
      <q-toolbar>
        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
      <q-toolbar class="text-center row">
        <div class="col self-center font">ตั้งค่า</div>

        <div class="col-6 font header-title">หน้าหลัก</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-px-md">
      <div class="q-pa-md">
        <div class="row text-center">
          <div class="col font" style="font-size: 25px">
            Payang App
            <q-icon name="help" style="color: #5db075" />
          </div>
        </div>
        <div class="row text-center">
          <div class="col font" style="font-size: 24px">คุณชนิกานต์</div>
        </div>
      </div>

      <div class="row myfarm font">
        <div class="col-6 q-pa-md self-center">
          <div style="font-size: 20px">สวนของฉัน</div>
        </div>
        <div class="col q-px-md text-right self-center">
          <img
            class="logo"
            alt="Payang logo"
            src="../assets/forest.png"
            style="width: 80px"
          />
        </div>
      </div>
      <div class="q-pt-md text-center font" style="font-size: 20px">ผลผลิต</div>

      <div class="q-py-md">
        <q-btn-toggle
          v-model="secondModel"
          spread
          @click="toggle(secondModel)"
          no-caps
          rounded
          unelevated
          toggle-color="primary"
          color="white"
          text-color="primary"
          :options="[
            { label: 'ปี', value: 'yearly' },
            { label: 'เดือน', value: 'monthly' },
          ]"
        />
      </div>
    </div>
    <div>
      <div v-if="secondModel == 'yearly'" class="text-center">yearly</div>
      <div v-else class="text-center">monthly</div>
    </div>
  </div>
</template>


<script>
export default {
  data() {
    return {
      model: null,
      secondModel: "yearly",
    };
  },
  methods: {
    toggle(data) {
      // console.log(data);
    },
  },
};
</script>


<style scoped src="../css/home.css">
</style>