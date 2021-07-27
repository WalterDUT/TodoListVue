<template>
  <header class="header" id="todos-input">
    <h1>{{ title }}</h1>
    <input
      class="new-todo"
      @keyup.enter="create"
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
    create(ev) {
      this.$emit("createTodo", ev.target.value);
      ev.target.value = "";
    },
  },
  props: {
    title: { type: String, default: "d todos" },
  },
};
</script>