import dts from 'bun-plugin-dts';

await Bun.build({
  entrypoints: ['./src/index.ts'],
  outdir: './dist',
  minify: {
    identifiers: false,
    syntax: true,
    whitespace: true,
  },
  format: 'esm',
  sourcemap: 'external',
  plugins: [dts()],
});
