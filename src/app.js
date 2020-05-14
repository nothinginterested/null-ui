import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Plugin from './plugin'
import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'
import TabsBody from './tabs-body'
import Popover from './Popover'
import Collapse from "./Collapse";
import CollapseItem from './Collapse-item'
import Cascader from './cascader'
Vue.component('g-button', Button);
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.component('g-tabs', Tabs)
Vue.component('g-tabs-head', TabsHead)
Vue.component('g-tabs-pane', TabsPane)
Vue.component('g-tabs-body', TabsBody)
Vue.component('g-tabs-item', TabsItem)
Vue.component('g-popover', Popover)
Vue.component('g-collapse', Collapse)
Vue.component('g-collapse-item', CollapseItem)
Vue.component('g-cascader', Cascader)
Vue.use(Plugin);
new Vue({
    el: '#app',
    data: {
        message: "hello",
        loading1: false,
        selectedTab: 'man',
        selected: '1',
        single: true,
        data: [
            {
                value: '广东',
                children: [{
                    value: '珠海',
                    children: [{
                        value: '香洲'
                    }]
                }]
            },
            {
                value: '浙江',
                children: [{
                    value: '杭州'
                }]
            }
        ]


    }


})



