import { defineConfig } from 'tsup';

export default defineConfig({
  clean: true,
  dts: true,
  entry: ['index.ts'],
  external: ['react', 'react-dom'],
  format: ['esm', 'cjs'],
  outDir: 'dist',
  sourcemap: true,
  splitting: false,
  target: 'es2020',
  treeshake: true,
});
