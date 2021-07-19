<template>
<div>
   <q-header class="shadow-2">
      <q-toolbar class="text-center row">
        <div
          class="col self-center font"
          @click="$router.push({ name: 'Add_detail_farm' })"
        >
          <q-icon name="arrow_back_ios" />
        </div>

        <div class="col-6 font header-title">สวนของฉัน</div>
        <div class="col self-center"></div>
      </q-toolbar>
    </q-header>

    <div>
       <div class="text-center">
                    <img
                      class="logo"
                      alt=""
                      src="../assets/forest.png"
                      style="width: 250px"
                    />
                    <div class="col-6 font header-title" >สวนของฉัน</div>
        </div>
    </div>

    <div class="row myfarm1 font shadow-2"
        @click="$router.push({ name: 'myfarm' })">

      <div class="col q-px-md text-center self-center">
          <img
            class="logo"
            alt="Payang logo"
            src="../assets/forest.png"
            style="width: 80px"
          />
        </div>
        <div class="col-6 q-pa-md self-center">
          <div style="font-size: 20px">สวนภูเก็ต</div>
         <div style="font-size: 15px"> 112/1 ซอยหล่อโรง ถนนระนอง
ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต</div>
        </div>

        
    </div>

        <div class="row myfarm1 font shadow-2"
        @click="$router.push({ name: 'myfarm' })">

      <div class="col q-px-md text-center self-center">
          <img
            class="logo"
            alt="Payang logo"
            src="../assets/forest.png"
            style="width: 80px"
          />
        </div>
        <div class="col-6 q-pa-md self-center">
          <div style="font-size: 20px">สวนภูเก็ต</div>
         <div style="font-size: 15px"> 112/1 ซอยหล่อโรง ถนนระนอง
ตำบลตลาดเหนือ อำเภอเมืองภูเก็ต จังหวัดภูเก็ต</div>
        </div>

        
    </div>
    
    
    <div class="text-center">
      <q-btn 
      size="22px"
      round color="teal-9" 
      icon="add" />
    </div>
    

    

</div>



  
</template>

<script>
export default {
name:"myfarm"

}


</script src="https://kit.fontawesome.com/0b9f660e86.js" crossorigin="anonymous">

<style scoped src="../css/home.css">
</style>