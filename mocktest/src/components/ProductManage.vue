<template>
  <div>
    产品管理
    <el-button @click="getData">获取数据</el-button>

  </div>

</template>

<script>
    import request from '../http/request'
    export default {
        name: "ProductManage",
        data(){
            return{
                content:'',
            }
        },

        methods: {
            getData(){
                request.http_mock('http://route.showapi.com/60-27','api_id=63114&api_sign=3847b0').then(res=>{
                    console.log(res);
                })


            },

        }



    }
</script>

<style scoped>

</style>
