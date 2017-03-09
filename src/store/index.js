import Vue from 'vue'
import Vuex from 'vuex'
import * as PersonModule from './person_module'
import * as MessageModule from './message_module'


// Make vue aware of Vuex
Vue.use(Vuex)

const modules = {
  PersonModule,
  MessageModule
}

// Combine the initial state and the mutations to create a Vuex store.
// This store can be linked to our app.
export default new Vuex.Store({
  modules
})
