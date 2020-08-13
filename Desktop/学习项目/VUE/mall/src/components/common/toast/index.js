import Toast from "./Toast";

const obj = {}

obj.install = function (Vue) {

  // 1.创建组件构造器
  const toastContrustor = Vue.extend(Toast)

  // 2.new的方式，根据组件构造器，可以创建出来一个自建对象
  const toast = new toastContrustor()

  // 3.将组件对象，手动挂载到某一个元素上
  toast.$mount(document.createElement('div'))

  // 4.toast.$el 对应的就是div
  document.body.appendChild(toast.$el)

  // 5.挂载到Vue实例上，可以通过 this.$toast 访问属性，方法
  Vue.prototype.$toast = toast
}

export default obj    // 导出后，在main.js 中导入，并且注册