// vite.config.js
import { defineConfig } from "file:///C:/Users/2017i/OneDrive/Ambiente%20de%20Trabalho/PI/storytail/ebooks-website-master/node_modules/vite/dist/node/index.js";
import react from "file:///C:/Users/2017i/OneDrive/Ambiente%20de%20Trabalho/PI/storytail/ebooks-website-master/node_modules/@vitejs/plugin-react/dist/index.mjs";
var vite_config_default = defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://openlibrary.org",
        // The API server
        changeOrigin: true,
        // Ensures the origin header is changed to match the target
        secure: true,
        // Ensures the request uses HTTPS
        rewrite: (path) => path.replace(/^\/api/, "")
        // Removes the /api prefix
      }
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwyMDE3aVxcXFxPbmVEcml2ZVxcXFxBbWJpZW50ZSBkZSBUcmFiYWxob1xcXFxQSVxcXFxzdG9yeXRhaWxcXFxcZWJvb2tzLXdlYnNpdGUtbWFzdGVyXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ZpbGVuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFwyMDE3aVxcXFxPbmVEcml2ZVxcXFxBbWJpZW50ZSBkZSBUcmFiYWxob1xcXFxQSVxcXFxzdG9yeXRhaWxcXFxcZWJvb2tzLXdlYnNpdGUtbWFzdGVyXFxcXHZpdGUuY29uZmlnLmpzXCI7Y29uc3QgX192aXRlX2luamVjdGVkX29yaWdpbmFsX2ltcG9ydF9tZXRhX3VybCA9IFwiZmlsZTovLy9DOi9Vc2Vycy8yMDE3aS9PbmVEcml2ZS9BbWJpZW50ZSUyMGRlJTIwVHJhYmFsaG8vUEkvc3Rvcnl0YWlsL2Vib29rcy13ZWJzaXRlLW1hc3Rlci92aXRlLmNvbmZpZy5qc1wiO2ltcG9ydCB7IGRlZmluZUNvbmZpZyB9IGZyb20gJ3ZpdGUnXG5pbXBvcnQgcmVhY3QgZnJvbSAnQHZpdGVqcy9wbHVnaW4tcmVhY3QnXG5cbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXG5leHBvcnQgZGVmYXVsdCBkZWZpbmVDb25maWcoe1xuICBwbHVnaW5zOiBbcmVhY3QoKV0sXG4gIHNlcnZlcjoge1xuICAgIHByb3h5OiB7XG4gICAgICAnL2FwaSc6IHtcbiAgICAgICAgdGFyZ2V0OiAnaHR0cHM6Ly9vcGVubGlicmFyeS5vcmcnLCAvLyBUaGUgQVBJIHNlcnZlclxuICAgICAgICBjaGFuZ2VPcmlnaW46IHRydWUsIC8vIEVuc3VyZXMgdGhlIG9yaWdpbiBoZWFkZXIgaXMgY2hhbmdlZCB0byBtYXRjaCB0aGUgdGFyZ2V0XG4gICAgICAgIHNlY3VyZTogdHJ1ZSwgLy8gRW5zdXJlcyB0aGUgcmVxdWVzdCB1c2VzIEhUVFBTXG4gICAgICAgIHJld3JpdGU6IChwYXRoKSA9PiBwYXRoLnJlcGxhY2UoL15cXC9hcGkvLCAnJyksIC8vIFJlbW92ZXMgdGhlIC9hcGkgcHJlZml4XG4gICAgICB9LFxuICAgIH0sXG4gIH0sXG59KVxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUFtYixTQUFTLG9CQUFvQjtBQUNoZCxPQUFPLFdBQVc7QUFHbEIsSUFBTyxzQkFBUSxhQUFhO0FBQUEsRUFDMUIsU0FBUyxDQUFDLE1BQU0sQ0FBQztBQUFBLEVBQ2pCLFFBQVE7QUFBQSxJQUNOLE9BQU87QUFBQSxNQUNMLFFBQVE7QUFBQSxRQUNOLFFBQVE7QUFBQTtBQUFBLFFBQ1IsY0FBYztBQUFBO0FBQUEsUUFDZCxRQUFRO0FBQUE7QUFBQSxRQUNSLFNBQVMsQ0FBQyxTQUFTLEtBQUssUUFBUSxVQUFVLEVBQUU7QUFBQTtBQUFBLE1BQzlDO0FBQUEsSUFDRjtBQUFBLEVBQ0Y7QUFDRixDQUFDOyIsCiAgIm5hbWVzIjogW10KfQo=
