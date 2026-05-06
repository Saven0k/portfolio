
export default defineConfig({
  plugins: [react()],
  base: '/portfolio/', 
  server: {
    port: 3000,
    open: true
  }
})