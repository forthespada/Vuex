<template>
<div>
    <p>当前的数字是{{count}}</p>
    <button @click="sub"> -1 </button>
    <button @click="subN(3)"> -n </button>
    <button @click="subAsync"> 延迟-1 </button>
    <button @click="subNAsync(3)"> 延迟-n </button>
    <p>{{showNum}}</p>
</div>
</template>

<script>
    import {mapState,mapActions,mapGetters,mapMutations} from 'vuex'
    export default {
        name: "Subtraction",
        methods:{
            ...mapActions(['subAsync','subNAsync']),
            ...mapMutations(['sub','subN'])
        },
        computed:{
            ...mapGetters(['shoNum']),
            ...mapState(['count'])
        }
    }
</script>

<style scoped>

</style>
