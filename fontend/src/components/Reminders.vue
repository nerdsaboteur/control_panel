<template>
  <div>
    <div class="card">
      <div class="card-title">
        <div class="title-block">
          <p>Reminders</p>
        </div>
      </div>
      <div class="card-body py-1">
        <div v-bind:key="remind.id" v-for="remind in reminders">
          <router-link :to="{ name: 'task', params: { id: remind.id } }">
            <div class="row box-block">
              <div class="col-10">
                <p>{{ remind.title }}</p>
              </div>
              <div class="col-2 pr-2">
                <h4>
                  <span class="badge badge-info">{{ remind.priority }}</span>
                </h4>
              </div>
            </div>
          </router-link>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'reminders',
  props: ['reminders']
}
</script>

<style></style>
