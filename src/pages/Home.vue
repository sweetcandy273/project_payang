<template>
  <q-layout view="hHh lpR fFf">
    <q-page-container>
      <h5>Home Page</h5>
    </q-page-container>
    <div class="q-pa-md row items-start q-gutter-md">
      <div class="row">
        <div class="col">
          <q-card bordered class="bg-grey-9 my-card">
            <q-card-section>
              <p>ใส่ภาพ</p>
            </q-card-section>

            <q-separator dark inset />
            <q-card-actions>
              <q-btn to="myfarm" flat>สวนของฉัน</q-btn>
            </q-card-actions>
          </q-card>
        </div>
        <div class="col">
          <q-card bordered class="bg-grey-9 my-card">
            <q-card-section>
              <p>ใส่ภาพ</p>
            </q-card-section>

            <q-separator dark inset />
            <q-card-actions>
              <q-btn to="weather" flat>สภาพอากาศ</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
      <div class="row">
        <div class="col">
          <q-card bordered class="bg-grey-9 my-card">
            <q-card-section>
              <p>ใส่ภาพ</p>
            </q-card-section>
            <q-separator dark inset />
            <q-card-actions>
              <q-btn to="income" flat>สรุปบัญชี</q-btn>
            </q-card-actions>
          </q-card>
        </div>
      </div>
    </div>
  </q-layout>
</template>

<script>
export default {};
</script>

<style>
</style>