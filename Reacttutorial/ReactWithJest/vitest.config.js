import { defineConfig } from 'vite';

export default defineConfig({
    test:{
        globals:true,
        environment:'jsdom',
        setupFiles:'./src/Test/setup.js',
        css:true,
    }
})