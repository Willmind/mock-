import axios from 'axios'
// 可以配置一些基本参数，由于这里使用mock假装获取数据，所以请不要配置baseURL
const instance = axios.create({
  // baseURL: 'http://localhost:8080'
})

export default instance // 记得导出
