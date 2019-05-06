<template>
  <div>
    <NavBar />
    {{ event }}
  </div>
</template>

<script>
import NavBar from '@/components/NavBar.vue'
import EventService from '@/services/EventService.js'

export default {
  name: 'eventimages',
  components: {
    NavBar
  },
  data() {
    return {
      event: {},
      id: 6746645
    }
  },
  created() {
    EventService.getEventImage()
      .then(res => {
        this.event = res.data
      })
      .catch(err => console.log(err))
  }
}
</script>

<style></style>
