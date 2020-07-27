---
title:tabs
---

# Tabs

## 基本用法

<Common-Democode title="" description="">
  
  <tabs-demo1 />
  <highlight-code slot="codeText" lang="vue">
    <template>
         <l-tabs :selected.sync="selectedTab" >
             <l-tabs-head>
                 <template slot="action">
                     <l-button>设置</l-button>
                 </template>
                 <l-tabs-item name="woman">
                     woman
                 </l-tabs-item>
                 <l-tabs-item name="man">
                     man
                 </l-tabs-item>
                 <l-tabs-item name="fuck">
                     fuck
                 </l-tabs-item>
             </l-tabs-head>
             <l-tabs-body>
                 <l-tabs-pane name="woman">
                     woman相关
                 </l-tabs-pane>
                 <l-tabs-pane name="man">
                     man相关
                 </l-tabs-pane>
                 <l-tabs-pane name="fuck">
                     fuck相关
                 </l-tabs-pane>
             </l-tabs-body>
         </l-tabs>
     </template>
     <script>
      export default {
              data() {
                return {
                  selectedTab: 'woman'
                }
              },
              created() {
                console.log('jjjjj')
              }
            }
   </script>
  </highlight-code>
</Common-Democode>
