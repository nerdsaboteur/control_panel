<template>
  <div>
    <div class="card">
      <div class="card-title">
        <div class="title-block">
          <p>Priorities</p>
        </div>
      </div>
      <div class="card-body py-1">
        <div :key="priority.id" v-for="priority in priorities">
          <router-link :to="{ name: 'task', params: { id: priority.id } }">
            <div class="row box-block">
              <div class="col-10">
                <p>{{ priority.title }}</p>
              </div>
              <div class="col-2 pr-2">
                <h4>
                  <span class="badge badge-info">{{ priority.priority }}</span>
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
import PriorityItem from '@/components/PriorityItem.vue'

export default {
  name: 'priorities',
  props: ['priorities'],
  components: {
    PriorityItem
  }
}
</script>

<style scoped>
.priorities {
  display: grid;
  /* grid-template-columns: repeat(2, 1fr); */
  grid-auto-rows: minmax(50px, auto);
  grid-gap: 1em;
}
.priorities > div {
  margin: 2px 0;
  padding: 20px;
  text-align: left;
  background: #eee;
  font-size: 1.1em;
}
</style>
