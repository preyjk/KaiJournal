<template>
  <div class="crumbs">
    <ul>
      <li>
        <router-link to="/">Home</router-link>
      </li>
      <!-- <li>
        <span>&nbsp;>&nbsp;</span>
        <a @click="goKind()">{{ kindCN }}</a>
      </li> -->
      <li v-for="(crumb, index) in crumbs" :key="index">
        <span>&nbsp;>&nbsp;</span>
        <a @click="goKind()">{{ crumb.value }}</a>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    kind: Object,
  },
  computed: {
    crumbs() {
      if (this.kind.type == "search") {
        return [{ value: "search" }, { value: this.kind.value }];
      } else if (
        this.kind.type == "journalKind" &&
        this.kind.value == "fansion"
      ) {
        return [{ value: "fansion" }];
      } else if (
        this.kind.type == "journalKind" &&
        this.kind.value == "economic"
      ) {
        return [{ value: "economic" }];
      } else if (
        this.kind.type == "journalKind" &&
        this.kind.value == "sport"
      ) {
        return [{ value: "sport" }];
      } else if (this.kind.type == "journalKind" && this.kind.value == "game") {
        return [{ value: "game" }];
      } else if (this.kind.type == "journalName") {
        return [{ value: this.kind.value }];
      } else if (this.kind.type == "location") {
        return [{ value: this.kind.value }];
      } else if (this.kind.type == "publishTime") {
        return [{ value: this.kind.value }];
      } else if (this.kind.type == "language") {
        return [{ value: this.kind.value }];
      }
    },
  },
  methods: {
    goKind() {
      // prevent go to the same router duplicate times
      if (
        this.$route.path !==
        "/kind/" + this.kind.type + "/" + this.kind.value
      ) {
        this.$router.push("/kind/" + this.kind.type + "/" + this.kind.value);
      }
    },
  },
};
</script>

<style scope>
.crumbs {
  height: 40px;
  /* background-color: rgb(246, 245, 245); */
  padding-left: 120px;
}

/* .crumbs ul { */
/* margin-left: 20px; */
/* } */

.crumbs ul li {
  display: inline-block;
  list-style: none;
  line-height: 40px;
}

.crumbs ul li a,
.crumbs ul li span {
  color: gray;
  text-decoration: none;
}

.crumbs ul li a:hover {
  color: rgb(97, 97, 224);
}
</style>
