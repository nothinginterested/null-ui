import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Plugin from './plugin'
import Tabs from './Tabs/tabs'
import TabsHead from './Tabs/tabs-head'
import TabsItem from './Tabs/tabs-item'
import TabsPane from './Tabs/tabs-pane'
import TabsBody from './Tabs/tabs-body'
import Popover from './Popover'
import Collapse from "./Collapse";
import CollapseItem from './Collapse-item'
import Cascader from './cascader'
import Register from "./Register";
import Switch from './Switch/Switch'
import './index.scss'

Vue.component('g-switch', Switch)
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
Vue.component('g-register', Register)
import ElementUI from 'element-ui';
import 'element-ui/lib/theme-chalk/index.css';

Vue.use(ElementUI)
Vue.use(Plugin);
new Vue({
    el: '#app',
    data: {
        message: "hello",
        loading1: false,
        selectedTab: 'man',
        selected: '1',
        single: true,
        value: false

    }


})



