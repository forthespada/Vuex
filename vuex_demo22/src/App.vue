<template>
  <div id="app">
    <a-input placeholder="请输入任务" class="my_ipt" :value="inputValue" @change="handleInputChange"/>
    <a-button type="primary" @click="addItemToList">添加事项</a-button>

    <!-- 在最开始dataSource的值是list的，也就是默认显示全部的数据，
    后来为了增加按需显示，所以通过getter来对数据进行二次剥离和显示 -->
    <a-list bordered :dataSource="infoList" class="dt_list" >
      <a-list-item slot="renderItem" slot-scope="item">
        <!-- 复选框 -->
        <a-checkbox :checked='item.done' @change='(e)=>{cbstStatusChange(e,item.id)}'>{{ item.info }}</a-checkbox>
        <!-- 删除链接 -->
        <a slot="actions" @click='removeItemByID(item.id)'>删除</a>
      </a-list-item>

      <!-- footer区域 -->
      <div class="footer" slot="footer">
        <span>未完成条数：{{unDoneLength}}</span>
        <a-button-group>
          <a-button :type="viewKey === 'all' ? 'primary':'default'" @click="changeList('all')">全部</a-button>
          <a-button :type="viewKey === 'undone' ? 'primary':'default'" @click="changeList('undone')">未完成</a-button>
          <a-button :type="viewKey === 'done' ? 'primary':'default'"  @click="changeList('done')">已完成</a-button>
        </a-button-group>
        <a @click="clean">清除已完成</a>
      </div>
    </a-list>
  </div>
</template>
<script>
  import {mapState,mapGetters} from 'vuex'
  export default {
    name: "app",
    data() {
      return {
      };
    },
    created() {
      this.$store.dispatch("getList")
    },
    computed:{
      ...mapState(['list','inputValue',"viewKey"]),
      ...mapGetters(['unDoneLength','infoList'])
    },
    methods:{
     // 监听文本框内容变化
      handleInputChange(e){
        //console.log(e.target.value)

        this.$store.commit('setInputValue',e.target.value)
      },
      //像List中添加数据
      addItemToList(){
        if(this.inputValue.trim().length <= 0){
          return this.$message.warning("文本框不能为空")
        }
        this.$store.commit('addItem')
      },//根据id删除
      removeItemByID(id)
      {
        //根据id删除对应的索引
        this.$store.commit('removeItem',id)
        //console.log(id)

      },
      //复选框，监听事件 选中状态变化
      cbstStatusChange(e,id){
        //通过e.target可以拿到最新的复选款状态
        // console.log(e.target.checked)
        //console.log(id)
        const param ={
          id:id,
          status:e.target.checked
        }
        this.$store.commit('changeStatus',param)

      },
      //清除已完的item
      clean(){
        this.$store.commit('cleanDone')

      },
      //修改页面上展示的页面数据
        changeList(key){
       // console.log(key)
        this.$store.commit("changeViewKey",key)

      }
    }
  };
</script>
<style scoped>
  #app {
    padding: 10px;
    margin: 0px 400px;
  }
  .my_ipt {
    width: 500px;
    margin-right: 10px;
  }
  .dt_list {
    width: 500px;
    margin-top: 10px;
  }
  .footer {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
</style>

