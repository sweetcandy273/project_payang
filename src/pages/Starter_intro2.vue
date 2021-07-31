<template>
  <div>
    <!-- <q-img src="../assets/bg-starter.png"> -->
    <div class="text-black" style="background: none">
      <div class="q-pa-md">
        <img class="logo" alt="Payang logo" src="../assets/payang_icon.png" />
      </div>

      <div class="row q-pa-md">
        <div class="col-1 self-center">
          <q-icon
            @click="$router.push({ name: 'starter_intro1' })"
            name="arrow_back_ios"
            size="50px"
          ></q-icon>
        </div>
        <div class="col-10">
          <div class="text-center font items-center">
            <div style="font-size: 20px">วางแผนและ</div>
            <div style="font-size: 20px">สรุปบัญชีทางการเงิน</div>
            <div style="font-size: 45px">ภายในสวนยาง</div>
            <div style="font-size: 20px">ที่อยู่ในการดูแล</div>
            <q-img src="../assets/accounting.png" style="width: 50%" />
          </div>
        </div>
        <div class="col-1"></div>
      </div>
      <div class="q-pa-md font">
        <q-btn
          to="/login"
          unelevated
          rounded
          label="เริ่มต้น"
          class="shadow-2 text-white"
        />
      </div>
    </div>
    <!-- </q-img> -->
  </div>
</template>

<script>
</script>

<style scoped src="../css/home.css">
</style>
