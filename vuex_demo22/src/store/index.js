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

    },
    //删除列表项目
    removeItem(state,id){
      //根据id删除对应的索引,并进行删除
    const i =    state.list.findIndex(x =>x.id === id)
      if(i !== -1){
        state.list.splice(i,1)
      }

    },
    //修改列表项的状态
    changeStatus(state,param){
      const i = state.list.findIndex(x => x.id === param.id)
      if( i !== -1){
        state.list[i].done = param.status
      }
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
  getters:{
    //统计未完成的任务数
    unDoneLength(state){
      const i =  state.list.filter(x => x.done === false)
      return i.length
    }
  },
  modules: {
  }
})
