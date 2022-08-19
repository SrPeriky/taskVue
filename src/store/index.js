import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    tasks: [
      {text: 'tarea vieja', date: '02/07/2021', finish: false}
    ],
    finish: [],
  },
  getters: {
  },
  mutations: {
    setTask: (state, index, value) => state.tasks[index] = value,
    finishTask: (state, index) => {
      state.tasks[index].finish = true
      state.tasks[index].date = new Date().toLocaleDateString()
      state.finish.push(...state.tasks.splice(index, 1))
    },
    deleteTask: (state, index) => {
      //console.log(state.tasks[index].slice)
      state.tasks.splice(index, 1)
    },
    newTask: (state, value) => {
      state.tasks.push(value)
    },
  },
  actions: {
  },
  modules: {
  }
})
