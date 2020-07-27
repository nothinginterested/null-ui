import Button from './src/Button/button'
import Icon from './src/icon'
import ButtonGroup from './src/Button/button-group'
import TabsHead from './src/Tabs/tabs-head'
import TabsItem from './src/Tabs/tabs-item'
import TabsPane from './src/Tabs/tabs-pane'
import TabsBody from './src/Tabs/tabs-body'
import Tabs from './src/Tabs/tabs'

export default {
    install(Vue) {
        Vue.component('lButton', Button)
        Vue.component('l-tabs', Tabs)
        Vue.component('l-tabs-head', TabsHead)
        Vue.component('l-tabs-item', TabsItem)
        Vue.component('l-tabs-body', TabsBody)
        Vue.component('l-tabs-pane', TabsPane)

    }
}
