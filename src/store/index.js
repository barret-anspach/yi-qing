import Vue from 'vue'
import Vuex from 'vuex'
import consultation from './modules/consultation'
import hexagram from './modules/hexagram'

Vue.use(Vuex)

export default new Vuex.Store({
    strict: process.env.NODE_ENV !== 'production',
    modules: {
        consultation,
        hexagram
    },
    debug: true
})
