import { ViteImageOptimizer } from 'vite-plugin-image-optimizer';

export default {
  plugins: [
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
