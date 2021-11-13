<template>
  <div>
    <q-img src="../assets/bg-starter.png" width="100%">
      <div style="background: none">
        <div class="fixed-center text-center">
          <div>
            <img
              class="logo-starter"
              alt="Payang logo"
              src="../assets/payang_icon.png"
            />
          </div>
          <div class="q-pt-xl"></div>
        </div>

        <div class="fixed-bottom text-center q-pb-md text-black font">
          <div>PayangTeam</div>
          <div>@PSU Phuket</div>
        </div>
      </div>
    </q-img>
  </div>
</template>

<script>
export default {
  mounted() {
    setTimeout(() => this.$router.push({ name: "starter_intro1" }), 1000);
  },
  methods: {}
};
</script>

<style scoped src="../css/home.css"></style>
