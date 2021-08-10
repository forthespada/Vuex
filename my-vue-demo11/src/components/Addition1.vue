<template>
    <div>
    <p>当前的数字是{{this.$store.state.count}}</p>
    <button @click="click1"> +1 </button>
    <button @click="click2"> +n </button>

        <button @click="click3"> 延迟+1 </button>
        <button @click="click4"> 延迟+n </button>
     <p>{{this.$store.getters.showNum}}</p>
    </div>
</template>

<script>
    export default {
        name: "Addition1",
        methods:{
        click1(){
                this.$store.commit('add')
            },
            click2(){
                this.$store.commit('addN',2)
            },
            click3(){
                this.$store.dispatch('addAsync')
            },
            click4(){
                this.$store.dispatch('addNAsync',2)
            },
        }
    }
</script>

<style scoped>

</style>
