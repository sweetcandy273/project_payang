<template>
  <div class="font">
    <q-header>
      <q-toolbar class="text-center row font">
        <div class="col flexed text-left">
          <q-icon
            @click="
              $router.push({
                name: 'calender_farm',
                query: { id: $route.query.id },
              })
            "
            name="arrow_back_ios"
            size="30px"
          ></q-icon>
        </div>

        <div class="col-6 font header-title">สวนภูเก็ต</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    <div>
      <q-form @submit="onSubmit()">
        <div class="box-dropActivitytype q-pa-md">
          <q-input
            filled
            v-model="activity"
            color="teal"
            label="ประเภทกิจกรรม"
            :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกประเภทกิจกรรม']"
          >
          </q-input>
        </div>

        <div class="q-px-md font">
          <q-input color="teal" filled v-model="date" mask="date" :rules="[(val) => (val && val.length > 0) || 'กรุณากรอกปฎิทิน']">
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

        <div class="add-account self-center fixed-bottom q-pa-md">
          <q-btn
            unelevated
            rounded
            label="บันทึก"
            class="shadow-2 text-white"
            type="submit"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>



<script>
import axios from "axios";

export default {
  data() {
    return {
      date: "",
      activity: " ",
    };
  },
  mounted() {

  },
  methods: {
    onSubmit() {
      axios
        .post("http://localhost:3000/activity_in_farm/create",{
          date: this.date,
          activity: this.activity,
          farm_id: this.$route.query.id,
        })
        .then((response) => {
          console.log(response);
        });
      this.$router.push({
        path: "/calender_farm",
        query: {
          id: this.$route.query.id,
        },
      });
    },
  },
};
</script>

<style scoped src="../css/home.css">
</style>
<style scoped>
.other {
  float: right;
}
</style>



