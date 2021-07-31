<template>
  <div @click="showLoading">
    <!-- <q-img src="../assets/bg-starter.png" width="100%"> -->
    <div style="background: none">
      <div class="fixed-center text-center">
        <div>
          <img
            class="logo-starter"
            alt="Payang logo"
            src="../assets/payang_icon.png"
          />
        </div>
        <div class="q-pt-xl">
          <!-- <q-spinner color="green" size="3em"></q-spinner> -->
        </div>
      </div>

      <div class="fixed-bottom text-center q-pb-md text-black font">
        <div>PayangTeam</div>
        <div>@PSU Phuket</div>
      </div>
    </div>
    <!-- </q-img> -->
  </div>
</template>

<script>
// import { onBeforeUnmount } from "vue";
export default {
  //  this.$router.push({
  //     path:"/sterter_intro1",
  //   }),

  // setup() {
  //   let timer;
  //   onBeforeUnmount(() => {
  //     if (timer !== void 0) {
  //       clearTimeout(timer);
  //       $q.loading.hide();
  //     }
  //   });
  //   return {
  //     showLoading() {
  //       $q.loading.show({});

  //       // hiding in 2s
  //       timer = setTimeout(() => {
  //         $q.loading.hide();
  //         timer = void 0;
  //       }, 2000);

  //       $router.push({
  //         path: "/starter_intro1",
  //       });
  //     },
  //   };
  // },

  methods: {
    showLoading() {
      // this.$q.loading.show({
      //   delay: 400, // ms
      // });

      // this.$q.loading.hide();
      this.$router.push({
        path: "/starter_intro1",
      });
    },
  },
};
</script>

<style scoped src="../css/home.css">
</style>
