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
        <div class="col-6 font header-title">ตรวจสอบข้อมูล</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md font">
      <div class="detail-income q-pa-md shadow-2">
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
              style="background: #2d9cdb; color: white"
              label="รายรับ"
            />
          </div>
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-py-md">
          <div class="col" style="font-size: 30px">ขายน้ำยาง</div>
          <div class="col text-right q-pt-md" style="font-size: 18px">
            15/06/2564
          </div>
        </div>
        <div class="row" style="font-size: 18px">
          น้ำหนัก 135.0 กก. 33% แห้ง 102.0 ราคายาง 62.05 บ./กก.
        </div>
        <div class="text-right" style="font-size: 30px">8,376.75</div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="row q-pt-md" style="font-size: 18px">
          ร้าน : ดาว น้ำยางสด,แผ่น
        </div>
        <div class="row" style="font-size: 18px">
          ผู้ได้รับส่วนแบ่ง : กนกวรรณ
        </div>
        <div class="row" style="font-size: 18px">%ส่วนแบ่ง : 60-40</div>
        <div class="row">
          <div class="col q-pt-md" style="font-size: 18px">รวมรายรับสุทธ</div>
          <div class="text-right" style="font-size: 30px">5,026.00</div>
        </div>
        <q-separator style="background: #000000; height: 2px" />
        <div class="q-pt-md" style="font-size: 18px">
          บันทึก : ส่วนแบ่งตามที่ตกลงกันไว้
        </div>
      </div>
    </div>
    <div class="row q-gutter-sm flex-center font">
      <q-btn
        unelevated
        rounded
        label="ยืนยัน"
        type="back"
        class="shadow-2 text-white"
        style="width: 100%; background-color: #4e7971"
        @click="$router.push({ name: 'complete_account' })"
      />
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
.detail-income {
  background-color: #50ace27a;
  border-radius: 20px;
}
</style>
