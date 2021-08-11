<template>
  <div class="font">
    <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        
          <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'myfarm' })"
          />
        </div>

        <div class="col-6 font header-title">ข้อมูลสวน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div class="q-pa-md self-center">

      <div class="box_detail q-pa-md self-center">
        <div class="row justify-end">
          <div class="column">
            <q-btn
            @click="$router.push({ name: 'edit_detail_farm' })" 
            round color="orange-4" 
            icon="edit" />
          </div>
          <div class="column">
            <q-btn 
            round color="deep-orange-13" 
            icon="delete"
            @click="showNotif" 
            />
          </div>
        </div>

        <div>เจ้าของสวน : กัลย์สุตา ปิยะพงศ์</div>
        <div>สวน : ภูเก็ต</div>
        <div>ที่อยู่ : 112/1</div>
        <div>เนื้อที่ปลูก : 1.1 ไร่</div>
        <div>ผู้ดูแล : กนกวรรณ น้ำสงวน</div>
      </div>
    </div>

    <div></div>

      <div v-if="secondModel == 'yearly'" class="text-center" id="yearly">
        <graph_farm/>
      </div>

    <div class="q-pa-md q-gutter-sm self-center">
      <div>
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

<script>
import graph_farm from "../components/graph_farm.vue";
export default {
  // name: "yearly",
  components: {
    graph_farm,
  },
    data() {
    return {
      leftDrawerOpen: false,
      model: null,
      secondModel: "yearly",
    };
  },
    methods: {
    showNotif () {
      this.$q.notify({
        message: 'ลบหรือไม่?',
        color: 'green-9',
       
        actions: [
          { label: 'ตกลง', color: 'white', handler: () => { /* ... */ } },
          { label: 'ไม่อิ๊', color: 'white', handler: () => { /* ... */ } }
        ]
      })

  
    }
  }
  };
</script>


<style scoped src="../css/home.css">
</style>