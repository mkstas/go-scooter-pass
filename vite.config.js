import Inspect from 'vite-plugin-inspect';
import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
    Inspect(),
    ViteImageOptimizer({
      png: {
        quality: 100,
      },
      jpg: {
        quality: 80,
      },
    }),
  ],
};
