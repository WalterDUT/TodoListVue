<template>
  <todos-input :title="title" @createTodo="createTodoHandler" />
</template>

<script>
import TodosInput from "./components/TodosInput";
import TodosList from "./components/TodosList";
import TodosActions from "./components/TodosActions";
export default {
  name: "",
  components: {
    TodosInput,
    // TodosList,
    // TodosActions,
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
  // props: {
  //   title: {
  //     type: String,
  //   },
  // },
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
  },
};
</script>  
