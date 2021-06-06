<template>
  <q-page class="flex flex-center">
    <div class="row">
      <img
        alt="Payang logo"
        src="~assets/payang_icon.png"
        style="width: 200px; height: 200px"
      />
      <h5>Payang App</h5>
      <p class="title">ใส่ข้อมูล</p>
      <!-- เช็คข้อมูล id password ตรงกันพาไปหน้า add_information -->
      <q-btn to="/login" unelevated rounded color="green-6" label="เริ่มต้น" />
    </div>

    <!-- เพิ่มทุกอย่างหน้านี้ -->
  </q-page>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style scoped src="../css/index.css">
</style>
