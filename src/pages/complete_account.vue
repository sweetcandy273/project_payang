<template>
  <div>
    <q-header>
      <!-- <q-toolbar>
        <q-space></q-space>
      </q-toolbar>  -->
      <q-toolbar class="row">
        <!-- <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'account_calendar' })"
          />
        </div> -->
      </q-toolbar>
    </q-header>
    <div class="font q-ma-md">
      <div class="row">
        <div class="col q-pa-xl">
          <p class="font text-center" style="font-size: 40px;">
                บันทึกเรียบร้อย
              </p>
          <q-img
              src="../assets/complete.png"
              style=""
              width="100%"
              height= "100p%"
            >
              
            </q-img>
        </div>
      </div>
      <div class="row q-gutter-sm flex-center">
        
          <q-btn
            unelevated
            rounded
            label="ย้อนกลับ"
            type="back"
            class="shadow-2 text-white"
            style="width: 100%; background-color: #4e7971"
            @click="$router.push({ name: 'account_calendar' })"
          />
        
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped src="../css/home.css">
</style>
<style scoped>
.complete {
  background: #eed491;
  border-radius: 100%;
  position: absolute;
  top: 100%;
  left: 100%;
  margin: -50% 50% 50% -50%;
  width: 100%;
  height: 100%;
}
</style>