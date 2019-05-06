<template>
  <div>
    <div class="tasks" v-bind:key="task._id" v-for="task in tasks">
      <TaskItem
        v-bind:task="task"
        v-on:del-task="$emit('del-task', task._id)"
        v-on:update-task="
          $emit('update-task', {
            id: task._id,
            title: task.title,
            reminder: task.reminder,
            priority: task.priority
          })
        "
      />
    </div>
  </div>
</template>

<script>
import TaskItem from '@/components/TaskItem.vue'

export default {
  name: 'tasks',
  props: ['tasks'],
  components: {
    TaskItem
  }
}
</script>

<style></style>
