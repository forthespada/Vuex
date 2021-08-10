<template>
<div>
    <p>当前的数字是{{this.$store.state.count}}</p>
    <button @click="click1"> -1 </button>
    <button @click="click2"> -n </button>
    <button @click="click3"> 延迟-1 </button>
    <button @click="click4"> 延迟-n </button>
    <p>{{this.$store.getters.showNum}}</p>
</div>
</template>

<script>
    export default {
        name: "Subtraction",
        methods:{
            click1(){
                this.$store.commit('sub')
            },
            click2(){
                this.$store.commit('subN',2)
            },
            click3(){
                this.$store.dispatch('subAsync')
            },
            click4(){
                this.$store.dispatch('subNAsync',2)
            },
        }
    }
</script>

<style scoped>

</style>
