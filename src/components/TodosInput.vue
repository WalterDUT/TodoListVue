<template>
  <header class="header">
    <h1>{{ title }}</h1>
    <input
      class="new-todo"
      @keyup.enter="createTodo"
      placeholder="What needs to be done?"
      autofocus
    />
  </header>
</template>

<script>
export default {
  name: "todos-input",
  components: {},
  methods: {
    createTodo(ev) {
      this.$emit("createTodo", ev.target.value);
      ev.target.value = "";
    },
  },
};
</script>  