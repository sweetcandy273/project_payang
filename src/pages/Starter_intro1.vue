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

      <div class="row q-pa-md text-center">
        <div class="col self-center"></div>
        <div class="col-6">
          <img class="" alt="" src="../assets/order.png" style="width: 100%" />
        </div>
        <div class="col self-center">
          <div>ลูกศรขวา</div>
        </div>
      </div>
    </div>

    <div class="fixed-bottom text-right q-pa-xl">
      <router-link to="/login">ข้าม ></router-link>
    </div>
  </div>
</template>

<script>
</script>

<style>
* {
  background: #dae5de;
}

.logo {
  border-radius: 10%;
}

.text-md {
  font-size: 35px;
}
.text-lr {
  font-size: 50px;
}
</style>
