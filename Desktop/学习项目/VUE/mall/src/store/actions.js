export default {
  addCart(context, payload) {
    return new Promise(((resolve, reject) => {
      let product = context.state.cartList.find(item => item.iid === payload.iid)
      if (product) {
        context.commit('addCounter', product)
        resolve('当前的商品数量+1')
      } else {
        payload.count = 1
        payload.checked = true
        context.state.cartList.push(payload)
        resolve('添加了新商品')
      }
    }))
  }
}