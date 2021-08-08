<template>
  <div class="font">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div
          class="col self-center font"
          @click="$router.push({ name: 'detail_farm' })"
        >
          <q-icon name="close" />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md self-center">
      <div class="row justify-around">
        เจ้าของสวน :
        <div class="column">
          <q-input
            filled
            v-model="name"
            label="ชื่อ"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
          />

          <q-input
            filled
            v-model="name"
            label="นามสกุล"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
          />
        </div>
      </div>
      <div class="row justify-around">
        ชื่อสวน :

        <div class="column">
          <q-input
            filled
            v-model="name"
            label="ชื่อสวน"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อสวน']"
          />
        </div>
      </div>
      <div class="row justify-around">
        ที่อยู่ :
        <div class="column">
          <q-input
            filled
            v-model="name"
            label="ที่อยู่"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />
        </div>
       
      </div>

        <div class="row justify-around">
            
            <div class=".col-4">
            <q-input
              filled
              v-model="name"
              label="อำเภอ"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
            />
          </div>
          <div class=".col-4">
            <q-input
              filled
              v-model="name"
              label="จังหวัด"
              lazy-rules
              :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
            />
          </div>

        </div>

      <div class="row justify-around">
        เนื้อที่ปลูก :
        <div class="column">
          <q-input
            filled
            v-model="name"
            label="เนื้อที่ปลูก"
            lazy-rules
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกเนื้อที่ปลูก']"
          />
        </div>
      </div>
      <div class="row justify-start col-4">ผู้ดูแล :</div>

      <div class="box_editeAdmin q-pa-md self-center"></div>
    </div>

      <div class="q-pa-md q-gutter-sm self-center">
        <q-btn
          @click="$router.push({ name: 'calender_farm' })"
          unelevated
          rounded
          label="บันทึก"
          type="submit"
          class="shadow-2 text-white"
          
        />
      </div>
  </div>
</template>
<style scoped src="../css/home.css">
</style>