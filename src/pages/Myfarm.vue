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
      <div class="q-mt-md">
        <hr width="250" />
      </div>
      
    </div>

    <div class="add_farm text-center fixed-bottom q-pa-xl">
      <!-- ส่ง params user_id -->
      <q-btn
        unelevated
        round
        style="background: #4e7971; color: white; width: 50px; height: 50px"
        icon="add"
        @click="
          $router.push({
            name: 'add_detail_farm',
            query: { id: $route.query.id , }
          })
        "
      />
    </div>
    </div>
   
   
    

    

  methods: {
    async getlistfarm() {
      const { data } = await axios.get(
        "http://localhost:3000/farm/list/" + this.$route.query.id
      );
      this.farms = data.data;
      // console.log(data.data);
    },
     
 
 
  }
};
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
