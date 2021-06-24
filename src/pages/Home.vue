<template>
  <div>
    <q-layout
      view="lHh lpr lFf"
      container
      style="height: 1000px"
      class="shadow-2 rounded-borders"
    >
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

      <div>
        <div class="q-pa-md">
          <div class="row text-center">
            <div class="col">
              <div class="pya">
                Payang App
                <q-icon name="help" />
              </div>
            </div>
          </div>
          <div class="row text-center">
            <div class="col pya">คุณชนิกานต์</div>
          </div>
        </div>
      </div>
    </q-layout>
  </div>
</template>

<script>
</script>



<style>
/* *{
  background: #dae5de;
} */

.pya {
  font-size: 25px;
}
</style>