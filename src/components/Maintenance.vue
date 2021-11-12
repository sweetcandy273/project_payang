<template>
  <div>
    <q-form>
    <div class="q-gutter-y-md q-px-md font" style="max-width: 100%">
      <div class="row q-pt-md">
        <div class="col">
          <q-select
            filled
            v-model="type"
            :options="optionstype"
            label="ตัวเลือก"
          />
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-input filled v-model="totalprice" label="รวมจำนวนเงิน">
            <template v-slot:prepend> ฿ </template>
          </q-input>
        </div>
      </div>
      <div class="row">
          <div class="col">
            <q-input filled v-model="stores" label="ชื่อร้านค้า">
              <template v-slot:prepend> กก. </template>
            </q-input>
          </div>
          <div class="col q-ml-md">
            <q-input filled v-model="tel_stores" label="เบอร์โทรร้านค้า">
              <template v-slot:prepend>  </template>
            </q-input>
          </div>
        </div>

      <div class="row active">
        <q-checkbox v-model="active" style="font-size: 16px" label="กิจกรรม" />
      </div>
      <div class="activerubber" v-if="active">
        <strong>
          <div class="row" v-for="(input, index) in activity" :key="index">
            <div class="col font" style="font-size: 26px">1</div>
            <div class="col-9 q-px-md font">
              <q-input filled v-model="date" mask="date" :rules="['date']">
                <template v-slot:append>
                  <q-icon name="event" class="cursor-pointer">
                    <q-popup-proxy
                      ref="qDateProxy"
                      transition-show="scale"
                      transition-hide="scale"
                    >
                      <q-date v-model="date">
                        <div class="row items-center justify-end">
                          <q-btn
                            v-close-popup
                            label="Close"
                            color="primary"
                            flat
                          />
                        </div>
                      </q-date>
                    </q-popup-proxy>
                  </q-icon>
                </template>
              </q-input>
            </div>
          </div>

          <div class="text-center">
            <q-btn
              unelevated
              rounded
              style="
                background: #5db075;
                color: white;
                width: 50px;
                height: 40px;
              "
              icon="add"
              @click="addactivity"
            />
          </div>
        </strong>
      </div>
      <div class="share text-left">
        <q-select
          filled
          v-model="employee"
          :options="optionsemployee"
          label="ผู้รับผิดชอบ"
        >
          <template v-slot:prepend>
            <q-icon name="person" />
          </template>
        </q-select>
      </div>

      <div class="col">
        <q-input filled v-model="note" label="บันทึก" />
      </div>

      <div class="submit row q-gutter-sm flex-center font">
        <q-btn
          unelevated
          rounded
          label="บันทึก"
          class="shadow-2 text-white"
          style="width: 100%; background-color: #4e7971"
          @click="submitExpen()"
        />
      </div>
    </div>
    </q-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      totalprice: "",    
      note: "",
      type: null,
      stores: null,
      tel_stores: "",
      optionstype: ["ปุ๋ย", "ตัดหญ้า", "ตัดกาฝาก"],
      selectshare: false,
      employee: "",
      optionsemployee: ["-", "กนกวรรณ", "ชนิกานต์", "อรไท"],
      active: false,
      date: "2021/07/18",
      activity: [
        {
          addactivity: "",
        },
      ],
    };
  },
  methods: {
    addactivity() {
      this.activity.push({
        addactivity: "",
      });
    },
    submitExpen(){
      axios.post(`http://localhost:3000/expenditure/create/a07f9bfa-e8b2-4125-8036-acf3d7048e09/4da0b5f4-3ce8-4951-891d-d7c9ee233671`,
        {
          date: this.date,
          amount: this.totalprice,
          note: this.note,
          type_expen_id: "1",
          farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
          user_id: "4da0b5f4-3ce8-4951-891d-d7c9ee233671",
          store_expen_id : "1",
        }
      );
      axios.post(`http://localhost:3000/type_expenditure/create/a07f9bfa-e8b2-4125-8036-acf3d7048e09/`,
        {
          title: this.type,
          type: "Maintenance",
          farm_id: "a07f9bfa-e8b2-4125-8036-acf3d7048e09",
        }
      )
       .then((response) => {
          console.log(response);
        });
      this.$router.push({
        path: "/account_calendar",
      });
      
    },
  },
};
</script>
<style  scoped src="../css/home.css">
</style>