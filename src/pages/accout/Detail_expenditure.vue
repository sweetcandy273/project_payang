<template>
  <div>
    <q-header>
      <!-- <q-toolbar>
        <q-space></q-space>
      </q-toolbar>  -->
      <q-toolbar class="text-center row">
        <div class="col self-center">
          <img
            class="close"
            src="../assets/back-left.png"
            style="width: 50px"
          />
        </div>
        <div class="col-6 font header-title">รายละเอียด</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md font">
      <div class="detail-expenditure q-pa-md shadow-2">
        <div class="row">
          <div class="col">
            <div class="row" style="font-size: 18px">
              เจ้าของสวน : กัลย์สุดา
            </div>
            <div class="row q-pb-md" style="font-size: 18px">
              สวน : สวนภูเก็ต
            </div>
          </div>
          <div class="col-4 text-right">
            <q-btn
              unelevated
              rounded
              style="background: #f2994a; color: white"
              label="รายจ่าย"
            />
          </div>
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-py-md">
          <div class="col" style="font-size: 30px">ซื้ออุปกรณ์</div>
          <div class="col text-right q-pt-md" style="font-size: 18px">
            15/06/2564
          </div>
        </div>
        <div class="row" style="font-size: 18px">
          มีดกรีดยาง
        </div>
        <div class="text-right" style="font-size: 30px">2,000.00</div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-pt-md" style="font-size: 18px">
          ร้าน : ขายอุปกรณ์การช่าง
        </div>
        <div class="row q-pb-md" style="font-size: 18px">
          ผู้รับผิดชอบ : กนกวรรณ
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="q-pt-md" style="font-size: 18px">
          บันทึก : 
        </div>
        <div class="col text-right q-pt-md">
          <q-btn
            unelevated
            rounded
            style="background: #f97c09; color: white"
            icon="edit"
            @click="$router.push({ name: 'edit_expenditure' })"
          />
        </div>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  data() {
    return {};
  },
};
</script>
<style scoped src="../css/home.css"></style>
<style scoped>
.detail-expenditure {
  background-color: #f2984a63;
  border-radius: 20px;
}
</style>
