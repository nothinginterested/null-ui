---
title:switch
---

# Switch

## 基本用法

<Common-Democode title="" description="按钮有四种类型：主按钮、次按钮、虚线按钮、危险按钮。主按钮在同一个操作区域最多出现一次。">
<switch-Switch />
<highlight-code slot="codeText" lang="vue">
        <template>
          <l-switch v-model="value"></l-switch>
        </template>
        <script>
        export default {
          name: 'Switch',
          data(){
            return {
              value: false
            }
          }
        };
        </script>
</highlight-code>
</Common-Democode>
