<template>
  <!-- Search Area -->
  <div class="search-wrap">
    <h2 class="search-head">Kai Journal</h2>
    <div class="search-form">
      <!-- <div class="help-center"> -->
      <input
        type="text"
        class="search-input"
        placeholder="please input the key words..."
        v-model="keywords"
        v-on:keyup.enter="goKindSearch()"
      />
      <button class="search-btn" @click="goKindSearch()">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="22"
          height="22"
          fill="currentColor"
          viewBox="0 0 16 16"
        >
          <path
            d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"
          />
        </svg>
      </button>
      <!-- </div> -->
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      keywords: "",
    };
  },
  methods: {
    goKindSearch: function () {
      this.$router.push("/kind/search/" + this.keywords);
    },
  },
};
</script>

<style scope>
/* 搜索框盒子 */
.search-wrap {
  width: 100%;
  height: 250px;
  background-image: url("../assets/journal.jpeg");
}
/* 搜索框标题 */
.search-head {
  margin-bottom: 20px;
  padding-top: 80px;
  color: white;
  text-align: center;
}
/* 搜索输入区 */
.search-form {
  text-align: center;
  font-size: 0;
}
/* 辅助居中包裹元素 */
/* .help-center {
  width: 40%;
  margin: 0 auto;
} */
.search-input {
  display: inline-block;
  height: 48px;
  width: 40%;
  min-width: 200px;
  border: none;
  border-radius: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 0px;
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 0px;
  text-indent: 20px;
  font-size: 20px;
  outline: none;
  vertical-align: top;
}
input::-webkit-input-placeholder {
  color: rgb(199, 197, 197);
}
/*搜索按钮*/
.search-btn {
  background-color: white;
  height: 48px;
  width: 50px;
  border: none;
  border-radius: 0;
  border-top-right-radius: 4px;
  border-bottom-right-radius: 4px;
  outline: none;
}
@media (max-width: 800px) {
  /* .help-center {
    width: 60%;
    margin: 0 auto;
  } */
  .search-input {
    font-size: 16px;
  }
  /* .search-btn {
  } */
}
</style>
