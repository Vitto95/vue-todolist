const app = new Vue({
  el: "#app",
  data: {
    alertMsg: "Attenzione, stringa non valida",
    alertStatus: false,
    newTask: "",
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
      if (this.todos[index].checked) {
        this.todos.splice(index, 1);
      }
    },
    addTask() {
      if (this.newTask.length > 2) {
        this.todos.push({ text: this.newTask, checked: false });
        this.alertStatus = false;
        this.newTask = "";
      } else {
        this.alertStatus = true;
      }
    },
  },
});
