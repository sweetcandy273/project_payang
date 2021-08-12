<template>
  <div>
    <!-- <q-img src="../assets/bg-starter.png" width="100%"> -->
    <div class="text-black items-center" style="background: none">
      <div class="q-pa-md">
        <img class="logo" alt="Payang logo" src="../assets/payang_icon.png" />
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
    <!-- </q-img> -->
  </div>
</template>

<script>
</script>

<style scoped src="../css/home.css">
</style>
