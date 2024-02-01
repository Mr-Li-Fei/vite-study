// 引入defineConfig, 配置viteConfig 我们可以获得很好的只能提示
import { defineConfig, loadEnv } from 'vite';
import viteBaseConfig from './config/vite.base.config';
import viteDevConfig from './config/vite.dev.config';
import viteProdConfig from './config/vite.prod.config';

// 策略模式
const envResolver = {
    "build": () => {
        console.log('');
        return { ...viteBaseConfig, viteProdConfig }
    },
    "serve": () => {
        return { ...viteBaseConfig, ...viteDevConfig }
    }
}

export default defineConfig(({ command, mode }) => {
    console.log('command', command, mode);
    const env = loadEnv(mode, process.cwd(), '');
    console.log('env.app_key',env.VITE_APP_KEY);
    return envResolver[command]();
})
