// import { defineConfig } from 'vite'
// import vue from '@vitejs/plugin-vue'

// // https://vite.dev/config/
// export default defineConfig({
//   plugins: [vue()],
// })
import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import path from 'path'

export default defineConfig({
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, 'src'),
    },
  },
  server: {
    host: true,      // 开启局域网访问，监听所有网络接口
    port: 3000,      // 端口，可按需修改
    allowedHosts: ['3824q0g335.qicp.vip'],  // 允许访问的域名列表
    proxy: {
      '/api': {
        target: 'http://localhost:5000', // Flask 后端端口
        changeOrigin: true,
      },
    },
  },
})
