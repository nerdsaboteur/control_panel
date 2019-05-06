<template>
  <div class="container">
    <NavBar />
    <div class="card">
      <div class="card-title">
        <div class="title-block">
          <h2>Tasks</h2>
        </div>
      </div>
      <div class="card-body">
        <!---add task--->
        <div class="row box-block p-2">
          <div class="col-10">
            <input
              type="text"
              v-model="title"
              name="title"
              placeholder="Add Task"
            />
          </div>
          <div class="col-2 p-0">
            <button class="btn btn-info" @click="addTask">Add Task</button>
          </div>
        </div>
        <!---add task--->

        <div :key="task._id" v-for="task in tasks">
          <!---task items--->
          <div class="row box-block">
            <div class="col-lg-1">
              <input type="checkbox" @change="deleteTask(task._id)" />
            </div>
            <div class="col-lg-8">
              <input type="text" name="title" v-model="task.title" />
            </div>
            <div class="col-lg-1">
              <!-- @click="task.reminder = !task.reminder" -->
              <i
                v-bind:class="{
                  'far fa-bell fa-lg': task.reminder,
                  'far fa-bell-slash fa-lg': !task.reminder
                }"
                @click="
                  updateTask(task._id, {
                    title: task.title,
                    reminder: (task.reminder = !task.reminder),
                    priority: task.priority
                  })
                "
              ></i>
            </div>
            <div class="col-lg-1">
              <input type="text" name="priority" v-model="task.priority" />
            </div>
            <div class="col-lg-1 pr-2">
              <i
                class="far fa-save fa-lg"
                @click="
                  updateTask(task._id, {
                    title: task.title,
                    reminder: task.reminder,
                    priority: task.priority
                  })
                "
              ></i>
            </div>
          </div>
          <!---task items--->
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import ControlPanelService from '@/services/ControlPanelService.js'

export default {
  components: {
    NavBar
  },
  data() {
    return {
      title: '',
      reminder: '',
      priority: '',
      tasks: []
    }
  },
  methods: {
    addTask() {
      const newTask = {
        title: this.title,
        reminder: this.reminder,
        priority: this.priority
      }

      ControlPanelService.addTask(newTask)
        .then(res => (this.tasks = [...this.tasks, res.data]))
        .catch(err => console.log(err))
    },
    deleteTask(id) {
      ControlPanelService.deleteTask(id)
        .then(() => (this.tasks = this.tasks.filter(task => task._id != id)))
        .catch(error => console.log(error))
    },
    updateTask(id, cTask) {
      ControlPanelService.updateTask(id, cTask)
        .then(res => (this.tasks = res.data))
        .catch(error => console.log(error))

      this.title = ''
    }
  },
  created() {
    ControlPanelService.getTasks()
      .then(res => (this.tasks = res.data))
      .catch(error => console.log(error))
  }
}
</script>

<style>
/* input[type='text'] {
  background: #eee;
  border: 1px solid #ccc;
  padding: 12px;
  font-size: 1.1em;
  width: 100%;
} */

input[name='priority'] {
  width: 30px;
  height: 30px;
  text-align: center;
  background: #fff;
  font-size: 0.9em;
  padding: 4px;
}

.far {
  margin-top: 12px;
}
</style>
