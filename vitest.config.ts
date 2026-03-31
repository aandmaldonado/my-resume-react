import { defineConfig } from 'vitest/config'
import react from '@vitejs/plugin-react'
import path from 'path'

export default defineConfig({
    plugins: [react()],
    test: {
        globals: true,
        environment: 'jsdom',
        setupFiles: './setupTests.ts',
        include: ['**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}'],
        coverage: {
            provider: 'v8',
            reporter: ['text', 'json', 'html'],
            include: ['lib/**', 'components/chatbot/**'],
            exclude: ['**/*.test.ts', '**/*.test.tsx', 'setupTests.ts', 'vitest.config.ts'],
            thresholds: {
                lines: 85,
                functions: 85,
                branches: 85,
                statements: 85
            }
        },
    },
    resolve: {
        alias: {
            '@': path.resolve(__dirname, './'),
        },
    },
})
