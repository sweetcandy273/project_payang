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
      <img
        alt=""
        src="../assets/forest.png"
        style="width: 175px"
      />
      <div class="q-ma-md col-6 font" style="font-size: 30px">สวนของฉัน</div>
    </div>

    
      <div class="row" @click="$router.push({ name: 'detail_farm' })">
        <div class="col">
          <div class="box_forest justify-center">
            <img
              alt="Payang logo"
              src="../assets/forest2.png"
              style="width: 45px"
            />
          </div>
        </div>
        <div class=" col-7">
          <div style="font-size: 20px">สวนภูเก็ต</div>
          <div style="font-size: 12px">
            112/1 ซอยหล่อโรง ถนนระนอง ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต
            จังหวัดภูเก็ต
          </div>
        </div>
        <div class="col-2">
          <div class="stylearea">1 ไร่</div>
        </div>
      </div>
    

    <div class="add_farm text-center fixed-bottom q-pa-xl">
      <q-btn
        unelevated
        round
        style="background: #4e7971; color: white; width: 50px; height: 50px"
        icon="add"
        @click="$router.push({ name: 'detail_farm' })"
      />
    </div>
  </div>
</template>

<style scoped src="../css/home.css">
</style>

<style scoped>
.box_forest {
  width: 55px;
  height: 55px;
  background-color: white;
  border-radius: 10px;
}
</style>
