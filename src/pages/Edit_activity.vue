<template>
  <div class="font">
    <q-form @submit="onSubmit">
      <q-header>
        <q-toolbar class="text-center row">
          <div class="col flexed text-left">
            <q-icon
              @click="
                $router.push({
                  name: 'calender_farm',
                  query: { id: $route.query.idf },
                })
              "
              name="arrow_back_ios"
              size="30px"
            ></q-icon>
          </div>

          <div class="col-6 font header-title">แก้ไข</div>
          <div class="col self-center"></div>
        </q-toolbar>
      </q-header>

      <div class="box-dropActivitytype q-pa-md">
        <q-input
          filled
          v-model="activity_in_farms.activity"
          color="teal"
          label="ประเภทกิจกรรม"
          :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกประเภทกิจกรรม']"
        >
        </q-input>
      </div>

      <div class="q-px-md font">
        <q-input
          color="teal"
          filled
          v-model="activity_in_farms.date"
          mask="date"
        >
          <template v-slot:append>
            <q-icon name="event" class="cursor-pointer" color="teal">
              <q-popup-proxy
                ref="qDateProxy"
                transition-show="scale"
                transition-hide="scale"
              >
                <q-date v-model="activity_in_farms.date" color="green"  class="font">
                  <div class="row items-center justify-end">
                    <q-btn v-close-popup label="Close" color="white" flat />
                  </div>
                </q-date>
              </q-popup-proxy>
            </q-icon>
          </template>
        </q-input>
      </div>
      <div class="q-mt-lg text-center">
        <q-btn
          round
          style="background: #4e7971; color: white; width: 50px; height: 50px"
          color="deep-orange-13"
          icon="delete"
          @click="DeleteEven()"
        />
      </div>

      <div class="add-account self-center fixed-bottom q-pa-md">
        <q-btn
          unelevated
          rounded
          label="บันทึก"
          class="shadow-2 text-white"
          type="submit"
          value="onSubmit"
        />
      </div>
    </q-form>
  </div>
</template>



<script>
import { date } from "quasar";

export default {
  data() {
    return {
      activity_in_farms: {
        date:""
      },
    };
  },
  mounted() {
    this.getactivity();
  },
  methods: {
    formatDate(dateString) {
      return date.formatDate(dateString, "YYYY/MM/DD");
    },

    async getactivity() {

      try {
        this.$q.loading.show();
        const { data } = await this.$axios.get(
        "/activity_in_farm/findactivity/" + this.$route.query.ida
        );

        this.activity_in_farms = data.data;
        this.activity_in_farms.date = this.formatDate(this.activity_in_farms.date);
        
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    },

    async deletefunc() {
      await this.$axios.delete(
        "/activity_in_farm/delete/" + this.$route.query.ida
      );
      await this.$router.push({
        name: "calender_farm",
        query: { id: this.$route.query.idf },
      });
    },

    DeleteEven() {
      this.$q
        .dialog({
          title: "ยืนยันการลบกิจกรรม",
          message:
            'ระบบจะทำการลบข้อมูลกิจกรรม <span class="text-red font"><strong>หากยืนยันการลบข้อมูลกิจกรรม ข้อมูลทั้งหมดจะไม่สามารถกู้คืนมาได้อีก</strong></span><br>',
          cancel: true,
          persistent: true,
          html: true,
        })
        .onOk(() => {
          this.deletefunc();
        })

        .onCancel(() => {})
        .onDismiss(() => {});
    },

    async onSubmit() {
      console.log(this.activity_in_farms);
      const { data } = await this.$axios.put(
        "/activity_in_farm/update/" +
          this.$route.query.ida,
        {
          date: this.activity_in_farms.date,
          activity: this.activity_in_farms.activity,
        }
      );
      this.activity_in_farm = data.data.date;
      this.$router.push({
        path: "/calender_farm",
        query: {
          id: this.$route.query.idf,
        },
      });
    },
  },
};
</script>
<style scoped src="../css/home.css">
</style>
<style scoped>
