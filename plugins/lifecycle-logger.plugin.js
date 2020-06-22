const switchers = {
  created: true,
  destroyed: true,
};

export default {
  install(Vue, options) {
    
    //Vue.globalMethod = function () {};

    //Vue.directive("directive", {});

    //Vue.prototype.$method = function (methodOptions) {};

    Object.assign(switchers, options);

    Vue.mixin({
      created() {
        if (switchers.created) {
          console.log(`${this.$options.name} created`);
        }
      },
      destroyed() {
        if (switchers.destroyed) {
          console.log(`${this.$options.name} destroyed`);
        }
      }
    });
  }
};
