const inputComponent = {
  template: `<input
              :placeholder="placeholder"
              class="input is-small" type="text" />`,
  props: ['placeholder']
}

new Vue({
  el: '#app',
  data: {
    notes: [],
    timestamps: [],
    placeholder: 'Enter a note'
  },
  components: {
    'input-component': inputComponent
  }
})
