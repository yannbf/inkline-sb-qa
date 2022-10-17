import { defineConfig } from 'vite';
import { configDefaults } from 'vitest/config';
import inspect from 'vite-plugin-inspect';
import { inkline } from './src/vite';
import { resolve } from 'path';

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        inspect(),
        ...inkline({
            outputDir: resolve(__dirname, 'src/playground/css/config')
        })
    ],
    test: {
        globals: true,
        environment: 'jsdom',
        exclude: [...configDefaults.exclude, 'lib/**']
    }
});
