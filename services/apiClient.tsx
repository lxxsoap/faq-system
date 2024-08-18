import axios from 'axios';

// 创建一个 axios 实例，并设置 baseURL
const apiClient = axios.create({
  baseURL: 'http://localhost:8080', // 替换为您的 API 基础 URL
  timeout: 1000, // 设置请求超时时间
  headers: { 'X-Custom-Header': 'foobar' } // 设置自定义请求头
});

// 使用该实例进行 HTTP 请求


export default apiClient;