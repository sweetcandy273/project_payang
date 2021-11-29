<template>
  <div>
    <q-header class="shadow-2">
      <q-toolbar class="row">
        <div class="col flex">
          <img
            src="../assets/close.png"
            style="width: 22px; height: 22px"
            @click="$router.push({ name: 'home' })"
          />
        </div>

        <div class="col-6 font header-title text-center">ข้อมูลผู้ใช้</div>
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
                v-model="payang_user.fname"
                label="ชื่อ"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกชื่อ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="payang_user.lname"
                label="นามสกุล"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกนามสกุล']"
              />
            </div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="payang_user.phone_number"
            label="เบอร์โทรศัพท์"
            mask="###-###-####"
            :rules="[
              val =>
                val.charAt(0) == '0' || 'เบอร์โทรศัพท์จะต้องเริ่มต้นด้วย 0',
              val =>
                (val && val.length > 0 && val.length == 12) ||
                'กรุณากรอกเบอร์โทรศัพท์'
            ]"
          >
            <template v-slot:append>
              <q-icon name="call" />
            </template>
          </q-input>
          <q-input
            color="teal"
            readonly
            filled
            v-model="payang_user.email"
            label="อีเมล"
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกอีเมล']"
          >
            <template v-slot:append> @ </template>
          </q-input>
          <q-input
            color="teal"
            filled
            v-model="payang_user.address"
            label="ที่อยู่ (บ้านเลขที่ หมู่ที่ ตรอก/ซอย แขวง/ตำบล)"
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกที่อยู่']"
          />

          <div class="row">
            <div class="col q-pr-md">
              <q-input
                color="teal"
                filled
                v-model="payang_user.address_district"
                label="เขต/อำเภอ"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกอำเภอ']"
              />
            </div>
            <div class="col">
              <q-input
                color="teal"
                filled
                v-model="payang_user.address_province"
                label="จังหวัด"
                :rules="[val => (val && val.length > 0) || 'กรุณากรอกจังหวัด']"
              />
            </div>
          </div>

          <q-input
            color="teal"
            filled
            v-model="payang_user.zip_code"
            label="รหัสไปรษณีย์ "
            :rules="[val => (val && val.length > 0) || 'กรุณากรอกรหัสไปรษณีย์']"
          />
        </div>

        <div>
          <q-btn
            unelevated
            rounded
            label="ยืนยัน"
            type="submit"
            class="shadow-2 text-white"
          />
        </div>
      </q-form>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      payang_user: []
    };
  },
  async mounted() {
    try {
      this.$q.loading.show();

      const { data } = await this.$axios.get(
        "/payang_user/" + this.$route.query.id
      );
      this.payang_user = data.data;
    } catch (error) {
      console.log(error);
    } finally {
      this.$q.loading.hide();
    }
  },

  methods: {
    async onSubmit() {
      try {
        this.$q.loading.show();

        const { data } = await this.$axios.put(
          "/payang_user/update/" + this.$route.query.id,
          {
            fname: this.payang_user.fname,
            lname: this.payang_user.lname,
            phone_number: this.payang_user.phone_number,
            email: this.payang_user.email,
            address: this.payang_user.address,
            address_district: this.payang_user.address_district,
            address_province: this.payang_user.address_province,
            zip_code: this.payang_user.zip_code
          }
        );
        this.payang_user = data.data;

        this.$router.push({
          name: "home"
        });
      } catch (error) {
        console.log(error);
      } finally {
        this.$q.loading.hide();
      }
    }
  }
};
</script>

<style scoped src="../css/home.css"></style>
