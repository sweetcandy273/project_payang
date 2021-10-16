<template>
  <div>
    <q-header class="shadow-2">
      <!-- <q-toolbar>
        <q-space></q-space>
        <q-btn flat round dense icon="search" class="q-mr-xs" />
        <q-btn flat round dense icon="group_add" />
      </q-toolbar> -->
      <q-toolbar class="row flex">
        <!-- <div
          class="col self-center font"
          @click="$router.push({ name: 'setting' })"
        >
          ตั้งค่า
        </div> -->
        <div
          class="col self-center font"
          @click="leftDrawerOpen = !leftDrawerOpen"
        >
          ตั้งค่า
        </div>

        <div class="col-6 font header-title text-center">หน้าหลัก</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <q-drawer
      v-model="leftDrawerOpen"
      show-if-above
      bordered
      content-class="shadow-2"
    >
      <q-toolbar class="text-center row text-white">
        <div class="col font">
          <q-img
            src="../assets/delete-user.png"
            style="width: 30px"
            @click="confirm()"
          />
        </div>

        <div class="col-6 font header-title">คุณ{{ payang_user.fname }}</div>
        <div class="col self-center">
          <q-img
            src="../assets/pen.png"
            style="width: 30px"
            @click="
              $router.push({
                path: 'edit_userinformation',
                query: {
                  id: payang_user.user_id,
                },
              })
            "
          />
        </div>
      </q-toolbar>
      <div class="q-pa-md font">
        <div class="row">
          <div class="col text-left"><strong>ชื่อ</strong></div>
          <div class="col text-right">{{ payang_user.fname }}</div>
        </div>
        <div class="row">
          <div class="col text-left"><strong>นามสกุล</strong></div>
          <div class="col text-right">{{ payang_user.lname }}</div>
        </div>
        <div class="row">
          <div class="col text-left"><strong>เบอร์โทรศัพท์</strong></div>
          <div class="col text-right">{{ payang_user.phone_number }}</div>
        </div>

        <div>
          <strong> อีเมล </strong>
        </div>
        <div>{{ payang_user.email }}</div>
        <div><strong>ที่อยู่</strong></div>
        <div>
          {{ payang_user.address }} อ.{{ payang_user.address_district }} จ.{{
            payang_user.address_province
          }}
          {{ payang_user.zip_code }}
        </div>
        <div class="row q-mt-xl">
          <div class="col text-left"><strong>รหัสผ่าน</strong></div>
          <div class="col text-right">
            <router-link to="/new_password" class="text-green">
              เปลี่ยน</router-link
            >
          </div>
        </div>
      </div>

      <div class="q-pa-md font text-center">
        <q-img src="../assets/forest.png" style="width: 80px" />
        <div class="text-grey">version 0.1</div>
        <div @click="logout()">ออกจากระบบ</div>
      </div>
    </q-drawer>

    <div class="q-px-md">
      <div class="q-pa-md">
        <div class="row text-center">
          <div class="col font" style="font-size: 25px">
            Payang App
            <q-icon name="info" style="color: #5db075">
              <q-popup-proxy :offset="[10, 10]">
                <q-banner class="bg-while font">
                  <div>วางแผนการเพาะปลูกสวนยาง</div>
                  <div>วางแผนบัญชีการเงิน</div>
                  <div class="text-right">
                    <q-img src="../assets/accounting.png" style="width: 80px" />
                  </div>
                </q-banner>
              </q-popup-proxy>
            </q-icon>

            <!-- <q-icon name="info" style="color: #5db075" /> -->
          </div>
        </div>
        <div class="row text-center">
          <div class="col font" style="font-size: 24px">
            คุณ{{ payang_user.fname }}
          </div>
        </div>
      </div>
      <!-- ส่ง user_id -->
      <div
        class="row myfarm font shadow-2"
        @click="
          $router.push({ name: 'myfarm', query: { id: payang_user.user_id } })
        "
      >
        <div class="col-6 q-pa-md self-center">
          <div style="font-size: 20px">สวนของฉัน</div>
        </div>
        <div class="col q-px-md text-right self-center">
          <q-img src="../assets/forest.png" style="width: 80px" />
        </div>
      </div>
      <div class="q-pt-md text-center font" style="font-size: 20px">ผลผลิต</div>
      <div class="q-py-md">
        <q-btn-toggle
          class="shadow-2"
          v-model="secondModel"
          spread
          no-caps
          rounded
          unelevated
          toggle-color="grey-8"
          color="grey-5"
          text-color="white"
          :options="[
            { label: 'ปี', value: 'yearly' },
            { label: 'เดือน', value: 'monthly' },
          ]"
        />
      </div>
    </div>

    <div>
      <div v-if="secondModel == 'yearly'" class="text-center" id="yearly">
        <ProductYearly />
      </div>
      <div v-else class="text-center">
        <ProductMonthly />
      </div>
    </div>
  </div>
</template>


<script>
import ProductYearly from "../components/ProductYearly.vue";
import ProductMonthly from "../components/ProductMonthly.vue";
import axios from "axios";

export default {
  // name: "yearly",
  components: {
    ProductYearly,
    ProductMonthly,
  },

  data() {
    return {
      payang_user: [],

      leftDrawerOpen: false,
      model: null,
      secondModel: "yearly",
    };
  },
  async mounted() {
    const { data } = await axios.get(
      "http://localhost:3000/payang_user/1e4ea4af-9414-456b-922d-1463fe2b2b00"
    );
    this.payang_user = data.data;
    // console.log(data.data);
  },
  methods: {
    confirm() {
      this.$q
        .dialog({
          title: "ยืนยันการลบบัญชีผู้ใช้",
          message:
            'ระบบจะทำการลบข้อมูลเกี่ยวกับบัญชีผู้ใช้นี้ทั้งหมด <span class="text-red font"><strong>หากยืนยันการลบบัญชีผู้ใช้แล้ว ข้อมูลทั้งหมดจะไม่สามารถกู้คืนมาได้อีก</strong></span><br>',
          cancel: true,
          persistent: true,
          html: true,
        })
        .onOk(() => {
          // console.log(">>>> OK");
          this.$router.push({
            path: "/login",
          });
        })

        .onCancel(() => {
          // console.log(">>>> Cancel");
        })
        .onDismiss(() => {
          // console.log('I am triggered on both OK and Cancel')
        });
    },
    logout() {
      //! ออกจากระบบ
      this.$router.push({
        path: "/login",
      });
    },
  },
};
</script>


<style scoped src="../css/home.css">
</style>