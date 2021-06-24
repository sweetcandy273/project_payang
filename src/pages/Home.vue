<template>
  <div>
    <q-header>
      <q-toolbar>
        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar>
      <q-toolbar class="text-center row">
        <div class="col self-center">ตั้งค่า</div>

        <div class="col-6 pya">หน้าหลัก</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-px-md">
      <div class="q-pa-md">
        <div class="row text-center">
          <div class="col">
            <div class="pya">
              Payang App
              <q-icon name="" />
            </div>
          </div>
        </div>
        <div class="row text-center">
          <div class="col pya">คุณชนิกานต์</div>
        </div>

      </div>

      <div class="q-pa-md">
        
      </div>
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
    <div>
      <div v-if="secondModel == 'yearly'">yearly</div>
      <div v-else>monthly</div>
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