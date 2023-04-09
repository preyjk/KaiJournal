<template>
  <div id="app">
    <!-- Home -->
    <keep-alive>
      <router-view name="Home" />
    </keep-alive>
    <!-- Help -->
    <router-view name="Help" />
    <!-- Profile -->
    <router-view name="Profile" />
    <!-- Journal Detail -->
    <router-view name="JournalBuy" />
    <!-- Journal Category -->
    <router-view name="Kind"></router-view>
    <!-- Pay -->
    <router-view name="alipay"></router-view>
    <!-- Order -->
    <router-view name="Order"></router-view>
    <!-- <button @click="show">test</button> -->
  </div>
</template>

<script>
export default {
  name: "App",
  // methods: {
  //   show() {
  //     console.log(this.$store.state.user_id);
  //   },
  // },
};
</script>

<style></style>
