<template>
<div>

   <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div
          class="col self-center font"
          @click="$router.push({ name: 'home' })"
        >
          <q-icon name="arrow_back_ios" />
        </div>

        <div class="col-6 font header-title">สวนของฉัน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    
       <div class="text-center">
                    <img
                      class="logo"
                      alt=""
                      src="../assets/forest.png"
                      style="width: 250px"
                    />
                    <div class="col-6 font header-title" >สวนของฉัน</div>
        </div>
    
<div class="col self-center font">
    <div class="row"
        @click="$router.push({ name: 'Detail_farm' })"
    >

      <div class="col-4 text-center">
          <img
            class="logo"
            alt="Payang logo"
            src="../assets/forest.png"
            style="width: 80px"
          />
        </div>
        <div class="col-6">
          <div style="font-size: 18px">สวนภูเก็ต</div>
         <div style="font-size: 12px"> 112/1 ซอยหล่อโรง ถนนระนอง
ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต</div>
        </div>
        <div class="col-2">
            <div style="font-size: 15px">
                1 ไร่
            </div>
        </div>
    </div> 
    </div>
    
    
       <div class="row justify-center">
       <div class=".col-auto" 
        @click="$router.push({ name: 'Add_detail_farm' })"> 
      <q-btn 
      size="15px"
      round color="teal-9" 
      icon="add" />  
    </div>
    </div>
   
   
    

    

</div>

</template>

</script>

<style>
.bg {
  background: #dae5de;
}

.q-toolbar {
  background-color: #4e7971;
}

.header-title {
  font-size: 25px;
}

.font {
  font-family: "Kanit", sans-serif;
}

.q-btn {
  width: 100%;
  background-color: #4e7971;
}
</style>
