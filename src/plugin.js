import Toast from './toast'

export default {

    install(vm, option) {
        vm.prototype.$toast = function (message) {
            let Constructor = vm.extend(Toast)
            let toast = new Constructor()
            toast.$slots.default = [message]
            console.log(toast.$slots.default);
            toast.$mount()
            document.body.appendChild(toast.$el)
            console.log(toast.$el);
        }
    }


}