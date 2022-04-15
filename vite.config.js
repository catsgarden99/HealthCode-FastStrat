import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import styleImport from 'vite-plugin-style-import'
import  legacy  from  '@vitejs/plugin-legacy' 

export default {
  plugins: [
    vue(),
    styleImport({
      libs: [
        {
          libraryName: 'vant',
          esModule: true,
          resolveStyle: (name) => `vant/es/${name}/style`,
        },
      ],
    }),
    legacy ( { 
      targets : [ 'defaults' ,  'not IE 11' ] 
    } ), 
  ],
  base:'./'
};