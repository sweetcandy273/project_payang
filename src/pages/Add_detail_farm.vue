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

        <div class="q-pa-md font">
      <q-form @submit="onSubmit" class="q-gutter-md">
        <div>
          <div class="row justify-between">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="fname"
                label="ชื่อ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="lname"
                label="นามสกุล"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกนามสกุล',
                ]"
              />
            </div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="phone_number"
            label="เบอร์โทรศัพท์"
            :rules="[
              (val) =>
                (val && val.length > 0 && val.length == 10) ||
                'กรุณากรอกเบอร์โทรศัพท์',
            ]"
          >
            <template v-slot:append>
              <q-icon name="call" />
            </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="email"
            label="อีเมล"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอีเมล']"
          >
            <template v-slot:append> @ </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          <div class="row">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="address_district"
                label="เขต/อำเภอ"
                :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="address_province"
                label="จังหวัด"
                :rules="[
                  (val) => (val && val.length > 0) || 'กรุณากรอกจังหวัด',
                ]"
              />
            </div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="zip_code"
            label="รหัสไปรษณีย์ "
            :rules="[
              (val) => (val && val.length > 0) || 'กรุณากรอกรหัสไปรษณีย์',
            ]"
          />
        </div>

      </q-form>
    </div>

    <div class="q-pa-md q-gutter-sm self-center">
      <q-btn
        @click="$router.push({ name: 'detail_farm' })"
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