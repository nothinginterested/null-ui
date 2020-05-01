import Toast from './toast'

export default {


    install(vm, option) {
        let currentToast;
        vm.prototype.$toast = function (message, toastOptions) {
            if (currentToast) {
                currentToast.close()
            }
            currentToast = createToast(vm, message, toastOptions)

        }

    }


}

function createToast(vm, message, toastOptions) {
    let Constructor = vm.extend(Toast)
    let toast = new Constructor(
        {
            propsData: toastOptions
        }
    )
    toast.$slots.default = [message]
    toast.$mount()
    document.body.appendChild(toast.$el)
    return toast
}
