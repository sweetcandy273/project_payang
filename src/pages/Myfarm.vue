<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
            <div class="col flexed text-left">
          <q-icon
            @click="$router.push({ name: 'add_income' })"
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
        class="logo"
        alt=""
        src="../assets/forest.png"
        style="width: 175px"
      />
      <div class="q-ma-md col-6 font" style="font-size: 30px">สวนของฉัน</div>
    </div>

    <div class="col  font">
      <div
        class="row justify-center"
        @click="$router.push({ name: 'detail_farm' })"
      >
        <div class="col-3">
          <div class="box_forest">
            <img
              class="logo"
              alt="Payang logo"
              src="../assets/forest2.png"
              style="width: 45px"
            />
          </div>
        </div>
        <div class="col-7">
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



<style>
.bg {
  background: #dae5de;
}

.q-toolbar {
  background-color: #4e7971;
}

.header-title {
  font-size: 25px;
}

.font {
  font-family: "Kanit", sans-serif;
}

.q-btn {
  width: 100%;
  background-color: #4e7971;
}

.box_forest{
  width: 55px;
  height: 55px;
  background-color: white;
  border-radius: 10px; 
}
</style>
