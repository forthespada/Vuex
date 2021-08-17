import Vue from 'vue'
import Vuex from 'vuex'
import axios from "axios";

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    //所有的任務列表
    list:[],
    //默认的文本值
    inputValue:'aaa',
    nextID : 5,
  },
  mutations: {
    initList(state,list){
      state.list = list
    },
    //为store中的inputValue赋值
    setInputValue(state,value){
      state.inputValue = value
    },
    //添加列表项目
    addItem(state,item){
      const obj = {
        id:state.nextID,
        info:state.inputValue.trim(),
        done:false
      }
      state.list.push(obj)
      state.nextID++
      state.inputValue=""

    }
  },
  actions: {
    getList(context){
      axios.get('/list.json').then(({data})=>{
        console.log(data)
        context.commit("initList",data)
      })
    }
  },
  modules: {
  }
})
