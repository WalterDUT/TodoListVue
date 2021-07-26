<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
    <form method="post" action="#" @submit.prevent="submit" />
    <input
      type="email"
      name="email"
      id="email"
      placeholder="Email Address"
      required
      v-model="email"
    />
    <span class="message success" :class="{ visible: isVisible }"
      >Thank you!</span
    >
  </div>
</template>

<script>
export default {
  name: "HelloWorld",
  props: {
    msg: String,
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h3 {
  margin: 40px 0 0;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
