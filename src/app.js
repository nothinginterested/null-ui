import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Plugin from './plugin'
Vue.component('g-button', Button);
Vue.component('g-icon', Icon)
Vue.component('g-button-group', ButtonGroup)
Vue.component('g-input', Input)
Vue.component('g-row', Row)
Vue.component('g-col', Col)
Vue.use(Plugin);
new Vue({
    el: '#app',
    data: {
        message: "hello",
        loading1: false
    },
    mounted() {

    },
    methods: {
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



