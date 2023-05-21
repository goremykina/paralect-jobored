import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import svgReact from 'vite-plugin-svgr';

// https://vitejs.dev/config/
export default defineConfig(({ command }) => {
  const config = {
    base: '/',
    plugins: [
      react(),
      svgReact({
        exportAsDefault: true,
        include: "./src/assets/**/*.svg",
      })
    ]
  };

  if (command !== 'serve') {
    config.base = '/paralect-jobored/';
  }

  return config;
});
