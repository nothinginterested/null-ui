const expect = chai.expect;
import Vue from 'vue'
import Input from '../src/input'

Vue.config.productionTip = false
Vue.config.devtools = false

describe('Input', () => {
  it('存在.', () => {
    expect(Input).to.be.ok
  })
  it('可以传value.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        value: '12334'
      }
    }).$mount()
    const InputElement = vm.$el.querySelector('input')
    expect(InputElement.value).to.equal('12334')
    vm.$destroy()
  })
  it('可以传disabled.', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        disabled: true
      }
    }).$mount()
    const InputElement = vm.$el.querySelector('input')
    expect(InputElement.disabled).to.equal(true)
    vm.$destroy()
  })
  it('可以传readonly', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        readonly: true
      }
    }).$mount()
    const InputElement = vm.$el.querySelector('input')
    expect(InputElement.readOnly).to.equal(true)
    vm.$destroy()
  })
  it('可以设置error', () => {
    const Constructor = Vue.extend(Input)
    const vm = new Constructor({
      propsData: {
        error: 'error'
      }
    }).$mount()
    const useElement = vm.$el.querySelector('use')
    expect(useElement.getAttribute('xlink:href')).to.equal('#icon-error')
    const ErrorMessage = vm.$el.querySelector('span')
    console.log(ErrorMessage.innerText);
    expect(ErrorMessage.innerText).to.equal('error')
    vm.$destroy()
  })

  describe('event', () => {

    it('change/blur/focus/input event', () => {
      ['change', 'blur', 'focus', 'input'].forEach((eventName) => {
        const Constructor = Vue.extend(Input)
        const vm = new Constructor({}).$mount()
        const callback = sinon.fake()
        vm.$on(eventName, callback)
        let event = new Event(eventName)
        Object.defineProperty(event, 'target', {value: {value: 'hi'}, enumerable: false})
        let inputElement = vm.$el.querySelector('input')
        inputElement.dispatchEvent(event)

        expect(callback).to.have.been.calledWith('hi')
        vm.$destroy()
      })


    })


  });


})