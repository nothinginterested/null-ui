import Toast from './toast'

export default {

    install(vm, option) {
        vm.prototype.$toast = function (message, propsCloseButton) {
            let Constructor = vm.extend(Toast)
            let toast = new Constructor(
                {
                    propsData: {
                        closeButton: propsCloseButton.closeButton
                    }
                }
            )
            toast.$slots.default = [message]
            toast.$mount()
            document.body.appendChild(toast.$el)
        }
    }


}