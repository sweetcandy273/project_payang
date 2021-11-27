<template>
  <div>
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
            <div class="q-pa-md">
              <div style="font-size: 20px">วางแผนและ</div>
              <div style="font-size: 20px">สรุปบัญชีทางการเงิน</div>
              <div style="font-size: 45px">ภายในสวนยาง</div>
              <div style="font-size: 20px">ที่อยู่ในการดูแล</div>
            </div>

            <q-img src="../assets/accounting.png" />
          </div>
        </div>
        <div class="col-1"></div>
      </div>

      <div class="q-pa-md font fixed-bottom">
        <q-btn
          to="/login"
          unelevated
          rounded
          label="เริ่มต้น"
          class="shadow-2 text-white"
        />
      </div>
    </div>
  </div>
</template>

<script></script>

<style scoped src="../css/home.css"></style>
<style>
@media only screen and (max-width: 2500px) {
  .q-img {
    width: 20%;
  }
}
@media only screen and (max-width: 1200px) {
  .q-img {
    width: 50%;
  }
}

@media only screen and (max-width: 400px) {
  .q-img {
    width: 60%;
  }
}
</style>
