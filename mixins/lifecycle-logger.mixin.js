export default {
  created() {
    console.log(`${this.$options.name} created`);
  },
  destroyed() {
    console.log(`${this.$options.name} destroyed`);
  },
};
