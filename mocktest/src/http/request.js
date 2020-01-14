import axios from 'axios'
const http = axios.create()
http.defaults.timeout = 3000

//请求拦截器配置
http.interceptors.request.use(
  config=>{
    return config
  },error => {
    console.log(error);
    return Promise.reject(error)
  }
)

//响应拦截器配置
http.interceptors.response.use(response=>{
  return response
},error => {
    console.log(error);
    return Promise.reject(error)

  }
  )

//封装axios的post请求
export function fetch(url,params) {

  return new Promise((resolve ,reject)=>{
    axios.post(url,params).then(response=>{
      resolve(response.data)
    }).catch(error=>{
      reject(error)
    })
  })

}

export default {
  http_mock(url,params){
    return fetch(url,params)
  }
}


