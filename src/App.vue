<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png" width="25%" />
    <HelloWorld msg="Hello Vue in CodeSandbox!" />
  </div>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",
  components: {
    HelloWorld,
  },
  el: "#signup-form",
  data: function () {
    return {
      isVisible: false,
      email: "",
    };
  },
  methods: {
    submit: function () {
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: { email: this.email },
      })
        .then((resp) => {
          this.isVisible = true;
          this.email = "";
        })
        .catch((err) => console.err("error:", err));
    },
  },
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
