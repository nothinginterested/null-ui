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
Vue.use(Plugin);
new Vue({
    el: '#app',
    data: {
        message: "hello",
        loading1: false,
        selectedTab: 'man'
    },
    mounted() {

    },
    methods: {
        yyy() {
            console.log('yyy');
        },
        showToast1() {
            this.showToast('middle')
        },
        showToast2() {
            this.showToast('bottom')
        },
        showToast(pos) {
            console.log('lala');
            this.$toast('知道了知道了', {
                closeButton: {
                    text: '知道了知道',
                    callback: () => {
                        console.log('发生回调');
                    },

                }, position: pos,
                autoClose: false
            })
        }
    }


})



