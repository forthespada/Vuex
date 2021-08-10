import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    count:0
  },
  mutations: {

    add(state){
      state.count++
    },
    addN(state,N){
      state.count += N
    },
    sub(state){
      state.count--
    },
    subN(state,N){
      state.count -= N
    },
  },
  actions: {
    addAsync(context){
      setTimeout(()=>{
        context.commit('add')
      },2000)
    },
    addNAsync(context,N){
      setTimeout(()=>{
        context.commit('addN',N)
      },2000)
    },
    subAsync(context){
      setTimeout(()=>{
        context.commit('sub')
      },2000)
    },
    subNAsync(context,N){
      setTimeout(()=>{
        context.commit('subN',N)
      },2000)
    },

  },
  modules: {
  },
  getters:{
    showNum:state=>{
      return '这里是getters，当前的number为 ' + state.count +' !!'
    }
  }
})
