<template>
  <div class="row box-block">
    <div class="col-10 p-0">
      <input type="text" v-model="title" name="title" placeholder="title" />
    </div>
    <div class="col-2 p-0">
      <button class="btn btn-info" @submit="addTask">Add Task</button>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: ''
    }
  },
  methods: {
    addTask() {
      const newTask = {
        title: this.title,
        reminder: this.reminder,
        priority: this.priority
      }
      this.$store
        .dispatch('addTask', newTask)
        .then(() => {})
        .catch(err => console.log(err))
    }
  }
}
</script>

<style>
form {
  display: flex;
  flex-direction: row;
  width: 100%;
  background: #eee;
  padding: 20px;
}
/* input[type='text'] {
  margin: 8px;
  padding: 12px;
  width: 80%;
  border: 1px solid #ddd;
  border-radius: 3px;
} */
</style>
