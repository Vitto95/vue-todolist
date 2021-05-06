const app = new Vue({
  el: "#app",
  data: {
    todos: [
      {
        text: "Lavare i piatti",
        checked: false,
      },
      {
        text: "Fare la spesa",
        checked: false,
      },
      {
        text: "Dare da mangiare a Sally",
        checked: true,
      },
      {
        text: "Tagliare il prato",
        checked: false,
      },
    ],
  },
  methods: {
    removeObj(index) {
      this.todos.splice(index, 1);
    },
  },
});
