<template>
  <div>
    <div class="font" style="font-size: 30px">2021</div>
    <div class="row font q-px-md seft-center text-center ">
      <div class="col-2 seft-center">
        <img
              class=""
              alt="back-left"
              src="../assets/back-left.png"
              style="width: 50px"
            />
      </div>
      <div class="col">
        <div>น้ำยางสด</div>
        <div class="product-all">0.00</div>

        <div>กิโลกรัม</div>
      </div>
      <div class="col">
        <div>รายรับ</div>
        <div class="product-all">0.00</div>
        <div>บาท</div>
      </div>
      <div class="col-2 seft-center">
        <img
              class=""
              alt="back-right"
              src="../assets/back-right.png"
              style="width: 50px"
            />
      </div>
    </div>


  </div>
</template>

<script>
export default {
  name: "yearly",
};
</script>

<style>
.font {
  font-family: "Kanit", sans-serif;
}

.product-all {
  font-size: 25px;

  /* background-repeat: none;
  background-image: url(".../src/assets/rubber-cup.png"); */
}
</style>