<template>
  <div>
    <div class="fixed-center text-center">
      <div>
        <img
          class="logo"
          alt="Payang logo"
          src="../assets/payang_icon.png"
          style="width: 200px; height: 200px"
        />
      </div>
      <div class="q-pt-xl">
        <q-spinner color="green" size="3em"></q-spinner>
      </div>
    </div>

    <div class="fixed-bottom text-center q-pb-md">
      <div>PayangTeam</div>
      <div>@PSU Phuket</div>
    </div>
  </div>
</template>

<script>
export default {
  name: "PageIndex",
};
</script>

<style>
* {
  background: #dae5de;
}

.logo {
  border-radius: 10%;
}
</style>
