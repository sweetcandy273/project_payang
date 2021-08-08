<template>
  <div class="font">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div
          class="col self-center font"
          @click="$router.push({ name: 'myfarm' })"
        >
          <q-icon name="arrow_back_ios" />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md self-center">
      <div class="box_detail q-pa-md self-center">
        <div>เจ้าของสวน : กัลย์สุตา ปิยะพงศ์</div>
        <div>สวน : ภูเก็ต</div>
        <div>ที่อยู่ : 112/1</div>
        <div>เนื้อที่ปลูก : 1.1 ไร่</div>
        <div>ผู้ดูแล : กนกวรรณ น้ำสงวน</div>
      </div>
    </div>

    <div>

    </div>

    <div>

    </div>

    <div class="q-pa-md q-gutter-sm self-center">
        <div >
                  
          <q-btn
            @click="$router.push({ name: 'account_calendar' })"
            unelevated
            rounded
            label="รายละเอียดบัญชี"
            type="submit"
            class="shadow-2 text-white"
            color="green-4"
          />
        
        </div>

        <div>

            <q-btn
            @click="$router.push({ name: 'calender_farm' })"
            unelevated
            rounded
            label="เรียกดูตารางการทำงาน"
            type="submit"
            class="shadow-2 text-white"
            color="light-blue-6"
          />

        </div>
    </div>

  </div>
</template>

<style scoped src="../css/home.css">
</style>