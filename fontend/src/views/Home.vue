<template>
  <div class="container">
    <NavBar />
    <div class="row box-row">
      <div class="col-lg-6">
        <Reminders :reminders="reminders" />
      </div>
      <div class="col-lg-6">
        <Priorities :priorities="priorities" />
      </div>
    </div>
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Reminders from '@/components/Reminders.vue'
import Priorities from '@/components/Priorities.vue'
import ControlPanelService from '@/services/ControlPanelService.js'

export default {
  name: 'home',
  components: {
    Reminders,
    Priorities,
    NavBar
  },
  methods: {},
  data() {
    return {
      reminders: [],
      priorities: []
    }
  },
  created() {
    ControlPanelService.getReminders()
      .then(res => (this.reminders = res.data))
      .catch(error => console.log(error))

    ControlPanelService.getPriorities()
      .then(res => (this.priorities = res.data))
      .catch(error => console.log(error))
  }
}
</script>

<style></style>
