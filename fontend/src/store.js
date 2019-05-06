import Vue from 'vue'
import Vuex from 'vuex'
import EventService from '@/services/EventService.js'
import ControlPanelService from '@/services/ControlPanelService.js'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    user: {
      id: '1',
      name: 'Daniella Bosc'
    },
    tasks: [],
    reminders: [],
    priorities: [],
    events: [],
    categories: [
      'sustainability',
      'nature',
      'animal welfare',
      'housing',
      'education',
      'food',
      'community'
    ]
  },
  mutations: {
    ADD_EVENT(state, event) {
      state.events.push(event)
    },
    ADD_TASK(state, task) {
      state.tasks.push(task)
    }
  },
  actions: {
    createEvent({ commit }, event) {
      return EventService.postEvent(event).then(event => {
        commit('ADD_EVENT', event.data)
      })
    },
    addTask({ commit }, newTask) {
      return (
        ControlPanelService.addTask(newTask)
          // .then(res => (this.tasks = [...this.tasks, res.data]))
          .then(res => {
            commit('ADD_TASK', res.data)
          })
          .catch(err => console.log(err))
      )
    }
  },
  getters: {
    getEventById: state => id => {
      return state.events.find(event => event.id === id)
    }
  }
})
