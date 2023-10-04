import Inspect from 'vite-plugin-inspect';
import checker from 'vite-plugin-checker';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    Inspect(),
    checker({
      typescript: true,
    }),
    ViteImageOptimizer({
      png: {
        quality: 80,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
};
