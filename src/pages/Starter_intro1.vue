<template>
  <div>
    <div class="text-black items-center" style="background: none">
      <div class="q-pa-md">
        <img class="logo" alt="Payang logo" src="../assets/payang_icon.png" />
      </div>

      <div class="row q-pa-md">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="text-center font items-center">
            <div class="q-pa-md">
              <div style="font-size: 30px">วางแผนการเพาะปลูก</div>
              <div style="font-size: 45px">สวนยาง</div>
            </div>

            <q-img class="" src="../assets/order.png" />
          </div>
        </div>
        <div class="col-1 self-center">
          <q-icon
            @click="$router.push({ name: 'starter_intro2' })"
            name="arrow_forward_ios"
            size="50px"
          ></q-icon>
        </div>
      </div>

      <div class="fixed-bottom text-right q-pa-xl font">
        <router-link to="/login" class="text-black">ข้าม ></router-link>
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
    width: 60%;
  }
}

@media only screen and (max-width: 400px) {
  .q-img {
    width: 70%;
  }
}
</style>
