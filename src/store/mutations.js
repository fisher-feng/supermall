export default {

  // mutationsz中的每个方法
  addCounter(state, payload) {
    payload.count++;

  },
  addToCart(state, payload) {
    payload.checked = true;
    state.Cartlist.push(payload);

  }

}