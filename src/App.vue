<!-- <template>
    <div id="app">
        <router-link :to="{path: '/'}">Home</router-link>
        <router-link :to="{path: '/about'}">About</router-link>
        <router-view />
        <div>hello</div>
    </div>
</template> -->

<template>
  <div id="app">
    <div>{{ count }}</div>
    <button @click="clickBtn">点击</button>
  </div>
</template>

<script>
export default {
  name: "App",
  data() {
    return {
      count: 1,
      show: false
    };
  },
  components: {
  },
  methods:{
    clickBtn() {
      this.count++;
      this.show = !this.show;
      console.log('ppm ', this.show);
    }
  }
};
</script>

<style lang="less" scoped>
@rem: 200rem;
#app {
  text-align: center;
  color: #2c3e50;
}
</style>

