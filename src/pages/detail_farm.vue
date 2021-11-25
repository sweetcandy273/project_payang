<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div
          class="col self-center font"
          @click="$router.push({ name: 'myfarm' })"
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
          <div class="q-pa-md q-gutter-sm">

            <div class="back-gd .col-auto">

            
              
                <div class="row justify-end" >
                <div
                  class=".col-auto "
                  @click="$router.push({ name: 'Edit_detail_farm' })"
                >
                  <q-btn 
                  size="15px"
                  round color="amber-8" 
                  icon="edit" />
                </div>
                <div class=".col-auto "
                 @click="$router.push({ name: 'noti' })"
                >
                  <q-btn 
                  size="15px"
                  round color="red-6" 
                  icon="delete" />
                </div>
              </div>

              
              
            

            <div class="greeninfor">
              นางสาวสวย นามสกุล สวยที่สุด
              สวน : สวนภูเก็ต
              ที่อยู่ : 112/1 ซอยหล่อโรง ถนนระนอง
              ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต
              เนื้อที่ปลูก : 1.10000 ไร่
              ผู้ดูแล : กนกวรรณ น้ำสงวน
            </div>

            </div>


            <div>
              <q-btn
                unelevated
                rounded
                label="รายละเอียดบัญชี"
                type="submit"
                color="green-2"
                class="shadow-2 text-black"
              />
            </div>
            <div>
              <q-btn
                unelevated
                rounded
                label="เรียกดูตารางการทำงาน"
                type="submit"
                color="light-blue-3"
                class="shadow-2 text-black"
              />
            </div>
          </div>
        </div>
      </q-form>
    </div>
  </div>
</template>




<script>
import Vue from "vue";
import VueCompositionAPI from "@vue/composition-api";

Vue.use(VueCompositionAPI);
import { ref } from "@vue/composition-api";

export default {
  setup() {
    return {
      fname: ref("ชนิกานต์"),
      lname: ref("ปิยะพงษ์"),
      farm_name: ref("สวนภูเก็ต"),
      arae: ref("20"),
      address: ref("112/1 ซอยหล่อโรง ถนนระนอง ตำบลตลาดเหนือ "),
      address_district: ref("เมืองภูเก็ต"),
      address_province: ref("ภูเก็ต"),
      fname_admin: ref(""),
      lname_admin: ref(""),
      number_admin: ref(""),
      number_am_admin: ref(""),
      address_province_admin: ref(""),
      selectshare: false,
    };
  },
  methods: {
    onSubmit() {
      console.log(this.fname);
    },
  },
};
</script>


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
.back-gd{
  background-color: #79BD9A;
  padding: 13px;
  border-radius: 25px;
}

</style>