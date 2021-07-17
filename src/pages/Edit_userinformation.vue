<template>
  <div>
      <q-header class="shadow-2">
      <!-- <q-toolbar>
        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar> -->
      <q-toolbar class="text-center row">
        <!-- <div
          class="col self-center font"
          @click="$router.push({ name: 'setting' })"
        >
          ตั้งค่า
        </div> -->
        <div
          class="col self-center font"
         @click="$router.push({ name: 'home' })"
        >
         กลับ
        </div>

        <div class="col-6 font header-title">ข้อมูลผู้ใช้</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>




  </div>
</template>

<script>
export default {

}
</script>

<style>

.bg {
    background: #dae5de;
}



.q-toolbar {
    background-color: #4e7971;
}

.header-title{
    font-size: 25px;
}

.font{
    font-family: 'Kanit', sans-serif;
    
}
</style>