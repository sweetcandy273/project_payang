<template>
  <div>
    <div class="q-pa-md">
      <img
        class="logo"
        alt="Payang logo"
        src="../assets/payang_icon.png"
        style="width: 30%"
      />
    </div>

    <div>
      <div class="row q-pa-md text-center">
        <div class="col">
          <div class="text-md">วางแผนการเพาะปลูก</div>

          <div class="text-lr">สวนยาง</div>
        </div>
      </div>

      <div class="row q-pa-md">
        <div class="col-1"></div>
        <div class="col-10">
          <div class="text-center font items-center">
            <div style="font-size: 30px">วางแผนการเพาะปลูก</div>
            <div style="font-size: 45px">สวนยาง</div>
            <q-img src="../assets/order.png" style="width: 50%" />
          </div>
        </div>
        <div class="col self-center">
          <div>
            <img
              class=""
              alt="back-right"
              src="../assets/back-right.png"
              style="width: 100px"
            />
          </div>
        </div>
      </div>

      <div class="fixed-bottom text-right q-pa-xl font">
        <router-link to="/login" class="text-black">ข้าม ></router-link>
      </div>
    </div>
    <!-- </q-img> -->
  </div>
</template>

<script>
</script>

<style scoped src="../css/home.css">
</style>
