<template>
  <div class="font">
    <q-header>
      <q-toolbar class="text-center row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'calender_farm' , query: { id: $route.query.id } })"
          />
        </div>

        <div class="col-6 font header-title">สวนภูเก็ต</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div>
      <div class="box-dropActivitytype q-pa-md">
        <q-select
          filled
          v-model="chooseActivity"
          :options="activity_type"
          color="teal"
          label="ประเภทกิจกรรม"
        >
        </q-select>
      </div>

      <div class="q-px-md font">
        <q-input
          color="teal"
          filled
          v-model="date"
          mask="date"
          :rules="['date']"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="teal">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="date" color="green">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>

     <div class="box-dropAddmin q-px-md">
        <q-select
          filled
          v-model="chooseAdmin"
          :options="Admin"
          color="teal"
          label="ผู้ดูแล"
        >
        </q-select>

        <div class="other"  q-px-md  @click="$router.push({ name: 'add_income' })">
        
        <div class="row">
        <div>มีค่าใช้จ่าย?</div>
        <div>
            <img
            src="../assets/money2.png"
            style="width: 22px; height: 22px"
          />
        </div>
    </div>
      </div>

      </div>
    
      <div class="add-account self-center fixed-bottom q-pa-md">
        <q-btn
          @click="$router.push({ name: 'calender_farm' })"
          unelevated
          rounded
          label="บันทึก"
          class="shadow-2 text-white"
        />
      </div>
    </div>
  </div>
</template>



<script>
export default {
  data() {
    return {
      date: "2021/07/18",
      checkbox: false,
      chooseAdmin:null,
      chooseActivity:null,
      activity_type: ["ใส่ปุ๋ย","ตัดหญ้า","ตัดกากฝาก","ตัดไม้ยาง","หยอดน้ำกรด","อื่นๆ",],
      Admin:["นางสาว อรไท อ๋องสกุล","นางสาว กนกวรรณ น้ำสงวน",
      ]
    };
  },
};
</script>

<style scoped src="../css/home.css">
</style>
<style scoped>
.other{
  float:right;
}
</style>



