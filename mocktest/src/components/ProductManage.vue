<template>
  <div>
    产品管理
    {{content}}
  </div>

</template>

<script>
  import {getproducts} from '@/api/product'
    export default {
        name: "ProductManage",
        data(){
            return{
                content:'',
            }
        },
        created () {
            this.getProductsApi()
        },
        methods: {
            getProductsApi () {
                // 调用API
                getproducts().then(response => {
                    console.log(111);
                    // 这里应该有一步是关于返回的数据是否可被直接渲染的判断
                    // 赋值给本地变量，然后渲染。
                    this.content = response.data
                }).catch(error => {
                    // 当请求错误时，提示错误信息
                    this.$message(error)
                })
            }
        }



    }
</script>

<style scoped>

</style>
