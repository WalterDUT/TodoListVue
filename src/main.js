import Vue from "vue";
import App from "./App.vue";

Vue.config.productionTip = false;

new Vue({
  render: (h) => h(App),
  el: "#signup-form",
  data: function () {
    return {
      isVisible: false,
      email: ""
    };
  },
  methods: {
    submit: function () {
      fetch("https://httpbin.org/post", {
        method: "POST",
        body: { email: this.email }
      })
        .then((resp) => {
          this.isVisible = true;
          this.email = "";
        })
        .catch((err) => console.err("error:", err));
    }
  }
}).$mount("#app");
