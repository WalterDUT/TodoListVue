<template>
  <div id="app">
    <todos-input :title="title" @createTodo="createTodoHandler" />
    <todos-list :todos="todos" @deleteTodo="deleteTodoHandler" />
  </div>
</template>

<script>
import TodosInput from "./components/TodosInput.vue";
import TodosList from "./components/TodosList";
export default {
  name: "app",
  components: {
    "todos-input": TodosInput,
    "todos-list": TodosList,
  },
  data() {
    return {
      title: "my todos",
      todos: [
        { id: 1, title: "Taste JavaScript", isCompleted: true },
        { id: 2, title: "Buy a unicorn", isCompleted: false },
      ],
    };
  },
  methods: {
    createTodoHandler(todoTitle) {
      if (todoTitle) {
        this.todos.push({
          id: this.todos.length + 1,
          title: todoTitle,
          isCompleted: false,
        });
      }
    },
    deleteTodoHandler(todo) {
      this.todos.splice(this.todos.indexOf(todo), 1);
    },
  },
};
</script>  
