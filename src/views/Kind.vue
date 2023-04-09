<template>
  <div>
    <navbar></navbar>
    <crumbs :kind="columnKind" class="crumbs"></crumbs>
    <journal-panel :column-kind="columnKind"></journal-panel>
  </div>
</template>

<script>
import Crumbs from "@/components/Nav/Crumbs.vue";
import Navbar from "@/components/Nav/Navbar.vue";
import JournalPanel from "@/components/JournalPanel.vue";

export default {
  data() {
    return {
      columnKind: {
        type: "",
        value: "",
      },
      cover: "http://127.0.0.1:900/cover",
    };
  },
  components: { Navbar, Crumbs, JournalPanel },
  beforeMount() {
    this.columnKind = {
      type: this.$route.params.type,
      value: this.$route.params.value,
    };
  },
  watch: {
    $route(to, from) {
      // 路由变化时，改变监听参数，不然由于路由中组件不变，不会重新渲染
      if (
        to.params.type !== from.params.type ||
        to.params.value !== from.params.value
      ) {
        this.columnKind = {
          type: to.params.type,
          value: to.params.value,
        };
      }
    },
  },
  beforeRouteUpdate(to, from, next) {
    // 在当前路由改变，但是该组件被复用时调用
    // 举例来说，对于一个带有动态参数的路径 /foo/:id，在 /foo/1 和 /foo/2 之间跳转的时候，
    // 由于会渲染同样的 Foo 组件，因此组件实例会被复用。而这个钩子就会在这个情况下被调用。
    // 可以访问组件实例 `this`
    document.title = "journal category content: " + to.params.name;
    next();
  },
};
</script>

<style scope>
* {
  margin: 0;
}

.crumbs {
  margin-top: 50px;
}
</style>
