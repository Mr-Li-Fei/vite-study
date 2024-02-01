import { defineConfig } from 'vite'

export default defineConfig({
    optimizeDeps: {
        // 如果lodash-es 不参与预构建，因为lodash-es 是esm规范，所以其中每一个export 都会产生一个请求，
        // 参与预构建，vite将进行优化， 将所有export 的块合并到一个请求中
        // exclude: ['lodash-es'], 
    }
})