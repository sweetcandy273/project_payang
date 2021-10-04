<template>
    <div class="font">
         <q-header>
      <q-toolbar class="text-center row">
          <div class="col flexed text-left">
          <q-icon
            @click="$router.push({ name: 'calendar_farm' })"
            name="arrow_back_ios"
            size="30px"
          ></q-icon>
        </div>

        <div class="col-6 font header-title">สวนภูเก็ต</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>
    </div>
</template>