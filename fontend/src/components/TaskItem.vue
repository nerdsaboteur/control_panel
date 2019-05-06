<template>
  <div class="task-item">
    <div>
      <input type="checkbox" @change="deleteTask(task._id)" />
      <input type="text" name="title" v-model="task.title" />
    </div>
    <div>
      <!-- @click="task.reminder = !task.reminder" -->
      <i
        v-bind:class="{
          'far fa-bell fa-lg': task.reminder,
          'far fa-bell-slash fa-lg': !task.reminder
        }"
        @click="
          updateTask({
            id: task._id,
            title: task.title,
            reminder: (task.reminder = !task.reminder),
            priority: task.priority
          })
        "
      ></i>
    </div>
    <div>
      <input type="text" name="priority" v-model="task.priority" />
    </div>
    <div>
      <button
        class="btn btn-primary"
        @click="
          updateTask({
            id: task._id,
            title: task.title,
            reminder: (task.reminder = !task.reminder),
            priority: task.priority
          })
        "
      >
        update
      </button>
    </div>
  </div>
</template>

<script>
import ControlPanelService from '@/services/ControlPanelService.js'

export default {
  props: ['task'],
  methods: {
    deleteTask(id) {
      ControlPanelService.deleteTask(id)
        .then(res => (this.tasks = this.tasks.filter(task => task._id != id)))
        .catch(error => console.log(error))
    },
    updateTask(cTask) {
      ControlPanelService.updateTask(cTask)
        .then(res => (this.tasks = res.data))
        .catch(error => console.log(error))
    }
  }
}
</script>

<style scoped>
.task-item input[type='text'] {
  background: #eee;
  border: none;
  padding: 12px;
  font-size: 1.1em;
}

.task-item input[name='priority'] {
  width: 30px;
  height: 30px;
  text-align: center;
  background: #fff;
  font-size: 0.9em;
  padding: 4px;
}
</style>
