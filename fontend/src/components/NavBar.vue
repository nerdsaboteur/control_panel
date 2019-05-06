<template>
  <div class="row mb-4 mr-3">
    <div class="col">
      <div class="btn-group" role="group" style="float:right">
        <router-link :to="{ name: 'home' }" class="btn btn-info"
          >Home</router-link
        >
        <router-link :to="{ name: 'task' }" class="btn btn-info"
          >Tasks</router-link
        >
        <router-link :to="{ name: 'finances' }" class="btn btn-info"
          >Finances</router-link
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {}
</script>

<style></style>
