import { resolve } from 'node:path'

import { defineConfig } from 'vite'
import Uni from '@dcloudio/vite-plugin-uni'
import AutoImport from 'unplugin-auto-import/vite'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    Uni(),
    AutoImport({
      dts: './src/types/auto-imports.d.ts',
      imports: ['vue', 'pinia'],
      dirs: ['src/utils', 'src/hooks'],
    }),
  ],
  resolve: {
    alias: [
      {
        find: '@',
        replacement: resolve(__dirname, './src'),
      },
    ],
    extensions: ['ts', 'tsx', '.json', '.vue'],
  },
  build: {
    // 开发阶段启用源码映射：https://uniapp.dcloud.net.cn/tutorial/migration-to-vue3.html#需主动开启-sourcemap
    sourcemap: process.env.NODE_ENV === 'development',
  },
})
